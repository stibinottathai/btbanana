import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  owners,
  primaryPhone,
  primaryWhatsApp,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import { CheckIcon, LeafIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Raw Nendran Banana for Chips Wholesale in Kerala | BT Banana",
  description:
    "Wholesale supplier of raw green Nendran bananas (Pacha Ethakka / പച്ച ഏത്തക്ക) for banana chips makers, hot chips units, and snack manufacturers in Kerala. High starch, crisp frying, direct from Alakode & Nellipara, Kannur.",
  alternates: {
    canonical: `${SITE_URL}/banana-for-chips`,
  },
  openGraph: {
    title: "Raw Nendran Banana for Chips Wholesale in Kerala | BT Banana",
    description:
      "Bulk supplier of raw green Nendran bananas for banana chips manufacturers and hot chips shops across Kerala. Farm-fresh, high starch content, direct wholesale rates.",
    url: `${SITE_URL}/banana-for-chips`,
    type: "website",
  },
};

const chipsFaqs = [
  {
    question: "Why is Pacha Ethakka (raw Nendran) the best banana for making Kerala chips?",
    answer:
      "Raw green Nendran (പച്ച ഏത്തക്ക) has a high starch content and low moisture before ripening. When sliced and fried in coconut oil or vegetable oil, the starch crisps rapidly without caramelizing or absorbing excessive oil, yielding the signature golden yellow colour and crunch authentic Kerala banana chips are famous for.",
  },
  {
    question: "Do you supply raw bananas in bulk specifically for hot chips shops and factories?",
    answer:
      "Yes. BT Banana supplies chips manufacturers, hot chips shops, bakeries, and commercial snack units across Kannur, Kasaragod, Wayanad, and surrounding Kerala regions. We provide both daily small commercial batches and multi-quintal bulk dispatches.",
  },
  {
    question: "How do you ensure the bananas are not under-mature or over-ripe for chips?",
    answer:
      "Chips require bananas harvested at mature green stage (roughly 85–90% maturity) where the fruit is fully formed and dense, but zero sugar conversion has begun. We inspect bunches closely so chips makers get consistent, sliceable raw fruit with minimal waste.",
  },
  {
    question: "What is the minimum order quantity for chips banana supply?",
    answer:
      "We accommodate hot chips shops buying single bunches or 50–100 kg daily, as well as industrial chips manufacturers ordering multiple quintals or tons. Call or WhatsApp Thomas M.J or Albin Augustine to discuss your volume requirement.",
  },
  {
    question: "Can chips bananas be delivered to locations outside Alakode?",
    answer:
      "Yes. We supply across Kannur, Kasaragod, and nearby regions. Depending on order volume, we arrange direct vehicle transport or schedule regular depot pickups from our Alakode and Nellipara branches.",
  },
];

const chipsProductJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Raw Green Nendran Banana for Chips (Pacha Ethakka)",
  description:
    "Farm-fresh raw green Nendran bananas (പച്ച ഏത്തക്ക) with high starch content, ideal for Kerala banana chips manufacturers and commercial hot chips fryers.",
  image: `${SITE_URL}/images/wholesale.png`,
  brand: {
    "@type": "Brand",
    name: SITE_NAME,
  },
  category: "Agricultural Produce > Fresh Bananas",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    priceRange: "Wholesale Market Rates (Enquire for Daily Auction Rate)",
    seller: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: `+91${primaryPhone}`,
      url: SITE_URL,
    },
  },
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
      name: "Wholesale Bananas",
      item: `${SITE_URL}/wholesale-bananas`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Banana for Chips",
      item: `${SITE_URL}/banana-for-chips`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: chipsFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const chipsSpecs = [
  {
    title: "High Starch & Dry Matter",
    desc: "Provides maximum crispness, prevents soft chips, and significantly cuts frying oil absorption.",
  },
  {
    title: "Zero Ripening / Sugar Conversion",
    desc: "Strictly harvested green to avoid brown spots or burnt edges during frying.",
  },
  {
    title: "Uniform Finger Thickness",
    desc: "Ensures uniform slicing on manual or automated mandolines with minimal trimming waste.",
  },
  {
    title: "Seasonal Bulk Availability",
    desc: "Sourced through direct farm network across North Kerala. Availability may vary based on season, quality, market arrivals and quantity.",
  },
];

