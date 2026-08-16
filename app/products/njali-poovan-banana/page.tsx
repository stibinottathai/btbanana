import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LocationCard } from "@/components/LocationCard";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { CheckIcon } from "@/components/icons";
import { branches, primaryPhone, primaryWhatsApp, SITE_NAME, SITE_URL } from "@/lib/site";

const njaliPoovanFaqs = [
  {
    question: "Where can I buy Njali Poovan banana wholesale near Kannur?",
    answer:
      "BT Banana supplies fresh Njali Poovan banana wholesale from our Alakode and Nellipara branches in Kannur district, serving traders, fruit shop owners, and retailers across Kannur and Kasaragod districts, Kerala.",
  },
  {
    question: "Is BT Banana a Njali Poovan banana wholesaler in Kasaragod too?",
    answer:
      "Yes — our Alakode branch is located near the Kannur–Kasaragod border, and we regularly supply Njali Poovan banana wholesale to customers across Kasaragod district as well.",
  },
  {
    question: "What makes Njali Poovan banana special?",
    answer:
      "Njali Poovan (ഞാലിപ്പൂവൻ) is renowned for its small size, thin skin, rich sweetness, and pleasant aroma. It is a highly sought-after table dessert banana variety in Kerala.",
  },
  {
    question: "Do you supply Njali Poovan banana in bulk quantities?",
    answer:
      "Yes — wholesale bulk supply is our core business. Contact us with the quantity you need and we'll confirm current availability and market pricing.",
  },
  {
    question: "Is Njali Poovan banana available year-round?",
    answer:
      "Availability depends on local harvest seasons and current stock — contact us directly by phone or WhatsApp to check current availability.",
  },
];

export const metadata: Metadata = {
  title: "Njali Poovan Banana Wholesale Supplier in Kerala",
  description:
    "Njali Poovan banana wholesale from BT Banana — a trusted Njali Poovan banana supplier and wholesaler in Alakode and Nellipara, Kannur, serving Kannur and Kasaragod districts, Kerala.",
  alternates: {
    canonical: "/products/njali-poovan-banana",
  },
  openGraph: {
    title: "Njali Poovan Banana Wholesale Supplier in Kerala | BT Banana",
    description:
      "Sweet Njali Poovan banana wholesale supplied from Alakode and Nellipara, Kannur district, Kerala — serving traders, retailers, and fruit shops across Kannur and Kasaragod.",
    url: `${SITE_URL}/products/njali-poovan-banana`,
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Njali Poovan Banana",
  description:
    "Njali Poovan banana, a premium sweet Kerala table banana variety, supplied wholesale by BT Banana from Alakode and Nellipara, Kannur district, Kerala.",
  brand: {
    "@type": "Brand",
    name: SITE_NAME,
  },
};

export default function NjaliPoovanBananaPage() {
  return (
    <div>
      <JsonLd data={productJsonLd} />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: "Njali Poovan Banana", href: "/products/njali-poovan-banana" },
          ]}
        />
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-green-950 sm:text-5xl">
            Njali Poovan Banana Wholesale Supplier
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
            BT Banana is a Njali Poovan banana wholesaler and supplier in Kerala,
            dealing in this sweet, prized table banana variety at
            reasonable wholesale prices from our Alakode and Nellipara
            branches, Kannur district.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CallButton phone={primaryPhone} label="Get Wholesale Price" />
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="Hi BT Banana, I'd like to enquire about Njali Poovan banana wholesale."
            />
          </div>
        </div>
        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl shadow-lg sm:block">
          <Image
            src="/images/njali.png"
            alt="Sweet Njali Poovan bananas supplied wholesale by BT Banana, Kerala"
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
                About Njali Poovan Banana
              </h2>
              <p className="mt-4 leading-7 text-neutral-700">
                Njali Poovan (ഞാലിപ്പൂവൻ) is one of Kerala&apos;s most popular
                sweet table banana varieties. Loved for its delicate skin, honey-like
                sweetness, and pleasant aroma, it is a staple fruit choice for daily
                consumption, functions, and retail fruit counters.
              </p>
              <p className="mt-4 leading-7 text-neutral-700">
                As a Njali Poovan banana wholesaler, we supply fresh bunches in
                bulk to traders, retailers, and households from our Alakode
                and Nellipara branches, Kannur district.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-950">
                Njali Poovan Banana Wholesaler for Kannur &amp; Kasaragod
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Njali Poovan banana wholesale supplier near Kannur",
                  "Njali Poovan banana wholesaler serving Kasaragod district",
                  "Bulk quantities for traders, retailers, and fruit shops",
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
        <Faq
          items={njaliPoovanFaqs}
          title="Njali Poovan Banana — Frequently Asked Questions"
        />
      </section>

      <section className="border-t border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Njali Poovan Banana Supply Near Kannur &amp; Nellipara
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Get in touch with our Alakode or Nellipara branch for Njali Poovan
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
