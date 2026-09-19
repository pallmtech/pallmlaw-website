/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "lawops.app" }],
        destination: "https://pallmlaw.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lawops.app" }],
        destination: "https://pallmlaw.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.pallmlaw.com" }],
        destination: "https://pallmlaw.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
