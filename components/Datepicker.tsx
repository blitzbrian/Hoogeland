// @ts-nocheck
import { useState } from 'react'
import { ActionIcon } from '@mantine/core'
import Image from 'next/image'
import dynamic from 'next/dynamic' 

// These are not needed in first render, so they are imported dynamically
// But typescript doesn't like that
const DatePicker = dynamic(() => import('@mantine/dates').then(module => module.DatePicker))
const Modal = dynamic(() => import('@mantine/core').then(module => module.Modal))
const Group = dynamic(() => import('@mantine/core').then(module => module.Group))
const LoadingOverlay = dynamic(() => import('@mantine/core').then(module => module.LoadingOverlay))
  
interface Props {
  setData: (date) => void
}

const Datepicker: React.FC<Props> = ({ setData }) => {
  let [opened, setOpen] = useState(false)
  let [date, setDate] = useState<Date | null>(null)
  let [loading, setLoading] = useState(false)
  
  const close = async () => {
    setOpen(false)
    setLoading(true)
    const res = await fetch('https://hoogeland-api.dazerstudio.repl.co:9000/get', { method: 'POST', body: JSON.stringify({ username: localStorage.getItem('username'), password: localStorage.getItem('password'), date: date?.toDateString() }), headers: {"Content-Type": "application/json"} })
    const json = await res.json() 
    if(json.error || json.success === false) {
      setLoading(false)
      return
    }
    setData(json)
    setLoading(false)
  }
  
  return <>
    <ActionIcon sx={{ float: 'right' }} onClick={() => setOpen(true)}>
          <Image alt="Calendar" src="/calendar.svg" height={20} width={20} />
    </ActionIcon>
    <Modal 
      opened={opened} 
      onClose={close}
      withCloseButton={false}
      transitionProps={{ transition: "slide-down", duration: 300 }}
    >
      <Group position="center">
          <DatePicker value={date} onChange={setDate} />
      </Group>
    </Modal>
    {loading && <LoadingOverlay visible overlayBlur={2} />}
  </>
}

export default Datepicker
