import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  branches,
  coveredAreas,
  defaultEnquiryMessage,
  owners,
  primaryPhone,
  primaryWhatsApp,
  SITE_DESCRIPTION,
  SITE_URL,
} from "@/lib/site";
import { products } from "@/lib/products";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { LocationCard } from "@/components/LocationCard";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { CheckIcon, LeafIcon, MapPinIcon, UserIcon } from "@/components/icons";
import { serviceLocations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Wholesale Banana Supplier in Kannur, Kerala | BT Banana",
  description:
    "Looking for a wholesale banana supplier in Kannur? BT Banana supplies fresh wholesale bananas, raw green Nendran for chips, and banana suckers (Vazhavithu) from Alakode & Nellipara across Kannur, Kasaragod, and Wayanad.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Wholesale Banana Supplier in Kannur, Kerala | BT Banana",
    description:
      "Wholesale banana supplier, banana merchant, and banana wholesaler based in Alakode and Nellipara, Kannur district, Kerala. Bulk supply for traders, chips makers, and retailers.",
    url: SITE_URL,
    type: "website",
  },
};

const homeFaqs = [
  {
    question: "Looking for a wholesale banana supplier in Kannur, Alakode, or Nellipara?",
    answer:
      "BT Banana is a wholesale banana supplier, banana merchant, and banana wholesaler based on Malayora Highway in Alakode and Nellipara, Kannur district, Kerala. We supply fresh wholesale bananas, raw Nendran for chips, and banana suckers (Vazhavithu) directly to traders, retailers, chips manufacturers, and farmers with direct phone and WhatsApp contact.",
  },
  {
    question: "Do you supply raw bananas for banana chips (Pacha Ethakka)?",
    answer:
      "Yes. We specialize in supplying high-starch raw green Nendran (പച്ച ഏത്തക്ക) tailored for hot chips shops, snack factories, and bakeries across Kerala for crisp, golden frying with minimal oil absorption.",
  },
  {
    question: "How can I check today's wholesale banana price in Kerala?",
    answer:
      "Wholesale banana rates fluctuate daily based on morning auction arrivals and quality. Wholesale prices vary based on variety, quality, quantity, market conditions and delivery location. Contact Thomas M.J (9447483169) or Albin Augustine (8086648081) directly for today's verified quotation.",
  },
  {
    question: "Does BT Banana sell banana suckers / seeds (Vazhavithu)?",
    answer:
      "Yes. We supply vigorous banana planting suckers — locally known in Malayalam as Vazhavithu (വാഴവിത്ത്) — for farmers and commercial growers, with pickup and delivery arranged across Kannur, Wayanad, and all districts of Kerala.",
  },
  {
    question: "Do you supply wholesale bananas to Kasaragod and Wayanad districts?",
    answer:
      "Yes. From our Alakode and Nellipara facilities, we regularly supply traders, fruit shops, and farmers across Kannur, Kasaragod (including Chittarikkal and Vellarikundu), and Wayanad districts.",
  },
  {
    question: "How do I place a wholesale order or request a quote?",
    answer:
      "Call or WhatsApp Thomas M.J or Albin Augustine directly, or submit the enquiry form on our website with your required variety, quantity, and destination. We will confirm current availability and wholesale rates promptly.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const heroTrustPoints = [
  { icon: LeafIcon, label: "Fresh & Natural" },
  { icon: CheckIcon, label: "Premium Quality" },
  { icon: UserIcon, label: "Trusted by Farmers" },
];

const aboutStats = [
  { value: String(branches.length), label: "Branches in Kerala" },
  {
    value: "5",
    label: "Named varieties",
  },
  { value: String(coveredAreas.districts.length), label: "Districts served" },
];

const aboutHighlights = [
  "Wholesale banana supply",
  "Different banana varieties",
  "Banana seed / Vazhavithu supply",
  "Reasonable pricing",
  "Alakode branch",
  "Nellipara branch",
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const benefits = [
  {
    title: "Wholesale Supply",
    description:
      "We supply bananas and banana seeds in bulk to farmers, traders, retailers, and other businesses.",
  },
  {
    title: "Multiple Banana Varieties",
    description:
      "Nendran, Palayankodan, Robusta, Poovan, and plantain varieties — we deal in different types of bananas depending on availability.",
  },
  {
    title: "Banana Seeds / Vazhavithu Available",
    description:
      "Planting material for farmers looking to grow their own banana crop, supplied at reasonable prices.",
  },
  {
    title: "Reasonable Pricing",
    description:
      "We offer our bananas and banana seeds at fair, reasonable wholesale prices.",
  },
  {
    title: "Two Convenient Branches",
    description:
      "Supply available from our Alakode branch and our Nellipara branch in Kerala.",
  },
  {
    title: "Direct Contact for Enquiries",
    description:
      "Speak directly with Thomas or Albin over phone or WhatsApp for any enquiry.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-green-50/50 to-white">
        {/* Decorative ambient background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-green-300/30 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-amber-300/25 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-24 lg:grid-cols-2 lg:gap-16 lg:pt-16 lg:pb-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-green-800 shadow-sm ring-1 ring-green-900/10 backdrop-blur">
              <LeafIcon className="h-4 w-4 text-green-600" />
              Alakode &amp; Nellipara, Kannur, Kerala
            </p>

            <h1 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-green-950 sm:text-4xl lg:text-5xl">
              Wholesale Banana Supplier in Kannur, Kerala
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-700">
              BT Banana is an established <strong className="font-semibold text-green-950">banana wholesaler and merchant in Kannur</strong>. From our primary depots in <strong className="font-semibold text-green-900">Alakode</strong> and <strong className="font-semibold text-green-900">Nellipara</strong>, we supply fresh wholesale bananas, raw green Nendran for chips (പച്ച ഏത്തക്ക), and healthy banana suckers / Vazhavithu (വാഴവിത്ത്) across <strong className="font-semibold text-green-900">Kannur, Kasaragod, and Wayanad</strong> districts.
            </p>

            <div className="mt-8 flex flex-row flex-nowrap items-center gap-2.5 sm:gap-4">
              <CallButton
                phone={primaryPhone}
                size="md"
                label={
                  <>
                    <span className="hidden sm:inline">Call for Wholesale Orders</span>
                    <span className="sm:hidden">Call for Orders</span>
                  </>
                }
                ariaLabel="Call for Wholesale Orders"
                className="whitespace-nowrap shadow-md shadow-green-900/10 transition-shadow hover:shadow-lg"
              />
              <WhatsAppButton
                phone={primaryWhatsApp}
                message={defaultEnquiryMessage}
                size="md"
                label={
                  <>
                    <span className="hidden sm:inline">WhatsApp BT Banana</span>
                    <span className="sm:hidden">WhatsApp Us</span>
                  </>
                }
                ariaLabel="WhatsApp BT Banana"
                className="whitespace-nowrap shadow-md shadow-green-900/10 transition-shadow hover:shadow-lg"
              />
            </div>
          </div>

          <div className="relative group lg:mt-6 xl:mt-7">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-green-600/30 via-emerald-500/15 to-amber-500/30 blur-2xl opacity-75 transition duration-500 group-hover:opacity-100" />

            {/* Main Image Frame with Premium Multi-layer Border & Shadow */}
            <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-white shadow-[0_20px_50px_rgba(6,78,59,0.2)] ring-1 ring-green-900/10">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/images/nendran.png"
                  alt="Fresh bananas supplied wholesale by BT Banana, Alakode & Nellipara, Kerala"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Floating trust card */}
            <div className="absolute -bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-xl ring-1 ring-green-900/10 backdrop-blur sm:right-auto sm:left-8 sm:w-auto">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-400 text-green-950">
                <LeafIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold leading-tight text-green-950">
                  Quality You Can Trust
                </p>
                <p className="text-xs font-medium text-neutral-500">
                  From Root to Fruit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-Down Feature Bar: Trust Highlights & Core Service Routes */}
      <section className="border-y border-green-100 bg-white/95 py-6 shadow-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Trust highlights */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              {heroTrustPoints.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-green-950">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <Link
                href="/wholesale-bananas"
                className="rounded-lg border border-green-200 bg-green-50/60 px-3 py-1.5 font-semibold text-green-900 hover:bg-green-100 transition"
              >
                🍌 Wholesale Bananas →
              </Link>
              <Link
                href="/banana-merchant-kannur"
                className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 font-semibold text-emerald-950 hover:bg-emerald-100 transition"
              >
                🏪 Banana Merchant Kannur →
              </Link>
              <Link
                href="/banana-for-chips"
                className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 font-semibold text-amber-950 hover:bg-amber-100 transition"
              >
                🍟 Chips Bananas →
              </Link>
              <Link
                href="/banana-seeds"
                className="rounded-lg border border-green-200 bg-green-50/60 px-3 py-1.5 font-semibold text-green-900 hover:bg-green-100 transition"
              >
                🌱 Banana Suckers →
              </Link>
              <Link
                href="/banana-prices"
                className="rounded-lg border border-green-200 bg-green-50/60 px-3 py-1.5 font-semibold text-green-900 hover:bg-green-100 transition"
              >
                📊 Today&apos;s Rates →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-800">
              <LeafIcon className="h-4 w-4" />
              Who We Are
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-green-950">
              About BT Banana
            </h2>
            <dl className="mt-8 space-y-5 border-t border-green-900/10 pt-6">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-3">
                  <dt className="text-3xl font-bold text-green-800">
                    {stat.value}
                  </dt>
                  <dd className="text-sm font-medium leading-snug text-neutral-600">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <p className="text-lg leading-8 text-neutral-700">
              BT Banana is a wholesale banana supplier based in Kerala,
              supplying different varieties of bananas along with banana
              seeds — locally known as Vazhavithu — at reasonable prices. We
              work with farmers, traders, retailers, and other businesses who
              need banana supply in bulk.
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-700">
              We operate from two branches — our Alakode branch and our
              Nellipara branch — supplying customers across the local area
              and beyond. Whether you need bananas for trading and retail, or
              banana planting material to start your own cultivation, you can
              reach out to us directly for current availability and pricing.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {aboutHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-green-100 bg-green-50/60 px-4 py-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-700 text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-semibold text-green-950">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Run Directly By
              </p>
              <div className="flex flex-wrap gap-5">
                {owners.map((owner) => (
                  <div key={owner.phone} className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-800 text-xs font-bold text-white">
                      {getInitials(owner.name)}
                    </span>
                    <div className="leading-tight">
                      <p className="text-sm font-bold text-green-950">
                        {owner.name}
                      </p>
                      <p className="text-xs text-neutral-500">{owner.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Products overview */}
      <section className="border-y border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold text-green-950">
              What We Supply
            </h2>
            <Link
              href="/products"
              className="text-sm font-semibold text-green-700 hover:underline"
            >
              View all products →
            </Link>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal
                key={product.slug}
                delay={(index % 3) * 100}
                className="grid"
              >
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vazhavithu section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-amber-50 lg:grid-cols-2">
          <Reveal className="relative h-64 lg:h-full lg:min-h-[420px]">
            <Image
              src="/images/vazhavithu.png"
              alt="Freshly harvested banana seeds / Vazhavithu planting material with a young banana sapling"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={120} className="p-8 sm:p-12 lg:pl-0">
            <h2 className="text-3xl font-bold text-green-950">
              Banana Seeds / Vazhavithu
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-700">
              Banana seeds — known in Malayalam as{" "}
              <span className="font-semibold">Vazhavithu (വാഴവിത്ത്)</span> —
              are the planting material farmers use to grow their own banana
              crop. BT Banana supplies banana Vazhavithu at reasonable
              wholesale prices, so farmers and growers across Kerala can
              source good planting material without hassle.
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-700">
              If you&apos;re a farmer near Alakode, Nellipara, Kannur, or
              elsewhere in Kerala looking for a banana seed supplier, you can
              contact us directly for current availability.
            </p>
            <Link
              href="/banana-seeds"
              className="mt-6 inline-flex items-center text-sm font-semibold text-green-800 hover:underline"
            >
              Learn more about our banana seeds →
            </Link>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallButton
                phone={primaryPhone}
                variant="outline"
                className="px-5 py-2.5 text-sm"
              />
              <WhatsAppButton
                phone={primaryWhatsApp}
                className="px-5 py-2.5 text-sm"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Commercial B2B Spotlight: Banana Merchant, Chips Bananas & Live Daily Rates */}
      <section className="border-t border-green-100 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Reveal className="rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/70 to-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900">
                  <LeafIcon className="h-3.5 w-3.5 text-emerald-700" />
                  Trading &amp; Wholesale
                </span>
                <h3 className="mt-4 text-2xl font-bold text-green-950">
                  Banana Merchant in Kannur
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Regular bulk supply for traders, retailers, supermarkets, and caterers across Kannur and Malabar. Fresh arrivals of Nendran, Njali Poovan, Robusta, and Palayankodan.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/banana-merchant-kannur"
                  className="rounded-xl bg-green-800 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-green-700"
                >
                  Banana Merchant Details →
                </Link>
                <Link
                  href="/wholesale-bananas"
                  className="text-xs font-semibold text-green-800 hover:underline"
                >
                  Wholesale Hub →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={80} className="rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/70 to-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900">
                  <LeafIcon className="h-3.5 w-3.5 text-emerald-700" />
                  For Chips Makers &amp; Snack Units
                </span>
                <h3 className="mt-4 text-2xl font-bold text-green-950">
                  Raw Banana for Chips (Pacha Ethakka)
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Sourcing raw green Nendran (പച്ച ഏത്തക്ക) with high dry matter and crisp frying quality. We supply hot chips shops, bakeries, and commercial chips factories with daily or scheduled bulk dispatches.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/banana-for-chips"
                  className="rounded-xl bg-green-800 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-green-700"
                >
                  Chips Banana Specs →
                </Link>
                <WhatsAppButton
                  phone={primaryWhatsApp}
                  message="Hi BT Banana, I need a quote for raw green Nendran bananas for chips manufacturing."
                  label="Enquire for Chips"
                  className="px-4 py-2 text-xs"
                />
              </div>
            </Reveal>

            <Reveal delay={160} className="rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/70 to-white p-8 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                  <CheckIcon className="h-3.5 w-3.5 text-amber-700" />
                  Market Transparency
                </span>
                <h3 className="mt-4 text-2xl font-bold text-green-950">
                  Today&apos;s Wholesale Rates
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Banana market rates change daily based on morning arrivals and mandi auctions. Learn how rates are set, and get today&apos;s verified farm gate and wholesale price directly over WhatsApp.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/banana-prices"
                  className="rounded-xl bg-amber-400 px-4 py-2.5 text-xs font-bold text-green-950 shadow-sm transition hover:bg-amber-300"
                >
                  View Price Guide →
                </Link>
                <CallButton
                  phone={primaryPhone}
                  label="Call for Rate"
                  variant="outline"
                  className="border-green-800 text-green-950 px-3 py-2 text-xs"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <h2 className="text-3xl font-bold text-green-950">
              Why Choose BT Banana
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Reveal
                key={benefit.title}
                delay={(index % 3) * 100}
                className="grid"
              >
                <div className="rounded-2xl border border-green-100 bg-white p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-800">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-green-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold text-green-950">
            Our Branches
          </h2>
          <Link
            href="/locations"
            className="text-sm font-semibold text-green-700 hover:underline"
          >
            View location details →
          </Link>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {branches.map((branch, index) => (
            <Reveal
              key={branch.slug}
              delay={(index % 2) * 100}
              className="grid"
            >
              <LocationCard branch={branch} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="border-t border-green-100 bg-gradient-to-b from-white via-green-50/40 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <MapPinIcon className="h-3.5 w-3.5 text-emerald-700" />
              Wholesale Delivery &amp; Supply Network
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
              Areas We Cover
            </h2>
            <p className="mt-3 max-w-2xl text-base text-neutral-600">
              BT Banana supplies wholesale bananas, raw chips plantains, and banana seeds (Vazhavithu) across key locations in <strong className="font-semibold text-green-900">Kannur</strong>, <strong className="font-semibold text-green-900">Kasaragod</strong>, and <strong className="font-semibold text-green-900">Wayanad</strong> districts in Kerala.
            </p>
          </Reveal>

          {/* District Highlights Header Cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Reveal className="grid">
              <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-green-950 shadow-sm">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-950">Kannur District</h3>
                  <p className="text-xs font-semibold text-green-700">Primary Hub: Alakode &amp; Nellipara</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="grid">
              <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-700 text-white shadow-sm">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-950">Kasaragod District</h3>
                  <p className="text-xs font-semibold text-green-700">Northern Kerala &amp; Chittarikkal</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200} className="grid">
              <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-800 text-white shadow-sm">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-950">Wayanad District</h3>
                  <p className="text-xs font-semibold text-green-700">Highland Banana &amp; Seed Belt</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Covered Locations Grid */}
          <Reveal className="mt-8 rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-green-900">
              Key Towns &amp; Localities Supplied:
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {coveredAreas.localities.map((location) => {
                const locationPage = serviceLocations.find(
                  (l) => l.name === location
                );
                const className =
                  "flex items-center gap-2 rounded-xl border border-green-200/80 bg-green-50/60 px-4 py-2.5 text-sm font-semibold text-green-950 transition hover:bg-green-100 hover:border-green-300";

                if (locationPage) {
                  return (
                    <Link
                      key={location}
                      href={`/locations/${locationPage.slug}`}
                      className={className}
                    >
                      <MapPinIcon className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{location}</span>
                    </Link>
                  );
                }

                return (
                  <div key={location} className={className}>
                    <MapPinIcon className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{location}</span>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-xs text-neutral-500">
              Don&apos;t see your specific location listed? If you are located nearby in Kannur or Kasaragod districts, call or WhatsApp us directly to check supply availability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <Faq items={homeFaqs} />
        </Reveal>
      </section>

      {/* Contact / Enquiry */}
      <section className="border-t border-green-100 bg-green-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="mt-3 max-w-2xl text-green-100">
              {SITE_DESCRIPTION} Call or WhatsApp us directly for wholesale
              banana or banana seed enquiries.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {owners.map((owner, index) => (
              <Reveal
                key={owner.phone}
                delay={(index % 2) * 100}
                className="grid"
              >
                <div className="rounded-2xl bg-green-900/60 p-6">
                  <p className="text-lg font-semibold">{owner.name}</p>
                  <p className="text-sm text-green-300">{owner.role}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <CallButton
                      phone={owner.phone}
                      label={`Call ${owner.name.split(" ")[0]}`}
                      variant="outline"
                      className="border-white/40 px-5 py-2.5 text-sm text-white hover:bg-white/10"
                    />
                    <WhatsAppButton
                      phone={owner.phone}
                      className="px-5 py-2.5 text-sm"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center text-sm font-semibold text-amber-300 hover:underline"
          >
            Go to full contact page →
          </Link>
        </div>
      </section>
    </>
  );
}
