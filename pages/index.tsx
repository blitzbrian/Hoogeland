import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic"
import Image from "next/image"
import { Header } from '@mantine/core'
import Days from '../components/Days'
import Datepicker from '../components/Datepicker'
import Logo from '../components/svg/Logo'
import { getDays } from './api/days'
import { login } from './api/login'

const Popup = dynamic(() => import('../components/Popup'));

interface Props {
  data: any
}

const Home: NextPage<Props> = ({ data }) => {
  const router = useRouter()

  let [days, setDays] = useState(data);

  return (
    <>
      <Head>
        <title>Hoogeland: Home</title>
      </Head>
      <Header height={60} p="xs" sx={{ 
        display: 'flex',
        alignItems: 'center'
      }}>
        <Logo />
        <Datepicker setData={setDays} />
      </Header>
      {(days && days.success !== false) &&
        <Days days={days} />
      }
      <Popup setDays={setDays} />
    </>
  )
}


// @ts-ignore
export async function getServerSideProps({ req, res }) {
  let data: any = await getDays(req.cookies.idsrv, req.cookies.userId);

  if(data.success === false && (!req.cookies.username || !req.cookies.password)) return { props: { data: { success: false } } }

  let expires: any = new Date()

  // @ts-ignore
  expires.setYear(expires.getFullYear() + 1)
  expires = expires.toUTCString()
  
  // Relog
  
  if (data.success === false) {
    
    data = await login(req.cookies.username, req.cookies.password);

    if (!data.success) return { props: { data: { success: false, error: data.error } } }
    
    res.setHeader('set-cookie', [`idsrv=${data.idsrv}; Expires=${expires}; Secure; HttpOnly; SameSite=None; Path=/`, `userId=${data.userId}; Expires=${expires}; Secure; HttpOnly; SameSite=None; Path=/`, `token=${data.token}; Expires=${expires}; Secure; HttpOnly; SameSite=None; Path=/`])

    data = await getDays(data.idsrv, data.userId, data.token);

    if (data.success === false) return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
    
  } else {
    res.setHeader('set-cookie', [`token=${data.token}; Expires=${expires}; Secure; HttpOnly; SameSite=None; Path=/`])
  }

  return { props: { data: data.days } }
}

export default Home