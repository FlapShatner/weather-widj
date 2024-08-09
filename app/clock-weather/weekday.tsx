import React from 'react'
import { getDayInfo } from '@/utils'

function Weekday() {
 const { dayOfWeek } = getDayInfo()
 return (
  <div className='absolute w-[47px] top-[50%] left-[12%] -translate-y-[50%]  bg-black inset-border px-2 font-semibold'>
   <div className='text-center opacity-70'>{dayOfWeek}</div>
  </div>
 )
}

export default Weekday
