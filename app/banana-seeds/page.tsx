import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
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
  keralaDistricts,
  owners,
  primaryPhone,
  primaryWhatsApp,
  SITE_URL,
  telHref,
} from "@/lib/site";

// Direct, citable answers kept tight so answer engines (Google snippets, AI
// assistants) can lift them cleanly. Vazhavithu is the primary search term, so
// every answer leads with it.
const bananaSeedFaqs = [
  {
    question: "Where can I buy Vazhavithu (banana seeds) in Kerala?",
    answer:
      "BT Banana supplies Vazhavithu (banana planting suckers, വാഴവിത്ത്) to farmers across all 14 districts of Kerala, with delivery arranged to your farm gate. Call or WhatsApp Thomas M.J (9447483169) or Albin Augustine (8086648081) for current rates and availability.",
  },
  {
    question: "Where is your Vazhavithu sourced or imported from?",
    answer:
      "Our banana planting material is sourced from specialised banana nurseries in the Tiruchirappalli (Trichy) belt of Tamil Nadu — a region known for healthy, high-yield banana suckers — and supplied fresh across Kerala through BT Banana's Kannur base.",
  },
  {
    question: "Do you supply Vazhavithu in bulk to nurseries, resellers and large farms?",
    answer:
      "Yes — bulk supply is our main focus. We supply Vazhavithu in bulk to commercial farmers, plantations, plant nurseries, resellers, farmer groups and agricultural cooperatives across Kerala, with volume pricing on enquiry.",
  },
  {
    question: "Is Vazhavithu the same as vaazhavithu, vazha vithu or vazha kannu?",
    answer:
      "Yes. Vazhavithu, vaazhavithu, vazha vithu, വാഴവിത്ത് and വാഴക്കന്ന് (vazha kannu) all refer to the same thing — banana planting suckers. BT Banana supplies all of these across Kerala.",
  },
  {
    question: "Do you supply banana suckers or literal botanical banana seeds?",
    answer:
      "Cultivated commercial bananas in Kerala (Nendran, Njali Poovan, Palayankodan, Robusta) are seedless and do not produce botanical seeds. What farmers search for as 'banana seeds' or 'Vazhavithu' (വാഴവിത്ത്) is vegetative planting material — sword suckers taken from the base of the mother plant. That is exactly what we supply. We do not sell tissue culture plants.",
  },
  {
    question: "Do you deliver Vazhavithu across all of Kerala?",
    answer:
      "Yes. We arrange safe road delivery of banana planting suckers (Vazhavithu) to farming destinations in every Kerala district — Kannur, Kasaragod, Kozhikode, Wayanad, Malappuram, Palakkad, Thrissur, Ernakulam, Kottayam, Idukki, Alappuzha, Pathanamthitta, Kollam, and Thiruvananthapuram — depending on order volume and transport arrangements.",
  },
  {
    question: "Which banana varieties of Vazhavithu do you supply?",
    answer:
      "We supply Nendran (Ethakka), Njali Poovan (ഞാലിപ്പൂവൻ), Mysore Poovan / Palayankodan (പാളയംകോടൻ), and Robusta planting suckers, subject to seasonal nursery availability.",
  },
  {
    question: "What is the price of Vazhavithu / banana suckers today?",
    answer:
      "Vazhavithu is priced per sucker and varies by variety, quality, quantity, and delivery district. Because rates move with season and demand, we quote live prices on enquiry — contact Thomas M.J (9447483169) or Albin Augustine (8086648081) for today's quotation.",
  },
  {
    question: "What is the minimum quantity, and can I order a small amount?",
    answer:
      "We supply both small homestead lots (minimum order: [TODO: owner to confirm]) and large commercial orders for full plantation planting. Tell us your variety and count and we will confirm availability and the best delivery option.",
  },
  {
    question: "How soon can Vazhavithu be delivered to my district?",
    answer:
      "Delivery time depends on your district, the variety requested, and current nursery stock. For most of Kerala we coordinate dispatch within a few days of confirming your order. Booking ahead is recommended for pre-monsoon and Onam (Chingam) planting.",
  },
  {
    question: "How do I order Vazhavithu online?",
    answer:
      "Send your variety, quantity, and delivery town over WhatsApp (8086648081) or use the enquiry form on this page. We reply with availability, a rate, and delivery details — no account or online payment needed to get a quote.",
  },
  {
    question: "How do you make sure the suckers are healthy?",
    answer:
      "We select vigorous sword suckers with healthy corms and pointed, lance-like leaves, avoiding weak water suckers. Material is kept moisture-protected in transit so corms stay viable. [TODO: owner to confirm any cleaning, paring or treatment done before dispatch.]",
  },
];



