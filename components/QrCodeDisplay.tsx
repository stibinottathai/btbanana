"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { generateVCardString } from "@/lib/vcard";
import { SITE_URL } from "@/lib/site";
import { QrCodeIcon, DownloadIcon, CheckIcon, CopyIcon, LinkIcon } from "./icons";

interface QrCodeDisplayProps {
  cardUrl?: string;
  className?: string;
}

export function QrCodeDisplay({
  cardUrl = `${SITE_URL}/card`,
  className = "",
}: QrCodeDisplayProps) {
  const [qrType, setQrType] = useState<"url" | "vcard">("url");
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const qrText = qrType === "url" ? cardUrl : generateVCardString();

  useEffect(() => {
    let isMounted = true;
    QRCode.toDataURL(qrText, {
      width: 400,
      margin: 2,
      color: {
        dark: "#052e16", // Deep forest green dots
        light: "#ffffff",
      },
      errorCorrectionLevel: "H",
    })
      .then((url) => {
        if (isMounted) setQrDataUrl(url);
      })
      .catch((err) => {
        console.error("QR Code generation error:", err);
      });

    return () => {
      isMounted = false;
    };
  }, [qrText]);

  const handleDownloadQr = () => {
    if (!qrDataUrl) return;
    const link = document.createElement("a");
    link.href = qrDataUrl;
    link.download = `BT_Banana_QR_${qrType === "url" ? "Card_Link" : "vCard"}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(cardUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`flex flex-col items-center rounded-2xl border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/40 p-6 shadow-lg backdrop-blur ${className}`}
    >
      {/* Mode Switcher */}
      <div className="mb-4 flex rounded-xl bg-emerald-900/5 p-1 text-xs font-semibold text-emerald-950">
        <button
          type="button"
          onClick={() => setQrType("url")}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-all ${
            qrType === "url"
              ? "bg-emerald-700 text-white shadow-sm"
              : "text-emerald-900 hover:text-emerald-950"
          }`}
        >
          <LinkIcon className="h-3.5 w-3.5" />
          Digital Card Link
        </button>
        <button
          type="button"
          onClick={() => setQrType("vcard")}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-all ${
            qrType === "vcard"
              ? "bg-emerald-700 text-white shadow-sm"
              : "text-emerald-900 hover:text-emerald-950"
          }`}
        >
          <QrCodeIcon className="h-3.5 w-3.5" />
          Direct vCard QR
        </button>
      </div>

      {/* QR Code Container */}
      <div className="relative flex h-52 w-52 items-center justify-center rounded-2xl border border-emerald-200/80 bg-white p-3 shadow-md ring-4 ring-emerald-50">
        {qrDataUrl ? (
          <img
            src={qrDataUrl}
            alt="BT Banana Digital Business Card QR Code"
            className="h-full w-full object-contain rounded-lg"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-neutral-400">
            Generating QR...
          </div>
        )}
      </div>

      {/* Scan helper note */}
      <p className="mt-3 text-center text-xs font-medium text-emerald-900/80">
        {qrType === "url"
          ? "Scan with smartphone camera to open Digital Card"
          : "Scan to automatically add BT Banana to Phonebook"}
      </p>

      {/* Action Buttons */}
      <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={handleDownloadQr}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-800 px-4 py-2.5 text-xs font-semibold text-white shadow transition hover:bg-emerald-900 active:scale-95"
        >
          {downloaded ? (
            <>
              <CheckIcon className="h-4 w-4 text-emerald-300" />
              QR Downloaded!
            </>
          ) : (
            <>
              <DownloadIcon className="h-4 w-4" />
              Download QR Code (PNG)
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleCopyLink}
          className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-200 bg-white px-3 py-2.5 text-xs font-semibold text-emerald-900 shadow-sm transition hover:bg-emerald-50 active:scale-95"
          title="Copy Card Link"
        >
          {copied ? (
            <>
              <CheckIcon className="h-4 w-4 text-emerald-600" />
              Copied
            </>
          ) : (
            <>
              <CopyIcon className="h-4 w-4 text-emerald-700" />
              Copy Link
            </>
          )}
        </button>
      </div>
    </div>
  );
}
