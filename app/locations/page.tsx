import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LocationCard } from "@/components/LocationCard";
import { MapPinIcon } from "@/components/icons";
import { branches, SITE_URL } from "@/lib/site";
import { serviceLocations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Banana Shop Locations — Kannur & Kasaragod",
  description:
    "BT Banana operates from Alakode and Nellipara, Kerala, supplying wholesale bananas and banana seeds (Vazhavithu) across Kannur and Kasaragod districts — including Kannur, Thaliparamba, Cherupuzha, Vellarikundu, and more.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Banana Shop Locations — Kannur & Kasaragod | BT Banana",
    description:
      "BT Banana's branches and service areas across Kannur and Kasaragod districts, Kerala — wholesale bananas and banana seeds (Vazhavithu).",
    url: `${SITE_URL}/locations`,
  },
};

const areaLocations = serviceLocations.filter((l) => l.kind === "area");

export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Locations", href: "/locations" }]} />

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-green-950">
        Our Locations
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-700">
        BT Banana supplies wholesale bananas and banana seeds from two
        branches in Kerala, and regularly serves customers across Kannur and
        Kasaragod districts. Find your area below, or reach out to whichever
        branch is more convenient for you.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-green-950">
        Our Branches
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {branches.map((branch) => (
          <LocationCard key={branch.slug} branch={branch} />
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-green-950">
          Areas We Serve
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-neutral-700">
          Searching for a banana shop, wholesale banana supplier, or banana
          seed (Vazhavithu) supplier near you? We regularly supply customers
          in these areas — tap yours for local contact details and answers to
          common questions.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {areaLocations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="flex items-center gap-3 rounded-2xl border border-green-100 bg-white p-4 shadow-sm transition hover:border-green-300 hover:bg-green-50"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-semibold text-green-950">
                  Banana Shop in {location.name}
                </span>
                <span className="block text-xs text-neutral-500">
                  {location.region}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-green-50 p-8 sm:p-12">
        <h2 className="text-2xl font-bold text-green-950">
          Serving Alakode, Nellipara &amp; Beyond
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-neutral-700">
          From our Alakode and Nellipara branches, we supply customers across
          Kannur and Kasaragod districts of Kerala. Don&apos;t see your exact
          area listed? Call or WhatsApp us directly to check supply
          availability — either branch number will connect you with BT Banana.
        </p>
      </section>
    </div>
  );
}
