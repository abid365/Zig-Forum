/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "img.freepik.com",
      "cdn.dribbble.com",
      "play-lh.googleusercontent.com",
      "www.jsmastery.pro",
      "bun.sh",
      "static-00.iconduck.com",
      "png.pngtree.com",
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

module.exports = nextConfig;
