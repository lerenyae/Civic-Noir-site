"use client";
import { RecordEntry } from "@/lib/records";

const obituaryContent: Record<string, {
  fullName: string;
  dates: string;
  photo?: boolean;
  body: string[];
  survivors: string[];
  services: string;
}> = {
  "leo-davidson-obituary": {
    fullName: "Leo Aubrey Davidson, Esq.",
    dates: "December 14, 1941 — February 28, 2006",
    body: [
      "Leo Aubrey Davidson, founding partner of Davidson & Associates and one of Baltimore's most consequential legal minds, died Tuesday at Johns Hopkins Hospital. He was 64. The cause was cardiac arrest. He had been ill for some months, though few outside his household were permitted to know it.",
      "Mr. Davidson was born in West Baltimore in 1941 and educated at Morgan State University before earning his law degree from the University of Maryland School of Law in 1966. He passed the bar the same year and opened a sole practice on North Avenue, which he would spend the next sixteen years building into the firm that bore his name.",
      "Davidson & Associates, incorporated in October 1982, became known throughout the city for its criminal defense work, its municipal advisory practice, and for a client list that, as one colleague observed, 'read like a map of who runs this city and who keeps it running.' Mr. Davidson served as counsel, advisor, or silent architect to an estimated forty major city contracts between 1985 and 2003. He received no public credit for most of them. This was, colleagues noted, intentional.",
      "He was a man who understood that the most durable power was the kind nobody announced. He held that view about the law, about politics, about family. About everything, in the end.",
      "He is survived by his son, Shawn Davidson, Esq., of Baltimore, and by a caseload that, as of press time, no one has fully read.",
      "Services will be private, per the family's request. A memorial gathering will be held at a date to be announced. In lieu of flowers, the family requests that those who knew Mr. Davidson simply do their work correctly.",
    ],
    survivors: [
      "Son: Shawn A. Davidson, Esq.",
      "Former partners: Raymond A. Bates (retired); Charles R. Dawson; Ellis J. Parker, Sr.",
    ],
    services: "Private. Memorial date TBD. In lieu of flowers: do your work correctly.",
  },
};

export function ObituaryRenderer({ record }: { record: RecordEntry }) {
  const content = obituaryContent[record.slug];

  if (!content) {
    return (
      <div style={{ minHeight: "100vh", background: "#0A0A0A", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "rgba(240,235,227,0.3)", fontFamily: "monospace" }}>Document not available.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A0A0A",
        fontFamily: "Georgia, 'Times New Roman', serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=IBM+Plex+Mono:wght@300&family=Outfit:wght@200;300&display=swap"
        rel="stylesheet"
      />

      {/* Document type badge */}
      <div style={{ maxWidth: 640, width: "100%", marginBottom: 20, display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 9, fontWeight: 200, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(184,160,120,0.5)", border: "1px solid rgba(240,235,227,0.1)", padding: "4px 10px" }}>
          Obituary
        </span>
        <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 10, fontWeight: 200, letterSpacing: "0.15em", color: "rgba(240,235,227,0.25)" }}>
          {record.date}
        </span>
      </div>

      {/* THE DOCUMENT */}
      <div
        style={{
          maxWidth: 640,
          width: "100%",
          background: "#f8f4ec",
          border: "1px solid #d0c8b0",
          boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
          padding: "60px 56px",
          position: "relative",
          overflow: "hidden",
          color: "#1a1a1a",
        }}
      >
        {/* Age wash */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(ellipse at 30% 20%, rgba(180,160,110,0.06), transparent 60%)", pointerEvents: "none" }} />

        {/* Masthead line */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", color: "#7a6a4a", marginBottom: 16 }}>
            The Baltimore Sun
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 16 }}>
            <div style={{ flex: 1, height: 1, background: "#1a1a1a" }} />
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, letterSpacing: "0.3em", textTransform: "uppercase", color: "#3a3a3a" }}>In Memoriam</span>
            <div style={{ flex: 1, height: 1, background: "#1a1a1a" }} />
          </div>
        </div>

        {/* Name */}
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 36,
              fontWeight: 500,
              color: "#0a0a0a",
              letterSpacing: "0.05em",
              lineHeight: 1.2,
              marginBottom: 8,
            }}
          >
            {content.fullName}
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 15,
              fontStyle: "italic",
              color: "#5a5a5a",
              letterSpacing: "0.1em",
            }}
          >
            {content.dates}
          </p>
        </div>

        {/* Ornamental divider */}
        <div style={{ textAlign: "center", margin: "24px 0", color: "#8a7a5a", fontSize: 18 }}>✦ ✦ ✦</div>

        {/* Body */}
        <div>
          {content.body.map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 15,
                lineHeight: 1.9,
                color: "#2a2a2a",
                marginBottom: 18,
                textAlign: "justify",
                ...(i === content.body.length - 1 ? { fontStyle: "italic", color: "#4a4a4a" } : {}),
              }}
            >
              {para}
            </p>
          ))}
        </div>

        <div style={{ textAlign: "center", margin: "28px 0", color: "#8a7a5a", fontSize: 14 }}>— ◆ —</div>

        {/* Survivors */}
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#5a5a5a", marginBottom: 10 }}>
            He is survived by:
          </p>
          {content.survivors.map((s, i) => (
            <p key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, color: "#3a3a3a", lineHeight: 1.8, paddingLeft: 16 }}>
              {s}
            </p>
          ))}
        </div>

        {/* Services */}
        <div style={{ borderTop: "1px solid #bbb", paddingTop: 20, marginTop: 20 }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#5a5a5a", marginBottom: 8 }}>
            Services:
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, fontStyle: "italic", color: "#4a4a4a", lineHeight: 1.7 }}>
            {content.services}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 640, width: "100%", marginTop: 32, textAlign: "center" }}>
        <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(184,160,120,0.2), transparent)", marginBottom: 20 }} />
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "rgba(240,235,227,0.15)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Source: {record.institution} — {record.date}
        </p>
      </div>
    </div>
  );
}
