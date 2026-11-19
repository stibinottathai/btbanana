/**
 * Banana sucker (Vazhavithu) varieties sold by BT Banana.
 *
 * Agronomy figures follow Kerala Agricultural University (KAU) recommendations
 * from celkau.in (spacing, pit size, sucker selection and treatment). Anything
 * the owner still has to confirm is marked [TODO: owner to confirm] and must be
 * filled in before the page goes live.
 *
 * BT Banana supplies suckers only — never describe any of these as tissue
 * culture plants.
 */

export const KAU_SOURCE = {
  name: "Kerala Agricultural University (KAU) — banana cultivation practices",
  url: "https://celkau.in/crops/fruits/banana/landplant.php",
};

export const KAU_SPACING_SOURCE = {
  name: "KAU — banana spacing and suckers per hectare",
  url: "https://celkau.in/crops/fruits/banana/seedspacing.php",
};

/** General KAU guidance that applies to every variety. */
export const suckerBasics = {
  age: "3–4 months old",
  weight: "about 700–1,000 g at the base",
  girth: "35–45 cm around the base",
  pit: "50 cm × 50 cm × 50 cm",
  lime: "about ½ kg of lime per pit",
  manure: "about 10 kg of compost, cattle manure or green leaves per plant",
};

export type SuckerVariety = {
  slug: string;
  name: string;
  malayalam: string;
  /** Other names people search with. Used once each in copy, never as a list dump. */
  alsoCalled: string[];
  h1: string;
  title: string;
  description: string;
  quickAnswer: string;
  bestFor: string;
  /** KAU spacing, or null when KAU gives no figure for this variety. */
  spacing: { metres: string; perHectare: number } | null;
  /** Variety-specific handling before planting (KAU). */
  treatment: string;
  notes: string[];
  image: string;
  imageAlt: string;
  /** Matching fruit page, if there is one, for a "buying the fruit instead?" link. */
  fruitHref?: string;
};

