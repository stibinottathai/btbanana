"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import Image from "next/image";
import { toPng } from "html-to-image";
import QRCode from "qrcode";
import {
  formatPhone,
  owners,
  SITE_DOMAIN,
  SITE_NAME,
  SITE_URL,
  telHref,
  whatsappHref,
  defaultEnquiryMessage,
} from "@/lib/site";
import { downloadVCard } from "@/lib/vcard";
import {
  PhoneIcon,
  WhatsAppIcon,
  DownloadIcon,
  ShareIcon,
  UserPlusIcon,
  CheckIcon,
  MapPinIcon,
  GlobeIcon,
} from "./icons";

type ThemeKey = "emerald" | "obsidian" | "teal" | "platinum";

type Theme = {
  name: string;
  swatch: string;
  badge: string;
  bg: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  accent: string;
  cardBoxBg: string;
  cardBoxBorder: string;
  footerBorder: string;
  glow: string;
  pill: string;
};

const themes: Record<ThemeKey, Theme> = {
  emerald: {
    name: "Emerald & Gold",
    swatch: "bg-gradient-to-br from-green-950 to-green-800",
    badge: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    bg: "bg-gradient-to-br from-green-950 via-emerald-950 to-green-900",
    border: "border-2 border-amber-400/40 ring-1 ring-white/10",
    textPrimary: "text-white",
    textSecondary: "text-emerald-300",
    accent: "text-amber-300",
    cardBoxBg: "bg-emerald-900/50",
    cardBoxBorder: "border-emerald-700/50",
    footerBorder: "border-emerald-800/60",
    glow: "bg-amber-400/10",
    pill: "bg-white/10",
  },
  obsidian: {
    name: "Obsidian & Gold",
    swatch: "bg-gradient-to-br from-zinc-950 to-slate-800",
    badge: "bg-amber-300/15 text-amber-300 border-amber-300/40",
    bg: "bg-gradient-to-br from-zinc-950 via-slate-900 to-green-950",
    border: "border-2 border-amber-400/50 ring-1 ring-amber-400/20",
    textPrimary: "text-white",
    textSecondary: "text-slate-300",
    accent: "text-amber-300 font-extrabold",
    cardBoxBg: "bg-slate-900/70",
    cardBoxBorder: "border-amber-400/30",
    footerBorder: "border-slate-800",
    glow: "bg-amber-400/15",
    pill: "bg-white/10",
  },
  teal: {
    name: "Royal Teal",
    swatch: "bg-gradient-to-br from-teal-950 to-emerald-700",
    badge: "bg-emerald-400/15 text-emerald-200 border-emerald-400/30",
    bg: "bg-gradient-to-br from-teal-950 via-emerald-900 to-green-950",
    border: "border-2 border-emerald-400/40 ring-1 ring-white/10",
    textPrimary: "text-white",
    textSecondary: "text-teal-200",
    accent: "text-amber-300",
    cardBoxBg: "bg-teal-900/50",
    cardBoxBorder: "border-teal-700/50",
    footerBorder: "border-teal-800/60",
    glow: "bg-emerald-400/10",
    pill: "bg-white/10",
  },
  platinum: {
    name: "Platinum Mint",
    swatch: "bg-gradient-to-br from-slate-100 to-teal-200",
    badge: "bg-emerald-800/10 text-emerald-900 border-emerald-800/30",
    bg: "bg-gradient-to-br from-slate-100 via-emerald-50 to-teal-100",
    border: "border-2 border-emerald-800/30 ring-1 ring-green-900/10",
    textPrimary: "text-green-950",
    textSecondary: "text-emerald-900",
    accent: "text-emerald-950 font-extrabold",
    cardBoxBg: "bg-white/80",
    cardBoxBorder: "border-emerald-300/80",
    footerBorder: "border-emerald-200",
    glow: "bg-emerald-500/10",
    pill: "bg-emerald-900/10",
  },
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Interactive digital business card: a flippable card preview with colour
 * themes on the left, and save / call / share actions on the right.
 * `intro` renders above the actions (the page supplies the h1).
 */
export function DigitalCard({ intro }: { intro?: ReactNode }) {
  const frontCardRef = useRef<HTMLDivElement>(null);
  const backCardRef = useRef<HTMLDivElement>(null);
  const [activeSide, setActiveSide] = useState<"front" | "back">("front");
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>("emerald");
  const [downloadingImg, setDownloadingImg] = useState(false);
  const [savedVcard, setSavedVcard] = useState(false);
  const [shared, setShared] = useState(false);
  const [backQrUrl, setBackQrUrl] = useState<string>("");

  const theme = themes[currentTheme];
  const cardUrl = `${SITE_URL}/card`;

  useEffect(() => {
    QRCode.toDataURL(cardUrl, {
      width: 320,
      margin: 1,
      color: { dark: "#052e16", light: "#ffffff" },
      errorCorrectionLevel: "H",
    })
      .then((url) => setBackQrUrl(url))
      .catch(() => {});
  }, [cardUrl]);

  const flip = () => setActiveSide((s) => (s === "front" ? "back" : "front"));

  const handleDownloadCardImage = async () => {
    const target =
      activeSide === "front" ? frontCardRef.current : backCardRef.current;
    if (!target) return;
    setDownloadingImg(true);
    try {
      const dataUrl = await toPng(target, { cacheBust: true, pixelRatio: 3 });
      const link = document.createElement("a");
      link.download = `BT_Banana_Card_${currentTheme}_${activeSide.toUpperCase()}.png`;
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

  const handleSaveContact = () => {
    downloadVCard("BT_Banana_Contact.vcf");
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
      } catch {
        // User cancelled the share sheet
      }
    } else {
      await navigator.clipboard.writeText(cardUrl);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  const face = `relative flex h-full w-full select-none overflow-hidden rounded-2xl p-4 shadow-2xl shadow-black/40 sm:p-5 ${theme.bg} ${theme.border} ${theme.textPrimary}`;

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
      {/* ───────── Card preview ───────── */}
      <div className="order-2 min-w-0 lg:order-1">
        <div className="mx-auto w-full max-w-[520px] [perspective:1600px]">
          <div
            onClick={flip}
            className="relative aspect-[1.75/1] w-full cursor-pointer"
          >
            <div
              className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] motion-reduce:transition-none ${
                activeSide === "back" ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* FRONT */}
              <div
                className="absolute inset-0 [backface-visibility:hidden]"
                aria-hidden={activeSide !== "front"}
              >
                <div ref={frontCardRef} className={`${face} flex-col justify-between`}>
                  <div className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full ${theme.glow} blur-xl`} />

                  <div className="relative z-10 flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <Image
                        src="/images/logo.png"
                        alt=""
                        width={40}
                        height={40}
                        className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
                      />
                      <div>
                        <p className="text-base font-black leading-none tracking-tight sm:text-xl">
                          {SITE_NAME}
                        </p>
                        <p className={`mt-0.5 text-[9px] font-bold tracking-wide sm:text-[10px] ${theme.accent}`}>
                          WHOLESALE BANANAS &amp; SEEDS
                        </p>
                      </div>
                    </div>
                    <span className={`rounded-full border px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider ${theme.badge}`}>
                      Official
                    </span>
                  </div>

                  <div className="relative z-10 -mt-1 flex items-center justify-between text-[9px] font-semibold opacity-90">
                    <span className="uppercase tracking-wide">Alakode &amp; Nellipara Branches</span>
                    <span>Kannur, Kerala</span>
                  </div>

                  <div className="relative z-10 my-auto grid grid-cols-2 gap-2">
                    {owners.map((owner) => (
                      <div
                        key={owner.phone}
                        className={`rounded-xl border p-2 sm:p-2.5 ${theme.cardBoxBorder} ${theme.cardBoxBg}`}
                      >
                        <p className="text-xs font-bold leading-tight sm:text-sm">{owner.name}</p>
                        <p className={`text-[9px] font-semibold ${theme.textSecondary}`}>{owner.role}</p>
                        <p className={`mt-0.5 font-mono text-[11px] font-extrabold sm:text-xs ${theme.accent}`}>
                          {formatPhone(owner.phone)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="relative z-10 flex flex-wrap items-center gap-1 text-[8px] font-semibold sm:text-[9px]">
                    {["Nendran", "Plantain", "Vazhavithu (Seeds)", "Bulk Wholesale"].map((t) => (
                      <span key={t} className={`rounded-md px-1.5 py-0.5 ${theme.pill}`}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className={`relative z-10 flex items-center justify-between border-t pt-1.5 text-[9px] ${theme.footerBorder} ${theme.textSecondary}`}>
                    <span className="flex items-center gap-1">
                      <MapPinIcon className="h-3 w-3 shrink-0" />
                      Direct Supply • Wholesale Rates
                    </span>
                    <span className={`flex items-center gap-1 font-bold ${theme.textPrimary}`}>
                      <GlobeIcon className="h-3 w-3 shrink-0" />
                      {SITE_DOMAIN}
                    </span>
                  </div>
                </div>
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]"
                aria-hidden={activeSide !== "back"}
              >
                <div ref={backCardRef} className={`${face} items-center justify-between gap-3 sm:gap-4`}>
                  <div className="flex h-full flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <Image
                          src="/images/logo.png"
                          alt=""
                          width={28}
                          height={28}
                          className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"
                        />
                        <span className="text-sm font-black tracking-tight sm:text-lg">{SITE_NAME}</span>
                      </div>
                      <p className={`mt-0.5 text-[9px] font-semibold sm:text-[10px] ${theme.textSecondary}`}>
                        Wholesale Bananas &amp; Vazhavithu (Seeds)
                      </p>
                    </div>

                    <div className="my-auto space-y-0.5">
                      <p className={`text-[10px] font-bold ${theme.accent}`}>SUPPLY DETAILS:</p>
                      <ul className={`space-y-0.5 text-[9px] sm:text-[11px] ${theme.textSecondary}`}>
                        <li>• Nendran, Plantain &amp; Banana Varieties</li>
                        <li>• Banana Seeds / Vazhavithu (വാഴവിത്ത്)</li>
                        <li>• Branches at Alakode &amp; Nellipara</li>
                      </ul>
                    </div>

                    <div className={`border-t pt-1 text-[8px] sm:text-[9px] ${theme.footerBorder} ${theme.textSecondary}`}>
                      Scan QR code with phone camera to open card.
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col items-center justify-center rounded-xl bg-white p-2 text-green-950 shadow-md">
                    {backQrUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={backQrUrl}
                        alt="QR code linking to the BT Banana digital card"
                        className="h-20 w-20 object-contain sm:h-24 sm:w-24"
                      />
                    ) : (
                      <div className="flex h-20 w-20 items-center justify-center text-[9px] sm:h-24 sm:w-24">
                        Loading…
                      </div>
                    )}
                    <span className="mt-1 text-[8px] font-extrabold tracking-tight">SCAN FOR CONTACT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card controls */}
        <div className="mx-auto mt-6 flex max-w-[520px] flex-wrap items-center justify-between gap-4">
          <div
            role="group"
            aria-label="Card side"
            className="flex rounded-full bg-white/10 p-1 text-xs font-semibold"
          >
            {(["front", "back"] as const).map((side) => (
              <button
                key={side}
                type="button"
                onClick={() => setActiveSide(side)}
                aria-pressed={activeSide === side}
                className={`rounded-full px-4 py-1.5 transition ${
                  activeSide === side
                    ? "bg-amber-400 text-green-950"
                    : "text-green-100 hover:text-white"
                }`}
              >
                {side === "front" ? "Front" : "Back (QR)"}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-green-100/70">
              {theme.name}
            </span>
            <div role="group" aria-label="Card colour" className="flex gap-2">
              {(Object.keys(themes) as ThemeKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setCurrentTheme(key)}
                  aria-label={themes[key].name}
                  aria-pressed={currentTheme === key}
                  title={themes[key].name}
                  className={`h-7 w-7 rounded-full border border-white/30 transition ${themes[key].swatch} ${
                    currentTheme === key
                      ? "ring-2 ring-amber-300 ring-offset-2 ring-offset-green-950"
                      : "ring-0 hover:scale-110"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-green-100/50">
          Tap the card to flip it
        </p>
      </div>

      {/* ───────── Actions ───────── */}
      <div className="order-1 min-w-0 lg:order-2">
        {intro}

        <button
          type="button"
          onClick={handleSaveContact}
          className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-4 text-base font-bold text-green-950 shadow-lg shadow-black/20 transition hover:bg-amber-300 active:scale-[0.99]"
        >
          {savedVcard ? (
            <>
              <CheckIcon className="h-5 w-5" />
              Contact file downloaded
            </>
          ) : (
            <>
              <UserPlusIcon className="h-5 w-5" />
              Save contact to phone
            </>
          )}
        </button>
        <p className="mt-2 text-center text-xs text-green-100/60">
          Downloads a contact file (.vcf) with both owners&apos; numbers.
        </p>

        <ul className="mt-6 space-y-3">
          {owners.map((owner, i) => (
            <li
              key={owner.phone}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 pl-4"
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  i === 0 ? "bg-amber-400 text-green-950" : "bg-white text-green-950"
                }`}
              >
                {getInitials(owner.name)}
              </span>
              <div className="min-w-0 flex-1 leading-tight">
                <p className="truncate font-bold text-white">{owner.name}</p>
                <p className="mt-0.5 text-sm tabular-nums text-green-100/75">
                  {formatPhone(owner.phone)}
                </p>
              </div>
              <a
                href={telHref(owner.phone)}
                aria-label={`Call ${owner.name}`}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-green-950 transition hover:bg-amber-300"
              >
                <PhoneIcon className="h-5 w-5" />
              </a>
              <a
                href={whatsappHref(owner.phone, defaultEnquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${owner.name}`}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:bg-[#1fb958]"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={handleShare}
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-300"
          >
            {shared ? <CheckIcon className="h-4 w-4" /> : <ShareIcon className="h-4 w-4" />}
            {shared ? "Shared!" : "Share card"}
          </button>
          <button
            type="button"
            onClick={handleDownloadCardImage}
            disabled={downloadingImg}
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-300 disabled:opacity-50"
          >
            <DownloadIcon className="h-4 w-4" />
            {downloadingImg ? "Exporting…" : "Card image"}
          </button>
        </div>
      </div>
    </div>
  );
}
