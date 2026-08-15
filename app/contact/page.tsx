import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { EnquiryForm } from "@/components/EnquiryForm";
import { branches, owners, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact BT Banana for wholesale banana and banana seed (Vazhavithu) enquiries. Call, WhatsApp, or send an enquiry — Thomas M.J and Albin Augustine, Alakode and Nellipara, Kerala.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | BT Banana",
    description:
      "Contact BT Banana for wholesale banana and banana seed (Vazhavithu) enquiries in Kerala.",
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
    </div>
  );
}
