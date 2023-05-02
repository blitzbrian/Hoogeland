import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic"
import Image from "next/image"
import { LoadingOverlay, Header } from '@mantine/core'
import { useNetwork } from '@mantine/hooks'
import useSWR from 'swr'
import Days from '../components/Days'
import Datepicker from '../components/Datepicker'
const Popup = dynamic(() => import('../components/Popup'));

const fetcher = (url: string) => fetch(url, { method: 'POST', body: JSON.stringify({ username: localStorage.getItem('username'), password: localStorage.getItem('password') }), headers: {"Content-Type": "application/json"} }).then(res => res.json())

const Home: NextPage = () => {
  const router = useRouter()
  const networkStatus = useNetwork();

  // Wake up server
  fetch('https://hoogeland-api.dazerstudio.repl.co').catch(() => {})
  let [ dataFallback, setDataFallback ] = useState()

  let [ tempData, setTempData ] = useState()
  
  const { data, error, isLoading } = useSWR('https://hoogeland-api.dazerstudio.repl.co:9000/get', fetcher, {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  onSuccess: (data) => {
    if(data.success === false) return
    localStorage.setItem('data', JSON.stringify(data))
  }})

  useEffect(() => {
    if (localStorage.getItem('username') === null || localStorage.getItem('password') === null) router.push('/login')

    if (localStorage.getItem('data') !== null) setDataFallback(JSON.parse(localStorage.getItem('data') || '{}'))
  }, [router])

  if (data?.success == false) return <></>

  if (dataFallback == null && isLoading) return <LoadingOverlay visible overlayBlur={2} />
  
  return (
    <>
      <Head>
        <title>Hoogeland: Home</title>
      </Head>
      <Header height={60} p="xs">
        <Image alt="" src={"/logo.svg"} height={40} width={80} />
        <Datepicker setData={setTempData}/>
      </Header>
      <Days days={isLoading || networkStatus.online === false ? dataFallback : (tempData ? tempData : data)} />
      <Popup />
    </>
  )
}

export default Home