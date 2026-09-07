import type { Metadata } from "next";
import Link from "next/link";
import {
  owners,
  primaryPhone,
  primaryWhatsApp,
  SITE_NAME,
  SITE_URL,
  formatPhone,
  telHref,
} from "@/lib/site";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import { CheckIcon, LeafIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Banana Price Today Kerala | Daily Wholesale Market Rates & Quote Guide",
  description:
    "Check daily wholesale banana rates in Kerala. Understand how Nendran (Ethakka), Njali Poovan, Robusta, and Vazhavithu prices are calculated, and get today's live rate directly via WhatsApp or phone from BT Banana.",
  alternates: {
    canonical: `${SITE_URL}/banana-prices`,
  },
  openGraph: {
    title: "Banana Price Today Kerala | Daily Wholesale Rates | BT Banana",
    description:
      "Get today's live wholesale banana and banana seed rates in Kerala. Real-time morning auction prices for Nendran, Njali Poovan, and Robusta.",
    url: `${SITE_URL}/banana-prices`,
    type: "website",
  },
};

const priceFaqs = [
  {
    question: "Why do wholesale banana prices in Kerala change every day?",
    answer:
      "Wholesale banana rates in Kerala are governed by daily morning agricultural market arrivals, harvest volumes across Wayanad, Palakkad, and local Kannur farming belts, transport fuel charges, and fluctuating festive or wedding season demand. As a result, honest wholesale suppliers quote live daily rates rather than fixed static figures.",
  },
  {
    question: "How can I get today's live wholesale price for Nendran bananas?",
    answer:
      "Because rates are finalized after daily morning harvesting and market openings, call or WhatsApp Thomas M.J (9447483169) or Albin Augustine (8086648081) directly. We will provide today's verified per-kilogram or per-quintal rate based on your required volume and location.",
  },
  {
    question: "How is banana bunch grading priced?",
    answer:
      "Bunches with large, uniform, unblemished fingers (Grade-A) command premium wholesale rates because they yield maximum recovery for retailers and chips makers. Smaller bunches or mixed grades are priced lower for quick retail turnover.",
  },
  {
    question: "Are banana seeds (Vazhavithu) priced per seedling or per weight?",
    answer:
      "Banana planting suckers (Vazhavithu) are generally priced per sucker/plantlet, depending on the variety (Nendran, Njali Poovan, Mysore Poovan), sucker maturity, and whether you are ordering sword suckers or bulk nursery planting material.",
  },
  {
    question: "Do you offer wholesale discounts for multi-quintal bulk orders?",
    answer:
      "Yes. Volume discounts apply to recurring commercial shipments, chips manufacturing units, and large plantation seed orders. Contact us directly to negotiate bulk commercial contract terms.",
  },
];

const priceGuideJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kerala Wholesale Banana Market Price Guide & Daily Rates",
  description:
    "A transparent breakdown of how banana market rates are set in Kerala, including Nendran, Njali Poovan, Robusta, and banana seeds (Vazhavithu).",
  author: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.png`,
    },
  },
  mainEntityOfPage: `${SITE_URL}/banana-prices`,
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
      name: "Today's Rates",
      item: `${SITE_URL}/banana-prices`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: priceFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const pricingFactors = [
  {
    title: "1. Daily Morning Market Arrivals",
    desc: "Wholesale prices adjust daily according to harvest arrivals at regional collection depots and district agricultural mandis.",
  },
  {
    title: "2. Variety & Commercial Demand",
    desc: "Nendran (Ethakka) and delicate Njali Poovan usually command higher market value due to kitchen and chips demand, compared to high-volume commercial Robusta.",
  },
  {
    title: "3. Bunch Grading & Finger Weight",
    desc: "First-grade bunches with thick, blemish-free fingers command premium rates; commercial second grades are priced for fast high-volume turnover.",
  },
  {
    title: "4. Volume & Logistics Distance",
    desc: "Single-bunch local pickups carry retail-wholesale spreads, while multi-quintal or ton-level dispatches benefit from volume pricing and consolidated transport.",
  },
];

const varietyPriceOverview = [
  {
    name: "Nendran Banana (Ethakka / ഏത്തക്ക)",
    useCase: "Table fruit, chips manufacturing, culinary cooking, Sadya upperi",
    pricingNature: "Fluctuates with daily chips industry demand and festive cycles (Onam, Vishu).",
    unit: "Per kg / Per quintal",
  },
  {
    name: "Njali Poovan (ഞാലിപ്പൂവൻ)",
    useCase: "Premium sweet table dessert banana, temple offerings",
    pricingNature: "Premium pricing due to delicate harvesting, fragile skin, and high consumer retail value.",
    unit: "Per kg / Per bunch",
  },
  {
    name: "Mysore Poovan / Palayankodan (പാളയംകോടൻ)",
    useCase: "Daily household consumption, tea stalls, local catering",
    pricingNature: "Highly stable year-round pricing, resilient crop yield.",
    unit: "Per kg / Per bunch",
  },
  {
    name: "Robusta Banana (റോബസ്റ്റ)",
    useCase: "Commercial food service, supermarkets, juice bars",
    pricingNature: "Economical bulk pricing, heavy bunch yields with steady supply curves.",
    unit: "Per kg / Per ton",
  },
  {
    name: "Banana Seeds / Vazhavithu (വാഴവിത്ത്)",
    useCase: "Commercial farm cultivation, plantation replanting",
    pricingNature: "Priced per vigorous sucker / seedling; seasonal discounts on volume bookings (100+ to 1,000+ suckers).",
    unit: "Per sucker / seedling",
  },
];

export default function BananaPricesPage() {
  return (
    <>
      <JsonLd data={priceGuideJsonLd} />
      <JsonLd data={breadcrumbsJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-emerald-50/40 to-white pb-16 pt-10 sm:pb-24 sm:pt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-neutral-500">
            <Link href="/" className="hover:text-green-800">
              Home
            </Link>
            <span>/</span>
            <span className="text-green-900 font-semibold">Today&apos;s Banana Rates</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900">
              <LeafIcon className="h-4 w-4 text-emerald-700" />
              Transparent Wholesale Pricing • Live Market Rates
            </span>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-green-950 sm:text-4xl lg:text-5xl">
              Banana Price Today in Kerala: Wholesale Rates &amp; Market Guide
            </h1>

            <p className="mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Looking for today&apos;s wholesale banana rate in Kerala? Banana prices fluctuate daily based on morning auction arrivals, variety, bunch grade, and volume. At BT Banana, we give buyers upfront, transparent rates directly from our Alakode and Nellipara depots without middleman markups.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CallButton
                phone={primaryPhone}
                label="Call for Today's Rate"
                className="shadow-md shadow-green-900/10"
              />
              <WhatsAppButton
                phone={primaryWhatsApp}
                message="Hi BT Banana, please share today's wholesale rate for bananas / banana seeds."
                label="WhatsApp for Live Rate"
                className="shadow-md shadow-green-900/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Rates Are Determined */}
      <section className="border-y border-green-100 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
              How Kerala Wholesale Banana Prices Are Determined
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-neutral-600">
              Websites quoting arbitrary static prices are often outdated. Legitimate agricultural wholesale pricing depends on four critical factors:
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingFactors.map((factor, i) => (
              <Reveal key={factor.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-green-100 bg-green-50/40 p-6 transition hover:bg-green-50 hover:shadow-md">
                  <h3 className="text-lg font-bold text-green-950">{factor.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{factor.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Variety Pricing Guide Table */}
      <section className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl font-bold text-green-950 sm:text-4xl">
              Wholesale Varieties &amp; Price Dynamics
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              Overview of how different banana types and planting seeds are priced across Kerala markets:
            </p>
          </Reveal>

          <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-neutral-800">
                <thead className="border-b border-neutral-200 bg-green-950 text-xs font-bold uppercase tracking-wider text-white">
                  <tr>
                    <th className="px-6 py-4">Variety</th>
                    <th className="px-6 py-4">Primary Use</th>
                    <th className="px-6 py-4">Pricing Dynamics</th>
                    <th className="px-6 py-4">Billing Unit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {varietyPriceOverview.map((item) => (
                    <tr key={item.name} className="hover:bg-green-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-green-950">{item.name}</td>
                      <td className="px-6 py-4 text-xs text-neutral-600">{item.useCase}</td>
                      <td className="px-6 py-4 text-xs leading-relaxed text-neutral-700">{item.pricingNature}</td>
                      <td className="px-6 py-4 font-semibold text-xs text-emerald-800">{item.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-neutral-200 bg-amber-50/70 p-4 text-xs text-amber-900">
              💡 <strong>Direct Wholesale Note:</strong> Actual per-kg and per-sucker rates are updated daily at 7:00 AM after morning farm arrivals. Call us directly for today&apos;s quote.
            </div>
          </div>
        </div>
      </section>

      {/* Instant Quote Calculator / Form */}
      <section className="border-t border-green-100 bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold text-green-950">Get Today&apos;s Live Rate in 2 Minutes</h2>
            <p className="mt-2 text-base text-neutral-600">
              Select your required variety and tell us your destination. We will reply instantly with today&apos;s confirmed rate:
            </p>
          </Reveal>

          <div className="mt-8">
            <EnquiryForm defaultProduct="Today's Daily Wholesale Price Enquiry" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-green-100 bg-green-50/50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl font-bold text-green-950 text-center">Frequently Asked Questions</h2>
            <p className="mt-2 text-center text-sm text-neutral-600">
              Understanding daily banana market dynamics, grading, and bulk order discounts.
            </p>
          </Reveal>
          <div className="mt-8">
            <Faq items={priceFaqs} />
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="bg-green-950 py-12 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">Want Today&apos;s Immediate Per-Kg Rate?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-green-200">
            Speak directly with Thomas M.J or Albin Augustine. We share live mandi and farm gate rates transparently over phone or WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {owners.map((owner) => (
              <a
                key={owner.phone}
                href={telHref(owner.phone)}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-2.5 text-sm font-bold text-green-950 transition hover:bg-amber-300"
              >
                <PhoneIcon className="h-4 w-4" />
                Call {owner.name.split(" ")[0]}: {formatPhone(owner.phone)}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
