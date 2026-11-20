import Link from "next/link";
import type { BlogFaq, BlogPostMeta } from "@/lib/blog";
import {
  KAU_SOURCE,
  KAU_SPACING_SOURCE,
  plantsPer,
  suckerBasics,
  suckerVarieties,
} from "@/lib/suckers";
import {
  Callout,
  Checklist,
  QuickAnswer,
  QuoteCta,
  SourceNote,
} from "@/components/blog/BlogUi";

export const meta: BlogPostMeta = {
  slug: "which-vazhavithu-to-plant",
  title:
    "Which Vazhavithu Should You Plant? Nendran, Robusta, Njali Poovan and Palayankodan Compared",
  metaTitle: "Which Vazhavithu to Plant? Kerala Variety Guide",
  description:
    "Nendran, Robusta, Njali Poovan or Palayankodan? How to choose the right vazhavithu (banana suckers) for your market, land and season in Kerala.",
  excerpt:
    "Choosing banana suckers for your plot? Here's how Kerala's four main varieties differ in market, spacing, care and season, and how to pick the one that fits your land.",
  category: "Growing guide",
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
  readingMinutes: 9,
  image: "/images/variety.webp",
  imageAlt:
    "Different Kerala banana varieties side by side, showing the fruit each type of vazhavithu (banana sucker) produces",
  keywords: [
    "which vazhavithu to plant",
    "best banana variety for kerala",
    "nendran vazhavithu",
    "robusta banana sucker",
    "njali poovan vazhakannu",
    "palayankodan vazhavithu",
    "banana suckers kerala",
    "വാഴവിത്ത്",
  ],
  toc: [
    { id: "at-a-glance", label: "The four varieties at a glance" },
    { id: "nendran", label: "Nendran" },
    { id: "robusta", label: "Robusta" },
    { id: "njali-poovan", label: "Njali Poovan" },
    { id: "palayankodan", label: "Palayankodan" },
    { id: "choose", label: "How to choose for your plot" },
    { id: "good-sucker", label: "Whatever you choose: a good sucker" },
  ],
};

export const faqs: BlogFaq[] = [
  {
    question: "Which banana variety is best for Kerala?",
    answer:
      "There is no single best variety; it depends on where you will sell. Nendran is the most widely grown in Kerala because it serves the cooking, chips and Onam markets. Robusta suits commercial table-banana plantations, Njali Poovan suits home gardens and coconut-garden intercropping, and Palayankodan suits rainfed, low-maintenance plots.",
  },
  {
    question: "Which vazhavithu is best for a coconut garden?",
    answer:
      "Kerala Agricultural University (KAU) lists Njali Poovan as particularly suitable for intercropping in coconut gardens, and Robusta as suitable too. Count the open spaces between palms, not the total land area, when working out how many suckers you need.",
  },
  {
    question: "Which banana variety needs the least care?",
    answer:
      "Palayankodan (Mysore Poovan) is the hardiest of the four and does well with little care. For a rainfed crop, KAU suggests planting it in January and pot-watering each plant until the rains arrive.",
  },
  {
    question: "Do all banana suckers need to be dried before planting?",
    answer:
      "No. KAU advises sun-drying only Nendran suckers, for about 3–4 days after treating the corm. Robusta, Njali Poovan and Palayankodan suckers are trimmed and planted without the drying step.",
  },
  {
    question: "Are vazhavithu and banana seeds the same thing?",
    answer:
      "In everyday Kerala usage, yes. People search for 'banana seeds', but edible bananas are grown from suckers (vazhavithu or vazhakannu), the young shoots that grow from the base of a parent plant, not from true seeds.",
  },
  {
    question: "Can I plant more than one variety in the same plot?",
    answer:
      "Yes, but plant each variety in its own block. Each variety has its own spacing, treatment and crop duration, and keeping them apart makes watering, manuring and harvesting much simpler.",
  },
];