// Product schema aimed at buy-intent queries for Vazhavithu. Price is quoted on
// request (it moves with season/variety), so no price is asserted here.
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Banana Vazhavithu — Banana Planting Suckers / Banana Seeds",
  alternateName: [
    "Vazhavithu",
    "Vaazhavithu",
    "Vazha vithu",
    "വാഴവിത്ത്",
    "വാഴക്കന്ന്",
    "Banana suckers",
    "Banana seeds",
    "Banana planting material",
  ],
  description:
    "Healthy banana planting material (Vazhavithu / വാഴവിത്ത്) — Nendran, Njali Poovan, Palayankodan, and Robusta suckers — imported from the Tiruchirappalli (Trichy) nursery belt of Tamil Nadu and supplied in bulk to farmers and nurseries across all 14 districts of Kerala by BT Banana, Kannur.",
  image: `${SITE_URL}/images/vazhavithu.webp`,
  brand: { "@type": "Brand", name: "BT Banana" },
  category: "Banana planting material (suckers)",
  additionalProperty: [
    { "@type": "PropertyValue", name: "Local name", value: "Vazhavithu (വാഴവിത്ത്)" },
    { "@type": "PropertyValue", name: "Source region", value: "Tiruchirappalli (Trichy), Tamil Nadu" },
    {
      "@type": "PropertyValue",
      name: "Varieties",
      value: "Nendran, Njali Poovan, Palayankodan (Mysore Poovan), Robusta",
    },
  ],
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    url: `${SITE_URL}/banana-seeds`,
    areaServed: { "@type": "State", name: "Kerala" },    seller: { "@type": "Organization", name: "BT Banana", url: SITE_URL },
  },
};

export const metadata: Metadata = {
  title: "Vazhavithu – Banana Suckers for Sale in Kerala",
  description:
    "Banana suckers (vazhavithu / vazhakannu) for planting. Nendran, Robusta, Njali Poovan & Palayankodan, delivered across Kerala. Order on WhatsApp.",
  keywords: [
    "vazhavithu",
    "vaazhavithu",
    "vazha vithu",
    "വാഴവിത്ത്",
    "വാഴക്കന്ന്",
    "vazhavithu Kerala",
    "vazhavithu near me",
    "vazhavithu price",
    "Nendran vazhavithu",
    "banana suckers Kerala",
    "banana seeds Kerala",
    "banana suckers wholesale",
    "banana suckers for nursery",
    "banana suckers from Tamil Nadu",
    "banana planting material Kerala",
    "banana sucker supplier Kerala",
  ],
  alternates: {
    canonical: `${SITE_URL}/banana-seeds`,
    languages: {
      "en-IN": "/banana-seeds",
      "ml-IN": "/ml/banana-seeds",
      "x-default": "/banana-seeds",
    },
  },
  openGraph: {
    title: "Vazhavithu – Banana Suckers for Sale in Kerala | BT Banana",
    description:
      "Bulk Vazhavithu (വാഴവിത്ത്) — Nendran, Njali Poovan, Palayankodan & Robusta suckers — imported from Tamil Nadu and delivered to farmers and nurseries across all of Kerala.",
    images: [{ url: "/images/vazhavithu.webp", alt: "Vazhavithu banana suckers supplied by BT Banana" }],
    url: `${SITE_URL}/banana-seeds`,
  },
};

