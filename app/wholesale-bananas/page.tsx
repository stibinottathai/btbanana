import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { LocationCard } from "@/components/LocationCard";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { CheckIcon, LeafIcon, MapPinIcon } from "@/components/icons";
import { branches, primaryPhone, primaryWhatsApp, SITE_NAME, SITE_URL } from "@/lib/site";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Wholesale Banana Supplier in Kannur, Kerala | BT Banana",
  description:
    "Looking for a wholesale banana supplier in Kannur? BT Banana supplies fresh wholesale bananas (Nendran, Njali Poovan, Robusta, Palayankodan) from Alakode & Nellipara across Kannur, Kasaragod, and Wayanad.",
  alternates: {
    canonical: `${SITE_URL}/wholesale-bananas`,
  },
  openGraph: {
    title: "Wholesale Banana Supplier in Kannur, Kerala | BT Banana",
    description:
      "Wholesale banana supply from Alakode and Nellipara, Kannur — fresh banana varieties, bulk quantities, chips bananas, and daily quotations across Kerala.",
    url: `${SITE_URL}/wholesale-bananas`,
  },
};

const wholesaleFaqs = [
  {
    question: "Who is a wholesale banana supplier in Kannur?",
    answer:
      "BT Banana is a dedicated wholesale banana supplier, banana wholesaler, and merchant in Kannur district, Kerala. We operate from Alakode and Nellipara, supplying fresh bulk bananas to traders, retailers, chips factories, and caterers across Kannur, Kasaragod, and Wayanad.",
  },
  {
    question: "Where can I buy bananas wholesale in Kannur?",
    answer:
      "You can buy bananas wholesale directly from BT Banana's depots in Alakode (Malayora Highway) and Nellipara in Kannur district. You can arrange direct pickup from our hubs or coordinate vehicle delivery for commercial quantities.",
  },
  {
    question: "Which banana varieties are available wholesale?",
    answer:
      "We supply Nendran (raw cooking and ripe table), Njali Poovan (sweet table variety), Palayankodan / Mysore Poovan, Robusta, and Poovan bananas. Availability depends on local morning harvests and season.",
  },
  {
    question: "Who can buy wholesale bananas from BT Banana?",
    answer:
      "Our wholesale service is open to fruit traders, retail supermarkets, local grocery shops, banana chips manufacturers, bakeries, caterers, and bulk commercial buyers. We do not focus on individual retail purchases.",
  },
  {
    question: "How can I get wholesale banana pricing?",
    answer:
      "Wholesale prices vary based on variety, quality, quantity, market conditions and delivery location. Contact Thomas M.J (9447483169) or Albin Augustine (8086648081) directly via phone or WhatsApp with your required quantity and town for an immediate quote.",
  },
  {
    question: "What details should I provide when requesting a wholesale quote?",
    answer:
      "When requesting a quote, please specify: (1) banana variety needed, (2) approximate quantity in kg or bunches, (3) delivery destination or pickup preference, and (4) your expected timeline.",
  },
];

const wholesaleJsonLd = {
  "@context": "https://schema.org",
  "@type": "WholesaleStore",
  name: "BT Banana Wholesale",
  description:
    "Wholesale banana supplier in Kannur, Kerala, offering fresh bulk bananas, Nendran for chips, and banana suckers from Alakode and Nellipara.",
  url: `${SITE_URL}/wholesale-bananas`,
  telephone: `+91${primaryPhone}`,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Alakode",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: wholesaleFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Wholesale Bananas",
      item: `${SITE_URL}/wholesale-bananas`,
    },
  ],
};

const bananaProducts = products.filter((p) => p.category === "banana");

