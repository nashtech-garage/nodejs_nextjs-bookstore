/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      (process.env.NEXT_PUBLIC_AWS_S3_URL ?? '').replace('https://', ''),
    ],
  },
}

module.exports = nextConfig
