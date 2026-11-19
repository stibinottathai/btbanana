# Bt Banana — Phase 3 Proposal: Architecture, On-page & Technical

**Date:** 2026-11-19 · **Status:** ⛔ draft for approval. No site code has been changed yet.
**Based on:** [discovery](2026-11-19-discovery.md), [keyword map](2026-11-19-keyword-map.csv), decision to keep `/banana-seeds` as the main Vazhavithu page.

Character counts are for the **rendered** title, including " | BT Banana" where the site template adds it. Limits: title ≤60, meta ≤155. Malayalam is counted in code points; Malayalam glyphs are wider, so Google may cut those titles a little earlier.

---

## 1. URL plan

**No existing URL is renamed or removed, so no redirects are needed.** The existing `/banana-for-chips` → `/products/nendran-banana` 301 stays as it is.

| URL | Status | Purpose |
|---|---|---|
| `/` | keep, retitle | Home: Vazhavithu first, wholesale second |
| `/banana-seeds` | keep, retitle, fix wording | Main Vazhavithu page (seeds hub + suckers + order) |
| `/banana-seeds/nendran` | **new** | Nendran sucker page |
| `/banana-seeds/robusta` | **new** | Robusta sucker page |
| `/banana-seeds/njali-poovan` | **new** | Njali Poovan sucker page |
| `/banana-seeds/palayankodan` | **new** | Palayankodan / Mysore Poovan sucker page |
| `/banana-seeds/price-list` | **new** | Sucker prices + "last updated". **Blocked until the owner gives prices (Q12).** |
| `/how-to-plant-banana-suckers` | **new** | Planting guide (HowTo schema), following KAU/NRCB advice |
| `/sucker-vs-tissue-culture` | **new** | Honest comparison guide. States clearly that we supply suckers only. |
| `/faq` | **new** | FAQ hub (FAQPage schema), including "What does BT mean?" and "Do you sell tissue culture?" |
| `/ml` | **new** | Malayalam home |
| `/ml/banana-seeds` | **new** | Malayalam Vazhavithu page |
| `/ml/banana-seeds/price-list` | **new** | Malayalam price list (blocked with the English one) |
| `/ml/faq` | **new** | Malayalam FAQ |
| `/ml/contact` | **new** | Malayalam contact |
| `/about`, `/contact`, `/locations`, `/products`, `/banana-prices` | keep, retitle | Fix length and "seed supplier" wording |
| `/wholesale-bananas`, `/banana-merchant-kannur`, `/products/*`, `/locations/*` | keep, unchanged (except the location title template) | Fruit wholesale. Out of scope for this brief. |

Not created, by design: `/banana-suckers` (your decision), `/varieties/*` (would compete with the fruit pages under `/products/*`), per-district Vazhavithu pages (doorway risk), and a separate `/delivery` page (delivery stays as a section on `/banana-seeds` until the owner confirms charges and timelines, Q14).

---

## 2. Titles & meta descriptions

