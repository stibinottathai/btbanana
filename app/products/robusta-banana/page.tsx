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

const robustaFaqs = [
  {
    question: "Where can I buy Robusta banana wholesale near Kannur?",
    answer:
      "BT Banana supplies Robusta banana wholesale from our Alakode and Nellipara branches in Kannur district, serving traders, retailers, and businesses across Kannur and Kasaragod districts, Kerala.",
  },
  {
    question: "Is BT Banana a Robusta banana wholesaler in Kasaragod too?",
    answer:
      "Yes — our Alakode branch is close to the Kannur–Kasaragod border, and we regularly supply Robusta banana wholesale to customers across Kasaragod district as well.",
  },
  {
    question: "What is Robusta banana used for?",
    answer:
      "Robusta is mainly eaten as a table/dessert banana. It's popular with traders and retailers for its good yield and steady market availability.",
  },
  {
    question: "Do you supply Robusta banana in bulk?",
    answer:
      "Yes — wholesale bulk supply is our core business. Contact us with the quantity you need and we'll confirm current availability and pricing.",
  },
  {
    question: "Is Robusta banana available year-round?",
    answer:
      "Availability depends on the season and current stock — contact us directly by phone or WhatsApp to check what's currently available.",
  },
];

export const metadata: Metadata = {
  title: "Robusta Banana Wholesale Supplier in Kerala",
  description:
    "Robusta banana wholesale from BT Banana — a Robusta banana supplier and wholesaler in Alakode and Nellipara, Kannur, serving Kannur and Kasaragod districts, Kerala.",
  alternates: {
    canonical: "/products/robusta-banana",
  },
  openGraph: {
    title: "Robusta Banana Wholesale Supplier in Kerala | BT Banana",
    description:
      "Robusta banana wholesale supplied from Alakode and Nellipara, Kannur district, Kerala — serving traders, retailers, and businesses across Kannur and Kasaragod.",
    url: `${SITE_URL}/products/robusta-banana`,
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Robusta Banana",
  description:
    "Robusta banana, a widely cultivated commercial banana variety, supplied wholesale by BT Banana from Alakode and Nellipara, Kannur district, Kerala.",
  brand: {
    "@type": "Brand",
    name: SITE_NAME,
  },
};

export default function RobustaBananaPage() {
  return (
    <div>
      <JsonLd data={productJsonLd} />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: "Robusta Banana", href: "/products/robusta-banana" },
          ]}
        />
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-green-950 sm:text-5xl">
            Robusta Banana Wholesale Supplier
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
            BT Banana is a Robusta banana wholesaler and supplier in Kerala,
            dealing in this widely grown commercial banana variety at
            reasonable wholesale prices from our Alakode and Nellipara
            branches, Kannur district.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CallButton phone={primaryPhone} label="Get Wholesale Price" />
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="Hi BT Banana, I'd like to enquire about Robusta banana wholesale."
            />
          </div>
        </div>
        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl shadow-lg sm:block">
          <Image
            src="/images/hero-banana-bunch.jpg"
            alt="Fresh banana bunch supplied wholesale by BT Banana — Robusta banana variety, Kerala"
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
                About Robusta Banana
              </h2>
              <p className="mt-4 leading-7 text-neutral-700">
                Robusta is a widely cultivated commercial dessert banana
                variety grown across South India, valued for good yield and
                steady market availability — a reliable choice for traders
                and retailers who need consistent supply.
              </p>
              <p className="mt-4 leading-7 text-neutral-700">
                As a Robusta banana wholesaler, we supply this variety in
                bulk to traders, retailers, and businesses from our Alakode
                and Nellipara branches, Kannur district.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-950">
                Robusta Banana Wholesaler for Kannur &amp; Kasaragod
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Robusta banana wholesale supplier near Kannur",
                  "Robusta banana wholesaler serving Kasaragod district",
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
        <Faq
          items={robustaFaqs}
          title="Robusta Banana — Frequently Asked Questions"
        />
      </section>

      <section className="border-t border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Robusta Banana Supply Near Kannur &amp; Nellipara
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Get in touch with our Alakode or Nellipara branch for Robusta
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
