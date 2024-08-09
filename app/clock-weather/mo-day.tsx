import React from 'react'
import { getDayInfo } from '@/utils'

function MoDay() {
 const { dayOfMonth } = getDayInfo()
 return (
  <div className='absolute w-[47px] top-[50%] left-[62%] -translate-y-[50%]  bg-black inset-border px-2 font-semibold'>
   <div className='text-center opacity-70'>{dayOfMonth}</div>
  </div>
 )
}

export default MoDay
