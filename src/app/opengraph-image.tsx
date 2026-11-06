import { ImageResponse } from "next/og";
import { person, theme } from "@/config/site";

export const alt = `${person.name} — Software Engineer & AI Researcher`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const facts = ["Backend engineer · InfoTech Group", "HelmX edge-AI research", "AWS Certified Solutions Architect"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: `radial-gradient(circle at 15% 10%, rgba(124,199,255,0.22), transparent 45%), ${theme.background}`,
          color: theme.text,
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: theme.primary }}>PORTFOLIO</div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 108, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
            {person.name}
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 40, color: theme.secondary }}>
            Software Engineer · AI Researcher · Systems Builder
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: 36, gap: 16 }}>
            {facts.map((fact) => (
              <div
                key={fact}
                style={{
                  display: "flex",
                  padding: "10px 22px",
                  borderRadius: 999,
                  border: "2px solid rgba(124,199,255,0.4)",
                  fontSize: 26,
                  color: theme.muted,
                }}
              >
                {fact}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: theme.muted }}>
          <span>{person.location}</span>
          <span style={{ color: theme.primary }}>usmanazfar.dev</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
