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
    if (localStorage.getItem('username') !== null && localStorage.getItem('password') !== null) router.push('/')
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
      
            const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ username, password }), headers: new Headers({'content-type': 'application/json'})});

            const data = await response.json();
      
            if (data.error) {
              setError(data.error);
              setLoading(false);
              return;
            }
      
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
      
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