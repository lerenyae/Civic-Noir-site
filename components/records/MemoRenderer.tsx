"use client";
import { RecordEntry } from "@/lib/records";

const memoContent: Record<string, {
  classification: string;
  from: string;
  to: string;
  re: string;
  docNumber: string;
  body: Array<{ text: string; redacted?: boolean }>;
  signatures?: Array<{ name: string; title: string; note?: string }>;
}> = {
  "chesapeake-civic-wire-memo": {
    classification: "INTERNAL — ATTORNEY-CLIENT PRIVILEGED",
    from: "L.A. Davidson, Managing Partner",
    to: "M. Garrick, Office of the Deputy Mayor",
    re: "Phase III Retainer — Chesapeake Civic Partners",
    docNumber: "DA-INT-2005-1112",
    body: [
      { text: "Per our conversation of " },
      { text: "November 9, 2005", redacted: true },
      { text: ", please confirm receipt of the following wire transfer authorization:" },
      { text: "\n\nAmount: $75,000.00\nPayee: Chesapeake Civic Partners\nMemo Line: Retainer — Phase III\nAuthorized by: L. Davidson\nTimestamp: 20:53 EST\n" },
      { text: "\nThis retainer covers advisory services related to the " },
      { text: "harbor bond closure and Parcel 6A disposition", redacted: true },
      { text: ". Disbursement through Azure Horizons escrow per prior arrangement." },
      { text: "\n\nThe " },
      { text: "Westport TIF approval sequence", redacted: true },
      { text: " must close before end of quarter. " },
      { text: "Dawson stays happy, the kid stays loud, press stays busy.", redacted: true },
      { text: " Bond closes Monday or the harbor suffocates." },
      { text: "\n\nThis communication is protected under attorney-client privilege and the work product doctrine. Do not reproduce or distribute." },
    ],
  },
  "han-internal-affairs-summary": {
    classification: "CONFIDENTIAL — INTERNAL AFFAIRS DIVISION — NOT FOR DISTRIBUTION",
    from: "Lt. D. Crane, Internal Affairs Division",
    to: "Dep. Commissioner J. Wells, BPD Command",
    re: "Det. Philip Han — IA Case #2004-0918 — Summary Findings",
    docNumber: "IA-2004-0918-SUMM",
    body: [
      { text: "SUBJECT: Det. Philip Han, Badge #3847, Homicide Unit — Grade III\n\n" },
      { text: "ALLEGATIONS REVIEWED:\n\n" },
      { text: "1. Use of unauthorized force during apprehension of " },
      { text: "suspect identified as [REDACTED]", redacted: true },
      { text: " on 08-22-2004 at " },
      { text: "[LOCATION REDACTED]", redacted: true },
      { text: ".\n\n2. Failure to document use of force in incident report filed 08-23-2004.\n\n3. " },
      { text: "Alleged coercion of witness statement from [REDACTED]. Statement subsequently withdrawn.", redacted: true },
      { text: "\n\nFINDINGS: Allegation 1 — SUSTAINED. Allegation 2 — SUSTAINED. Allegation 3 — " },
      { text: "INCONCLUSIVE — WITNESS UNAVAILABLE", redacted: true },
      { text: ".\n\nRECOMMENDATION: Demotion from Grade III to Grade II. " },
      { text: "Assignment to [REDACTED] effective 10-01-2004.", redacted: true },
      { text: "\n\nNOTE: File retained — active. Copy held by external counsel per " },
      { text: "arrangement with Davidson & Associates, per authorization dated 09-15-2004.", redacted: true },
    ],
  },
  "pinnacle-merger-announcement": {
    classification: "DAVIDSON & ASSOCIATES LLC — INTERNAL MEMORANDUM",
    from: "L.A. Davidson, Managing Partner",
    to: "All Partners and Associates",
    re: "Transaction Closing — Pinnacle Investments LLC / Harbor East Partners",
    docNumber: "DA-INT-1998-0306",
    body: [
      { text: "This memorandum confirms the successful closing of the Pinnacle Investments LLC / Harbor East Partners merger transaction, effective March 6, 1998.\n\n" },
      { text: "TRANSACTION SUMMARY\n\n" },
      { text: "Transaction Value: $4,200,000.00\n" },
      { text: "Structure: Asset acquisition — Harbor East Partners to Pinnacle Investments LLC\n" },
      { text: "Governing Jurisdiction: Maryland\n" },
      { text: "Closing Venue: 201 N. Charles Street, Suite 1400, Baltimore, MD 21201\n\n" },
      { text: "Lead Counsel: S.A. Davidson, Esq. — Associate\n" },
      { text: "Supervising Partner: L.A. Davidson, Esq.\n\n" },
      { text: "REMARKS\n\n" },
      { text: "Mr. Davidson managed all aspects of due diligence, document preparation, and closing coordination without material supervision. His handling of the " },
      { text: "Parcel 6A ancillary disposition and the Westport corridor easement language", redacted: true },
      { text: " reflected an unusual degree of precision for an associate at his stage.\n\n" },
      { text: "Pinnacle's principals have requested that Mr. Davidson be designated as primary contact for all future transactions involving " },
      { text: "Chesapeake Civic Partners and Azure Horizons LLC.", redacted: true },
      { text: "\n\nThis firm takes pride in the work done here. The harbor remembers who built it." },
    ],
    signatures: [
      { name: "Leo A. Davidson", title: "Managing Partner", note: "L.A. Davidson" },
      { name: "Shawn A. Davidson", title: "Associate Counsel", note: "S.A. Davidson" },
    ],
  },
  "davidson-departure-memo": {
    classification: "DAVIDSON & ASSOCIATES LLC — INTERNAL — PERSONNEL",
    from: "L.A. Davidson, Managing Partner",
    to: "All Partners — For Record",
    re: "Departure of S.A. Davidson, Esq.",
    docNumber: "DA-PERS-2004-1014",
    body: [
      { text: "Mr. Shawn A. Davidson has tendered his resignation from Davidson & Associates LLC, effective October 14, 2004.\n\n" },
      { text: "TRANSITION OF MATTERS\n\n" },
      { text: "All active client files have been transferred to J. Colson, Esq., associate counsel, effective this date. Clients have been notified per Maryland Rules of Professional Conduct.\n\n" },
      { text: "PROPERTY RETURNED\n\n" },
      { text: "— Firm identification badge\n— Firm-issued laptop (Model: ThinkPad T41)\n— Parking pass, 201 N. Charles Street\n— Firm-issue pen (Montblanc Meisterstück, black)\n\n" },
      { text: "OUTSTANDING MATTERS\n\n" },
      { text: "None. Mr. Davidson's matters are current. No open billing disputes. No pending grievances.\n\n" },
      { text: "NOTE\n\n" },
      { text: "Mr. Davidson has been a valued member of this firm since 1996. His contributions to " },
      { text: "the Pinnacle transaction, the Chesapeake Civic advisory, and the Westport TIF work", redacted: true },
      { text: " reflect the standard this firm expects.\n\n" },
      { text: "We wish him well." },
    ],
    signatures: [
      { name: "Leo A. Davidson", title: "Managing Partner", note: "L.A. Davidson" },
    ],
  },
};

