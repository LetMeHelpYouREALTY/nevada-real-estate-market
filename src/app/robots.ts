import { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // AI crawlers — explicitly allowed per 2026 SEO best practices
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "DuckAssistBot", allow: "/" },
      { userAgent: "Meta-ExternalAgent", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
    ],
    sitemap: "https://nevadarealestatemarket.com/sitemap.xml",
  };
}