### Changed pages
| Page | Current title (rendered) | **Proposed title** | Len | **Proposed meta description** | Len |
|---|---|---|---|---|---|
| `/` | Vazhavithu & Wholesale Banana Supplier in Kerala \| BT Banana | Vazhavithu (Banana Suckers) & Wholesale Bananas \| BT Banana | 59 | Banana suckers (vazhavithu / വാഴക്കന്ന്) delivered across Kerala, plus wholesale bananas in Kannur. Nendran, Robusta, Poovan & more. Call or WhatsApp. | 150 |
| `/banana-seeds` | Vazhavithu Supplier in Kerala — Bulk Banana Suckers from Tamil Nadu \| BT Banana (≈80) | Vazhavithu – Banana Suckers for Sale in Kerala \| BT Banana | 58 | Banana suckers (vazhavithu / vazhakannu) for planting. Nendran, Robusta, Njali Poovan & Palayankodan, delivered across Kerala. Order on WhatsApp. | 145 |
| `/about` | About Us \| Wholesale Banana & Seed Supplier in Kerala \| BT Banana | About BT Banana – Vazhavithu & Banana Wholesale, Kannur | 55 | BT Banana, Alakode, Kannur: banana suckers (vazhavithu) delivered across Kerala and wholesale bananas for North Kerala. What BT means and who we are. | 149 |
| `/contact` | Contact Us \| BT Banana | Contact – Vazhavithu & Wholesale Bananas \| BT Banana | 52 | Call or WhatsApp BT Banana in Alakode and Nellipara, Kannur, for banana suckers (vazhavithu) across Kerala and wholesale bananas. Map and directions. | 149 |
| `/locations` | Wholesale Banana Supply Locations — Kannur, Kasaragod & Wayanad \| BT Banana (≈76) | Banana Supply Locations in North Kerala \| BT Banana | 51 | BT Banana depots in Alakode and Nellipara supply wholesale bananas and raw Nendran across Kannur, Kasaragod and Wayanad, and vazhavithu statewide. | 146 |
| `/products` | Banana & Banana Seed Products \| BT Banana | Banana Varieties & Vazhavithu \| BT Banana | 41 | Banana varieties supplied by BT Banana: wholesale Nendran, Njali Poovan, Robusta and Palayankodan fruit, plus banana suckers (vazhavithu) for planting. | 151 |
| `/banana-prices` | Banana Wholesale Price in Kerala Today \| Daily Rate Guide \| BT Banana (≈68) | Banana Wholesale Price in Kerala Today \| BT Banana | 50 | *(meta unchanged; only the OG description loses "banana seed rates")* | — |
| `/locations/[slug]` (template) | Wholesale Banana Supplier in {Place}, Kerala \| BT Banana | Wholesale Banana Supplier in {Place} \| BT Banana | ≤54 | Wholesale bananas and raw Nendran for chips in {Place} from BT Banana's Alakode & Nellipara depots. Banana suckers (vazhavithu) too. Call for today's rate. | ≈150 |

### New English pages
| Page | H1 | Title | Len | Meta description | Len |
|---|---|---|---|---|---|
| `/banana-seeds/nendran` | Nendran Vazhavithu (Nendran Banana Suckers) | Nendran Vazhavithu – Nendran Banana Suckers \| BT Banana | 55 | Nendran banana suckers (nendran vazhavithu) for planting, delivered across Kerala. Sucker size, price, spacing & planting tips. Order on WhatsApp. | 146 |
| `/banana-seeds/robusta` | Robusta Banana Suckers (Vazhavithu) | Robusta Banana Suckers (Vazhavithu) \| BT Banana | 47 | Robusta banana suckers for planting, delivered across Kerala. Sucker size, price, spacing and planting tips. Call or WhatsApp to order. | 135 |
| `/banana-seeds/njali-poovan` | Njali Poovan Vazhavithu (ഞാലിപ്പൂവൻ Banana Suckers) | Njali Poovan Vazhavithu – Banana Suckers \| BT Banana | 52 | Njali Poovan (ഞാലിപ്പൂവൻ) banana suckers for planting, delivered across Kerala. Price, spacing and planting tips. Call or WhatsApp to order. | 140 |
| `/banana-seeds/palayankodan` | Palayankodan Vazhavithu (Mysore Poovan Suckers) | Palayankodan Vazhavithu – Banana Suckers \| BT Banana | 52 | Palayankodan / Mysore Poovan banana suckers for planting, delivered across Kerala. Price, spacing and planting tips. Call or WhatsApp to order. | 143 |
| `/banana-seeds/price-list` | Vazhavithu Price List (Banana Sucker Rates) | Vazhavithu Price List – Banana Sucker Rates \| BT Banana | 55 | Current vazhavithu (banana sucker) prices by variety, bulk rates and minimum order. Last updated [date]. Delivery across Kerala. Order on WhatsApp. | 147 |
| `/how-to-plant-banana-suckers` | How to Plant Banana Suckers (Vazhavithu): Step-by-Step | How to Plant Banana Suckers (Vazhavithu) \| BT Banana | 52 | Step-by-step guide to planting banana suckers: choosing sword suckers, treatment, pit size, spacing for Nendran, manure and watering. Based on KAU advice. | 154 |
| `/sucker-vs-tissue-culture` | Banana Sucker vs Tissue Culture: Which Should You Plant? | Banana Sucker vs Tissue Culture: Which to Plant? \| BT Banana | 60 | Suckers or tissue culture plants? An honest comparison of cost, availability and establishment, and when suckers (vazhavithu) are the better choice. | 148 |
| `/faq` | Vazhavithu & Banana Sucker FAQs | Vazhavithu & Banana Sucker FAQs \| BT Banana | 43 | Answers on banana suckers (vazhavithu): seeds vs suckers, choosing and treating suckers, price, spacing, delivery and what BT in BT Banana means. | 145 |

