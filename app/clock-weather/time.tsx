'use client'
import React, { useState } from 'react'
import { useInterval } from 'usehooks-ts'
import { formattedTime } from '@/utils'
function Time() {
 const [time, setTime] = useState(formattedTime())
 useInterval(() => {
  setTime(formattedTime())
 }, 500)
 return (
  <div className='bg-black absolute px-1 top-[20%] left-1/2 -translate-x-1/2 text-lg  inset-border'>
   <div id='time'>{time}</div>
  </div>
 )
}

export default Time
