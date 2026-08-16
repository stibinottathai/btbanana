import Link from "next/link";
import Image from "next/image";
import {
  branches,
  defaultEnquiryMessage,
  owners,
  primaryPhone,
  primaryWhatsApp,
  SITE_DESCRIPTION,
} from "@/lib/site";
import { products } from "@/lib/products";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { LocationCard } from "@/components/LocationCard";
import { CheckIcon, LeafIcon } from "@/components/icons";

const benefits = [
  {
    title: "Wholesale Supply",
    description:
      "We supply bananas and banana seeds in bulk to farmers, traders, retailers, and other businesses.",
  },
  {
    title: "Multiple Banana Varieties",
    description:
      "From Nendran to plantain varieties, we deal in different types of bananas depending on availability.",
  },
  {
    title: "Banana Seeds / Vazhavithu Available",
    description:
      "Planting material for farmers looking to grow their own banana crop, supplied at reasonable prices.",
  },
  {
    title: "Reasonable Pricing",
    description:
      "We offer our bananas and banana seeds at fair, reasonable wholesale prices.",
  },
  {
    title: "Two Convenient Branches",
    description:
      "Supply available from our Alakode branch and our Nellipara branch in Kerala.",
  },
  {
    title: "Direct Contact for Enquiries",
    description:
      "Speak directly with Thomas or Albin over phone or WhatsApp for any enquiry.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-green-100 bg-gradient-to-b from-green-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-800">
              <LeafIcon className="h-4 w-4" />
              Alakode &amp; Nellipara, Kerala
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-green-950 sm:text-5xl">
              Wholesale Bananas &amp; Banana Seeds in Kerala
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-700">
              BT Banana supplies different varieties of bananas and banana
              seeds (Vazhavithu) at reasonable wholesale prices to farmers,
              traders, retailers, and other customers from our Alakode and
              Nellipara branches.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CallButton phone={primaryPhone} />
              <WhatsAppButton phone={primaryWhatsApp} message={defaultEnquiryMessage} />
            </div>
          </div>

          <div className="relative group">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-green-600/30 via-emerald-500/20 to-amber-500/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

            {/* Main Image Frame with Premium Multi-layer Border & Shadow */}
            <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-white shadow-[0_20px_50px_rgba(6,78,59,0.2)] ring-1 ring-green-900/10">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/images/main1.png"
                  alt="Wholesale bananas and banana seeds (Vazhavithu) - BT Banana Kerala"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-green-950/10 to-transparent" />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Wholesale Bananas &amp; Seeds
                </div>
                <p className="text-xl font-bold tracking-tight text-white drop-shadow-sm sm:text-2xl">
                  Bananas &amp; Vazhavithu
                </p>
                <p className="mt-1 text-sm font-medium text-green-100/90">
                  Reasonable pricing • Local supply • Direct contact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-green-950">
              About BT Banana
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-lg leading-8 text-neutral-700">
              BT Banana is a wholesale banana supplier based in Kerala,
              supplying different varieties of bananas along with banana
              seeds — locally known as Vazhavithu — at reasonable prices. We
              work with farmers, traders, retailers, and other businesses who
              need banana supply in bulk.
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-700">
              We operate from two branches — our Alakode branch and our
              Nellipara branch — supplying customers across the local area
              and beyond. Whether you need bananas for trading and retail, or
              banana planting material to start your own cultivation, you can
              reach out to us directly for current availability and pricing.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Wholesale banana supply",
                "Different banana varieties",
                "Banana seed / Vazhavithu supply",
                "Reasonable pricing",
                "Alakode branch",
                "Nellipara branch",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-green-900"
                >
                  <CheckIcon className="h-4 w-4 shrink-0 text-green-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Products overview */}
      <section className="border-y border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold text-green-950">
              What We Supply
            </h2>
            <Link
              href="/products"
              className="text-sm font-semibold text-green-700 hover:underline"
            >
              View all products →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Vazhavithu section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-amber-50 lg:grid-cols-2">
          <div className="relative h-64 lg:h-full lg:min-h-[420px]">
            <Image
              src="/images/vazhavithu.png"
              alt="Freshly harvested banana seeds / Vazhavithu planting material with a young banana sapling"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-8 sm:p-12 lg:pl-0">
            <h2 className="text-3xl font-bold text-green-950">
              Banana Seeds / Vazhavithu
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-700">
              Banana seeds — known in Malayalam as{" "}
              <span className="font-semibold">Vazhavithu (വാഴവിത്ത്)</span> —
              are the planting material farmers use to grow their own banana
              crop. BT Banana supplies banana Vazhavithu at reasonable
              wholesale prices, so farmers and growers across Kerala can
              source good planting material without hassle.
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-700">
              If you&apos;re a farmer near Alakode, Nellipara, Kannur, or
              elsewhere in Kerala looking for a banana seed supplier, you can
              contact us directly for current availability.
            </p>
            <Link
              href="/banana-seeds"
              className="mt-6 inline-flex items-center text-sm font-semibold text-green-800 hover:underline"
            >
              Learn more about our banana seeds →
            </Link>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallButton
                phone={primaryPhone}
                variant="outline"
                className="px-5 py-2.5 text-sm"
              />
              <WhatsAppButton
                phone={primaryWhatsApp}
                className="px-5 py-2.5 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-green-100 bg-green-50/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold text-green-950">
            Why Choose BT Banana
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-green-100 bg-white p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-800">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-green-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold text-green-950">
            Our Branches
          </h2>
          <Link
            href="/locations"
            className="text-sm font-semibold text-green-700 hover:underline"
          >
            View location details →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {branches.map((branch) => (
            <LocationCard key={branch.slug} branch={branch} />
          ))}
        </div>
      </section>

      {/* Contact / Enquiry */}
      <section className="border-t border-green-100 bg-green-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="mt-3 max-w-2xl text-green-100">
            {SITE_DESCRIPTION} Call or WhatsApp us directly for wholesale
            banana or banana seed enquiries.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {owners.map((owner) => (
              <div
                key={owner.phone}
                className="rounded-2xl bg-green-900/60 p-6"
              >
                <p className="text-lg font-semibold">{owner.name}</p>
                <p className="text-sm text-green-300">{owner.role}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <CallButton
                    phone={owner.phone}
                    label={`Call ${owner.name.split(" ")[0]}`}
                    variant="outline"
                    className="border-white/40 px-5 py-2.5 text-sm text-white hover:bg-white/10"
                  />
                  <WhatsAppButton
                    phone={owner.phone}
                    className="px-5 py-2.5 text-sm"
                  />
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center text-sm font-semibold text-amber-300 hover:underline"
          >
            Go to full contact page →
          </Link>
        </div>
      </section>
    </>
  );
}
