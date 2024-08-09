const weatherApiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY

export async function getLocation(zip: string) {
 const url = `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${weatherApiKey}&q=${zip}`
 const response = await fetch(url, { next: { revalidate: 3600 } })
 if (!response.ok) {
  throw new Error('Failed to fetch location data')
 }
 const data = await response.json()
 return data
}
