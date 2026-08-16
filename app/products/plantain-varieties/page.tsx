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

const plantainFaqs = [
  {
    question: "Where can I buy wholesale plantain varieties near Kannur?",
    answer:
      "BT Banana supplies plantain varieties wholesale from our Alakode and Nellipara branches in Kannur district, serving traders, retailers, and businesses across Kannur and Kasaragod districts, Kerala.",
  },
  {
    question: "Is BT Banana a plantain wholesaler in Kasaragod too?",
    answer:
      "Yes — our Alakode branch is located near the Kannur–Kasaragod border, and we regularly supply plantain varieties wholesale to customers across Kasaragod district as well.",
  },
  {
    question: "What are plantain varieties used for?",
    answer:
      "Plantains are cooking banana varieties widely used in Kerala cuisine, snacks, trading, and commercial food production due to their starch content and versatility.",
  },
  {
    question: "Do you supply plantain varieties in bulk quantities?",
    answer:
      "Yes — wholesale bulk supply is our core business. Contact us with the quantity you need and we'll confirm current seasonal availability and pricing.",
  },
];

export const metadata: Metadata = {
  title: "Plantain Varieties Wholesale Supplier in Kerala",
  description:
    "Plantain varieties wholesale from BT Banana — a trusted cooking banana supplier and wholesaler in Alakode and Nellipara, Kannur, serving Kannur and Kasaragod districts, Kerala.",
  alternates: {
    canonical: "/products/plantain-varieties",
  },
  openGraph: {
    title: "Plantain Varieties Wholesale Supplier in Kerala | BT Banana",
    description:
      "Wholesale plantain varieties supplied from Alakode and Nellipara, Kannur district, Kerala — serving traders, retailers, and businesses across Kannur and Kasaragod.",
    url: `${SITE_URL}/products/plantain-varieties`,
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Plantain Varieties",
  description:
    "Plantain varieties supplied wholesale for cooking and trading purposes by BT Banana from Alakode and Nellipara, Kannur district, Kerala.",
  brand: {
    "@type": "Brand",
    name: SITE_NAME,
  },
};

export default function PlantainVarietiesPage() {
  return (
    <div>
      <JsonLd data={productJsonLd} />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: "Plantain Varieties", href: "/products/plantain-varieties" },
          ]}
        />
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-green-950 sm:text-5xl">
            Plantain Varieties Wholesale Supplier
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
            BT Banana is a plantain wholesaler and supplier in Kerala, dealing in
            different cooking plantain varieties at reasonable wholesale prices from our
            Alakode and Nellipara branches, Kannur district.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CallButton phone={primaryPhone} label="Get Wholesale Price" />
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="Hi BT Banana, I'd like to enquire about Plantain Varieties wholesale."
            />
          </div>
        </div>
        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl shadow-lg sm:block">
          <Image
            src="/images/variety.png"
            alt="Plantain varieties supplied wholesale by BT Banana, Kerala"
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
                About Plantain Varieties
              </h2>
              <p className="mt-4 leading-7 text-neutral-700">
                Alongside dessert bananas, we supply cooking plantain varieties in
                wholesale quantities for traders, commercial kitchens, and retailers.
                Availability depends on harvest season — enquire with us directly for current stock.
              </p>
              <p className="mt-4 leading-7 text-neutral-700">
                As a plantain wholesaler, we supply fresh bunches in bulk from our
                Alakode and Nellipara branches across Kannur and Kasaragod districts.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-950">
                Plantain Wholesaler for Kannur &amp; Kasaragod
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Plantain varieties wholesale supplier near Kannur",
                  "Plantain wholesaler serving Kasaragod district",
                  "Bulk quantities for traders, retailers, and commercial buyers",
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
          items={plantainFaqs}
          title="Plantain Varieties — Frequently Asked Questions"
        />
      </section>

      <section className="border-t border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Plantain Supply Near Kannur &amp; Nellipara
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Get in touch with our Alakode or Nellipara branch for plantain
            wholesale enquiries.
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
