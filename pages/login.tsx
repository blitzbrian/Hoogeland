import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Container,
    Button,
    LoadingOverlay,
    Anchor,
} from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Login: NextPage = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");

    const router = useRouter();

    useEffect(() => {
        router.prefetch("/");
    }, [router]);

    return (
        <>
            <Container size={420} my={40}>
                <Head>
                    <title>Hoogeland: Login</title>
                </Head>
                <Title
                    style={{
                        fontFamily: "Greycliff CF, var(--mantine-font-family)",
                        fontWeight: 900,
                        textAlign: "center",
                    }}
                >
                    Login
                </Title>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput
                        placeholder="Uw leerlingnummer"
                        label="Leerlingnummer"
                        required
                        mt="md"
                        value={username}
                        onInput={(e) => {
                            setUsername(
                                (e.target as HTMLTextAreaElement).value
                            );
                        }}
                        error={error != ""}
                    />
                    <PasswordInput
                        label="Wachtwoord"
                        placeholder="Uw wachtwoord"
                        required
                        mt="md"
                        value={password}
                        onInput={(e) => {
                            setPassword(
                                (e.target as HTMLTextAreaElement).value
                            );
                        }}
                        error={error}
                    />
                    <Button
                        fullWidth
                        mt="xl"
                        onClick={async () => {
                            setLoading(true);
                            setError("");

                            const response = await fetch("/api/login", {
                                method: "POST",
                                body: JSON.stringify({
                                    username,
                                    password,
                                }),
                                headers: {
                                    "content-type": "application/json",
                                },
                                credentials: "include",
                            });

                            const data = await response.json();

                            if (data.error) {
                                setError(data.error);
                                setLoading(false);
                                return;
                            }

                            router.push("/");
                        }}
                    >
                        Log In
                    </Button>
                </Paper>
                <Container style={{ textAlign: 'center' }}>
                    <Link prefetch={false} href="/example" style={{ color: 'white', marginTop: '20px', display: 'block' }}>Voorbeeld</Link>
                </Container>
            </Container>
            <LoadingOverlay visible={loading} overlayProps={{ blur: 2 }} />
        </>
    );
};

export default Login;
