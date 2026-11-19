import type { ReactNode } from "react";
import { primaryPhone, primaryWhatsApp, formatPhone } from "@/lib/site";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckIcon, LeafIcon } from "@/components/icons";

/** Building blocks for blog post bodies. Pair with the `.blog-prose` styles. */

/** Answer-first summary box shown at the top of a post. */
export function QuickAnswer({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-8 rounded-3xl border-l-4 border-amber-400 bg-amber-50 p-6 sm:p-7">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
        Quick answer
      </p>
      <div className="mt-3 text-base leading-7 text-green-950 sm:text-lg sm:leading-8">
        {children}
      </div>
    </div>
  );
}

export function Callout({
  title,
  children,
  tone = "green",
}: {
  title: string;
  children: ReactNode;
  tone?: "green" | "amber";
}) {
  const styles =
    tone === "amber"
      ? "bg-amber-50 ring-amber-200 [&_.callout-icon]:bg-amber-400 [&_.callout-icon]:text-green-950"
      : "bg-green-50 ring-green-200 [&_.callout-icon]:bg-green-900 [&_.callout-icon]:text-amber-300";
  return (
    <aside className={`not-prose my-8 flex gap-4 rounded-2xl p-5 ring-1 sm:p-6 ${styles}`}>
      <span className="callout-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
        <LeafIcon className="h-4 w-4" />
      </span>
      <div>
        <p className="font-bold text-green-950">{title}</p>
        <div className="mt-1.5 text-sm leading-6 text-neutral-700 [&_a]:font-semibold [&_a]:text-green-800 [&_a]:underline">
          {children}
        </div>
      </div>
    </aside>
  );
}

export function Checklist({ items }: { items: ReactNode[] }) {
  return (
    <ul className="not-prose my-6 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-base leading-7 text-neutral-700">
          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-900 text-amber-300">
            <CheckIcon className="h-3 w-3" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Mid-article / end-of-article lead capture. */
export function QuoteCta({
  title = "Planning a bulk Vazhavithu order?",
  message,
}: {
  title?: string;
  message: string;
}) {
  return (
    <div className="not-prose relative isolate my-10 overflow-hidden rounded-3xl bg-green-950 p-6 text-white sm:p-8">
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full bg-amber-400/15 blur-2xl"
      />
      <p className="text-xl font-extrabold tracking-tight sm:text-2xl">{title}</p>
      <p className="mt-2 max-w-xl text-sm leading-6 text-green-100/80 sm:text-base">
        Send us the variety, quantity (or land area), your district and the
        month you plan to plant. We&apos;ll confirm availability and today&apos;s
        rate.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <WhatsAppButton
          phone={primaryWhatsApp}
          message={message}
          label="Get a bulk quote"
          size="md"
        />
        <CallButton
          phone={primaryPhone}
          label={formatPhone(primaryPhone)}
          size="md"
          className="bg-amber-400! text-green-950! hover:bg-amber-300!"
        />
      </div>
    </div>
  );
}

export function SourceNote({ children }: { children: ReactNode }) {
  return (
    <p className="not-prose mt-3 text-xs leading-5 text-neutral-500 [&_a]:underline [&_a:hover]:text-green-800">
      {children}
    </p>
  );
}
