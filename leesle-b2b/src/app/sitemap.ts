import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://b2b.leesle.com";

const locales = ["ko", "en"];

const staticRoutes = [
  "",
  "/brand",
  "/cases",
  "/custom",
  "/faq",
  "/products",
  "/quote",
  "/resources",
];

// Mock slugs — in production these come from Sanity CMS
const caseSlugs = [
  "samsung-corporate-gift",
  "oliveyoung-collab",
  "kia-special-edition",
];

const productSlugs = [
  "traditional-knot-keyring",
  "hanji-tumbler-sleeve",
  "dancheong-pouch",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}${route}`])
          ),
        },
      });
    }

    // Case detail pages
    for (const slug of caseSlugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/cases/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}/cases/${slug}`])
          ),
        },
      });
    }

    // Product detail pages
    for (const slug of productSlugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/products/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}/products/${slug}`])
          ),
        },
      });
    }
  }

  return entries;
}