export default function BananaForChipsPage() {
  return (
    <>
      <JsonLd data={chipsProductJsonLd} />
      <JsonLd data={breadcrumbsJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-emerald-50/40 to-white pb-16 pt-10 sm:pb-24 sm:pt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Breadcrumbs */}
          <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-neutral-500">
            <Link href="/" className="hover:text-green-800">
              Home
            </Link>
            <span>/</span>
            <Link href="/wholesale-bananas" className="hover:text-green-800">
              Wholesale Bananas
            </Link>
            <span>/</span>
            <span className="text-green-900 font-semibold">Banana for Chips</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900">
                <LeafIcon className="h-4 w-4 text-emerald-700" />
                Commercial B2B Supply • Pacha Ethakka (പച്ച ഏത്തക്ക)
              </span>

              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-green-950 sm:text-4xl lg:text-5xl">
                Raw Green Nendran Banana for Chips Wholesale in Kerala
              </h1>

              <p className="mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
                Searching for a reliable raw banana supplier for your hot chips shop or banana chips manufacturing unit? BT Banana supplies premium <strong className="text-green-950">raw green Nendran (Pacha Ethakka)</strong> directly from Alakode and Nellipara, Kannur. High starch density, low oil absorption, and consistent grading tailored for crisp, golden frying.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <CallButton
                  phone={primaryPhone}
                  className="shadow-md shadow-green-900/10"
                />
                <WhatsAppButton
                  phone={primaryWhatsApp}
                  message="Hi BT Banana, I need a wholesale quote for raw green Nendran bananas for chips manufacturing."
                  label="Enquire for Chips Bananas"
                  className="shadow-md shadow-green-900/10"
                />
              </div>

              {/* Fast verification badges */}
              <div className="mt-8 grid grid-cols-2 gap-3 border-t border-green-900/10 pt-6 sm:grid-cols-3">
                <div className="rounded-xl bg-white p-3 shadow-xs border border-green-100">
                  <p className="text-xs text-neutral-500">Maturity</p>
                  <p className="text-sm font-bold text-green-950">85–90% Mature Green</p>
                </div>
                <div className="rounded-xl bg-white p-3 shadow-xs border border-green-100">
                  <p className="text-xs text-neutral-500">Starch Grade</p>
                  <p className="text-sm font-bold text-green-950">High Dry Matter</p>
                </div>
                <div className="col-span-2 sm:col-span-1 rounded-xl bg-white p-3 shadow-xs border border-green-100">
                  <p className="text-xs text-neutral-500">Minimum Order</p>
                  <p className="text-sm font-bold text-green-950">Small &amp; Bulk Lots</p>
                </div>
              </div>
            </div>

            {/* Visual Display */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-white shadow-2xl ring-1 ring-green-900/10">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/wholesale.png"
                    alt="Bulk raw green Nendran bananas for chips manufacturing by BT Banana Kerala"
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="bg-gradient-to-t from-green-950 via-green-950/80 to-transparent p-6 text-white sm:absolute sm:bottom-0 sm:inset-x-0">
                  <p className="text-sm font-bold text-amber-300">Grade-A Raw Nendran</p>
                  <p className="mt-1 text-xs text-green-100">
                    Hand-harvested and inspected to eliminate soft or premature fingers before wholesale dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chips Industry Specs */}
      <section className="border-y border-green-100 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
              Why Kerala Banana Chips Makers Choose BT Banana
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-neutral-600">
              Not all bananas can make crisp, golden Kerala chips. Chips makers lose money when bananas are under-mature (rubbery chips) or ripening (soggy, brown chips). Here is how our sourcing protects your product quality:
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {chipsSpecs.map((spec, i) => (
              <Reveal key={spec.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-green-100 bg-green-50/40 p-6 transition hover:bg-green-50 hover:shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-white font-bold">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-green-950">{spec.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{spec.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Raw Nendran Chips Grading Specifications Table */}
      <section className="py-14 bg-white border-y border-green-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-green-950 sm:text-3xl">
              Raw Nendran Quality Specifications for Kerala Chips
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Technical parameters required for commercial chips manufacturing and hot chips frying:
            </p>
          </Reveal>

          <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-neutral-800">
                <thead className="bg-green-950 text-xs font-bold uppercase tracking-wider text-white">
                  <tr>
                    <th className="px-6 py-4">Specification</th>
                    <th className="px-6 py-4">BT Banana Chips Grade (Pacha Ethakka)</th>
                    <th className="px-6 py-4">Why It Matters to Chips Makers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-xs sm:text-sm">
                  <tr className="hover:bg-green-50/50">
                    <td className="px-6 py-4 font-bold text-green-950">Maturity Stage</td>
                    <td className="px-6 py-4 text-emerald-800 font-semibold">85% – 90% Mature Green</td>
                    <td className="px-6 py-4 text-neutral-600">Eliminates rubbery texture from immature fruit; ensures firm, clean slicing.</td>
                  </tr>
                  <tr className="hover:bg-green-50/50">
                    <td className="px-6 py-4 font-bold text-green-950">Sugar / Ripening Level</td>
                    <td className="px-6 py-4 text-emerald-800 font-semibold">Zero Sugar Conversion</td>
                    <td className="px-6 py-4 text-neutral-600">Prevents caramelization, burnt black edges, and soggy, dark chips.</td>
                  </tr>
                  <tr className="hover:bg-green-50/50">
                    <td className="px-6 py-4 font-bold text-green-950">Starch &amp; Dry Matter</td>
                    <td className="px-6 py-4 text-emerald-800 font-semibold">High Dry Matter (&gt;28%)</td>
                    <td className="px-6 py-4 text-neutral-600">Dramatically lowers oil absorption in coconut or sunflower oil; maximizes crunch.</td>
                  </tr>
                  <tr className="hover:bg-green-50/50">
                    <td className="px-6 py-4 font-bold text-green-950">Finger Caliber &amp; Length</td>
                    <td className="px-6 py-4 text-emerald-800 font-semibold">Uniform Thick Caliber</td>
                    <td className="px-6 py-4 text-neutral-600">Fits standard manual and automated mandoline slicers with minimal trimming waste.</td>
                  </tr>
                  <tr className="hover:bg-green-50/50">
                    <td className="px-6 py-4 font-bold text-green-950">Availability Note</td>
                    <td className="px-6 py-4 text-amber-800 font-semibold">Seasonal Market Lots</td>
                    <td className="px-6 py-4 text-neutral-600">Availability may vary based on season, quality, market arrivals and quantity.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Sectors We Supply */}
      <section className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl font-bold text-green-950 sm:text-4xl">
              Sectors &amp; Commercial Buyers We Serve
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              We provide tailored supply schedules for businesses that cannot afford production halts:
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-green-950">Hot Chips Shops &amp; Bakeries</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Fresh daily or alternate-day supplies for street hot chips stalls, bakeries, and tea shops requiring fresh frying every morning.
              </p>
              <ul className="mt-4 space-y-2 text-xs font-semibold text-green-800">
                <li>✓ Daily bunch deliveries / pickup</li>
                <li>✓ Uniform finger size for manual slicers</li>
                <li>✓ Consistent golden frying color</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-green-950">Commercial Snack Factories</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Continuous volume supply for commercial packaged chips producers distributing branded snack pouches across Kerala and exports.
              </p>
              <ul className="mt-4 space-y-2 text-xs font-semibold text-green-800">
                <li>✓ Multi-quintal &amp; tonnage shipments</li>
                <li>✓ Strict moisture &amp; starch criteria</li>
                <li>✓ Advance booking for festival rushes</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-green-950">Caterers &amp; Wedding Cooks</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Bulk raw plantains for authentic Sadya chips (Upperi and Sharkara Varatti) for large marriage events and temple festivals.
              </p>
              <ul className="mt-4 space-y-2 text-xs font-semibold text-green-800">
                <li>✓ Thick-cut varieties for Sharkara Varatti</li>
                <li>✓ Thin-cut crisp Nendran for Upperi</li>
                <li>✓ Timed dispatch right before the event</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form Section */}
      <section className="border-t border-green-100 bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold text-green-950">Request a Wholesale Chips Banana Quote</h2>
            <p className="mt-2 text-base text-neutral-600">
              Submit your required quantity and location to receive today&apos;s direct wholesale price from Thomas M.J or Albin Augustine.
            </p>
          </Reveal>

          <div className="mt-8">
            <EnquiryForm
              defaultProduct="Raw Banana for Chips / Pacha Ethakka (പച്ച ഏത്തക്ക)"
              pageSource="Banana for Chips Page"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-green-100 bg-green-50/50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl font-bold text-green-950 text-center">Frequently Asked Questions</h2>
            <p className="mt-2 text-center text-sm text-neutral-600">
              Common questions about sourcing raw bananas for chips manufacturing in Kerala.
            </p>
          </Reveal>
          <div className="mt-8">
            <Faq items={chipsFaqs} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-green-950 py-12 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">Need Urgent Raw Bananas for Chips Today?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-green-200">
            Call our Alakode or Nellipara branch directly to check today&apos;s ready stock and arrange immediate vehicle dispatch.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {owners.map((owner) => (
              <CallButton
                key={owner.phone}
                phone={owner.phone}
                label={`Call ${owner.name.split(" ")[0]} (${owner.name})`}
                className="bg-amber-400 text-green-950 hover:bg-amber-300"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
