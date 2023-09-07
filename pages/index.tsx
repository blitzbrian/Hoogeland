import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic"
import Image from "next/image"
import { Header } from '@mantine/core'
import { useNetwork } from '@mantine/hooks'
import useSWR from 'swr'
import Days from '../components/Days'
import Datepicker from '../components/Datepicker'
const Popup = dynamic(() => import('../components/Popup'));

// @ts-ignore
const fetcher = (url: string) => fetch(url, { method: 'POST', body: JSON.stringify({ userId: localStorage.getItem('userId'), token: localStorage.getItem('token') }), headers: new Headers({'content-type': 'application/json'})} ).then(res => res.json());

const Home: NextPage = () => {
  const router = useRouter()
  const networkStatus = useNetwork();


  useEffect(() => {
    if (localStorage.getItem('token') === null || localStorage.getItem('userId') === null) router.push('/login')

    if (localStorage.getItem('data') !== null) setDataFallback(JSON.parse(localStorage.getItem('data') || '{}'))
  }, [router])
  
  let [ dataFallback, setDataFallback ] = useState()
  
  let [ tempData, setTempData ] = useState()

  
  let { data, error, isLoading } = useSWR('/api/days', fetcher, {
  onSuccess: async (data) => {
    if(data.success === false && localStorage.getItem('userId')) {
      // @ts-ignore
      if(localStorage.getItem('data')) setTempData(JSON.parse(localStorage.getItem('data')));

      
      const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ username: localStorage.getItem('username'), password: localStorage.getItem('password') }), headers: new Headers({'content-type': 'application/json'})});

      const data = await response.json()

      localStorage.setItem('userId', data.userId);
      localStorage.setItem('token', data.token);
            
      return
    }
    localStorage.setItem('data', JSON.stringify(data))
  }})
  
  return (
    <>
      <Head>
        <title>Hoogeland: Home</title>
      </Head>
      <Header height={60} p="xs">
        <Image alt="" src={"/logo.svg"} height={40} width={80} />
        <Datepicker setData={setTempData}/>
      </Header>
      {((data && data.success !== false) || tempData) &&
        <Days days={networkStatus.online === false ? dataFallback : (tempData ? tempData :  data)} />
      }
      <Popup />
    </>
  )
}

export default Home