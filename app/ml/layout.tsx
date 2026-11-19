/**
 * Malayalam section. The root <html lang="en"> is shared with the English
 * site, so the Malayalam content is wrapped in lang="ml" for browsers, screen
 * readers and search engines. hreflang is set per page via `alternates`.
 */
export default function MalayalamLayout({ children }: LayoutProps<"/ml">) {
  return <div lang="ml">{children}</div>;
}
