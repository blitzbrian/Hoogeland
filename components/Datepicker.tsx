// @ts-nocheck
import { useState } from 'react'
import { ActionIcon } from '@mantine/core'
import Image from 'next/image'
import dynamic from 'next/dynamic' 

// These are not needed in first render, so they are imported dynamically
// But typescipt doesn't like that
const DatePicker = dynamic(() => import('@mantine/dates').then(module => module.DatePicker))
const Modal = dynamic(() => import('@mantine/core').then(module => module.Modal))
const Group = dynamic(() => import('@mantine/core').then(module => module.Group))
  
interface Props {
  setData: (data: any) => void
}

const Datepicker: React.FC<Props> = ({ setData }) => {
  let [opened, setOpen] = useState(false)
  let [date, setDate] = useState<Date | null>(null)
  let [lastDate, setLastDate] = useState<Date | null>()
  
  const open = () => {
    setOpen(true)
    setLastDate(date)
  }
  
  const close = async () => {
    setOpen(false)
    if(lastDate == date) return
    const res = await fetch('/api/days', { method: 'POST', body: JSON.stringify({ userId: localStorage.getItem('userId'), token: localStorage.getItem('token'), date: date?.toDateString() }), headers: new Headers({'content-type': 'application/json'})})
    const json = await res.json() 
    if(json.error || json.success === false) {
      return
    }
    setData(json)
  }
  return <>
    <ActionIcon sx={{ float: 'right' }} onClick={open}>
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
  </>
}

export default Datepicker
