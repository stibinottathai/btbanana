import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DigitalCard } from "@/components/DigitalCard";
import { QrCodeDisplay } from "@/components/QrCodeDisplay";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { ChevronRightIcon, QrCodeIcon } from "@/components/icons";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Business Card | Contact & QR Code",
  description:
    "BT Banana's digital business card: save our numbers to your phone (.vcf), scan or download the QR code, and call or WhatsApp our Alakode & Nellipara depots.",
  alternates: {
    canonical: "/card",
  },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: `Digital Business Card | ${SITE_NAME}`,
    description:
      "Save contacts directly into phonebook (.vcf), download printable QR code, and connect with BT Banana wholesale suppliers in Kerala.",
    url: `${SITE_URL}/card`,
    type: "profile",
  },
};

const shareIdeas = [
  {
    title: "Print it",
    description:
      "Download the QR code and add it to visiting cards, bills, sacks or delivery slips.",
  },
  {
    title: "Display it",
    description:
      "Stick the QR code at the shop counter so customers can save our numbers in one scan.",
  },
  {
    title: "Send it",
    description:
      "Share the card link on WhatsApp groups with farmers, traders and nurseries.",
  },
];

export default function DigitalCardPage() {
  const cardUrl = `${SITE_URL}/card`;

  return (
    <>
      {/* ───────────────── Card + actions ───────────────── */}
      <section className="relative isolate overflow-hidden bg-green-950 text-white">
        <div
          aria-hidden="true"
          className="absolute -left-40 -top-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-green-800/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-48 right-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-amber-400/10 blur-3xl"
        />

        <div className="mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6 lg:pt-5 [&_a]:text-green-100/70 [&_a:hover]:text-amber-300 [&_ol]:text-green-100/60 [&_[aria-current]]:text-white">
          <Breadcrumbs items={[{ label: "Digital Business Card", href: "/card" }]} />
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:pb-20 lg:pt-12">
          <DigitalCard
            intro={
              <>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-green-50 backdrop-blur">
                  <QrCodeIcon className="h-4 w-4 text-amber-300" />
                  Digital business card
                </p>
                <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                  Save <span className="text-amber-300">BT Banana</span> to
                  your phone
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-green-50/85 sm:text-lg sm:leading-8">
                  Wholesale bananas and Vazhavithu from Alakode &amp;
                  Nellipara, Kannur. Save our numbers, or call and WhatsApp the
                  owners straight from here.
                </p>
              </>
            }
          />
        </div>
      </section>

      {/* ───────────────── Share / print QR ───────────────── */}
      <section
        aria-labelledby="share-heading"
        className="bg-[#f7f5ec] py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <Reveal>
            <SectionLabel>Share or print</SectionLabel>
            <h2
              id="share-heading"
              className="mt-4 text-3xl font-extrabold tracking-tight text-green-950 sm:text-4xl"
            >
              One QR code for all our contact details
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              Choose a QR that opens this card, or one that adds our contact
              straight to the phonebook — then download it as an image.
            </p>

            <ol className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {shareIdeas.map((idea, i) => (
                <li key={idea.title} className="border-t-2 border-green-900/10 pt-5">
                  <p className="flex items-baseline gap-3">
                    <span className="text-sm font-extrabold tabular-nums text-amber-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-bold text-green-950">{idea.title}</span>
                  </p>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {idea.description}
                  </p>
                </li>
              ))}
            </ol>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-1 text-sm font-bold text-green-800 hover:underline"
            >
              Full contact page &amp; enquiry form
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal className="mx-auto w-full max-w-md">
            <QrCodeDisplay cardUrl={cardUrl} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
