import type { MetadataRoute } from "next";

const siteUrl = "https://usmanazfar.com"; // [ADD CONTENT] — replace once deployed

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
