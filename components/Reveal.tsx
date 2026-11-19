import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Kept for API compatibility; scroll-driven CSS handles staggering naturally. */
  delay?: number;
  className?: string;
};

/**
 * Fades content up as it scrolls into view using CSS scroll-driven
 * animations (see `.reveal` in globals.css). No JavaScript, no hydration:
 * content is visible immediately and the effect is skipped on browsers
 * without support or when reduced motion is preferred.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Reveal({ children, delay, className = "" }: Props) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
