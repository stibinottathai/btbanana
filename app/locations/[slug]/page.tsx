import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LocationCard } from "@/components/LocationCard";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { CheckIcon, MapPinIcon } from "@/components/icons";
import { primaryPhone, primaryWhatsApp, SITE_URL } from "@/lib/site";
import {
  getLocationBySlug,
  getNearestBranch,
  getOtherLocations,
  serviceLocations,
} from "@/lib/locations";

export function generateStaticParams() {
  return serviceLocations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/locations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  const title = `Wholesale Banana Shop in ${location.name} — Bananas & Banana Seeds`;
  const description = `Looking for a wholesale banana supplier or banana wholesaler in ${location.name}? BT Banana supplies fresh wholesale bananas and banana seeds (Vazhavithu) to ${location.name} from our nearby Kerala branches — call or WhatsApp for pricing.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
    openGraph: {
      title: `${title} | BT Banana`,
      description,
      url: `${SITE_URL}/locations/${location.slug}`,
    },
  };
}

export default async function LocationPage({
  params,
}: PageProps<"/locations/[slug]">) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const branch = getNearestBranch(location);
  const others = getOtherLocations(location.slug);

  const placeJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `BT Banana — Serving ${location.name}`,
    description: location.bestShopAnswer,
    url: `${SITE_URL}/locations/${location.slug}`,
    telephone: `+91${primaryPhone}`,
    areaServed: {
      "@type": "Place",
      name: location.name,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: branch.place.split(",")[0].trim(),
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  };

  return (
    <div>
      <JsonLd data={placeJsonLd} />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Locations", href: "/locations" },
            { label: location.name, href: `/locations/${location.slug}` },
          ]}
        />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-800">
          <MapPinIcon className="h-4 w-4" />
          {location.region}
        </p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-green-950 sm:text-5xl">
          Wholesale Banana Shop in {location.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
          {location.intro}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <CallButton phone={primaryPhone} label="Call for Availability" />
          <WhatsAppButton
            phone={primaryWhatsApp}
            message={`Hi BT Banana, I'm in ${location.name} and I'd like to enquire about wholesale bananas / banana seeds.`}
          />
        </div>
      </section>

      <section className="border-y border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Best Banana Shop in {location.name}?
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-neutral-700">
            {location.bestShopAnswer}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-green-950">
              Wholesale Bananas in {location.name}
            </h2>
            <p className="mt-4 leading-7 text-neutral-700">
              As a banana wholesaler supplying {location.name}, we deal in
              fresh banana varieties — including Nendran, Palayankodan,
              Robusta, and Poovan — in bulk for traders, retailers, and
              businesses in and around the area, with reasonable, transparent
              wholesale pricing. Availability depends on the season — contact
              us directly for current stock.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-950">
              Banana Seeds / Vazhavithu in {location.name}
            </h2>
            <p className="mt-4 leading-7 text-neutral-700">
              Need banana planting material or seedlings? We supply banana
              seeds — locally known as Vazhavithu (വാഴവിത്ത്) — to farmers and
              growers near {location.name} at reasonable wholesale prices,
              subject to current availability.
            </p>
          </div>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            `Wholesale banana supplier near ${location.name}`,
            "Fresh bananas & banana seeds (Vazhavithu / seedlings)",
            "Reasonable, transparent pricing",
            "Direct phone & WhatsApp contact",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm font-medium text-green-900"
            >
              <CheckIcon className="h-4 w-4 shrink-0 text-green-700" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Nearest Branch to {location.name}
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            {location.kind === "branch"
              ? `Our branch is right here in ${location.name}.`
              : `Customers from ${location.name} are usually served from our ${branch.name.replace("BT Banana – ", "")} branch.`}
          </p>
          <div className="mt-8 max-w-md">
            <LocationCard branch={branch} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Faq
          items={location.faqs}
          title={`Frequently Asked Questions — ${location.name}`}
        />
      </section>

      {others.length > 0 && (
        <section className="border-t border-green-100 bg-green-50/50">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="text-xl font-bold text-green-950">
              Other Areas We Serve
            </h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/locations/${other.slug}`}
                  className="flex items-center gap-2 rounded-xl border border-green-200/80 bg-white px-4 py-2.5 text-sm font-semibold text-green-950 transition hover:bg-green-100 hover:border-green-300"
                >
                  <MapPinIcon className="h-4 w-4 text-emerald-600 shrink-0" />
                  Banana Shop in {other.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
