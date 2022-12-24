/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['picsum.photos',"cdn.chec.io"],
  },
};

module.exports = nextConfig;
