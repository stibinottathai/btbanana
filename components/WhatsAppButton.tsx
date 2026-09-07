import React from "react";
import { whatsappHref, defaultEnquiryMessage } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

type Props = {
  phone: string;
  label?: React.ReactNode;
  ariaLabel?: string;
  message?: string;
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const variants = {
  solid:
    "bg-[#25D366] text-white hover:bg-[#1fb958] focus-visible:outline-[#1fb958]",
  outline:
    "border-2 border-[#25D366] text-green-800 hover:bg-green-50 focus-visible:outline-[#1fb958]",
};

const sizes = {
  sm: "px-4 py-2 text-xs sm:text-sm",
  md: "px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base",
  lg: "px-6 py-3 text-base",
};

export function WhatsAppButton({
  phone,
  label = "WhatsApp Us",
  ariaLabel,
  message = defaultEnquiryMessage,
  variant = "solid",
  size = "lg",
  className = "",
}: Props) {
  const accessibleLabel =
    ariaLabel ||
    (typeof label === "string" ? `${label} on WhatsApp` : "WhatsApp Us");

  return (
    <a
      href={whatsappHref(phone, message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${sizes[size]} ${variants[variant]} ${className}`}
      aria-label={accessibleLabel}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      <span>{label}</span>
    </a>
  );
}
