/** @type {import('next').NextConfig} */

//    "build": "next build && next-build-id"

// console.log(generateBuildId)
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  output:"standalone"
  // generateBuildId: async () => {
  //   // This could be anything, using the latest git hash
  //   return process.env.GIT_HASH
  // },
};

module.exports = nextConfig
