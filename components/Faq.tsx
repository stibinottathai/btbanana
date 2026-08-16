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
}: {
  items: FaqItem[];
  title?: string;
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

  return (
    <div>
      <JsonLd data={faqJsonLd} />
      <h2 className="text-2xl font-bold text-green-950">{title}</h2>
      <dl className="mt-6 space-y-3">
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
            <dd className="mt-3 leading-7 text-neutral-700">{item.answer}</dd>
          </details>
        ))}
      </dl>
    </div>
  );
}
