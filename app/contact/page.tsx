import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import {
  ChevronRightIcon,
  LeafIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";
import {
  branches,
  formatPhone,
  owners,
  primaryWhatsApp,
  SITE_URL,
  telHref,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact – Vazhavithu & Wholesale Bananas",
  description:
    "Call or WhatsApp BT Banana in Alakode and Nellipara, Kannur, for banana suckers (vazhavithu) across Kerala and wholesale bananas. Map and directions.",
  alternates: {
    canonical: "/contact",
    languages: { "en-IN": "/contact", "ml-IN": "/ml/contact", "x-default": "/contact" },
  },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: "Contact – Vazhavithu & Wholesale Bananas | BT Banana",
    description:
      "Call or WhatsApp BT Banana for banana suckers (vazhavithu) and wholesale bananas in Kerala.",
    url: `${SITE_URL}/contact`,
  },
};

const enquirySteps = [
  {
    title: "Tell us what you need",
    description: "Variety, approximate quantity and your delivery town.",
  },
  {
    title: "WhatsApp opens, ready to send",
    description: "Your details are filled into a message — just tap send.",
  },
  {
    title: "Get today's rate",
    description: "We confirm availability and the day's wholesale price.",
  },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function mapEmbedUrl(query: string): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(
    query
  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
}

export default function ContactPage() {
  return (
    <>
      {/* ───────────────── Hero + owners ───────────────── */}
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
          <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:pb-20 lg:pt-12">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-green-50 backdrop-blur">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
              </span>
              Open every day · 6 am – 9 pm
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Talk to the <span className="text-amber-300">owners</span>{" "}
              directly
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-green-50/85 sm:text-lg sm:leading-8">
              No call centres. Phone or WhatsApp Thomas or Albin for bulk
              Vazhavithu, wholesale bananas, chips Nendran or today&apos;s
              rate — or send a quick enquiry below.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-1 font-bold text-amber-300 hover:underline"
              >
                Send an enquiry
                <ChevronRightIcon className="h-4 w-4" />
              </a>
              <a
                href="#visit"
                className="inline-flex items-center gap-1 font-bold text-green-100 hover:text-amber-300 hover:underline"
              >
                <MapPinIcon className="h-4 w-4" />
                Alakode &amp; Nellipara, Kannur
              </a>
            </div>
          </div>

          <ul className="grid gap-4">
            {owners.map((owner, i) => (
              <li
                key={owner.phone}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold ${
                      i === 0
                        ? "bg-amber-400 text-green-950"
                        : "bg-white text-green-950"
                    }`}
                  >
                    {getInitials(owner.name)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-lg font-bold">{owner.name}</p>
                    <p className="text-sm text-green-200">{owner.role}</p>
                  </div>
                  <a
                    href={telHref(owner.phone)}
                    className="hidden text-right text-xl font-extrabold tracking-tight tabular-nums text-white! hover:text-amber-300! sm:block"
                  >
                    {formatPhone(owner.phone)}
                  </a>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <CallButton
                    phone={owner.phone}
                    label={`Call ${owner.name.split(" ")[0]}`}
                    size="md"
                    className="bg-amber-400! text-green-950! hover:bg-amber-300!"
                  />
                  <WhatsAppButton phone={owner.phone} label="WhatsApp" size="md" />
                </div>
                <p className="mt-3 text-center text-sm font-semibold tabular-nums text-green-100/80 sm:hidden">
                  {formatPhone(owner.phone)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────────── Enquiry ───────────────── */}
      <section
        id="enquiry"
        aria-labelledby="enquiry-heading"
        className="scroll-mt-24 bg-[#f7f5ec] py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <SectionLabel>Send an enquiry</SectionLabel>
            <h2
              id="enquiry-heading"
              className="mt-4 text-3xl font-extrabold tracking-tight text-green-950 sm:text-4xl"
            >
              Get a bulk quote in three steps
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              No account or online payment needed. The form simply prepares a
              WhatsApp message to us.
            </p>

            <ol className="mt-10 space-y-6">
              {enquirySteps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-green-950 text-sm font-extrabold text-amber-300">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-green-950">{step.title}</p>
                    <p className="mt-1 text-sm leading-6 text-neutral-600">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-green-900/10">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <p className="text-sm leading-6 text-neutral-700">
                Messages go to{" "}
                <span className="font-semibold text-green-950">
                  {formatPhone(primaryWhatsApp)}
                </span>

                , answered between 6 am and 9 pm.
              </p>
            </div>
          </Reveal>

          <Reveal className="min-w-0">
            <EnquiryForm pageSource="Contact Page" className="shadow-xl! shadow-green-900/5!" />
          </Reveal>
        </div>
      </section>

      {/* ───────────────── Visit ───────────────── */}
      <section
        id="visit"
        aria-labelledby="visit-heading"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:py-24"
      >
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Visit us</SectionLabel>
            <h2
              id="visit-heading"
              className="mt-4 text-3xl font-extrabold tracking-tight text-green-950 sm:text-4xl"
            >
              Two branches in Kannur district
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              Please call ahead before visiting so we can have your variety and
              quantity ready.
            </p>
          </div>
          <Link
            href="/locations"
            className="inline-flex items-center gap-1 text-sm font-bold text-green-800 hover:underline"
          >
            Areas we supply
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {branches.map((branch, i) => (
            <Reveal key={branch.slug} className="grid">
              <article
                id={branch.slug}
                className="flex flex-col overflow-hidden rounded-3xl border border-green-100 bg-white transition hover:shadow-xl hover:shadow-green-900/5"
              >
                <div className="relative h-56 bg-green-50 sm:h-64">
                  <iframe
                    title={`Google Map - ${branch.name}`}
                    src={mapEmbedUrl(branch.mapQuery || branch.place)}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green-950 text-base font-extrabold text-amber-300">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-green-950">
                        <Link
                          href={`/locations/${branch.slug}`}
                          className="hover:underline"
                        >
                          {branch.name.replace("BT Banana – ", "")} branch
                        </Link>
                      </h3>
                      <p className="text-sm font-medium text-green-700">
                        {branch.place}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-neutral-600">
                    {branch.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    <a
                      href={branch.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-green-950 transition hover:bg-amber-300"
                    >
                      <MapPinIcon className="h-4 w-4" />
                      Get directions
                    </a>
                    <Link
                      href={`/locations/${branch.slug}`}
                      className="inline-flex items-center gap-1 rounded-full border border-green-200 px-4 py-2 text-sm font-bold text-green-900 transition hover:border-green-700 hover:bg-green-50"
                    >
                      Branch details
                      <ChevronRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 flex flex-col gap-4 rounded-3xl bg-green-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-green-800 ring-1 ring-green-900/10">
              <LeafIcon className="h-5 w-5" />
            </span>
            <p className="text-sm leading-6 text-neutral-700">
              Have a question first? Our{" "}
              <Link href="/faq" className="font-semibold text-green-800 hover:underline">
                FAQ
              </Link>{" "}
              covers delivery, varieties and daily rates.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-bold">
            <a
              href={telHref(owners[0].phone)}
              className="inline-flex items-center gap-1.5 text-green-900 hover:underline"
            >
              <PhoneIcon className="h-4 w-4" />
              {formatPhone(owners[0].phone)}
            </a>
            <Link
              href="/ml/contact"
              lang="ml"
              className="inline-flex items-center gap-1 text-green-700 hover:text-green-900 hover:underline"
            >
              മലയാളത്തിൽ
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
