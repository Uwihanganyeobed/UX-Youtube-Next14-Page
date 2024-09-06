/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      serverActions:{
         allowedOrigins: ['my-proxy.com']
      }
   }
};

export default nextConfig;
