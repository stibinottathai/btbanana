import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  branches,
  owners,
  primaryPhone,
  primaryWhatsApp,
  SITE_NAME,
  formatPhone,
  telHref,
  whatsappHref,
} from "@/lib/site";
import { serviceLocations } from "@/lib/locations";
import {
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  ChevronRightIcon,
  LeafIcon,
} from "@/components/icons";

const productLinks = [
  { label: "Vazhavithu (Banana Suckers)", href: "/banana-seeds" },
  { label: "Wholesale Bananas", href: "/wholesale-bananas" },
  { label: "Banana Merchant in Kannur", href: "/banana-merchant-kannur" },
  { label: "Today's Wholesale Rates", href: "/banana-prices" },
  { label: "All Banana Varieties", href: "/products" },
];

const companyLinks = [
  { label: "About BT Banana", href: "/about" },
  { label: "All Locations", href: "/locations" },
  { label: "Contact & Enquiries", href: "/contact" },
  { label: "Digital Visiting Card", href: "/card" },
];

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300/90">
      <span className="h-px w-5 bg-amber-300/60" aria-hidden="true" />
      {children}
    </p>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm text-green-100/75 transition-colors hover:text-white"
    >
      <ChevronRightIcon className="h-3.5 w-3.5 -translate-x-1 text-amber-300 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
      <span className="-ml-5 transition-[margin] duration-200 group-hover:ml-0">
        {label}
      </span>
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-[#03200f] text-green-100">
      {/* Decorative layers */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -left-40 -top-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-green-700/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 -right-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-amber-400/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* ── CTA band ── */}
        <div className="flex flex-col gap-6 border-b border-white/10 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-14">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
              <LeafIcon className="h-3.5 w-3.5" />
              Open every day · 6 am – 9 pm
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Bulk Vazhavithu &amp; wholesale bananas,{" "}
              <span className="text-amber-300">delivered across Kerala.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={telHref(primaryPhone)}
              className="group inline-flex items-center gap-2.5 rounded-full bg-amber-400 py-2 pl-2 pr-5 text-sm font-bold text-green-950 shadow-lg shadow-amber-500/10 transition hover:bg-amber-300"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-950 text-amber-300 transition-transform group-hover:rotate-12">
                <PhoneIcon className="h-4 w-4" />
              </span>
              {formatPhone(primaryPhone)}
            </a>
            <a
              href={whatsappHref(
                primaryWhatsApp,
                "Hi BT Banana, I'd like a quote for Vazhavithu / wholesale bananas."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition hover:border-[#25D366] hover:bg-[#25D366]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp a Quote
            </a>
          </div>
        </div>

        {/* ── Main grid ── */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-green-50 ring-1 ring-white/20">
                <Image
                  src="/images/logo-256.webp"
                  alt="BT Banana Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  {SITE_NAME}
                </span>
                <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300/80">
                  Vazhavithu &amp; Wholesale Bananas
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-green-100/70">
              Bulk Vazhavithu (വാഴവിത്ത്) imported from Tamil Nadu for farmers
              and nurseries across all of Kerala, plus wholesale bananas and
              raw Nendran for chips from our Kannur depots.
            </p>

            <ul className="mt-6 space-y-2.5">
              {owners.map((owner) => (
                <li
                  key={owner.phone}
                  className="flex max-w-sm items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">
                      {owner.name}
                    </p>
                    <a
                      href={telHref(owner.phone)}
                      className="text-xs tabular-nums text-green-100/60 transition hover:text-amber-300"
                    >
                      {formatPhone(owner.phone)}
                    </a>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <a
                      href={telHref(owner.phone)}
                      aria-label={`Call ${owner.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-amber-300 transition hover:bg-amber-400 hover:text-green-950"
                    >
                      <PhoneIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={whatsappHref(owner.phone, "Hi BT Banana, I have an enquiry.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp ${owner.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#4ade80] transition hover:bg-[#25D366] hover:text-white"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <nav aria-label="Products" className="lg:col-span-3">
            <FooterHeading>Products</FooterHeading>
            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="lg:col-span-2">
            <FooterHeading>Company</FooterHeading>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Depots */}
          <div className="sm:col-span-2 lg:col-span-3">
            <FooterHeading>Our Depots</FooterHeading>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {branches.map((branch) => (
                <li key={branch.slug}>
                  <Link
                    href={`/locations/${branch.slug}`}
                    className="group flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-amber-300/40 hover:bg-white/[0.07]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-green-950">
                      <MapPinIcon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-white">
                        {branch.name.replace("BT Banana – ", "")}
                      </span>
                      <span className="mt-0.5 block text-xs text-green-100/60">
                        {branch.place}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-amber-300">
                        Directions &amp; details
                        <ChevronRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Service areas ── */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <FooterHeading>Service Areas</FooterHeading>
            <p className="text-xs text-green-100/50">
              Vazhavithu: all 14 Kerala districts · Bananas: Kannur, Kasaragod &amp; Wayanad
            </p>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2">
            {serviceLocations.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="inline-flex rounded-full border border-white/10 px-3 py-1.5 text-xs text-green-100/70 transition hover:border-amber-300/50 hover:text-amber-200"
                >
                  {loc.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-green-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <MapPinIcon className="h-3.5 w-3.5 text-amber-300/70" />
            Malayora Highway, Alakode, Kannur, Kerala
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1 font-semibold text-green-100/70 transition hover:text-amber-300"
          >
            Back to top
            <ChevronRightIcon className="h-3.5 w-3.5 -rotate-90" />
          </a>
        </div>
      </div>

      {/* Oversized brand watermark */}
      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.22em] select-none whitespace-nowrap text-center text-[15.5vw] font-black leading-none tracking-tighter text-white/[0.035]"
      >
        BT BANANA
      </p>
    </footer>
  );
}
