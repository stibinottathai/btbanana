import type { ComponentType } from "react";
import * as bulkVazhavithuGuide from "@/content/blog/bulk-vazhavithu-order-guide";

/**
 * Static blog. Each post lives in `content/blog/<slug>.tsx` and exports:
 *   - `meta`: a BlogPostMeta object
 *   - `faqs`: question/answer pairs (rendered + emitted as FAQPage schema)
 *   - default: the article body as a React component
 *
 * To publish a new post: create the file, then add it to `modules` below.
 * Pages are generated at build time (generateStaticParams), with no CMS or
 * database involved.
 */

export type BlogFaq = { question: string; answer: string };

export type BlogPostMeta = {
  slug: string;
  /** On-page H1. */
  title: string;
  /** <title> without the " | BT Banana" suffix the layout adds. Keep ≤47 chars. */
  metaTitle: string;
  /** Meta description, ≤155 chars. */
  description: string;
  /** Card / listing summary. */
  excerpt: string;
  category: "Buying guide" | "Growing guide" | "Market update";
  /** ISO dates (YYYY-MM-DD). */
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  image: string;
  imageAlt: string;
  keywords: string[];
  /** In-page table of contents; ids must match the h2 ids in the body. */
  toc: { id: string; label: string }[];
};

export type BlogPost = BlogPostMeta & {
  faqs: BlogFaq[];
  Body: ComponentType;
};

type PostModule = {
  meta: BlogPostMeta;
  faqs: BlogFaq[];
  default: ComponentType;
};

const modules: PostModule[] = [bulkVazhavithuGuide];

/** All posts, newest first. */
export const blogPosts: BlogPost[] = modules
  .map((m) => ({ ...m.meta, faqs: m.faqs, Body: m.default }))
  .sort((a, b) => b.datePublished.localeCompare(a.datePublished));

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatBlogDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
