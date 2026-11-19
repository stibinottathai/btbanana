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
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import {
  CheckIcon,
  ChevronRightIcon,
  LeafIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";
import {
  branches,
  formatPhone,
  owners,
  primaryPhone,
  primaryWhatsApp,
  SITE_URL,
  telHref,
} from "@/lib/site";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Wholesale Banana Supplier in Kannur, Kerala",
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

const bananaProducts = products.filter((p) => p.category === "banana");

const quoteMessage = "Hi BT Banana, I would like to request wholesale banana pricing for Kannur.";

const heroStats = [
  { value: "2", label: "Kannur depots" },
  { value: "3", label: "Districts served" },
  { value: "Daily", label: "Fresh arrivals" },
];

const keyFacts: { label: string; value: string }[] = [
  { label: "Varieties", value: "Nendran, Njali Poovan, Robusta, Palayankodan, Poovan" },
  { label: "Buyers", value: "Traders, retailers, chips makers, bakeries, caterers" },
  { label: "Service hubs", value: "Alakode & Nellipara, Kannur (Malayora Highway)" },
  { label: "Districts served", value: "Kannur, Kasaragod & Wayanad" },
  { label: "Order size", value: "50 kg batches up to multi-quintal & ton loads" },
  { label: "Pricing", value: "Varies by variety, quality, quantity & delivery — quoted daily" },
];

const supplyBlocks = [
  {
    title: "Who We Supply",
    intro: "We serve commercial B2B buyers requiring dependable bulk dispatches:",
    items: [
      "Produce traders & commission merchants",
      "Retail fruit shops & supermarkets",
      "Banana chips units & hot chips stalls",
      "Event caterers & wedding cooks (Sadya upperi)",
    ],
  },
  {
    title: "Quantities & Availability",
    intro: "From commercial bunch lots to multi-quintal freight consignments:",
    items: [
      "Small commercial batches: 50 kg to 200 kg",
      "Bulk wholesale shipments: Multi-quintal & tons",
      "Regular scheduled daily/weekly deliveries",
      "Availability adjusts with season & morning arrivals",
    ],
  },
  {
    title: "Pickup & Delivery Logistics",
    intro: "Convenient road access from Malayora Highway in North Kerala:",
    items: [
      "Self-collection from Alakode or Nellipara depots",
      "Road transport arranged across Kannur & Kasaragod",
      "Highland freight connections into Wayanad",
      "Direct owner verification on every dispatch",
    ],
  },
];

const orderSteps = [
  {
    step: "01",
    title: "Call or WhatsApp",
    desc: "Call or WhatsApp us directly with your requirement — no middlemen, you speak to the owners.",
  },
  {
    step: "02",
    title: "Share variety & quantity",
    desc: "Let us know the banana variety and quantity you're looking for, plus your town or pickup preference.",
  },
  {
    step: "03",
    title: "Get today's rate",
    desc: "We'll confirm current availability and wholesale pricing, then arrange pickup or delivery.",
  },
];

const deliveryAreas = ["Kannur", "Alakode", "Nellipara", "Kasaragod", "Chittarikkal", "Vellarikundu", "Wayanad"];

const quoteSteps = [
  "Send variety, quantity & destination",
  "Get verified farm gate & mandi rates",
  "Pickup or delivery confirmed",
];

export default function WholesaleBananasPage() {
  return (
    <div>
      <JsonLd data={wholesaleJsonLd} />

      {/* ───────────────── Hero (fills one screen on desktop) ───────────────── */}
      <section className="relative isolate flex flex-col overflow-hidden bg-green-950 text-white lg:h-[calc(100svh-var(--header-h,4.3rem))] lg:min-h-[34rem] lg:max-h-[60rem]">
        <div
          aria-hidden="true"
          className="absolute -left-40 -top-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-green-800/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-48 right-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-amber-400/10 blur-3xl"
        />

        <div className="mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6 lg:pt-5 [&_a]:text-green-100/70 [&_a:hover]:text-amber-300 [&_ol]:text-green-100/60 [&_[aria-current]]:text-white">
          <Breadcrumbs items={[{ label: "Wholesale Bananas", href: "/wholesale-bananas" }]} />
        </div>

        <div className="mx-auto grid min-h-0 w-full max-w-6xl flex-1 items-center gap-10 px-4 pb-14 pt-8 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-8 short:py-5">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-green-50 backdrop-blur">
              <LeafIcon className="h-4 w-4 text-amber-300" />
              Bulk banana supply · Alakode &amp; Nellipara, Kannur
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.25rem] short:mt-4 short:text-[2.5rem]">
              <span className="text-amber-300">Wholesale Banana</span> Supplier in Kannur, Kerala
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-green-50/85 sm:text-lg sm:leading-8 short:mt-4 short:text-base short:leading-7">
              BT Banana supplies fresh wholesale bananas in commercial bulk quantities from our{" "}
              <strong className="font-semibold text-white">Alakode and Nellipara depots</strong>, serving traders,
              retail fruit shops, supermarkets, chips makers, and caterers across{" "}
              <strong className="font-semibold text-white">Kannur, Kasaragod, and Wayanad</strong> districts.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 short:mt-5">
              <CallButton
                phone={primaryPhone}
                label="Get Wholesale Price"
                className="flex-1 whitespace-nowrap bg-amber-400! text-green-950! shadow-lg shadow-black/20 hover:bg-amber-300! sm:flex-initial"
              />
              <WhatsAppButton
                phone={primaryWhatsApp}
                message={quoteMessage}
                label="WhatsApp for Rates"
                className="flex-1 whitespace-nowrap shadow-lg shadow-black/20 sm:flex-initial"
              />
            </div>

            <dl className="mt-8 grid max-w-lg grid-cols-3 divide-x divide-white/15 rounded-2xl border border-white/15 bg-white/5 backdrop-blur short:mt-5">
              {heroStats.map((stat) => (
                <div key={stat.label} className="px-4 py-4 sm:px-5 short:py-3">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-xl font-extrabold text-amber-300 sm:text-2xl">{stat.value}</dd>
                  <dd className="mt-0.5 text-xs font-medium text-green-100/80 sm:text-sm">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative min-h-0 lg:h-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] ring-1 ring-white/10 sm:aspect-[5/4] lg:aspect-auto lg:h-full">
              <Image
                src="/images/wholesale.webp"
                alt="Wholesale bananas supplied in bulk by BT Banana in Alakode, Nellipara, Kannur, Kerala"
                fill
                preload
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent"
              />
              <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2 sm:inset-x-5 sm:bottom-5">
                <Link
                  href="/banana-merchant-kannur"
                  className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-green-900 backdrop-blur transition hover:bg-white"
                >
                  Banana Merchant Kannur →
                </Link>
                <Link
                  href="/banana-prices"
                  className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-green-900 backdrop-blur transition hover:bg-white"
                >
                  Daily Market Rates →
                </Link>
              </div>
            </div>
            <div className="absolute -left-4 top-8 hidden rotate-[-4deg] rounded-2xl bg-amber-400 px-5 py-3 text-green-950 shadow-xl shadow-black/30 sm:block lg:-left-8">
              <p className="text-[11px] font-bold uppercase tracking-wider">From 50 kg to</p>
              <p className="text-lg font-extrabold leading-tight">Multi-ton loads</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── Quick answer + key facts ───────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <Reveal>
            <SectionLabel>Quick answer · Wholesale bananas in Kannur</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-green-950 sm:text-4xl">
              Looking for a wholesale banana supplier in Kannur?
            </h2>
            <div className="mt-6 border-l-4 border-amber-400 pl-5">
              <p className="text-base leading-8 text-neutral-700 sm:text-lg">
                <strong className="text-green-950">BT Banana</strong> is a dedicated wholesale banana supplier,
                banana merchant, and wholesaler based on Malayora Highway in{" "}
                <strong className="text-green-950">Alakode and Nellipara, Kannur district, Kerala</strong>. We
                supply fresh banana varieties in bulk—including Nendran (Ethakka), Njali Poovan, Palayankodan,
                Robusta, and Poovan—to traders, fruit retailers, chips manufacturers, and caterers across Kannur,
                Kasaragod, and Wayanad. Sourced directly through farm networks, consignments are graded for high
                yield and freshness. Wholesale prices vary based on variety, quality, quantity, market conditions
                and delivery location—contact us directly by phone or WhatsApp for today&apos;s verified quotation.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl bg-white p-6 ring-1 ring-green-900/10 sm:p-8">
              <h2 className="text-xl font-bold text-green-950">Wholesale at a glance</h2>
              <dl className="mt-5">
                {keyFacts.map((fact) => (
                  <div key={fact.label} className="border-t border-green-100 py-3.5">
                    <dt className="text-xs font-bold uppercase tracking-wider text-green-700">{fact.label}</dt>
                    <dd className="mt-1 text-sm leading-6 text-neutral-800">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4 space-y-3">
                {owners.map((o) => (
                  <a
                    key={o.phone}
                    href={telHref(o.phone)}
                    className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-2xl bg-green-50 px-5 py-3.5 ring-1 ring-green-900/10 transition hover:bg-green-100"
                  >
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-green-700">
                        Today&apos;s rate · {o.role}
                      </span>
                      <span className="block font-bold text-green-950">{o.name}</span>
                    </span>
                    <span className="inline-flex items-center gap-2 font-bold text-green-800">
                      <PhoneIcon className="h-4 w-4" />
                      {formatPhone(o.phone)}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── Supply breakdown ───────────────── */}
      <section className="border-y border-green-100 bg-green-50/60 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <SectionLabel>How we supply</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-green-950 sm:text-4xl">
              Built for commercial buyers
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              Our banana supply is set up for bulk purchasing — we work with traders, retailers, and chips
              processors who need consistent quantities rather than one-off small purchases.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {supplyBlocks.map((block, i) => (
              <Reveal key={block.title} className="grid">
                <div
                  className={
                    i === 1
                      ? "rounded-3xl bg-green-900 p-7 text-white"
                      : "rounded-3xl bg-white p-7 ring-1 ring-green-900/10"
                  }
                >
                  <h3 className={`text-lg font-bold ${i === 1 ? "text-white" : "text-green-950"}`}>{block.title}</h3>
                  <p className={`mt-2 text-sm leading-6 ${i === 1 ? "text-green-50/80" : "text-neutral-600"}`}>
                    {block.intro}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-2.5 text-sm leading-6 ${i === 1 ? "text-green-50" : "text-neutral-700"}`}
                      >
                        <CheckIcon
                          className={`mt-1 h-4 w-4 shrink-0 ${i === 1 ? "text-amber-300" : "text-green-700"}`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Varieties ───────────────── */}
      <section className="bg-[#f7f5ec] py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <SectionLabel>Varieties</SectionLabel>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-green-950 sm:text-4xl">
                Banana Varieties We Supply Wholesale
              </h2>
              <p className="mt-4 text-lg leading-8 text-neutral-600">
                We deal in genuine Kerala banana varieties harvested fresh. Enquire for today&apos;s ready stock.
              </p>
            </div>
            <Link
              href="/banana-prices"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-bold text-green-800 hover:text-green-950"
            >
              Today&apos;s rates
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bananaProducts.map((product) => (
              <Reveal key={product.slug} className="grid">
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── How to order ───────────────── */}
      <section className="relative isolate overflow-hidden bg-green-950 py-20 text-white lg:py-24">
        <div
          aria-hidden="true"
          className="absolute -right-32 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-green-800/40 blur-3xl"
        />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <Reveal>
              <SectionLabel tone="light">How to contact us</SectionLabel>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Bulk &amp; Wholesale Purchasing
              </h2>
              <p className="mt-4 text-lg leading-8 text-green-50/80">
                Reach out to discuss the quantity you need and we&apos;ll confirm what we can supply.
              </p>
              <div className="mt-8">
                <p className="text-sm font-bold text-green-50">Areas we serve</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {deliveryAreas.map((d) => (
                    <li
                      key={d}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm font-semibold text-green-50"
                    >
                      <MapPinIcon className="h-3.5 w-3.5 text-amber-300" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <ol className="space-y-4">
              {orderSteps.map((s) => (
                <li
                  key={s.step}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-400 text-base font-extrabold text-green-950">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-green-50/75">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────────────── Quote form ───────────────── */}
      <section id="quote" className="scroll-mt-24 bg-[#f7f5ec] py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative isolate overflow-hidden rounded-3xl bg-green-950 p-8 text-white sm:p-10">
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -right-24 -z-10 h-72 w-72 rounded-full bg-amber-400/15 blur-2xl"
            />
            <SectionLabel tone="light">Get a quote</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight">Request Instant Wholesale Banana Quote</h2>
            <p className="mt-4 leading-7 text-green-50/80">
              Send your variety, quantity, and destination to get verified farm gate &amp; mandi rates directly on
              WhatsApp.
            </p>
            <ol className="mt-8 space-y-4 text-sm">
              {quoteSteps.map((t, i) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-amber-300">
                    {i + 1}
                  </span>
                  {t}
                </li>
              ))}
            </ol>
            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-green-100/60">Prefer to talk?</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <CallButton
                  phone={primaryPhone}
                  label={formatPhone(primaryPhone)}
                  size="md"
                  className="bg-amber-400! text-green-950! hover:bg-amber-300!"
                />
                <WhatsAppButton phone={primaryWhatsApp} message={quoteMessage} label="WhatsApp" size="md" />
              </div>
            </div>
          </div>
          <div className="min-w-0">
            <EnquiryForm
              defaultProduct="Wholesale Nendran Banana (പച്ച / പഴുത്ത ഏത്തക്ക)"
              pageSource="Wholesale Bananas Page"
            />
          </div>
        </div>
      </section>

      {/* ───────────────── FAQ ───────────────── */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-24">
        <Faq items={wholesaleFaqs} title="Frequently Asked Questions — Wholesale Bananas in Kannur" />
      </section>

      {/* ───────────────── Branches ───────────────── */}
      <section className="border-t border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionLabel>Visit or call</SectionLabel>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-green-950">
            Banana Supplier Near Kannur, Alakode &amp; Nellipara
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            We supply wholesale bananas from two branches in Kerala, serving customers across Kannur, Kasaragod, and
            Wayanad districts.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {branches.map((branch) => (
              <LocationCard key={branch.slug} branch={branch} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
