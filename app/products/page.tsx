import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductCard } from "@/components/ProductCard";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { products } from "@/lib/products";
import { primaryPhone, primaryWhatsApp, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Banana & Banana Seed Products",
  description:
    "Browse the banana and banana seed products supplied wholesale by BT Banana — Nendran banana, plantain varieties, other banana varieties, and Vazhavithu planting material.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Banana & Banana Seed Products | BT Banana",
    description:
      "Browse the banana and banana seed products supplied wholesale by BT Banana from Alakode and Nellipara, Kerala.",
    url: `${SITE_URL}/products`,
  },
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Products", href: "/products" }]} />

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-green-950">
        Banana &amp; Banana Seed Products
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-700">
        BT Banana supplies bananas and banana seeds (Vazhavithu) wholesale
        from our Alakode and Nellipara branches in Kerala. Below is an
        overview of what we currently supply — enquire with us for
        availability and pricing.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <section className="mt-16 rounded-3xl bg-green-50 p-8 sm:p-12">
        <h2 className="text-2xl font-bold text-green-950">
          Don&apos;t see what you&apos;re looking for?
        </h2>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Our supply depends on season and availability. If you have a
          specific banana variety or quantity in mind, get in touch directly
          and we&apos;ll let you know what we can offer.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <CallButton phone={primaryPhone} label="Get Wholesale Price" />
          <WhatsAppButton phone={primaryWhatsApp} />
        </div>
      </section>
    </div>
  );
}
