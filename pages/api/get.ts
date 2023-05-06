import puppeteer from "puppeteer-core"
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);

  if(body.username == null || body.password == null || body.username === '' || body.password === '') {
    res.status(400).json({ error: 'Incorrecte inlog gegevens', success: false })
    return
  }

  const browser = await puppeteer.connect({ browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BROWSERLESS_KEY}`})


  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();

  // page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  
  await page.goto('https://isw.magister.net/magister/#/agenda')

  try {
    await page.waitForSelector('#username', { timeout: 3000 });
  } catch (err) {
    await browser.close()
    res.status(500).json({ error: 'Server Fout, Probeer het opnieuw', success: false })
    return
  }
  await page.type('#username', body.username)

  await page.click('#username_submit')

  try {
    await page.waitForSelector('#password', { timeout: 500 });
  } catch (err) {
    await browser.close()
    res.status(400).json({ error: 'Incorrecte inlog gegevens', success: false })
    return
  }
  await page.type('#password', body.password)

  await page.click('#password_submit')
  try {
    await page.waitForNavigation({ timeout: 1500 })
  } catch (err) {
    await browser.close()
    res.status(400).json({ error: 'Incorrecte inlog gegevens', success: false})
    return
  }
  
  try {
    await page.waitForSelector('#afsprakenLijst > div.k-grid-content > table > tbody > tr')
  } catch (err) {
    await browser.close()
    res.status(500).json( { error: 'De data duurde te lang om te laden', success: false } )
    return
  }
  
  const data = await page.evaluate(async (date) => {
    // You are going to see a lot of typescript ignores, because this isn't run in this scope.
    
    if(date != null) {
      // @ts-ignore
      const start = angular.element(document.querySelector(
            '#afsprakenLijst > div.k-grid-content > table > tbody > .k-grouping-row.ng-scope'
        )).scope().dataItem.value.toDateString()
      // @ts-ignore
      angular.element(document.querySelector('#calendar')).scope().ctrl.datePickerOnChange({ sender: { value: () => new Date(date) } })
      const wait = (resolve: (value: unknown) => void) => {
        // @ts-ignore
        if(angular.element(document.querySelector(
            '#afsprakenLijst > div.k-grid-content > table > tbody > .k-grouping-row.ng-scope'
        )).scope().dataItem.value.toDateString() != start) resolve(true);
        else setTimeout(() => wait(resolve), 100);
      }
      await new Promise(wait)
    }
    let data: any[] = [];
    let body = document.querySelector(
        '#afsprakenLijst > div.k-grid-content > table > tbody'
    );
    let days = body?.querySelectorAll('tr.k-grouping-row.ng-scope');
    days?.forEach((day) => {
        // @ts-ignore
        let dataItem = angular.element(day).scope().dataItem;
        // @ts-ignore
        dataItem.elements = $(day).nextUntil('.k-grouping-row.ng-scope');
        data.push(dataItem);
    });
    data = data.map((day) => {
      let parsedDay = {
        subjects: day.items,
        day: new Date(day.value).getTime(),
      };
      parsedDay.subjects = parsedDay.subjects.map((subject: any) => ({
        start: new Date(subject.beginString).getTime(),
        end: new Date(subject.eindString).getTime(),
        hour: subject.lesuur,
        title:
          subject.title.split('-').splice(0, 2).join('-') +
          (subject.locatie ? ('- ' +
            subject.locatie) : ''),
        location: subject.locatie,
        description: subject.vak,
        teacher: subject.docent,
        test: subject.isToets,
        homework: subject.huiswerk,
      }));
      return parsedDay;
    });
    data = data.map((day) => {
      let smallBreak1 = false
      let bigBreak = false
      let smallBreak2 = false
      day.subjects?.map((subject: any, i: number) => {
        const subjects = day.subjects
        const hour = parseInt(subject.hour)
        const location = parseInt(subject.location)
        if(hour === NaN || location === NaN) return
        if(hour < 3 || hour > 8) return
        const smallBreak = () => {
          subject.break = true
          subject.breakStart = subjects[i - 1]?.end
          subject.breakEnd = subject.start
        }
        const bigBreakFn = () => {
          bigBreak = true
          subject.bigBreak = true
          subject.breakStart = subjects[i - 1]?.end
          subject.breakEnd = subject.start
        }
        const minirooster = () => {
          const start = new Date(subject.start);
          const end = new Date(subject.end);
          return (start.getMinutes() == end.getMinutes() && start.getHours() + 1 == end.getHours()) || 60 * start.getHours() + start.getMinutes() + 30 == 60 * end.getHours() + end.getMinutes();
        }
        if(
          location == 7 ||
          location == 8 ||
          subject.description == 'Lichamelijke opvoeding' ||
          (location >= 104 && location <= 127) ||
          (location >= 228 && location <= 258)) {
          // Break flow 1  
          if(hour === 3 && !minirooster()) {
            // Small Break
            smallBreak1 = true
            subject.start += 900000
            smallBreak()
          }
          else if(hour === 5) {
            // Big Break
            subject.start += 1800000
            bigBreakFn()
          }
          else if(hour === 7 && !minirooster()) {
            // Small Break
            smallBreak2 = true
            subject.start += 900000
            smallBreak()
          }
        }
        // Break flow 2  
        if(hour === 4 && !smallBreak1 && !minirooster()) {
          // Small Break
          smallBreak1 = true
          subjects[i - 1].end -= 900000
          smallBreak()
        }
        else if(hour === 6 && !bigBreak) {
          // Big Break
          subjects[i - 1].end -= 1800000
          bigBreakFn()
        }
        else if(hour === 8 && !smallBreak2 && !minirooster()) {
          // Small Break
          smallBreak2 = true
          subjects[i - 1].end -= 900000
          smallBreak()
        }
        // const minirooster1locatie =
        //   (location >= 51 && location <= 88) ||
        //   (location >= 104 && location <= 127) ||
        //   (location >= 228 && location <= 258);
        // const minirooster2locatie =
        //   subject.description == 'lichamelijke opvoeding' ||
        //   (location >= 201 && location <= 227) ||
        //   (location >= 301 && location <= 330);
        // const miniroosterPauze1 = lesuur == 6 && minirooster1locatie && minirooster;
        // const miniroosterPauze2 =
        //   lesuur == 7 &&
        //   minirooster2locatie &&
        //   minirooster &&
        //   !subject.dontAllowStroom2;
        // else if (grotePauze2 && !minirooster) subjects[i - 1].end -= 1800000;
        // else if (
        //   minirooster &&
        //   (miniroosterPauze1 || miniroosterPauze2) &&
        //   new Date(subject.end).getMinutes() == new Date(subject.start).getMinutes()
        // )
        //   subject.start += 1800000;
        // else if (
        //   minirooster &&
        //   (miniroosterPauze1 || miniroosterPauze2) &&
        //   new Date(subjects[i - 1].end).getMinutes() ==
        //   new Date(subjects[i - 1].start).getMinutes()
        // )
        //   subjects[i - 1].end -= 1800000;
        // if (
        //   (((grotePauze1 || stroom1) && !minirooster) || miniroosterPauze1) &&
        //   subjects[i + 1]
        // )
        //   subjects[i + 1].dontAllowStroom2 = true;
        // if (
        //   !subject.dontAllowStroom2 &&
        //   lesuur == 8 &&
        //   subjects[i + 1] == null &&
        //   !minirooster
        // )
        //   subject.end -= 900000;
        // subject.pauze = (stroom1 || stroom2) && !minirooster;
        // subject.grotePauze =
        //   ((grotePauze1 || grotePauze2) && !minirooster) ||
        //   miniroosterPauze1 ||
        //   miniroosterPauze2;
        return subject;
      });
  
      return day;
    });
    
    return data;
  }, body?.date)

  res.status(200).json(data)
  
  await browser.close()
}