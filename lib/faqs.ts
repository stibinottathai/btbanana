import { BT_MEANING } from "@/lib/site";
import type { FaqItem } from "@/components/Faq";

export type FaqGroup = {
  id: string;
  title: string;
  items: FaqItem[];
};

/**
 * Site-wide FAQ bank for /faq. Each answer's first sentence answers the
 * question on its own (answer engines quote that sentence), then adds detail.
 * Agronomy follows Kerala Agricultural University (KAU) guidance.
 */
export const faqGroups: FaqGroup[] = [
  {
    id: "basics",
    title: "Vazhavithu basics",
    items: [
      {
        question: "Do bananas have seeds? Can I grow bananas from seeds?",
        answer:
          "No — the bananas grown in Kerala (Nendran, Robusta, Njali Poovan, Palayankodan) have no usable seeds, so they can't be grown from seed. Farmers plant suckers instead: young side shoots that grow from the base of a mother plant. When people search for \"banana seeds\", suckers are what they need.",
      },
      {
        question: "What is vazhavithu?",
        answer:
          "Vazhavithu (വാഴവിത്ത്) is the Malayalam word for banana planting material — the suckers farmers plant to start a new banana crop. It's also called vazhakannu (വാഴക്കന്ന്). BT Banana supplies vazhavithu across Kerala.",
      },
      {
        question: "What is a sword sucker vs a water sucker? Which should I plant?",
        answer:
          "Plant sword suckers. They have narrow, sword-shaped leaves and a well-developed base. Water suckers have broad leaves and a weak base; KAU advises against planting them because they don't grow into healthy clumps. Malayalam names for sword suckers include peeli kann and vaal kann.",
      },
      {
        question: "How do I choose a good banana sucker?",
        answer:
          "Choose a sword sucker 3–4 months old, weighing about 700–1,000 g at the base, with a girth of 35–45 cm (KAU). It should come from a healthy plant that produced good bunches and shows no pests or disease.",
      },
    ],
  },
  {
    id: "planting",
    title: "Planting",
    items: [
      {
        question: "How should I treat banana suckers before planting?",
        answer:
          "Trim off old roots, large side buds and damaged parts. For Nendran, KAU also advises cutting the pseudostem back to 15–20 cm, smearing the corm with cow-dung slurry and ash, and drying it in the sun for 3–4 days; other varieties don't need drying. See our planting guide for the full steps.",
      },
      {
        question: "What pit size and spacing should I use?",
        answer:
          "KAU recommends pits of 50 × 50 × 50 cm. Spacing depends on the variety: 2 m × 2 m for Nendran, 2.1 m × 2.1 m for Palayankodan and Poovan types, and 2.4 m × 1.8 m for Robusta.",
      },
      {
        question: "How many banana plants per acre or per cent?",
        answer:
          "At KAU's 2 m × 2 m spacing, Nendran needs about 2,500 plants per hectare — roughly 1,000 per acre or 10 per cent. Robusta (2.4 m × 1.8 m) works out to about 935 per acre and Palayankodan (2.1 m × 2.1 m) about 915 per acre.",
      },
      {
        question: "When is the best time to plant Nendran in Kerala?",
        answer:
          "[TODO: owner to confirm the planting months you recommend, e.g. for the Onam crop.] Book suckers well ahead of pre-monsoon and Onam planting, when demand is highest.",
      },
      {
        question: "How long until harvest?",
        answer:
          "KAU says dwarf bananas are usually ready 11–14 months after planting and tall varieties 14–16 months. Once the bunch appears, it typically takes 90–120 days to mature.",
      },
      {
        question: "Which banana variety is best for Kerala?",
        answer:
          "It depends on your goal: Nendran for cooking, chips and the biggest market; Robusta for heavy table-fruit bunches; Njali Poovan for sweet fruit and coconut-garden intercropping; Palayankodan for hardy, low-maintenance and rainfed plots.",
      },
    ],
  },
  {
    id: "ordering",
    title: "Ordering, price & delivery",
    items: [
      {
        question: "What is the price of Nendran vazhavithu?",
        answer:
          "Vazhavithu is priced per sucker and depends on variety, quantity and delivery district. Current Nendran rate: [TODO: owner to confirm]. Call or WhatsApp for today's quote.",
      },
      {
        question: "What is the minimum order? Is there a bulk discount?",
        answer:
          "Minimum order: [TODO: owner to confirm]. Larger orders for plantations, nurseries and farmer groups get volume pricing on enquiry.",
      },
      {
        question: "Do you deliver to my district?",
        answer:
          "Yes — BT Banana delivers vazhavithu to all 14 districts of Kerala, from Kasaragod to Thiruvananthapuram. Delivery charges and timing depend on quantity and distance: [TODO: owner to confirm].",
      },
      {
        question: "How do you pack and deliver suckers? How long do they stay fresh?",
        answer:
          "Suckers are packed to protect the corms during road transport. [TODO: owner to confirm packing method and how many days suckers keep before planting.] KAU notes that treated Nendran suckers can be kept in shade for up to 15 days before planting.",
      },
      {
        question: "Where can I buy banana suckers near me in Kerala?",
        answer:
          "BT Banana is based on the Malayora Highway in Alakode, Kannur, with a second branch at Nellipara, and delivers vazhavithu across Kerala. Call or WhatsApp to order.",
      },
    ],
  },
  {
    id: "about",
    title: "About BT Banana",
    items: [
      {
        question: "Do you sell tissue culture banana plants?",
        answer:
          "No. BT Banana supplies banana suckers (vazhavithu) only — we do not sell tissue culture plants. Our guide on suckers vs tissue culture explains when each makes sense.",
      },
      {
        question: "What does \"BT\" in BT Banana mean? Are your plants genetically modified?",
        answer: `No, our plants are not genetically modified. ${BT_MEANING}`,
      },
      {
        question: "Where do your suckers come from?",
        answer:
          "Our suckers are sourced from banana nurseries in the Tiruchirappalli (Trichy) area of Tamil Nadu and supplied across Kerala from our base in Alakode, Kannur.",
      },
    ],
  },
];
