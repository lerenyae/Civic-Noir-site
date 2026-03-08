"use client";
import { RecordEntry } from "@/lib/records";

export function CommendationRenderer({ record }: { record: RecordEntry }) {
  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0A", fontFamily: "Georgia, 'Times New Roman', serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=IBM+Plex+Mono:wght@300;400&family=Outfit:wght@200;300&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 680, width: "100%", marginBottom: 20, display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 9, fontWeight: 200, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(184,160,120,0.5)", border: "1px solid rgba(240,235,227,0.1)", padding: "4px 10px" }}>
          Commendation
        </span>
        <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 10, fontWeight: 200, letterSpacing: "0.15em", color: "rgba(240,235,227,0.25)" }}>
          {record.displayDate}
        </span>
      </div>

      <div style={{ maxWidth: 680, width: "100%", background: "#f5f0e8", border: "1px solid #c8bfa8", boxShadow: "0 4px 24px rgba(0,0,0,0.5)", padding: "56px 48px", position: "relative", overflow: "hidden", color: "#1a1a1a" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 200, height: 200, background: "radial-gradient(ellipse at top right, rgba(160,140,100,0.08), transparent)", pointerEvents: "none" }} />

        {/* BPD Header */}
        <div style={{ textAlign: "center", marginBottom: 36, paddingBottom: 24, borderBottom: "2px solid #1a1a1a" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "#2a2a2a", marginBottom: 6 }}>BALTIMORE POLICE DEPARTMENT</p>
          <p style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#4a4a4a", marginBottom: 16 }}>OFFICE OF THE COMMISSIONER</p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 400, letterSpacing: "0.1em", color: "#1a1a1a", marginBottom: 4 }}>LETTER OF COMMENDATION</p>
          <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5a5a5a" }}>Meritorious Service — Sandtown-Winchester District</p>
        </div>

        {/* To block */}
        <div style={{ marginBottom: 28, display: "grid", gridTemplateColumns: "140px 1fr", gap: "8px 16px", fontSize: 13 }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, textTransform: "uppercase", color: "#666", letterSpacing: "0.1em" }}>TO:</span>
          <span>Detective Philip Han, Badge #3847 — Homicide Unit, Grade III</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, textTransform: "uppercase", color: "#666", letterSpacing: "0.1em" }}>DATE:</span>
          <span>{record.displayDate}</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, textTransform: "uppercase", color: "#666", letterSpacing: "0.1em" }}>INCIDENT REF:</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11 }}>BPD-02-08-1187 — Sandtown-Winchester</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, textTransform: "uppercase", color: "#666", letterSpacing: "0.1em" }}>CATEGORY:</span>
          <span>Meritorious Service — Civilian Protection Under Active Fire</span>
        </div>

        <div style={{ height: 1, background: "#ccc", margin: "24px 0" }} />

        {/* Body */}
        <div style={{ fontSize: 13, lineHeight: 2, color: "#2a2a2a", marginBottom: 32 }}>
          <p style={{ marginBottom: 16 }}>
            On the evening of August 12, 2002, Detective Philip Han responded to reports of an active shooting in the 1800 block of Presbury Street, Sandtown-Winchester. Upon arrival, Detective Han located a civilian, <strong>Eve Franklin</strong>, pinned in an exposed position under ongoing fire from a vehicle-mounted shooter.
          </p>
          <p style={{ marginBottom: 16 }}>
            Detective Han advanced toward the civilian without cover, sustained <strong>two ballistic impacts to his vest</strong>, and maintained a shielding position over Ms. Franklin until the threat withdrew. He did not discharge his weapon. He did not withdraw. He kept Ms. Franklin down until the vehicle left the block.
          </p>
          <p style={{ marginBottom: 16 }}>
            Ms. Franklin sustained no injuries. Detective Han was transported to Mercy Medical Center, treated, and cleared for duty within 48 hours.
          </p>
          <p style={{ marginBottom: 0 }}>
            This commendation is entered into Detective Han&apos;s permanent record in recognition of uncommon composure and disregard for personal safety in service of a civilian&apos;s life. The Baltimore Police Department is honored to have officers of his character.
          </p>
        </div>

        <div style={{ height: 1, background: "#ccc", margin: "24px 0" }} />

        {/* Signature block */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 48px", marginBottom: 28 }}>
          <div style={{ borderBottom: "1px solid #999", paddingBottom: 4 }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontStyle: "italic", color: "#2a2a2a", marginBottom: 2, opacity: 0.75 }}>R. Fortier</p>
            <p style={{ fontSize: 10, color: "#777", letterSpacing: "0.1em" }}>Commissioner R. Fortier</p>
            <p style={{ fontSize: 9, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase" }}>Office of the Commissioner, BPD</p>
          </div>
          <div style={{ borderBottom: "1px solid #999", paddingBottom: 4 }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontStyle: "italic", color: "#2a2a2a", marginBottom: 2, opacity: 0.75 }}>M. Crane</p>
            <p style={{ fontSize: 10, color: "#777", letterSpacing: "0.1em" }}>Lt. M. Crane, Homicide Unit</p>
            <p style={{ fontSize: 9, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase" }}>Supervising Officer</p>
          </div>
        </div>

        {/* Filing stamp */}
        <div style={{ marginTop: 32, padding: "14px 18px", border: "2px solid #8a7050", display: "inline-block", transform: "rotate(-1.5deg)", opacity: 0.55 }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#8a7050", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", lineHeight: 1.6 }}>
            ENTERED INTO<br />PERMANENT RECORD<br />BPD — HOMICIDE UNIT<br />AUGUST 19, 2002
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 680, width: "100%", marginTop: 32, textAlign: "center" }}>
        <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(184,160,120,0.2), transparent)", marginBottom: 20 }} />
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "rgba(240,235,227,0.15)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Archive source: {record.institution} — {record.displayDate}
        </p>
      </div>
    </div>
  );
}
