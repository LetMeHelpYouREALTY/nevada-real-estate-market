import { MetadataRoute } from "next";
const BUILD_DATE = process.env.BUILD_DATE_ISO || new Date().toISOString().split("T")[0];
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nevadarealestatemarket.com";
  const pages = [
    "", "/about", "/contact", "/privacy-policy", "/blog",
    "/henderson", "/henderson/lake-las-vegas", "/henderson/macdonald-ranch",
    "/henderson/green-valley-ranch", "/henderson/seven-hills",
    "/henderson/anthem", "/henderson/inspirada",
  ];
  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: BUILD_DATE,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
