import type { NextPage } from "next";
import Head from "next/head";
import { useMantineColorScheme, Switch, AppShell, Button } from "@mantine/core";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Header from "../components/Header";

const Nav = dynamic(() => import("../components/Nav"));

const Settings: NextPage = () => {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const [navOpened, setNavOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Hoogeland: Instellingen</title>
            </Head>
            <AppShell header={{ height: 60 }}>
                <Header
                    onClose={() => setNavOpen(false)}
                    navOpened={navOpened}
                    setNavOpen={setNavOpen}
                />
                <AppShell.Main mx={0}>
                    <Nav setNavOpen={setNavOpen} navOpened={navOpened} />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "20px",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                            }}
                        >
                            Donker Thema:{" "}
                            <Switch
                                ml="5px"
                                checked={colorScheme === "dark"}
                                onChange={(event) =>
                                    setColorScheme(
                                        event.currentTarget.checked === true
                                            ? "dark"
                                            : "light"
                                    )
                                }
                            />
                        </div>
                        {/* @ts-ignore */}
                        <Button
                            color="red"
                            mt="20px"
                            onClick={() => {
                                router.push("/login");
                            }}
                        >
                            Log Uit
                        </Button>
                    </div>
                </AppShell.Main>
            </AppShell>
        </>
    );
};

export default Settings;
