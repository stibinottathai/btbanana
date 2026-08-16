import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { JsonLd } from "@/components/JsonLd";
import { branches, owners, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

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
    default: `${SITE_NAME} | Wholesale Bananas & Banana Seeds in Kerala`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "banana wholesale Kerala",
    "banana supplier Alakode",
    "banana wholesale Nellipara",
    "banana supplier Kannur",
    "banana seeds Kerala",
    "vazhavithu Kerala",
    "banana seed supplier",
    "wholesale banana supplier",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Wholesale Bananas & Banana Seeds in Kerala`,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Wholesale Bananas & Banana Seeds in Kerala`,
    description: SITE_DESCRIPTION,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: owners.map((o) => `+91${o.phone}`),
  areaServed: ["Alakode", "Nellipara", "Kannur", "Kerala"],
  department: branches.map((branch) => ({
    "@type": "LocalBusiness",
    name: branch.name,
    description: branch.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: branch.place.split(",")[0].trim(),
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-neutral-900">
        <JsonLd data={localBusinessJsonLd} />
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
