/** @type {import('next').NextConfig} */

//    "build": "next build && next-build-id"

// console.log(generateBuildId)
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  output:"standalone"
};

module.exports = nextConfig
