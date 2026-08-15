import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { LocationCard } from "@/components/LocationCard";
import { CheckIcon } from "@/components/icons";
import { branches, primaryPhone, primaryWhatsApp, SITE_URL } from "@/lib/site";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Wholesale Banana Supplier in Kerala",
  description:
    "BT Banana is a wholesale banana supplier in Kerala, supplying different banana varieties in bulk to traders, retailers, and businesses from Alakode and Nellipara, near Kannur.",
  alternates: {
    canonical: "/wholesale-bananas",
  },
  openGraph: {
    title: "Wholesale Banana Supplier in Kerala | BT Banana",
    description:
      "Wholesale banana supply from Alakode and Nellipara, Kerala — different banana varieties, reasonable pricing, bulk enquiries welcome.",
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
            Wholesale Banana Supplier in Kerala
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
            BT Banana supplies bananas in bulk from our Alakode and
            Nellipara branches, serving traders, retailers, and other
            businesses across the local area near Kannur, Kerala.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CallButton phone={primaryPhone} label="Get Wholesale Price" />
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="Hi BT Banana, I'd like to enquire about wholesale bananas."
            />
          </div>
        </div>
        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl shadow-lg sm:block">
          <Image
            src="/images/banana-plant-terrace.jpg"
            alt="Banana plant under cultivation in Kerala, supplied wholesale by BT Banana"
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
              traders and retailers who need consistent quantities rather
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

      <section className="border-t border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Banana Supply Near Kannur, Alakode &amp; Nellipara
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            We supply wholesale bananas from two branches in Kerala.
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
