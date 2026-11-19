import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LocationCard } from "@/components/LocationCard";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { CheckIcon } from "@/components/icons";
import { BUSINESS_ID, branches, primaryPhone, primaryWhatsApp, SITE_URL } from "@/lib/site";

const nendranFaqs = [
  {
    question: "Where can I buy Nendran banana wholesale near Kannur?",
    answer:
      "BT Banana supplies Nendran banana wholesale from our Alakode and Nellipara branches in Kannur district, serving traders, retailers, and businesses across Kannur and Kasaragod districts, Kerala.",
  },
  {
    question: "Is BT Banana a Nendran banana wholesaler in Kasaragod too?",
    answer:
      "Yes — our Alakode branch is close to the Kannur–Kasaragod border, and we regularly supply Nendran banana wholesale to customers across Kasaragod district as well.",
  },
  {
    question: "Do you supply Nendran banana seeds / planting material?",
    answer:
      "Nendran is the most common variety grown from the banana Vazhavithu (planting material) we supply — see our Banana Seeds page for details, or contact us directly to confirm current availability.",
  },
  {
    question: "What is Nendran banana used for?",
    answer:
      "Nendran is Kerala's most widely cultivated banana variety, used for everyday cooking, banana chips, traditional dishes, and ripe fruit — which is why it's a staple for traders, retailers, and households alike.",
  },
  {
    question: "Do you supply Nendran banana in bulk?",
    answer:
      "Yes — wholesale bulk supply is our core business. Contact us with the quantity you need and we'll confirm current availability and pricing.",
  },
];

export const metadata: Metadata = {
  title: "Nendran Banana Wholesale Supplier in Kerala",
  description:
    "Nendran banana wholesale in Kannur: ripe Ethakka and raw green Nendran (Pacha Ethakka) for chips units, from BT Banana depots at Alakode & Nellipara.",
  alternates: {
    canonical: "/products/nendran-banana",
  },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: "Nendran Banana Wholesale Supplier in Kerala | BT Banana",
    description:
      "Nendran banana wholesale supplied from Alakode and Nellipara, Kannur district, Kerala — serving traders, retailers, and businesses across Kannur and Kasaragod.",
    url: `${SITE_URL}/products/nendran-banana`,
  },
};

// Typed as a Service (supply by BT Banana), not a Product: Google rejects
// any Product without offers/review/aggregateRating, and prices aren't confirmed.
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Wholesale banana supply",
  name: "Nendran Banana Wholesale",
  description:
    "Fresh Nendran banana (Ethakka / ഏത്തക്ക) and raw green plantains for chips supplied wholesale by BT Banana from Alakode and Nellipara depots in Kannur district, Kerala.",
  provider: { "@id": BUSINESS_ID },
};



export default function NendranBananaPage() {
  return (
    <div>
      <JsonLd data={productJsonLd} />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: "Nendran Banana", href: "/products/nendran-banana" },
          ]}
        />
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-green-950 sm:text-5xl">
            Nendran Banana Wholesale Supplier in Kerala
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
            BT Banana is a direct Nendran banana wholesaler and merchant in Kerala,
            supplying Kerala&apos;s most widely cultivated plantain variety at
            competitive wholesale rates from our Alakode and Nellipara
            depots, Kannur district.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CallButton phone={primaryPhone} label="Get Wholesale Price" />
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="Hi BT Banana, I'd like to enquire about Nendran banana wholesale."
            />
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/wholesale.webp"
            alt="Nendran bananas, Kerala's most widely used variety, supplied wholesale by BT Banana, Alakode"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-y border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-green-950">
                About Nendran Banana (Ethakka / ഏത്തക്ക)
              </h2>
              <p className="mt-4 leading-7 text-neutral-700">
                Nendran is Kerala&apos;s signature cooking and dessert plantain — a staple
                for banana chips manufacturing, traditional Kerala sadhyas, steamed breakfast
                dishes (Puzhukku), and ripe fruit stalls. Its firm flesh and high dry-matter
                content make it the most traded commercial banana in South India.
              </p>
              <p className="mt-4 leading-7 text-neutral-700">
                As a registered <Link href="/banana-merchant-kannur" className="font-semibold text-green-800 underline">banana merchant in Kannur</Link>,
                we procure Nendran directly from local growers and primary harvesting belts,
                supplying sorted, graded bunches daily to retailers, bakeries, and caterers.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-950">
                Nendran Commercial Uses &amp; Supply
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Raw green Nendran (Pacha Ethakka) for banana chips frying",
                  "Matured ripe Nendran for retail fruit stalls and supermarkets",
                  "Direct mandi bulk supply across Kannur, Kasaragod & Wayanad",
                  "Transparent wholesale pricing based on daily market arrivals",
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

      {/* Commercial Chips & Sucker Links */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-green-950">
              Raw Nendran for Chips Manufacturers
            </h2>
            <p className="mt-3 leading-7 text-neutral-700">
              Need bulk unripened green Nendran with 85–90% maturity for crispy, oil-free
              chips frying? We supply calibrated chip-grade plantains directly to hot chips
              units and commercial food processors.
            </p>
          </div>

          <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-green-950">
              Nendran Banana Suckers (Vazhavithu)
            </h2>
            <p className="mt-3 leading-7 text-neutral-700">
              Cultivating Nendran on your farm? We supply Nendran sword suckers
              (Vazhavithu / വാഴവിത്ത്) for farms and
              commercial plantation development across Kerala.
            </p>
            <div className="mt-5">
              <Link
                href="/banana-seeds/nendran"
                className="font-bold text-green-800 hover:underline"
              >
                Explore Banana Suckers &amp; Planting Material &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Faq items={nendranFaqs} title="Nendran Banana — Frequently Asked Questions" />
      </section>

      <section className="border-t border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Nendran Banana Supply Near Kannur &amp; Nellipara
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Get in touch with our Alakode or Nellipara branch for Nendran
            banana wholesale enquiries.
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