const seedVarieties = [
  {
    name: "Nendran Vazhavithu",
    ml: "ഏത്ത വാഴവിത്ത്",
    href: "/banana-seeds/nendran",
    image: "/images/nendran.webp",
    desc: "The primary commercial planting sucker in Kerala. High bunch yield, demanded for both culinary cooking and chips processing.",
    suitable: "Commercial plantations, Onam crop, home farms",
  },
  {
    name: "Njali Poovan Vazhavithu",
    ml: "ഞാലിപ്പൂവൻ",
    href: "/banana-seeds/njali-poovan",
    image: "/images/njali.webp",
    desc: "Premium dessert variety sucker. Yields sweet, delicate fingers commanding top retail prices across Kerala markets.",
    suitable: "High-value fruit markets, homestead cultivation",
  },
  {
    name: "Mysore Poovan / Palayankodan",
    ml: "പാളയംകോടൻ",
    href: "/banana-seeds/palayankodan",
    image: "/images/mysoor-poovan.webp",
    desc: "Extremely hardy and drought-resilient variety with steady yield throughout drought and monsoon periods.",
    suitable: "Intercropping, organic groves, low-maintenance plots",
  },
  {
    name: "Robusta Vazhavithu",
    ml: "റോബസ്റ്റ",
    href: "/banana-seeds/robusta",
    image: "/images/robusta.webp",
    desc: "Vigorous green table variety producing heavy bunches with 10–12 hands and uniform finger sizing.",
    suitable: "Commercial retail wholesale orchards",
  },
];

// Entity-dense facts block — easy for both readers and generative engines to
// lift as a clean, citable summary of who/what/where.
const keyFacts: { label: string; value: string }[] = [
  { label: "Product", value: "Banana Vazhavithu — planting suckers (“banana seeds”)" },
  { label: "Malayalam name", value: "വാഴവിത്ത് (Vazhavithu)" },
  { label: "Varieties", value: "Nendran, Njali Poovan, Palayankodan (Mysore Poovan), Robusta" },
  { label: "Imported from", value: "Tamil Nadu — Tiruchirappalli (Trichy) nursery belt" },
  { label: "Also searched as", value: "Vaazhavithu, Vazha vithu, വാഴക്കന്ന് (banana suckers / seeds)" },
  { label: "Supplied across", value: "All 14 districts of Kerala" },
  { label: "Who we supply", value: "Farmers, plantations, nurseries, resellers & cooperatives" },
  { label: "Order size", value: "Bulk orders; smaller lots on request (minimum: [TODO: owner to confirm])" },
  { label: "Not supplied", value: "Tissue culture plants — we supply suckers only" },
  { label: "Best planting window", value: "Pre-monsoon & for Onam (Chingam) harvest" },
  { label: "Pricing", value: "Per sucker, quoted live on enquiry" },
];

const quoteMessage =
  "Hi BT Banana, I'd like a bulk quote for Vazhavithu (banana suckers). Variety: ___, Quantity: ___, Delivery district: ___";

const heroStats = [
  { value: String(keralaDistricts.length), label: "Kerala districts" },
  { value: String(seedVarieties.length), label: "Sucker varieties" },
  { value: "Bulk", label: "Farms & nurseries" },
];

const sourcingRoute = [
  {
    step: "01",
    place: "Trichy, Tamil Nadu",
    title: "Selected at the nursery",
    desc: "Sword suckers picked from established nurseries in the Tiruchirappalli belt for strong corms and variety purity.",
  },
  {
    step: "02",
    place: "Kannur base",
    title: "Checked & sorted",
    desc: "Batches arrive at our Kannur base, kept separate by variety and moisture-protected so corms stay viable.",
  },
  {
    step: "03",
    place: "Your farm gate",
    title: "Delivered across Kerala",
    desc: "Road delivery by dedicated vehicle or regional freight to farms and nurseries in every district.",
  },
];

