import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { EnquiryForm } from "@/components/EnquiryForm";
import { LocationCard } from "@/components/LocationCard";
import Link from "next/link";
import { branches, owners, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact – Vazhavithu & Wholesale Bananas",
  description:
    "Call or WhatsApp BT Banana in Alakode and Nellipara, Kannur, for banana suckers (vazhavithu) across Kerala and wholesale bananas. Map and directions.",
  alternates: {
    canonical: "/contact",
    languages: { "en-IN": "/contact", "ml-IN": "/ml/contact", "x-default": "/contact" },
  },
  openGraph: {
    title: "Contact – Vazhavithu & Wholesale Bananas | BT Banana",
    description:
      "Call or WhatsApp BT Banana for banana suckers (vazhavithu) and wholesale bananas in Kerala.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-green-950">
        Contact {SITE_NAME}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-700">
        The quickest way to reach us is by phone or WhatsApp. You can also
        send an enquiry using the form below.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          {owners.map((owner) => (
            <div
              key={owner.phone}
              className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm"
            >
              <p className="text-lg font-semibold text-green-900">
                {owner.name}
              </p>
              <p className="text-sm text-green-700">{owner.role}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <CallButton
                  phone={owner.phone}
                  label={`Call ${owner.name.split(" ")[0]}`}
                  className="px-5 py-2.5 text-sm"
                />
                <WhatsAppButton phone={owner.phone} className="px-5 py-2.5 text-sm" />
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-green-100 bg-green-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
              Branches
            </p>
            <ul className="mt-3 space-y-2 text-neutral-700">
              {branches.map((branch) => (
                <li key={branch.slug}>
                  <span className="font-medium text-green-900">
                    {branch.name}
                  </span>{" "}
                  — {branch.place}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-green-900">
            Send Enquiry
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Fill in a few details and we&apos;ll open WhatsApp with your
            message ready to send.
          </p>
          <div className="mt-6">
            <EnquiryForm />
          </div>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="text-2xl font-bold text-green-950">Find us on the map</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {branches.map((branch) => (
            <LocationCard key={branch.slug} branch={branch} />
          ))}
        </div>
        <p className="mt-6 text-sm">
          <Link href="/ml/contact" lang="ml" className="font-semibold text-green-700 hover:text-green-900">
            മലയാളത്തിൽ &rarr;
          </Link>
        </p>
      </section>
    </div>
  );
}
