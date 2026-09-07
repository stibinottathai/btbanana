import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LocationCard } from "@/components/LocationCard";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { CheckIcon, MapPinIcon, ChevronRightIcon } from "@/components/icons";
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

  const title =
    location.kind === "branch"
      ? `Wholesale Banana Shop in ${location.name} | BT Banana`
      : `Wholesale Banana Supplier in ${location.name}, Kerala | BT Banana`;

  const description = `Looking for a wholesale banana supplier or banana wholesaler in ${location.name}? BT Banana supplies fresh wholesale bananas, raw Nendran for chips, and banana suckers (Vazhavithu) from our Kerala depots. Contact us for daily rates.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
    openGraph: {
      title: `${title}`,
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

  const pageTitle =
    location.customH1 ||
    (location.kind === "branch"
      ? `Wholesale Banana Shop in ${location.name}`
      : `Wholesale Banana Supplier serving ${location.name}`);

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
      {
        "@type": "ListItem",
        position: 3,
        name: location.name,
        item: `${SITE_URL}/locations/${location.slug}`,
      },
    ],
  };

  const placeJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `BT Banana — ${pageTitle}`,
    description: location.bestShopAnswer,
    url: `${SITE_URL}/locations/${location.slug}`,
    telephone: `+91${primaryPhone}`,
    areaServed: {
      "@type": "Place",
      name: location.name,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.place,
      addressLocality: branch.place.split(",")[0].trim(),
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div>
      <JsonLd data={breadcrumbsJsonLd} />
      <JsonLd data={placeJsonLd} />
      <JsonLd data={faqJsonLd} />

      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Locations", href: "/locations" },
            { label: location.name, href: `/locations/${location.slug}` },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-800">
          <MapPinIcon className="h-4 w-4" />
          {location.region}
        </p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-green-950 sm:text-5xl">
          {pageTitle}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">
          {location.intro}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <CallButton phone={primaryPhone} label="Call for Wholesale Rates" />
          <WhatsAppButton
            phone={primaryWhatsApp}
            message={`Hi BT Banana, I'm enquiring from ${location.name} regarding wholesale banana supply / banana suckers.`}
          />
        </div>
      </section>

      {/* Grounded Local Supplier Overview */}
      <section className="border-y border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Looking for a Wholesale Banana Supplier in {location.name}?
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-neutral-700">
            {location.bestShopAnswer}
          </p>
        </div>
      </section>

      {/* Wholesale Bananas & Planting Suckers Breakdown */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-green-950">
              Wholesale Bananas for {location.name}
            </h2>
            <p className="mt-4 leading-7 text-neutral-700">
              As an established banana wholesaler supplying {location.name}, we
              handle commercial consignments of top Kerala varieties including
              Nendran (Ethakka), Palayankodan (Mysore Poovan), Robusta, and
              Njali Poovan. Produce is sourced directly from regional growers,
              carefully graded for uniform maturity, and priced according to
              transparent wholesale market conditions.
            </p>
            <div className="mt-6">
              <Link
                href="/wholesale-bananas"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-900"
              >
                Learn more about wholesale banana supply
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-green-950">
              Banana Suckers (Vazhavithu) for {location.name}
            </h2>
            <p className="mt-4 leading-7 text-neutral-700">
              Need certified vegetative planting material? While bananas do not
              grow from botanical seeds, local cultivators refer to vigorous
              sword suckers as Vazhavithu (വാഴവിത്ത്). We supply disease-screened,
              rhizome-cleaned planting suckers to farmers and agricultural
              commercial growers in and around {location.name}.
            </p>
            <div className="mt-6">
              <Link
                href="/banana-seeds"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-900"
              >
                View banana suckers (Vazhavithu) details
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {[
            `Wholesale banana supplier serving ${location.name}`,
            "Fresh bananas & vegetative banana suckers (Vazhavithu)",
            "Transparent pricing based on daily market arrivals",
            "Direct phone & WhatsApp contact with depot operators",
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

      {/* Core Services Cross-links */}
      <section className="border-t border-green-100 bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl font-bold text-green-950">
            Explore BT Banana Wholesale Services
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/banana-merchant-kannur"
              className="rounded-2xl border border-green-100 bg-green-50/50 p-5 transition hover:border-green-300 hover:bg-green-100/60"
            >
              <h3 className="font-bold text-green-950">Banana Merchant</h3>
              <p className="mt-1 text-xs text-neutral-600">
                Bulk supply, farm procurement &amp; district trade in Kannur.
              </p>
            </Link>
            <Link
              href="/banana-for-chips"
              className="rounded-2xl border border-green-100 bg-green-50/50 p-5 transition hover:border-green-300 hover:bg-green-100/60"
            >
              <h3 className="font-bold text-green-950">Raw Banana for Chips</h3>
              <p className="mt-1 text-xs text-neutral-600">
                High-starch raw green Nendran (Pacha Ethakka) for chips units.
              </p>
            </Link>
            <Link
              href="/banana-prices"
              className="rounded-2xl border border-green-100 bg-green-50/50 p-5 transition hover:border-green-300 hover:bg-green-100/60"
            >
              <h3 className="font-bold text-green-950">Wholesale Price Guide</h3>
              <p className="mt-1 text-xs text-neutral-600">
                Daily rate factors, variety breakdown, and quotation requests.
              </p>
            </Link>
            <Link
              href="/products"
              className="rounded-2xl border border-green-100 bg-green-50/50 p-5 transition hover:border-green-300 hover:bg-green-100/60"
            >
              <h3 className="font-bold text-green-950">All Banana Varieties</h3>
              <p className="mt-1 text-xs text-neutral-600">
                Nendran, Robusta, Poovan, Njali Poovan &amp; planting stock.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Nearest Branch Card */}
      <section className="border-t border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Depot Serving {location.name}
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            {location.kind === "branch"
              ? `Our physical wholesale depot is located right here in ${location.name}.`
              : `Commercial orders for ${location.name} are coordinated directly through our ${branch.name.replace("BT Banana – ", "")} depot.`}
          </p>
          <div className="mt-8 max-w-md">
            <LocationCard branch={branch} />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Faq
          items={location.faqs}
          title={`Frequently Asked Questions — ${location.name}`}
        />
      </section>

      {/* Other Areas Grid */}
      {others.length > 0 && (
        <section className="border-t border-green-100 bg-green-50/50">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="text-xl font-bold text-green-950">
              Other Wholesale Supply Locations
            </h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/locations/${other.slug}`}
                  className="flex items-center gap-2 rounded-xl border border-green-200/80 bg-white px-4 py-2.5 text-sm font-semibold text-green-950 transition hover:bg-green-100 hover:border-green-300"
                >
                  <MapPinIcon className="h-4 w-4 text-emerald-600 shrink-0" />
                  Wholesale Banana Supplier — {other.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
