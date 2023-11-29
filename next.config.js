/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  rewrites: async () => ({
    beforeFiles: [{
      source: '/api/v2/:path*',
      destination: 'https://pokeapi.co/api/v2/:path*',
    }]
  })
}

module.exports = nextConfig
