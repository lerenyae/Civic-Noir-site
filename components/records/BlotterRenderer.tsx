"use client";
import { RecordEntry } from "@/lib/records";

const blotterContent: Record<string, {
  caseNumber: string;
  reportingOfficer: string;
  supervisor: string;
  disposition: string;
  narrative: string[];
  subjects?: string[];
  charges?: string[];
  property?: string[];
}> = {
  "moretti-arrest-blotter": {
    caseNumber: "06-11-4471",
    reportingOfficer: "Det. Sgt. L. Alford, Badge #2291",
    supervisor: "Lt. R. Crane, Homicide Unit",
    disposition: "ARRESTED — HELD WITHOUT BAIL",
    subjects: ["MORETTI, Antonio R. / M / W / DOB: 03-14-1986 / HT: 5'11 / WT: 162"],
    charges: ["CL § 2-201 — First Degree Murder", "CL § 2-204 — Handgun in Commission of Felony"],
    narrative: [
      "ON 11-14-2005 AT APPROX 2214 HRS THIS UNIT RESPONDED TO MARIA'S RESTAURANT 1847 W FAYETTE ST REAR ENTRY.",
      "SUBJECT LOCATED IN BASEMENT LEVEL KITCHEN. SUBJECT WAS SEATED. DID NOT FLEE. DID NOT RESIST.",
      "SUBJECT STATED: 'YOU GOT ME.' SUBJECT THEN STATED: 'TELL MY MOM I'M SORRY.'",
      "BLOOD VISIBLE ON RIGHT SLEEVE — CONSISTENT WITH CAST-OFF PATTERN. SUBJECT TRANSPORTED WITHOUT INCIDENT.",
      "WEAPON NOT RECOVERED ON PERSON. WEAPON PREVIOUSLY RECOVERED SCENE 11-12-2005 BY CST RAMIREZ.",
      "NOTE: NO MIRANDA WAIVER OBTAINED AT TIME OF APPREHENSION. WAIVER OBTAINED POST-TRANSPORT AT CENTRAL BOOKING 0022 HRS.",
      "BOOKING COMPLETE 0041 HRS. ASSIGNED BCBIC CELL 4-C.",
    ],
    property: ["1 pair Nike sneakers (white/gray)", "1 wallet — contents: $14 cash, state ID", "1 key (unidentified)", "Note: wristwatch — NOT LISTED ON INTAKE FORM"],
  },
  "antonio-moretti-intake-form": {
    caseNumber: "BCBIC-05-11-8832",
    reportingOfficer: "CO D. Smitty, Badge #0844",
    supervisor: "Intake Supervisor M. Reeves",
    disposition: "PROCESSED — HELD PENDING ARRAIGNMENT",
    subjects: ["MORETTI, Antonio R. / M / W / DOB: 03-14-1986"],
    charges: ["See Case File 06-11-4471"],
    narrative: [
      "SUBJECT RECEIVED FROM CENTRAL TRANSPORT 0041 HRS.",
      "STANDARD INTAKE PROCEDURE COMPLETED. PROPERTY LOGGED PER FORM BCBIC-4.",
      "ITEMS RETAINED: WALLET. SHOELACES. PRESS BADGE [NOTE: press badge not consistent with subject profile — flagged for supervisor review].",
      "ITEM NOT LISTED: RECORDER DEVICE. SUBJECT REQUESTED RETURN. NOT FOUND ON PROPERTY SLIP.",
      "COUNSEL NOTE: PUBLIC DEFENDER ASSIGNED PER INTAKE PROTOCOL. PRIVATE COUNSEL SUBSTITUTION PENDING — FORM 22-B NOT YET FILED.",
      "MEDICAL CLEARANCE: COMPLETED. NO INJURIES NOTED.",
      "ASSIGNED: CELL 4-C. TIER B.",
    ],
    property: ["Wallet (contents: $14 cash, state ID)", "Shoelaces (white)", "Press badge — SOURCE UNKNOWN"],
  },
  "dawson-gala-security-log": {
    caseNumber: "EXEC-PROT-0414-2006",
    reportingOfficer: "Dep. Dir. H. Smith, Executive Protection",
    supervisor: "Director J. Alford",
    disposition: "ROUTINE — NO INCIDENTS",
    narrative: [
      "EVENT: MAYOR'S SPRING GALA — BALTIMORE CONVENTION CENTER EAST HALL",
      "DATE: 04-14-2006 / SHIFT: 1800-2300 HRS",
      "SECURITY COMPLEMENT: 14 OFFICERS. EXEC PROTECTION: 3 ASSIGNED TO MAYOR DAWSON.",
      "NOTABLE ENTRIES:",
      "2114 HRS — SHAWN DAVIDSON ESQ. + GUEST (F). ARRIVED LATE. FLAGGED: DAVIDSON IS COUNSEL OF RECORD IN ACTIVE MORETTI MATTER. ADMITTED PER STANDING INVITATION LIST — MAYOR'S APPROVAL.",
      "LOG NOTE: DAVIDSON REMAINED THROUGH CLOSE. OBSERVED IN EXTENDED CONVERSATION WITH MAYOR AT 2240 HRS. DURATION APPROX 12 MIN. CONTENT UNKNOWN.",
      "2308 HRS — MAYOR DEPARTED. SWEEP COMPLETED. NO INCIDENTS.",
    ],
    property: [],
  },
};