### New Malayalam pages (to be reviewed by a native speaker / the owner before publishing)
| Page | H1 | Title | Len | Meta description | Len |
|---|---|---|---|---|---|
| `/ml` | വാഴവിത്ത് – കേരളം മുഴുവൻ ഡെലിവറി | വാഴവിത്ത് – കേരളം മുഴുവൻ ഡെലിവറി \| BT Banana | 44 | വാഴവിത്ത് (വാഴക്കന്ന്) — നേന്ത്രൻ, റോബസ്റ്റ, ഞാലിപ്പൂവൻ, പാളയംകോടൻ. കേരളത്തിലെ എല്ലാ ജില്ലകളിലേക്കും ഡെലിവറി. വിളിക്കൂ അല്ലെങ്കിൽ WhatsApp ചെയ്യൂ. | 146 |
| `/ml/banana-seeds` | വാഴവിത്ത് / വാഴക്കന്ന് വിൽപ്പനയ്ക്ക് | വാഴവിത്ത് / വാഴക്കന്ന് വിൽപ്പനയ്ക്ക് \| BT Banana | 48 | നല്ലയിനം വാഴവിത്ത് (വാഴക്കന്ന്) — നേന്ത്രൻ, റോബസ്റ്റ, ഞാലിപ്പൂവൻ, പാളയംകോടൻ. വില, ഇനങ്ങൾ, ഡെലിവറി വിവരങ്ങൾ. WhatsApp വഴി ഓർഡർ ചെയ്യൂ. | 133 |
| `/ml/banana-seeds/price-list` | വാഴവിത്ത് വില | വാഴവിത്ത് വില – ഇനം തിരിച്ചുള്ള നിരക്ക് \| BT Banana | 51 | നേന്ത്രൻ ഉൾപ്പെടെ ഓരോ ഇനം വാഴവിത്തിന്റെയും ഇപ്പോഴത്തെ വില, ബൾക്ക് നിരക്ക്, കുറഞ്ഞ ഓർഡർ. അവസാനം പുതുക്കിയത്: [തീയതി]. | 116 |
| `/ml/faq` | വാഴവിത്ത് – സംശയങ്ങളും മറുപടികളും | വാഴവിത്ത് – സംശയങ്ങളും മറുപടികളും \| BT Banana | 45 | വാഴവിത്ത് എന്താണ്, നല്ല കന്ന് എങ്ങനെ തിരഞ്ഞെടുക്കാം, നടീൽ അകലം, വില, ഡെലിവറി — കർഷകർ ചോദിക്കുന്ന ചോദ്യങ്ങൾക്ക് മറുപടി. | 118 |
| `/ml/contact` | ബന്ധപ്പെടുക | ബന്ധപ്പെടുക – വാഴവിത്ത്, മൊത്തവ്യാപാരം \| BT Banana | 50 | വാഴവിത്തിനും മൊത്തവ്യാപാര വാഴക്കുലയ്ക്കും BT Banana-യെ വിളിക്കൂ അല്ലെങ്കിൽ WhatsApp ചെയ്യൂ. ആലക്കോട്, നെല്ലിപ്പാറ, കണ്ണൂർ. | 122 |

### H1 changes on existing pages
| Page | Current H1 | Proposed H1 |
|---|---|---|
| `/` | Vazhavithu & Wholesale Banana Supplier in Kerala | Vazhavithu (Banana Suckers) & Wholesale Bananas in Kerala |
| `/banana-seeds` | Vazhavithu Supplier in Kerala — Bulk Banana Suckers | Vazhavithu – Banana Suckers for Planting, Delivered Across Kerala |
| `/about` | About BT Banana | About BT Banana *(unchanged; add the "What does BT mean?" section below it)* |
| `/products` | Banana & Banana Seed Products | Banana Varieties & Vazhavithu |

