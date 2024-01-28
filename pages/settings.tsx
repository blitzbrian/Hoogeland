import type { NextPage } from "next";
import Head from "next/head";
import { useMantineColorScheme, Switch, AppShell, Burger } from "@mantine/core";
import { useState } from "react";
import Logo from "../components/svg/Logo";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("../components/NavBar"));

const Settings: NextPage = () => {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const [navOpened, setNavOpen] = useState(false);

    return (
        <>
            <Head>
                <title>Hoogeland: Instellingen</title>
            </Head>
            <AppShell header={{ height: 60 }}>
                <AppShell.Header
                    style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    display="flex"
                    p="xs"
                >
                    {/* <Datepicker setData={setDays} /> */}
                    <div style={{ marginRight: "auto" }}/>
                    <Logo/>
                    <Burger ml="auto" opened={navOpened} onClick={() => setNavOpen(true)} />
                </AppShell.Header>
                <AppShell.Main mx={0}>
                    <NavBar setNavOpen={setNavOpen} navOpened={navOpened} />
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
                        Donker Thema: <Switch ml="5px" checked={colorScheme === 'dark'} onChange={(event) => setColorScheme(event.currentTarget.checked === true ? 'dark' : 'light')}/>
                    </div>
                </AppShell.Main>
            </AppShell>
        </>
    );
};

export default Settings;
