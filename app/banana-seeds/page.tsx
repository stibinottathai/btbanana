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
import { branches, primaryPhone, primaryWhatsApp, SITE_URL } from "@/lib/site";

const bananaSeedFaqs = [
  {
    question: "Do you supply banana suckers or literal botanical banana seeds?",
    answer:
      "Cultivated commercial bananas in Kerala (Nendran, Njali Poovan, Palayankodan, Robusta) are seedless fruits. They do not produce botanical seeds. What farmers in Kerala colloquially search for as 'banana seeds' or 'Vazhavithu' (വാഴവിത്ത്) are vegetative sword suckers and rhizome planting material. We supply vigorous, healthy sword suckers with viable corms.",
  },
  {
    question: "Do you deliver banana suckers (Vazhavithu) across Kerala?",
    answer:
      "Yes. We arrange safe road delivery of banana planting suckers (Vazhavithu) to farming destinations across Kerala — including Wayanad, Kozhikode, Malappuram, Palakkad, Thrissur, and Ernakulam — depending on order volume and transport arrangements.",
  },
  {
    question: "Where can I buy healthy banana planting material near Kannur and Kasaragod?",
    answer:
      "BT Banana supplies vigorous sword suckers and planting seedlings from our Alakode and Nellipara depots in Kannur district, regularly serving growers from Thaliparamba, Cherupuzha, Chittarikkal, and Vellarikundu.",
  },
  {
    question: "Which banana varieties of Vazhavithu do you supply?",
    answer:
      "We supply Nendran (Ethakka), Njali Poovan (ഞാലിപ്പൂവൻ), Mysore Poovan / Palayankodan (പാളയംകോടൻ), and Robusta planting suckers subject to seasonal nursery availability.",
  },
  {
    question: "How do you select healthy banana suckers for planting?",
    answer:
      "We select vigorous sword suckers with healthy corms and pointed lanceolate leaves, avoiding sluggish water suckers. This ensures fast field establishment, disease resistance, and robust bunch growth.",
  },
  {
    question: "What is the price of banana suckers / Vazhavithu today?",
    answer:
      "Wholesale prices vary based on variety, quality, quantity, market conditions and delivery location. Vazhavithu is priced per sucker/plantlet depending on variety and ordered count. Contact Thomas M.J (9447483169) or Albin Augustine (8086648081) for current quotations.",
  },
  {
    question: "Can I book large commercial quantities for plantation replanting?",
    answer:
      "Yes. We handle multi-hundred and thousand-sucker farm orders. We advise booking a few weeks in advance for monsoon planting or Onam crop schedules.",
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
      name: "Banana Suckers & Planting Material",
      item: `${SITE_URL}/banana-seeds`,
    },
  ],
};

export const metadata: Metadata = {
  title: "Banana Suckers & Vazhavithu in Kerala | BT Banana",
  description:
    "BT Banana supplies high-yield banana suckers & planting material (Vazhavithu / വാഴവിത്ത്) with safe delivery arranged across Kerala. Nendran, Njali Poovan, Mysore Poovan & Robusta from Kannur.",
  alternates: {
    canonical: `${SITE_URL}/banana-seeds`,
  },
  openGraph: {
    title: "Banana Suckers & Vazhavithu in Kerala | BT Banana",
    description:
      "High-yield banana suckers / Vazhavithu planting material supplied wholesale from Alakode & Nellipara, Kannur, with delivery arranged across all districts of Kerala.",
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

export default function BananaSeedsPage() {
  return (
    <div>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ label: "Banana Suckers / Seeds", href: "/banana-seeds" }]} />
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
            Banana Suckers &amp; Planting Material (Vazhavithu) in Kerala
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
            Looking for banana planting material in Kerala? BT Banana supplies vigorous sword suckers — locally searched as{" "}
            <strong className="font-semibold text-green-900">banana seeds / Vazhavithu (വാഴവിത്ത്)</strong> —
            at reasonable wholesale rates from our Alakode and Nellipara depots in Kannur, with <strong className="text-green-950">safe, reliable delivery arranged across all districts of Kerala</strong>.
          </p>
          <div className="mt-8 flex flex-row items-center gap-2.5 sm:gap-4">
            <CallButton
              phone={primaryPhone}
              label="Call for Kerala Delivery"
              className="flex-1 justify-center whitespace-nowrap px-3.5 py-3 text-xs font-bold sm:flex-initial sm:px-6 sm:py-3.5 sm:text-sm"
            />
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="Hi BT Banana, I'd like to enquire about banana seeds / Vazhavithu and delivery to my location in Kerala."
              label="Enquire for All-Kerala Delivery"
              className="flex-1 justify-center whitespace-nowrap px-3.5 py-3 text-xs font-bold sm:flex-initial sm:px-6 sm:py-3.5 sm:text-sm"
            />
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/vazhavithu.png"
            alt="Banana seeds / Vazhavithu planting material and seedlings supplied with All-Kerala delivery by BT Banana, Kannur"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
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
                  All-Kerala Delivery for Banana Seeds (Vazhavithu)
                </h2>
                <p className="mt-3 text-base leading-relaxed text-neutral-700">
                  Whether you are cultivating in <strong className="font-semibold text-green-950">Kannur, Kasaragod, Wayanad, Kozhikode, Malappuram, Palakkad, Thrissur, Ernakulam, or anywhere else in Kerala</strong>, we arrange safe road transportation directly to your farm gate or collection point.
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
                  message="Hi BT Banana, I need banana seeds (Vazhavithu) delivered to my district in Kerala. Please share delivery details and rate."
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
                As a dedicated agricultural supplier in Kannur, BT Banana inspects planting material to supply healthy, viable suckers that produce high yields for farmers in Kannur, Kasaragod, Wayanad, and across Kerala.
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
            </div>
          </div>
        </div>
      </section>

      {/* Fast Quote Form */}
      <section className="border-t border-green-100 bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-green-950 text-center">
            Request Banana Suckers / Vazhavithu Quote
          </h2>
          <p className="mt-2 text-center text-sm text-neutral-600">
            Tell us your desired variety, sucker quantity, and delivery town to receive prompt confirmation:
          </p>
          <div className="mt-8">
            <EnquiryForm
              defaultProduct="Banana Seeds / Vazhavithu (വാഴവിത്ത് - Nendran)"
              pageSource="Banana Seeds &amp; Planting Material Page"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Faq items={bananaSeedFaqs} />
      </section>

      <section className="border-t border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Contact Us for Banana Seeds
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Get in touch with our Alakode or Nellipara branch for banana seed / Vazhavithu enquiries across Kerala.
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
