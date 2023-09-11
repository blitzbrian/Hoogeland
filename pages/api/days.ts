import type { NextApiRequest, NextApiResponse } from 'next'

function dateToFormat(date: Date) {
  return date.toLocaleDateString('zh')
  // yyyy/mm/dd
    .replaceAll('/', '-');
  // yyyy-mm-dd
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.cookies;
  
  if(!body.userId || !body.token) {
    res.status(400).json({ success: false, error: 'Missing user id or auth token' });
    return;
  }

  const from = req.body.date ? new Date(req.body.date) : new Date();

  const to = new Date(from.getTime() + /* A Week */ 604800000);
  
  let response = await fetch(`https://isw.magister.net/api/personen/${body.userId}/afspraken?status=1&tot=${dateToFormat(to)}&van=${dateToFormat(from)}`, {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "nl,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
      "authorization": body.token,
      "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Microsoft Edge\";v=\"116\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin"
    },
    "referrer": "https://isw.magister.net/magister/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  });

  let data = await response.json();

  
  if(data === "Invalid Operation" || data === "SecurityToken Expired") {  
    res.status(401).json({ success: false, error: data }); 
    return;
  }

  let days: any[] = [];

  data.Items.forEach((item: any) => {
    let day = days.find(entry => {
      if(!entry?.day) return false;
      else return (new Date(entry.day).toDateString() === new Date(item.Start).toDateString());
    });

    if (!day) {
      days.push({
        day: new Date(item.Start).toDateString(),
        subjects: [],
      });
    }
    // Find the day again (either the existing one or the newly created one)
    day = days.find(entry => {
      if(!entry?.day) return false;
      else return (new Date(entry.day).toDateString() === new Date(item.Start).toDateString());
    });

    item.Start = new Date(item.Start).getTime();
    item.Einde = new Date(item.Einde).getTime();
    
    day.subjects.push(item);
  });

  days = days.map(day => {
    let smallBreak1 = false;
    let bigBreak = false;
    let smallBreak2 = false;

    day.subjects = day.subjects?.map((subject: any, i: number) => {

      const subjects = day.subjects
      const hour = subject.LesuurVan;
      const location = parseInt(subject.Lokatie);

      if (hour === NaN || location === NaN) return subject;
      if (hour < 3 || hour > 8) return subject;
      const smallBreak = () => {
        subject.break = true
        subject.breakStart = subjects[i - 1]?.Einde
        subject.breakEnd = subject.Start
      }
      const bigBreakFn = () => {
        bigBreak = true
        subject.bigBreak = true
        subject.breakStart = subjects[i - 1]?.Einde
        subject.breakEnd = subject.Start
      }
      const isMinirooster = () => {
        const start = new Date(subject.Start);
        const end = new Date(subject.Einde);
        return (start.getMinutes() == end.getMinutes() && start.getHours() + 1 == end.getHours()) || 60 * start.getHours() + start.getMinutes() + 30 == 60 * end.getHours() + end.getMinutes();
      }

      const minirooster = isMinirooster();
      
      if (
        location == 7 ||
        location == 8 ||
        subject.Vakken[0].Naam == 'Lichamelijke opvoeding' ||
        (location >= 104 && location <= 127) ||
        (location >= 228 && location <= 258) ||
        (location >= 71 && location <= 82)
      ) {
        // Break flow 1  
        if (hour === 3 && !minirooster) {
          // Small Break
          smallBreak1 = true
          subject.Start += 900000
          smallBreak()
        }
        else if (hour === 5) {
          // Big Break
          subject.Start += 1800000
          bigBreakFn()
        }
        else if (hour === 7 && !minirooster) {
          // Small Break
          smallBreak2 = true
          subject.Start += 900000
          smallBreak()
        }
      }
      // Break flow 2  
      if (hour === 4 && !smallBreak1 && !minirooster) {
        // Small Break
        smallBreak1 = true
        if (subjects[i - 1]?.Einde) subjects[i - 1].Einde -= 900000
        smallBreak()
      }
      else if (hour === 6 && !bigBreak) {
        // Big Break
        if (subjects[i - 1]?.Einde) subjects[i - 1].Einde -= 1800000
        bigBreakFn()
      }
      else if (hour === 8 && !smallBreak2 && !minirooster) {
        // Small Break
        smallBreak2 = true
        if (subjects[i - 1]?.Einde) subjects[i - 1].Einde -= 900000
        smallBreak()
      }

      
      return subject;
    });
    
    return day;
  });
  
  res.status(200).json(days);
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
