import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { owners, primaryWhatsApp, SITE_URL } from "@/lib/site";
import {
  KAU_SOURCE,
  KAU_SPACING_SOURCE,
  plantsPer,
  suckerBasics,
  suckerVarieties,
} from "@/lib/suckers";

const PATH = "/how-to-plant-banana-suckers";
const LAST_REVIEWED = "2026-11-19";

export const metadata: Metadata = {
  title: "How to Plant Banana Suckers (Vazhavithu)",
  description:
    "Step-by-step guide to planting banana suckers: choosing sword suckers, treatment, pit size, spacing for Nendran, manure and watering. Based on KAU advice.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "How to Plant Banana Suckers (Vazhavithu) | BT Banana",
    description:
      "Choosing sword suckers, treatment, pit size, spacing, manure and watering — following Kerala Agricultural University advice.",
    url: `${SITE_URL}${PATH}`,
    type: "article",
  },
};

const steps = [
  {
    name: "Choose sword suckers",
    text: `Pick sword suckers — narrow, sword-shaped leaves and a well-developed base — ${suckerBasics.age}, weighing ${suckerBasics.weight} with a girth of ${suckerBasics.girth}. Avoid broad-leaved water suckers. Take suckers only from healthy plants that produced good bunches.`,
  },
  {
    name: "Clean and trim the sucker",
    text: "Remove old roots, large side buds and any damaged or rotten parts of the corm.",
  },
  {
    name: "Treat Nendran suckers (other varieties can skip this)",
    text: "For Nendran, cut the pseudostem back to 15–20 cm above the corm, smear the corm with cow-dung slurry and ash, and dry it in the sun for about 3–4 days. It can then be kept in shade for up to 15 days before planting. Other varieties don't need drying. In heavy rain, don't cut suckers — cut ends can rot in waterlogged soil.",
  },
  {
    name: "Dig the pits",
    text: `Dig pits of ${suckerBasics.pit}. Adjust for soil type, water table and variety; in low-lying land, plant on mounds instead.`,
  },
  {
    name: "Add lime and manure",
    text: `Add ${suckerBasics.lime} and ${suckerBasics.manure} at planting.`,
  },
  {
    name: "Plant upright",
    text: "Set the sucker upright in the centre of the pit with about 5 cm of pseudostem above soil level, then firm the soil around it. During the rainy season, fill the pit immediately.",
  },
  {
    name: "Water and feed",
    text: "Water regularly until the plant is established. KAU recommends applying fertiliser in two equal doses, 2 and 4 months after planting, 60–75 cm around the plant, and watering straight after.",
  },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to plant banana suckers (vazhavithu)",
  description:
    "How to choose, treat and plant banana sword suckers in Kerala, following Kerala Agricultural University guidance.",
  inLanguage: "en-IN",
  supply: [
    { "@type": "HowToSupply", name: "Banana sword suckers (vazhavithu)" },
    { "@type": "HowToSupply", name: "Lime" },
    { "@type": "HowToSupply", name: "Compost or cattle manure" },
    { "@type": "HowToSupply", name: "Cow-dung slurry and ash (Nendran)" },
  ],
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
    url: `${SITE_URL}${PATH}#step-${i + 1}`,
  })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Plant Banana Suckers (Vazhavithu): Step-by-Step",
  dateModified: LAST_REVIEWED,
  author: owners.map((o) => ({ "@type": "Person", name: o.name })),
  publisher: { "@type": "Organization", name: "BT Banana", url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  citation: [KAU_SOURCE.url, KAU_SPACING_SOURCE.url],
};

const faqs = [
  {
    question: "Can I plant a banana sucker straight away?",
    answer:
      "Most varieties can be planted once cleaned and trimmed. Nendran is the exception: KAU advises treating the corm with cow-dung slurry and ash and sun-drying it for 3–4 days first.",
  },
  {
    question: "How deep should I plant a banana sucker?",
    answer:
      "Plant it in a 50 × 50 × 50 cm pit so that about 5 cm of pseudostem stays above the soil.",
  },
  {
    question: "Why shouldn't I plant water suckers?",
    answer:
      "Water suckers have broad leaves and a weak base. KAU says they aren't strong enough and don't produce healthy banana clumps. Plant sword suckers instead.",
  },
];

