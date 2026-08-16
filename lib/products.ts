export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  suitableFor: string;
  category: "banana" | "seed";
  image?: string;
  imageAlt?: string;
  /** Optional link to a dedicated detail page for this product */
  detailHref?: string;
};

/**
 * Product catalog. Add new entries here to extend /products, the homepage
 * overview, and JSON-LD without touching page markup.
 */
export const products: Product[] = [
  {
    slug: "wholesale-bananas",
    name: "Wholesale Bananas",
    shortDescription:
      "Different varieties of bananas supplied in bulk at reasonable wholesale prices.",
    description:
      "BT Banana supplies bananas in bulk quantities to traders, retailers, and other businesses. We deal in different banana varieties and offer reasonable wholesale pricing, with supply available from our Alakode and Nellipara branches.",
    suitableFor: "Traders, retailers, and businesses buying in bulk",
    category: "banana",
    image: "/images/wholesale.png",
    imageAlt: "Wholesale bananas supplied in bulk by BT Banana",
  },
  {
    slug: "banana-seeds-vazhavithu",
    name: "Banana Seeds / Vazhavithu",
    shortDescription:
      "Banana planting material (Vazhavithu) supplied at reasonable prices for cultivation.",
    description:
      "We supply banana seeds, known locally as Vazhavithu (വാഴവിത്ത്), which are used by farmers as planting material to grow their own banana crops. Available at reasonable wholesale prices from both our branches.",
    suitableFor: "Farmers and growers looking for banana planting material",
    category: "seed",
    image: "/images/vazhavithu.png",
    imageAlt: "Freshly harvested banana seeds / Vazhavithu planting material with a young banana sapling",
  },
  {
    slug: "nendran-banana",
    name: "Nendran Banana",
    shortDescription:
      "Nendran banana, Kerala's most popular variety, supplied wholesale by our banana wholesaler branches in Alakode and Nellipara.",
    description:
      "Nendran banana is the main variety we supply wholesale — it's the most widely cultivated banana in Kerala, used for everyday cooking, chips, and traditional dishes. Enquire for current availability and wholesale pricing.",
    suitableFor: "Traders, retailers, and households buying in bulk",
    category: "banana",
    image: "/images/nendran.png",
    imageAlt:
      "Nendran bananas, Kerala's most widely used variety, supplied wholesale by BT Banana, Alakode",
    detailHref: "/products/nendran-banana",
  },
  {
    slug: "palayankodan-banana",
    name: "Palayankodan Banana",
    shortDescription:
      "Palayankodan banana, a popular Kerala table variety, supplied wholesale from Alakode and Nellipara.",
    description:
      "Palayankodan is a well-known Kerala dessert banana, popular for daily eating and traditional offerings. We supply it wholesale from our Alakode and Nellipara branches, subject to seasonal availability.",
    suitableFor: "Traders, retailers, and households buying in bulk",
    category: "banana",
    image: "/images/banana-plant-terrace.jpg",
    imageAlt:
      "Banana plants growing in Kerala — BT Banana supplies Palayankodan banana wholesale",
    detailHref: "/products/palayankodan-banana",
  },
  {
    slug: "robusta-banana",
    name: "Robusta Banana",
    shortDescription:
      "Robusta banana, a widely grown commercial variety, supplied wholesale from Alakode and Nellipara.",
    description:
      "Robusta is a widely cultivated commercial banana variety valued for good yield and steady availability. We supply Robusta banana wholesale from our Alakode and Nellipara branches, subject to season.",
    suitableFor: "Traders, retailers, and businesses buying in bulk",
    category: "banana",
    image: "/images/hero-banana-bunch.jpg",
    imageAlt:
      "Fresh banana bunch supplied wholesale by BT Banana — Robusta banana variety, Kerala",
    detailHref: "/products/robusta-banana",
  },
  {
    slug: "poovan-banana",
    name: "Poovan Banana",
    shortDescription:
      "Poovan banana, a popular aromatic South Indian variety, supplied wholesale from Alakode and Nellipara.",
    description:
      "Poovan is a popular, aromatic dessert banana variety widely eaten across Kerala and South India. We supply Poovan banana wholesale from our Alakode and Nellipara branches, subject to seasonal availability.",
    suitableFor: "Traders, retailers, and households buying in bulk",
    category: "banana",
    image: "/images/banana-on-tree.jpg",
    imageAlt:
      "Bananas growing on the plant in Kerala — BT Banana supplies Poovan banana wholesale",
    detailHref: "/products/poovan-banana",
  },
  {
    slug: "plantain-varieties",
    name: "Plantain Varieties",
    shortDescription:
      "Plantain varieties supplied wholesale for cooking and trading purposes.",
    description:
      "Alongside dessert bananas, we supply plantain varieties in wholesale quantities. Availability depends on the season — enquire with us directly for current stock and pricing.",
    suitableFor: "Traders, retailers, and businesses buying in bulk",
    category: "banana",
    image: "/images/variety.png",
    imageAlt: "Different plantain varieties supplied wholesale by BT Banana",
  },
  {
    slug: "other-banana-varieties",
    name: "Other Banana Varieties",
    shortDescription:
      "Additional banana varieties beyond Nendran, Palayankodan, Robusta, and Poovan — enquire for details.",
    description:
      "Beyond Nendran, Palayankodan, Robusta, and Poovan, we deal in other banana and plantain varieties depending on season and availability. Contact us directly to check what is currently in stock.",
    suitableFor: "Farmers, traders, retailers, and other customers",
    category: "banana",
    image: "/images/banana-fruit-inflorescence.jpg",
    imageAlt: "Banana fruit and flower on the plant",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
