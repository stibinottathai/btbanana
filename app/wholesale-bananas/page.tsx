import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { LocationCard } from "@/components/LocationCard";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Faq } from "@/components/Faq";
import { CheckIcon } from "@/components/icons";
import { branches, primaryPhone, primaryWhatsApp, SITE_URL } from "@/lib/site";
import { products } from "@/lib/products";

const wholesaleFaqs = [
  {
    question: "Is BT Banana a wholesale banana shop?",
    answer:
      "Yes — wholesale bulk supply is our core business. We supply different banana varieties to traders, retailers, and other businesses from our Alakode and Nellipara branches in Kannur district, Kerala.",
  },
  {
    question: "Is BT Banana a banana wholesaler, or do you also sell retail?",
    answer:
      "We primarily operate as a banana wholesaler, supplying bulk quantities to traders, retailers, and businesses rather than small one-off retail purchases.",
  },
  {
    question: "Which banana varieties do you supply wholesale?",
    answer:
      "We supply Nendran, Palayankodan, Robusta, and Poovan banana varieties, along with plantain and other varieties depending on the season. Enquire directly for what's currently in stock.",
  },
  {
    question:
      "Is there a wholesale banana supplier in Kannur district or Kasaragod district?",
    answer:
      "Yes — BT Banana is a wholesale banana supplier based in Kannur district (Alakode and Nellipara), and we regularly supply customers across both Kannur and Kasaragod districts, including Kannur town, Thaliparamba, Cherupuzha, and Vellarikundu.",
  },
  {
    question: "How do I get wholesale banana pricing?",
    answer:
      "We don't list fixed prices online since availability changes. Call or WhatsApp us with the variety and quantity you need, and we'll confirm current wholesale pricing.",
  },
];

export const metadata: Metadata = {
  title: "Wholesale Banana Shop, Supplier & Wholesaler in Kerala",
  description:
    "BT Banana is a wholesale banana shop, supplier, and banana wholesaler in Kerala, supplying fresh banana varieties in bulk to traders, retailers, and businesses across Kannur and Kasaragod districts from Alakode and Nellipara.",
  alternates: {
    canonical: `${SITE_URL}/wholesale-bananas`,
  },
  openGraph: {
    title: "Wholesale Banana Shop, Supplier & Wholesaler in Kerala | BT Banana",
    description:
      "Wholesale banana supply from Alakode and Nellipara, Kerala — different banana varieties, reasonable pricing, bulk enquiries welcome across Kannur and Kasaragod districts.",
    url: `${SITE_URL}/wholesale-bananas`,
  },
};

const bananaProducts = products.filter((p) => p.category === "banana");

export default function WholesaleBananasPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[{ label: "Wholesale Bananas", href: "/wholesale-bananas" }]}
        />
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-green-950 sm:text-5xl">
            Wholesale Banana Supplier &amp; Banana Wholesaler in Kerala
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
            BT Banana supplies fresh bananas in bulk from our Alakode and
            Nellipara branches, serving traders, retailers, and chips makers across Kannur, Kasaragod, and Wayanad districts, Kerala.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CallButton phone={primaryPhone} label="Get Wholesale Price" />
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="Hi BT Banana, I'd like to enquire about wholesale bananas."
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-xs">
            <a
              href="/banana-for-chips"
              className="inline-flex items-center gap-1 rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-1.5 font-bold text-emerald-950 hover:bg-emerald-100"
            >
              🍌 Looking for Raw Bananas for Chips? View Specs →
            </a>
            <a
              href="/banana-prices"
              className="inline-flex items-center gap-1 rounded-lg border border-amber-300 bg-amber-50 px-3 py-1.5 font-bold text-amber-950 hover:bg-amber-100"
            >
              📊 Check Today&apos;s Market Rates →
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/wholesale.png"
            alt="Fresh wholesale bananas supplied in bulk by BT Banana, a banana wholesaler in Alakode, Kannur"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-y border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Banana Varieties We Supply
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            We deal in different banana varieties, with availability
            depending on the season. Here&apos;s what we currently supply —
            enquire for the latest stock.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bananaProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-green-950">
              Bulk &amp; Wholesale Purchasing
            </h2>
            <p className="mt-4 leading-7 text-neutral-700">
              Our banana supply is set up for bulk purchasing — we work with
              traders, retailers, and chips processors who need consistent quantities rather
              than one-off small purchases. Reach out to discuss the
              quantity you need and we&apos;ll confirm what we can supply.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-950">
              How to Contact Us
            </h2>
            <ul className="mt-4 space-y-3">
              {[
                "Call or WhatsApp us directly with your requirement",
                "Let us know the banana variety and quantity you're looking for",
                "We'll confirm current availability and wholesale pricing",
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
      </section>

      {/* Embedded Quote Form */}
      <section className="border-t border-green-100 bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-green-950 text-center">
            Request Instant Wholesale Banana Quote
          </h2>
          <p className="mt-2 text-center text-sm text-neutral-600">
            Send your variety, quantity, and destination to get verified farm gate &amp; mandi rates directly on WhatsApp:
          </p>
          <div className="mt-8">
            <EnquiryForm defaultProduct="Wholesale Nendran Banana (പച്ച / പഴുത്ത ഏത്തക്ക)" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Faq items={wholesaleFaqs} />
      </section>

      <section className="border-t border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Banana Supplier Near Kannur, Alakode &amp; Nellipara
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            We supply wholesale bananas from two branches in Kerala, serving
            customers across Kannur and Kasaragod districts.
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
