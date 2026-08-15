import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LocationCard } from "@/components/LocationCard";
import { CheckIcon } from "@/components/icons";
import { branches, primaryPhone, primaryWhatsApp, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Banana Seeds / Vazhavithu Supplier in Kerala",
  description:
    "BT Banana supplies banana seeds (Vazhavithu / വാഴവിത്ത്) — banana planting material — at reasonable wholesale prices from Alakode and Nellipara, Kerala. Enquire for availability.",
  alternates: {
    canonical: "/banana-seeds",
  },
  openGraph: {
    title: "Banana Seeds / Vazhavithu Supplier in Kerala | BT Banana",
    description:
      "Banana seeds / Vazhavithu (banana planting material) supplied wholesale from Alakode and Nellipara, Kerala.",
    url: `${SITE_URL}/banana-seeds`,
  },
};

export default function BananaSeedsPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ label: "Banana Seeds", href: "/banana-seeds" }]} />
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-green-950 sm:text-5xl">
            Banana Seeds / Vazhavithu
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
            BT Banana supplies banana seeds — known locally as{" "}
            <span className="font-semibold">Vazhavithu (വാഴവിത്ത്)</span> —
            at reasonable wholesale prices from our Alakode and Nellipara
            branches in Kerala.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CallButton phone={primaryPhone} label="Call for Availability" />
            <WhatsAppButton
              phone={primaryWhatsApp}
              message="Hi BT Banana, I'd like to enquire about banana seeds / Vazhavithu."
            />
          </div>
        </div>
        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl shadow-lg sm:block">
          <Image
            src="/images/vazhavithu.png"
            alt="Freshly harvested banana seeds / Vazhavithu planting material with a young banana sapling"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-y border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-green-950">
                What is Vazhavithu?
              </h2>
              <p className="mt-4 leading-7 text-neutral-700">
                Vazhavithu is the Malayalam term for banana planting
                material — the young banana plants or suckers that farmers
                plant to start a new banana crop. It&apos;s the starting
                point for any banana cultivation, and the quality of the
                planting material has a direct effect on the crop that
                follows.
              </p>
              <p className="mt-4 leading-7 text-neutral-700">
                As a banana seed supplier, we supply this planting material
                to farmers and growers who are starting or expanding banana
                cultivation, at reasonable wholesale prices.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-950">
                Who Can Enquire
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Individual farmers planting a new banana crop",
                  "Growers expanding existing banana cultivation",
                  "Agricultural traders sourcing planting material in bulk",
                  "Anyone searching for a banana seed supplier near Alakode, Nellipara, or Kannur",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 leading-7 text-neutral-700"
                  >
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-green-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-green-950">
          Wholesale Vazhavithu Enquiries
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-neutral-700">
          We supply banana Vazhavithu at reasonable prices, with quantities
          depending on current availability. Whether you need a small
          number of plants or are sourcing banana planting material in
          bulk, contact us directly and we&apos;ll let you know what we
          currently have available.
        </p>
        <p className="mt-4 max-w-2xl leading-7 text-neutral-700">
          We don&apos;t list fixed prices online since availability and
          rates can change — reach out by phone or WhatsApp for the current
          wholesale price on banana seeds.
        </p>
      </section>

      <section className="border-t border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-green-950">
            Contact Us for Banana Seeds
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Get in touch with our Alakode or Nellipara branch for banana
            seed / Vazhavithu enquiries.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {branches.map((branch) => (
              <LocationCard key={branch.slug} branch={branch} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
