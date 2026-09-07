import Link from "next/link";
import Image from "next/image";
import {
  branches,
  owners,
  SITE_NAME,
  formatPhone,
  telHref,
  whatsappHref,
} from "@/lib/site";
import { serviceLocations } from "@/lib/locations";
import { PhoneIcon, WhatsAppIcon, MapPinIcon } from "@/components/icons";

export function Footer() {
  const wholesaleLinks = [
    { label: "Wholesale Bananas", href: "/wholesale-bananas" },
    { label: "Banana Merchant in Kannur", href: "/banana-merchant-kannur" },
    { label: "Raw Banana for Chips", href: "/banana-for-chips" },
    { label: "Banana Suckers (Vazhavithu)", href: "/banana-seeds" },
    { label: "Today's Wholesale Rates", href: "/banana-prices" },
    { label: "All Banana Varieties", href: "/products" },
  ];

  const companyLinks = [
    { label: "About BT Banana", href: "/about" },
    { label: "All Locations", href: "/locations" },
    { label: "Contact & Enquiries", href: "/contact" },
    { label: "Digital Visiting Card", href: "/card" },
  ];

  return (
    <footer className="border-t border-green-900/80 bg-green-950 text-green-100">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-12 sm:px-6 sm:pt-16">
        {/* Main 4-Column Structured Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Col 1: Brand & Direct Contact (span 4) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/images/logo.png"
                alt="BT Banana Logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="text-xl font-bold text-white tracking-tight">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-green-400">
              Wholesale Banana Supplier in Kannur, Kerala
            </p>
            <p className="mt-3 text-sm leading-6 text-green-200/90">
              Bulk fresh banana consignments, raw Nendran plantains for chips, and healthy vegetative banana suckers (Vazhavithu) supplied across North Kerala.
            </p>

            {/* Direct Owner Contact Cards */}
            <div className="mt-5 space-y-2.5">
              {owners.map((owner) => (
                <div
                  key={owner.phone}
                  className="flex items-center justify-between rounded-xl border border-green-900 bg-green-900/40 px-3.5 py-2 text-xs"
                >
                  <span className="font-medium text-white">{owner.name}</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={telHref(owner.phone)}
                      className="inline-flex items-center gap-1 text-green-300 hover:text-white transition"
                      aria-label={`Call ${owner.name}`}
                    >
                      <PhoneIcon className="h-3.5 w-3.5 text-green-400" />
                      <span>{formatPhone(owner.phone)}</span>
                    </a>
                    <a
                      href={whatsappHref(
                        owner.phone,
                        "Hi BT Banana, I have a wholesale enquiry."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-white transition"
                      aria-label={`WhatsApp ${owner.name}`}
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Wholesale Produce (span 3) */}
          <div className="lg:col-span-3 lg:pl-4">
            <p className="text-xs font-bold uppercase tracking-wider text-green-400">
              Wholesale Produce
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {wholesaleLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-200/90 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Quick Links (span 2) */}
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-wider text-green-400">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-200/90 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Wholesale Depots (span 3) */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-green-400">
              Our Depots
            </p>
            <div className="mt-4 space-y-3.5 text-xs">
              {branches.map((branch) => (
                <div
                  key={branch.slug}
                  className="rounded-xl border border-green-900 bg-green-900/30 p-3"
                >
                  <p className="font-semibold text-white flex items-center gap-1.5">
                    <MapPinIcon className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    {branch.name}
                  </p>
                  <p className="mt-1 text-green-300/90">{branch.place}</p>
                  <Link
                    href={`/locations/${branch.slug}`}
                    className="mt-2 inline-block font-semibold text-emerald-400 hover:text-white hover:underline transition"
                  >
                    Branch details &amp; map →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Structured Service Locations Area */}
        <div className="mt-12 border-t border-green-900/80 pt-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-green-400">
              Service Areas &amp; Wholesale Corridors
            </p>
            <p className="text-xs text-green-400/80">
              Kannur, Kasaragod &amp; Wayanad Districts
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {serviceLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="rounded-lg border border-green-900/90 bg-green-900/40 px-3 py-1.5 text-green-200 hover:border-green-700 hover:bg-green-800/60 hover:text-white transition"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Status Bar */}
        <div className="mt-10 border-t border-green-900/80 pt-6 flex flex-col gap-4 text-xs text-green-400/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. Wholesale Banana Supplier in Kannur, Kerala. All rights reserved.
          </p>
          <p className="text-green-400">
            Malayora Highway • Alakode &amp; Nellipara Depots
          </p>
        </div>
      </div>
    </footer>
  );
}