const qualityPoints = [
  { t: "Trusted nursery belt", d: "Material from the Trichy region, known for quality banana planting stock." },
  { t: "Variety purity", d: "Nendran, Njali Poovan, Palayankodan & Robusta, kept separate by variety." },
  { t: "Viable corms", d: "Sword suckers with well-developed corms, not weak water suckers." },
  { t: "Kerala-wide reach", d: "One source, delivered to farms in every Kerala district." },
];

const deliveryFeatures = [
  { t: "Flexible volumes", d: "From small homestead lots to bulk orders for commercial banana plantations." },
  { t: "Moisture-protected", d: "Packed and protected so corms stay viable throughout road transit." },
  { t: "Direct to farm gate", d: "Dispatched via dedicated vehicle or regional freight logistics tailored to your district." },
];

const customers = [
  "Commercial banana farmers planting multi-acre seasonal crops",
  "Plant nurseries and resellers buying Vazhavithu in bulk for resale",
  "Agricultural cooperatives and farmer groups placing pooled orders",
  "Growers preparing Onam harvest schedules (Chingam market)",
  "Homestead farmers needing smaller lots (on request)",
];

const guideLinks = [
  { href: "/blog/bulk-vazhavithu-order-guide", label: "Bulk order guide", desc: "How many suckers per acre and when to book." },
  { href: "/how-to-plant-banana-suckers", label: "How to plant banana suckers", desc: "Pit size, spacing and first-month care." },
  { href: "/sucker-vs-tissue-culture", label: "Sucker vs tissue culture", desc: "Which planting material suits your farm." },
  { href: "/locations", label: "Areas we serve", desc: "Delivery towns across all 14 districts." },
  { href: "/faq", label: "Vazhavithu FAQs", desc: "Prices, ordering, delivery and more." },
];

const quoteSteps = [
  "Share variety, quantity & district",
  "We confirm stock and today's rate",
  "Delivery scheduled to your farm",
];

