import { ImageResponse } from "next/og";

export const alt =
  "PallmLaw, Estate Planning workflow software and firm intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "flex-start",
          background: "#071a2b",
          color: "#f4efe5",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px 80px",
          width: "100%",
        }}
      >
        <div style={{ color: "#d4a84f", display: "flex", fontSize: 34 }}>
          PallmLaw
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              letterSpacing: "-2px",
              lineHeight: 1.05,
              maxWidth: 960,
            }}
          >
            Estate Planning Workflow Software &amp; Firm Intelligence
          </div>
          <div style={{ color: "#b8c4ce", display: "flex", fontSize: 28 }}>
            Track matters. Automate workflows. See where the firm needs attention.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
