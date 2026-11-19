"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
      className={`flex flex-col items-center rounded-3xl bg-white p-6 shadow-xl shadow-green-900/5 ring-1 ring-green-900/10 sm:p-8 ${className}`}
    >
      {/* Brand Header */}
      <div className="mb-5 flex items-center gap-2">
        <Image
          src="/images/logo.png"
          alt="BT Banana Logo"
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
        />
        <span className="text-sm font-bold text-green-950">BT Banana QR code</span>
      </div>

      {/* Mode Switcher */}
      <div className="mb-6 flex rounded-full bg-green-900/5 p-1 text-xs font-semibold text-green-950">
        <button
          type="button"
          onClick={() => setQrType("url")}
          className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition-all ${
            qrType === "url"
              ? "bg-green-950 text-amber-300 shadow-sm"
              : "text-green-900 hover:text-green-950"
          }`}
        >
          <LinkIcon className="h-3.5 w-3.5" />
          Opens this card
        </button>
        <button
          type="button"
          onClick={() => setQrType("vcard")}
          className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition-all ${
            qrType === "vcard"
              ? "bg-green-950 text-amber-300 shadow-sm"
              : "text-green-900 hover:text-green-950"
          }`}
        >
          <QrCodeIcon className="h-3.5 w-3.5" />
          Saves contact
        </button>
      </div>

      {/* QR Code Container with Centered Logo Badge */}
      <div className="relative flex h-56 w-56 items-center justify-center rounded-3xl border border-green-100 bg-white p-3 shadow-md ring-8 ring-green-50">
        {qrDataUrl ? (
          <div className="relative flex h-full w-full items-center justify-center">
            <img
              src={qrDataUrl}
              alt="BT Banana Digital Business Card QR Code"
              className="h-full w-full rounded-lg object-contain"
            />
            {/* Center Logo Badge */}
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-white p-1 shadow-md border border-green-100">
              <Image
                src="/images/logo.png"
                alt="BT Banana Logo"
                width={32}
                height={32}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-neutral-400">
            Generating QR...
          </div>
        )}
      </div>

      {/* Scan helper note */}
      <p className="mt-5 text-center text-sm font-medium text-neutral-600">
        {qrType === "url"
          ? "Scan with smartphone camera to open Digital Card"
          : "Scan to automatically add BT Banana to Phonebook"}
      </p>

      {/* Action Buttons */}
      <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={handleDownloadQr}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-green-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800 active:scale-95"
        >
          {downloaded ? (
            <>
              <CheckIcon className="h-4 w-4 text-amber-300" />
              QR Downloaded!
            </>
          ) : (
            <>
              <DownloadIcon className="h-4 w-4" />
              Download QR (PNG)
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleCopyLink}
          className="flex items-center justify-center gap-1.5 rounded-full border border-green-200 bg-white px-4 py-3 text-sm font-semibold text-green-900 transition hover:border-green-700 hover:bg-green-50 active:scale-95"
          title="Copy Card Link"
        >
          {copied ? (
            <>
              <CheckIcon className="h-4 w-4 text-green-700" />
              Copied
            </>
          ) : (
            <>
              <CopyIcon className="h-4 w-4 text-green-700" />
              Copy Link
            </>
          )}
        </button>
      </div>
    </div>
  );
}
