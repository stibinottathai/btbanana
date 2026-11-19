import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { branches, formatPhone, owners, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "ബന്ധപ്പെടുക – വാഴവിത്ത്, മൊത്തവ്യാപാരം",
  description:
    "വാഴവിത്തിനും മൊത്തവ്യാപാര വാഴക്കുലയ്ക്കും BT Banana-യെ വിളിക്കൂ അല്ലെങ്കിൽ WhatsApp ചെയ്യൂ. ആലക്കോട്, നെല്ലിപ്പാറ, കണ്ണൂർ.",
  alternates: {
    canonical: "/ml/contact",
    languages: { "en-IN": "/contact", "ml-IN": "/ml/contact", "x-default": "/contact" },
  },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: "ബന്ധപ്പെടുക – വാഴവിത്ത്, മൊത്തവ്യാപാരം | BT Banana",
    description: "ആലക്കോട്, നെല്ലിപ്പാറ — ഫോൺ, WhatsApp.",
    url: `${SITE_URL}/ml/contact`,
    locale: "ml_IN",
  },
};

const branchMl: Record<string, string> = {
  alakode: "ആലക്കോട് ശാഖ — മലയോര ഹൈവേ, രാജധാനി ഹോട്ടലിന് എതിർവശം, ആലക്കോട്, കണ്ണൂർ 670571",
  nellipara: "നെല്ലിപ്പാറ ശാഖ — നെല്ലിപ്പാറ, ആലക്കോട്, കണ്ണൂർ",
};

export default function MalayalamContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "മലയാളം", href: "/ml" },
          { label: "ബന്ധപ്പെടുക", href: "/ml/contact" },
        ]}
      />
      <h1 className="mt-6 text-3xl font-bold leading-snug text-green-950 sm:text-4xl">ബന്ധപ്പെടുക</h1>
      <p className="mt-4 leading-8 text-neutral-700">
        വാഴവിത്ത് ഓർഡറിനും മൊത്തവ്യാപാര വാഴക്കുലയ്ക്കും നേരിട്ട് വിളിക്കുകയോ WhatsApp
        ചെയ്യുകയോ ചെയ്യൂ. ഇനം, എണ്ണം, ഡെലിവറി ജില്ല എന്നിവ അറിയിച്ചാൽ വിലയും ലഭ്യതയും
        പറഞ്ഞുതരാം.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {owners.map((o) => (
          <div key={o.phone} className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <p className="text-lg font-semibold text-green-900">{o.name}</p>
            <p className="text-sm text-neutral-600">{formatPhone(o.phone)}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <CallButton phone={o.phone} label="വിളിക്കൂ" className="px-5 py-2.5 text-sm" />
              <WhatsAppButton
                phone={o.phone}
                message="നമസ്കാരം BT Banana, എനിക്ക് വാഴവിത്ത് വേണം – ഇനം: ___, എണ്ണം: ___, ജില്ല: ___"
                label="WhatsApp"
                className="px-5 py-2.5 text-sm"
              />
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-2xl font-bold text-green-950">ഞങ്ങളുടെ ശാഖകൾ</h2>
      <ul className="mt-4 space-y-3">
        {branches.map((b) => (
          <li key={b.slug} className="rounded-2xl border border-green-100 bg-green-50/50 p-4 text-neutral-800">
            <p>{branchMl[b.slug] ?? b.place}</p>
            <a
              href={b.mapsUrl}
              target="_blank"
              rel="noopener"
              className="mt-1 inline-block text-sm font-semibold text-green-700 hover:text-green-900"
            >
              Google Maps-ൽ വഴി കാണുക &rarr;
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm">
        <Link href="/contact" lang="en" className="font-semibold text-green-700 hover:text-green-900">
          English &rarr;
        </Link>
      </p>
    </div>
  );
}
