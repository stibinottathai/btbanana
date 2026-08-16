import { branches } from "./site";

export type LocationFaq = {
  question: string;
  answer: string;
};

export type ServiceLocation = {
  slug: string;
  /** Display name, e.g. "Alakode" */
  name: string;
  /** Short label used in badges/breadcrumbs, e.g. "Kannur District" */
  region: string;
  /** "branch" = we have a physical branch here, "area" = we serve it from a nearby branch */
  kind: "branch" | "area";
  /** Slug of the branch (from lib/site.ts) that serves this location */
  nearestBranchSlug: "alakode" | "nellipara";
  /** One or two unique sentences introducing this location — never copy-pasted between pages */
  intro: string;
  /** A short sentence answering "is BT Banana the best banana shop in X" */
  bestShopAnswer: string;
  faqs: LocationFaq[];
};

export const serviceLocations: ServiceLocation[] = [
  {
    slug: "alakode",
    name: "Alakode",
    region: "Kannur District",
    kind: "branch",
    nearestBranchSlug: "alakode",
    intro:
      "Alakode is where BT Banana started, and it's still our main branch today. If you're looking for a banana shop in Alakode — for wholesale bananas, banana seeds (Vazhavithu), or both — our branch here is the first stop.",
    bestShopAnswer:
      "BT Banana is Alakode's dedicated wholesale banana and banana seed supplier — we deal directly with farmers, traders, and retailers from our Alakode branch, with reasonable, transparent pricing on every order.",
    faqs: [
      {
        question: "Where is BT Banana's shop in Alakode?",
        answer:
          "Our main branch is located in Alakode, Kannur district, Kerala. Call or WhatsApp us and we'll share directions, or use the map link on our Locations page.",
      },
      {
        question: "Does BT Banana sell banana seeds (Vazhavithu) in Alakode?",
        answer:
          "Yes. Banana seeds / Vazhavithu planting material are available from our Alakode branch at reasonable wholesale prices, subject to current stock — call ahead to check availability.",
      },
      {
        question: "Is BT Banana a wholesale banana supplier in Alakode?",
        answer:
          "Yes, wholesale bulk supply is our main business in Alakode. We supply traders, retailers, and other businesses that need consistent banana quantities, not just one-off small purchases.",
      },
    ],
  },
  {
    slug: "nellipara",
    name: "Nellipara",
    region: "Alakode, Kannur District",
    kind: "branch",
    nearestBranchSlug: "nellipara",
    intro:
      "Nellipara is home to our second branch, close to Alakode. It gives customers on this side of the area a nearer option for wholesale bananas and banana seeds without needing to travel into Alakode town.",
    bestShopAnswer:
      "For customers around Nellipara, BT Banana's Nellipara branch is the closest dedicated wholesale banana and banana seed (Vazhavithu) outlet — call ahead for the current stock and pricing.",
    faqs: [
      {
        question: "Where is BT Banana's branch in Nellipara?",
        answer:
          "Our Nellipara branch is in Nellipara, Alakode, Kannur district, Kerala. Contact us for exact directions or check the map on our Locations page.",
      },
      {
        question: "Can I buy banana seeds from the Nellipara branch?",
        answer:
          "Yes, our Nellipara branch stocks banana seeds / Vazhavithu alongside wholesale bananas, depending on current availability — call or WhatsApp to confirm before visiting.",
      },
      {
        question: "Does the Nellipara branch supply wholesale quantities?",
        answer:
          "Yes. Both our Alakode and Nellipara branches handle wholesale/bulk orders for traders, retailers, and farmers.",
      },
    ],
  },
  {
    slug: "kannur",
    name: "Kannur",
    region: "Kannur District",
    kind: "area",
    nearestBranchSlug: "alakode",
    intro:
      "Kannur district is home to both BT Banana branches — Alakode and Nellipara — so when someone searches for a banana shop or wholesale banana supplier in Kannur, they're usually looking for us. We serve customers across Kannur district, including Alakode, Thaliparamba, Cherupuzha, and the surrounding towns.",
    bestShopAnswer:
      "For a wholesale banana shop in Kannur, BT Banana is based right in the district — at Alakode and Nellipara — supplying bananas and banana seeds (Vazhavithu) to farmers, traders, and retailers across Kannur.",
    faqs: [
      {
        question: "Which is the best banana shop in Kannur for wholesale supply?",
        answer:
          "BT Banana is a wholesale banana and banana seed (Vazhavithu) supplier based in Kannur district, with branches in Alakode and Nellipara. We supply traders, retailers, and farmers across the district at reasonable prices.",
      },
      {
        question: "Do you supply banana seeds anywhere in Kannur district?",
        answer:
          "Yes, banana seeds / Vazhavithu are available from our Alakode and Nellipara branches, and we can discuss delivery to other parts of Kannur district depending on quantity — contact us to check.",
      },
      {
        question: "Is BT Banana a wholesale banana shop in Kannur?",
        answer:
          "Yes — wholesale bulk supply of bananas is our core business, run from our two branches in Kannur district.",
      },
    ],
  },
  {
    slug: "kasaragod",
    name: "Kasaragod",
    region: "Kasaragod District",
    kind: "area",
    nearestBranchSlug: "alakode",
    intro:
      "Our Alakode branch sits close to the Kannur–Kasaragod border, which is why BT Banana is a regular choice for customers across Kasaragod district too — including Vellarikundu and nearby towns — looking for wholesale bananas or banana seeds.",
    bestShopAnswer:
      "BT Banana serves Kasaragod district from our Alakode branch, just across the district border — a practical option for anyone searching for the best banana shop in Kasaragod for wholesale supply.",
    faqs: [
      {
        question: "Which banana shop serves Kasaragod district for wholesale supply?",
        answer:
          "BT Banana, based just over the district border in Alakode, Kannur, supplies wholesale bananas and banana seeds to customers across Kasaragod district, including Vellarikundu and nearby areas.",
      },
      {
        question: "Can I get banana seeds delivered to Kasaragod district?",
        answer:
          "Banana seeds / Vazhavithu are available from our Alakode branch. For delivery into Kasaragod district, contact us directly to discuss quantity and logistics.",
      },
      {
        question: "Is there a wholesale banana supplier near Kasaragod?",
        answer:
          "Yes — BT Banana's Alakode branch is close to the Kannur–Kasaragod border and regularly supplies wholesale bananas to customers in Kasaragod district.",
      },
    ],
  },
  {
    slug: "cherupuzha",
    name: "Cherupuzha",
    region: "Kannur District",
    kind: "area",
    nearestBranchSlug: "alakode",
    intro:
      "Cherupuzha is one of the key towns near our Alakode branch, and a regular source of enquiries for both wholesale bananas and banana seeds. Customers here typically deal with our Alakode branch directly.",
    bestShopAnswer:
      "For a banana shop in Cherupuzha, BT Banana's Alakode branch is the nearest dedicated wholesale banana and banana seed (Vazhavithu) supplier, with direct phone and WhatsApp contact.",
    faqs: [
      {
        question: "Is there a banana shop near Cherupuzha for wholesale supply?",
        answer:
          "Yes — BT Banana's Alakode branch, close to Cherupuzha, supplies wholesale bananas and banana seeds (Vazhavithu) to customers in and around the town.",
      },
      {
        question: "Do you supply banana seeds in Cherupuzha?",
        answer:
          "Yes, banana seeds / Vazhavithu are available for customers near Cherupuzha through our Alakode branch — call ahead to check current stock.",
      },
      {
        question: "What's the best banana shop in Cherupuzha for bulk orders?",
        answer:
          "BT Banana handles bulk/wholesale banana orders for traders and retailers near Cherupuzha from our nearby Alakode branch.",
      },
    ],
  },
  {
    slug: "thaliparamba",
    name: "Thaliparamba",
    region: "Kannur District",
    kind: "area",
    nearestBranchSlug: "alakode",
    intro:
      "Thaliparamba is a bigger town in Kannur district, and while it's a bit further from our branches than Alakode's immediate neighbourhood, we regularly supply wholesale bananas and banana seeds to traders and farmers who reach out from Thaliparamba and the surrounding area.",
    bestShopAnswer:
      "Searching for the best banana shop in Thaliparamba? BT Banana supplies wholesale bananas and banana seeds (Vazhavithu) to Thaliparamba customers from our Alakode branch in Kannur district — call or WhatsApp to check availability and delivery.",
    faqs: [
      {
        question: "Is there a wholesale banana supplier near Thaliparamba?",
        answer:
          "Yes — BT Banana, based in Alakode, Kannur district, supplies wholesale bananas to traders and retailers from Thaliparamba and the surrounding area. Contact us to discuss quantity and pickup or delivery.",
      },
      {
        question: "Can I buy banana seeds in Thaliparamba?",
        answer:
          "Banana seeds / Vazhavithu are stocked at our Alakode branch. For customers in Thaliparamba, contact us directly to arrange pickup or check delivery options.",
      },
      {
        question: "What is the best banana shop in Thaliparamba for bulk supply?",
        answer:
          "BT Banana is a wholesale banana and banana seed supplier serving Thaliparamba from our nearby Alakode branch, with reasonable pricing on bulk orders.",
      },
    ],
  },
  {
    slug: "vellarikundu",
    name: "Vellarikundu",
    region: "Kasaragod District",
    kind: "area",
    nearestBranchSlug: "alakode",
    intro:
      "Vellarikundu sits just across the district line in Kasaragod, close enough to our Alakode branch that we regularly supply wholesale bananas and banana seeds to shops and farmers in the area.",
    bestShopAnswer:
      "Looking for a wholesale banana shop in Vellarikundu? BT Banana's Alakode branch, just across the district border, supplies bulk bananas and banana seeds (Vazhavithu) to customers in and around Vellarikundu.",
    faqs: [
      {
        question: "Is there a wholesale banana shop in Vellarikundu?",
        answer:
          "BT Banana's Alakode branch, just over the Kannur–Kasaragod border, supplies wholesale bananas to traders and retailers in and around Vellarikundu. Contact us to discuss quantity and pricing.",
      },
      {
        question: "Are there banana shops in Vellarikundu selling banana seeds?",
        answer:
          "Banana seeds / Vazhavithu are available from our nearby Alakode branch, and we regularly supply customers from Vellarikundu — call ahead to check current stock.",
      },
      {
        question: "Do you deliver wholesale bananas to Vellarikundu?",
        answer:
          "We supply customers from Vellarikundu who reach out directly — contact us by phone or WhatsApp to discuss pickup or delivery for your order.",
      },
    ],
  },
  {
    slug: "udayagiri",
    name: "Udayagiri",
    region: "Near Alakode",
    kind: "area",
    nearestBranchSlug: "alakode",
    intro:
      "Udayagiri is one of the local areas near our Alakode branch. Farmers and small traders from Udayagiri regularly contact us for both wholesale bananas and banana seeds (Vazhavithu).",
    bestShopAnswer:
      "For a banana shop near Udayagiri, BT Banana's Alakode branch supplies wholesale bananas and banana seeds directly — reach out by phone or WhatsApp.",
    faqs: [
      {
        question: "Is there a banana shop near Udayagiri?",
        answer:
          "BT Banana's Alakode branch, close to Udayagiri, supplies wholesale bananas and banana seeds (Vazhavithu) to customers in the area.",
      },
      {
        question: "Can I get banana seeds near Udayagiri?",
        answer:
          "Yes, banana seeds / Vazhavithu are available from our nearby Alakode branch — call ahead to confirm current stock before visiting.",
      },
    ],
  },
  {
    slug: "manakkadavu",
    name: "Manakkadavu",
    region: "Near Alakode",
    kind: "area",
    nearestBranchSlug: "alakode",
    intro:
      "Manakkadavu (also spelled Manakadavu) is another locality close to our Alakode branch. We supply wholesale bananas and banana seeds to customers here directly from Alakode.",
    bestShopAnswer:
      "For a banana shop near Manakkadavu, BT Banana's Alakode branch is the closest dedicated wholesale banana and banana seed (Vazhavithu) supplier.",
    faqs: [
      {
        question: "Is there a banana shop in Manakkadavu (Manakadavu)?",
        answer:
          "BT Banana's Alakode branch, near Manakkadavu, supplies wholesale bananas and banana seeds (Vazhavithu) to customers in the area — call or WhatsApp us directly.",
      },
      {
        question: "Do you supply banana seeds to Manakkadavu?",
        answer:
          "Yes, banana seeds / Vazhavithu are available from our nearby Alakode branch for customers from Manakkadavu — check current stock by phone before visiting.",
      },
    ],
  },
  {
    slug: "karthikapuram",
    name: "Karthikapuram",
    region: "Near Alakode",
    kind: "area",
    nearestBranchSlug: "alakode",
    intro:
      "Karthikapuram is among the local areas we regularly serve from our Alakode branch, supplying wholesale bananas and banana seeds (Vazhavithu) to farmers and small traders nearby.",
    bestShopAnswer:
      "For a banana shop near Karthikapuram, BT Banana's Alakode branch supplies wholesale bananas and banana seeds directly — contact us by phone or WhatsApp.",
    faqs: [
      {
        question: "Is there a banana shop near Karthikapuram?",
        answer:
          "BT Banana's Alakode branch, close to Karthikapuram, supplies wholesale bananas and banana seeds (Vazhavithu) to customers in the area.",
      },
      {
        question: "Can I buy banana seeds near Karthikapuram?",
        answer:
          "Yes, banana seeds / Vazhavithu are stocked at our nearby Alakode branch — call ahead to confirm availability.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): ServiceLocation | undefined {
  return serviceLocations.find((location) => location.slug === slug);
}

export function getNearestBranch(location: ServiceLocation) {
  return branches.find((b) => b.slug === location.nearestBranchSlug) ?? branches[0];
}

export function getOtherLocations(slug: string, limit = 6): ServiceLocation[] {
  return serviceLocations.filter((l) => l.slug !== slug).slice(0, limit);
}
