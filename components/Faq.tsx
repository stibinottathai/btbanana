import { JsonLd } from "./JsonLd";

export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Renders an accessible, crawlable FAQ block (native <details>, no JS) plus
 * FAQPage structured data — the format AI answer engines (ChatGPT, Perplexity,
 * Google AI Overviews) most reliably lift direct Q&A pairs from.
 */
export function Faq({
  items,
  title = "Frequently Asked Questions",
  id,
  schema = true,
  variant = "cards",
  name,
}: {
  items: FaqItem[];
  /** Pass null when the surrounding section already renders the heading. */
  title?: string | null;
  id?: string;
  /** Set false when the page emits one combined FAQPage for several blocks. */
  schema?: boolean;
  /** "numbered" is a borderless, numbered accordion list. */
  variant?: "cards" | "numbered";
  /** Shared <details name>: opening one item closes the others. */
  name?: string;
}) {
  if (items.length === 0) return null;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  if (variant === "numbered") {
    return (
      <div id={id} className="scroll-mt-24">
        {schema && <JsonLd data={faqJsonLd} />}
        {title && (
          <h2 className="mb-6 text-2xl font-bold text-green-950">{title}</h2>
        )}
        <div className="divide-y divide-green-100 border-y border-green-100">
          {items.map((item, i) => (
            <details key={item.question} name={name} className="faq-item group">
              <summary className="flex cursor-pointer list-none items-start gap-4 rounded-xl py-5 marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700 sm:gap-6 sm:py-6 [&::-webkit-details-marker]:hidden">
                <span className="mt-0.5 w-7 shrink-0 text-sm font-extrabold tabular-nums text-green-600/70 transition-colors group-open:text-amber-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-base font-semibold leading-7 text-green-950 transition-colors group-hover:text-green-800 sm:text-lg">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-green-200 text-green-800 transition duration-300 group-open:rotate-45 group-open:border-green-950 group-open:bg-green-950 group-open:text-amber-300"
                >
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                </span>
              </summary>
              <p className="pb-6 pl-11 pr-2 leading-7 text-neutral-600 sm:pl-[3.25rem] sm:pr-14">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div id={id} className="scroll-mt-24">
      {schema && <JsonLd data={faqJsonLd} />}
      {title && <h2 className="text-2xl font-bold text-green-950">{title}</h2>}
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-green-100 bg-white p-5 open:shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-green-950 marker:content-none">
              <span>{item.question}</span>
              <span
                aria-hidden="true"
                className="shrink-0 text-lg text-green-700 transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 leading-7 text-neutral-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