function RedactedSpan({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ background: "#1a1a1a", color: "#1a1a1a", padding: "0 4px", borderRadius: 2, userSelect: "none", cursor: "default", letterSpacing: "0.05em" }} title="[REDACTED]">
      {children}
    </span>
  );
}

export function MemoRenderer({ record }: { record: RecordEntry }) {
  const content = memoContent[record.slug];

  if (!content) {
    return (
      <div style={{ minHeight: "100vh", background: "#0A0A0A", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "rgba(240,235,227,0.3)", fontFamily: "monospace" }}>Document not available.</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0A", fontFamily: "Georgia, 'Times New Roman', serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px" }}>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Cormorant+Garamond:ital,wght@1,400;1,500&family=Outfit:wght@200;300&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 680, width: "100%", marginBottom: 20, display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 9, fontWeight: 200, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(184,160,120,0.5)", border: "1px solid rgba(240,235,227,0.1)", padding: "4px 10px" }}>
          Internal Memo
        </span>
        <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 10, fontWeight: 200, letterSpacing: "0.15em", color: "rgba(240,235,227,0.25)" }}>
          {record.displayDate}
        </span>
      </div>

      <div style={{ maxWidth: 680, width: "100%", background: "#eeeae0", border: "1px solid #c0b898", boxShadow: "0 4px 24px rgba(0,0,0,0.5)", padding: "48px 44px", position: "relative", overflow: "hidden", color: "#1a1a1a" }}>

        {/* Letterhead for Davidson internal memos */}
        {(record.slug === "pinnacle-merger-announcement" || record.slug === "davidson-departure-memo") && (
          <div style={{ textAlign: "center", marginBottom: 28, paddingBottom: 20, borderBottom: "2px solid #1a1a1a" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, letterSpacing: "0.15em", color: "#1a1a1a", marginBottom: 4 }}>DAVIDSON & ASSOCIATES LLC</p>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, letterSpacing: "0.2em", color: "#666", textTransform: "uppercase" }}>201 N. Charles Street, Suite 1400 · Baltimore, Maryland 21201</p>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, letterSpacing: "0.2em", color: "#666", textTransform: "uppercase" }}>Tel: (410) 555-0182 · Fax: (410) 555-0183 · Admitted: Maryland · D.C. · Federal</p>
          </div>
        )}

        <div style={{ background: "#1a1a1a", color: "#eeeae0", textAlign: "center", padding: "8px 0", marginBottom: 32, fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500 }}>
          {content.classification}
        </div>

        <div style={{ borderTop: "2px solid #1a1a1a", borderBottom: "1px solid #999", padding: "16px 0", marginBottom: 24 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 400, marginBottom: 12, color: "#2a2a2a", fontFamily: "'IBM Plex Mono', monospace" }}>MEMORANDUM</p>
          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "6px 12px", fontSize: 12 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, textTransform: "uppercase", color: "#666", letterSpacing: "0.1em" }}>TO:</span>
            <span>{content.to}</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, textTransform: "uppercase", color: "#666", letterSpacing: "0.1em" }}>FROM:</span>
            <span>{content.from}</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, textTransform: "uppercase", color: "#666", letterSpacing: "0.1em" }}>DATE:</span>
            <span>{record.displayDate}</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, textTransform: "uppercase", color: "#666", letterSpacing: "0.1em" }}>RE:</span>
            <span>{content.re}</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, textTransform: "uppercase", color: "#666", letterSpacing: "0.1em" }}>DOC NO:</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11 }}>{content.docNumber}</span>
          </div>
        </div>

        <div style={{ fontSize: 13, lineHeight: 1.8, color: "#2a2a2a" }}>
          {content.body.map((segment, i) =>
            segment.redacted ? (
              <RedactedSpan key={i}>{segment.text}</RedactedSpan>
            ) : (
              <span key={i} style={{ whiteSpace: "pre-wrap" }}>{segment.text}</span>
            )
          )}
        </div>

        {/* Signatures */}
        {content.signatures && (
          <div style={{ marginTop: 40, borderTop: "1px solid #ccc", paddingTop: 28 }}>
            <div style={{ display: "grid", gridTemplateColumns: content.signatures.length > 1 ? "1fr 1fr" : "1fr 1fr", gap: "24px 48px" }}>
              {content.signatures.map((sig, i) => (
                <div key={i} style={{ borderBottom: "1px solid #999", paddingBottom: 4 }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontStyle: "italic", color: "#2a2a2a", marginBottom: 2, opacity: 0.75 }}>
                    {sig.note}
                  </p>
                  <p style={{ fontSize: 10, color: "#777", letterSpacing: "0.1em" }}>{sig.name}</p>
                  <p style={{ fontSize: 9, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase" }}>{sig.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 40, borderTop: "2px solid #1a1a1a", paddingTop: 12 }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#666", letterSpacing: "0.2em", textTransform: "uppercase", textAlign: "center" }}>
            {content.classification}
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
