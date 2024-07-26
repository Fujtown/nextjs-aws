/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // Add this line to configure static export
    output: 'export',
    trailingSlash: true,
  }
  
  module.exports = nextConfig
  