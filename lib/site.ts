export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://btbanana.in";

export const SITE_NAME = "BT Banana";

export const SITE_TAGLINE = "Wholesale Bananas & Banana Seeds in Kerala";

export const SITE_DESCRIPTION =
  "BT Banana supplies wholesale bananas and banana seeds (Vazhavithu) at reasonable prices from our Alakode and Nellipara branches in Kerala, serving farmers, traders, retailers, and other customers.";

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
  /** Google Maps URL — only set when an actual verified link is available. */
  mapsUrl?: string;
};

export const branches: Branch[] = [
  {
    slug: "alakode",
    name: "BT Banana – Alakode",
    place: "Alakode, Kerala",
    description:
      "Our Alakode branch supplies wholesale bananas and banana seeds (Vazhavithu) to farmers, traders, retailers, and other customers in and around Alakode.",
  },
  {
    slug: "nellipara",
    name: "BT Banana – Nellipara",
    place: "Nellipara, Kerala",
    description:
      "Our Nellipara branch supplies wholesale bananas and banana seeds (Vazhavithu) to farmers, traders, retailers, and other customers in and around Nellipara.",
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
  "Hi BT Banana, I'd like to enquire about wholesale bananas / banana seeds.";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/banana-seeds", label: "Banana Seeds" },
  { href: "/wholesale-bananas", label: "Wholesale Bananas" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];
