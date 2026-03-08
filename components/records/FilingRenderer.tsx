"use client";
import { RecordEntry } from "@/lib/records";

export function FilingRenderer({ record }: { record: RecordEntry }) {
  const isDavidson = record.slug === "davidson-associates-founding";
  const isAzure = record.slug === "azure-horizons-parcel-transfer";

  const members = isDavidson
    ? [
        ["1.", "Leo A. Davidson, Esq.", "Managing Partner — Founding Member"],
        ["2.", "Hon. Raymond A. Bates", "Of Counsel — Founding Member"],
        ["3.", "Ellis J. Parker, Sr.", "Executive Consultant — Founding Member"],
        ["4.", "Charles R. Dawson", "Advisory Board — Founding Member"],
      ]
    : null;

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
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Outfit:wght@200;300&family=IBM+Plex+Mono:wght@300;400&display=swap"
        rel="stylesheet"
      />

      {/* Document type badge */}
      <div style={{ maxWidth: 680, width: "100%", marginBottom: 20, display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 9, fontWeight: 200, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(184,160,120,0.5)", border: "1px solid rgba(240,235,227,0.1)", padding: "4px 10px" }}>
          Business Filing
        </span>
        <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 10, fontWeight: 200, letterSpacing: "0.15em", color: "rgba(240,235,227,0.25)" }}>
          {record.date}
        </span>
      </div>

      {/* THE DOCUMENT */}
      <div
        style={{
          maxWidth: 680,
          width: "100%",
          background: "#f5f0e8",
          border: "1px solid #c8bfa8",
          boxShadow: "0 4px 24px rgba(0,0,0,0.5), inset 0 0 60px rgba(0,0,0,0.03)",
          padding: "56px 48px",
          position: "relative",
          overflow: "hidden",
          color: "#1a1a1a",
        }}
      >
        {/* Age texture */}
        <div style={{ position: "absolute", top: 0, right: 0, width: 200, height: 200, background: "radial-gradient(ellipse at top right, rgba(160,140,100,0.08), transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: 300, height: 150, background: "radial-gradient(ellipse at bottom left, rgba(140,120,80,0.06), transparent)", pointerEvents: "none" }} />

        {/* State header */}
        <div style={{ textAlign: "center", marginBottom: 36, borderBottom: "2px solid #1a1a1a", paddingBottom: 24 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", fontWeight: 400, marginBottom: 4, color: "#2a2a2a" }}>STATE OF MARYLAND</p>
          <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 400, marginBottom: 16, color: "#3a3a3a" }}>DEPARTMENT OF ASSESSMENTS AND TAXATION</p>
          <p style={{ fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 400, color: "#1a1a1a" }}>ARTICLES OF ORGANIZATION</p>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#4a4a4a", marginTop: 4 }}>Domestic Limited Liability Company</p>
        </div>

        {/* Form fields */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "12px 16px", fontSize: 13, lineHeight: 1.8 }}>
            <span style={{ color: "#5a5a5a", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em" }}>Entity Name:</span>
            <span style={{ fontWeight: 400, borderBottom: "1px solid #999", paddingBottom: 2 }}>DAVIDSON & ASSOCIATES LLC</span>
            <span style={{ color: "#5a5a5a", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em" }}>Entity ID:</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12 }}>D14826307</span>
            <span style={{ color: "#5a5a5a", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em" }}>Date of Formation:</span>
            <span>{record.date}</span>
            <span style={{ color: "#5a5a5a", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em" }}>Principal Office:</span>
            <span>201 N. Charles Street, Suite 1400<br />Baltimore, Maryland 21201</span>
            <span style={{ color: "#5a5a5a", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em" }}>Nature of Business:</span>
            <span>Legal Services — Criminal Defense, Civil Litigation, Corporate Advisory</span>
            <span style={{ color: "#5a5a5a", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em" }}>Resident Agent:</span>
            <span>Leo A. Davidson, Esq.</span>
            <span style={{ color: "#5a5a5a", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em" }}>Term:</span>
            <span>Perpetual</span>
          </div>
        </div>

        <div style={{ height: 1, background: "#1a1a1a", margin: "28px 0" }} />

        {members && (
          <>
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 400, marginBottom: 16, color: "#2a2a2a" }}>ORGANIZING MEMBERS</p>
              <div style={{ fontSize: 13, lineHeight: 2.2 }}>
                <div style={{ display: "grid", gridTemplateColumns: "40px 1fr 1fr", gap: 8, borderBottom: "1px solid #ccc", paddingBottom: 4, marginBottom: 8, fontSize: 10, color: "#777", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  <span></span><span>Name</span><span>Title / Capacity</span>
                </div>
                {members.map(([num, name, title], i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "40px 1fr 1fr", gap: 8, borderBottom: "1px solid #e0ddd5", paddingBottom: 6, marginBottom: 6 }}>
                    <span style={{ color: "#999", fontSize: 11 }}>{num}</span>
                    <span style={{ fontWeight: 400 }}>{name}</span>
                    <span style={{ color: "#4a4a4a", fontSize: 12 }}>{title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ height: 1, background: "#1a1a1a", margin: "28px 0" }} />
          </>
        )}

        <div style={{ marginBottom: 28 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 400, marginBottom: 12, color: "#2a2a2a" }}>PURPOSE</p>
          <p style={{ fontSize: 12, lineHeight: 1.9, color: "#3a3a3a" }}>
            The Company is organized for the purpose of providing legal counsel, representation, and advisory services to individuals, corporate entities, and governmental bodies within the State of Maryland and such other jurisdictions as the Members may determine. The Company may engage in any lawful activity permitted under the Maryland Limited Liability Company Act, Md. Code Ann., Corps. &amp; Ass&apos;ns §§ 4A-101 et seq.
          </p>
        </div>

        <div style={{ height: 1, background: "#1a1a1a", margin: "28px 0" }} />

        {members && (
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 400, marginBottom: 24, color: "#2a2a2a" }}>SIGNATURES OF ORGANIZING MEMBERS</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 48px" }}>
              {[
                ["Leo A. Davidson", "Managing Partner"],
                ["Raymond A. Bates", "Of Counsel"],
                ["Ellis J. Parker, Sr.", "Executive Consultant"],
                ["Charles R. Dawson", "Advisory Board"],
              ].map(([name, title], i) => (
                <div key={i} style={{ borderBottom: "1px solid #999", paddingBottom: 4 }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontStyle: "italic", color: "#2a2a2a", marginBottom: 2, opacity: 0.7 }}>
                    {name.split(" ")[0][0]}. {name.split(" ").slice(-1)[0]}
                  </p>
                  <p style={{ fontSize: 10, color: "#777", letterSpacing: "0.1em" }}>{name}</p>
                  <p style={{ fontSize: 9, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase" }}>{title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filing stamp */}
        <div style={{ marginTop: 40, padding: "16px 20px", border: "2px solid #8a7050", display: "inline-block", transform: "rotate(-2deg)", opacity: 0.6 }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#8a7050", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", lineHeight: 1.6 }}>
            FILED<br />
            {record.date.toUpperCase().split(",")[0]}<br />
            DEPT. OF ASSESSMENTS<br />
            AND TAXATION<br />
            STATE OF MARYLAND
          </p>
        </div>

        {isDavidson && (
          <div style={{ marginTop: 32, textAlign: "right" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, fontStyle: "italic", color: "rgba(100,80,50,0.4)", transform: "rotate(-1deg)" }}>
              &quot;Four names. One address. — L.D.&quot;
            </p>
          </div>
        )}
      </div>

      <div style={{ maxWidth: 680, width: "100%", marginTop: 32, textAlign: "center" }}>
        <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(184,160,120,0.2), transparent)", marginBottom: 20 }} />
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "rgba(240,235,227,0.15)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Document source: {record.institution} — Public Records — Filed {record.date}
        </p>
      </div>
    </div>
  );
}
