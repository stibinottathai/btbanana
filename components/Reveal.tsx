"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

let sharedObserver: IntersectionObserver | null = null;
const pendingCallbacks = new Map<Element, () => void>();

// One IntersectionObserver instance serves every <Reveal> on the page,
// instead of each instance creating and tearing down its own.
function getSharedObserver() {
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        pendingCallbacks.get(entry.target)?.();
        pendingCallbacks.delete(entry.target);
        sharedObserver?.unobserve(entry.target);
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  return sharedObserver;
}

type Props = {
  children: ReactNode;
  /** Extra delay (ms) before animating in — use to stagger a group of items. */
  delay?: number;
  className?: string;
};

/**
 * Fades and slides content up the first time it scrolls into view, then
 * leaves it alone. Only animates opacity/transform (compositor-only, no
 * layout thrash), triggers once per element, and respects
 * prefers-reduced-motion via the motion-reduce: variant.
 */
export function Reveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = getSharedObserver();
    pendingCallbacks.set(node, () => setVisible(true));
    observer.observe(node);

    return () => {
      observer.unobserve(node);
      pendingCallbacks.delete(node);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition duration-700 ease-out motion-reduce:transition-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}
