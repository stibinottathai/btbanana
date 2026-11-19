import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { primaryWhatsApp, whatsappHref } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function ProductCard({ product }: { product: Product }) {
  const enquiryMessage = `Hi BT Banana, I'd like to enquire about ${product.name}.`;

  return (
    <article className="flex flex-col overflow-hidden group rounded-3xl bg-white ring-1 ring-green-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10">
      {product.image && (
        <div className="relative aspect-[3/2] w-full overflow-hidden bg-green-50">
          <Image
            src={product.image}
            alt={product.imageAlt ?? product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-green-950">
          {product.detailHref ? (
            <Link href={product.detailHref} className="hover:underline">
              {product.name}
            </Link>
          ) : (
            product.name
          )}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          {product.description}
        </p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-green-800">
          For: {product.suitableFor}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {product.detailHref && (
            <Link
              href={product.detailHref}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-green-700 px-4 py-2.5 text-sm font-semibold text-green-800 transition-colors hover:bg-green-50"
            >
              View Details
            </Link>
          )}
          <a
            href={whatsappHref(primaryWhatsApp, enquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-800 shadow-sm"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            Enquire Now
          </a>
        </div>
      </div>
    </article>
  );
}