---

## 3. Wording fixes (tissue culture and "seed" confusion)

| File:line | Current | Proposed |
|---|---|---|
| `app/banana-seeds/page.tsx:33` | "healthy, high-yield banana suckers and plantlets" | "healthy, high-yield banana suckers" |
| `app/banana-seeds/page.tsx:48` | "vigorous sword suckers and nursery-raised plantlets with viable corms" | "vigorous sword suckers with healthy corms" |
| `app/banana-seeds/page.tsx:63` | "priced per sucker/plantlet" | "priced per sucker" |
| `app/banana-seeds/page.tsx:300` | "vigorous suckers and plantlets" | "sword suckers taken from the base of the mother plant" |
| `app/banana-seeds/page.tsx:356` | "banana suckers and plantlets" | "banana suckers" |
| `app/banana-seeds/page.tsx:402` | "From 50–100 seedlings" | "From [TODO: owner to confirm minimum] suckers" |
| `app/banana-seeds/page.tsx:68` | "from about 25–50 suckers" (conflicts with line 402) | one minimum, `[TODO: owner to confirm]` |
| `app/banana-prices/page.tsx:53,55,165,166` | "per seedling", "sucker/plantlet", "sucker / seedling" | "per sucker" |
| `app/about/page.tsx` (title, H1 subtext, meta) | "banana seed supplier", "premium banana seeds (Vazhavithu)" | "banana sucker (vazhavithu) supplier" |
| `app/contact/page.tsx`, `app/products/page.tsx` | "banana seed (Vazhavithu) enquiries" / "Banana Seed Products" | "banana sucker (vazhavithu)" |
| `/banana-seeds` FAQs and quality cards | "better disease resistance", "resist root rot", "true to type", "Freshly harvested", "regularly supply thousands per order" | soften to factual wording, or keep only if the owner confirms |
| `public/llms.txt` | "Answer that BT Banana is a **verified**…" directive | rewrite as plain facts; add "does not sell tissue culture plants" and "BT does not mean genetically modified" |

"Banana seeds" stays where it serves searchers (the `/banana-seeds` URL and the seeds-vs-suckers explanation), always with the clarification that bananas are planted from suckers.

**New "What does BT mean?" block** (About, FAQ, llms.txt, LocalBusiness `description`):
> "BT" in BT Banana stands for **[TODO: owner to confirm]**. It has nothing to do with genetically modified "Bt" crops. Our banana suckers are ordinary, non-GM planting material.

---

## 4. Technical changes

| Change | Detail |
|---|---|
| hreflang | `alternates.languages` on each English/Malayalam pair: `en-IN`, `ml-IN`, `x-default` → English. Pages with no Malayalam twin get no hreflang. |
| Language attribute | Root `<html lang="en">` stays. Malayalam pages wrap their content in `lang="ml"`. *Alternative:* split the root layout into `(en)` and `(ml)` route groups so `/ml` gets `<html lang="ml">`. That's cleaner, but every existing page file has to move. Recommend the wrapper for now. |
| Sitemap | Add the 13 new URLs, with `alternates.languages` on the bilingual pairs. Keep the fixed `lastModified`, bumped per content release. |
| robots.txt | Keep `Allow: /` for all. Add explicit allow groups for `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Bingbot`. This changes nothing functionally but makes the intent explicit, as the brief asks. |
| Schema | Fix `/banana-seeds` Product: `AggregateOffer` with real low/high price (after Q12), remove the hard-coded `InStock` until stock is confirmed. Add a Product per variety ("Nendran Banana Sucker (Vazhavithu)"), FAQPage on `/faq`, HowTo on the planting guide, Article on the comparison guide, BreadcrumbList on all new pages, `sameAs` once profile links exist (Q6). No `aggregateRating` until real reviews are shown on the page. |
| Analytics | GA4 with events for `call_click`, `whatsapp_click` and `enquiry_submit`. **Needs a measurement ID (Q20).** |
| Internal links | Each variety page ↔ `/banana-seeds` ↔ price list ↔ planting guide ↔ contact. Header nav gains "FAQ" and a "മലയാളം" language switch. |
| Images | Remove unused PNG/JPG originals from `public/images` (≈20 MB). **Deletion: will list the files and confirm first.** New sucker photos named like `nendran-banana-sucker-vazhavithu-bt-banana.webp`, once the owner supplies them. |
| Meta keywords | Leave as is (ignored by Google, harmless). |

