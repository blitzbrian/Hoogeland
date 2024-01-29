import type { NextApiRequest, NextApiResponse } from "next";

const generateState = () => {
    let state = "";
    const possible = "abcdefhijklmnopqrstuvwxyz";
    for (var i = 0; i < 16; i++) {
        state += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return state;
};

const generateNonce = () => {
    let state = "";
    const possible = "abcdef0123456789";
    for (var i = 0; i < 32; i++) {
        state += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return state;
};

export async function getGrades(idsrv: any, userId: any, oldToken?: any) {
    let token = oldToken;
    
    if (!oldToken) {
        // Get Token

        const response = await fetch(
            `https://accounts.magister.net/connect/authorize?client_id=M6-isw.magister.net&redirect_uri=https%3A%2F%2Fisw.magister.net%2Foidc%2Fredirect_callback.html&response_type=id_token%20token&scope=openid%20profile%20opp.read%20opp.manage%20attendance.overview%20calendar.ical.user%20calendar.to-do.user&state=${generateState()}&nonce=${generateNonce()}&acr_values=tenant%3Aisw.magister.net`,
            {
                headers: {
                    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                    "accept-language": "nl,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
                    "sec-ch-ua":
                        '"Chromium";v="116", "Not)A;Brand";v="24", "Microsoft Edge";v="116"',
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": '"Windows"',
                    "sec-fetch-dest": "document",
                    "sec-fetch-mode": "navigate",
                    "sec-fetch-site": "same-site",
                    "upgrade-insecure-requests": "1",
                    cookie: `idsrv=${idsrv}`,
                },
                redirect: "manual",
            }
        );

        // @ts-ignore
        const url = new URL(response.headers.get("location").replace("#", "?"));

        token = "Bearer " + url.searchParams.get("access_token");
    }

    let response = await fetch(`https://isw.magister.net/api/leerlingen/${userId}/aanmeldingen`, {
        headers: {
            "accept": "application/json, text/plain, */*",
            "accept-language": "nl,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
            "authorization": token,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
        },
    });

    let data = await response.json();

    if (data === "Invalid Operation" || data === "SecurityToken Expired")
        return { success: false, error: data, status: 401 };

    response = await fetch(`https://isw.magister.net/api/personen/${userId}/aanmeldingen/${data.items[0].id}/cijfers/cijferoverzichtvooraanmelding`, {
        headers: {
          authorization: token
        },
    });
    
    data = await response.json();

    return { grades: data.Items, token, success: true, status: 200 }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = req.cookies;

    if (!body.userId || (!body.idsrv && !body.token && !req.headers.token)) {
        res.status(400).json({
            success: false,
            error: "Missing user id or idsrv / token",
        });
        return;
    }

    const data = await getGrades(
        body.idsrv,
        body.userId,
        req.headers.token ? body.token : undefined,
    );


    // @ts-ignore
    res.status(data.status).json(data.success === true ? data.grades : { success: false, error: data.error });
}