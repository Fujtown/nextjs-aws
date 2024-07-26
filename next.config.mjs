/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export', // Add this line to configure static export
    trailingSlash: true,
  };
  
  export default nextConfig;
  