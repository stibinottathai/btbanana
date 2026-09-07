import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LocationCard } from "@/components/LocationCard";
import { JsonLd } from "@/components/JsonLd";
import { MapPinIcon, ChevronRightIcon } from "@/components/icons";
import { branches, SITE_URL } from "@/lib/site";
import { serviceLocations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Wholesale Banana Supply Locations — Kannur, Kasaragod & Wayanad | BT Banana",
  description:
    "BT Banana operates wholesale banana depots in Alakode and Nellipara, supplying fresh bulk bananas, raw Nendran for chips, and banana suckers (Vazhavithu) across Kannur, Kasaragod, and Wayanad districts in Kerala.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Wholesale Banana Supply Locations — Kannur, Kasaragod & Wayanad | BT Banana",
    description:
      "BT Banana's depots in Alakode & Nellipara and wholesale distribution corridors across Kannur, Kasaragod, and Wayanad districts in Kerala.",
    url: `${SITE_URL}/locations`,
  },
};

const areaLocations = serviceLocations.filter((l) => l.kind === "area");

export default function LocationsPage() {
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${SITE_URL}/locations`,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <JsonLd data={breadcrumbsJsonLd} />
      <Breadcrumbs items={[{ label: "Locations", href: "/locations" }]} />

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-green-950 sm:text-5xl">
        Wholesale Banana Supply Locations
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
        BT Banana operates two wholesale banana depots in Kerala — located on the
        Malayora Highway at Alakode and Nellipara. From these facilities, we supply
        fresh commercial bananas, raw cooking plantains (Nendran) for chips makers,
        and vigorous banana suckers (Vazhavithu) across Kannur, Kasaragod, and
        Wayanad districts.
      </p>

      {/* Main Depots */}
      <h2 className="mt-12 text-2xl font-bold text-green-950">
        Our Wholesale Depots (Physical Branches)
      </h2>
      <p className="mt-2 text-neutral-600">
        Visit our depots for direct vehicle loading, bunch inspections, or local pickup.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {branches.map((branch) => (
          <LocationCard key={branch.slug} branch={branch} />
        ))}
      </div>

      {/* Regional Supply Hubs */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-green-950">
          Districts &amp; Regional Towns We Supply
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-neutral-700">
          Looking for a dependable banana wholesaler or Vazhavithu planting material
          supplier in your area? Explore our dedicated supply guides below:
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
                  Wholesale Supply — {location.name}
                </span>
                <span className="block text-xs text-neutral-500">
                  {location.region}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Pillar Services Banner */}
      <section className="mt-16 rounded-3xl border border-green-200/80 bg-gradient-to-br from-green-50 to-emerald-50/50 p-8 sm:p-10">
        <h2 className="text-2xl font-bold text-green-950">
          B2B Wholesale Banana Services Across North Kerala
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-neutral-700">
          Whether you operate a supermarket chain, hot chips manufacturing unit,
          catering service, or commercial plantation, BT Banana coordinates consistent
          farm-graded produce supply:
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/wholesale-bananas"
            className="rounded-2xl border border-white/80 bg-white/90 p-4 transition hover:bg-white hover:shadow-sm"
          >
            <h3 className="font-bold text-green-950">Wholesale Bananas</h3>
            <p className="mt-1 text-xs text-neutral-600">
              Bulk supply for retailers, supermarkets, and traders.
            </p>
          </Link>
          <Link
            href="/banana-merchant-kannur"
            className="rounded-2xl border border-white/80 bg-white/90 p-4 transition hover:bg-white hover:shadow-sm"
          >
            <h3 className="font-bold text-green-950">Banana Merchant</h3>
            <p className="mt-1 text-xs text-neutral-600">
              Kannur wholesale merchant, mandi supply &amp; farm procurement.
            </p>
          </Link>
          <Link
            href="/banana-for-chips"
            className="rounded-2xl border border-white/80 bg-white/90 p-4 transition hover:bg-white hover:shadow-sm"
          >
            <h3 className="font-bold text-green-950">Raw Banana for Chips</h3>
            <p className="mt-1 text-xs text-neutral-600">
              Graded raw green Nendran (Pacha Ethakka) for chips frying units.
            </p>
          </Link>
          <Link
            href="/banana-seeds"
            className="rounded-2xl border border-white/80 bg-white/90 p-4 transition hover:bg-white hover:shadow-sm"
          >
            <h3 className="font-bold text-green-950">Banana Suckers (Vazhavithu)</h3>
            <p className="mt-1 text-xs text-neutral-600">
              High-yield sword suckers for commercial banana cultivation.
            </p>
          </Link>
        </div>
      </section>

      {/* Contact Notice */}
      <section className="mt-12 rounded-3xl bg-green-900 px-8 py-10 text-white sm:px-12">
        <h2 className="text-2xl font-bold">
          Supplying Kannur, Kasaragod, Wayanad &amp; Beyond
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-green-100">
          Don&apos;t see your specific town or panchayat listed? Call or WhatsApp our
          wholesale team directly. We coordinate daily vehicle consignments and farm
          pickups throughout North Kerala.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-green-950 transition hover:bg-green-100"
          >
            Contact Depot Team
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
          <Link
            href="/banana-prices"
            className="inline-flex items-center gap-2 rounded-xl border border-green-700 bg-green-800/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            View Daily Price Guide
          </Link>
        </div>
      </section>
    </div>
  );
}

