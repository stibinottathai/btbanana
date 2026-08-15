import { telHref, formatPhone } from "@/lib/site";
import { PhoneIcon } from "./icons";

type Props = {
  phone: string;
  label?: string;
  variant?: "solid" | "outline" | "ghost";
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

export function CallButton({
  phone,
  label = "Call Now",
  variant = "solid",
  className = "",
}: Props) {
  return (
    <a
      href={telHref(phone)}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      aria-label={`${label}: ${formatPhone(phone)}`}
    >
      <PhoneIcon className="h-5 w-5" />
      {label}
    </a>
  );
}
