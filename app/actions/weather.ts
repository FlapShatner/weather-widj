const weatherApiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY

export async function getWeather(locKey: string) {
 const url = `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locKey}?q=65804&apikey=${weatherApiKey}`
 const response = await fetch(url, { next: { revalidate: 3600 } })
 if (!response.ok) {
  throw new Error('Failed to fetch weather data')
 }
 const data = await response.json()
 return data
}