export default function BananaSeedsPage() {
  return (
    <div>
      <JsonLd data={productJsonLd} />

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

        <div className="mx-auto max-w-6xl w-full px-4 pt-6 sm:px-6 lg:pt-5 [&_a]:text-green-100/70 [&_a:hover]:text-amber-300 [&_ol]:text-green-100/60 [&_[aria-current]]:text-white">
          <Breadcrumbs items={[{ label: "Vazhavithu / Banana Seeds", href: "/banana-seeds" }]} />
        </div>

        <div className="mx-auto grid min-h-0 w-full max-w-6xl flex-1 items-center gap-10 px-4 pb-14 pt-8 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-8 short:py-5">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-green-50 backdrop-blur">
              <LeafIcon className="h-4 w-4 text-amber-300" />
              Vegetative planting stock · വാഴവിത്ത്
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.25rem] short:mt-4 short:text-[2.5rem]">
              <span className="text-amber-300">Vazhavithu</span> – Banana Suckers for Planting, Delivered Across
              Kerala
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-green-50/85 sm:text-lg sm:leading-8 short:mt-4 short:text-base short:leading-7">
              Searching for <strong className="font-semibold text-white">Vazhavithu (വാഴവിത്ത്)</strong>? BT Banana
              imports healthy, high-yield <strong className="font-semibold text-white">banana planting suckers</strong>{" "}
              from <strong className="font-semibold text-white">Tamil Nadu</strong> and supplies them in{" "}
              <strong className="font-semibold text-white">large quantities to farmers and nurseries</strong> in{" "}
              <strong className="font-semibold text-white">all 14 districts of Kerala</strong>.
            </p>

            <div className="mt-7 flex short:mt-5 flex-wrap items-center gap-3">
              <CallButton
                phone={primaryPhone}
                label="Call for Bulk Orders"
                className="flex-1 whitespace-nowrap bg-amber-400! text-green-950! shadow-lg shadow-black/20 hover:bg-amber-300! sm:flex-initial"
              />
              <WhatsAppButton
                phone={primaryWhatsApp}
                message={quoteMessage}
                label="WhatsApp Quote"
                className="flex-1 whitespace-nowrap shadow-lg shadow-black/20 sm:flex-initial"
              />
            </div>

            <dl className="mt-8 grid max-w-lg short:mt-5 grid-cols-3 divide-x divide-white/15 rounded-2xl border border-white/15 bg-white/5 backdrop-blur">
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
                src="/images/vazhavithu.webp"
                alt="Vazhavithu (banana seeds / planting suckers) supplied with all-Kerala delivery by BT Banana, Kannur"
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
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-green-900 backdrop-blur">
                  Sword suckers only
                </span>
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-green-900 backdrop-blur">
                  Sourced from Trichy, TN
                </span>
              </div>
            </div>
            <div className="absolute -left-4 top-8 hidden rotate-[-4deg] rounded-2xl bg-amber-400 px-5 py-3 text-green-950 shadow-xl shadow-black/30 sm:block lg:-left-8">
              <p className="text-[11px] font-bold uppercase tracking-wider">Delivered to</p>
              <p className="text-lg font-extrabold leading-tight">All 14 districts</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── Quick answer + key facts ───────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
          <Reveal>
            <SectionLabel>Quick answer</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-green-950 sm:text-4xl">
              What is Vazhavithu?
            </h2>
            <div className="mt-6 border-l-4 border-amber-400 pl-5">
              <p className="text-lg leading-8 text-neutral-700">
                <strong className="text-green-950">Vazhavithu (വാഴവിത്ത്)</strong> is the banana planting material —
                sword suckers taken from the base of the mother plant — that Kerala farmers plant to grow banana
                crops. <strong className="text-green-950">BT Banana</strong> supplies Vazhavithu in Nendran, Njali
                Poovan, Palayankodan, and Robusta varieties, sourced from the{" "}
                <strong className="text-green-950">Trichy (Tamil Nadu)</strong> nursery belt, and delivers to farms{" "}
                <strong className="text-green-950">anywhere in Kerala</strong>.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              {owners.map((o) => (
                <a
                  key={o.phone}
                  href={telHref(o.phone)}
                  className="group flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-2xl bg-green-50 px-5 py-4 ring-1 ring-green-900/10 transition hover:bg-green-100"
                >
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-green-700">
                      Live rate · {o.role}
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
          </Reveal>

          <Reveal>
            <div className="rounded-3xl bg-white p-6 ring-1 ring-green-900/10 sm:p-8">
              <h2 className="text-xl font-bold text-green-950">Vazhavithu at a glance</h2>
              <dl className="mt-6 grid gap-x-8 sm:grid-cols-2">
                {keyFacts.map((fact) => (
                  <div key={fact.label} className="border-t border-green-100 py-3.5">
                    <dt className="text-xs font-bold uppercase tracking-wider text-green-700">{fact.label}</dt>
                    <dd className="mt-1 text-sm leading-6 text-neutral-800">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── Varieties ───────────────── */}
      <section className="bg-[#f7f5ec] py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <SectionLabel>Varieties</SectionLabel>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-green-950 sm:text-4xl">
                Vazhavithu Varieties Available for Cultivation
              </h2>
              <p className="mt-4 text-lg leading-8 text-neutral-600">
                Healthy suckers selected for strong root establishment, rapid vegetative vigour, and high harvest
                return.
              </p>
            </div>
            <p className="shrink-0 text-sm text-neutral-500">Subject to seasonal nursery availability</p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {seedVarieties.map((v) => (
              <Reveal key={v.href} className="grid">
                <Link
                  href={v.href}
                  className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-green-900/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-green-50">
                    <Image
                      src={v.image}
                      alt={`${v.name} (${v.ml}) banana variety`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold leading-snug text-green-950">
                      {v.name}
                      <span className="mt-1 block text-sm font-semibold text-green-700">{v.ml}</span>
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-neutral-600">{v.desc}</p>
                    <p className="mt-4 rounded-xl bg-green-50 px-3 py-2 text-xs leading-5 text-green-900">
                      <span className="font-bold">Best for:</span> {v.suitable}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-bold text-green-800">
                      Spacing, preparation &amp; price
                      <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Sourcing route ───────────────── */}
      <section className="relative isolate overflow-hidden bg-green-950 py-20 text-white lg:py-24">
        <div
          aria-hidden="true"
          className="absolute -right-32 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-green-800/40 blur-3xl"
        />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <SectionLabel tone="light">Sourcing &amp; quality</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Vazhavithu Sourced from Tamil Nadu&apos;s Trichy Belt
            </h2>
            <p className="mt-4 text-lg leading-8 text-green-50/80">
              The quality of your harvest starts with the planting material. We source from established banana
              nurseries around <strong className="text-white">Tiruchirappalli (Trichy)</strong> — one of South
              India&apos;s most reputed regions for healthy, high-yield banana suckers — so farmers from Kasaragod to
              Thiruvananthapuram get field-ready stock without sourcing it across the border themselves.
            </p>
          </Reveal>

          <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
            <span
              aria-hidden="true"
              className="absolute left-7 right-0 top-7 hidden border-t border-dashed border-amber-300/40 md:block"
            />
            {sourcingRoute.map((s) => (
              <li key={s.step} className="relative">
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-lg font-extrabold text-green-950 ring-8 ring-green-950">
                  {s.step}
                </span>
                <p className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300">
                  <MapPinIcon className="h-3.5 w-3.5" />
                  {s.place}
                </p>
                <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-green-50/75">{s.desc}</p>
              </li>
            ))}
          </ol>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {qualityPoints.map((item) => (
              <li key={item.t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <CheckIcon className="h-5 w-5 text-amber-300" />
                <p className="mt-3 font-bold">{item.t}</p>
                <p className="mt-1 text-sm leading-6 text-green-50/70">{item.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────────── All-Kerala delivery ───────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionLabel>Statewide delivery</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-green-950 sm:text-4xl">
              All-Kerala Delivery for Vazhavithu (Banana Seeds)
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              Wherever you cultivate, we arrange safe road transportation directly to your farm gate or collection
              point.
            </p>
            <div className="mt-8 space-y-5">
              {deliveryFeatures.map((f) => (
                <div key={f.t} className="flex gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="h-4 w-4 text-green-800" />
                  </span>
                  <div>
                    <p className="font-bold text-green-950">{f.t}</p>
                    <p className="mt-0.5 text-sm leading-6 text-neutral-600">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton
                phone={primaryWhatsApp}
                message="Hi BT Banana, I need Vazhavithu (banana seeds) delivered to my district in Kerala. Please share delivery details and rate."
                label="Check Delivery to Your Area"
                size="md"
              />
              <CallButton phone={primaryPhone} label="Call for Delivery Quote" variant="outline" size="md" />
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-green-50 p-6 ring-1 ring-green-900/10 sm:p-8">
              <p className="text-sm font-bold text-green-950">Districts we deliver to</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {keralaDistricts.map((d) => (
                  <li
                    key={d}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-green-900 ring-1 ring-green-900/10"
                  >
                    <MapPinIcon className="h-3.5 w-3.5 text-amber-500" />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-5 text-neutral-500">
                Delivery depends on order volume and transport arrangements. Book ahead for pre-monsoon and Onam
                (Chingam) planting.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── Seeds vs suckers ───────────────── */}
      <section className="border-y border-green-100 bg-green-50/60 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="max-w-3xl">
            <SectionLabel>Agronomy &amp; farming clarity</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-green-950 sm:text-4xl">
              Banana Seeds vs. Banana Suckers (വാഴവിത്ത്): What Kerala Farmers Need to Know
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Reveal className="grid">
              <div className="rounded-3xl bg-white p-7 ring-1 ring-green-900/10">
                <h3 className="text-lg font-bold text-green-950">Why Edible Bananas Have No Botanical Seeds</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-700">
                  All commercial culinary and table bananas grown in Kerala—including Nendran, Njali Poovan,
                  Palayankodan, and Robusta—are parthenocarpic triploid plants. They produce delicious fruit without
                  fertilization and do not contain viable botanical seeds.
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-700">
                  When Kerala farmers search for &quot;banana seeds,&quot; they mean vegetative propagules—the side
                  shoots that grow from the mother rhizome corm.
                </p>
              </div>
            </Reveal>
            <Reveal className="grid">
              <div className="rounded-3xl bg-green-900 p-7 text-white">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-green-950">
                  <CheckIcon className="h-3.5 w-3.5" /> What we supply
                </span>
                <h3 className="mt-4 text-lg font-bold">Sword Suckers (വാഴക്കണ്ണികൾ)</h3>
                <p className="mt-3 text-sm leading-6 text-green-50/85">
                  In Malayalam, these planting propagules are termed{" "}
                  <strong className="text-white">Vazhavithu (വാഴവിത്ത്)</strong>. BT Banana specifically grades and
                  supplies <strong className="text-white">sword suckers</strong> with narrow, lance-like leaves and
                  robust corms.
                </p>
              </div>
            </Reveal>
            <Reveal className="grid">
              <div className="rounded-3xl bg-white p-7 ring-1 ring-green-900/10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold text-neutral-600">
                  <span aria-hidden="true">✕</span> What we avoid
                </span>
                <h3 className="mt-4 text-lg font-bold text-green-950">Water Suckers</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-700">
                  We avoid weak water suckers (broad leaves, small corms) because Kerala Agricultural University
                  advises against them — they are not strong enough to produce healthy clumps.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────── Why selection + who we supply ───────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Start strong</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-green-950">
              Why Sucker Selection Determines Your Yield
            </h2>
            <p className="mt-4 leading-7 text-neutral-700">
              Vazhavithu is the foundation of your banana plantation. The initial vigour, corm health, and variety
              purity of your planting stock dictate plant survival rate during monsoon, pest resilience, and harvest
              timing for peak markets like Onam.
            </p>
            <p className="mt-4 leading-7 text-neutral-700">
              BT Banana sources vigorous, viable suckers from the Trichy nursery belt and supplies them to farmers in
              Kannur, Kasaragod, Wayanad, and across every district of Kerala — so your crop starts strong.
            </p>
          </Reveal>
          <Reveal>
            <SectionLabel>Customers</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-green-950">Who We Supply</h2>
            <ul className="mt-6 divide-y divide-green-100 rounded-3xl bg-white ring-1 ring-green-900/10">
              {customers.map((item) => (
                <li key={item} className="flex items-start gap-3 px-5 py-4 leading-6 text-neutral-700">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-green-700" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {guideLinks.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group rounded-2xl border border-green-100 p-5 transition hover:border-green-700 hover:bg-green-50"
            >
              <span className="flex items-center justify-between gap-2 font-bold text-green-950">
                {g.label}
                <ChevronRightIcon className="h-4 w-4 shrink-0 text-green-700 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="mt-1 block text-sm text-neutral-600">{g.desc}</span>
            </Link>
          ))}
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
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight">Request a Vazhavithu / Banana Seeds Quote</h2>
            <p className="mt-4 leading-7 text-green-50/80">
              Tell us your desired variety, sucker quantity, and delivery town to receive prompt confirmation. No
              account or online payment needed.
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
              defaultProduct="Banana Seeds / Vazhavithu (വാഴവിത്ത് - Nendran)"
              pageSource="Vazhavithu / Banana Seeds Page"
            />
          </div>
        </div>
      </section>

      {/* ───────────────── FAQ ───────────────── */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-24">
        <Faq items={bananaSeedFaqs} title="Vazhavithu / Banana Seeds — FAQs" />
      </section>

      {/* ───────────────── Branches ───────────────── */}
      <section className="border-t border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionLabel>Visit or call</SectionLabel>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-green-950">
            Contact Us for Vazhavithu (Banana Seeds)
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Get in touch with our Alakode or Nellipara branch for Vazhavithu / banana seed enquiries and delivery
            anywhere in Kerala.
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
