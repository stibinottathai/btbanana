"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, primaryPhone, SITE_NAME } from "@/lib/site";
import { CallButton } from "./CallButton";
import { LeafIcon, MenuIcon, CloseIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-green-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-green-900"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-700 text-white">
            <LeafIcon className="h-5 w-5" />
          </span>
          {SITE_NAME}
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 hover:text-green-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CallButton phone={primaryPhone} className="px-5 py-2.5 text-sm" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-green-200 text-green-800 md:hidden"
        >
          {open ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-green-100 bg-white px-4 pb-4 md:hidden"
        >
          <ul className="flex flex-col divide-y divide-green-50">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-neutral-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <CallButton phone={primaryPhone} className="mt-3 w-full" />
        </nav>
      )}
    </header>
  );
}