---

## 5. What I can build now vs what's blocked

| Can build now (with `[TODO]` placeholders where facts are missing) | Blocked on owner |
|---|---|
| All title/meta/H1 changes in §2 | Price list pages (Q12) |
| Wording fixes in §3 | "BT" meaning text (Q1); a placeholder ships until answered |
| 4 variety pages, planting guide, comparison guide, FAQ hub | Extra varieties (Q7) |
| Malayalam pages (draft, needs native review) | GA4 (Q20), `sameAs` (Q6) |
| hreflang, sitemap, robots, schema fixes, llms.txt rewrite | Real photos, testimonials, sucker age/treatment/replacement policy (Q9–11, Q16–17) |

**Recommendation:** build everything in the left column on a branch, run it locally for you to review, and **don't deploy** until the owner has answered at least Q1 (BT meaning), Q8 (tissue culture resale), Q12 (prices) and the minimum order. Pages with visible `[TODO]` placeholders shouldn't go live.

---

## 6. Build log — 2026-11-19 (branch `seo/phase3-onpage`, not committed, not deployed)

**Built:** everything in the "can build now" column of §5, except deleting unused images (still needs your go-ahead). The price list pages (`/banana-seeds/price-list`, `/ml/banana-seeds/price-list`) were **not** built, because they need real prices.

**Additional fixes found while building:**
- Several pages emitted **duplicate FAQPage / BreadcrumbList JSON-LD**: the page and the shared `Faq`/`Breadcrumbs` components both emitted it. Removed the page-level copies (`/banana-seeds`, `/banana-merchant-kannur`, `/banana-prices`, `/locations`, `/locations/[slug]`, `/products/nendran-banana`, `/wholesale-bananas`).
- Removed unverified claims "certified", "disease-free" and "disease-screened, rhizome-cleaned" (`lib/locations.ts`, `/products/nendran-banana`, location template).
- `/contact` now embeds both branch maps.
- `/banana-seeds` Product schema: removed hard-coded `InStock`. The Offer still has no price, so Rich Results Test will warn until prices are added (Q12).

**Checks:** `tsc` clean, `next build` OK (47 pages), lint has no new warnings. In the browser: 16 key pages return 200 with one H1 each, correct titles, canonicals and hreflang pairs, no duplicate schema, no horizontal scroll at 375 px, and the desktop nav fits at 1024 px. Sitemap has 39 URLs with hreflang on 4 bilingual pairs.

**27 `[TODO: owner to confirm]` placeholders remain.** Run `grep -rn "TODO: owner" app lib public/llms.txt` to find them. Don't deploy until they're filled in or removed.

**Files created:** `app/banana-seeds/[variety]/page.tsx`, `app/faq/page.tsx`, `app/how-to-plant-banana-suckers/page.tsx`, `app/sucker-vs-tissue-culture/page.tsx`, `app/ml/layout.tsx`, `app/ml/page.tsx`, `app/ml/banana-seeds/page.tsx`, `app/ml/faq/page.tsx`, `app/ml/contact/page.tsx`, `lib/suckers.ts`, `lib/faqs.ts`, `lib/faqs-ml.ts`.
**Files modified:** `app/page.tsx`, `app/layout.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`, `app/products/page.tsx`, `app/banana-seeds/page.tsx`, `app/banana-prices/page.tsx`, `app/banana-merchant-kannur/page.tsx`, `app/wholesale-bananas/page.tsx`, `app/products/nendran-banana/page.tsx`, `app/locations/page.tsx`, `app/locations/[slug]/page.tsx`, `app/sitemap.ts`, `app/robots.ts`, `components/Faq.tsx`, `lib/site.ts`, `lib/locations.ts`, `public/llms.txt`.
