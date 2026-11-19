/**
 * Default social / AI link-preview image (rendered by app/opengraph-image.tsx).
 *
 * Next.js merges `openGraph` shallowly: any page that sets its own
 * `openGraph` replaces the layout's entirely and drops the root image. So every
 * page with an `openGraph` block must list an image explicitly — use this one
 * unless the page has a better, page-specific photo.
 */
export const DEFAULT_OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "BT Banana — Vazhavithu (banana suckers) delivered across Kerala and wholesale bananas in Kannur",
};
