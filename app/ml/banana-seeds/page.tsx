import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Faq } from "@/components/Faq";
import { keralaDistricts, primaryPhone, primaryWhatsApp, SITE_URL } from "@/lib/site";
import { faqsMl } from "@/lib/faqs-ml";

// [TODO: owner / native speaker to review all Malayalam copy before publishing]

export const metadata: Metadata = {
  title: "വാഴവിത്ത് / വാഴക്കന്ന് വിൽപ്പനയ്ക്ക്",
  description:
    "നല്ലയിനം വാഴവിത്ത് (വാഴക്കന്ന്) വാങ്ങാം — നേന്ത്രൻ, റോബസ്റ്റ, ഞാലിപ്പൂവൻ, പാളയംകോടൻ. മൊത്തവിലയ്ക്കും ചില്ലറയായും, കേരളം മുഴുവൻ ഡെലിവറി. WhatsApp വഴി ഓർഡർ ചെയ്യൂ.",
  keywords: [
    "വാഴവിത്ത്",
    "വാഴവിത്ത് വാങ്ങാൻ",
    "വാഴവിത്ത് മൊത്തവില",
    "വാഴവിത്ത് വിൽപ്പനയ്ക്ക്",
    "വാഴക്കന്ന് വിൽപ്പനയ്ക്ക്",
    "നേന്ത്രൻ വാഴവിത്ത്",
    "buy vazhavithu Kerala",
    "wholesale vazhavithu Kerala",
  ],
  alternates: {
    canonical: "/ml/banana-seeds",
    languages: {
      "en-IN": "/banana-seeds",
      "ml-IN": "/ml/banana-seeds",
      "x-default": "/banana-seeds",
    },
  },
  openGraph: {
    title: "വാഴവിത്ത് / വാഴക്കന്ന് വിൽപ്പനയ്ക്ക് | BT Banana",
    description:
      "നേന്ത്രൻ, റോബസ്റ്റ, ഞാലിപ്പൂവൻ, പാളയംകോടൻ വാഴക്കന്നുകൾ — കേരളം മുഴുവൻ ഡെലിവറി.",
    url: `${SITE_URL}/ml/banana-seeds`,
    locale: "ml_IN",
    images: [{ url: "/images/vazhavithu.webp", alt: "BT Banana വാഴവിത്ത് (വാഴക്കന്ന്)" }],
  },
};

const varieties = [
  { name: "നേന്ത്രൻ വാഴവിത്ത്", en: "Nendran", href: "/banana-seeds/nendran", note: "കേരളത്തിൽ ഏറ്റവും കൂടുതൽ കൃഷി ചെയ്യുന്നയിനം. ചിപ്സിനും കറിക്കും. അകലം 2 × 2 മീ." },
  { name: "റോബസ്റ്റ വാഴക്കന്ന്", en: "Robusta", href: "/banana-seeds/robusta", note: "വലിയ കുലകൾ തരുന്ന പഴയിനം. തെങ്ങിൻതോപ്പിൽ ഇടവിളയ്ക്കും പറ്റിയത്. അകലം 2.4 × 1.8 മീ." },
  { name: "ഞാലിപ്പൂവൻ വാഴക്കന്ന്", en: "Njali Poovan", href: "/banana-seeds/njali-poovan", note: "മധുരമുള്ള ചെറുപഴം. വീട്ടുവളപ്പിനും തെങ്ങിൻതോപ്പിലെ ഇടവിളയ്ക്കും." },
  { name: "പാളയംകോടൻ വാഴവിത്ത്", en: "Palayankodan", href: "/banana-seeds/palayankodan", note: "കാര്യമായ പരിചരണമില്ലാതെയും വളരുന്ന ഇനം. അകലം 2.1 × 2.1 മീ." },
];

const districtsMl: Record<string, string> = {
  Kasaragod: "കാസർകോട്", Kannur: "കണ്ണൂർ", Wayanad: "വയനാട്", Kozhikode: "കോഴിക്കോട്",
  Malappuram: "മലപ്പുറം", Palakkad: "പാലക്കാട്", Thrissur: "തൃശൂർ", Ernakulam: "എറണാകുളം",
  Idukki: "ഇടുക്കി", Kottayam: "കോട്ടയം", Alappuzha: "ആലപ്പുഴ", Pathanamthitta: "പത്തനംതിട്ട",
  Kollam: "കൊല്ലം", Thiruvananthapuram: "തിരുവനന്തപുരം",
};

export default function MalayalamBananaSeedsPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "മലയാളം", href: "/ml" },
            { label: "വാഴവിത്ത്", href: "/ml/banana-seeds" },
          ]}
        />
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2">
        <div className="min-w-0">
          <h1 className="text-3xl font-bold leading-snug text-green-950 sm:text-5xl sm:leading-tight">
            വാഴവിത്ത് / വാഴക്കന്ന് വിൽപ്പനയ്ക്ക്
          </h1>
          <p className="mt-5 text-base leading-8 text-neutral-700 sm:text-lg">
            വാഴയ്ക്ക് മുളയ്ക്കുന്ന വിത്തില്ല — തള്ളവാഴയുടെ ചുവട്ടിൽ നിന്നുള്ള കന്നാണ് കർഷകർ
            നടുന്നത്. ഇതിനെയാണ് <strong className="text-green-950">വാഴവിത്ത്</strong> അഥവാ
            വാഴക്കന്ന് എന്ന് പറയുന്നത്. BT Banana നേന്ത്രൻ, റോബസ്റ്റ, ഞാലിപ്പൂവൻ, പാളയംകോടൻ
            ഇനങ്ങളുടെ പീലിക്കന്നുകൾ കേരളത്തിലെ എല്ലാ ജില്ലകളിലേക്കും എത്തിക്കുന്നു.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CallButton phone={primaryPhone} label="ഓർഡറിന് വിളിക്കൂ" />
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="നമസ്കാരം BT Banana, എനിക്ക് വാഴവിത്ത് വേണം – ഇനം: ___, എണ്ണം: ___, ജില്ല: ___"
              label="WhatsApp ഓർഡർ"
            />
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/vazhavithu.webp"
            alt="BT Banana വിതരണം ചെയ്യുന്ന വാഴവിത്ത് (വാഴക്കന്ന്)"
            fill
            preload
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-bold text-green-950">ഏതൊക്കെ ഇനം വാഴവിത്ത് ലഭ്യമാണ്?</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {varieties.map((v) => (
            <div key={v.en} className="rounded-2xl border border-green-100 bg-green-50/50 p-5">
              <h3 className="text-lg font-bold text-green-950">{v.name}</h3>
              <p className="mt-2 text-sm leading-7 text-neutral-700">{v.note}</p>
              <Link href={v.href} lang="en" className="mt-3 inline-block text-xs font-semibold text-green-700 hover:text-green-900">
                {v.en} suckers (English) &rarr;
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-sm leading-7 text-neutral-800">
          ഞങ്ങൾ വാഴക്കന്ന് മാത്രമാണ് നൽകുന്നത് — ടിഷ്യൂകൾച്ചർ തൈകൾ വിൽക്കുന്നില്ല.
        </p>
      </section>

      <section className="border-y border-green-100 bg-green-50/50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">ഏതൊക്കെ ജില്ലകളിലേക്ക് ഡെലിവറി ഉണ്ട്?</h2>
          <p className="mt-3 leading-8 text-neutral-700">
            കേരളത്തിലെ 14 ജില്ലകളിലേക്കും വാഴവിത്ത് എത്തിക്കുന്നു:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {keralaDistricts.map((d) => (
              <li key={d} className="rounded-full border border-green-200 bg-white px-3 py-1 text-sm text-green-950">
                {districtsMl[d] ?? d}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-neutral-600">
            ഡെലിവറി ചാർജും സമയവും എണ്ണവും ദൂരവും അനുസരിച്ച് മാറും; ഓർഡറിന് മുമ്പ് ഞങ്ങൾ അറിയിക്കും.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Faq
          items={[0, 1, 5, 6, 8].map((i) => faqsMl[i])}
          title="വാഴവിത്ത് — സംശയങ്ങളും മറുപടികളും"
        />
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link href="/ml/faq" className="font-semibold text-green-700 hover:text-green-900">
            എല്ലാ ചോദ്യങ്ങളും &rarr;
          </Link>
          <Link href="/ml/contact" className="font-semibold text-green-700 hover:text-green-900">
            ബന്ധപ്പെടുക &rarr;
          </Link>
          <Link href="/banana-seeds" lang="en" className="font-semibold text-green-700 hover:text-green-900">
            English &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
