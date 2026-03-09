/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/chapter-one',
        destination: '/chapter-one.html',
      },
    ];
  },
};
module.exports = nextConfig;
