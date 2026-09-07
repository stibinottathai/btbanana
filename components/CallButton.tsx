import React from "react";
import { telHref, formatPhone } from "@/lib/site";
import { PhoneIcon } from "./icons";

type Props = {
  phone: string;
  label?: React.ReactNode;
  ariaLabel?: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const variants = {
  solid:
    "bg-green-700 text-white hover:bg-green-800 focus-visible:outline-green-700",
  outline:
    "border-2 border-green-700 text-green-700 hover:bg-green-50 focus-visible:outline-green-700",
  ghost:
    "text-green-700 hover:bg-green-50 focus-visible:outline-green-700",
};

const sizes = {
  sm: "px-4 py-2 text-xs sm:text-sm",
  md: "px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base",
  lg: "px-6 py-3 text-base",
};

export function CallButton({
  phone,
  label = "Call Now",
  ariaLabel,
  variant = "solid",
  size = "lg",
  className = "",
}: Props) {
  const accessibleLabel =
    ariaLabel ||
    (typeof label === "string"
      ? `${label}: ${formatPhone(phone)}`
      : `Call ${formatPhone(phone)}`);

  return (
    <a
      href={telHref(phone)}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${sizes[size]} ${variants[variant]} ${className}`}
      aria-label={accessibleLabel}
    >
      <PhoneIcon className="h-5 w-5 shrink-0" />
      <span>{label}</span>
    </a>
  );
}
