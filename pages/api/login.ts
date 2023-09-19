// @ts-nocheck
import type { NextApiRequest, NextApiResponse } from 'next'

const headersToCookie = (headers) => {
	let cookies = {};
  if(!headers.get('set-cookie')) return {};
	headers
		.get('set-cookie')
    .split(',')
		.forEach((cookie) => {
			cookies[cookie.split(';')[0].split('=')[0].trim()] = cookie
				.split(';')[0]
				.split('=')[1];
		});
	return cookies;
};

const cookiesToHeader = (cookies) => {
	let header = '';
	for (let name in cookies) {
		let data = cookies[name];
		header += `${name}=${data}; `;
	}
	return header;
};

const generateState = () => {
  let state = "";
  const possible = "abcdefhijklmnopqrstuvwxyz";
  for (var i = 0; i < 16; i++) {
    state += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return state;
}

const generateNonce = () => {
  let state = "";
  const possible = "abcdef0123456789";
  for (var i = 0; i < 32; i++) {
    state += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return state;
}

interface Input {
  username: any,
  password: any
}

export async function login<Input> (username, password) {
  let cookies = {};

  // Begin Auth
  
	let res = await fetch(
		`https://accounts.magister.net/connect/authorize?client_id=M6-isw.magister.net&redirect_uri=https%3A%2F%2Fisw.magister.net%2Foidc%2Fredirect_callback.html&response_type=id_token%20token&scope=openid%20profile%20opp.read%20opp.manage%20attendance.overview%20calendar.ical.user%20calendar.to-do.user&state=${generateState()}&nonce=${generateNonce()}&acr_values=tenant%3Aisw.magister.net`,
		{
			headers: {
				accept:
					'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
				'accept-language': 'nl,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
				'sec-ch-ua':
					'"Chromium";v="116", "Not)A;Brand";v="24", "Microsoft Edge";v="116"',
				'sec-ch-ua-mobile': '?0',
				'sec-ch-ua-platform': '"Windows"',
				'sec-fetch-dest': 'document',
				'sec-fetch-mode': 'navigate',
				'sec-fetch-site': 'same-site',
				'upgrade-insecure-requests': '1',
			},
			body: null,
			method: 'GET',
      redirect: 'manual'
		}
	);

	cookies = headersToCookie(res.headers);

  
	res = await fetch(res.headers.get('location'), {
		headers: {
			accept:
				'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
			'accept-language': 'nl,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
			'sec-ch-ua':
				'"Chromium";v="116", "Not)A;Brand";v="24", "Microsoft Edge";v="116"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'sec-fetch-dest': 'document',
			'sec-fetch-mode': 'navigate',
			'sec-fetch-site': 'same-site',
			'upgrade-insecure-requests': '1',
			cookie: cookiesToHeader(cookies),
		},
		referrer: 'https://isw.magister.net/',
		referrerPolicy: 'strict-origin-when-cross-origin',
		body: null,
		method: 'GET',
		mode: 'cors',
    redirect: 'manual'
	});
  
	cookies = {
		...cookies,
		...headersToCookie(res.headers),
	};

  
	let url = new URL('https://accounts.magister.net' + res.headers.get('location'));
	let params = url.searchParams;

	const returnUrl = params.get('returnUrl');
	const sessionId = params.get('sessionId');

  // Hardcoded value in the api, it changes sometimes and then the api rejects all requests
  
	const authCode = 'd085f1';


	res = await fetch('https://accounts.magister.net' + res.headers.get('location'), {
		headers: {
			accept:
				'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
			'accept-language': 'nl,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
			'sec-ch-ua':
				'"Chromium";v="116", "Not)A;Brand";v="24", "Microsoft Edge";v="116"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'sec-fetch-dest': 'document',
			'sec-fetch-mode': 'navigate',
			'sec-fetch-site': 'same-site',
			'upgrade-insecure-requests': '1',
			cookie: cookiesToHeader(cookies),
		},
		referrer: 'https://isw.magister.net/',
		referrerPolicy: 'strict-origin-when-cross-origin',
		body: null,
		method: 'GET',
		mode: 'cors',
	});

	cookies = {
		...cookies,
		...headersToCookie(res.headers),
	};

  // Get Session
   
	res = await fetch('https://accounts.magister.net/challenges/current', {
		headers: {
			accept: 'application/json',
			'accept-language': 'nl,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
			'content-type': 'application/json',
			'sec-ch-ua':
				'"Chromium";v="116", "Not)A;Brand";v="24", "Microsoft Edge";v="116"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-origin',
			'x-xsrf-token': cookies['XSRF-TOKEN'],
			cookie: cookiesToHeader(cookies),
		},
		referrer: 'https://accounts.magister.net/',
		referrerPolicy: 'origin',
		body: JSON.stringify({
			authCode,
			returnUrl,
			sessionId,
		}),
		method: 'POST',
		mode: 'cors',
	});

  cookies = {
		...cookies,
		...headersToCookie(res.headers),
	};
  
	let data = await res.json();

  if(data.error === "AuthCodeValidation") {
    return { status: 500, success: false, error: 'Auth code out of date' } ;
    console.log('Auth code out of date!');
  };

  if(data.action !== 'username') return { status: 500, data, success: false };

  // Username
  
  res = await fetch("https://accounts.magister.net/challenges/username", {
    "headers": {
      "accept": "application/json",
      "accept-language": "nl,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
      "content-type": "application/json",
      "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Microsoft Edge\";v=\"116\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-xsrf-token": cookies['XSRF-TOKEN'],
      cookie: cookiesToHeader(cookies)
    },
    "referrer": "https://accounts.magister.net/",
    "referrerPolicy": "origin",
    "body": JSON.stringify({
      username,
      returnUrl,
      sessionId,
      authCode
    }),
    "method": "POST",
    "mode": "cors",
  });

  cookies = {
		...cookies,
		...headersToCookie(res.headers),
	};
  
  data = await res.json();

  if(data.error === "InvalidUsername") return { status: 400, success: false, error: 'Incorrecte inloggegevens' };

  // Password
  
  res = await fetch("https://accounts.magister.net/challenges/password", {
    "headers": {
      "accept": "application/json",
      "accept-language": "nl,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
      "content-type": "application/json",
      "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Microsoft Edge\";v=\"116\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-xsrf-token": cookies['XSRF-TOKEN'],
      cookie: cookiesToHeader(cookies)
    },
    "referrer": "https://accounts.magister.net/",
    "referrerPolicy": "origin",
    "body": JSON.stringify({
      password,
      returnUrl,
      sessionId,
      authCode,
      userWantsToPairSoftToken: false
    }),
    "method": "POST",
    "mode": "cors",
  });

  cookies = {
		...cookies,
		...headersToCookie(res.headers),
	};
  
  data = await res.json();

  if(data.error === "InvalidUsernameOrPassword") return { status: 400, success: false, error: 'Incorrecte inloggegevens' };
  
  res = await fetch('https://accounts.magister.net'+  data.redirectURL, {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "nl,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
      "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Microsoft Edge\";v=\"116\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      cookie: cookiesToHeader(cookies)
    },
    "referrer": "https://accounts.magister.net/",
    "referrerPolicy": "origin",
    "method": "GET",
    "mode": "cors",
    "redirect": "manual"
  });

  
  cookies = {
		...cookies,
		...headersToCookie(res.headers),
	};

  url = new URL(res.headers.get('location').replace('#', '?'));
	params = url.searchParams;

  const token = 'Bearer ' + params.get('access_token');

  // Get user id
  
  res = await fetch("https://isw.magister.net/api/account?noCache=0", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "nl,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
      "authorization": token,
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
  });

  cookies = {
    ...cookies,
    ...headersToCookie(res.headers)
  }
  
  data = await res.json();

  return {userId: data.Persoon?.Id, token, idsrv: cookies.idsrv, success: true, status: 200};
}

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if(!request.cookies.username || !request.cookies.password) {
    response.status(400).json({ error: 'Incorrecte inloggegevens', success: false })
    return;
  }

  let data = await login(request.cookies.username, request.cookies.password);
  
  response.status(data.status).json(data.success ? { success: true, userId: data.userId, idsrv: data.idsrv } : { success: false, error: data.error });
} 
