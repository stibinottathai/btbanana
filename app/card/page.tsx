import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DigitalCard } from "@/components/DigitalCard";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Business Card | Contact & QR Code",
  description:
    "Official Digital Business Card for BT Banana. Save contacts directly into phonebook (.vcf), scan or download QR code, and contact wholesale banana and banana seed suppliers in Alakode & Nellipara, Kerala.",
  alternates: {
    canonical: "/card",
  },
  openGraph: {
    title: `Digital Business Card | ${SITE_NAME}`,
    description:
      "Save contacts directly into phonebook (.vcf), download printable QR code, and connect with BT Banana wholesale suppliers in Kerala.",
    url: `${SITE_URL}/card`,
    type: "profile",
  },
};

export default function DigitalCardPage() {
  return (
    <div className="bg-neutral-50/60 pb-12">
      {/* Header section */}
      <div className="border-b border-green-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <Breadcrumbs items={[{ label: "Digital Business Card", href: "/card" }]} />

          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-green-950 sm:text-3xl">
                Digital Business Card
              </h1>
              <p className="mt-1 text-sm text-neutral-600">
                Instant phonebook contact save (.vcf), downloadable QR code, and direct owner WhatsApp &amp; Call links.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <DigitalCard />
    </div>
  );
}
