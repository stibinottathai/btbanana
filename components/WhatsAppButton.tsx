import { whatsappHref, defaultEnquiryMessage } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

type Props = {
  phone: string;
  label?: string;
  message?: string;
  variant?: "solid" | "outline";
  className?: string;
};

const variants = {
  solid:
    "bg-[#25D366] text-white hover:bg-[#1fb958] focus-visible:outline-[#1fb958]",
  outline:
    "border-2 border-[#25D366] text-green-800 hover:bg-green-50 focus-visible:outline-[#1fb958]",
};

export function WhatsAppButton({
  phone,
  label = "WhatsApp Us",
  message = defaultEnquiryMessage,
  variant = "solid",
  className = "",
}: Props) {
  return (
    <a
      href={whatsappHref(phone, message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      aria-label={`${label} on WhatsApp`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {label}
    </a>
  );
}
