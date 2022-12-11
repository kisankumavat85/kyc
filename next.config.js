/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      // {
      //   source: "/*",
      //   destination: "/aml-screening",
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;
