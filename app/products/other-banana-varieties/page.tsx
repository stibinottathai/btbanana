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

const otherVarietiesFaqs = [
  {
    question: "What other banana varieties do you supply?",
    answer:
      "Beyond Nendran, Njali Poovan, Palayankodan, Robusta, and Poovan, we deal in regional and seasonal banana varieties depending on farm availability in Kerala.",
  },
  {
    question: "Where can I check current stock for other banana varieties?",
    answer:
      "Contact our Alakode or Nellipara branch directly via phone or WhatsApp for real-time stock and pricing updates.",
  },
  {
    question: "Do you supply wholesale quantities for all banana varieties?",
    answer:
      "Yes — bulk supply is our core operational model. Speak with Thomas M.J or Albin Augustine for customized orders.",
  },
];

export const metadata: Metadata = {
  title: "Other Banana Varieties Wholesale Supplier in Kerala",
  description:
    "Explore additional banana and plantain varieties supplied wholesale by BT Banana from Alakode and Nellipara, Kannur district, Kerala.",
  alternates: {
    canonical: "/products/other-banana-varieties",
  },
  openGraph: {
    title: "Other Banana Varieties Wholesale Supplier in Kerala | BT Banana",
    description:
      "Seasonal and regional banana varieties supplied wholesale from Alakode and Nellipara, Kannur district, Kerala.",
    url: `${SITE_URL}/products/other-banana-varieties`,
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Other Banana Varieties",
  description:
    "Additional banana and plantain varieties supplied wholesale by BT Banana from Alakode and Nellipara, Kannur district, Kerala.",
  brand: {
    "@type": "Brand",
    name: SITE_NAME,
  },
};

export default function OtherBananaVarietiesPage() {
  return (
    <div>
      <JsonLd data={productJsonLd} />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: "Other Banana Varieties", href: "/products/other-banana-varieties" },
          ]}
        />
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-green-950 sm:text-5xl">
            Other Banana Varieties Wholesale Supplier
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
            Beyond Nendran, Njali Poovan, Palayankodan, Robusta, and Poovan,
            BT Banana deals in various regional banana varieties depending on seasonal farm availability in Kerala.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CallButton phone={primaryPhone} label="Get Wholesale Price" />
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="Hi BT Banana, I'd like to enquire about Other Banana Varieties wholesale."
            />
          </div>
        </div>
        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl shadow-lg sm:block">
          <Image
            src="/images/banana-fruit-inflorescence.jpg"
            alt="Banana fruit and inflorescence — BT Banana wholesale supply, Kerala"
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
                About Additional Banana Varieties
              </h2>
              <p className="mt-4 leading-7 text-neutral-700">
                We work closely with local banana growers across Kannur and Kasaragod agricultural belts. When special or seasonal varieties are harvested, we offer them wholesale to our buyers.
              </p>
              <p className="mt-4 leading-7 text-neutral-700">
                Reach out to us directly to check what is currently harvested and ready for dispatch from our Alakode or Nellipara branches.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-950">
                Custom Bulk Orders &amp; Enquiries
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Seasonal banana varieties in Kannur & Kasaragod",
                  "Direct farm sourcing and quality inspection",
                  "Bulk supply for traders, retailers, and food processors",
                  "Reasonable wholesale rates",
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
          items={otherVarietiesFaqs}
          title="Other Banana Varieties — Frequently Asked Questions"
        />
      </section>

      <section className="border-t border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Banana Supply Near Kannur &amp; Nellipara
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Contact our Alakode or Nellipara branch for wholesale banana enquiries.
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
