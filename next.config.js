/** @type {import('next').NextConfig} */



// console.log(generateBuildId)
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,

  // generateBuildId: async () => {
  //   // This could be anything, using the latest git hash
  //   return process.env.GIT_HASH
  // },
};

module.exports = nextConfig
