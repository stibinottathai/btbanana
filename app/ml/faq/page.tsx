import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Faq } from "@/components/Faq";
import { primaryWhatsApp, SITE_URL } from "@/lib/site";
import { faqsMl } from "@/lib/faqs-ml";

export const metadata: Metadata = {
  title: "വാഴവിത്ത് – സംശയങ്ങളും മറുപടികളും",
  description:
    "വാഴവിത്ത് എന്താണ്, നല്ല കന്ന് എങ്ങനെ തിരഞ്ഞെടുക്കാം, നടീൽ അകലം, വില, ഡെലിവറി — കർഷകർ ചോദിക്കുന്ന ചോദ്യങ്ങൾക്ക് മറുപടി.",
  alternates: {
    canonical: "/ml/faq",
    languages: { "en-IN": "/faq", "ml-IN": "/ml/faq", "x-default": "/faq" },
  },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: "വാഴവിത്ത് – സംശയങ്ങളും മറുപടികളും | BT Banana",
    description: "വാഴവിത്തിനെക്കുറിച്ച് കർഷകർ ചോദിക്കുന്ന ചോദ്യങ്ങൾക്ക് മറുപടി.",
    url: `${SITE_URL}/ml/faq`,
    locale: "ml_IN",
  },
};

export default function MalayalamFaqPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "മലയാളം", href: "/ml" },
          { label: "സംശയങ്ങൾ", href: "/ml/faq" },
        ]}
      />
      <h1 className="mt-6 text-3xl font-bold leading-snug text-green-950 sm:text-4xl">
        വാഴവിത്ത് – സംശയങ്ങളും മറുപടികളും
      </h1>
      <p className="mt-4 leading-8 text-neutral-700">
        വാഴയ്ക്ക് വിത്തില്ല — കന്നാണ് നടുന്നത്. കർഷകർ ഞങ്ങളോട് പതിവായി ചോദിക്കുന്ന
        ചോദ്യങ്ങൾക്കുള്ള മറുപടികൾ. നടീൽ കണക്കുകൾ കേരള കാർഷിക സർവകലാശാലയുടെ (KAU)
        നിർദേശപ്രകാരം.
      </p>
      <div className="mt-10">
        <Faq items={faqsMl} title="ചോദ്യങ്ങൾ" />
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <WhatsAppButton
          phone={primaryWhatsApp}
          message="നമസ്കാരം BT Banana, എനിക്ക് വാഴവിത്ത് വേണം – ഇനം: ___, എണ്ണം: ___, ജില്ല: ___"
          label="WhatsApp ഓർഡർ"
        />
        <Link href="/ml/banana-seeds" className="text-sm font-semibold text-green-700 hover:text-green-900">
          വാഴവിത്ത് ഇനങ്ങൾ &rarr;
        </Link>
        <Link href="/faq" lang="en" className="text-sm font-semibold text-green-700 hover:text-green-900">
          English FAQ &rarr;
        </Link>
      </div>
    </div>
  );
}