export default function WholesaleBananasPage() {
  return (
    <div>
      <JsonLd data={wholesaleJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[{ label: "Wholesale Bananas", href: "/wholesale-bananas" }]}
        />
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold text-emerald-900">
            <LeafIcon className="h-3.5 w-3.5 text-emerald-700" />
            Bulk Banana Supply • Alakode &amp; Nellipara, Kannur
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-green-950 sm:text-5xl">
            Wholesale Banana Supplier in Kannur, Kerala
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-700">
            BT Banana supplies fresh wholesale bananas in commercial bulk quantities from our Alakode and Nellipara depots, serving traders, retail fruit shops, supermarkets, chips makers, and caterers across Kannur, Kasaragod, and Wayanad districts.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CallButton phone={primaryPhone} label="Get Wholesale Price" />
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="Hi BT Banana, I would like to request wholesale banana pricing for Kannur."
              label="WhatsApp for Rates"
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-xs">
            <Link
              href="/banana-for-chips"
              className="inline-flex items-center gap-1 rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-1.5 font-bold text-emerald-950 hover:bg-emerald-100"
            >
              🍌 Raw Green Bananas for Chips →
            </Link>
            <Link
              href="/banana-merchant-kannur"
              className="inline-flex items-center gap-1 rounded-lg border border-green-300 bg-white px-3 py-1.5 font-bold text-green-950 hover:bg-green-50"
            >
              🏪 Banana Merchant Kannur →
            </Link>
            <Link
              href="/banana-prices"
              className="inline-flex items-center gap-1 rounded-lg border border-amber-300 bg-amber-50 px-3 py-1.5 font-bold text-amber-950 hover:bg-amber-100"
            >
              📊 Daily Market Rates →
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg border-4 border-white">
          <Image
            src="/images/wholesale.png"
            alt="Wholesale bananas supplied in bulk by BT Banana in Alakode, Nellipara, Kannur, Kerala"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Quick Answer Block (AEO / Answer Engine Optimization) */}
      <section className="border-y border-emerald-200 bg-emerald-50/70 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-emerald-300/80 bg-white p-6 shadow-sm sm:p-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-900">
              Quick Answer • Wholesale Bananas in Kannur
            </span>
            <h2 className="mt-3 text-2xl font-bold text-green-950">
              Looking for a wholesale banana supplier in Kannur?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-800">
              <strong>BT Banana</strong> is a dedicated wholesale banana supplier, banana merchant, and wholesaler based on Malayora Highway in <strong>Alakode and Nellipara, Kannur district, Kerala</strong>. We supply fresh banana varieties in bulk—including Nendran (Ethakka), Njali Poovan, Palayankodan, Robusta, and Poovan—to traders, fruit retailers, chips manufacturers, and caterers across Kannur, Kasaragod, and Wayanad. Sourced directly through farm networks, consignments are graded for high yield and freshness. Wholesale prices vary based on variety, quality, quantity, market conditions and delivery location—contact us directly by phone or WhatsApp for today&apos;s verified quotation.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-xs font-semibold text-green-900">
              <span className="flex items-center gap-1.5">
                <CheckIcon className="h-4 w-4 text-emerald-700" />
                Varieties: Nendran, Njali Poovan, Robusta, Palayankodan
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="h-4 w-4 text-emerald-700" />
                Buyers: Traders, Retailers, Chips Makers, Bakeries
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="h-4 w-4 text-emerald-700" />
                Service Hubs: Alakode &amp; Nellipara, Kannur
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Breakdown: Buyer Types & Ordering Process */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-green-950">Who We Supply</h3>
            <p className="mt-2 text-sm text-neutral-600">
              We serve commercial B2B buyers requiring dependable bulk dispatches:
            </p>
            <ul className="mt-4 space-y-2 text-xs font-medium text-neutral-700">
              <li className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                Produce traders &amp; commission merchants
              </li>
              <li className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                Retail fruit shops &amp; supermarkets
              </li>
              <li className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                Banana chips units &amp; hot chips stalls
              </li>
              <li className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                Event caterers &amp; wedding cooks (Sadya upperi)
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-green-950">Quantities &amp; Availability</h3>
            <p className="mt-2 text-sm text-neutral-600">
              From commercial bunch lots to multi-quintal freight consignments:
            </p>
            <ul className="mt-4 space-y-2 text-xs font-medium text-neutral-700">
              <li className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                Small commercial batches: 50 kg to 200 kg
              </li>
              <li className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                Bulk wholesale shipments: Multi-quintal &amp; tons
              </li>
              <li className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                Regular scheduled daily/weekly deliveries
              </li>
              <li className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                Availability adjusts with season &amp; morning arrivals
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-green-950">Pickup &amp; Delivery Logistics</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Convenient road access from Malayora Highway in North Kerala:
            </p>
            <ul className="mt-4 space-y-2 text-xs font-medium text-neutral-700">
              <li className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                Self-collection from Alakode or Nellipara depots
              </li>
              <li className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                Road transport arranged across Kannur &amp; Kasaragod
              </li>
              <li className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                Highland freight connections into Wayanad
              </li>
              <li className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                Direct owner verification on every dispatch
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Varieties Overview */}
      <section className="border-y border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Banana Varieties We Supply Wholesale
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            We deal in genuine Kerala banana varieties harvested fresh. Enquire for today&apos;s ready stock:
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bananaProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-green-950">
              Bulk &amp; Wholesale Purchasing
            </h2>
            <p className="mt-4 leading-7 text-neutral-700">
              Our banana supply is set up for bulk purchasing — we work with
              traders, retailers, and chips processors who need consistent quantities rather
              than one-off small purchases. Reach out to discuss the
              quantity you need and we&apos;ll confirm what we can supply.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-950">
              How to Contact Us
            </h2>
            <ul className="mt-4 space-y-3">
              {[
                "Call or WhatsApp us directly with your requirement",
                "Let us know the banana variety and quantity you're looking for",
                "We'll confirm current availability and wholesale pricing",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 leading-7 text-neutral-700"
                >
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-green-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Embedded Quote Form */}
      <section className="border-t border-green-100 bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-green-950 text-center">
            Request Instant Wholesale Banana Quote
          </h2>
          <p className="mt-2 text-center text-sm text-neutral-600">
            Send your variety, quantity, and destination to get verified farm gate &amp; mandi rates directly on WhatsApp:
          </p>
          <div className="mt-8">
            <EnquiryForm
              defaultProduct="Wholesale Nendran Banana (പച്ച / പഴുത്ത ഏത്തക്ക)"
              pageSource="Wholesale Bananas Page"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Faq items={wholesaleFaqs} title="Frequently Asked Questions — Wholesale Bananas in Kannur" />
      </section>

      <section className="border-t border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Banana Supplier Near Kannur, Alakode &amp; Nellipara
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            We supply wholesale bananas from two branches in Kerala, serving
            customers across Kannur, Kasaragod, and Wayanad districts.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {branches.map((branch) => (
              <LocationCard key={branch.slug} branch={branch} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
