import React from 'react'
import { SortedData } from './clock-weather'

function Temperature({ num, index, sortedData }: { num: number; index: number; sortedData: SortedData }) {
 let data = sortedData.find((item) => item.hourNum === num)
 if (num === 12) {
  data = sortedData.find((item) => item.hourNum === 0)
 }
 //  console.log(data)
 return (
  <div
   className={`temp temp${index + 1}`}
   key={index}>
   <div className={`mt-1 inner-num num${index + 1}`}>{data && data.temp}°</div>
  </div>
 )
}

export default Temperature
