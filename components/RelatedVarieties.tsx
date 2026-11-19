import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { suckerVarieties } from "@/lib/suckers";
import { ChevronRightIcon } from "@/components/icons";

type Props = {
  /** Path of the current product page, e.g. "/products/poovan-banana". */
  current: string;
  /** Set false when the page already has its own Vazhavithu callout. */
  showSucker?: boolean;
};

/**
 * Cross-links a wholesale product page to its sibling variety pages and, when
 * one exists, to the matching Vazhavithu (sucker) page. Gives every product
 * page several contextual internal links so Google can discover and weigh the
 * whole variety cluster, not just the page linked from /products.
 */
export function RelatedVarieties({ current, showSucker = true }: Props) {
  const siblings = products.filter(
    (p) =>
      p.category === "banana" &&
      p.detailHref?.startsWith("/products/") &&
      p.detailHref !== current
  );
  const sucker = showSucker
    ? suckerVarieties.find((v) => v.fruitHref === current)
    : undefined;

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      {sucker && (
        <Link
          href={`/banana-seeds/${sucker.slug}`}
          className="group mb-10 flex flex-col gap-3 rounded-3xl border border-amber-200 bg-amber-50 p-6 transition hover:border-amber-300 hover:bg-amber-100/70 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>
            <span className="block text-sm font-semibold uppercase tracking-wider text-amber-800">
              Want to grow it?
            </span>
            <span className="mt-1 block text-lg font-bold text-green-950">
              {sucker.name} Vazhavithu ({sucker.malayalam}) — banana suckers for
              planting, delivered across Kerala
            </span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1 font-semibold text-green-800">
            See {sucker.name} suckers
            <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      )}

      <h2 className="text-2xl font-bold text-green-950">
        Other Banana Varieties We Supply Wholesale
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {siblings.map((p) => (
          <li key={p.slug}>
            <Link
              href={p.detailHref!}
              className="group flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-3 transition hover:border-green-300 hover:shadow-sm"
            >
              {p.image && (
                <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </span>
              )}
              <span className="min-w-0">
                <span className="block font-semibold text-green-950 group-hover:text-green-800">
                  {p.name}
                </span>
                <span className="mt-0.5 line-clamp-2 block text-sm text-neutral-600">
                  {p.shortDescription}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
