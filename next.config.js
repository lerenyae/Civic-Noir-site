/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/chapter-one',
        destination: '/chapter-one.html',
      },
      {
                source: '/the-map',
                destination: '/the-map.html',
      },
    ];
  },
};
module.exports = nextConfig;
