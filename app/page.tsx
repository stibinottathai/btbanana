import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  branches,
  coveredAreas,
  formatPhone,
  keralaDistricts,
  owners,
  primaryPhone,
  primaryWhatsApp,
  SITE_URL,
} from "@/lib/site";
import { products } from "@/lib/products";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import {
  CheckIcon,
  ChevronRightIcon,
  LeafIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";
import { serviceLocations } from "@/lib/locations";

export const metadata: Metadata = {
  title: {
    absolute: "Vazhavithu (Banana Suckers) & Wholesale Bananas | BT Banana",
  },
  description:
    "Banana suckers (vazhavithu / വാഴക്കന്ന്) delivered across Kerala, plus wholesale bananas in Kannur. Nendran, Robusta, Poovan & more. Call or WhatsApp.",
  keywords: [
    "vazhavithu",
    "vaazhavithu",
    "vazha vithu",
    "വാഴവിത്ത്",
    "vazhavithu Kerala",
    "banana suckers Kerala",
    "banana seeds Kerala",
    "wholesale banana supplier Kannur",
    "banana wholesaler Kerala",
  ],
  alternates: {
    canonical: SITE_URL,
    languages: { "en-IN": "/", "ml-IN": "/ml", "x-default": "/" },
  },
  openGraph: {
    title: "Vazhavithu (Banana Suckers) & Wholesale Bananas | BT Banana",
    description:
      "Bulk Vazhavithu (banana suckers) imported from Tamil Nadu and delivered across all of Kerala for farmers and nurseries, plus wholesale bananas from Alakode and Nellipara, Kannur.",
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
    question: "Where can I buy Vazhavithu (banana suckers) in Kerala?",
    answer:
      "BT Banana supplies Vazhavithu (വാഴവിത്ത് / banana planting suckers) to farmers, nurseries and plantations in all 14 districts of Kerala — from Kasaragod to Thiruvananthapuram — with delivery arranged to your farm or nursery. Call or WhatsApp Thomas M.J (9447483169) or Albin Augustine (8086648081) for today's rate.",
  },
  {
    question: "Where does your Vazhavithu come from?",
    answer:
      "We import our Vazhavithu from established banana nurseries in Tamil Nadu (mainly the Tiruchirappalli / Trichy belt), known for healthy, high-yield suckers, and bring it into Kerala through our Kannur base.",
  },
  {
    question: "Do you supply Vazhavithu in bulk to nurseries and large farms?",
    answer:
      "Yes. Bulk supply is our focus — we regularly supply thousands of suckers per order to commercial farmers, plantations, nurseries, resellers and agricultural cooperatives, in Nendran, Njali Poovan, Palayankodan and Robusta varieties.",
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

const heroStats = [
  { value: String(keralaDistricts.length), label: "Kerala districts" },
  { value: "Bulk", label: "Farms & nurseries" },
  { value: "7 days", label: "6 am – 9 pm" },
];

const vazhavithuPoints = [
  {
    title: "Imported from Tamil Nadu",
    description:
      "Sourced from trusted banana nurseries in the Trichy belt — healthy sword suckers with strong corms.",
  },
  {
    title: "Bulk quantities",
    description:
      "Thousands of suckers per order for plantations, nurseries, resellers and farmer groups.",
  },
  {
    title: "All of Kerala",
    description:
      "Delivered to farms and nurseries in every district, from Kasaragod to Thiruvananthapuram.",
  },
  {
    title: "Popular varieties",
    description:
      "Nendran, Njali Poovan, Palayankodan (Mysore Poovan) and Robusta, subject to season.",
  },
];

const vazhavithuMessage =
  "Hi BT Banana, I'd like a bulk quote for Vazhavithu (banana suckers). Variety: ___, Quantity: ___, Delivery district: ___";

const services = [
  {
    eyebrow: "Farmers & Nurseries",
    title: "Vazhavithu / Banana Suckers",
    malayalam: "വാഴവിത്ത്",
    description:
      "Healthy suckers imported from Tamil Nadu, supplied in bulk to farmers and nurseries across all 14 districts of Kerala.",
    href: "/banana-seeds",
    cta: "Order Vazhavithu",
    image: "/images/vazhavithu.webp",
    alt: "Freshly harvested Vazhavithu (banana suckers) with a young banana sapling, supplied across Kerala",
  },
  {
    eyebrow: "Traders & Retailers",
    title: "Wholesale Bananas",
    description:
      "Regular bulk supply of Nendran, Njali Poovan, Robusta and Palayankodan for traders, fruit shops, supermarkets and caterers across Malabar.",
    href: "/wholesale-bananas",
    cta: "Wholesale supply",
    image: "/images/wholesale.webp",
    alt: "Bunches of green wholesale bananas ready for bulk supply in Kannur",
  },
  {
    eyebrow: "Chips Makers & Bakeries",
    title: "Raw Banana for Chips",
    malayalam: "പച്ച ഏത്തക്ക",
    description:
      "High dry-matter raw green Nendran for crisp, golden chips — daily or scheduled dispatches for hot chips shops and snack factories.",
    href: "/products/nendran-banana",
    cta: "View Nendran details",
    image: "/images/pacha-ethakka.webp",
    alt: "Heaps of freshly harvested raw green Nendran (pacha ethakka) bunches for banana chips",
  },
];

const benefits = [
  {
    title: "Direct from the source",
    description:
      "Bananas from the Alakode–Nellipara highland belt, and Vazhavithu imported straight from Tamil Nadu nurseries.",
  },
  {
    title: "Many varieties, one supplier",
    description:
      "Nendran, Palayankodan, Robusta, Poovan and plantains — depending on seasonal availability.",
  },
  {
    title: "Fair wholesale pricing",
    description:
      "Reasonable rates based on the day's market, quantity and delivery location.",
  },
  {
    title: "Talk to the owners",
    description:
      "No call centres — speak directly with Thomas or Albin over phone or WhatsApp.",
  },
];

const quickLinks = [
  { href: "/banana-seeds", label: "Vazhavithu (വാഴവിത്ത്)" },
  { href: "/wholesale-bananas", label: "Wholesale Bananas" },
  { href: "/banana-merchant-kannur", label: "Banana Merchant Kannur" },
  { href: "/banana-prices", label: "Today's Rates" },
  { href: "/products", label: "All Varieties" },
  { href: "/locations", label: "Locations" },
];

const featuredProducts = products
  .filter((p) => p.category === "banana" && p.slug !== "banana-for-chips")
  .slice(0, 6);

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
      <span className="h-px w-6 bg-green-700" aria-hidden="true" />
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* ───────────────── Hero ───────────────── */}
      <section className="relative isolate flex min-h-[calc(100svh-var(--header-h,4rem))] flex-col justify-center overflow-hidden bg-green-950 text-white">
        <Image
          src="/images/wholesale.webp"
          alt="Fresh green banana bunches at BT Banana, wholesale banana supplier in Alakode, Kannur"
          fill
          preload
          quality={75}
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-green-950 via-green-950/85 to-green-950/30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-green-950/80 to-transparent"
        />

        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16 short:py-6">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-green-50 backdrop-blur">
              <MapPinIcon className="h-4 w-4 text-amber-300" />
              Kannur based · Delivering across all of Kerala
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl short:text-5xl">
              <span className="text-amber-300">Vazhavithu</span> (Banana Suckers)
              &amp; Wholesale Bananas in Kerala
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-green-50/90 sm:text-lg sm:leading-8 short:text-base short:leading-7">
              Bulk Vazhavithu (വാഴവിത്ത് / banana suckers) imported from Tamil
              Nadu and delivered to farmers and nurseries in all 14 districts of
              Kerala — plus fresh wholesale bananas from our Alakode and
              Nellipara depots in Kannur.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 short:mt-5">
              <CallButton
                phone={primaryPhone}
                size="lg"
                label="Call for Bulk Orders"
                className="bg-amber-400! text-green-950! shadow-lg shadow-black/20 hover:bg-amber-300!"
              />
              <WhatsAppButton
                phone={primaryWhatsApp}
                message={vazhavithuMessage}
                size="lg"
                label="Vazhavithu Quote"
                className="shadow-lg shadow-black/20"
              />
            </div>
          </div>

          <dl className="mt-10 grid max-w-xl short:mt-6 grid-cols-3 divide-x divide-white/15 rounded-2xl border border-white/15 bg-white/5 backdrop-blur">
            {heroStats.map((stat) => (
              <div key={stat.label} className="px-4 py-4 sm:px-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-xl font-extrabold text-amber-300 sm:text-2xl">
                  {stat.value}
                </dd>
                <dd className="mt-0.5 text-xs font-medium text-green-100/80 sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───────────────── Quick links strip ───────────────── */}
      <nav
        aria-label="Popular pages"
        className="border-b border-green-100 bg-white"
      >
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-4 sm:px-6 [scrollbar-width:none]">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex shrink-0 items-center gap-1 rounded-full border border-green-200 px-4 py-2 text-sm font-semibold text-green-900 transition hover:border-green-700 hover:bg-green-50"
            >
              {link.label}
              <ChevronRightIcon className="h-4 w-4 text-green-600" />
            </Link>
          ))}
        </div>
      </nav>

      {/* ───────────────── Services ───────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <Reveal className="max-w-2xl">
          <SectionLabel>What we do</SectionLabel>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-green-950 sm:text-4xl">
            Vazhavithu for growers, bananas for traders
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Whether you plant, trade or fry, we supply what you need in bulk —
            with current availability and rates a phone call away.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.href} className="grid">
              <Link
                href={service.href}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-green-900/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-green-50">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-green-900 backdrop-blur">
                    {service.eyebrow}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-green-950">
                    {service.title}
                    {service.malayalam && (
                      <span className="mt-1 block text-sm font-semibold text-green-700">
                        {service.malayalam}
                      </span>
                    )}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {service.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-bold text-green-800">
                    {service.cta}
                    <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────── Vazhavithu spotlight ───────────────── */}
      <section
        aria-labelledby="vazhavithu-heading"
        className="relative isolate mb-20 overflow-hidden bg-green-950 text-white lg:mb-24"
      >
        <div
          aria-hidden="true"
          className="absolute -left-32 -top-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-green-800/40 blur-3xl"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
              <LeafIcon className="h-4 w-4" />
              Vazhavithu · വാഴവിത്ത്
            </span>
            <h2
              id="vazhavithu-heading"
              className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              Bulk Vazhavithu for farmers &amp; nurseries — across all of Kerala
            </h2>
            <p className="mt-5 text-lg leading-8 text-green-100/85">
              We import healthy banana suckers (Vazhavithu, also searched as
              vaazhavithu or vazha vithu) from Tamil Nadu nurseries and supply
              them in large quantities to farmers, plantations, nurseries and
              resellers in every district of Kerala.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {vazhavithuPoints.map((point) => (
                <li
                  key={point.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="flex items-center gap-2 font-bold text-white">
                    <CheckIcon className="h-4 w-4 shrink-0 text-amber-300" />
                    {point.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-green-100/75">
                    {point.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WhatsAppButton
                phone={primaryWhatsApp}
                message={vazhavithuMessage}
                size="md"
                label="Get a Bulk Vazhavithu Quote"
              />
              <Link
                href="/banana-seeds"
                className="inline-flex items-center gap-1 rounded-full border-2 border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-300 sm:py-3 sm:text-base"
              >
                Varieties, delivery &amp; FAQs
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/10">
              <Image
                src="/images/vazhavithu.webp"
                alt="Healthy Vazhavithu (banana suckers) imported from Tamil Nadu for farmers and nurseries in Kerala"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-200">
                Delivered to all 14 districts
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {keralaDistricts.map((district) => (
                  <li
                    key={district}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-green-50"
                  >
                    {district}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── Today's rates banner ───────────────── */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-amber-400 px-6 py-10 sm:px-12 sm:py-12">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-300"
            />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-900">
                  Market transparency
                </p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-green-950 sm:text-3xl">
                  Need today&apos;s wholesale banana rate?
                </h2>
                <p className="mt-2 text-green-950/80">
                  Prices change daily with morning arrivals and mandi auctions.
                  Get a verified quote for your variety and quantity.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <CallButton
                  phone={primaryPhone}
                  label="Call for Rate"
                  size="md"
                  className="bg-green-950! hover:bg-green-900!"
                />
                <Link
                  href="/banana-prices"
                  className="inline-flex items-center gap-1 rounded-full border-2 border-green-950 px-5 py-2.5 text-sm font-semibold text-green-950 transition hover:bg-green-950 hover:text-white sm:py-3 sm:text-base"
                >
                  Price guide
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ───────────────── Varieties ───────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel>Varieties</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-green-950 sm:text-4xl">
              What we supply
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-sm font-bold text-green-800 hover:underline"
          >
            View all products
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Reveal key={product.slug} className="grid">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────── About / Why us ───────────────── */}
      <section className="bg-green-50/70">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <Reveal>
            <SectionLabel>About BT Banana</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-green-950 sm:text-4xl">
              A family-run banana wholesaler from Kerala&apos;s highlands
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-700">
              BT Banana supplies different varieties of bananas along with
              banana seeds — locally known as Vazhavithu — at reasonable prices.
              We work with farmers, traders, retailers and businesses who need
              banana supply in bulk, from our Alakode and Nellipara branches.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {owners.map((owner) => (
                <div
                  key={owner.phone}
                  className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-green-900/10"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-800 text-sm font-bold text-white">
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

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-1 text-sm font-bold text-green-800 hover:underline"
            >
              More about us
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <Reveal key={benefit.title} className="grid">
                <div className="rounded-2xl bg-white p-6 ring-1 ring-green-900/10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-800 text-amber-300">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-bold text-green-950">
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

      {/* ───────────────── Branches & coverage ───────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <Reveal className="max-w-2xl">
          <SectionLabel>Branches &amp; coverage</SectionLabel>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-green-950 sm:text-4xl">
            Areas we cover
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Two branches in Kannur district. Vazhavithu is delivered to all 14
            districts of Kerala; wholesale bananas and chips plantains are
            supplied across{" "}
            {coveredAreas.districts.join(", ").replace(/, ([^,]*)$/, " and $1")}.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {branches.map((branch) => (
            <Reveal key={branch.slug} className="grid">
              <article className="flex flex-col rounded-3xl border border-green-100 bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-green-950">
                    <MapPinIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-green-950">
                      <Link
                        href={`/locations/${branch.slug}`}
                        className="hover:underline"
                      >
                        {branch.name}
                      </Link>
                    </h3>
                    <p className="text-sm font-medium text-green-700">
                      {branch.place}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-neutral-600">
                  {branch.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-4 pt-5 text-sm font-bold">
                  <Link
                    href={`/locations/${branch.slug}`}
                    className="inline-flex items-center gap-1 text-green-800 hover:underline"
                  >
                    Branch details
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-neutral-600 hover:text-green-800 hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 rounded-3xl bg-green-950 p-6 text-white sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            {coveredAreas.districts.map((district) => (
              <span
                key={district}
                className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-green-950"
              >
                {district} District
              </span>
            ))}
          </div>
          <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-green-200">
            Key towns &amp; localities supplied
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {coveredAreas.localities.map((location) => {
              const locationPage = serviceLocations.find(
                (l) => l.name === location
              );
              const className =
                "inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-1.5 text-sm font-medium text-green-50";
              return (
                <li key={location}>
                  {locationPage ? (
                    <Link
                      href={`/locations/${locationPage.slug}`}
                      className={`${className} transition hover:border-amber-300 hover:text-amber-300`}
                    >
                      <MapPinIcon className="h-3.5 w-3.5 text-amber-300" />
                      {location}
                    </Link>
                  ) : (
                    <span className={className}>
                      <MapPinIcon className="h-3.5 w-3.5 text-green-400" />
                      {location}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-sm text-green-200/80">
            Don&apos;t see your location? If you&apos;re near Kannur or
            Kasaragod, call or WhatsApp us to check supply availability.
          </p>
        </Reveal>
      </section>

      {/* ───────────────── FAQ ───────────────── */}
      <section className="border-t border-green-100 bg-green-50/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-3 lg:py-24">
          <Reveal>
            <SectionLabel>FAQ</SectionLabel>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              Quick answers about wholesale supply, chips bananas, Vazhavithu
              and daily rates.
            </p>
            <div className="mt-6 hidden lg:block">
              <WhatsAppButton
                phone={primaryWhatsApp}
                label="Ask on WhatsApp"
                size="md"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-2">
            <Faq items={homeFaqs} />
          </Reveal>
        </div>
      </section>

      {/* ───────────────── Contact ───────────────── */}
      <section className="relative isolate overflow-hidden bg-green-950 text-white">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-green-800/40 blur-3xl"
        />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
              <LeafIcon className="h-4 w-4" />
              Get in touch
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to order? Talk to us directly.
            </h2>
            <p className="mt-4 text-lg leading-8 text-green-100/85">
              Call or WhatsApp for bulk Vazhavithu, wholesale bananas or chips
              Nendran enquiries. Open every day, 6 am to 9 pm.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {owners.map((owner) => (
              <Reveal key={owner.phone} className="grid">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-400 font-bold text-green-950">
                      {getInitials(owner.name)}
                    </span>
                    <div>
                      <p className="text-lg font-bold">{owner.name}</p>
                      <p className="flex items-center gap-1.5 text-sm text-green-200">
                        <PhoneIcon className="h-3.5 w-3.5" />
                        {formatPhone(owner.phone)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <CallButton
                      phone={owner.phone}
                      label={`Call ${owner.name.split(" ")[0]}`}
                      size="md"
                      className="bg-white! text-green-950! hover:bg-amber-300!"
                    />
                    <WhatsAppButton phone={owner.phone} size="md" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-1 text-sm font-bold text-amber-300 hover:underline"
          >
            Full contact page &amp; enquiry form
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
