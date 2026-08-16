import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LocationCard } from "@/components/LocationCard";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { CheckIcon } from "@/components/icons";
import { branches, primaryPhone, primaryWhatsApp, SITE_NAME, SITE_URL } from "@/lib/site";

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
    "Nendran banana wholesale from BT Banana — a Nendran banana supplier and wholesaler in Alakode and Nellipara, Kannur, serving Kannur and Kasaragod districts, Kerala.",
  alternates: {
    canonical: "/products/nendran-banana",
  },
  openGraph: {
    title: "Nendran Banana Wholesale Supplier in Kerala | BT Banana",
    description:
      "Nendran banana wholesale supplied from Alakode and Nellipara, Kannur district, Kerala — serving traders, retailers, and businesses across Kannur and Kasaragod.",
    url: `${SITE_URL}/products/nendran-banana`,
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Nendran Banana",
  description:
    "Nendran banana, Kerala's most widely cultivated banana variety, supplied wholesale by BT Banana from Alakode and Nellipara, Kannur district, Kerala.",
  brand: {
    "@type": "Brand",
    name: SITE_NAME,
  },
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
            Nendran Banana Wholesale Supplier
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
            BT Banana is a Nendran banana wholesaler and supplier in Kerala,
            dealing in Kerala&apos;s most widely cultivated banana variety at
            reasonable wholesale prices from our Alakode and Nellipara
            branches, Kannur district.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CallButton phone={primaryPhone} label="Get Wholesale Price" />
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="Hi BT Banana, I'd like to enquire about Nendran banana wholesale."
            />
          </div>
        </div>
        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl shadow-lg sm:block">
          <Image
            src="/images/nendran.png"
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
                About Nendran Banana
              </h2>
              <p className="mt-4 leading-7 text-neutral-700">
                Nendran is Kerala&apos;s most widely cultivated banana
                variety — a staple used for everyday cooking, banana chips,
                traditional dishes, and ripe eating. It&apos;s the variety
                most households and traders across Kerala rely on
                day-to-day.
              </p>
              <p className="mt-4 leading-7 text-neutral-700">
                As a Nendran banana wholesaler, we supply this variety in
                bulk to traders, retailers, and households from our Alakode
                and Nellipara branches, Kannur district.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-950">
                Nendran Banana Wholesaler for Kannur &amp; Kasaragod
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Nendran banana wholesale supplier near Kannur",
                  "Nendran banana wholesaler serving Kasaragod district",
                  "Bulk quantities for traders, retailers, and businesses",
                  "Reasonable, transparent wholesale pricing",
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

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-green-950">
          Looking for Nendran Banana Seeds / Planting Material?
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-neutral-700">
          Nendran is also the most common variety grown from the banana
          Vazhavithu (planting material / seedlings) we supply. Visit our{" "}
          <Link
            href="/banana-seeds"
            className="font-semibold text-green-800 hover:underline"
          >
            Banana Seeds page
          </Link>{" "}
          for details, or contact us directly to confirm current
          availability.
        </p>
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
