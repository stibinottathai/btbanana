import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { JsonLd } from "@/components/JsonLd";
import {
  branches,
  coveredAreas,
  owners,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wholesale Banana Supplier in Kannur, Kerala | BT Banana",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Wholesale Banana Supplier in Kannur, Kerala | BT Banana",
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  twitter: {
    card: "summary",
    title: "Wholesale Banana Supplier in Kannur, Kerala | BT Banana",
    description: SITE_DESCRIPTION,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "WholesaleStore"],
  name: SITE_NAME,
  legalName: "BT Banana Wholesale",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/images/logo.png`,
  priceRange: "₹₹",
  telephone: owners.map((o) => `+91${o.phone}`),
  areaServed: [
    ...coveredAreas.districts,
    ...coveredAreas.localities,
  ].map((place) => ({
    "@type": "Place",
    name: place,
  })),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Malayora Highway, Opposite Rajadhani Hotel",
    addressLocality: "Alakode",
    addressRegion: "Kerala",
    postalCode: "670571",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.1818,
    longitude: 75.4674,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:00",
      closes: "21:00",
    },
  ],
  founder: owners.map((o) => ({
    "@type": "Person",
    name: o.name,
    jobTitle: o.role,
  })),
  department: branches.map((branch) => ({
    "@type": "LocalBusiness",
    name: branch.name,
    description: branch.description,
    hasMap: branch.mapsUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: branch.place.split(",")[0].trim(),
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "BT Banana Wholesale Catalog",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Wholesale Bananas",
      },
      {
        "@type": "OfferCatalog",
        name: "Raw Banana for Chips (Pacha Ethakka)",
      },
      {
        "@type": "OfferCatalog",
        name: "Banana Seeds / Vazhavithu Planting Material",
      },
    ],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BT Banana",
  alternateName: ["BT Banana Wholesale", "BT Banana Kannur"],
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: ["en-IN", "ml-IN"],
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.png`,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-neutral-900">
        <JsonLd data={localBusinessJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
