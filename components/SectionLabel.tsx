import type { ReactNode } from "react";

/** Small uppercase eyebrow with a leading rule, used above section headings. */
export function SectionLabel({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  /** "light" for use on dark green backgrounds. */
  tone?: "dark" | "light";
}) {
  const color = tone === "light" ? "text-amber-300" : "text-green-700";
  const bar = tone === "light" ? "bg-amber-300" : "bg-green-700";
  return (
    <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] ${color}`}>
      <span className={`h-px w-6 ${bar}`} aria-hidden="true" />
      {children}
    </span>
  );
}
