/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const compiler = {
  compiler: {
    removeConsole: {
      exclude: ["log"],
    },
  },
}
;(module.exports = nextConfig), compiler
