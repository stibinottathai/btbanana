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
import { CheckIcon, LeafIcon } from "@/components/icons";
import {
  branches,
  formatPhone,
  owners,
  primaryPhone,
  primaryWhatsApp,
  SITE_URL,
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
      "Our banana planting material is sourced from specialised banana nurseries in the Tiruchirappalli (Trichy) belt of Tamil Nadu — a region known for healthy, high-yield banana suckers and plantlets — and supplied fresh across Kerala through BT Banana's Kannur base.",
  },
  {
    question: "Do you supply banana suckers or literal botanical banana seeds?",
    answer:
      "Cultivated commercial bananas in Kerala (Nendran, Njali Poovan, Palayankodan, Robusta) are seedless and do not produce botanical seeds. What farmers search for as 'banana seeds' or 'Vazhavithu' (വാഴവിത്ത്) is vegetative planting material — vigorous sword suckers and nursery-raised plantlets with viable corms. That is exactly what we supply.",
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
      "Vazhavithu is priced per sucker/plantlet and varies by variety, quality, quantity, and delivery district. Because rates move with season and demand, we quote live prices on enquiry — contact Thomas M.J (9447483169) or Albin Augustine (8086648081) for today's quotation.",
  },
  {
    question: "What is the minimum quantity, and can I order a small amount?",
    answer:
      "We supply both small homestead lots (from about 25–50 suckers) and large commercial orders of 2,000+ suckers for full plantation planting. Tell us your variety and count and we will confirm availability and the best delivery option.",
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
    question: "How do you make sure the suckers are healthy and disease-free?",
    answer:
      "We select vigorous sword suckers with healthy corms and pointed, lance-like leaves, avoiding weak water suckers. Material is kept moisture-protected in transit so corms and roots stay hydrated and viable — giving fast field establishment, better disease resistance, and strong bunch growth.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: bananaSeedFaqs.map((faq) => ({
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
      name: "Vazhavithu / Banana Seeds",
      item: `${SITE_URL}/banana-seeds`,
    },
  ],
};

// Product schema aimed at buy-intent queries for Vazhavithu. Price is quoted on
// request (it moves with season/variety), so no price is asserted here.
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Banana Vazhavithu — Banana Planting Suckers / Banana Seeds",
  alternateName: ["Vazhavithu", "വാഴവിത്ത്", "Banana suckers", "Banana planting material"],
  description:
    "Healthy banana planting material (Vazhavithu / വാഴവിത്ത്) — Nendran, Njali Poovan, Palayankodan, and Robusta suckers — sourced from the Tiruchirappalli (Trichy) nursery belt of Tamil Nadu and supplied with delivery across all districts of Kerala by BT Banana, Kannur.",
  image: `${SITE_URL}/images/vazhavithu.png`,
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
    availability: "https://schema.org/InStock",
    priceCurrency: "INR",
    url: `${SITE_URL}/banana-seeds`,
    areaServed: { "@type": "State", name: "Kerala" },
    seller: { "@type": "Organization", name: "BT Banana", url: SITE_URL },
  },
};

export const metadata: Metadata = {
  title: "Vazhavithu (Banana Seeds) Supplier in Kerala — Banana Suckers",
  description:
    "Buy Vazhavithu (വാഴവിത്ത് / banana seeds) in Kerala. BT Banana supplies healthy Nendran, Njali Poovan, Palayankodan & Robusta banana suckers — sourced from the Trichy (Tamil Nadu) nursery belt — with delivery across all Kerala districts.",
  keywords: [
    "vazhavithu",
    "വാഴവിത്ത്",
    "banana seeds Kerala",
    "banana suckers Kerala",
    "vazhavithu price",
    "Nendran vazhavithu",
    "banana planting material Kerala",
    "buy banana suckers online Kerala",
    "banana sucker supplier Kerala",
  ],
  alternates: {
    canonical: `${SITE_URL}/banana-seeds`,
  },
  openGraph: {
    title: "Vazhavithu (Banana Seeds) Supplier in Kerala | BT Banana",
    description:
      "Healthy banana suckers / Vazhavithu (വാഴവിത്ത്) — Nendran, Njali Poovan, Palayankodan & Robusta — sourced from the Trichy belt of Tamil Nadu and delivered across all districts of Kerala.",
    url: `${SITE_URL}/banana-seeds`,
  },
};

