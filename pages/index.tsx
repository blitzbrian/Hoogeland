import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic"
import Image from "next/image"
import { Header } from '@mantine/core'
import Days from '../components/Days'
import Datepicker from '../components/Datepicker'

const Popup = dynamic(() => import('../components/Popup'));

interface Props {
  data: any
}

const Home: NextPage<Props> = ({ data }) => {
  const router = useRouter()  
  
  let [ days, setDays ] = useState(data);
  
  return (
    <>
      <Head>
        <title>Hoogeland: Home</title>
      </Head>
      <Header height={60} p="xs">
        <Image alt="logo" src={"/logo.svg"} height={40} width={80} />
        <Datepicker setData={setDays}/>
      </Header>
      {(days && days.success !== false) &&
        <Days days={days} />
      }
      <Popup setDays={setDays} />
    </>
  )
}

const url = 'https://hoogeland.eu.org'

// @ts-ignore
export async function getServerSideProps({ req, res }) {
  if(!req.cookies.userId || !req.cookies.token) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }
  
  let response = await fetch(url + '/api/days', {
    method: 'GET',     
    headers: { 
      'content-type': 'application/json',
      'cookie': req.headers.cookie
    },
  });

  let data = await response.json()

  // Relog
  
  if(data.success === false) {
    response = await fetch(url + '/api/login', { 
      method: 'GET', 
      headers: {
        'content-type': 'application/json',
        'cookie': req.headers.cookie
      },
    });

    data = await response.json()

    if(!data.success) return

    let expires: any = new Date()
    
    // @ts-ignore
    expires.setYear(expires.getFullYear() + 1)
    expires = expires.getTime()        

    res.setHeader('set-cookie', [`token=${data.token}; Expires=${expires}; Secure`, `userId=${data.userId}; Expires=${expires}; Secure`])
    
    response = await fetch(url + '/api/days', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'cookie': `token=${data.token}; userId=${data.userId}`
      },
    });

    data = await response.json();
  }
  
  return { props: { data } }
}

export default Home