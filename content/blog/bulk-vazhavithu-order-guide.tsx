import Link from "next/link";
import type { BlogFaq, BlogPostMeta } from "@/lib/blog";
import { KAU_SOURCE, suckerBasics, suckerVarieties } from "@/lib/suckers";
import {
  Callout,
  Checklist,
  QuickAnswer,
  QuoteCta,
  SourceNote,
} from "@/components/blog/BlogUi";

export const meta: BlogPostMeta = {
  slug: "bulk-vazhavithu-order-guide",
  title:
    "Ordering Vazhavithu in Bulk: How Many Suckers You Need, When to Book, and What to Check",
  metaTitle: "Bulk Vazhavithu Order Guide for Kerala",
  description:
    "How many banana suckers (vazhavithu) per cent and per acre, when to book for Kerala's planting seasons, and how to check a bulk delivery before planting.",
  excerpt:
    "A practical planner for Kerala growers buying banana suckers in bulk: quantities per cent and acre, the two planting windows, what a healthy consignment looks like, and what to send for a quote.",
  category: "Buying guide",
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  readingMinutes: 8,
  image: "/images/vazhavithu.webp",
  imageAlt:
    "A bulk consignment of Vazhavithu (banana suckers) with a young banana sapling, ready for planting in Kerala",
  keywords: [
    "bulk vazhavithu",
    "vazhavithu bulk order",
    "nendran vazhavithu",
    "banana suckers per acre",
    "nendran plants per cent",
    "banana suckers kerala",
    "vazhakannu",
    "വാഴവിത്ത്",
  ],
  toc: [
    { id: "how-many", label: "How many suckers you need" },
    { id: "when-to-book", label: "When to book" },
    { id: "which-variety", label: "Which variety to order" },
    { id: "what-to-check", label: "What to check on delivery" },
    { id: "price", label: "What decides the price" },
    { id: "how-to-order", label: "How to order from us" },
  ],
};

export const faqs: BlogFaq[] = [
  {
    question: "How many Nendran suckers do I need for one acre?",
    answer:
      "At KAU's recommended Nendran spacing of 2 m × 2 m you need about 1,000 suckers per acre (about 2,500 per hectare). Many growers order a small extra margin — for example 5% — to replace any suckers that fail to establish.",
  },
  {
    question: "How many banana plants fit in 10 cents of land?",
    answer:
      "About 100 Nendran plants at 2 m × 2 m spacing (roughly 10 plants per cent). Robusta at 2.4 m × 1.8 m works out to about 93 plants, and Palayankodan at 2.1 m × 2.1 m to about 91.",
  },
  {
    question: "When is the best time to plant banana suckers in Kerala?",
    answer:
      "Kerala Agricultural University gives two main windows: May–June and September–October. Avoid planting during heavy monsoon or severe summer, and time planting so bunches (which emerge about 7–8 months later) don't appear during hot, dry weather.",
  },
  {
    question: "How long can banana suckers be kept before planting?",
    answer:
      "KAU notes that treated suckers can be stored in shade for up to 15 days before planting. Keep them out of the sun and rain, and plant them as soon as your pits are ready.",
  },
  {
    question: "Do you sell tissue culture banana plants?",
    answer:
      "No. BT Banana supplies banana suckers (vazhavithu) only — sword suckers sourced from banana nurseries in Tamil Nadu and delivered across Kerala. We don't sell tissue culture plants.",
  },
  {
    question: "Do you deliver bulk vazhavithu to my district?",
    answer:
      "We deliver Vazhavithu to farms and nurseries in all 14 districts of Kerala, from Kasaragod to Thiruvananthapuram. Send your district and quantity on WhatsApp and we'll confirm delivery and today's rate.",
  },
];

const quoteMessage =
  "Hi BT Banana, I read your bulk Vazhavithu guide. I'd like a quote. Variety: ___, Quantity / land area: ___, District: ___, Planting month: ___";

