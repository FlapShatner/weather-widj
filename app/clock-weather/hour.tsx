import React from 'react'

function Hour({ num, index }: { num: number; index: number }) {
 return (
  <div
   className={`number number${index + 1}`}
   key={index}>
   <div className={`inner-num num${index + 1}`}>{num}</div>
  </div>
 )
}

export default Hour
