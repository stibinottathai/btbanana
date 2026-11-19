import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { owners, primaryWhatsApp, SITE_URL } from "@/lib/site";
import { KAU_SOURCE } from "@/lib/suckers";

const PATH = "/sucker-vs-tissue-culture";
const LAST_REVIEWED = "2026-11-19";

export const metadata: Metadata = {
  title: "Banana Sucker vs Tissue Culture: Which to Plant?",
  description:
    "Suckers or tissue culture plants? An honest comparison of cost, availability and establishment, and when suckers (vazhavithu) are the better choice.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Banana Sucker vs Tissue Culture: Which to Plant? | BT Banana",
    description:
      "An honest comparison of banana suckers (vazhavithu) and tissue culture plants for Kerala farmers.",
    url: `${SITE_URL}${PATH}`,
    type: "article",
  },
};

const rows: [string, string, string][] = [
  ["What it is", "A young side shoot taken from the base of a mother plant", "A plantlet grown in a laboratory from plant tissue, then hardened in a nursery"],
  ["Cost per plant", "Usually lower", "Usually higher"],
  ["Availability", "Traditional, widely available in season", "Depends on lab and nursery production"],
  ["Ready to plant", "Yes, after cleaning (and sun-drying for Nendran)", "Needs careful handling as a young, tender plant"],
  ["Uniformity", "Varies with sucker size — choose evenly sized sword suckers", "Very uniform plants and more even harvest timing"],
  ["Pest & disease risk", "Can carry soil-borne pests or disease if taken from an unhealthy clump", "Starts free of soil-borne pests and disease when produced properly"],
  ["Best suited to", "Farmers who want a lower-cost, familiar planting material, home gardens, traditional varieties", "Large plantations that need uniform crops, or areas with serious disease problems"],
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banana Sucker vs Tissue Culture: Which Should You Plant?",
  dateModified: LAST_REVIEWED,
  author: owners.map((o) => ({ "@type": "Person", name: o.name })),
  publisher: { "@type": "Organization", name: "BT Banana", url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}${PATH}`,
};

const faqs = [
  {
    question: "Does BT Banana sell tissue culture banana plants?",
    answer:
      "No. BT Banana supplies banana suckers (vazhavithu) only. We do not sell tissue culture plants.",
  },
  {
    question: "Are banana suckers good for planting?",
    answer:
      "Yes — sword suckers are the traditional way bananas are planted in Kerala. Choose 3–4-month-old sword suckers from healthy plants, and clean and trim them before planting, as Kerala Agricultural University advises.",
  },
  {
    question: "Which is better, tissue culture or sucker?",
    answer:
      "Neither is better for everyone. Tissue culture plants are more uniform and start disease-free but cost more; suckers cost less, are easy to get and are ready to plant. Many home gardeners and small farmers choose suckers.",
  },
];

export default function SuckerVsTcPage() {
  return (
    <div>
      <JsonLd data={articleJsonLd} />
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Vazhavithu / Banana Suckers", href: "/banana-seeds" },
            { label: "Sucker vs Tissue Culture", href: PATH },
          ]}
        />
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
          Banana Sucker vs Tissue Culture: Which Should You Plant?
        </h1>
        <p className="mt-5 text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
          Banana suckers (vazhavithu) are cheaper, easy to find and ready to plant, which makes
          them a good choice for most small farms and home gardens. Tissue culture plants cost
          more but are very uniform and start free of soil-borne disease, which suits large
          plantations. Choose based on budget, scale and disease pressure on your land.
        </p>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-sm text-neutral-800">
          <strong className="text-green-950">Our position, clearly:</strong> BT Banana supplies
          banana suckers only. We do not sell tissue culture plants. This guide is here to help
          you decide, not to sell you either.
        </div>

        <h2 className="mt-10 text-2xl font-bold text-green-950">Side-by-side comparison</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-green-100">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="bg-green-50 text-green-950">
              <tr>
                <th className="px-4 py-3"></th>
                <th className="px-4 py-3">Sucker (vazhavithu)</th>
                <th className="px-4 py-3">Tissue culture plant</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, sucker, tc]) => (
                <tr key={label} className="border-t border-green-100 align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-green-950">{label}</th>
                  <td className="px-4 py-3 text-neutral-700">{sucker}</td>
                  <td className="px-4 py-3 text-neutral-700">{tc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-green-950">When are suckers the better choice?</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-neutral-700">
          <li>You want to keep planting costs down.</li>
          <li>You&apos;re planting a home garden or a small plot.</li>
          <li>You want to plant now, without waiting for nursery-hardened plants.</li>
          <li>Your land doesn&apos;t have a history of serious banana disease.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-green-950">When might tissue culture make more sense?</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-neutral-700">
          <li>You&apos;re planting a large commercial area and need an even harvest.</li>
          <li>Your area has a serious soil-borne disease or virus problem.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-green-950">How do I get the most out of suckers?</h2>
        <p className="mt-3 leading-7 text-neutral-700">
          Pick sword suckers (not water suckers), 3–4 months old, from healthy plants. Clean off
          old roots and damaged parts, and for Nendran, treat with cow-dung slurry and ash and
          sun-dry for 3–4 days, as{" "}
          <a href={KAU_SOURCE.url} className="underline" rel="noopener" target="_blank">
            Kerala Agricultural University
          </a>{" "}
          advises. Our{" "}
          <Link href="/how-to-plant-banana-suckers" className="font-semibold text-green-700 underline">
            planting guide
          </Link>{" "}
          has every step.
        </p>

        <p className="mt-8 text-xs text-neutral-500">
          By {owners.map((o) => o.name).join(" & ")}, BT Banana. Last reviewed {LAST_REVIEWED}.
        </p>

        <div className="mt-12">
          <Faq items={faqs} title="Sucker vs tissue culture — FAQs" />
        </div>

        <div className="mt-12 rounded-3xl border border-green-100 bg-green-50/60 p-6">
          <h2 className="text-xl font-bold text-green-950">Decided on suckers?</h2>
          <p className="mt-2 text-neutral-700">
            We supply Nendran, Robusta, Njali Poovan and Palayankodan sword suckers across Kerala.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="Hi BT Banana, I want to order banana suckers – variety: ___, quantity: ___"
              label="Order on WhatsApp"
            />
            <Link href="/banana-seeds" className="text-sm font-semibold text-green-700 hover:text-green-900">
              See all varieties &rarr;
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
