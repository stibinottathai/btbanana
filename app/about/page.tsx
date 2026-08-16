import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LocationCard } from "@/components/LocationCard";
import {
  CheckIcon,
  LeafIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";
import {
  branches,
  coveredAreas,
  defaultEnquiryMessage,
  formatPhone,
  owners,
  primaryPhone,
  primaryWhatsApp,
  SITE_NAME,
  SITE_URL,
  telHref,
  whatsappHref,
} from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us | Wholesale Banana & Seed Supplier in Kerala",
  description:
    "Learn about BT Banana — Kerala's trusted wholesale banana & banana seed (Vazhavithu) supplier operating from Alakode and Nellipara, serving farmers, traders, and retailers across Kannur & Kasaragod districts.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About Us | ${SITE_NAME} Kerala`,
    description:
      "Trusted wholesale banana and Vazhavithu planting material supplier based in Alakode and Nellipara, Kerala. Owned and managed by Thomas M.J & Albin Augustine.",
    url: `${SITE_URL}/about`,
  },
};

const values = [
  {
    title: "Fresh Quality Produce",
    description:
      "We source and supply fresh, healthy bananas (Nendran, Palayankodan, Robusta, Poovan, Plantains) harvested at peak quality for retail and trading.",
  },
  {
    title: "High-Yield Planting Material",
    description:
      "We supply premium banana seeds, locally known as Vazhavithu (വാഴവിത്ത്), giving farmers and growers reliable planting material for high crop yield.",
  },
  {
    title: "Fair Wholesale Pricing",
    description:
      "We offer transparent, competitive wholesale prices for bulk buyers, retailers, and agricultural traders across Kerala.",
  },
  {
    title: "Dual Branch Operational Reach",
    description:
      "With branches in Alakode and Nellipara, we provide convenient, accessible supply hubs for local markets in Kannur and Kasaragod districts.",
  },
  {
    title: "Direct Owner Contact",
    description:
      "No middlemen or automated queues — speak directly with Thomas M.J or Albin Augustine for instant availability, orders, and custom pricing.",
  },
  {
    title: "Reliable Local Delivery Network",
    description:
      "Serving key towns including Cherupuzha, Chittarikkal, Vellarikundu, Nileshwaram, Thaliparamba, and surrounding agricultural belts.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-neutral-50/60 pb-16">
      {/* Header section */}
      <div className="border-b border-green-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <Breadcrumbs items={[{ label: "About Us", href: "/about" }]} />

          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3.5 py-1 text-xs font-bold text-green-800">
                <LeafIcon className="h-3.5 w-3.5" />
                Trusted Kerala Wholesale Supplier
              </span>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
                About BT Banana
              </h1>
              <p className="mt-2 max-w-2xl text-base text-neutral-600">
                Supplying fresh bulk bananas and premium banana seeds (Vazhavithu) from our Alakode &amp; Nellipara branches across Kerala.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <CallButton phone={primaryPhone} label="Call Owners" />
              <WhatsAppButton phone={primaryWhatsApp} message={defaultEnquiryMessage} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 space-y-16">
        {/* Story Section */}
        <section className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="space-y-5 lg:col-span-7">
            <h2 className="text-2xl font-bold text-green-950 sm:text-3xl">
              Our Journey &amp; Commitment to Quality
            </h2>
            <p className="text-base leading-relaxed text-neutral-700">
              <strong className="text-green-950">{SITE_NAME}</strong> is an established wholesale banana and banana seed (Vazhavithu) supplier headquartered in Alakode, Kerala. Built on principles of reliability, fresh produce quality, and fair pricing, we serve local farmers, traders, fruit shop owners, and commercial buyers.
            </p>
            <p className="text-base leading-relaxed text-neutral-700">
              We operate two strategic branches — <strong className="text-green-900">Alakode Branch</strong> and <strong className="text-green-900">Nellipara Branch</strong>. Whether you need Nendran bananas for cooking and chips, table dessert varieties, or high-grade Vazhavithu planting material to start your own banana crop, BT Banana is dedicated to delivering top quality with transparent pricing.
            </p>
            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              <div className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
                <p className="text-2xl font-extrabold text-green-900">
                  {branches.length} Branches
                </p>
                <p className="text-xs font-semibold text-neutral-600">Alakode &amp; Nellipara, Kannur</p>
              </div>
              <div className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
                <p className="text-2xl font-extrabold text-amber-600">
                  4 Named Varieties
                </p>
                <p className="text-xs font-semibold text-neutral-600">Nendran, Palayankodan, Robusta &amp; Poovan</p>
              </div>
              <div className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
                <p className="text-2xl font-extrabold text-green-900">
                  {coveredAreas.localities.length}+ Localities
                </p>
                <p className="text-xs font-semibold text-neutral-600">Kannur &amp; Kasaragod Districts</p>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={120}
            className="relative overflow-hidden rounded-3xl border-4 border-white bg-white shadow-xl lg:col-span-5 aspect-[4/3]"
          >
            <Image
              src="/images/wholesale.png"
              alt="BT Banana Wholesale Supply"
              fill
              className="object-cover"
              priority
            />
          </Reveal>
        </section>

        {/* Management / Owners Section */}
        <section className="rounded-3xl border border-green-100 bg-gradient-to-br from-green-950 via-emerald-950 to-green-900 p-8 text-white shadow-xl sm:p-12">
          <Reveal className="max-w-2xl">
            <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 ring-1 ring-amber-400/30">
              OWNERSHIP &amp; MANAGEMENT
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white">
              Meet the People Behind BT Banana
            </h2>
            <p className="mt-3 text-base text-emerald-200">
              Our business is managed directly by Thomas M.J and Albin Augustine. We pride ourselves on direct communication and personal relationships with our agricultural buyers and farm suppliers.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {owners.map((owner, index) => (
              <Reveal
                key={owner.phone}
                delay={(index % 2) * 100}
                className="grid"
              >
                <div className="rounded-2xl border border-emerald-700/50 bg-emerald-900/40 p-6 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{owner.name}</h3>
                      <p className="text-xs font-semibold text-amber-300">{owner.role} • BT Banana</p>
                    </div>
                  </div>
                  <p className="mt-3 font-mono text-base font-bold text-emerald-200">
                    {formatPhone(owner.phone)}
                  </p>
                  <div className="mt-5 flex gap-3">
                    <a
                      href={telHref(owner.phone)}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-amber-400 py-2.5 px-3 text-xs font-bold text-green-950 shadow transition hover:bg-amber-300"
                    >
                      <PhoneIcon className="h-4 w-4" />
                      Call Direct
                    </a>
                    <a
                      href={whatsappHref(owner.phone, defaultEnquiryMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] py-2.5 px-3 text-xs font-bold text-white shadow transition hover:bg-[#20ba59]"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Why Choose Us / Core Values */}
        <section className="space-y-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-green-950">
              Why Business &amp; Farmers Choose Us
            </h2>
            <p className="mt-2 text-base text-neutral-600">
              We provide dependable wholesale banana trading and planting material services tailored to local agricultural needs.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((val, index) => (
              <Reveal
                key={val.title}
                delay={(index % 3) * 100}
                className="grid"
              >
                <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-800">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-green-950">
                    {val.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {val.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Covered Areas Section */}
        <section className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">
          <Reveal className="flex flex-col items-start gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-800 uppercase tracking-wider">
              <MapPinIcon className="h-4 w-4 text-emerald-600" />
              Regional Service Coverage
            </span>
            <h2 className="text-2xl font-bold text-green-950 sm:text-3xl">
              Areas We Supply in Kannur &amp; Kasaragod
            </h2>
            <p className="text-base text-neutral-600">
              We serve farmers, retail shops, and traders across these major towns and agricultural belts:
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-6 flex flex-wrap gap-2.5">
            {coveredAreas.localities.map((loc) => (
              <div
                key={loc}
                className="flex items-center gap-1.5 rounded-xl border border-green-200 bg-green-50/60 px-3.5 py-2 text-xs font-bold text-green-950"
              >
                <MapPinIcon className="h-3.5 w-3.5 text-emerald-700" />
                <span>{loc}</span>
              </div>
            ))}
          </Reveal>
        </section>

        {/* Our Branches */}
        <section className="space-y-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-green-950">
                Our Branch Locations
              </h2>
              <p className="mt-1 text-base text-neutral-600">
                Visit or contact our two primary hubs in Kannur district.
              </p>
            </div>
            <Link
              href="/locations"
              className="text-sm font-bold text-green-700 hover:underline"
            >
              View detailed map locations →
            </Link>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {branches.map((branch, index) => (
              <Reveal
                key={branch.slug}
                delay={(index % 2) * 100}
                className="grid"
              >
                <LocationCard branch={branch} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="rounded-3xl bg-amber-400 p-8 sm:p-12 text-green-950">
          <Reveal className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Need Wholesale Bananas or Banana Seeds?
            </h2>
            <p className="mt-3 max-w-xl text-base font-medium text-green-950/90">
              Get in touch with BT Banana today for current stock availability, wholesale market rates, and direct orders.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <CallButton phone={primaryPhone} className="bg-green-950 text-white hover:bg-green-900" />
              <WhatsAppButton phone={primaryWhatsApp} />
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
