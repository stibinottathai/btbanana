"use client";

import { useEffect, useState } from "react";
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
import {
  MenuIcon,
  CloseIcon,
  PhoneIcon,
  WhatsAppIcon,
  QrCodeIcon,
  ChevronRightIcon,
  MapPinIcon,
} from "./icons";

const CARD_HREF = "/card";

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const mainLinks = navLinks.filter((l) => l.href !== CARD_HREF);
  const cardActive = isActivePath(pathname, CARD_HREF);

  // Condense the bar once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40">
      {/* Main bar */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled || open
            ? "border-green-900/10 bg-white/90 shadow-[0_8px_30px_-12px_rgba(5,46,22,0.25)] backdrop-blur-xl"
            : "border-transparent bg-white"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-6 ${
            scrolled ? "py-2" : "py-3"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label={`${SITE_NAME} — home`}
            className="flex shrink-0 flex-col items-start leading-none"
          >
            {/* Typographic wordmark — serif, like a shop signboard */}
            <span
              aria-hidden="true"
              className="font-brand text-[27px] font-semibold tracking-[-0.02em] text-green-950 [font-variation-settings:'SOFT'_50,'opsz'_72]"
            >
              BT <span className="italic font-medium text-green-800">Banana</span>
            </span>
            <span
              aria-hidden="true"
              className="mt-1 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-neutral-500"
            >
              <span className="h-px w-3 bg-amber-500" />
              Alakode · Kerala
            </span>
          </Link>

          {/* Desktop links — pill track */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-0.5 rounded-full bg-green-950/[0.04] p-1 ring-1 ring-green-900/[0.06]">
              {mainLinks.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`block whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-semibold transition-all duration-200 xl:px-4 xl:text-sm ${
                        active
                          ? "bg-white text-green-900 shadow-sm ring-1 ring-green-900/10"
                          : "text-neutral-600 hover:bg-white/70 hover:text-green-900"
                      }`}
                    >
                      {link.short ?? link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right actions */}
          <div className="flex shrink-0 items-center gap-2">
            <Link
              href={CARD_HREF}
              aria-label="Digital Card"
              aria-current={cardActive ? "page" : undefined}
              title="Digital Card"
              className={`hidden h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3 text-sm font-semibold transition-colors sm:inline-flex ${
                cardActive
                  ? "bg-emerald-800 text-white"
                  : "text-emerald-900 ring-1 ring-emerald-200 hover:bg-emerald-50"
              }`}
            >
              <QrCodeIcon className="h-4 w-4" />
              <span className="hidden xl:inline">Digital Card</span>
            </Link>

            <a
              href={telHref(primaryPhone)}
              aria-label={`Call ${formatPhone(primaryPhone)}`}
              className="group hidden h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-amber-400 pl-1.5 pr-4 text-sm lg:pr-1.5 xl:pr-4 font-bold text-green-950 shadow-sm shadow-amber-600/20 transition-all hover:bg-amber-300 hover:shadow-md sm:inline-flex"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-950 text-amber-300 transition-transform group-hover:rotate-12">
                <PhoneIcon className="h-3.5 w-3.5" />
              </span>
              <span className="lg:hidden xl:inline">Call Now</span>
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
                open
                  ? "bg-green-950 text-white"
                  : "bg-green-950/[0.05] text-green-950 ring-1 ring-green-900/10 hover:bg-green-950/10"
              }`}
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute inset-x-0 top-full h-dvh lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-green-950/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <nav
          id="mobile-nav"
          aria-label="Mobile"
          inert={!open}
          className={`relative max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-b-3xl bg-white px-4 pb-6 pt-3 shadow-2xl transition-all duration-300 ease-out ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, i) => {
              const active = isActivePath(pathname, link.href);
              const isCard = link.href === CARD_HREF;
              return (
                <li
                  key={link.href}
                  className="transition-all duration-300"
                  style={{
                    transitionDelay: open ? `${60 + i * 30}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "none" : "translateY(-6px)",
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold transition-colors ${
                      active
                        ? "bg-green-950 text-white"
                        : "text-neutral-800 hover:bg-green-50"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {isCard ? (
                        <QrCodeIcon
                          className={`h-4 w-4 ${active ? "text-amber-300" : "text-emerald-600"}`}
                        />
                      ) : (
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            active ? "bg-amber-300" : "bg-green-200"
                          }`}
                        />
                      )}
                      {link.label}
                    </span>
                    <ChevronRightIcon
                      className={`h-4 w-4 ${active ? "text-amber-300" : "text-neutral-300"}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href={telHref(primaryPhone)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-amber-400 py-3.5 text-sm font-bold text-green-950 shadow-sm"
            >
              <PhoneIcon className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={whatsappHref(primaryWhatsApp, defaultEnquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-3.5 text-sm font-bold text-white shadow-sm"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <div className="mt-4 rounded-2xl bg-green-50 p-4">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-green-800">
              <MapPinIcon className="h-3.5 w-3.5" />
              Alakode &amp; Nellipara, Kannur
            </p>
            <div className="mt-2 flex flex-col gap-1.5">
              {owners.map((owner) => (
                <a
                  key={owner.phone}
                  href={telHref(owner.phone)}
                  className="flex items-center justify-between text-sm text-green-950"
                >
                  <span className="font-medium">{owner.name}</span>
                  <span className="font-semibold tabular-nums">{formatPhone(owner.phone)}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
