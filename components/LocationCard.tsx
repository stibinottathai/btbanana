import type { Branch } from "@/lib/site";
import { owners, primaryWhatsApp, defaultEnquiryMessage } from "@/lib/site";
import { CallButton } from "./CallButton";
import { WhatsAppButton } from "./WhatsAppButton";
import { MapPinIcon } from "./icons";

export function LocationCard({ branch }: { branch: Branch }) {
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    branch.mapQuery || branch.place
  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <article
      id={branch.slug}
      className="flex flex-col overflow-hidden rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-800">
          <MapPinIcon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-xl font-bold text-green-950">
            {branch.name}
          </h3>
          <p className="text-sm font-medium text-green-700">{branch.place}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-neutral-600">
        {branch.description}
      </p>

      {/* Embedded Interactive Google Map */}
      <div className="mt-5 overflow-hidden rounded-2xl border border-green-100 bg-neutral-100 shadow-inner">
        <iframe
          title={`Google Map - ${branch.name}`}
          src={mapEmbedUrl}
          width="100%"
          height="220"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-2xl"
        />
      </div>

      <div className="mt-auto pt-6 flex flex-wrap items-center justify-between gap-3 border-t border-green-50">
        <div className="flex flex-wrap gap-2">
          <CallButton
            phone={owners[0].phone}
            label={`Call ${owners[0].name.split(" ")[0]}`}
            className="px-4 py-2 text-xs"
          />
          <WhatsAppButton
            phone={primaryWhatsApp}
            message={defaultEnquiryMessage}
            className="px-4 py-2 text-xs"
          />
        </div>

        {branch.mapsUrl && (
          <a
            href={branch.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 hover:text-green-900 hover:underline"
          >
            <MapPinIcon className="h-4 w-4" />
            Open in Google Maps →
          </a>
        )}
      </div>
    </article>
  );
}
