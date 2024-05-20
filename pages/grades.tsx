import type { NextPage } from "next";
import { AppShell, Paper } from "@mantine/core";
import Head from "next/head";
import Header from "../components/Header";
import { useState } from "react";
import dynamic from "next/dynamic";
import { getGrades } from "./api/grades";
import { login } from "./api/login";

const Nav = dynamic(() => import("../components/Nav"));

interface Props {
    data: any;
}

const Grades: NextPage<Props> = ({ data }) => {
    const [navOpened, setNavOpen] = useState(false);
    let subjects: any = {};
    let deficits;
    let average;

    if(data.success === false) return <>Er is een fout opgetreden</>

    data.forEach((grade: any) => {
        if (grade.CijferId === 0) return;
        if (grade.Vak.Afkorting === "TEK") return (deficits = grade.CijferStr);
        else if (grade.Vak.Afkorting === "GEM")
            return (average = grade.CijferStr);
        if (typeof subjects[grade.Vak.Omschrijving]?.grades === "undefined")
            subjects[grade.Vak.Omschrijving] = { grades: [], key: grade.Id };
        if (grade.CijferKolom.KolomKop === "RAP")
            return (subjects[grade.Vak.Omschrijving].average = grade.CijferStr);
        else if (grade.CijferKolom.KolomKop === "GEM") return;
        subjects[grade.Vak.Omschrijving].grades.push([
            grade.CijferStr,
            grade.CijferKolom.KolomKop,
        ]);
    });

    return (
        <>
            <Head>
                <title>Hoogeland: Cijfers</title>
            </Head>
            <AppShell header={{ height: 60 }}>
                <Header
                    onClose={() => setNavOpen(false)}
                    setNavOpen={setNavOpen}
                    navOpened={navOpened}
                />
                <AppShell.Main>
                    <Nav setNavOpen={setNavOpen} navOpened={navOpened} />
                    {Object.keys(subjects).map((subject: any) => (
                            <Paper
                                shadow="xs"
                                p="xs"
                                radius={0}
                                style={{
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                                withBorder
                            >
                                <div
                                    style={{
                                        height: "40px",
                                        width: "40px",
                                        backgroundColor:
                                            "var(--mantine-color-blue-filled)",
                                        display: "inline-flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "10px",
                                        marginRight: "10px",
                                        color: 'white'
                                    }}
                                >
                                    {subjects[subject].average ||
                                        subjects[subject].grades[0]}
                                </div>
                                {subject}
                            </Paper>
                    ))}
                </AppShell.Main>
            </AppShell>
        </>
    );
};

// @ts-ignore
export async function getServerSideProps({ req, res }) {
    let data: any = await getGrades(req.cookies.idsrv, req.cookies.userId);

    if (
        data.success === false &&
        (!req.cookies.username || !req.cookies.password)
    )
        return { props: { data: { success: false } } };

    let expires: any = new Date();

    // @ts-ignore
    expires.setYear(expires.getFullYear() + 1);
    expires = expires.toUTCString();

    if (data.success === false) {
        data = await login(req.cookies.username, req.cookies.password);

        if (!data.success)
            return { props: { data: { success: false, error: data.error } } };

        res.setHeader("set-cookie", [
            `idsrv=${data.idsrv}; Expires=${expires}; Secure; HttpOnly; SameSite=None; Path=/`,
            `userId=${data.userId}; Expires=${expires}; Secure; HttpOnly; SameSite=None; Path=/`,
            `token=${data.token}; Expires=${expires}; Secure; HttpOnly; SameSite=None; Path=/`,
        ]);

        data = await getGrades(data.idsrv, data.userId, data.token);

        if (data.success === false)
            return {
                redirect: {
                    destination: "/404",
                    permanent: false,
                },
            };
    } else {
        res.setHeader("set-cookie", [
            `token=${data.token}; Expires=${expires}; HttpOnly; SameSite=None; Path=/`,
        ]);
    }

    return { props: { data: data.grades } };
}

export default Grades;
