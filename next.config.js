/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
//    serverComponentsExternalPackages: ["react-bootstrap"]
  },
  images: {
    domains: ["cdn.sanity.io"]
  }
}

module.exports = nextConfig
