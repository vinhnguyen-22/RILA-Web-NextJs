/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['www.notion.so', 'notion.so', 'images.unsplash.com', 'pbs.twimg.com', 'abs.twimg.com'],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true,
  },
};

module.exports = nextConfig;
