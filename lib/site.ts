export const SITE_DOMAIN = "www.btbanana.com";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.btbanana.com";

export const SITE_NAME = "BT Banana";

/**
 * Stable JSON-LD node id for the business. Every page-level business, article
 * and offer block points back to this id so search and AI engines merge them
 * into one entity instead of seeing a dozen unrelated "BT Banana" businesses.
 */
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_URL = `${SITE_URL}/images/logo.png`;

/**
 * What "BT" in the brand name means. Shown on About, FAQ and llms.txt so that
 * nobody (farmers or AI engines) reads it as a genetically modified "Bt" crop.
 */
export const BT_MEANING =
  "\"BT Banana\" is our brand name. It has nothing to do with genetically modified \"Bt\" crops. Our banana suckers are ordinary, non-GM planting material taken from banana plants.";

export const SITE_TAGLINE = "Wholesale Banana Supplier in Kannur, Kerala";

export const SITE_DESCRIPTION =
  "BT Banana is a wholesale banana supplier and Vazhavithu (വാഴവിത്ത് / banana sucker) supplier based in Kannur, Kerala. We import healthy Vazhavithu from Tamil Nadu nurseries and supply it in bulk to farmers and nurseries across all 14 districts of Kerala, and supply wholesale bananas from Alakode and Nellipara to traders and retailers across Kannur, Kasaragod and Wayanad.";

/** All 14 Kerala districts — Vazhavithu is delivered statewide. */
export const keralaDistricts = [
  "Kasaragod",
  "Kannur",
  "Wayanad",
  "Kozhikode",
  "Malappuram",
  "Palakkad",
  "Thrissur",
  "Ernakulam",
  "Idukki",
  "Kottayam",
  "Alappuzha",
  "Pathanamthitta",
  "Kollam",
  "Thiruvananthapuram",
];

export type Owner = {
  name: string;
  phone: string;
  role: string;
};

export const owners: Owner[] = [
  { name: "Thomas M.J", phone: "9447483169", role: "Owner" },
  { name: "Albin Augustine", phone: "8086648081", role: "Owner" },
];

export type Branch = {
  slug: string;
  name: string;
  place: string;
  description: string;
  mapQuery: string;
  mapsUrl: string;
};

export const branches: Branch[] = [
  {
    slug: "alakode",
    name: "BT Banana – Alakode",
    place: "Alakode, Kannur, Kerala",
    description:
      "Our Alakode branch supplies wholesale bananas, raw Nendran for chips, and banana suckers (Vazhavithu) to traders, chips makers, retailers, and farmers in and around Alakode.",
    mapQuery: "Alakode, Kannur, Kerala",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Alakode+Kannur+Kerala",
  },
  {
    slug: "nellipara",
    name: "BT Banana – Nellipara",
    place: "Nellipara, Alakode, Kerala",
    description:
      "Our Nellipara branch supplies wholesale bananas and banana suckers (Vazhavithu) to traders, retailers, chips manufacturers, and farmers in and around Nellipara.",
    mapQuery: "Nellipara, Alakode, Kannur, Kerala",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Nellipara+Alakode+Kannur+Kerala",
  },
];

/** Formats a 10-digit Indian mobile number for tel: links. */
export function telHref(phone: string): string {
  return `tel:+91${phone}`;
}

export function formatPhone(phone: string): string {
  return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
}

/** Builds a wa.me link. Message is optional prefilled enquiry text. */
export function whatsappHref(phone: string, message?: string): string {
  const base = `https://wa.me/91${phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const primaryPhone = owners[0].phone;
export const primaryWhatsApp =
  owners.find((o) => o.name.includes("Albin"))?.phone ?? owners[1].phone;

export const defaultEnquiryMessage =
  "Hi BT Banana, I'd like to enquire about wholesale bananas in Kannur.";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/wholesale-bananas", label: "Wholesale Bananas" },
  { href: "/banana-seeds", label: "Vazhavithu / Banana Suckers", short: "Vazhavithu" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/ml", label: "മലയാളം" },
  { href: "/card", label: "Digital Card" },
];

export const coveredAreas = {
  districts: ["Kannur", "Kasaragod", "Wayanad"],
  localities: [
    "Alakode",
    "Nellipara",
    "Kappimala",
    "Ottathai",
    "Arangam",
    "Karthikapuram",
    "Manakkadavu",
    "Udayagiri",
    "Cherupuzha",
    "Chittarikkal",
    "Bheemanady",
    "Vellarikundu",
    "Parappa",
    "Nileshwaram",
    "Thaliparamba",
    "Kalpetta",
    "Mananthavady",
    "Sulthan Bathery",
  ],
};
