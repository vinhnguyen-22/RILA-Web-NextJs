import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      's3-us-west-2.amazonaws.com',
      's3.sa-east-1.amazonaws.com',
      'images.unsplash.com',
    ],
  },

  // suppress keyv warning
  webpack: (config, { webpack }) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    config.plugins.push(
      new webpack.ContextReplacementPlugin(/\/keyv\//, (data) => {
        delete data.dependencies[0].critical;
        return data;
      }),
    );
    return config;
  },
};

export default withPlaiceholder(nextConfig);