const seedVarieties = [
  {
    name: "Nendran Vazhavithu (ഏത്ത വാഴവിത്ത്)",
    desc: "The primary commercial planting sucker in Kerala. High bunch yield, demanded for both culinary cooking and chips processing.",
    suitable: "Commercial plantations, Onam crop, home farms",
  },
  {
    name: "Njali Poovan Vazhavithu (ഞാലിപ്പൂവൻ)",
    desc: "Premium dessert variety sucker. Yields sweet, delicate fingers commanding top retail prices across Kerala markets.",
    suitable: "High-value fruit markets, homestead cultivation",
  },
  {
    name: "Mysore Poovan / Palayankodan (പാളയംകോടൻ)",
    desc: "Extremely hardy and drought-resilient variety with steady yield throughout drought and monsoon periods.",
    suitable: "Intercropping, organic groves, low-maintenance plots",
  },
  {
    name: "Robusta Vazhavithu (റോബസ്റ്റ)",
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
  { label: "Sourced from", value: "Tiruchirappalli (Trichy) nursery belt, Tamil Nadu" },
  { label: "Supplied across", value: "All 14 districts of Kerala" },
  { label: "Order size", value: "25–50 suckers (homestead) to 2,000+ (commercial)" },
  { label: "Best planting window", value: "Pre-monsoon & for Onam (Chingam) harvest" },
  { label: "Pricing", value: "Per sucker, quoted live on enquiry" },
];

export default function BananaSeedsPage() {
  return (
    <div>
      <JsonLd data={productJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ label: "Vazhavithu / Banana Seeds", href: "/banana-seeds" }]} />
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold text-emerald-900">
              <LeafIcon className="h-3.5 w-3.5 text-emerald-700" />
              Vegetative Planting Stock (വാഴവിത്ത്)
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold text-amber-900">
              🚚 All-Kerala Delivery Available
            </span>
          </div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-green-950 sm:text-5xl">
            Vazhavithu (Banana Seeds) Supplier in Kerala
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
            Searching for <strong className="font-semibold text-green-900">Vazhavithu (വാഴവിത്ത്)</strong> or
            banana seeds in Kerala? BT Banana supplies healthy, high-yield{" "}
            <strong className="text-green-950">banana planting suckers</strong> — sourced from the{" "}
            <strong className="text-green-950">Tiruchirappalli (Trichy) nursery belt of Tamil Nadu</strong> — with
            safe, reliable delivery arranged across <strong className="text-green-950">all 14 districts of Kerala</strong>.
          </p>
          <div className="mt-8 flex flex-row items-center gap-2.5 sm:gap-4">
            <CallButton
              phone={primaryPhone}
              label="Call for Kerala Delivery"
              className="flex-1 justify-center whitespace-nowrap px-3.5 py-3 text-xs font-bold sm:flex-initial sm:px-6 sm:py-3.5 sm:text-sm"
            />
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="Hi BT Banana, I'd like to enquire about Vazhavithu / banana seeds and delivery to my location in Kerala."
              label="Enquire for All-Kerala Delivery"
              className="flex-1 justify-center whitespace-nowrap px-3.5 py-3 text-xs font-bold sm:flex-initial sm:px-6 sm:py-3.5 sm:text-sm"
            />
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/vazhavithu.png"
            alt="Vazhavithu (banana seeds / planting suckers) supplied with all-Kerala delivery by BT Banana, Kannur"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Quick Answer — AEO/GEO friendly, direct and citable */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-900">
            Quick answer
          </p>
          <p className="mt-2 text-base leading-relaxed text-neutral-800">
            <strong className="text-green-950">Vazhavithu (വാഴവിത്ത്)</strong> is the banana planting
            material — vigorous suckers and plantlets — that Kerala farmers plant to grow banana crops.{" "}
            <strong className="text-green-950">BT Banana</strong> supplies Vazhavithu in Nendran, Njali Poovan,
            Palayankodan, and Robusta varieties, sourced from the <strong className="text-green-950">Trichy
            (Tamil Nadu)</strong> nursery belt, and delivers to farms <strong className="text-green-950">anywhere
            in Kerala</strong>. For a live rate, contact{" "}
            {owners.map((o, i) => (
              <span key={o.phone}>
                {i > 0 ? " or " : ""}
                {o.name} ({formatPhone(o.phone)})
              </span>
            ))}
            .
          </p>
        </div>
      </section>

      {/* Key Facts table — entity-dense block for GEO + at-a-glance clarity */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-green-950">Vazhavithu at a glance</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-green-100">
          <table className="w-full text-left text-sm">
            <tbody>
              {keyFacts.map((fact, i) => (
                <tr
                  key={fact.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-green-50/50"}
                >
                  <th
                    scope="row"
                    className="w-1/3 px-4 py-3 align-top font-semibold text-green-950"
                  >
                    {fact.label}
                  </th>
                  <td className="px-4 py-3 align-top text-neutral-700">{fact.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sourced from Tamil Nadu (Trichy) — unique differentiator + trust story */}
      <section className="border-y border-green-100 bg-green-50/50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900">
                Sourcing &amp; Quality
              </span>
              <h2 className="mt-3 text-3xl font-bold text-green-950">
                Vazhavithu Sourced from Tamil Nadu&apos;s Trichy Belt
              </h2>
              <p className="mt-4 leading-7 text-neutral-700">
                The quality of your harvest starts with the planting material. We source our Vazhavithu from
                established banana nurseries around <strong className="text-green-950">Tiruchirappalli (Trichy)</strong>{" "}
                in Tamil Nadu — one of South India&apos;s most reputed regions for healthy, high-yield banana
                suckers and plantlets.
              </p>
              <p className="mt-4 leading-7 text-neutral-700">
                Each batch is selected for strong corms and variety purity, kept moisture-protected in transit,
                and brought into Kerala through our Kannur base — so farmers from Kasaragod to Thiruvananthapuram
                get vigorous, field-ready planting stock without sourcing it themselves across the border.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                { t: "Trusted nursery belt", d: "Material from the Trichy region, known for quality banana planting stock." },
                { t: "Variety purity", d: "Nendran, Njali Poovan, Palayankodan & Robusta — true to type." },
                { t: "Viable corms", d: "Selected sword suckers that establish fast and resist root rot." },
                { t: "Kerala-wide reach", d: "One source, delivered to farms in every Kerala district." },
              ].map((item) => (
                <li
                  key={item.t}
                  className="rounded-2xl border border-green-100 bg-white p-5"
                >
                  <p className="font-bold text-green-950">{item.t}</p>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600">{item.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* All-Kerala Delivery Spotlight Section */}
      <section className="border-t border-green-100 bg-gradient-to-br from-amber-50/70 via-emerald-50/40 to-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-amber-200/80 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                  🚚 Statewide Farm Transport Network
                </span>
                <h2 className="mt-3 text-3xl font-bold text-green-950">
                  All-Kerala Delivery for Vazhavithu (Banana Seeds)
                </h2>
                <p className="mt-3 text-base leading-relaxed text-neutral-700">
                  Whether you are cultivating in <strong className="font-semibold text-green-950">Kannur, Kasaragod, Wayanad, Kozhikode, Malappuram, Palakkad, Thrissur, Ernakulam, Kottayam, Idukki, or anywhere else in Kerala</strong>, we arrange safe road transportation directly to your farm gate or collection point.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-green-100 bg-green-50/60 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-green-900">Flexible Volumes</p>
                    <p className="mt-1 text-xs text-neutral-600">From 50–100 seedlings for homesteads to 2,000+ suckers for commercial banana plantations.</p>
                  </div>
                  <div className="rounded-2xl border border-green-100 bg-green-50/60 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-green-900">Moisture-Protected</p>
                    <p className="mt-1 text-xs text-neutral-600">Freshly harvested and protected so corms and roots remain hydrated and viable throughout road transit.</p>
                  </div>
                  <div className="rounded-2xl border border-green-100 bg-green-50/60 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-green-900">Direct Farm Gate</p>
                    <p className="mt-1 text-xs text-neutral-600">Dispatched via dedicated vehicle or regional freight logistics tailored to your exact district.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col shrink-0">
                <WhatsAppButton
                  phone={primaryWhatsApp}
                  message="Hi BT Banana, I need Vazhavithu (banana seeds) delivered to my district in Kerala. Please share delivery details and rate."
                  label="Check Delivery to Your Area"
                  className="px-6 py-3.5 text-sm"
                />
                <CallButton
                  phone={primaryPhone}
                  label="Call for Delivery Quote"
                  variant="outline"
                  className="px-6 py-3.5 text-sm border-green-800 text-green-950 hover:bg-green-50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seed Varieties Section */}
      <section className="border-y border-green-100 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-green-950">
            Vazhavithu Varieties Available for Cultivation
          </h2>
          <p className="mt-2 text-base text-neutral-600">
            Healthy suckers selected for strong root establishment, rapid vegetative vigour, and high harvest return:
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {seedVarieties.map((v) => (
              <div key={v.name} className="flex flex-col justify-between rounded-2xl border border-green-100 bg-green-50/50 p-6">
                <div>
                  <h3 className="text-lg font-bold text-green-950">{v.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-600">{v.desc}</p>
                </div>
                <div className="mt-4 border-t border-green-200/60 pt-3">
                  <span className="text-[11px] font-semibold text-green-800">Best for: {v.suitable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Botanical Clarity Section */}
      <section className="border-t border-green-100 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-8 sm:p-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
              Agronomy &amp; Farming Clarity
            </span>
            <h2 className="mt-2 text-2xl font-bold text-green-950 sm:text-3xl">
              Banana Seeds vs. Banana Suckers (വാഴവിത്ത്): What Kerala Farmers Need to Know
            </h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2 text-sm leading-relaxed text-neutral-700">
              <div>
                <h3 className="font-bold text-green-950">Why Edible Bananas Have No Botanical Seeds</h3>
                <p className="mt-1">
                  All commercial culinary and table bananas grown in Kerala—including Nendran, Njali Poovan, Palayankodan, and Robusta—are parthenocarpic triploid plants. They produce delicious fruit without fertilization and do not contain viable botanical seeds.
                </p>
                <p className="mt-2">
                  When Kerala farmers and growers search for &quot;banana seeds,&quot; they are referring to vegetative propagules—the side shoots that grow from the mother rhizome corm.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-green-950">Sword Suckers (വാഴക്കണ്ണികൾ) vs. Water Suckers</h3>
                <p className="mt-1">
                  In Malayalam, these planting propagules are termed <strong className="text-green-950">Vazhavithu (വാഴവിത്ത്)</strong>. BT Banana specifically grades and supplies <strong className="text-green-950">sword suckers</strong> with narrow, lance-like leaves and robust corms.
                </p>
                <p className="mt-2">
                  We avoid weak water suckers (which have broad leaves and small corms) because sword suckers establish faster in the soil, resist root rot, and produce heavy commercial bunches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Guide */}
      <section className="bg-green-50/50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-green-950">
                Why Sucker Selection Determines Your Yield
              </h2>
              <p className="mt-4 leading-7 text-neutral-700">
                Vazhavithu is the foundation of your banana plantation. The initial vigour, corm health, and variety purity of your planting stock dictate plant survival rate during monsoon, pest resilience, and harvest timing for peak markets like Onam.
              </p>
              <p className="mt-4 leading-7 text-neutral-700">
                BT Banana sources vigorous, viable suckers from the Trichy nursery belt and supplies them to farmers in Kannur, Kasaragod, Wayanad, and across every district of Kerala — so your crop starts strong.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-950">
                Who We Supply
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Commercial banana farmers planting multi-acre seasonal crops",
                  "Growers preparing Onam harvest schedules (Chingam market)",
                  "Homestead farmers looking for 20 to 100 seedlings",
                  "Agricultural cooperatives and trading nurseries sourcing bulk suckers",
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
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link
                  href="/locations"
                  className="font-semibold text-green-700 hover:text-green-900"
                >
                  See the areas we serve &rarr;
                </Link>
                <Link
                  href="/products"
                  className="font-semibold text-green-700 hover:text-green-900"
                >
                  Browse all banana varieties &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fast Quote Form */}
      <section className="border-t border-green-100 bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-green-950 text-center">
            Request a Vazhavithu / Banana Seeds Quote
          </h2>
          <p className="mt-2 text-center text-sm text-neutral-600">
            Tell us your desired variety, sucker quantity, and delivery town to receive prompt confirmation:
          </p>
          <div className="mt-8">
            <EnquiryForm
              defaultProduct="Banana Seeds / Vazhavithu (വാഴവിത്ത് - Nendran)"
              pageSource="Vazhavithu / Banana Seeds Page"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Faq items={bananaSeedFaqs} title="Vazhavithu / Banana Seeds — FAQs" />
      </section>

      <section className="border-t border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Contact Us for Vazhavithu (Banana Seeds)
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Get in touch with our Alakode or Nellipara branch for Vazhavithu / banana seed enquiries and delivery anywhere in Kerala.
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
