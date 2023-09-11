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
  
  let [ tempData, setTempData ] = useState()

  let [ days, setDays ] = useState(data);

  
  useEffect(() => {
    (async () => {
      if(data.success === false) {

        let response = await fetch('/api/login', { 
          method: 'GET', 
          headers: {
            'content-type': 'application/json'
          },
          credentials: 'include'
        });
  
        let data = await response.json()
  
        if(!data.success) return

        // @ts-ignore
        cookieStore.set('userId', data.userId);
        // @ts-ignore
        cookieStore.set('token', data.token);

        response = await fetch('/api/days', {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          },
          credentials: 'include'
        });

        setDays(await response.json());
        
    }})();
  }, [data]);
  
  return (
    <>
      <Head>
        <title>Hoogeland: Home</title>
      </Head>
      <Header height={60} p="xs">
        <Image alt="" src={"/logo.svg"} height={40} width={80} />
        <Datepicker setData={setTempData}/>
      </Header>
      {((days && days.success !== false) || tempData) &&
        <Days days={(tempData ||  days)} />
      }
      <Popup />
    </>
  )
}

// @ts-ignore
export async function getServerSideProps({ req, res }) {
  if(!req.cookies.userId || !req.cookies.token) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }
  
  const response = await fetch('https://hoogeland.eu.org/api/days', {
    method: 'GET',     
    headers: { 
      'content-type': 'application/json',
      'cookie': req.headers.cookie
    },
  });
  
  const data = await response.json()

  return { props: { data } }
}

export default Home