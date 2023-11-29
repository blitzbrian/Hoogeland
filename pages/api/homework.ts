import type { NextApiRequest, NextApiResponse } from 'next'
import { getDays } from './days'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(!req.cookies.userId || !req.cookies.token || !req.body) {
    res.status(400).json({ success: false, error: 'Missing user id or auth token' });
    return;
  }

  let subject = req.body;

  // Change these values back
  
  subject.Start = new Date(subject.Start).toISOString();
  subject.Einde = new Date(subject.Einde).toISOString();

  subject.break = undefined;
  subject.breakStart = undefined;
  subject.breakEnd = undefined;
  subject.type = undefined;
  subject.stroom = undefined;
  
  await fetch(`https://isw.magister.net/api/personen/${req.cookies.userId}/afspraken/${subject.Id}`, {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "nl,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
    "authorization": req.cookies.token,
    "content-type": "application/json;charset=UTF-8",
    "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Microsoft Edge\";v=\"116\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://isw.magister.net/magister/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": JSON.stringify(subject),
  "method": "PUT",
  "mode": "cors",
  });

  const days = await getDays(req.cookies.idsrv, req.cookies.userId, req.cookies.token);

  res.status(days.status).json(days.days);
}