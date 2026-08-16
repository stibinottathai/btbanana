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

const poovanFaqs = [
  {
    question: "Where can I buy Poovan banana wholesale near Kannur?",
    answer:
      "BT Banana supplies Poovan banana wholesale from our Alakode and Nellipara branches in Kannur district, serving traders, retailers, and businesses across Kannur and Kasaragod districts, Kerala.",
  },
  {
    question: "Is BT Banana a Poovan banana wholesaler in Kasaragod too?",
    answer:
      "Yes — our Alakode branch is close to the Kannur–Kasaragod border, and we regularly supply Poovan banana wholesale to customers across Kasaragod district as well.",
  },
  {
    question: "What is Poovan banana used for?",
    answer:
      "Poovan is mainly eaten as a ripe table banana, valued for its distinct aroma and flavour — a popular everyday variety across Kerala and South India.",
  },
  {
    question: "Do you supply Poovan banana in bulk?",
    answer:
      "Yes — wholesale bulk supply is our core business. Contact us with the quantity you need and we'll confirm current availability and pricing.",
  },
  {
    question: "Is Poovan banana available year-round?",
    answer:
      "Availability depends on the season and current stock — contact us directly by phone or WhatsApp to check what's currently available.",
  },
];

export const metadata: Metadata = {
  title: "Poovan Banana Wholesale Supplier in Kerala",
  description:
    "Poovan banana wholesale from BT Banana — a Poovan banana supplier and wholesaler in Alakode and Nellipara, Kannur, serving Kannur and Kasaragod districts, Kerala.",
  alternates: {
    canonical: "/products/poovan-banana",
  },
  openGraph: {
    title: "Poovan Banana Wholesale Supplier in Kerala | BT Banana",
    description:
      "Poovan banana wholesale supplied from Alakode and Nellipara, Kannur district, Kerala — serving traders, retailers, and businesses across Kannur and Kasaragod.",
    url: `${SITE_URL}/products/poovan-banana`,
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Poovan Banana",
  description:
    "Poovan banana, a popular aromatic South Indian dessert banana variety, supplied wholesale by BT Banana from Alakode and Nellipara, Kannur district, Kerala.",
  brand: {
    "@type": "Brand",
    name: SITE_NAME,
  },
};

export default function PoovanBananaPage() {
  return (
    <div>
      <JsonLd data={productJsonLd} />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: "Poovan Banana", href: "/products/poovan-banana" },
          ]}
        />
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-green-950 sm:text-5xl">
            Poovan Banana Wholesale Supplier
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
            BT Banana is a Poovan banana wholesaler and supplier in Kerala,
            dealing in this popular aromatic dessert banana variety at
            reasonable wholesale prices from our Alakode and Nellipara
            branches, Kannur district.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CallButton phone={primaryPhone} label="Get Wholesale Price" />
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="Hi BT Banana, I'd like to enquire about Poovan banana wholesale."
            />
          </div>
        </div>
        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl shadow-lg sm:block">
          <Image
            src="/images/banana-on-tree.jpg"
            alt="Bananas growing on the plant in Kerala — BT Banana supplies Poovan banana wholesale"
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
                About Poovan Banana
              </h2>
              <p className="mt-4 leading-7 text-neutral-700">
                Poovan is a popular, aromatic dessert banana variety widely
                eaten across Kerala and South India, valued for its distinct
                flavour and everyday popularity as a table banana.
              </p>
              <p className="mt-4 leading-7 text-neutral-700">
                As a Poovan banana wholesaler, we supply this variety in bulk
                to traders, retailers, and households from our Alakode and
                Nellipara branches, Kannur district.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-950">
                Poovan Banana Wholesaler for Kannur &amp; Kasaragod
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Poovan banana wholesale supplier near Kannur",
                  "Poovan banana wholesaler serving Kasaragod district",
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
          items={poovanFaqs}
          title="Poovan Banana — Frequently Asked Questions"
        />
      </section>

      <section className="border-t border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Poovan Banana Supply Near Kannur &amp; Nellipara
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Get in touch with our Alakode or Nellipara branch for Poovan
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
