"use client";
import { RecordEntry } from "@/lib/records";

const articleContent: Record<string, { body: string[]; byline?: string; deck?: string; special?: string }> = {
  "garrick-shooting-sentinel": {
    byline: "Staff Reporter",
    deck: "Shot fired at 8:24 p.m. during standing-room forum; suspect at large for 32 hours before arrest at West Baltimore restaurant",
    body: [
      "BALTIMORE — Matthew Garrick, Deputy Mayor for Economic Development, was shot once at the back of the head Tuesday evening during a public forum at the Dawson Center on North Avenue, according to Baltimore Police Department sources. He was pronounced dead at the scene at approximately 8:41 p.m.",
      "A 19-year-old Westport resident, identified by police as Antonio Moretti, was taken into custody Wednesday evening at Maria's Restaurant on the west side, thirty-two hours after the shooting. Officers reported finding the suspect in the basement-level kitchen area. No resistance was offered.",
      "According to Executive Protection Director James Alford, a witness described seeing a white male in a white t-shirt moving west from the lectern area immediately following the shot. Body camera footage from officers on scene has not been made available pending review.",
      "Mayor Charles Dawson, in brief remarks outside City Hall, called the killing 'a senseless act of violence against a public servant who spent his career fighting for Baltimore's future.' The mayor announced a $25,000 reward for information related to the shooting.",
      "Deputy Mayor Garrick, 54, had served in city government for eleven years. He was the principal architect of the Westport Redevelopment Initiative and had been a visible advocate for the city's harbor expansion bond proposal, which is currently before the City Council.",
      "The Baltimore Sentinel Post will continue to follow developments in this story.",
    ],
  },
  "sentinel-editorial-grey-byline": {
    byline: "Jordan Grey, Staff Reporter",
    deck: "A months-long examination of Baltimore's tax increment financing approvals reveals a pattern of parcel transfers, political connections, and missing public comment periods",
    body: [
      "BALTIMORE — The parcels moved in sequence. The approvals arrived without public comment periods. The money followed a line the city drew in pencil — and then spent the next eighteen months pretending the pencil didn't exist.",
      "An examination of land records, wire transfer logs, and Board of Estimates agenda packets by The Baltimore Sentinel Post reveals that at least six parcels in the Westport Tax Increment Financing district changed hands in the months surrounding the November 2005 shooting of Deputy Mayor Matthew Garrick — with several transactions completing within 48 hours of Garrick's death.",
      "The largest single transfer — Parcel 6A, assessed at $1.2 million and sold to Azure Horizons LLC for $400,000 — closed two days after Garrick's death. Azure Horizons transferred the property to Pinnacle Investments within the same business week. Both entities list post office box addresses in Maryland and Virginia respectively.",
      "City records show that the Westport TIF approvals were processed through the Department of Housing and Community Development's batch filing system, a mechanism typically used for routine administrative actions rather than major land dispositions. Several approval packets obtained through public records requests show incomplete signatures and, in at least two cases, blanked-out approvals committee line items.",
      "The Sentinel Post requested comment from Mayor Dawson's office, the Department of Finance, and the Department of Housing and Community Development. None provided a substantive response by press time.",
      "The investigation is ongoing.",
    ],
  },
  "jordan-grey-pulitzer": {
    byline: "Jordan M. Grey, Foreign Correspondent",
    deck: "Dispatches from Dhahran document the civilian cost of precision strikes — and the silence that follows the count",
    special: "PULITZER PRIZE — FOREIGN CORRESPONDENCE — 1996",
    body: [
      "DHAHRAN, SAUDI ARABIA — The soldier's name was not in the dispatch. The child's name was not in the dispatch. The photograph was taken at 6:12 in the morning, before the official count, before the official statement, before the official version of what happened to the block where a market used to stand.",
      "A soldier was hauling a child through smoke. The child's arm was at an angle that did not suggest sleep. The smoke was the color of something that should not be burning. The soldier's face was turned away from the camera — either from instinct or because he knew, already, that the picture was going to outlast everything he said about it afterward.",
      "There were forty-one such mornings during the six weeks this correspondent spent inside the perimeter. The dispatches that made it through described the strikes. The dispatches that did not make it through described the mornings after.",
      "The civilians are not difficult to find. They are standing in the places where the buildings were. They are looking at the things that used to be their things. They have the particular stillness of people who have run the numbers and understand that no one is coming back for the rest of it.",
      "Precision is a word the briefings use. It is a useful word. It describes the mechanism. It does not describe the morning.",
      "The photograph ran on page one. The soldier was never identified. The child's name was Hessa. She was four years old. She survived.",
    ],
  },
};

