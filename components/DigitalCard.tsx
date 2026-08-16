"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import {
  branches,
  defaultEnquiryMessage,
  formatPhone,
  owners,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  telHref,
  whatsappHref,
} from "@/lib/site";
import { downloadVCard } from "@/lib/vcard";
import { QrCodeDisplay } from "./QrCodeDisplay";
import {
  PhoneIcon,
  WhatsAppIcon,
  LeafIcon,
  DownloadIcon,
  ShareIcon,
  UserPlusIcon,
  CheckIcon,
  MapPinIcon,
  GlobeIcon,
  ChevronRightIcon,
} from "./icons";
import Link from "next/link";

export function DigitalCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloadingImg, setDownloadingImg] = useState(false);
  const [savedVcard, setSavedVcard] = useState(false);
  const [shared, setShared] = useState(false);

  const cardUrl = `${SITE_URL}/card`;

  const handleDownloadCardImage = async () => {
    if (!cardRef.current) return;
    setDownloadingImg(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });
      const link = document.createElement("a");
      link.download = "BT_Banana_Digital_Card.png";
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Failed to generate card image:", err);
    } finally {
      setDownloadingImg(false);
    }
  };

  const handleSaveContact = (ownerName?: string) => {
    downloadVCard("BT_Banana_Contact.vcf", ownerName);
    setSavedVcard(true);
    setTimeout(() => setSavedVcard(false), 2500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${SITE_NAME} - Digital Business Card`,
          text: `${SITE_NAME} - Wholesale Bananas & Banana Seeds in Kerala. Save contact details & location links!`,
          url: cardUrl,
        });
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(cardUrl);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Top Action Bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="flex h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-green-900">
            Verified Business Card
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => handleSaveContact()}
            className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 px-3.5 py-2 text-xs font-bold text-white shadow-sm transition hover:from-emerald-700 hover:to-green-800 active:scale-95"
          >
            {savedVcard ? (
              <>
                <CheckIcon className="h-4 w-4 text-amber-300" />
                Contact Saved!
              </>
            ) : (
              <>
                <UserPlusIcon className="h-4 w-4" />
                Save to Contacts (.vcf)
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleDownloadCardImage}
            disabled={downloadingImg}
            className="flex items-center gap-1.5 rounded-xl border border-green-200 bg-white px-3.5 py-2 text-xs font-semibold text-green-950 shadow-sm transition hover:bg-green-50 active:scale-95 disabled:opacity-50"
          >
            <DownloadIcon className="h-4 w-4 text-green-700" />
            {downloadingImg ? "Exporting PNG..." : "Download Card Image"}
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-1.5 rounded-xl border border-green-200 bg-white px-3 py-2 text-xs font-semibold text-green-950 shadow-sm transition hover:bg-green-50 active:scale-95"
            title="Share Digital Business Card"
          >
            {shared ? (
              <>
                <CheckIcon className="h-4 w-4 text-emerald-600" />
                Shared!
              </>
            ) : (
              <>
                <ShareIcon className="h-4 w-4 text-green-700" />
                Share Card
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Grid: Card Graphic + QR Code */}
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Printable/Exportable Digital Card Container */}
        <div className="lg:col-span-7">
          <div
            ref={cardRef}
            className="overflow-hidden rounded-3xl border border-green-800/40 bg-gradient-to-br from-green-950 via-emerald-950 to-green-900 text-white shadow-2xl ring-1 ring-white/10"
          >
            {/* Background Decorative Accents */}
            <div className="relative p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />

              {/* Brand Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-green-950 shadow-md">
                    <LeafIcon className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                        {SITE_NAME}
                      </h1>
                      <span className="inline-flex items-center rounded-full bg-amber-400/20 px-2 py-0.5 text-[10px] font-bold text-amber-300 ring-1 ring-inset ring-amber-400/30">
                        OFFICIAL
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs font-semibold text-emerald-300">
                      {SITE_TAGLINE}
                    </p>
                  </div>
                </div>
              </div>

              <hr className="my-6 border-emerald-800/50" />

              {/* Owners / Key Contact Cards */}
              <div className="space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Key Contacts &amp; Management
                </h2>

                <div className="grid gap-3 sm:grid-cols-2">
                  {owners.map((owner) => (
                    <div
                      key={owner.phone}
                      className="group rounded-2xl border border-emerald-800/60 bg-emerald-900/40 p-3.5 backdrop-blur transition hover:border-amber-400/50 hover:bg-emerald-900/60"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-bold text-white">
                            {owner.name}
                          </p>
                          <p className="text-[11px] font-medium text-emerald-300">
                            {owner.role} • BT Banana
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleSaveContact(owner.name)}
                          className="rounded-lg bg-emerald-800/80 p-1.5 text-amber-300 opacity-80 hover:opacity-100"
                          title={`Save ${owner.name} to Contacts`}
                        >
                          <UserPlusIcon className="h-4 w-4" />
                        </button>
                      </div>

                      <p className="mt-2 font-mono text-sm font-semibold tracking-wide text-amber-300">
                        {formatPhone(owner.phone)}
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <a
                          href={telHref(owner.phone)}
                          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-amber-400 px-3 py-1.5 text-xs font-bold text-green-950 shadow-sm transition hover:bg-amber-300 active:scale-95"
                        >
                          <PhoneIcon className="h-3.5 w-3.5" />
                          Call
                        </a>
                        <a
                          href={whatsappHref(owner.phone, defaultEnquiryMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#20ba59] active:scale-95"
                        >
                          <WhatsAppIcon className="h-3.5 w-3.5" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Branch Locations & Offerings */}
              <div className="mt-6 space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Branches &amp; Service Locations
                </h2>
                <div className="grid gap-2 sm:grid-cols-2">
                  {branches.map((branch) => (
                    <Link
                      key={branch.slug}
                      href={`/locations#${branch.slug}`}
                      className="flex items-center justify-between rounded-xl border border-emerald-800/40 bg-emerald-950/50 p-3 text-xs font-medium text-emerald-200 transition hover:border-emerald-600 hover:text-white"
                    >
                      <span className="flex items-center gap-2">
                        <MapPinIcon className="h-4 w-4 text-amber-400 shrink-0" />
                        <span>{branch.name}</span>
                      </span>
                      <ChevronRightIcon className="h-4 w-4 text-emerald-500" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="mt-6 flex items-center justify-between pt-4 text-[11px] text-emerald-400 border-t border-emerald-800/40">
                <span className="flex items-center gap-1.5">
                  <GlobeIcon className="h-3.5 w-3.5 text-amber-400" />
                  https://btbanana.in
                </span>
                <span>Kannur District, Kerala</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive QR Code & Download Box */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 space-y-6">
            <QrCodeDisplay cardUrl={cardUrl} />

            {/* Quick Feature Highlights */}
            <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-green-950">
                Card Features &amp; Downloads
              </h3>
              <ul className="mt-3 space-y-2.5 text-xs text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>1-Tap Phonebook Sync:</strong> Download the `.vcf` file to instantly save Thomas M.J &amp; Albin Augustine in your phone.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Printable QR Code:</strong> Download high-res PNG for business cards, banners, or WhatsApp DP.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Wholesale Products:</strong> Palayankodan, Nendran, Poovan, Robusta, Rasthali, and premium Vazhavithu (seeds).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
