/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.bakul.buzz',
        port: '',
        pathname: '/data/**',
      },
    ],
  },
}
