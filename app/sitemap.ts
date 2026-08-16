import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { serviceLocations } from "@/lib/locations";

const routes = [
  { path: "", priority: 1, changeFrequency: "monthly" as const },
  { path: "/products", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/banana-seeds", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/wholesale-bananas",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  { path: "/locations", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const locationEntries = serviceLocations.map((location) => ({
    url: `${SITE_URL}/locations/${location.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticEntries, ...locationEntries];
}
