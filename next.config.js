/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/old_lawops_logos/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, noimageindex" },
        ],
      },
      {
        source: "/app-images/old_lawops_images/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, noimageindex" },
        ],
      },
      {
        source: "/partner-assets/lawops-logo-white-large.png",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, noimageindex" },
        ],
      },
      {
        source: "/partner-assets/lawops-logo-large.png",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, noimageindex" },
        ],
      },
      {
        source: "/partner-assets/lawops-fc-icon-large.png",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, noimageindex" },
        ],
      },
    ];
  },
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
