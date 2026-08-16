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

const palayankodanFaqs = [
  {
    question: "Where can I buy Palayankodan banana wholesale near Kannur?",
    answer:
      "BT Banana supplies Palayankodan banana wholesale from our Alakode and Nellipara branches in Kannur district, serving traders, retailers, and businesses across Kannur and Kasaragod districts, Kerala.",
  },
  {
    question: "Is BT Banana a Palayankodan banana wholesaler in Kasaragod too?",
    answer:
      "Yes — our Alakode branch is close to the Kannur–Kasaragod border, and we regularly supply Palayankodan banana wholesale to customers across Kasaragod district as well.",
  },
  {
    question: "What is Palayankodan banana used for?",
    answer:
      "Palayankodan is a popular Kerala dessert banana, commonly eaten ripe and used in traditional offerings — a household staple alongside Nendran.",
  },
  {
    question: "Do you supply Palayankodan banana in bulk?",
    answer:
      "Yes — wholesale bulk supply is our core business. Contact us with the quantity you need and we'll confirm current availability and pricing.",
  },
  {
    question: "Is Palayankodan banana available year-round?",
    answer:
      "Availability depends on the season and current stock — contact us directly by phone or WhatsApp to check what's currently available.",
  },
];

export const metadata: Metadata = {
  title: "Palayankodan Banana Wholesale Supplier in Kerala",
  description:
    "Palayankodan banana wholesale from BT Banana — a Palayankodan banana supplier and wholesaler in Alakode and Nellipara, Kannur, serving Kannur and Kasaragod districts, Kerala.",
  alternates: {
    canonical: "/products/palayankodan-banana",
  },
  openGraph: {
    title: "Palayankodan Banana Wholesale Supplier in Kerala | BT Banana",
    description:
      "Palayankodan banana wholesale supplied from Alakode and Nellipara, Kannur district, Kerala — serving traders, retailers, and businesses across Kannur and Kasaragod.",
    url: `${SITE_URL}/products/palayankodan-banana`,
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Palayankodan Banana",
  description:
    "Palayankodan banana, a popular Kerala dessert banana variety, supplied wholesale by BT Banana from Alakode and Nellipara, Kannur district, Kerala.",
  brand: {
    "@type": "Brand",
    name: SITE_NAME,
  },
};

export default function PalayankodanBananaPage() {
  return (
    <div>
      <JsonLd data={productJsonLd} />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            {
              label: "Palayankodan Banana",
              href: "/products/palayankodan-banana",
            },
          ]}
        />
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-green-950 sm:text-5xl">
            Palayankodan Banana Wholesale Supplier
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
            BT Banana is a Palayankodan banana wholesaler and supplier in
            Kerala, dealing in this popular Kerala table banana variety at
            reasonable wholesale prices from our Alakode and Nellipara
            branches, Kannur district.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CallButton phone={primaryPhone} label="Get Wholesale Price" />
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="Hi BT Banana, I'd like to enquire about Palayankodan banana wholesale."
            />
          </div>
        </div>
        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl shadow-lg sm:block">
          <Image
            src="/images/banana-plant-terrace.jpg"
            alt="Banana plants growing in Kerala — BT Banana supplies Palayankodan banana wholesale"
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
                About Palayankodan Banana
              </h2>
              <p className="mt-4 leading-7 text-neutral-700">
                Palayankodan is a well-known Kerala dessert banana variety,
                popular for everyday eating and traditional offerings. It has
                a distinct place alongside Nendran as one of the household
                staples across Kerala.
              </p>
              <p className="mt-4 leading-7 text-neutral-700">
                As a Palayankodan banana wholesaler, we supply this variety
                in bulk to traders, retailers, and households from our
                Alakode and Nellipara branches, Kannur district.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-950">
                Palayankodan Banana Wholesaler for Kannur &amp; Kasaragod
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Palayankodan banana wholesale supplier near Kannur",
                  "Palayankodan banana wholesaler serving Kasaragod district",
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
          items={palayankodanFaqs}
          title="Palayankodan Banana — Frequently Asked Questions"
        />
      </section>

      <section className="border-t border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Palayankodan Banana Supply Near Kannur &amp; Nellipara
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Get in touch with our Alakode or Nellipara branch for
            Palayankodan banana wholesale enquiries.
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
