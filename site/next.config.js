/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'TIK-KASM',
    description: 'TIK-Workspaces',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/Rainer559/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
