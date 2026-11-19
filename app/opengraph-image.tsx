import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

// Default social / AI link-preview image. Pages that set their own
// openGraph.images (e.g. /banana-seeds) keep theirs; every other page falls
// back to this one instead of sharing as a bare text link.
export const alt =
  "BT Banana — Vazhavithu (banana suckers) delivered across Kerala and wholesale bananas in Kannur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/images/logo.png"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #14532d 0%, #166534 55%, #3f6212 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              width: 104,
              height: 104,
              borderRadius: 24,
              background: "#ffffff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`data:image/png;base64,${logo}`} width={84} height={84} alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>BT Banana</div>
            <div style={{ fontSize: 26, color: "#fde047" }}>Alakode · Kannur · Kerala</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1.5 }}>
            Vazhavithu (Banana Suckers) & Wholesale Bananas
          </div>
          <div style={{ fontSize: 30, color: "#dcfce7" }}>
            Nendran · Robusta · Njali Poovan · Palayankodan — delivered to all 14 districts of Kerala
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            borderTop: "2px solid rgba(255,255,255,0.25)",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex" }}>Call / WhatsApp: +91 94474 83169 · +91 80866 48081</div>
          <div style={{ display: "flex", color: "#fde047", fontWeight: 700 }}>btbanana.com</div>
        </div>
      </div>
    ),
    size,
  );
}
