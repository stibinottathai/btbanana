import type { Branch } from "@/lib/site";
import { owners, primaryWhatsApp, defaultEnquiryMessage } from "@/lib/site";
import { CallButton } from "./CallButton";
import { WhatsAppButton } from "./WhatsAppButton";
import { MapPinIcon } from "./icons";

export function LocationCard({ branch }: { branch: Branch }) {
  return (
    <article className="flex flex-col rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-800">
        <MapPinIcon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-xl font-semibold text-green-900">
        {branch.name}
      </h3>
      <p className="text-sm font-medium text-green-700">{branch.place}</p>
      <p className="mt-3 text-sm leading-6 text-neutral-600">
        {branch.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <CallButton
          phone={owners[0].phone}
          label={`Call ${owners[0].name}`}
          className="px-5 py-2.5 text-sm"
        />
        <WhatsAppButton
          phone={primaryWhatsApp}
          message={defaultEnquiryMessage}
          className="px-5 py-2.5 text-sm"
        />
      </div>
      {branch.mapsUrl && (
        <a
          href={branch.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:underline"
        >
          <MapPinIcon className="h-4 w-4" />
          Get Directions
        </a>
      )}
    </article>
  );
}
