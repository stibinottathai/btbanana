import Link from "next/link";
import Image from "next/image";
import {
  branches,
  coveredAreas,
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
import { Faq } from "@/components/Faq";
import { CheckIcon, LeafIcon, MapPinIcon } from "@/components/icons";
import { serviceLocations } from "@/lib/locations";

const homeFaqs = [
  {
    question: "Which is the best banana shop in Kannur or Alakode?",
    answer:
      "BT Banana is a wholesale banana and banana seed (Vazhavithu) supplier based in Alakode and Nellipara, Kannur district, Kerala — supplying farmers, traders, and retailers at reasonable prices with direct phone and WhatsApp contact.",
  },
  {
    question: "Does BT Banana sell banana seeds (Vazhavithu)?",
    answer:
      "Yes. We supply banana seeds — locally known as Vazhavithu — as planting material for farmers and growers, with delivery arranged across Kerala depending on quantity and location.",
  },
  {
    question: "Do you supply wholesale bananas to Kasaragod district?",
    answer:
      "Yes — our Alakode branch is close to the Kannur–Kasaragod border, and we regularly supply customers across Kasaragod district, including Vellarikundu and nearby areas.",
  },
  {
    question: "How do I contact BT Banana for an enquiry?",
    answer:
      "Call or WhatsApp Thomas M.J or Albin Augustine directly, or use the enquiry form on our Contact page — we'll confirm current availability and pricing.",
  },
];

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

      {/* Areas We Cover */}
      <section className="border-t border-green-100 bg-gradient-to-b from-white via-green-50/40 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold text-emerald-800">
              <MapPinIcon className="h-3.5 w-3.5 text-emerald-700" />
              Wholesale Delivery &amp; Supply Network
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
              Areas We Cover
            </h2>
            <p className="mt-3 max-w-2xl text-base text-neutral-600">
              BT Banana supplies wholesale bananas and banana seeds (Vazhavithu) across key locations in <strong className="font-semibold text-green-900">Kannur</strong> and <strong className="font-semibold text-green-900">Kasaragod</strong> districts in Kerala.
            </p>
          </div>

          {/* District Highlights Header Cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-green-950 shadow-sm">
                <MapPinIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-950">Kannur District</h3>
                <p className="text-xs font-semibold text-green-700">Primary Hub: Alakode &amp; Nellipara</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-700 text-white shadow-sm">
                <MapPinIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-950">Kasaragod District</h3>
                <p className="text-xs font-semibold text-green-700">Northern Kerala Wholesale Network</p>
              </div>
            </div>
          </div>

          {/* Covered Locations Grid */}
          <div className="mt-8 rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-green-900">
              Key Towns &amp; Localities Supplied:
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {coveredAreas.localities.map((location) => {
                const locationPage = serviceLocations.find(
                  (l) => l.name === location
                );
                const className =
                  "flex items-center gap-2 rounded-xl border border-green-200/80 bg-green-50/60 px-4 py-2.5 text-sm font-semibold text-green-950 transition hover:bg-green-100 hover:border-green-300";

                if (locationPage) {
                  return (
                    <Link
                      key={location}
                      href={`/locations/${locationPage.slug}`}
                      className={className}
                    >
                      <MapPinIcon className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{location}</span>
                    </Link>
                  );
                }

                return (
                  <div key={location} className={className}>
                    <MapPinIcon className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{location}</span>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-xs text-neutral-500">
              Don&apos;t see your specific location listed? If you are located nearby in Kannur or Kasaragod districts, call or WhatsApp us directly to check supply availability.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Faq items={homeFaqs} />
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
