import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { primaryPhone } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-bold text-green-950">Page Not Found</h1>
      <p className="mt-4 text-lg leading-8 text-neutral-700">
        The page you&apos;re looking for doesn&apos;t exist. Head back home,
        or contact us directly for banana and banana seed enquiries.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border-2 border-green-700 px-6 py-3 text-base font-semibold text-green-700 hover:bg-green-50"
        >
          Back to Home
        </Link>
        <CallButton phone={primaryPhone} />
      </div>
    </div>
  );
}
