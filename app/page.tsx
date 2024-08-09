import { getWeather } from './actions/weather'
import ClockWeather from './clock-weather/clock-weather'
import Zip from './zip'

export type WeatherData = {
 DateTime: string
 EpochDateTime: number
 WeatherIcon: number
 IconPhrase: string
 HasPrecipitation: boolean
 IsDaylight: boolean
 Temperature: {
  Value: number
  Unit: string
  UnitType: number
 }
 PrecipitationProbability: number
 MobileLink: string
 Link: string
}[]

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
 let locKey = '28857_PC'
 let city = searchParams.city as string
 if (searchParams.locKey) {
  locKey = searchParams.locKey as string
 }
 const weatherData: WeatherData = await getWeather(locKey)

 return (
  <main className='flex min-h-screen flex-col items-center justify-center gap-8 p-24'>
   <h1 className='text-center text-4xl font-bold'>Weather Widget</h1>
   <Zip />
   <ClockWeather
    city={city}
    weatherData={weatherData}
   />
  </main>
 )
}
