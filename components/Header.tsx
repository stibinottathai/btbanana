"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  navLinks,
  owners,
  primaryPhone,
  primaryWhatsApp,
  SITE_NAME,
  formatPhone,
  telHref,
  whatsappHref,
  defaultEnquiryMessage,
} from "@/lib/site";
import { CallButton } from "./CallButton";
import {
  LeafIcon,
  MenuIcon,
  CloseIcon,
  PhoneIcon,
  WhatsAppIcon,
  QrCodeIcon,
} from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 shadow-sm">
      {/* Utility bar */}
      <div className="hidden bg-green-950 text-green-100 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6">
          <span className="flex items-center gap-1.5 font-medium">
            <LeafIcon className="h-3.5 w-3.5 text-amber-300" />
            Serving Alakode, Nellipara &amp; Kannur, Kerala
          </span>
          <div className="flex items-center gap-4 lg:gap-6">
            {owners.map((owner) => (
              <a
                key={owner.phone}
                href={telHref(owner.phone)}
                className="flex items-center gap-1.5 font-medium transition-colors hover:text-white"
              >
                <PhoneIcon className="h-3.5 w-3.5 text-green-300" />
                {owner.name}: {formatPhone(owner.phone)}
              </a>
            ))}
            <a
              href={whatsappHref(primaryWhatsApp, defaultEnquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-medium text-[#25D366] transition-colors hover:text-white"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-green-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2.5 sm:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-green-800 text-white shadow-sm">
              <LeafIcon className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-base font-extrabold text-green-950 sm:text-lg">
                {SITE_NAME}
              </span>
              <span className="hidden text-[11px] font-medium text-neutral-500 xl:block">
                Wholesale Bananas &amp; Seeds
              </span>
            </span>
          </Link>

          {/* Desktop Links */}
          <nav
            className="hidden items-center gap-0.5 lg:flex xl:gap-1.5"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              const isCard = link.href === "/card";

              if (isCard) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`inline-flex whitespace-nowrap items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-emerald-800 text-white shadow-sm"
                        : "bg-emerald-50 text-emerald-900 border border-emerald-200/80 hover:bg-emerald-100"
                    }`}
                  >
                    <QrCodeIcon className="h-3.5 w-3.5 text-emerald-600" />
                    {link.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative whitespace-nowrap px-2.5 py-1.5 text-xs font-semibold transition-colors xl:px-3 xl:text-sm ${
                    isActive
                      ? "text-green-800"
                      : "text-neutral-700 hover:text-green-800"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-2 -bottom-0.5 h-0.5 origin-left rounded-full bg-green-700 transition-transform ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA Actions */}
          <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
            <a
              href={whatsappHref(primaryWhatsApp, defaultEnquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
            </a>
            <CallButton phone={primaryPhone} className="px-4 py-2 text-xs xl:text-sm" />
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-green-200 text-green-800 lg:hidden"
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-green-100 bg-white px-4 pb-4 lg:hidden"
        >
          <ul className="flex flex-col divide-y divide-green-50">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              const isCard = link.href === "/card";
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-3 text-base font-medium ${
                      isActive ? "text-green-800 font-bold" : "text-neutral-800"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {isCard && <QrCodeIcon className="h-4 w-4 text-emerald-600" />}
                      {link.label}
                    </span>
                    {isCard && (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">
                        New
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 flex gap-3">
            <CallButton phone={primaryPhone} className="flex-1" />
            <a
              href={whatsappHref(primaryWhatsApp, defaultEnquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
