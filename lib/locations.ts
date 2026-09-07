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
  /** Custom H1 title tailored for this location */
  customH1?: string;
  /** One or two unique sentences introducing this location — never copy-pasted between pages */
  intro: string;
  /** A grounded sentence answering why buyers in X choose BT Banana for wholesale supply */
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
    customH1: "Wholesale Banana Shop in Alakode",
    intro:
      "Alakode is where BT Banana operates our primary wholesale depot. If you are looking for a wholesale banana shop, a banana wholesaler, or a direct supplier in Alakode — for fresh dessert bananas, cooking plantains (Nendran), or banana suckers (Vazhavithu) — our depot here is the first stop.",
    bestShopAnswer:
      "BT Banana is Alakode's dedicated wholesale banana and planting sucker supplier — we deal directly with local growers, regional traders, and retail shops from our Alakode depot, with reasonable, transparent pricing on every order.",
    faqs: [
      {
        question: "Where is BT Banana's shop in Alakode?",
        answer:
          "Our main depot is located on Malayora Highway in Alakode, Kannur district, Kerala. Call or WhatsApp us and we will share directions or dispatch details.",
      },
      {
        question: "Does BT Banana sell banana seeds (Vazhavithu) in Alakode?",
        answer:
          "Yes. High-quality banana suckers (locally known as Vazhavithu planting material) are available from our Alakode depot at wholesale rates, subject to seasonal availability.",
      },
      {
        question: "Is BT Banana a wholesale banana supplier in Alakode?",
        answer:
          "Yes, wholesale bulk supply is our core business in Alakode. We supply traders, retail fruit stalls, catering operators, and chips makers with consistent daily volumes.",
      },
      {
        question: "Where can I buy fresh wholesale bananas in Alakode?",
        answer:
          "BT Banana's Alakode depot supplies freshly harvested, farm-graded banana varieties in bulk consignments directly to buyers across Alakode and surrounding taluks.",
      },
    ],
  },
  {
    slug: "nellipara",
    name: "Nellipara",
    region: "Alakode, Kannur District",
    kind: "branch",
    nearestBranchSlug: "nellipara",
    customH1: "Wholesale Banana Shop in Nellipara",
    intro:
      "Nellipara is home to our second physical branch, located on the Malayora Highway corridor near Alakode. It gives commercial buyers and growers a dedicated wholesale banana shop for fresh fruit and planting suckers without needing to travel into main Alakode town.",
    bestShopAnswer:
      "For retail merchants and farmers around Nellipara, BT Banana's Nellipara branch provides direct wholesale access to freshly harvested bananas and vegetative banana suckers (Vazhavithu) at fair wholesale rates.",
    faqs: [
      {
        question: "Where is BT Banana's branch in Nellipara?",
        answer:
          "Our Nellipara branch is located on Malayora Highway in Nellipara, Alakode, Kannur district, Kerala. Contact us directly for exact location coordinates.",
      },
      {
        question: "Can I buy banana seeds (Vazhavithu) from the Nellipara branch?",
        answer:
          "Yes, our Nellipara branch stocks healthy banana planting suckers (Vazhavithu) alongside commercial wholesale bananas, based on current stock.",
      },
      {
        question: "Does the Nellipara branch supply wholesale quantities?",
        answer:
          "Yes. Both our Alakode and Nellipara branches specialize in wholesale consignments for fruit stalls, supermarkets, bakeries, caterers, and farmers.",
      },
      {
        question: "Is there a banana wholesaler near Nellipara?",
        answer:
          "Yes — BT Banana's Nellipara branch is an active wholesale banana depot supplying fresh produce and planting stock to customers across the Nellipara-Alakode belt.",
      },
    ],
  },
  {
    slug: "kannur",
    name: "Kannur",
    region: "Kannur District",
    kind: "area",
    nearestBranchSlug: "alakode",
    customH1: "Wholesale Banana Supplier in Kannur",
    intro:
      "Kannur district is the primary hub of BT Banana's wholesale trading operations. With physical depots in Alakode and Nellipara, we serve commercial buyers, fruit merchants, catering companies, chips makers, and retail markets across Thaliparamba, Payyanur, Iritty, and Kannur city.",
    bestShopAnswer:
      "For wholesale banana consignments across Kannur, BT Banana operates strategically located depots in Alakode and Nellipara, supplying graded bananas and Vazhavithu planting material directly from local farm networks.",
    faqs: [
      {
        question: "Where can I find a reliable wholesale banana supplier in Kannur?",
        answer:
          "BT Banana operates wholesale banana and banana sucker (Vazhavithu) depots in Kannur district at Alakode and Nellipara. We supply bulk fresh bananas, raw cooking plantains, and planting material to traders, caterers, and retailers across Kannur at competitive wholesale rates.",
      },
      {
        question: "Do you supply banana seeds (Vazhavithu) anywhere in Kannur district?",
        answer:
          "Yes, banana planting suckers (Vazhavithu) are available from our depots, and we arrange bulk delivery or pickup coordination across Kannur district based on required batch sizes.",
      },
      {
        question: "Is BT Banana a registered banana merchant and wholesaler in Kannur?",
        answer:
          "Yes — BT Banana operates as a dedicated wholesale banana merchant with two physical depots in Kannur district, handling commercial quantities daily.",
      },
      {
        question: "Who is a dependable banana wholesaler and merchant in Kannur?",
        answer:
          "BT Banana is an established banana merchant based in Kannur district, supplying fresh bananas in bulk to traders and retailers from our Alakode and Nellipara depots. Call or WhatsApp Thomas M.J or Albin Augustine for daily wholesale quotations.",
      },
    ],
  },
  {
    slug: "kasaragod",
    name: "Kasaragod",
    region: "Kasaragod District",
    kind: "area",
    nearestBranchSlug: "alakode",
    customH1: "Wholesale Banana Supplier in Kasaragod",
    intro:
      "Our Alakode depot sits right on the Kannur–Kasaragod border corridor, making BT Banana a dependable wholesale banana supplier and merchant for traders, chips factories, and farmers across Kasaragod district, including Vellarikundu, Chittarikkal, Kanhangad, and Nileshwar.",
    bestShopAnswer:
      "BT Banana serves Kasaragod district from our Alakode facility located right along the border corridor, offering fast road logistics and transparent wholesale rates on bulk bananas and planting suckers.",
    faqs: [
      {
        question: "Which wholesale banana supplier serves Kasaragod district?",
        answer:
          "BT Banana, based along the Kannur–Kasaragod border corridor in Alakode, supplies wholesale bananas and planting suckers to merchants, retailers, and farmers across Kasaragod district, including Vellarikundu and nearby taluks.",
      },
      {
        question: "Can I get banana seeds (Vazhavithu) delivered to Kasaragod district?",
        answer:
          "Yes, banana suckers (Vazhavithu) can be collected from our Alakode depot or scheduled for bulk road delivery into Kasaragod agricultural belts depending on quantity.",
      },
      {
        question: "Is there a wholesale banana supplier near Kasaragod?",
        answer:
          "Yes — BT Banana's Alakode facility is situated on the Malayora Highway corridor, providing easy logistical access for Kasaragod buyers.",
      },
      {
        question: "Does BT Banana supply wholesale bananas to Kasaragod traders?",
        answer:
          "Yes — we routinely supply retail shops, weekly market vendors, and chips manufacturing units throughout southern and eastern Kasaragod.",
      },
    ],
  },
  {
    slug: "cherupuzha",
    name: "Cherupuzha",
    region: "Kannur District",
    kind: "area",
    nearestBranchSlug: "alakode",
    customH1: "Wholesale Banana Supplier serving Cherupuzha",
    intro:
      "Cherupuzha is one of the key commercial towns connected directly to our Alakode depot via the Malayora Highway. Retail fruit stalls, chips makers, and local agriculturalists in Cherupuzha rely on BT Banana for wholesale banana supply and planting material.",
    bestShopAnswer:
      "For retailers, chips makers, and farmers in Cherupuzha, BT Banana's Alakode depot is just minutes away on the Malayora Highway corridor, providing direct daily access to fresh wholesale bananas and Vazhavithu.",
    faqs: [
      {
        question: "Is there a wholesale banana supplier near Cherupuzha?",
        answer:
          "Yes — BT Banana's Alakode branch, just down the highway from Cherupuzha, supplies bulk bananas and planting suckers to merchants and farmers across the area.",
      },
      {
        question: "Do you supply banana seeds (Vazhavithu) in Cherupuzha?",
        answer:
          "Yes, healthy sword suckers (Vazhavithu) are available for Cherupuzha growers through our Alakode depot. Call ahead to check stock for your preferred variety.",
      },
      {
        question: "How can businesses in Cherupuzha source wholesale bananas in bulk?",
        answer:
          "BT Banana coordinates direct wholesale banana orders for traders, caterers, and retailers in and around Cherupuzha from our nearby Alakode branch via the Malayora Highway.",
      },
    ],
  },
  {
    slug: "thaliparamba",
    name: "Thaliparamba",
    region: "Kannur District",
    kind: "area",
    nearestBranchSlug: "alakode",
    customH1: "Wholesale Banana Supplier serving Thaliparamba",
    intro:
      "Thaliparamba is a major commercial trading hub in Kannur district. BT Banana acts as a wholesale supply partner for Thaliparamba's produce merchants, caterers, and supermarket chains, bridging hill-tract banana harvests with city retail demand.",
    bestShopAnswer:
      "For commercial buyers and traders in Thaliparamba, BT Banana supplies wholesale bananas and banana suckers (Vazhavithu) directly from our Alakode facility in Kannur district with transparent daily market rates.",
    faqs: [
      {
        question: "Is there a wholesale banana supplier near Thaliparamba?",
        answer:
          "Yes — BT Banana supplies wholesale consignments to traders, catering units, and retailers from Thaliparamba. Contact our team to schedule pickup or delivery.",
      },
      {
        question: "Can I buy banana seeds (Vazhavithu) for Thaliparamba farms?",
        answer:
          "Banana suckers (Vazhavithu) are stocked at our Alakode depot. Thaliparamba farmers can coordinate pickup or bulk farm dispatch directly.",
      },
      {
        question: "Where can traders near Thaliparamba source bulk bananas?",
        answer:
          "BT Banana is a direct wholesale banana and banana sucker supplier serving Thaliparamba from our nearby Alakode facility, offering reliable bulk consignments at competitive daily rates.",
      },
    ],
  },
  {
    slug: "vellarikundu",
    name: "Vellarikundu",
    region: "Kasaragod District",
    kind: "area",
    nearestBranchSlug: "alakode",
    customH1: "Wholesale Banana Supplier serving Vellarikundu",
    intro:
      "Vellarikundu sits in the fertile hill tracts of Kasaragod district, close to our Alakode depot. We supply fresh wholesale bananas, raw cooking plantains, and planting suckers to shops, caterers, and farmers throughout the Vellarikundu taluk.",
    bestShopAnswer:
      "For businesses and farmers around Vellarikundu, BT Banana's Alakode depot, located just across the Kannur–Kasaragod border, supplies bulk bananas and banana suckers (Vazhavithu) with convenient road access.",
    faqs: [
      {
        question: "Is there a wholesale banana supplier serving Vellarikundu?",
        answer:
          "Yes, BT Banana's Alakode depot supplies wholesale bananas to traders and fruit retailers in Vellarikundu. Contact us to discuss daily quantity and logistics.",
      },
      {
        question: "Can farmers in Vellarikundu purchase banana seeds (Vazhavithu)?",
        answer:
          "Yes, genuine vegetative banana suckers (Vazhavithu) are available from our Alakode facility for growers across Vellarikundu.",
      },
      {
        question: "Do you arrange transport or pickup for Vellarikundu orders?",
        answer:
          "Buyers can collect orders directly from our Alakode depot or coordinate transport arrangements for bulk consignments.",
      },
    ],
  },
  {
    slug: "udayagiri",
    name: "Udayagiri",
    region: "Near Alakode",
    kind: "area",
    nearestBranchSlug: "alakode",
    customH1: "Wholesale Banana Supplier serving Udayagiri",
    intro:
      "Udayagiri is a neighboring agrarian community in the Alakode foothills. Farmers, local shops, and catering contractors in Udayagiri regularly procure fresh wholesale bananas and planting suckers (Vazhavithu) from our Alakode depot.",
    bestShopAnswer:
      "For buyers and growers in Udayagiri, BT Banana's Alakode depot provides immediate local access to bulk banana consignments and genuine planting suckers.",
    faqs: [
      {
        question: "Is there a wholesale banana supplier near Udayagiri?",
        answer:
          "Yes, BT Banana's Alakode depot is conveniently located right next to Udayagiri, offering fresh wholesale bananas and planting stock.",
      },
      {
        question: "Can I source banana planting suckers near Udayagiri?",
        answer:
          "Yes, banana suckers (Vazhavithu) are available at our Alakode depot. Call ahead to confirm variety stock before visiting.",
      },
    ],
  },
  {
    slug: "manakkadavu",
    name: "Manakkadavu",
    region: "Near Alakode",
    kind: "area",
    nearestBranchSlug: "alakode",
    customH1: "Wholesale Banana Supplier serving Manakkadavu",
    intro:
      "Manakkadavu is situated right in our immediate service corridor near Alakode. We supply wholesale bananas and planting material directly to local retailers, caterers, and smallholders from our Alakode depot.",
    bestShopAnswer:
      "For retail vendors and growers in Manakkadavu, BT Banana's Alakode depot is the nearest dedicated wholesale banana merchant and Vazhavithu supplier.",
    faqs: [
      {
        question: "Where can Manakkadavu retailers buy wholesale bananas?",
        answer:
          "BT Banana's Alakode branch, minutes from Manakkadavu, supplies commercial banana consignments and planting material daily.",
      },
      {
        question: "Do you supply banana suckers (Vazhavithu) to Manakkadavu?",
        answer:
          "Yes, healthy planting suckers are available from our Alakode depot for local growers in Manakkadavu.",
      },
    ],
  },
  {
    slug: "karthikapuram",
    name: "Karthikapuram",
    region: "Near Alakode",
    kind: "area",
    nearestBranchSlug: "alakode",
    customH1: "Wholesale Banana Supplier serving Karthikapuram",
    intro:
      "Karthikapuram is situated close to our Alakode depot. Local grocery stores, festive caterers, and banana cultivators in Karthikapuram source their bulk bananas and planting suckers directly from BT Banana.",
    bestShopAnswer:
      "For wholesale banana requirements and Vazhavithu in Karthikapuram, BT Banana's Alakode depot offers fast local supply and transparent wholesale rates.",
    faqs: [
      {
        question: "Where can I source wholesale bananas near Karthikapuram?",
        answer:
          "BT Banana's Alakode depot serves Karthikapuram with fresh wholesale bananas, raw cooking plantains, and planting suckers.",
      },
      {
        question: "Can I buy banana seeds (Vazhavithu) near Karthikapuram?",
        answer:
          "Yes, banana planting suckers are regularly stocked at our Alakode depot — contact us to verify variety availability.",
      },
    ],
  },
  {
    slug: "chittarikkal",
    name: "Chittarikkal",
    region: "Kasaragod District",
    kind: "area",
    nearestBranchSlug: "alakode",
    customH1: "Wholesale Banana Supplier serving Chittarikkal",
    intro:
      "Chittarikkal, situated in the eastern hill tracts of Kasaragod district close to Cherupuzha and Alakode, is an active farming and trading zone. BT Banana supplies fresh wholesale bananas, raw Nendran for chips, and certified banana planting material (Vazhavithu) to farmers and merchants across Chittarikkal, Bheemanady, and Parappa.",
    bestShopAnswer:
      "Searching for a dependable banana wholesaler near Chittarikkal? BT Banana serves Chittarikkal farmers and retailers directly from our Alakode facility with transparent rates and fast road logistics.",
    faqs: [
      {
        question: "Is there a wholesale banana supplier serving Chittarikkal?",
        answer:
          "Yes, BT Banana regularly supplies wholesale bananas, raw cooking plantains, and chips bananas to retailers, catering units, and merchants in Chittarikkal directly from our Alakode branch.",
      },
      {
        question: "Can I buy banana seeds (Vazhavithu) in Chittarikkal?",
        answer:
          "Yes. We supply high-yield banana planting suckers (Vazhavithu) including Nendran, Njali Poovan, and Mysore Poovan for farmers across Chittarikkal and surrounding Kasaragod hill areas.",
      },
      {
        question: "How does BT Banana handle delivery or pickup to Chittarikkal?",
        answer:
          "Chittarikkal is a short drive from our Alakode branch via Cherupuzha. Customers can collect orders directly from our depot or arrange bulk transport for larger commercial quantities.",
      },
      {
        question: "Do you supply raw bananas for chips makers in Chittarikkal?",
        answer:
          "Yes, we supply premium grade raw green Nendran (Pacha Ethakka) with high starch content specifically suited for local hot chips shops and bakeries.",
      },
    ],
  },
  {
    slug: "wayanad",
    name: "Wayanad",
    region: "Wayanad District",
    kind: "area",
    nearestBranchSlug: "alakode",
    customH1: "Wholesale Banana Supplier in Wayanad",
    intro:
      "Wayanad is one of Kerala's foremost banana cultivation heartlands, where commercial planters and smallholders require reliable bulk trading partners and healthy banana planting suckers. BT Banana bridges the Kannur–Wayanad agricultural belt, supplying high-quality banana seeds (Vazhavithu) and wholesale produce to growers, traders, and cooperatives across Mananthavady, Kalpetta, and Sulthan Bathery.",
    bestShopAnswer:
      "For banana growers and wholesale produce buyers in Wayanad, BT Banana provides dependable supply of high-grade Vazhavithu planting material and wholesale banana trade links from our North Kerala hubs.",
    faqs: [
      {
        question: "Does BT Banana supply banana planting material (Vazhavithu) to Wayanad?",
        answer:
          "Yes, we supply genuine banana suckers and planting stock (Vazhavithu) for commercial banana plantations in Wayanad, including Nendran, Njali Poovan, and Robusta varieties.",
      },
      {
        question: "How can farmers in Wayanad source bulk Vazhavithu from BT Banana?",
        answer:
          "Farmers and plantation managers can call or WhatsApp Thomas M.J or Albin Augustine directly to discuss required variety counts, booking schedules, and pickup or freight logistics to Wayanad.",
      },
      {
        question: "Can traders in Wayanad buy wholesale bananas from BT Banana?",
        answer:
          "Yes, we coordinate bulk wholesale consignments of fresh bananas and raw plantains for merchants and distributors connecting the Malabar market corridors.",
      },
      {
        question: "What banana varieties are most requested by Wayanad growers?",
        answer:
          "Nendran (Ethakka) and sweet dessert varieties like Njali Poovan and Palayankodan are the most requested varieties for cultivation and wholesale distribution.",
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