/** Land sizes Kerala growers usually think in. 1 acre = 100 cents. */
const areas = [
  { label: "10 cents", cents: 10 },
  { label: "25 cents", cents: 25 },
  { label: "50 cents", cents: 50 },
  { label: "1 acre", cents: 100 },
  { label: "2 acres", cents: 200 },
  { label: "5 acres", cents: 500 },
];

const spacedVarieties = suckerVarieties.filter((v) => v.spacing);

function plantsFor(perHectare: number, cents: number) {
  // 1 hectare = 247.1 cents
  return Math.round((perHectare / 247.1) * cents);
}

export default function BulkVazhavithuOrderGuide() {
  const nendran = suckerVarieties.find((v) => v.slug === "nendran");
  const nendranAcre = nendran?.spacing ? plantsFor(nendran.spacing.perHectare, 100) : 1012;

  return (
    <>
      <QuickAnswer>
        For <strong>Nendran</strong> planted at KAU&apos;s spacing of 2 m × 2 m,
        you need about <strong>10 suckers per cent</strong>, or roughly{" "}
        <strong>{nendranAcre.toLocaleString("en-IN")} per acre</strong>. Plan
        your order around Kerala&apos;s two planting windows,{" "}
        <strong>May–June and September–October</strong>, and book before the
        rush. On delivery, check that every piece is a healthy sword sucker{" "}
        {suckerBasics.age}. Then send us the variety, quantity, district and
        planting month for a quote.
      </QuickAnswer>

      <p>
        Most people searching for <em>vazhavithu</em> or <em>vazhakannu</em>{" "}
        (വാഴവിത്ത് / വാഴക്കന്ന്) need more than a handful of plants. They
        are planning a plot, a plantation or a nursery batch. Buying hundreds
        or thousands of suckers at once raises questions a home gardener never
        has to think about. How many exactly? When should they arrive? And how
        do you know the consignment is healthy before it goes into the ground?
      </p>
      <p>
        This guide answers those questions using Kerala Agricultural University
        (KAU) recommendations, plus what we&apos;ve learned supplying suckers
        to growers across the state.
      </p>

      <h2 id="how-many">1. Work out how many suckers you need</h2>
      <p>
        The number of suckers depends on two things: your land area and the
        spacing recommended for the variety. Kerala land is usually measured in
        cents (100 cents = 1 acre), so here are KAU&apos;s spacings converted
        into plant counts for common plot sizes:
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Land area</th>
              {spacedVarieties.map((v) => (
                <th key={v.slug} scope="col">
                  {v.name}
                  <span className="block text-xs font-medium text-green-200">
                    {v.spacing!.metres}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {areas.map((a) => (
              <tr key={a.label}>
                <td className="font-semibold text-green-950">{a.label}</td>
                {spacedVarieties.map((v) => (
                  <td key={v.slug} className="tabular-nums">
                    ~{plantsFor(v.spacing!.perHectare, a.cents).toLocaleString("en-IN")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SourceNote>
        Spacing and plants-per-hectare figures from{" "}
        <a href={KAU_SOURCE.url} target="_blank" rel="noopener noreferrer">
          KAU
        </a>
        , converted at 1 hectare = 247.1 cents. KAU doesn&apos;t publish a
        separate spacing for Njali Poovan, so ask us for advice on your plot.
      </SourceNote>

      <h3>Add a small margin for gap filling</h3>
      <p>
        A few suckers in any planting may fail to establish. Many growers order
        a small extra margin (for example around 5%) so they can fill gaps
        within the first few weeks, while the replacement still keeps pace with
        the rest of the crop. For a one-acre Nendran plot, that means ordering
        roughly {Math.round(nendranAcre * 1.05).toLocaleString("en-IN")}{" "}
        instead of {nendranAcre.toLocaleString("en-IN")}.
      </p>

      <Callout title="Intercropping in a coconut garden?">
        You&apos;ll plant fewer bananas than in an open field, because the
        coconut palms take up space. Count the open spaces between the palms
        rather than the total area. KAU lists Robusta and Njali Poovan as
        suitable for coconut-garden intercropping. See the{" "}
        <Link href="/banana-seeds/njali-poovan">Njali Poovan</Link> and{" "}
        <Link href="/banana-seeds/robusta">Robusta</Link> pages.
      </Callout>

      <h2 id="when-to-book">2. Book around Kerala&apos;s planting windows</h2>
      <p>
        KAU recommends planting banana suckers in{" "}
        <strong>May–June</strong> or <strong>September–October</strong>, and
        advises growers to avoid periods of heavy monsoon and severe summer.
        Those two windows are when demand for suckers, especially Nendran,
        peaks, so the earlier you confirm a bulk order, the easier it is to get
        the variety and quantity you want on the date you want.
      </p>
      <ul>
        <li>
          <strong>Work backwards from your harvest.</strong> According to KAU,
          bunches emerge about <strong>7–8 months after planting</strong>, and
          planting should be timed so this doesn&apos;t fall in hot, dry
          weather. If you&apos;re aiming for a festival market like Onam, plan
          your planting date first and order suckers to match it.
        </li>
        <li>
          <strong>Don&apos;t plant Nendran too late.</strong> A KAU field
          study at Ambalavayal found that July–October plantings gave similar
          bunch weights, while planting Nendran after October lengthened the
          crop duration.
        </li>
        <li>
          <strong>Have the pits ready before the suckers arrive.</strong> KAU
          recommends pits of {suckerBasics.pit}. Digging and liming pits
          ahead of delivery means a large consignment can go into the ground
          within days, not weeks.
        </li>
      </ul>

      <Callout title="Why 2027 planting may be busy" tone="amber">
        Nendran farmgate prices crossed ₹70/kg ahead of Onam 2026, a 12-year
        high, after many growers had left the crop because of poor returns (
        <a
          href="https://www.onmanorama.com/news/kerala/2026/08/24/banana-price-hike-kerala.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Onmanorama
        </a>
        ). High prices tend to bring growers back, so expect strong demand for
        Nendran suckers in the coming planting windows.
      </Callout>

      <h2 id="which-variety">3. Match the variety to your market</h2>
      <p>
        In a bulk order, the variety decides who will buy your harvest. A quick
        guide to the varieties we supply:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Variety</th>
              <th scope="col">Best for</th>
            </tr>
          </thead>
          <tbody>
            {suckerVarieties.map((v) => (
              <tr key={v.slug}>
                <td className="font-semibold">
                  <Link href={`/banana-seeds/${v.slug}`}>{v.name}</Link>
                  <span className="block text-xs font-medium text-neutral-500">
                    {v.malayalam}
                  </span>
                </td>
                <td>{v.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Nendran is the variety most Kerala growers ask us for. It serves the
        chips, cooking and festival markets. If you&apos;re unsure, tell us
        where you plan to sell and whether your plot is irrigated, and
        we&apos;ll suggest a variety. Our guide to{" "}
        <Link href="/blog/which-vazhavithu-to-plant">
          choosing the right vazhavithu
        </Link>{" "}
        compares the four varieties in detail.
      </p>

      <QuoteCta message={quoteMessage} />

      <h2 id="what-to-check">4. What a healthy bulk consignment looks like</h2>
      <p>
        With thousands of suckers, a small share of poor planting material can
        cost you a lot of bunches. KAU&apos;s advice is to plant{" "}
        <strong>disease-free sword suckers from healthy clumps</strong>. When
        the consignment arrives, check a sample from different bundles against
        this list:
      </p>
      <Checklist
        items={[
          <>
            <strong>Sword suckers, not water suckers.</strong> Sword suckers
            have narrow, sword-shaped leaves and a well-developed base. Broad-leaved
            water suckers don&apos;t grow into strong plants.
          </>,
          <>
            <strong>The right age and size.</strong> KAU recommends suckers{" "}
            {suckerBasics.age}, weighing {suckerBasics.weight} with a girth of{" "}
            {suckerBasics.girth}.
          </>,
          <>
            <strong>A clean corm.</strong> The base should be firm, with no
            rotting, tunnels or dark patches. When you pare the corm before
            planting, cut away any discoloured tissue.
          </>,
          <>
            <strong>Uniform size across the batch.</strong> Even-sized suckers
            grow and bunch at roughly the same time. That makes field work and
            harvesting easier.
          </>,
        ]}
      />

      <h3>Why disease-free matters: bunchy top</h3>
      <p>
        KAU notes that symptoms of <strong>bunchy top</strong>, a virus
        spread by banana aphids, appear when infected suckers are planted.
        Affected plants stay stunted and don&apos;t produce a bunch of
        commercial value. The first line of defence is planting suckers
        from healthy clumps, and removing any plant that shows symptoms.
      </p>

      <h3>On delivery day</h3>
      <ol>
        <li>
          <strong>Unload into shade</strong> and count the suckers against your
          order.
        </li>
        <li>
          <strong>Photograph anything damaged</strong> and report it to your
          supplier the same day, while the problem is easy to verify.
        </li>
        <li>
          <strong>Prepare the suckers for planting.</strong> For Nendran, KAU
          advises cutting the pseudostem back to 15–20 cm, removing old roots,
          smearing the corm with cow-dung slurry and ash, and drying it in the
          sun for about 3–4 days. Other varieties don&apos;t need the drying
          step. The full method is in our{" "}
          <Link href="/how-to-plant-banana-suckers">planting guide</Link>.
        </li>
        <li>
          <strong>Plant within about two weeks.</strong> KAU notes treated
          suckers can be kept in shade for up to 15 days.
        </li>
      </ol>

      <h2 id="price">5. What decides the price of bulk vazhavithu</h2>
      <p>
        There&apos;s no single &quot;vazhavithu vila&quot;. Sucker prices move
        with the season, and a bulk quote depends on:
      </p>
      <ul>
        <li>
          <strong>Variety.</strong> Nendran is in the highest demand.
        </li>
        <li>
          <strong>Quantity.</strong> Larger orders are usually quoted at a
          better rate per sucker.
        </li>
        <li>
          <strong>Sucker size and grade.</strong> Larger, uniform sword suckers
          cost more than mixed or undersized stock.
        </li>
        <li>
          <strong>Timing.</strong> Demand peaks just before each planting
          window.
        </li>
        <li>
          <strong>Delivery distance</strong> within Kerala.
        </li>
      </ul>
      <p>
        As a public reference point, Kerala Agricultural University&apos;s{" "}
        <a
          href="https://accer.kau.in/sites/default/files/documents/price_list_seeds_and_planting_materials_2025-26_website.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          2025-26 planting-material price list
        </a>{" "}
        lists Nendran-group suckers at ₹20 each from its own farms. For a bulk
        order, it&apos;s always best to ask for a quote on the day, because
        rates change through the season.
      </p>
      <p>
        Comparing quotes? Compare like for like: the same variety, sucker size,
        quantity and delivery to your farm. A cheaper quote for smaller or
        mixed suckers often costs more later in gap filling and uneven growth.
      </p>

      <h2 id="how-to-order">6. How to order bulk vazhavithu from BT Banana</h2>
      <p>
        We source our Vazhavithu from established banana nurseries in the
        Tiruchirappalli (Trichy) belt of Tamil Nadu. We bring it into Kerala
        through our base in Alakode, Kannur, and deliver to farms and
        nurseries in{" "}
        <Link href="/banana-seeds">all 14 districts of Kerala</Link>. We supply
        suckers only. We don&apos;t sell tissue culture plants.
      </p>
      <ol>
        <li>
          <strong>Send us four details</strong> on WhatsApp or by phone:
          variety, quantity (or land area in cents/acres), your district or
          town, and the month you plan to plant.
        </li>
        <li>
          <strong>We confirm availability and today&apos;s rate</strong>,
          including delivery to your location.
        </li>
        <li>
          <strong>We agree a delivery date</strong> that fits your planting
          window, so your pits can be ready in time.
        </li>
        <li>
          <strong>Your suckers arrive</strong>, ready for you to check,
          treat and plant.
        </li>
      </ol>

      <QuoteCta title="Ready to plan your order?" message={quoteMessage} />
    </>
  );
}
