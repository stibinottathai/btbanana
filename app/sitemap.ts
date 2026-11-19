import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { serviceLocations } from "@/lib/locations";
import { suckerVarieties } from "@/lib/suckers";
import { blogPosts } from "@/lib/blog";

// Keep this tied to a real site/content release. Using `new Date()` here would
// make every URL look newly changed after each deployment, weakening the
// sitemap's last-modified signal for crawlers.
const LAST_CONTENT_UPDATE = new Date("2026-11-19T00:00:00.000Z");

type Route = {
  path: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  /** Malayalam twin, for hreflang alternates. */
  ml?: string;
};

const routes: Route[] = [
  { path: "", priority: 1, changeFrequency: "monthly", ml: "/ml" },
  { path: "/banana-seeds", priority: 1, changeFrequency: "weekly", ml: "/ml/banana-seeds" },
  ...suckerVarieties.map((v) => ({
    path: `/banana-seeds/${v.slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  })),
  { path: "/how-to-plant-banana-suckers", priority: 0.8, changeFrequency: "monthly" },
  { path: "/sucker-vs-tissue-culture", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.8, changeFrequency: "monthly", ml: "/ml/faq" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly", ml: "/ml/contact" },
  { path: "/products", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/nendran-banana", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/njali-poovan-banana", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/palayankodan-banana", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/robusta-banana", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/poovan-banana", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/plantain-varieties", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/other-banana-varieties", priority: 0.8, changeFrequency: "monthly" },
  { path: "/wholesale-bananas", priority: 0.9, changeFrequency: "monthly" },
  { path: "/banana-merchant-kannur", priority: 0.95, changeFrequency: "weekly" },
  { path: "/banana-prices", priority: 0.9, changeFrequency: "daily" },
  { path: "/locations", priority: 0.8, changeFrequency: "yearly" },
];

function languages(en: string, ml: string) {
  return {
    languages: {
      "en-IN": `${SITE_URL}${en}`,
      "ml-IN": `${SITE_URL}${ml}`,
      "x-default": `${SITE_URL}${en}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    // Same string as the page's <link rel="canonical"> (Next renders the home
    // canonical without a trailing slash), so canonical, <loc> and hreflang
    // all agree exactly.
    const en = route.path;
    entries.push({
      url: `${SITE_URL}${route.path}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      ...(route.ml ? { alternates: languages(en, route.ml) } : {}),
    });
    if (route.ml) {
      entries.push({
        url: `${SITE_URL}${route.ml}`,
        lastModified: LAST_CONTENT_UPDATE,
        changeFrequency: route.changeFrequency,
        priority: Math.max(route.priority - 0.1, 0.5),
        alternates: languages(en, route.ml),
      });
    }
  }

  for (const location of serviceLocations) {
    entries.push({
      url: `${SITE_URL}/locations/${location.slug}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  for (const post of blogPosts) {
    entries.push({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(`${post.dateModified}T00:00:00.000Z`),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
