"use client";

import { useRef, useState, useEffect } from "react";
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
} from "./icons";

type ThemeKey = "emerald" | "obsidian" | "teal" | "platinum";

const themes: Record<
  ThemeKey,
  {
    name: string;
    badge: string;
    bg: string;
    border: string;
    textPrimary: string;
    textSecondary: string;
    accent: string;
    logoBg: string;
    cardBoxBg: string;
    cardBoxBorder: string;
    footerBorder: string;
    glow: string;
  }
> = {
  emerald: {
    name: "Emerald & Gold",
    badge: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    bg: "bg-gradient-to-br from-green-950 via-emerald-950 to-green-900",
    border: "border-2 border-amber-400/40 shadow-2xl ring-1 ring-white/10",
    textPrimary: "text-white",
    textSecondary: "text-emerald-300",
    accent: "text-amber-300",
    logoBg: "bg-gradient-to-br from-amber-400 to-amber-500 text-green-950 shadow-md",
    cardBoxBg: "bg-emerald-900/50 backdrop-blur",
    cardBoxBorder: "border-emerald-700/50",
    footerBorder: "border-emerald-800/60",
    glow: "bg-amber-400/10",
  },
  obsidian: {
    name: "Obsidian & Gold",
    badge: "bg-amber-300/15 text-amber-300 border-amber-300/40",
    bg: "bg-gradient-to-br from-zinc-950 via-slate-900 to-green-950",
    border: "border-2 border-amber-400/50 shadow-2xl ring-1 ring-amber-400/20",
    textPrimary: "text-white",
    textSecondary: "text-slate-300",
    accent: "text-amber-300 font-extrabold",
    logoBg: "bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 text-zinc-950 shadow-md",
    cardBoxBg: "bg-slate-900/70 backdrop-blur",
    cardBoxBorder: "border-amber-400/30",
    footerBorder: "border-slate-800",
    glow: "bg-amber-400/15",
  },
  teal: {
    name: "Royal Teal",
    badge: "bg-emerald-400/15 text-emerald-200 border-emerald-400/30",
    bg: "bg-gradient-to-br from-teal-950 via-emerald-900 to-green-950",
    border: "border-2 border-emerald-400/40 shadow-2xl ring-1 ring-white/10",
    textPrimary: "text-white",
    textSecondary: "text-teal-200",
    accent: "text-amber-300",
    logoBg: "bg-gradient-to-br from-emerald-400 to-teal-500 text-teal-950 shadow-md",
    cardBoxBg: "bg-teal-900/50 backdrop-blur",
    cardBoxBorder: "border-teal-700/50",
    footerBorder: "border-teal-800/60",
    glow: "bg-emerald-400/10",
  },
  platinum: {
    name: "Platinum Mint",
    badge: "bg-emerald-800/10 text-emerald-900 border-emerald-800/30",
    bg: "bg-gradient-to-br from-slate-100 via-emerald-50 to-teal-100",
    border: "border-2 border-emerald-800/30 shadow-xl ring-1 ring-green-900/10",
    textPrimary: "text-green-950",
    textSecondary: "text-emerald-900",
    accent: "text-emerald-950 font-extrabold",
    logoBg: "bg-gradient-to-br from-emerald-800 to-green-900 text-amber-300 shadow-md",
    cardBoxBg: "bg-white/80 backdrop-blur shadow-sm",
    cardBoxBorder: "border-emerald-300/80",
    footerBorder: "border-emerald-200",
    glow: "bg-emerald-500/10",
  },
};