export function BlotterRenderer({ record }: { record: RecordEntry }) {
  const content = blotterContent[record.slug] || {
    caseNumber: "—",
    reportingOfficer: "—",
    supervisor: "—",
    disposition: "SEE FILE",
    narrative: [record.excerpt],
    property: [],
  };

  const lines = [
    `BALTIMORE POLICE DEPARTMENT`,
    `INCIDENT / ARREST REPORT`,
    `${"─".repeat(52)}`,
    ``,
    `CASE NO:       ${content.caseNumber}`,
    `INCIDENT DATE: ${record.date.toUpperCase()}`,
    `REPORT DATE:   ${record.date.toUpperCase()}`,
    `UNIT:          ${record.institution.toUpperCase()}`,
    ``,
    `REPORTING:     ${content.reportingOfficer}`,
    `SUPERVISOR:    ${content.supervisor}`,
    ``,
    `DISPOSITION:   ${content.disposition}`,
    ``,
    `${"─".repeat(52)}`,
    `SUBJECT(S):`,
    ...(content.subjects || []).map((s) => `  ${s}`),
    ``,
    ...(content.charges && content.charges.length > 0 ? [
      `CHARGES:`,
      ...content.charges.map((c) => `  [X] ${c}`),
      ``,
    ] : []),
    `${"─".repeat(52)}`,
    `NARRATIVE:`,
    ``,
    ...content.narrative.map((line) => `  ${line}`),
    ``,
    ...(content.property && content.property.length > 0 ? [
      `${"─".repeat(52)}`,
      `PROPERTY / EVIDENCE:`,
      ...content.property.map((p, i) => `  ${i + 1}. ${p}`),
      ``,
    ] : []),
    `${"─".repeat(52)}`,
    `REPORT STATUS: FILED`,
    ``,
    `OFFICER SIGNATURE: ___________________________`,
    `SUPERVISOR APPROVAL: ___________________________`,
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A0A0A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Outfit:wght@200;300&display=swap"
        rel="stylesheet"
      />

      {/* Document type badge */}
      <div style={{ maxWidth: 680, width: "100%", marginBottom: 20, display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 9, fontWeight: 200, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(184,160,120,0.5)", border: "1px solid rgba(240,235,227,0.1)", padding: "4px 10px" }}>
          Police Record
        </span>
        <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 10, fontWeight: 200, letterSpacing: "0.15em", color: "rgba(240,235,227,0.25)" }}>
          {record.date}
        </span>
      </div>

      {/* THE FORM */}
      <div
        style={{
          maxWidth: 680,
          width: "100%",
          background: "#0f110f",
          border: "1px solid #2a3a2a",
          boxShadow: "0 4px 24px rgba(0,0,0,0.7), inset 0 0 80px rgba(0,20,0,0.3)",
          padding: "40px 36px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Scan line effect */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        <pre
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 12,
            lineHeight: 1.7,
            color: "#7aff7a",
            margin: 0,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            position: "relative",
            zIndex: 2,
            textShadow: "0 0 8px rgba(100,255,100,0.4)",
          }}
        >
          {lines.join("\n")}
        </pre>

        {/* Smudge / deterioration */}
        <div style={{ position: "absolute", bottom: 0, right: 0, width: 120, height: 80, background: "radial-gradient(ellipse at bottom right, rgba(0,40,0,0.4), transparent)", pointerEvents: "none", zIndex: 3 }} />
      </div>

      <div style={{ maxWidth: 680, width: "100%", marginTop: 32, textAlign: "center" }}>
        <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(100,255,100,0.1), transparent)", marginBottom: 20 }} />
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "rgba(100,255,100,0.15)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          SOURCE: {record.institution} — CASE {content.caseNumber}
        </p>
      </div>
    </div>
  );
}
