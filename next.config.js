/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '2023-lamba-bucket.s3.ap-southeast-1.amazonaws.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'tailus.io',
          pathname: '**',
        },
      ],
    },
  }