export function DigitalCard() {
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
      color: {
        dark: "#052e16",
        light: "#ffffff",
      },
      errorCorrectionLevel: "H",
    })
      .then((url) => setBackQrUrl(url))
      .catch(() => {});
  }, [cardUrl, currentTheme]);

  const handleDownloadCardImage = async () => {
    const targetRef =
      activeSide === "front" ? frontCardRef.current : backCardRef.current;
    if (!targetRef) return;
    setDownloadingImg(true);
    try {
      const dataUrl = await toPng(targetRef, {
        cacheBust: true,
        pixelRatio: 3,
      });
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
        // User cancelled
      }
    } else {
      navigator.clipboard.writeText(cardUrl);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      {/* Controls Header: View Switcher, Theme Switcher & Actions */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
        {/* Front / Back Side Switcher */}
        <div className="flex items-center gap-3">
          <div className="flex rounded-xl bg-neutral-100 p-1 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setActiveSide("front")}
              className={`rounded-lg px-3.5 py-1.5 transition-all ${
                activeSide === "front"
                  ? "bg-green-800 text-white shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Front View
            </button>
            <button
              type="button"
              onClick={() => setActiveSide("back")}
              className={`rounded-lg px-3.5 py-1.5 transition-all ${
                activeSide === "back"
                  ? "bg-green-800 text-white shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Back View (QR)
            </button>
          </div>

          {/* Color Theme Selector */}
          <div className="hidden items-center gap-1 sm:flex">
            <span className="text-[11px] font-semibold text-neutral-500 mr-1">Gradient:</span>
            {(Object.keys(themes) as ThemeKey[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setCurrentTheme(key)}
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
                  currentTheme === key
                    ? "bg-green-100 text-green-900 ring-1 ring-green-600"
                    : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                {themes[key].name}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => handleSaveContact()}
            className="flex items-center gap-1.5 rounded-xl bg-green-700 px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-green-800 active:scale-95"
          >
            {savedVcard ? (
              <>
                <CheckIcon className="h-4 w-4 text-amber-300" />
                Saved!
              </>
            ) : (
              <>
                <UserPlusIcon className="h-4 w-4" />
                Save vCard (.vcf)
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleDownloadCardImage}
            disabled={downloadingImg}
            className="flex items-center gap-1.5 rounded-xl border border-green-200 bg-white px-3 py-2 text-xs font-semibold text-green-950 shadow-sm transition hover:bg-green-50 active:scale-95 disabled:opacity-50"
          >
            <DownloadIcon className="h-4 w-4 text-green-700" />
            {downloadingImg
              ? "Exporting..."
              : `Download PNG`}
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-1.5 rounded-xl border border-green-200 bg-white px-3 py-2 text-xs font-semibold text-green-950 shadow-sm transition hover:bg-green-50 active:scale-95"
          >
            {shared ? (
              <>
                <CheckIcon className="h-4 w-4 text-emerald-600" />
                Shared!
              </>
            ) : (
              <>
                <ShareIcon className="h-4 w-4 text-green-700" />
                Share
              </>
            )}
          </button>
        </div>
      </div>

      {/* Theme Switcher Bar for Mobile */}
      <div className="mb-6 flex items-center justify-center gap-1 sm:hidden">
        <span className="text-xs font-semibold text-neutral-500 mr-1">Gradient:</span>
        {(Object.keys(themes) as ThemeKey[]).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setCurrentTheme(key)}
            className={`rounded-lg px-2 py-1 text-[11px] font-semibold transition-all ${
              currentTheme === key
                ? "bg-green-100 text-green-900 ring-1 ring-green-600"
                : "bg-neutral-100 text-neutral-600"
            }`}
          >
            {themes[key].name}
          </button>
        ))}
      </div>

      {/* Main Grid: Card Preview Left, QR Code Right */}
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Business Card Graphic + Contact Action Boxes */}
        <div className="space-y-5 lg:col-span-7">
          {activeSide === "front" ? (
            /* FRONT SIDE - Standard 3.5:2 ratio, compact 460px max width */
            <div className="mx-auto w-full max-w-[460px]">
              <div
                ref={frontCardRef}
                className={`relative aspect-[1.75/1] w-full overflow-hidden rounded-2xl ${theme.bg} ${theme.border} p-4 sm:p-5 ${theme.textPrimary} flex flex-col justify-between select-none`}
              >
                {/* Decorative ambient highlights */}
                <div className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full ${theme.glow} blur-xl`} />

                {/* Header: Logo & Business Title */}
                <div className="relative z-10 flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src="/images/logo.png"
                      alt="BT Banana Logo"
                      width={36}
                      height={36}
                      className="h-9 w-9 object-contain shrink-0"
                    />
                    <div>
                      <h1 className="text-base sm:text-lg font-black tracking-tight leading-none">
                        {SITE_NAME}
                      </h1>
                      <p className={`mt-0.5 text-[9px] sm:text-[10px] font-bold tracking-wide ${theme.accent}`}>
                        WHOLESALE BANANAS &amp; SEEDS
                      </p>
                    </div>
                  </div>
                  <span className={`rounded-full border px-2 py-0.5 text-[8px] font-bold tracking-wider uppercase ${theme.badge}`}>
                    OFFICIAL
                  </span>
                </div>

                {/* Sub-header Badge / Location line filling space */}
                <div className="relative z-10 -mt-1 flex items-center justify-between text-[9px] font-semibold opacity-90">
                  <span className="tracking-wide uppercase">Alakode &amp; Nellipara Branches</span>
                  <span>Kannur, Kerala</span>
                </div>

                {/* Middle: Contacts Box */}
                <div className="relative z-10 my-auto grid grid-cols-2 gap-2">
                  {owners.map((owner) => (
                    <div
                      key={owner.phone}
                      className={`rounded-xl border ${theme.cardBoxBorder} ${theme.cardBoxBg} p-2`}
                    >
                      <p className="text-xs font-bold leading-tight">
                        {owner.name}
                      </p>
                      <p className={`text-[9px] font-semibold ${theme.textSecondary}`}>
                        {owner.role}
                      </p>
                      <p className={`mt-0.5 font-mono text-[11px] font-extrabold ${theme.accent}`}>
                        {formatPhone(owner.phone)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Offerings Pills Row */}
                <div className="relative z-10 flex flex-wrap items-center gap-1 text-[8px] font-semibold">
                  <span className="rounded-md bg-white/10 px-1.5 py-0.5">Nendran</span>
                  <span className="rounded-md bg-white/10 px-1.5 py-0.5">Plantain</span>
                  <span className="rounded-md bg-white/10 px-1.5 py-0.5">Vazhavithu (Seeds)</span>
                  <span className="rounded-md bg-white/10 px-1.5 py-0.5">Bulk Wholesale</span>
                </div>

                {/* Footer: Address & Website */}
                <div className={`relative z-10 flex items-center justify-between border-t ${theme.footerBorder} pt-1.5 text-[9px] ${theme.textSecondary}`}>
                  <span className="flex items-center gap-1">
                    <MapPinIcon className="h-3 w-3 shrink-0" />
                    <span>Direct Supply • Wholesale Rates</span>
                  </span>
                  <span className={`flex items-center gap-1 font-bold ${theme.textPrimary}`}>
                    <GlobeIcon className="h-3 w-3 shrink-0" />
                    <span>{SITE_DOMAIN}</span>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* BACK SIDE */
            <div className="mx-auto w-full max-w-[460px]">
              <div
                ref={backCardRef}
                className={`relative aspect-[1.75/1] w-full overflow-hidden rounded-2xl ${theme.bg} ${theme.border} p-4 sm:p-5 ${theme.textPrimary} flex items-center justify-between gap-3 sm:gap-4 select-none`}
              >
                {/* Left Side: Services & Info */}
                <div className="flex flex-col justify-between h-full flex-1">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <Image
                        src="/images/logo.png"
                        alt="BT Banana Logo"
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain shrink-0"
                      />
                      <span className="text-sm sm:text-base font-black tracking-tight">
                        {SITE_NAME}
                      </span>
                    </div>
                    <p className={`mt-0.5 text-[9px] sm:text-[10px] font-semibold ${theme.textSecondary}`}>
                      Wholesale Bananas &amp; Vazhavithu (Seeds)
                    </p>
                  </div>

                  <div className="space-y-0.5 my-auto">
                    <p className={`text-[10px] font-bold ${theme.accent}`}>
                      SUPPLY DETAILS:
                    </p>
                    <ul className={`text-[9px] sm:text-[10px] space-y-0.5 ${theme.textSecondary}`}>
                      <li>• Nendran, Plantain &amp; Banana Varieties</li>
                      <li>• Banana Seeds / Vazhavithu (വാഴവിത്ത്)</li>
                      <li>• Branches at Alakode &amp; Nellipara</li>
                    </ul>
                  </div>

                  <div className={`text-[8px] sm:text-[9px] border-t ${theme.footerBorder} pt-1 ${theme.textSecondary}`}>
                    Scan QR code with phone camera to open card.
                  </div>
                </div>

                {/* Right Side: QR Code Frame */}
                <div className="flex flex-col items-center justify-center rounded-xl bg-white p-2 text-green-950 shadow-md shrink-0">
                  {backQrUrl ? (
                    <img
                      src={backQrUrl}
                      alt="BT Banana QR Code"
                      className="h-20 sm:h-22 w-20 sm:w-22 object-contain"
                    />
                  ) : (
                    <div className="h-20 sm:h-22 w-20 sm:w-22 flex items-center justify-center text-[9px]">
                      Loading...
                    </div>
                  )}
                  <span className="mt-1 text-[8px] font-extrabold text-green-950 tracking-tight">
                    SCAN FOR CONTACT
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Call & WhatsApp Action Boxes */}
          <div className="mx-auto grid max-w-[460px] gap-3 sm:grid-cols-2">
            {owners.map((owner) => (
              <div
                key={owner.phone}
                className="flex flex-col justify-between rounded-2xl border border-green-100 bg-white p-3.5 shadow-sm"
              >
                <div>
                  <p className="font-bold text-green-950 text-sm">
                    {owner.name}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {owner.role} • {formatPhone(owner.phone)}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <a
                    href={telHref(owner.phone)}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-amber-400 py-2 px-3 text-xs font-bold text-green-950 shadow-sm transition hover:bg-amber-300 active:scale-95"
                  >
                    <PhoneIcon className="h-3.5 w-3.5 shrink-0" />
                    Call
                  </a>
                  <a
                    href={whatsappHref(owner.phone, defaultEnquiryMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] py-2 px-3 text-xs font-bold text-white shadow-sm transition hover:bg-[#20ba59] active:scale-95"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: QR Code Container */}
        <div className="lg:col-span-5">
          <QrCodeDisplay cardUrl={cardUrl} />
        </div>
      </div>
    </div>
  );
}
