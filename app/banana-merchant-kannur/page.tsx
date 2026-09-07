import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { LocationCard } from "@/components/LocationCard";
import { CheckIcon, LeafIcon, MapPinIcon } from "@/components/icons";
import {
  branches,
  owners,
  primaryPhone,
  primaryWhatsApp,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Banana Merchant in Kannur | Wholesale Banana Trading Kerala | BT Banana",
  description:
    "Looking for an established banana merchant in Kannur? BT Banana coordinates direct farm trading and wholesale supply of fresh Nendran, Njali Poovan, Robusta, and Palayankodan from Alakode & Nellipara across Kannur, Kasaragod, and Wayanad.",
  alternates: {
    canonical: `${SITE_URL}/banana-merchant-kannur`,
  },
  openGraph: {
    title: "Banana Merchant in Kannur | BT Banana Wholesale Trading",
    description:
      "Direct banana merchant and wholesaler based in Kannur district, Kerala. Bulk supply for traders, retailers, chips factories, and catering networks.",
    url: `${SITE_URL}/banana-merchant-kannur`,
    type: "website",
  },
};

const merchantFaqs = [
  {
    question: "Who is a reliable banana merchant in Kannur for regular bulk supply?",
    answer:
      "BT Banana operates as an active banana merchant and wholesaler in Kannur district, based at Alakode and Nellipara along the Malayora Highway. We source fresh harvests directly through farm channels and morning mandi arrivals to supply produce merchants, supermarkets, chips fryers, and retail vendors.",
  },
  {
    question: "What varieties does BT Banana trade as a banana merchant?",
    answer:
      "We trade primary Kerala varieties including Nendran (cooking plantains and dessert fruit), Njali Poovan (premium thin-skinned table banana), Palayankodan / Mysore Poovan (hardy table variety), Robusta (large green bunches), and Poovan bananas.",
  },
  {
    question: "How does banana merchant trading work with BT Banana?",
    answer:
      "Buyers contact our owners directly by phone or WhatsApp to specify variety, desired bunch grade, quantity, and schedule. Consignments can be inspected and picked up at our Alakode or Nellipara hubs, or arranged for road freight delivery across Kannur, Kasaragod, and Wayanad.",
  },
  {
    question: "Can banana chips manufacturers buy raw plantains from BT Banana?",
    answer:
      "Yes. A significant part of our merchant trading involves supplying high-starch, mature green Nendran (Pacha Ethakka) to hot chips units, bakeries, and commercial chips processors.",
  },
  {
    question: "What are the payment and pricing terms for wholesale merchant orders?",
    answer:
      "Wholesale prices vary based on variety, quality, quantity, market conditions and delivery location. We provide clear, transparent pricing confirmed before dispatch without hidden commission surcharges.",
  },
  {
    question: "Which areas in and around Kannur does BT Banana serve?",
    answer:
      "We serve Kannur district—including Alakode, Nellipara, Thaliparamba, Cherupuzha, Payyanur, and Kannur town—alongside neighboring Kasaragod (Chittarikkal, Vellarikundu) and Wayanad districts.",
  },
];

const merchantJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "WholesaleStore"],
  name: "BT Banana — Banana Merchant in Kannur",
  description:
    "Banana merchant and wholesale banana trader in Kannur district, Kerala, supplying fresh bananas in bulk from Alakode and Nellipara depots.",
  url: `${SITE_URL}/banana-merchant-kannur`,
  telephone: `+91${primaryPhone}`,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Malayora Highway, Opposite Rajadhani Hotel",
    addressLocality: "Alakode",
    addressRegion: "Kerala",
    postalCode: "670571",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "Place", name: "Kannur" },
    { "@type": "Place", name: "Alakode" },
    { "@type": "Place", name: "Nellipara" },
    { "@type": "Place", name: "Kasaragod" },
    { "@type": "Place", name: "Wayanad" },
    { "@type": "Place", name: "Thaliparamba" },
    { "@type": "Place", name: "Cherupuzha" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: merchantFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbsJsonLd = {
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
      name: "Banana Merchant Kannur",
      item: `${SITE_URL}/banana-merchant-kannur`,
    },
  ],
};

