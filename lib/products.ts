export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  suitableFor: string;
  category: "banana" | "seed";
  image?: string;
  imageAlt?: string;
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
    image: "/images/banana-on-tree.jpg",
    imageAlt: "Bunch of bananas growing on a banana tree, ready for wholesale supply",
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
      "Nendran banana, a popular variety widely used in Kerala cooking, supplied wholesale.",
    description:
      "Nendran banana is one of the banana varieties we supply wholesale. It is widely used in Kerala households and by traders for everyday cooking needs. Enquire for current availability and wholesale pricing.",
    suitableFor: "Traders, retailers, and households buying in bulk",
    category: "banana",
    image: "/images/nendran-banana.jpg",
    imageAlt: "Nendran bananas, a variety widely used in Kerala cooking",
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
    image: "/images/banana-plant-terrace.jpg",
    imageAlt: "Banana plant under terrace cultivation in Kerala",
  },
  {
    slug: "other-banana-varieties",
    name: "Other Banana Varieties",
    shortDescription:
      "Additional banana varieties supplied depending on availability — enquire for details.",
    description:
      "Beyond our main banana and plantain supply, we deal in other banana varieties depending on season and availability. Contact us directly to check what is currently in stock.",
    suitableFor: "Farmers, traders, retailers, and other customers",
    category: "banana",
    image: "/images/banana-fruit-inflorescence.jpg",
    imageAlt: "Banana fruit and flower on the plant",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
