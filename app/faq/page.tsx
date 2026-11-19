import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { primaryPhone, primaryWhatsApp, SITE_URL } from "@/lib/site";
import { faqGroups } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Vazhavithu & Banana Sucker FAQs",
  description:
    "Answers on banana suckers (vazhavithu): seeds vs suckers, choosing and treating suckers, price, spacing, delivery and what BT in BT Banana means.",
  alternates: {
    canonical: "/faq",
    languages: { "en-IN": "/faq", "ml-IN": "/ml/faq", "x-default": "/faq" },
  },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: "Vazhavithu & Banana Sucker FAQs | BT Banana",
    description:
      "Seeds vs suckers, choosing and treating banana suckers, spacing, price and delivery across Kerala.",
    url: `${SITE_URL}/faq`,
  },
};

// One FAQPage for the whole page, rather than one per group.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((g) =>
    g.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  ),
};

export default function FaqPage() {
  return (
    <div>
      <JsonLd data={faqJsonLd} />
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
          Vazhavithu &amp; Banana Sucker FAQs
        </h1>
        <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg">
          Bananas aren&apos;t grown from seeds — farmers plant suckers, called{" "}
          <strong className="text-green-950">vazhavithu</strong> or vazhakannu (വാഴക്കന്ന്).
          Here are straight answers to what farmers ask us most, with planting figures from
          Kerala Agricultural University (KAU).
        </p>
        <nav aria-label="FAQ sections" className="mt-6 flex flex-wrap gap-2">
          {faqGroups.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-900 hover:bg-green-100"
            >
              {g.title}
            </a>
          ))}
          <Link
            href="/ml/faq"
            lang="ml"
            className="rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-900 hover:bg-amber-100"
          >
            മലയാളം
          </Link>
        </nav>
      </div>

      <div className="mx-auto max-w-4xl space-y-12 px-4 py-12 sm:px-6">
        {faqGroups.map((g) => (
          <Faq key={g.id} id={g.id} items={g.items} title={g.title} schema={false} />
        ))}
      </div>

      <section className="border-t border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">Still have a question?</h2>
          <p className="mt-3 text-neutral-700">
            Call or WhatsApp us with your variety, quantity and delivery district.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton phone={primaryPhone} label="Call Us" />
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="Hi BT Banana, I want to order banana suckers – variety: ___, quantity: ___"
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/banana-seeds" className="font-semibold text-green-700 hover:text-green-900">
              Vazhavithu varieties &amp; delivery &rarr;
            </Link>
            <Link href="/how-to-plant-banana-suckers" className="font-semibold text-green-700 hover:text-green-900">
              Planting guide &rarr;
            </Link>
            <Link href="/sucker-vs-tissue-culture" className="font-semibold text-green-700 hover:text-green-900">
              Sucker vs tissue culture &rarr;
            </Link>
            <Link href="/blog/bulk-vazhavithu-order-guide" className="font-semibold text-green-700 hover:text-green-900">
              Bulk vazhavithu order guide &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
