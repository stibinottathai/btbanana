import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { CheckIcon, ChevronRightIcon } from "@/components/icons";
import { primaryPhone, primaryWhatsApp, SITE_URL } from "@/lib/site";
import {
  getSuckerVariety,
  KAU_SOURCE,
  KAU_SPACING_SOURCE,
  plantsPer,
  suckerBasics,
  suckerVarieties,
} from "@/lib/suckers";

export const dynamicParams = false;

export function generateStaticParams() {
  return suckerVarieties.map((v) => ({ variety: v.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/banana-seeds/[variety]">): Promise<Metadata> {
  const { variety: slug } = await params;
  const v = getSuckerVariety(slug);
  if (!v) return {};
  const path = `/banana-seeds/${v.slug}`;
  return {
    title: v.title,
    description: v.description,
    alternates: { canonical: path },
    openGraph: {
      title: `${v.title} | BT Banana`,
      description: v.description,
      url: `${SITE_URL}${path}`,
      images: [{ url: v.image, alt: v.imageAlt }],
    },
  };
}

export default async function SuckerVarietyPage({
  params,
}: PageProps<"/banana-seeds/[variety]">) {
  const { variety: slug } = await params;
  const v = getSuckerVariety(slug);
  if (!v) notFound();

  const path = `/banana-seeds/${v.slug}`;
  const density = v.spacing ? plantsPer(v.spacing.perHectare) : null;
  const others = suckerVarieties.filter((o) => o.slug !== v.slug);

  // Price is deliberately left out until the owner confirms real rates, so no
  // Offer is asserted here.
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${v.name} Banana Sucker (Vazhavithu)`,
    alternateName: [`${v.name} vazhavithu`, `${v.malayalam} വാഴവിത്ത്`, ...v.alsoCalled],
    description: v.quickAnswer,
    image: `${SITE_URL}${v.image}`,
    brand: { "@type": "Brand", name: "BT Banana" },
    category: "Banana planting material (suckers)",
    url: `${SITE_URL}${path}`,
  };

  const faqs = [
    {
      question: `What is ${v.name} vazhavithu?`,
      answer: `${v.name} vazhavithu (${v.malayalam} വാഴവിത്ത്) is a ${v.name} banana sucker — a young side shoot taken from the base of a mother plant and used to start a new plant. Bananas aren't grown from seeds; farmers plant suckers like these.`,
    },
    {
      question: `What does a good ${v.name} sucker look like?`,
      answer: `Choose a sword sucker — narrow, sword-shaped leaves and a well-developed base. KAU recommends suckers ${suckerBasics.age}, weighing ${suckerBasics.weight} with a girth of ${suckerBasics.girth}. Avoid broad-leaved water suckers; they don't grow into strong clumps.`,
    },
    {
      question: `How much space does ${v.name} need?`,
      answer: v.spacing && density
        ? `KAU recommends ${v.spacing.metres} spacing for ${v.name}, which works out to about ${v.spacing.perHectare.toLocaleString("en-IN")} plants per hectare — roughly ${density.acre.toLocaleString("en-IN")} per acre or ${density.cent} per cent.`
        : `KAU doesn't publish a separate spacing figure for ${v.name}. Call or WhatsApp us and we'll share the spacing growers commonly use for it.` // TODO(owner): replace with your recommended spacing,
    },
    {
      question: `What is the price of ${v.name} vazhavithu?`,
      answer: `${v.name} suckers are priced per sucker and depend on quantity and delivery district. Call or WhatsApp for today's quote.` // TODO(owner): add current price range,
    },
    {
      question: `Are your ${v.name} plants tissue culture?`,
      answer: `No. BT Banana supplies ${v.name} sword suckers only. We do not sell tissue culture plants.`,
    },
  ];

  return (
    <div>
      <JsonLd data={productJsonLd} />

      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Vazhavithu / Banana Suckers", href: "/banana-seeds" },
            { label: `${v.name} Suckers`, href: path },
          ]}
        />
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2">
        <div className="min-w-0">
          <h1 className="text-3xl font-bold tracking-tight text-green-950 sm:text-5xl">
            {v.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
            {v.quickAnswer}
          </p>
          <p className="mt-3 text-sm text-neutral-600">
            Also called {v.alsoCalled.join(" or ")}.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CallButton
              phone={primaryPhone}
              label="Call to Order"
              className="flex-1 justify-center whitespace-nowrap px-4 py-3 text-sm font-bold sm:flex-initial sm:px-6 sm:py-3.5"
            />
            <WhatsAppButton
              phone={primaryWhatsApp}
              message={`Hi BT Banana, I want to order banana suckers – variety: ${v.name}, quantity: ___, delivery district: ___`}
              label="Order on WhatsApp"
              className="flex-1 justify-center whitespace-nowrap px-4 py-3 text-sm font-bold sm:flex-initial sm:px-6 sm:py-3.5"
            />
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
          <Image
            src={v.image}
            alt={v.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-bold text-green-950">
          {v.name} suckers at a glance
        </h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-green-100">
          <table className="w-full text-left text-sm">
            <tbody>
              {[
                ["Malayalam name", `${v.malayalam} വാഴവിത്ത്`],
                ["What you get", "Sword suckers (not tissue culture plants)"],
                ["Recommended sucker", `${suckerBasics.age}, ${suckerBasics.weight}`],
                [
                  "Spacing (KAU)",
                  v.spacing && density
                    ? `${v.spacing.metres} · ~${v.spacing.perHectare.toLocaleString("en-IN")}/ha · ~${density.acre.toLocaleString("en-IN")}/acre · ~${density.cent}/cent`
                    : "Ask us for the spacing to use",
                ],
                ["Best for", v.bestFor],
                ["Price", "Per sucker — call or WhatsApp for today's rate"], // TODO(owner): add price range
                ["Delivery", "All 14 districts of Kerala"],
              ].map(([label, value], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-green-50/50"}>
                  <th scope="row" className="w-1/3 px-4 py-3 align-top font-semibold text-green-950">
                    {label}
                  </th>
                  <td className="px-4 py-3 align-top text-neutral-700">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-green-100 bg-green-50/50 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-green-950">
              How should I prepare {v.name} suckers before planting?
            </h2>
            <p className="mt-4 leading-7 text-neutral-700">{v.treatment}</p>
            <p className="mt-4 leading-7 text-neutral-700">
              Plant in pits of {suckerBasics.pit}, with {suckerBasics.lime} and{" "}
              {suckerBasics.manure}. Set the sucker upright in the centre so about 5 cm of
              pseudostem stays above the soil.
            </p>
            <Link
              href="/how-to-plant-banana-suckers"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-900"
            >
              Full planting guide <ChevronRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-950">Good to know</h2>
            <ul className="mt-4 space-y-3">
              {v.notes.map((n) => (
                <li key={n} className="flex items-start gap-2 leading-7 text-neutral-700">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-green-700" />
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-neutral-500">
              Planting figures follow{" "}
              <a href={KAU_SOURCE.url} className="underline" rel="noopener" target="_blank">
                KAU guidance
              </a>{" "}
              and{" "}
              <a href={KAU_SPACING_SOURCE.url} className="underline" rel="noopener" target="_blank">
                KAU spacing tables
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Faq items={faqs} title={`${v.name} Vazhavithu — FAQs`} />
      </section>

      <section className="border-t border-green-100 bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">Other banana suckers we supply</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/banana-seeds/${o.slug}`}
                className="rounded-2xl border border-green-100 bg-green-50/50 p-5 font-semibold text-green-950 hover:border-green-300"
              >
                {o.name} vazhavithu ({o.malayalam})
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/banana-seeds" className="font-semibold text-green-700 hover:text-green-900">
              All Vazhavithu &amp; delivery details &rarr;
            </Link>
            <Link href="/faq" className="font-semibold text-green-700 hover:text-green-900">
              Vazhavithu FAQs &rarr;
            </Link>
            <Link href="/blog/bulk-vazhavithu-order-guide" className="font-semibold text-green-700 hover:text-green-900">
              How to order {v.name} vazhavithu in bulk &rarr;
            </Link>
            {v.fruitHref && (
              <Link href={v.fruitHref} className="font-semibold text-green-700 hover:text-green-900">
                Buying {v.name} fruit wholesale instead? &rarr;
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
