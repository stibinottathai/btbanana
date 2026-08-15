import { primaryPhone, primaryWhatsApp, telHref, whatsappHref, defaultEnquiryMessage } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function MobileStickyCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-green-100 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)] md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={telHref(primaryPhone)}
        className="flex items-center justify-center gap-2 bg-green-700 py-3.5 text-sm font-semibold text-white"
      >
        <PhoneIcon className="h-4 w-4" />
        Call Now
      </a>
      <a
        href={whatsappHref(primaryWhatsApp, defaultEnquiryMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-semibold text-white"
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
