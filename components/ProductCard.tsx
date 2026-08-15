import Image from "next/image";
import type { Product } from "@/lib/products";
import { primaryWhatsApp, whatsappHref } from "@/lib/site";

export function ProductCard({ product }: { product: Product }) {
  const enquiryMessage = `Hi BT Banana, I'd like to enquire about ${product.name}.`;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      {product.image && (
        <div className="relative h-44 w-full">
          <Image
            src={product.image}
            alt={product.imageAlt ?? product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-green-900">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          {product.description}
        </p>
        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-green-700">
          For: {product.suitableFor}
        </p>
        <a
          href={whatsappHref(primaryWhatsApp, enquiryMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
        >
          Enquire Now
        </a>
      </div>
    </article>
  );
}