const buyerTypes = [
  {
    title: "Produce Traders & Sub-Wholesalers",
    desc: "Dependable multi-quintal lots of Nendran, Robusta, and dessert varieties for distribution across local village markets and city wholesale mandis.",
  },
  {
    title: "Supermarkets & Retail Fruit Shops",
    desc: "Regular bunch deliveries with uniform grading, minimal handling damage, and fresh daily arrivals for retail counter display.",
  },
  {
    title: "Banana Chips & Snack Processors",
    desc: "High-starch, firm raw green Nendran (പച്ച ഏത്തക്ക) harvested at mature green stage specifically for crisp chips frying.",
  },
  {
    title: "Event Caterers & Sadya Kitchens",
    desc: "Bulk plantains and cooking bananas timed precisely for marriage feasts, temple festivals, and traditional sadya upperi / kalan preparations.",
  },
];

const tradingVarieties = products.filter((p) => p.category === "banana").slice(0, 4);

export default function BananaMerchantKannurPage() {
  return (
    <>
      <JsonLd data={merchantJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbsJsonLd} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-emerald-50/40 to-white pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: "Banana Merchant Kannur", href: "/banana-merchant-kannur" },
            ]}
          />

          <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold text-emerald-900">
                  <LeafIcon className="h-3.5 w-3.5 text-emerald-700" />
                  Commercial Agricultural Trading • Kannur, Kerala
                </span>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                  വാഴപ്പഴം മൊത്തവ്യാപാരി
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-green-950 sm:text-4xl lg:text-5xl">
                Banana Merchant in Kannur
              </h1>

              <p className="mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
                Searching for an active <strong className="text-green-950">banana merchant in Kannur</strong> for reliable wholesale trading and bulk banana supply? BT Banana operates commercial wholesale depots in <strong className="text-green-900">Alakode</strong> and <strong className="text-green-900">Nellipara</strong>, providing produce traders, retailers, chips factories, and catering networks with consistent consignments of fresh Kerala bananas.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <CallButton
                  phone={primaryPhone}
                  label="Call Banana Merchant"
                  className="shadow-md shadow-green-900/10"
                />
                <WhatsAppButton
                  phone={primaryWhatsApp}
                  message="Hi BT Banana, I am looking for a banana merchant in Kannur for regular wholesale supply."
                  label="WhatsApp BT Banana"
                  className="shadow-md shadow-green-900/10"
                />
              </div>

              {/* Quick internal links */}
              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <Link
                  href="/wholesale-bananas"
                  className="rounded-lg border border-green-200 bg-white px-3 py-1.5 font-semibold text-green-900 hover:bg-green-100"
                >
                  🍌 Wholesale Banana Hub →
                </Link>
                <Link
                  href="/banana-for-chips"
                  className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 font-semibold text-emerald-950 hover:bg-emerald-100"
                >
                  🍟 Raw Bananas for Chips →
                </Link>
                <Link
                  href="/banana-prices"
                  className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 font-semibold text-amber-950 hover:bg-amber-100"
                >
                  📊 Daily Market Rates →
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border-4 border-white shadow-xl">
              <Image
                src="/images/wholesale.png"
                alt="Banana merchant trading facility and wholesale stock in Kannur, Kerala - BT Banana"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer for AEO */}
      <section className="border-y border-emerald-200 bg-emerald-50/70 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-emerald-300/80 bg-white p-6 shadow-sm sm:p-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-900">
              Quick Answer • Banana Trading in Kannur
            </span>
            <h2 className="mt-3 text-2xl font-bold text-green-950">
              Who is an established banana merchant in Kannur?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-800">
              <strong>BT Banana</strong> is a licensed agricultural banana merchant and wholesale supplier headquartered on Malayora Highway in <strong>Alakode</strong> with an additional distribution branch in <strong>Nellipara, Kannur district, Kerala</strong>. Managed directly by Thomas M.J and Albin Augustine, BT Banana bridges farm networks across North Kerala and commercial buyers, trading in high-volume Nendran, Njali Poovan, Palayankodan, and Robusta. Produce is graded for uniform weight and freshness, supporting daily orders from 50 kg to multi-quintal commercial consignments.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Sourcing & Trading Capabilities */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-green-800">
            Professional Produce Trading
          </span>
          <h2 className="mt-2 text-3xl font-bold text-green-950 sm:text-4xl">
            What BT Banana Supplies as a Banana Merchant
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            We handle structured wholesale sourcing and transparent trading terms for buyers who depend on predictable quality:
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {buyerTypes.map((buyer) => (
            <div
              key={buyer.title}
              className="rounded-2xl border border-green-100 bg-green-50/40 p-6 flex flex-col justify-between"
            >
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-white font-bold">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-green-950">
                  {buyer.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                  {buyer.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banana Varieties Handled */}
      <section className="border-y border-green-100 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-green-950 sm:text-3xl">
                Banana Varieties in Commercial Trade
              </h2>
              <p className="mt-1 text-sm text-neutral-600">
                Fresh arrivals sourced from regional North Kerala growers and mandis:
              </p>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-green-800 hover:underline"
            >
              View all varieties →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tradingVarieties.map((v) => (
              <div
                key={v.slug}
                className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-green-950">{v.name}</h3>
                  <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                    {v.shortDescription}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-200">
                  <Link
                    href={v.detailHref || `/products/${v.slug}`}
                    className="text-xs font-bold text-emerald-800 hover:underline"
                  >
                    View variety specs →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing & Bulk Ordering Workflow */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-950">
              Sourcing, Grading &amp; Ordering Process
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-700">
              As commercial banana merchants in Kannur, we follow a straightforward quality protocol to ensure our trade partners receive viable stock:
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-800 text-xs font-bold text-white">
                  1
                </span>
                <div>
                  <h4 className="text-sm font-bold text-green-950">Morning Farm Harvesting &amp; Arrivals</h4>
                  <p className="text-xs text-neutral-600">Fruit is harvested early morning and received at our Alakode and Nellipara depots for grading.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-800 text-xs font-bold text-white">
                  2
                </span>
                <div>
                  <h4 className="text-sm font-bold text-green-950">Sorting by Commercial Grade</h4>
                  <p className="text-xs text-neutral-600">Bunches are sorted into chips-grade (mature green, high dry matter), premium retail table fruit, and economy wholesale lots.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-800 text-xs font-bold text-white">
                  3
                </span>
                <div>
                  <h4 className="text-sm font-bold text-green-950">Upfront Quotation &amp; Confirmation</h4>
                  <p className="text-xs text-neutral-600">We communicate today&apos;s verified rate per kilogram or quintal directly via WhatsApp or phone call.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-800 text-xs font-bold text-white">
                  4
                </span>
                <div>
                  <h4 className="text-sm font-bold text-green-950">Depot Pickup or Scheduled Road Transport</h4>
                  <p className="text-xs text-neutral-600">Vehicles can load directly from our Malayora Highway depots, or scheduled freight is dispatched to your destination.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-green-950">Request Banana Merchant Quote</h3>
            <p className="mt-1 text-xs text-neutral-600">
              Submit your trade requirements to receive direct morning rates:
            </p>
            <div className="mt-6">
              <EnquiryForm
                defaultProduct="Wholesale Nendran Banana (പച്ച / പഴുത്ത ഏത്തക്ക)"
                pageSource="Banana Merchant Kannur Page"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="border-t border-green-100 bg-green-50/50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-green-800">
              Regional Trading Corridor
            </span>
            <h2 className="mt-2 text-3xl font-bold text-green-950">
              Areas Served by BT Banana in Kannur &amp; Malabar
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Convenient road distribution across North Kerala agricultural belts:
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {[
              { name: "Alakode", slug: "alakode" },
              { name: "Nellipara", slug: "nellipara" },
              { name: "Kannur", slug: "kannur" },
              { name: "Thaliparamba", slug: "thaliparamba" },
              { name: "Cherupuzha", slug: "cherupuzha" },
              { name: "Kasaragod", slug: "kasaragod" },
              { name: "Vellarikundu", slug: "vellarikundu" },
              { name: "Chittarikkal", slug: "chittarikkal" },
              { name: "Wayanad", slug: "wayanad" },
            ].map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="flex items-center gap-1.5 rounded-xl border border-green-200 bg-white px-4 py-2 text-xs font-semibold text-green-950 hover:bg-green-100"
              >
                <MapPinIcon className="h-3.5 w-3.5 text-emerald-700" />
                Wholesale Bananas {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Faq
          items={merchantFaqs}
          title="Frequently Asked Questions — Banana Merchant in Kannur"
        />
      </section>

      {/* Depots */}
      <section className="border-t border-green-100 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Our Trading Hubs in Kannur
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Visit or contact our two primary depots along Malayora Highway:
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {branches.map((branch) => (
              <LocationCard key={branch.slug} branch={branch} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
