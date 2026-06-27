/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "selfnote.fdevsite.cloud",
        port: "8000",
        pathname: "/storage/**",
      },
      {
        protocol: "http",
        hostname: "selfnote.fdevsite.cloud",
        port: "8000",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;
