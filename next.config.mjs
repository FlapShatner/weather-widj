/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    protocol: 'https',
    hostname: 'developer.accuweather.com',
    port: '',
   },
  ],
 },
}

export default nextConfig
