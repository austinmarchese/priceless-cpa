/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pricelesscpa.com',
      },
    ],
  },
}

module.exports = nextConfig
