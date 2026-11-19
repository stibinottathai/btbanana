import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ChevronRightIcon, LeafIcon } from "@/components/icons";
import { blogPosts, formatBlogDate } from "@/lib/blog";
import { primaryWhatsApp, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vazhavithu & Banana Farming Blog",
  description:
    "Practical guides for Kerala banana growers: how many suckers to order, when to plant Nendran, choosing healthy vazhavithu and buying in bulk.",
  alternates: { canonical: "/blog" },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: `Vazhavithu & Banana Farming Blog | ${SITE_NAME}`,
    description:
      "Practical guides for Kerala banana growers on buying and planting vazhavithu (banana suckers).",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

const evergreenGuides = [
  {
    href: "/how-to-plant-banana-suckers",
    title: "How to plant banana suckers",
    description: "Pit size, treatment, spacing and manure — step by step.",
  },
  {
    href: "/sucker-vs-tissue-culture",
    title: "Sucker vs tissue culture",
    description: "An honest comparison of cost, availability and establishment.",
  },
  {
    href: "/faq",
    title: "Vazhavithu FAQs",
    description: "Seeds vs suckers, delivery, varieties and what BT means.",
  },
];

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Blog`,
    url: `${SITE_URL}/blog`,
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    blogPost: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.datePublished,
      dateModified: p.dateModified,
    })),
  };

  return (
    <>
      <JsonLd data={blogJsonLd} />

      {/* ───────────────── Hero ───────────────── */}
      <section className="relative isolate overflow-hidden bg-green-950 text-white">
        <div
          aria-hidden="true"
          className="absolute -left-40 -top-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-green-800/40 blur-3xl"
        />
        <div className="mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6 lg:pt-5 [&_a]:text-green-100/70 [&_a:hover]:text-amber-300 [&_ol]:text-green-100/60 [&_[aria-current]]:text-white">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:pb-20 lg:pt-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-green-50 backdrop-blur">
            <LeafIcon className="h-4 w-4 text-amber-300" />
            Guides for Kerala banana growers
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            The <span className="text-amber-300">Vazhavithu</span> blog
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-green-50/85 sm:text-lg sm:leading-8">
            Straight answers on buying and planting banana suckers — how many
            to order, when to plant, and how to spot healthy stock.
          </p>
        </div>
      </section>

      {/* ───────────────── Featured + list ───────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        {featured && (
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl bg-white ring-1 ring-green-900/10 transition hover:shadow-xl hover:shadow-green-900/10 lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-green-50 lg:aspect-auto lg:min-h-80">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-green-950">
                  Latest
                </span>
              </div>
              <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                  {featured.category}
                </p>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-green-950 group-hover:text-green-800 sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 leading-7 text-neutral-600">{featured.excerpt}</p>
                <p className="mt-6 text-sm text-neutral-500">
                  <time dateTime={featured.datePublished}>
                    {formatBlogDate(featured.datePublished)}
                  </time>{" "}
                  · {featured.readingMinutes} min read
                </p>
                <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-bold text-green-800">
                  Read the guide
                  <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        {rest.length > 0 && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Reveal key={post.slug} className="grid">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-green-900/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-green-50">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                      {post.category}
                    </p>
                    <h2 className="mt-2 text-lg font-bold text-green-950">{post.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">{post.excerpt}</p>
                    <p className="mt-auto pt-4 text-xs text-neutral-500">
                      {formatBlogDate(post.datePublished)} · {post.readingMinutes} min read
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* ───────────────── Evergreen guides ───────────────── */}
      <section className="bg-[#f7f5ec] py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel>More guides</SectionLabel>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-green-950">
                Planting basics
              </h2>
            </div>
            <Link
              href="/banana-seeds"
              className="inline-flex items-center gap-1 text-sm font-bold text-green-800 hover:underline"
            >
              Vazhavithu varieties &amp; ordering
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {evergreenGuides.map((g) => (
              <Reveal key={g.href} className="grid">
                <Link
                  href={g.href}
                  className="group flex flex-col rounded-3xl bg-white p-6 ring-1 ring-green-900/10 transition hover:ring-green-700"
                >
                  <p className="font-bold text-green-950 group-hover:text-green-800">{g.title}</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{g.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-bold text-green-800">
                    Read
                    <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-col gap-4 rounded-3xl bg-green-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-lg font-bold">Have a question we haven&apos;t covered?</p>
              <p className="mt-1 text-sm text-green-100/75">
                Ask the owners on WhatsApp — every day, 6 am to 9 pm.
              </p>
            </div>
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="Hi BT Banana, I have a question about vazhavithu (banana suckers)."
              label="Ask on WhatsApp"
              size="md"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
