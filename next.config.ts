import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/aida-public/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/servicios",
        destination: "/servicios-y-excursiones",
        permanent: true,
      },
      {
        source: "/excursiones",
        destination: "/servicios-y-excursiones",
        permanent: true,
      },
      {
        source: "/contacto",
        destination: "/#contacto",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
