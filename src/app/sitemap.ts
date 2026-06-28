import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const locales = ["es", "en"] as const;
const routes = ["", "/servicios-y-excursiones"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}/es${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `${BASE_URL}/${locale}${route}`])
      ),
    },
  }));
}
