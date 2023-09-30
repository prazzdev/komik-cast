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
        hostname: '5ln1h5525y2q.kentut.xyz',
        port: '',
        pathname: '/data/**',
      },
    ],
  },
}