export function ArticleRenderer({ record }: { record: RecordEntry }) {
  const content = articleContent[record.slug] || {
    byline: "Staff Reporter",
    deck: record.excerpt,
    body: [record.excerpt],
  };

  const isPulitzer = record.slug === "jordan-grey-pulitzer";
  const yearStr = record.displayDate.split(" ").pop() || "2005";

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0A", fontFamily: "Georgia, 'Times New Roman', serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px" }}>
      <link href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=IBM+Plex+Mono:wght@300;400&family=Outfit:wght@200;300&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 720, width: "100%", marginBottom: 20, display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 9, fontWeight: 200, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(184,160,120,0.5)", border: "1px solid rgba(240,235,227,0.1)", padding: "4px 10px" }}>
          {isPulitzer ? "Press — Archive" : "Press"}
        </span>
        <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 10, fontWeight: 200, letterSpacing: "0.15em", color: "rgba(240,235,227,0.25)" }}>
          {record.displayDate}
        </span>
      </div>

      <div style={{ maxWidth: 720, width: "100%", background: "#f7f3ea", border: "1px solid #d4c9a8", boxShadow: "0 4px 32px rgba(0,0,0,0.6)", position: "relative", overflow: "hidden", color: "#1a1a1a" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 250, height: 250, background: "radial-gradient(ellipse at top right, rgba(180,155,100,0.1), transparent)", pointerEvents: "none" }} />

        {/* PULITZER BANNER */}
        {isPulitzer && (
          <div style={{ background: "#1a1a1a", color: "#c8a84b", textAlign: "center", padding: "10px 0", fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 400 }}>
            ★ &nbsp; {content.special} &nbsp; ★
          </div>
        )}

        {/* Masthead */}
        <div style={{ borderBottom: "3px double #1a1a1a", padding: "20px 32px 16px", textAlign: "center" }}>
          <p style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "#4a4a4a", marginBottom: 8 }}>
            {record.displayDate.toUpperCase()} · BALTIMORE, MARYLAND · PRICE: 25¢
          </p>
          <h1 style={{ fontFamily: "'UnifrakturMaguntia', serif", fontSize: 52, color: "#1a1a1a", lineHeight: 1, marginBottom: 8, letterSpacing: "0.02em" }}>
            The Baltimore Sentinel Post
          </h1>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "#5a5a5a", letterSpacing: "0.15em", textTransform: "uppercase", borderTop: "1px solid #1a1a1a", paddingTop: 8 }}>
            <span>Established 1878</span>
            <span>Truth — Without Fear or Favor</span>
            <span>Vol. CXVIII · No. 14</span>
          </div>
        </div>

        {/* Article */}
        <div style={{ padding: "32px 40px 40px" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 900, lineHeight: 1.1, color: "#0a0a0a", marginBottom: 12, borderBottom: "2px solid #1a1a1a", paddingBottom: 12 }}>
            {record.title}
          </h2>

          {content.deck && (
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, fontStyle: "italic", color: "#3a3a3a", lineHeight: 1.5, marginBottom: 16, borderBottom: "1px solid #bbb", paddingBottom: 12 }}>
              {content.deck}
            </p>
          )}

          <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5a5a5a", marginBottom: 20 }}>
            By {content.byline} | {record.institution}
          </p>

          <div style={{ columns: 2, columnGap: 28, columnRule: "1px solid #ccc" }}>
            {content.body.map((para, i) => (
              <p key={i} style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 14, textAlign: "justify", breakInside: "avoid" }}>
                {i === 0 && (
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, lineHeight: 0.8, float: "left", marginRight: 4, marginTop: 4, color: "#1a1a1a" }}>
                    {para[0]}
                  </span>
                )}
                {i === 0 ? para.slice(1) : para}
              </p>
            ))}
          </div>

          <div style={{ height: 1, background: "#1a1a1a", margin: "24px 0 16px" }} />
          <p style={{ fontSize: 9, color: "#777", letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center" }}>
            © {yearStr} The Baltimore Sentinel Post — All Rights Reserved
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 720, width: "100%", marginTop: 32, textAlign: "center" }}>
        <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(184,160,120,0.2), transparent)", marginBottom: 20 }} />
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "rgba(240,235,227,0.15)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Archive source: {record.institution} — {record.displayDate}
        </p>
      </div>
    </div>
  );
}
