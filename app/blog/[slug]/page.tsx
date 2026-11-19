import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ChevronRightIcon, PhoneIcon } from "@/components/icons";
import { blogPosts, formatBlogDate, getBlogPost } from "@/lib/blog";
import {
  formatPhone,
  owners,
  primaryWhatsApp,
  SITE_NAME,
  SITE_URL,
  telHref,
} from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const path = `/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: `${post.metaTitle} | ${SITE_NAME}`,
      description: post.description,
      url: `${SITE_URL}${path}`,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const { Body } = post;
  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: "en-IN",
    keywords: post.keywords.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${path}` },
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo-256.webp` },
    },
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />

      {/* ───────────────── Header ───────────────── */}
      <header className="relative isolate overflow-hidden bg-green-950 text-white">
        <div
          aria-hidden="true"
          className="absolute -left-40 -top-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-green-800/40 blur-3xl"
        />
        <div className="mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6 lg:pt-5 [&_a]:text-green-100/70 [&_a:hover]:text-amber-300 [&_ol]:text-green-100/60 [&_[aria-current]]:text-white">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.metaTitle, href: path },
            ]}
          />
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-28 pt-10 sm:px-6 lg:pb-36 lg:pt-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
            {post.category}
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-green-50/85 sm:text-lg sm:leading-8">
            {post.excerpt}
          </p>
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-green-100/70">
            <span className="font-semibold text-white">By {SITE_NAME}</span>
            <span aria-hidden="true">·</span>
            <span>
              Published{" "}
              <time dateTime={post.datePublished}>{formatBlogDate(post.datePublished)}</time>
            </span>
            {post.dateModified !== post.datePublished && (
              <>
                <span aria-hidden="true">·</span>
                <span>
                  Updated{" "}
                  <time dateTime={post.dateModified}>{formatBlogDate(post.dateModified)}</time>
                </span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span>{post.readingMinutes} min read</span>
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative -mt-20 aspect-[16/8] overflow-hidden rounded-3xl bg-green-100 shadow-xl shadow-green-900/10 lg:-mt-28">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            preload
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* ───────────────── Body + sidebar ───────────────── */}
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16 lg:py-16">
        <article className="blog-prose min-w-0">
          <Body />

          <div className="not-prose mt-14">
            <Faq items={post.faqs} title="Frequently asked questions" />
          </div>

          <p className="not-prose mt-10 border-t border-green-100 pt-6 text-sm leading-6 text-neutral-500">
            Agronomy figures follow Kerala Agricultural University (KAU)
            recommendations. Local conditions vary — for field-specific advice,
            check with your Krishi Bhavan.
          </p>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-6">
            <nav aria-label="On this page" className="rounded-3xl bg-white p-6 ring-1 ring-green-900/10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                On this page
              </p>
              <ol className="mt-4 space-y-2.5 text-sm">
                {post.toc.map((item, i) => (
                  <li key={item.id} className="flex gap-2">
                    <span className="w-5 shrink-0 font-bold tabular-nums text-amber-600">
                      {i + 1}.
                    </span>
                    <a
                      href={`#${item.id}`}
                      className="text-neutral-700 hover:text-green-800 hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="rounded-3xl bg-green-950 p-6 text-white">
              <p className="font-bold">Get a bulk quote</p>
              <p className="mt-1 text-sm leading-6 text-green-100/75">
                Variety, quantity, district and planting month — that&apos;s
                all we need.
              </p>
              <WhatsAppButton
                phone={primaryWhatsApp}
                message="Hi BT Banana, I'd like a bulk quote for Vazhavithu. Variety: ___, Quantity / land area: ___, District: ___, Planting month: ___"
                label="WhatsApp us"
                size="md"
                className="mt-5 w-full"
              />
              <ul className="mt-4 space-y-2 text-sm">
                {owners.map((o) => (
                  <li key={o.phone}>
                    <a
                      href={telHref(o.phone)}
                      className="flex items-center justify-between gap-2 text-green-100 hover:text-amber-300"
                    >
                      <span>{o.name.split(" ")[0]}</span>
                      <span className="flex items-center gap-1.5 tabular-nums">
                        <PhoneIcon className="h-3.5 w-3.5" />
                        {formatPhone(o.phone)}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>

      {/* ───────────────── Next reads ───────────────── */}
      <section className="border-t border-green-100 bg-[#f7f5ec] py-14">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 sm:px-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
              Keep reading
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="text-green-900 hover:underline">
                    {p.metaTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/how-to-plant-banana-suckers" className="text-green-900 hover:underline">
                  How to plant banana suckers
                </Link>
              </li>
              <li>
                <Link href="/banana-seeds" className="text-green-900 hover:underline">
                  Vazhavithu varieties
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 rounded-full bg-green-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            All posts
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
