import Link from "next/link";
import {
  branches,
  navLinks,
  owners,
  SITE_DESCRIPTION,
  SITE_NAME,
  formatPhone,
  telHref,
} from "@/lib/site";
import { photoCredits } from "@/lib/photo-credits";

export function Footer() {
  return (
    <footer className="border-t border-green-100 bg-green-950 text-green-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-white">{SITE_NAME}</p>
            <p className="mt-1 text-sm text-green-300">
              Wholesale Bananas &amp; Banana Seeds
            </p>
            <p className="mt-4 text-sm leading-6 text-green-200">
              {SITE_DESCRIPTION}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-green-300">
              Branches
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {branches.map((branch) => (
                <li key={branch.slug}>
                  <span className="text-green-100">{branch.place}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-green-300">
              Phone
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {owners.map((owner) => (
                <li key={owner.phone}>
                  <a
                    href={telHref(owner.phone)}
                    className="text-green-100 hover:text-white"
                  >
                    {formatPhone(owner.phone)}
                  </a>
                  <span className="text-green-400"> — {owner.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-green-300">
              Useful Links
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-100 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-green-900 pt-6 text-xs text-green-400">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. Wholesale banana
            and banana seed (Vazhavithu) supplier serving Alakode, Nellipara,
            and Kannur, Kerala.
          </p>
          <p className="mt-3 leading-5">
            Photos:{" "}
            {photoCredits.map((credit, index) => (
              <span key={credit.fileName}>
                <a
                  href={credit.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-green-200"
                >
                  {credit.caption}
                </a>{" "}
                by{" "}
                <a
                  href={credit.authorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-green-200"
                >
                  {credit.author}
                </a>{" "}
                (
                <a
                  href={credit.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-green-200"
                >
                  {credit.license}
                </a>
                , resized){index < photoCredits.length - 1 ? "; " : "."}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