const quoteMessage =
  "Hi BT Banana, I read your guide on choosing vazhavithu. I need help picking a variety. Land area: ___, District: ___, Irrigated or rainfed: ___, Where I plan to sell: ___";

const bySlug = Object.fromEntries(suckerVarieties.map((v) => [v.slug, v]));

function SpacingLine({ slug }: { slug: string }) {
  const v = bySlug[slug];
  if (!v?.spacing) return null;
  const per = plantsPer(v.spacing.perHectare);
  return (
    <>
      KAU recommends <strong>{v.spacing.metres}</strong> spacing, about{" "}
      {v.spacing.perHectare.toLocaleString("en-IN")} plants per hectare. That
      works out to roughly {per.acre.toLocaleString("en-IN")} suckers per acre,
      or about {per.cent} per cent.
    </>
  );
}

export default function WhichVazhavithuToPlant() {
  return (
    <>
      <QuickAnswer>
        Plant <strong>Nendran</strong> if you want to sell for cooking, chips
        or the Onam market. Plant <strong>Robusta</strong> for a commercial
        table-banana crop, <strong>Njali Poovan</strong> for a home garden or
        under coconut palms, and <strong>Palayankodan</strong> for a rainfed
        plot that will get little attention. Decide where you will sell the
        bunches first, then pick the vazhavithu to match.
      </QuickAnswer>

      <p>
        Every banana plantation in Kerala starts with the same decision: which
        vazhavithu to put in the ground. Once the suckers are planted, the
        variety is fixed for the whole crop. It decides who will buy your
        bunches, how much space each plant needs, how you prepare the suckers,
        and how much looking after the plot will need.
      </p>
      <p>
        This guide compares the four varieties most Kerala growers ask us for:
        Nendran, Robusta, Njali Poovan and Palayankodan. The agronomy figures
        come from{" "}
        <a href={KAU_SOURCE.url} target="_blank" rel="noopener noreferrer">
          Kerala Agricultural University (KAU)
        </a>
        . The market notes come from supplying banana suckers to farms and
        nurseries across the state.
      </p>

      <Callout title="Vazhavithu, vazhakannu, banana seeds: same thing">
        Depending on where you are in Kerala, you&apos;ll hear planting
        material called <em>vazhavithu</em> (വാഴവിത്ത്), <em>vazhakannu</em>{" "}
        (വാഴക്കന്ന്) or <em>vazhathai</em>, and people often search for
        &quot;banana seeds&quot;. They all mean the same thing: suckers, the
        young shoots that grow from the base of a parent plant. Our{" "}
        <Link href="/banana-seeds">Vazhavithu page</Link> explains why bananas
        are grown from suckers rather than seeds.
      </Callout>

      <h2 id="at-a-glance">The four varieties at a glance</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Variety</th>
              <th scope="col">Best for</th>
              <th scope="col">KAU spacing</th>
              <th scope="col">Dry before planting?</th>
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
                <td className="whitespace-nowrap tabular-nums">
                  {v.spacing ? v.spacing.metres : "Ask us"}
                </td>
                <td>{v.slug === "nendran" ? "Yes, 3–4 days" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SourceNote>
        Spacing from{" "}
        <a href={KAU_SPACING_SOURCE.url} target="_blank" rel="noopener noreferrer">
          KAU
        </a>
        . KAU doesn&apos;t publish a separate spacing for Njali Poovan.
      </SourceNote>

      <h2 id="nendran">Nendran: Kerala&apos;s cooking and chips banana</h2>
      <p>
        Nendran (നേന്ത്രൻ), also called Ethakka, is the banana most Kerala
        growers plant, and the one buyers ask us for most. It is the banana
        behind Kerala&apos;s chips, cooked dishes and the Onam trade, so its
        market is large and well established. For a commercial grower, Nendran
        vazhavithu is usually the first option to consider.
      </p>
      <ul>
        <li>
          <strong>Spacing:</strong> <SpacingLine slug="nendran" />
        </li>
        <li>
          <strong>Preparing the suckers:</strong> {bySlug.nendran.treatment}
        </li>
        <li>
          <strong>Timing:</strong> KAU recommends planting in May–June or
          September–October. A KAU field study found that planting Nendran
          after October lengthened the crop duration, so don&apos;t leave it
          too late.
        </li>
      </ul>
      <p>
        Nendran prices also move a lot. Farmgate prices crossed ₹70/kg ahead
        of Onam 2026, a 12-year high (
        <a
          href="https://www.onmanorama.com/news/kerala/2026/08/24/banana-price-hike-kerala.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Onmanorama
        </a>
        ), after a season in which many growers had left the crop. If you plan
        to plant Nendran for the next season, book your suckers early, because
        demand peaks just before each planting window.
      </p>
      <p>
        More on sucker size and handling:{" "}
        <Link href="/banana-seeds/nendran">Nendran vazhavithu</Link>.
      </p>

      <h2 id="robusta">Robusta: a heavy-bunching table banana</h2>
      <p>
        Robusta (റോബസ്റ്റ) is a Cavendish-type dessert banana grown for the
        table-fruit market. Under good management, KAU lists Robusta yields of{" "}
        <strong>38–45 tonnes per hectare</strong>, which makes it a strong
        choice for growers selling ripe fruit in volume.
      </p>
      <ul>
        <li>
          <strong>Spacing:</strong> <SpacingLine slug="robusta" />
        </li>
        <li>
          <strong>Preparing the suckers:</strong> {bySlug.robusta.treatment}
        </li>
        <li>
          <strong>Coconut gardens:</strong> KAU lists Robusta among the
          varieties suitable for intercropping in coconut gardens.
        </li>
      </ul>
      <p>
        Choose Robusta if you have a buyer for ripe dessert bananas and can
        give the crop regular water and manure. More details:{" "}
        <Link href="/banana-seeds/robusta">Robusta banana suckers</Link>.
      </p>

      <h2 id="njali-poovan">Njali Poovan: small, sweet and garden-friendly</h2>
      <p>
        Njali Poovan (ഞാലിപ്പൂവൻ) is the small, sweet banana that many Kerala
        households grow at home. KAU notes it is{" "}
        <strong>particularly suitable for intercropping in coconut gardens</strong>
        , so it is a natural fit for the many Kerala farms where bananas share
        space with palms. It also sells as a premium table fruit.
      </p>
      <ul>
        <li>
          <strong>Spacing:</strong> KAU doesn&apos;t publish a separate figure
          for Njali Poovan. In a coconut garden, plant in the open spaces
          between palms. Tell us your layout and we&apos;ll suggest a number.
        </li>
        <li>
          <strong>Preparing the suckers:</strong> {bySlug["njali-poovan"].treatment}
        </li>
      </ul>
      <p>
        If you search for <em>njalipoovan vazhakannu</em> because you want a
        few plants for the house, or a few hundred for a coconut garden, this
        is the variety to look at. More details:{" "}
        <Link href="/banana-seeds/njali-poovan">Njali Poovan vazhavithu</Link>.
      </p>

      <h2 id="palayankodan">Palayankodan: the hardy, low-maintenance choice</h2>
      <p>
        Palayankodan (പാളയംകോടൻ), sold in many markets as Poovan or Mysore
        Poovan, is a hardy table banana that does well with little care. It is
        a good choice for land without reliable irrigation, or for growers who
        can&apos;t visit the plot often.
      </p>
      <ul>
        <li>
          <strong>Spacing:</strong> <SpacingLine slug="palayankodan" />
        </li>
        <li>
          <strong>Preparing the suckers:</strong>{" "}
          {bySlug.palayankodan.treatment}
        </li>
      </ul>
      <p>
        More details:{" "}
        <Link href="/banana-seeds/palayankodan">Palayankodan vazhavithu</Link>.
      </p>

      <QuoteCta title="Not sure which variety suits your land?" message={quoteMessage} />

      <h2 id="choose">How to choose the right vazhavithu for your plot</h2>
      <p>
        Answer these four questions in order. Most growers have their answer
        by the second one.
      </p>

      <h3>1. Where will you sell the bunches?</h3>
      <p>
        This matters more than anything else. If your buyers are chips makers,
        hotels, or traders supplying the Onam market, plant Nendran. If you
        sell ripe fruit to shops and wholesale markets, Robusta or Palayankodan
        fit better. If the crop is mainly for your household, with some for
        sale, Njali Poovan is the usual choice.
      </p>

      <h3>2. Is the land open or under coconut palms?</h3>
      <p>
        In an open field you can plant at full KAU spacing, and Nendran or
        Robusta make the most of the space. Under coconut palms, KAU points to
        Njali Poovan and Robusta.
      </p>

      <h3>3. Can you water the crop through the dry months?</h3>
      <p>
        Nendran and Robusta repay regular irrigation and manuring. If your plot
        depends on rain, Palayankodan is the safer pick. KAU suggests planting
        it in January and pot-watering until the monsoon arrives.
      </p>

      <h3>4. When do you want to harvest?</h3>
      <p>
        KAU says bunches emerge about <strong>7–8 months after planting</strong>
        , and recommends timing planting so this doesn&apos;t fall in hot, dry
        weather. Work backwards from your harvest month to your planting date,
        then order suckers for that date. Our{" "}
        <Link href="/blog/bulk-vazhavithu-order-guide">bulk order guide</Link>{" "}
        has a table of how many suckers each variety needs for plots from 10
        cents to 5 acres.
      </p>

      <Callout title="Growing more than one variety?" tone="amber">
        Many farms grow Nendran for income alongside a block of Njali Poovan or
        Palayankodan for the house. That works well, but keep each variety in
        its own block, because spacing, sucker treatment and crop duration all
        differ.
      </Callout>

      <h2 id="good-sucker">Whatever you choose, start with a good sucker</h2>
      <p>
        The best variety for your market won&apos;t perform if the planting
        material is weak or diseased. KAU&apos;s advice applies to every
        variety: plant <strong>disease-free sword suckers from healthy
        clumps</strong>.
      </p>
      <Checklist
        items={[
          <>
            <strong>Sword suckers, not water suckers.</strong> Look for narrow,
            sword-shaped leaves and a broad, well-developed base.
          </>,
          <>
            <strong>The right age and size:</strong> {suckerBasics.age},
            weighing {suckerBasics.weight}, with a girth of{" "}
            {suckerBasics.girth}.
          </>,
          <>
            <strong>A clean, firm corm</strong> with no rot, tunnels or dark
            patches.
          </>,
          <>
            <strong>Even size across the batch</strong>, so the plants grow and
            bunch at roughly the same time.
          </>,
        ]}
      />
      <p>
        Once the suckers arrive, our{" "}
        <Link href="/how-to-plant-banana-suckers">
          step-by-step planting guide
        </Link>{" "}
        covers pit size ({suckerBasics.pit}), liming, manuring and treatment.
        Weighing up suckers against lab-grown plants? Read{" "}
        <Link href="/sucker-vs-tissue-culture">
          banana suckers vs tissue culture
        </Link>
        .
      </p>

      <h2>Where to buy vazhavithu in Kerala</h2>
      <p>
        BT Banana supplies Nendran, Robusta, Njali Poovan and Palayankodan
        suckers, sourced from established banana nurseries in the Trichy belt
        of Tamil Nadu. We deliver them from our base in Alakode, Kannur, to
        farms and nurseries in all 14 districts of Kerala. We supply suckers
        only, not tissue culture plants. See{" "}
        <Link href="/banana-seeds">Vazhavithu for sale</Link> for varieties and
        delivery details, or send us your land area, district and planting
        month for a quote.
      </p>

      <QuoteCta title="Get help choosing and a quote" message={quoteMessage} />
    </>
  );
}
