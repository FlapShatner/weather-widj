import React from 'react'
import { getLocation } from './actions/location'
import { redirect } from 'next/navigation'

function Zip() {
 const fetchLocation = async (formData: FormData) => {
  'use server'
  const zip = formData.get('zip') as string
  // console.log(zip)
  const locationData = await getLocation(zip)
  if (locationData.length > 0) {
   //  console.log(await locationData[0].Key)
   redirect(`?locKey=${locationData[0].Key}&city=${locationData[0].LocalizedName}`)
  }
 }

 return (
  <form
   action={fetchLocation}
   className='flex flex-col items-center justify-center gap-2'>
   Enter zip code
   <input
    name='zip'
    className='border-2 border-black rounded-md p-1 text-black'
    type='text'
    placeholder='Zip Code'
   />
  </form>
 )
}

export default Zip
