import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs))
}

export const getRotation = () => {
 const today = new Date()
 const nowHour = today.getHours()
 const nowMinute = today.getMinutes()
 const nowSecond = today.getSeconds()
 const nowMillisecond = today.getMilliseconds()
 const secondsRotation = (nowSecond / 60) * 360 + (nowMillisecond / 1000) * 6
 const minutesRotation = ((nowMinute + nowSecond / 60) / 60) * 360
 const hoursRotation = ((nowHour + nowMinute / 60) / 12) * 360
 return {
  secondsRotation,
  minutesRotation,
  hoursRotation,
 }
}

export function formattedTime() {
 const now = new Date()
 const hours = now.getHours().toString().padStart(2, '0')
 const minutes = now.getMinutes().toString().padStart(2, '0')
 return `${hours}:${minutes}`
}

export function getDayInfo() {
 const now = new Date()
 const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
 const dayOfWeek = days[now.getDay()] // Get the day of the week as "WED"
 const dayOfMonth = now.getDate() // Get the day of the month

 return { dayOfWeek, dayOfMonth }
}
