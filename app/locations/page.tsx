import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LocationCard } from "@/components/LocationCard";
import { branches, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Locations — Alakode & Nellipara",
  description:
    "BT Banana operates from two branches in Kerala — Alakode and Nellipara. Find contact details for both locations and reach out for wholesale banana or Vazhavithu enquiries.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Our Locations — Alakode & Nellipara | BT Banana",
    description:
      "BT Banana's two branches in Kerala — Alakode and Nellipara — with direct contact details for enquiries.",
    url: `${SITE_URL}/locations`,
  },
};

export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Locations", href: "/locations" }]} />

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-green-950">
        Our Locations
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-700">
        BT Banana supplies wholesale bananas and banana seeds from two
        branches in Kerala. Reach out to whichever branch is more convenient
        for you.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {branches.map((branch) => (
          <LocationCard key={branch.slug} branch={branch} />
        ))}
      </div>

      <section className="mt-16 rounded-3xl bg-green-50 p-8 sm:p-12">
        <h2 className="text-2xl font-bold text-green-950">
          Serving Alakode, Nellipara &amp; Kannur
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-neutral-700">
          From our Alakode and Nellipara branches, we supply customers in
          and around these areas, including the wider Kannur district of
          Kerala. If you&apos;re unsure which branch to contact, either
          number will connect you with BT Banana directly.
        </p>
      </section>
    </div>
  );
}
