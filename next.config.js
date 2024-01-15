/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['i.pravatar.cc']
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
