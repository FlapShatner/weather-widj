'use client'
import { getRotation } from '@/utils'
import { useInterval } from 'usehooks-ts'
import React, { useState } from 'react'

function Hands() {
 const [hours, setHours] = useState(0)
 const [mins, setMins] = useState(0)
 const [secs, setSecs] = useState(0)
 const { secondsRotation, minutesRotation, hoursRotation } = getRotation()

 useInterval(() => {
  setHours(hoursRotation)
  setMins(minutesRotation)
  setSecs(secondsRotation)
 }, 1000)

 return (
  <>
   <div
    id='hour-hand'
    style={{ transform: `translateX(-50%) rotate(calc(${hours} * 1deg))` }}
    className='hand hour'></div>
   <div
    id='minute-hand'
    style={{ transform: `translateX(-50%) rotate(calc(${mins} * 1deg))` }}
    className='hand minute'></div>
   <div
    style={{ transform: `translateX(-50%) rotate(calc(${secs} * 1deg))` }}
    id='second-hand'
    className='hand second'></div>
  </>
 )
}

export default Hands
