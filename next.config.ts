import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      // The original Vercel address is still indexed by search engines; send it to the custom domain.
      {
        source: "/:path*",
        has: [{ type: "host", value: "my-portfolio-usman-0a4c\\.vercel\\.app" }],
        destination: "https://www.usmanazfar.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