export const suckerVarieties: SuckerVariety[] = [
  {
    slug: "nendran",
    name: "Nendran",
    malayalam: "നേന്ത്രൻ",
    alsoCalled: ["Ethakka vazhavithu", "നേന്ത്രവാഴ കന്ന്"],
    h1: "Nendran Vazhavithu (Nendran Banana Suckers)",
    title: "Nendran Vazhavithu – Nendran Banana Suckers",
    description:
      "Nendran banana suckers (nendran vazhavithu) for planting, delivered across Kerala. Sucker size, price, spacing & planting tips. Order on WhatsApp.",
    quickAnswer:
      "Nendran vazhavithu are sword suckers of Kerala's main cooking and chips banana. BT Banana supplies Nendran suckers for planting and delivers them across Kerala. KAU recommends 2 m × 2 m spacing (about 2,500 plants per hectare) and drying Nendran suckers in the sun for 3–4 days before planting.",
    bestFor: "Commercial plantations, chips and cooking markets, Onam crop, home gardens",
    spacing: { metres: "2.0 m × 2.0 m", perHectare: 2500 },
    treatment:
      "Cut the pseudostem back to 15–20 cm above the corm and remove old roots and damaged parts. Smear the corm with cow-dung slurry and ash, dry it in the sun for about 3–4 days, and keep it in shade for up to 15 days before planting. In heavy rain, don't cut the suckers — waterlogged cut ends can rot.",
    notes: [
      "Nendran is the variety most Kerala farmers ask for, so book early before pre-monsoon and Onam planting.",
      "Unlike most varieties, KAU advises drying Nendran suckers before planting.",
    ],
    image: "/images/nendran.webp",
    imageAlt: "Nendran banana bunch — Nendran vazhavithu (banana suckers) supplied by BT Banana",
    fruitHref: "/products/nendran-banana",
  },
  {
    slug: "robusta",
    name: "Robusta",
    malayalam: "റോബസ്റ്റ",
    alsoCalled: ["Robusta vazhavithu"],
    h1: "Robusta Banana Suckers (Vazhavithu)",
    title: "Robusta Banana Suckers (Vazhavithu)",
    description:
      "Robusta banana suckers for planting, delivered across Kerala. Sucker size, price, spacing and planting tips. Call or WhatsApp to order.",
    quickAnswer:
      "Robusta banana suckers are planting material for a heavy-bunching Cavendish-type table banana. BT Banana supplies Robusta suckers and delivers them across Kerala. KAU recommends 2.4 m × 1.8 m spacing (about 2,310 plants per hectare) and lists Robusta among the varieties suited to intercropping in coconut gardens.",
    bestFor: "Commercial table-banana plantations, intercropping in coconut gardens",
    spacing: { metres: "2.4 m × 1.8 m", perHectare: 2310 },
    treatment:
      "Trim off old roots, large side buds and damaged parts. Unlike Nendran, Robusta suckers don't need to be dried before planting.",
    notes: [
      "KAU lists Robusta yields of 38–45 tonnes per hectare under good management.",
      "KAU notes Robusta is suitable for intercropping in coconut gardens.",
    ],
    image: "/images/robusta.webp",
    imageAlt: "Robusta banana bunch — Robusta banana suckers (vazhavithu) supplied by BT Banana",
    fruitHref: "/products/robusta-banana",
  },
  {
    slug: "njali-poovan",
    name: "Njali Poovan",
    malayalam: "ഞാലിപ്പൂവൻ",
    alsoCalled: ["Njalipoovan vazhakannu", "ഞാലിപ്പൂവൻ കന്ന്"],
    h1: "Njali Poovan Vazhavithu (ഞാലിപ്പൂവൻ Banana Suckers)",
    title: "Njali Poovan Vazhavithu – Banana Suckers",
    description:
      "Njali Poovan (ഞാലിപ്പൂവൻ) banana suckers for planting, delivered across Kerala. Price, spacing and planting tips. Call or WhatsApp to order.",
    quickAnswer:
      "Njali Poovan vazhavithu are sword suckers of Kerala's small, sweet table banana. BT Banana supplies Njali Poovan suckers and delivers them across Kerala. KAU lists Njali Poovan as particularly suitable for intercropping in coconut gardens, which makes it a popular home-garden choice.",
    bestFor: "Home gardens, coconut-garden intercropping, premium table-fruit markets",
    spacing: null,
    treatment:
      "Trim off old roots, large side buds and damaged parts. Unlike Nendran, Njali Poovan suckers don't need to be dried before planting.",
    notes: [
      "KAU notes Njali Poovan is particularly suitable for intercropping in coconut gardens.",
    ],
    image: "/images/njali.webp",
    imageAlt: "Njali Poovan bananas — Njali Poovan vazhavithu (banana suckers) supplied by BT Banana",
    fruitHref: "/products/njali-poovan-banana",
  },
  {
    slug: "palayankodan",
    name: "Palayankodan",
    malayalam: "പാളയംകോടൻ",
    alsoCalled: ["Mysore Poovan", "Poovan vazhavithu"],
    h1: "Palayankodan Vazhavithu (Mysore Poovan Suckers)",
    title: "Palayankodan Vazhavithu – Banana Suckers",
    description:
      "Palayankodan / Mysore Poovan banana suckers for planting, delivered across Kerala. Price, spacing and planting tips. Call or WhatsApp to order.",
    quickAnswer:
      "Palayankodan (Mysore Poovan) vazhavithu are sword suckers of a hardy table banana that does well with little care. BT Banana supplies Palayankodan suckers and delivers them across Kerala. KAU recommends 2.1 m × 2.1 m spacing (about 2,260 plants per hectare), and for rainfed crops suggests planting in January with pot irrigation until the rains.",
    bestFor: "Rainfed and low-maintenance plots, home gardens, intercropping",
    spacing: { metres: "2.1 m × 2.1 m", perHectare: 2260 },
    treatment:
      "Trim off old roots, large side buds and damaged parts. Unlike Nendran, Palayankodan suckers don't need to be dried before planting. For a rainfed crop planted in January, KAU suggests giving each plant about 9 litres of water once every 15 days until April–May.",
    notes: [
      "Often sold as Poovan or Mysore Poovan in Kerala markets. [TODO: owner to confirm whether you sell Poovan as a separate variety]",
    ],
    image: "/images/mysoor-poovan.webp",
    imageAlt: "Palayankodan (Mysore Poovan) bananas — Palayankodan vazhavithu supplied by BT Banana",
    fruitHref: "/products/palayankodan-banana",
  },
];

export function getSuckerVariety(slug: string): SuckerVariety | undefined {
  return suckerVarieties.find((v) => v.slug === slug);
}

/** Converts plants per hectare to per acre and per cent (1 ha = 2.471 acres = 247.1 cents). */
export function plantsPer(perHectare: number) {
  return {
    acre: Math.round(perHectare / 2.471),
    cent: Math.round((perHectare / 247.1) * 10) / 10,
  };
}
