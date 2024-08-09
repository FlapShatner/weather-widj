'use client'
import React from 'react'
import Image from 'next/image'
import { SortedData } from './clock-weather'

function IconRing({ num, index, sortedData }: { num: number; index: number; sortedData: SortedData }) {
 if (!sortedData) return null
 let data = sortedData ? sortedData.find((item) => item.hourNum === num) : null
 if (num === 12) {
  data = sortedData ? sortedData.find((item) => item.hourNum === 0) : null
 }
 const iconId = data ? (data.icon <= 9 ? `0${data.icon}` : data.icon) : null
 const iconUrl = `https://developer.accuweather.com/sites/default/files/${iconId}-s.png`
 //  console.log(data.icon)
 return (
  <div
   className={`icn icn${index + 1}`}
   key={index}>
   <div className={` inner-num num${index + 1} `}>
    <Image
     src={iconUrl}
     alt='icon'
     width={64}
     height={64}
    />
   </div>
  </div>
 )
}

export default IconRing
