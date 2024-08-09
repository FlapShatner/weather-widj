import React from 'react'
import { SortedData } from './clock-weather'

function Desc({ sortedData, city }: { sortedData: SortedData; city: string }) {
 const currentItem = sortedData.find((item) => item.hourNum === 0)
 const phrase = currentItem ? currentItem.phrase : 'No data available'
 return (
  <div className='absolute top-[63%] left-1/2 -translate-x-1/2 nunito-sans-desc text-sm'>
   <p className='text-center text-xs opacity-70'>{phrase}</p>
   <p className='text-center leading-none opacity-70'>{city}</p>
  </div>
 )
}

export default Desc
