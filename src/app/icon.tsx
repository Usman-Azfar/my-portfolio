import { ImageResponse } from "next/og";
import { theme } from "@/config/site";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: theme.background,
          borderRadius: 112,
          border: `16px solid ${theme.primary}`,
          color: theme.primary,
          fontSize: 240,
          fontWeight: 700,
          letterSpacing: -12,
        }}
      >
        UA
      </div>
    ),
    { ...size },
  );
}
