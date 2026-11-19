import type { Metadata } from "next";
import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { primaryPhone, primaryWhatsApp, SITE_URL } from "@/lib/site";

// [TODO: owner / native speaker to review all Malayalam copy before publishing]

export const metadata: Metadata = {
  title: "വാഴവിത്ത് – കേരളം മുഴുവൻ ഡെലിവറി",
  description:
    "വാഴവിത്ത് (വാഴക്കന്ന്) — നേന്ത്രൻ, റോബസ്റ്റ, ഞാലിപ്പൂവൻ, പാളയംകോടൻ. കേരളത്തിലെ എല്ലാ ജില്ലകളിലേക്കും ഡെലിവറി. വിളിക്കൂ അല്ലെങ്കിൽ WhatsApp ചെയ്യൂ.",
  alternates: {
    canonical: "/ml",
    languages: { "en-IN": "/", "ml-IN": "/ml", "x-default": "/" },
  },
  openGraph: {
    title: "വാഴവിത്ത് – കേരളം മുഴുവൻ ഡെലിവറി | BT Banana",
    description: "നേന്ത്രൻ, റോബസ്റ്റ, ഞാലിപ്പൂവൻ, പാളയംകോടൻ വാഴക്കന്നുകൾ — കേരളം മുഴുവൻ ഡെലിവറി.",
    url: `${SITE_URL}/ml`,
    locale: "ml_IN",
  },
};

const links = [
  { href: "/ml/banana-seeds", title: "വാഴവിത്ത് / വാഴക്കന്ന്", text: "ഇനങ്ങൾ, ഡെലിവറി, ഓർഡർ ചെയ്യേണ്ട വിധം" },
  { href: "/ml/faq", title: "സംശയങ്ങളും മറുപടികളും", text: "നല്ല കന്ന് തിരഞ്ഞെടുക്കൽ, നടീൽ അകലം, വില" },
  { href: "/ml/contact", title: "ബന്ധപ്പെടുക", text: "ഫോൺ, WhatsApp, ആലക്കോട് & നെല്ലിപ്പാറ ശാഖകൾ" },
];

export default function MalayalamHomePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-green-50 to-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
          <p className="text-sm font-semibold text-green-800">BT Banana · ആലക്കോട്, കണ്ണൂർ</p>
          <h1 className="mt-3 text-3xl font-bold leading-snug text-green-950 sm:text-5xl sm:leading-tight">
            വാഴവിത്ത് – കേരളം മുഴുവൻ ഡെലിവറി
          </h1>
          <p className="mt-5 text-base leading-8 text-neutral-700 sm:text-lg">
            നല്ലയിനം വാഴവിത്ത് (വാഴക്കന്ന്) — നേന്ത്രൻ, റോബസ്റ്റ, ഞാലിപ്പൂവൻ, പാളയംകോടൻ —
            കേരളത്തിലെ 14 ജില്ലകളിലേക്കും BT Banana എത്തിക്കുന്നു. കണ്ണൂർ, കാസർകോട്, വയനാട്
            ഭാഗങ്ങളിൽ മൊത്തവ്യാപാര വാഴക്കുലയും നൽകുന്നു. ഞങ്ങൾ ടിഷ്യൂകൾച്ചർ തൈകൾ വിൽക്കുന്നില്ല.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton phone={primaryPhone} label="വിളിക്കൂ" />
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="നമസ്കാരം BT Banana, എനിക്ക് വാഴവിത്ത് വേണം – ഇനം: ___, എണ്ണം: ___, ജില്ല: ___"
              label="WhatsApp ചെയ്യൂ"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-4 px-4 py-10 sm:grid-cols-3 sm:px-6">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm hover:border-green-300"
          >
            <h2 className="text-lg font-bold text-green-950">{l.title}</h2>
            <p className="mt-2 text-sm leading-7 text-neutral-600">{l.text}</p>
          </Link>
        ))}
      </section>

      <p className="mx-auto max-w-4xl px-4 pb-12 text-sm sm:px-6">
        <Link href="/" lang="en" className="font-semibold text-green-700 hover:text-green-900">
          English website &rarr;
        </Link>
      </p>
    </div>
  );
}