export default function PlantingGuidePage() {
  return (
    <div>
      <JsonLd data={howToJsonLd} />
      <JsonLd data={articleJsonLd} />

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Vazhavithu / Banana Suckers", href: "/banana-seeds" },
            { label: "How to Plant", href: PATH },
          ]}
        />
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
          How to Plant Banana Suckers (Vazhavithu): Step-by-Step
        </h1>
        <p className="mt-5 text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
          To plant a banana sucker, choose a 3–4-month-old sword sucker, trim off old roots
          and damaged parts, dig a 50 cm pit, add lime and about 10 kg of manure, and plant it
          upright with 5 cm of stem above the soil. Nendran suckers should also be treated with
          cow-dung slurry and ash and sun-dried for 3–4 days first.
        </p>

        <div className="mt-6 rounded-2xl border border-green-100 bg-green-50/60 p-4 text-sm text-neutral-700">
          <p>
            <strong className="text-green-950">Written by:</strong>{" "}
            {owners.map((o) => o.name).join(" & ")}, BT Banana — [TODO: owner to confirm years
            of experience].
          </p>
          <p className="mt-1">
            <strong className="text-green-950">Source:</strong> figures follow{" "}
            <a href={KAU_SOURCE.url} className="underline" rel="noopener" target="_blank">
              Kerala Agricultural University
            </a>{" "}
            recommendations. Last reviewed {LAST_REVIEWED}.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-green-950">Steps</h2>
        <ol className="mt-6 space-y-6">
          {steps.map((s, i) => (
            <li key={s.name} id={`step-${i + 1}`} className="scroll-mt-24">
              <h3 className="text-lg font-bold text-green-950">
                {i + 1}. {s.name}
              </h3>
              <p className="mt-2 leading-7 text-neutral-700">{s.text}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-12 text-2xl font-bold text-green-950">
          How far apart should banana plants be?
        </h2>
        <p className="mt-3 leading-7 text-neutral-700">
          Spacing depends on the variety. These are KAU&apos;s figures, converted to acres and
          cents (1 hectare = 2.47 acres = 247 cents):
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-green-100">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-green-50 text-green-950">
              <tr>
                <th className="px-4 py-3">Variety</th>
                <th className="px-4 py-3">Spacing</th>
                <th className="px-4 py-3">Per hectare</th>
                <th className="px-4 py-3">Per acre</th>
                <th className="px-4 py-3">Per cent</th>
              </tr>
            </thead>
            <tbody>
              {suckerVarieties.map((v) => {
                const d = v.spacing ? plantsPer(v.spacing.perHectare) : null;
                return (
                  <tr key={v.slug} className="border-t border-green-100">
                    <td className="px-4 py-3 font-semibold text-green-950">
                      <Link href={`/banana-seeds/${v.slug}`} className="hover:text-green-700">
                        {v.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3">{v.spacing?.metres ?? "[TODO: owner to confirm]"}</td>
                    <td className="px-4 py-3">{v.spacing ? `~${v.spacing.perHectare.toLocaleString("en-IN")}` : "—"}</td>
                    <td className="px-4 py-3">{d ? `~${d.acre.toLocaleString("en-IN")}` : "—"}</td>
                    <td className="px-4 py-3">{d ? `~${d.cent}` : "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-neutral-500">
          Source:{" "}
          <a href={KAU_SPACING_SOURCE.url} className="underline" rel="noopener" target="_blank">
            KAU spacing table
          </a>
          .
        </p>

        <h2 className="mt-12 text-2xl font-bold text-green-950">
          How long until a banana sucker gives a bunch?
        </h2>
        <p className="mt-3 leading-7 text-neutral-700">
          KAU says dwarf bananas are usually ready 11–14 months after planting and tall varieties
          14–16 months. Once the bunch appears, it typically takes 90–120 days to mature.
        </p>

        <div className="mt-12">
          <Faq items={faqs} title="Planting questions" />
        </div>

        <div className="mt-12 rounded-3xl border border-green-100 bg-green-50/60 p-6">
          <h2 className="text-xl font-bold text-green-950">Need suckers for planting?</h2>
          <p className="mt-2 text-neutral-700">
            BT Banana supplies Nendran, Robusta, Njali Poovan and Palayankodan sword suckers
            across Kerala.
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
            <Link href="/sucker-vs-tissue-culture" className="text-sm font-semibold text-green-700 hover:text-green-900">
              Sucker vs tissue culture &rarr;
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
