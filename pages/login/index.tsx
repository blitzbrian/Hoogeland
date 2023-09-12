import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
  LoadingOverlay
} from '@mantine/core';
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


const Login: NextPage = () => {
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  let [loading, setLoading] = useState(false)
  let [error, setError] = useState('')

  const router = useRouter()

  useEffect(() => {
    (async () => {
      // @ts-ignore
      if (await cookieStore.get('userId') !== null && await cookieStore.get('token') !== null) router.push('/')
    })();
    router.prefetch('/')
  }, [router])

  return (
    <>
      <Container size={420} my={40}>
        <Head>
          <title>Hoogeland: Login</title>
        </Head>
        <Title
          align="center"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
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
            onInput={(e) => { setUsername((e.target as HTMLTextAreaElement).value) }}
            error={error != ''}
          />
          <PasswordInput
            label="Wachtwoord"
            placeholder="Uw wachtwoord"
            required
            mt="md"
            value={password}
            onInput={(e) => { setPassword((e.target as HTMLTextAreaElement).value) }}
            error={error}
          />
          <Button fullWidth mt="xl" onClick={async () => {
            setLoading(true);
            setError('');
            // @ts-ignore
            cookieStore.set({
              name: 'username',
              value: username,
              expires: new Date().getTime() + 31536000
            });
            // @ts-ignore
            cookieStore.set({
              name: 'password',
              value: password,
              expires: new Date().getTime() + 31536000
            });
      
            const response = await fetch('/api/login', { 
              method: 'GET', 
              headers: {
                'content-type': 'application/json'
              },
              credentials: 'include'
            });

            const data = await response.json();
      
            if (data.error) {
              setError(data.error);
              setLoading(false);
              return;
            }

            // @ts-ignore
            cookieStore.set({
              name: 'token',
              value: data.token,
              expires: new Date().getTime() + 31536000
            });
            // @ts-ignore
            cookieStore.set({
              name: 'userId',
              value: data.userId,
              expires: new Date().getTime() + 31536000
            });
      
            setLoading(false);
      
            router.push('/')
          }}>
            Log In
          </Button>
        </Paper>
      </Container>
      <LoadingOverlay visible={loading} overlayBlur={2} />
    </>
  );
}

export default Login