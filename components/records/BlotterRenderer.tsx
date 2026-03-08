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
    reportingOfficer: "Det. L. Alford, Badge #2291",
    supervisor: "Lt. R. Crane, Homicide Unit",
    disposition: "ARRESTED — HELD WITHOUT BAIL",
    subjects: ["MORETTI, Antonio R. / W/M / DOB: 03-14-1986 / HT: 5'11 / WT: 162"],
    charges: ["CL § 2-201 — First Degree Murder", "CL § 2-204 — Handgun in Commission of Felony"],
    narrative: [
      "ON 11-14-2005 AT APPROX 2214 HRS THIS UNIT RESPONDED TO MARIA'S RESTAURANT 1847 W FAYETTE ST REAR ENTRY.",
      "SUBJECT LOCATED IN BASEMENT LEVEL KITCHEN. SUBJECT WAS SEATED. DID NOT FLEE. DID NOT RESIST.",
      "SUBJECT STATED: 'YOU GOT ME.' SUBJECT THEN STATED: 'TELL MY MOM I'M SORRY.'",
      "BLOOD VISIBLE ON RIGHT SLEEVE — ORIGIN UNKNOWN. SUBJECT TRANSPORTED WITHOUT INCIDENT.",
      "WEAPON NOT RECOVERED ON PERSON. WEAPON PREVIOUSLY RECOVERED SCENE 11-12-2005 BY CST RAMIREZ.",
      "NOTE: NO MIRANDA WAIVER OBTAINED AT TIME OF APPREHENSION. WAIVER OBTAINED POST-TRANSPORT AT CENTRAL BOOKING 0022 HRS.",
      "BOOKING COMPLETE 0041 HRS. ASSIGNED BCBIC CELL 4-C.",
    ],
    property: ["1 pair Nike sneakers (white/gray)", "1 wallet — contents: $14 cash, state ID", "1 key (unidentified)", "NOTE: wristwatch — NOT LISTED ON INTAKE FORM"],
  },
  "antonio-moretti-intake-form": {
    caseNumber: "BCBIC-05-11-8832",
    reportingOfficer: "CO D. Smitty, Badge #0844",
    supervisor: "Intake Supervisor M. Reeves",
    disposition: "PROCESSED — HELD PENDING ARRAIGNMENT",
    subjects: ["MORETTI, Antonio R. / W/M / DOB: 03-14-1986"],
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
  "daniel-han-richards-assault": {
    caseNumber: "04-08-2291",
    reportingOfficer: "Sgt. B. Kowalski, Badge #1144",
    supervisor: "Lt. P. Graves, Eastern District",
    disposition: "ARRESTED — CHARGED — HELD PENDING ARRAIGNMENT",
    subjects: ["HAN, Min-su Daniel / K/M / DOB: 07-03-1977 / HT: 5'10 / WT: 168"],
    charges: [
      "CL § 3-203 — Second Degree Assault",
      "CL § 3-202 — First Degree Assault (pending review — victim status critical)",
    ],
    narrative: [
      "ON 08-22-2004 AT APPROX 2148 HRS OFFICERS RESPONDED TO 700 BLOCK S. CONKLING ST, HIGHLANDTOWN, REPORT OF ASSAULT IN PROGRESS.",
      "ON ARRIVAL OFFICERS LOCATED VICTIM OFFICER T. RICHARDS (OFF-DUTY, BADGE #2088) UNRESPONSIVE ON SIDEWALK. BLUNT TRAUMA TO HEAD — MULTIPLE IMPACT SITES.",
      "WITNESS ACCOUNTS CONSISTENT: VERBAL ALTERCATION PRECEDED PHYSICAL ENGAGEMENT. SUBJECT HAN IDENTIFIED BY TWO WITNESSES AT SCENE.",
      "SUBJECT HAN LOCATED TWO BLOCKS EAST ON FLEET ST. DID NOT FLEE UPON OFFICER APPROACH. COMPLIED WITH ARREST WITHOUT INCIDENT.",
      "SUBJECT STATED: 'I KNOW HOW THIS LOOKS.' NO FURTHER STATEMENT WITHOUT COUNSEL.",
      "VICTIM OFFICER RICHARDS TRANSPORTED TO JOHNS HOPKINS HOSPITAL — TRAUMA UNIT. STATUS: CRITICAL. NEUROLOGICAL ASSESSMENT PENDING.",
      "WEAPON: NONE RECOVERED. ASSAULT CONSISTENT WITH HANDS AND BLUNT OBJECT — NOT YET IDENTIFIED.",
      "NOTE: SUBJECT HAN IS BROTHER OF DET. PHILIP HAN, BADGE #3847, HOMICIDE UNIT. COMMAND NOTIFIED.",
    ],
    property: ["1 wallet — contents: $22 cash, state ID, transit card", "1 key ring (3 keys)", "1 paperback book — spine damaged"],
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
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `CASE NO: ${content.caseNumber}`,
    `REPORTING OFFICER: ${content.reportingOfficer}`,
    `SUPERVISOR: ${content.supervisor}`,
    `DATE/TIME: ${record.displayDate.toUpperCase()}`,
    `DISPOSITION: ${content.disposition}`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
  ];

  if (content.subjects?.length) {
    lines.push(`SUBJECT(S):`);
    content.subjects.forEach((s) => lines.push(`  ${s}`));
    lines.push(``);
  }

  if (content.charges?.length) {
    lines.push(`CHARGE(S):`);
    content.charges.forEach((c) => lines.push(`  — ${c}`));
    lines.push(``);
  }

  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  lines.push(`NARRATIVE:`);
  lines.push(``);
  content.narrative.forEach((line) => lines.push(line));
  lines.push(``);

  if (content.property?.length) {
    lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    lines.push(`PROPERTY / PERSONAL EFFECTS:`);
    content.property.forEach((p) => lines.push(`  ${p}`));
    lines.push(``);
  }

  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  lines.push(`END OF REPORT — ${content.caseNumber}`);

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0A", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px" }}>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Outfit:wght@200;300&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 680, width: "100%", marginBottom: 20, display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 9, fontWeight: 200, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(184,160,120,0.5)", border: "1px solid rgba(240,235,227,0.1)", padding: "4px 10px" }}>
          Police Report
        </span>
        <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 10, fontWeight: 200, letterSpacing: "0.15em", color: "rgba(240,235,227,0.25)" }}>
          {record.displayDate}
        </span>
      </div>

      <div style={{ maxWidth: 680, width: "100%", background: "#0d1a0d", border: "1px solid #1a3a1a", boxShadow: "0 0 40px rgba(0,255,0,0.05), 0 4px 24px rgba(0,0,0,0.8)", padding: "32px 28px", fontFamily: "'IBM Plex Mono', monospace", position: "relative", overflow: "hidden" }}>
        {/* CRT scan line effect */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)", pointerEvents: "none", zIndex: 1 }} />

        <div style={{ position: "relative", zIndex: 2 }}>
          {lines.map((line, i) => {
            const isHeader = line.includes("BALTIMORE POLICE") || line.includes("INCIDENT / ARREST");
            const isDivider = line.startsWith("━");
            const isLabel = line.endsWith(":") && !line.includes(" ");
            const isDisposition = line.startsWith("DISPOSITION:");
            const isCharge = line.startsWith("  —");

            return (
              <div key={i} style={{
                color: isHeader ? "#00ff41" :
                       isDivider ? "#1a4a1a" :
                       isDisposition ? "#ffcc00" :
                       isCharge ? "#ff8c00" :
                       isLabel ? "#00cc33" :
                       "#00ee44",
                fontSize: isHeader ? 13 : 11,
                fontWeight: isHeader ? 500 : 300,
                lineHeight: isDivider ? 1.2 : 1.9,
                letterSpacing: isHeader ? "0.15em" : "0.05em",
                textShadow: isHeader ? "0 0 8px rgba(0,255,65,0.5)" : isDivider ? "none" : "0 0 4px rgba(0,238,68,0.2)",
                minHeight: line === "" ? 8 : undefined,
              }}>
                {line || "\u00A0"}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ maxWidth: 680, width: "100%", marginTop: 32, textAlign: "center" }}>
        <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(0,255,65,0.1), transparent)", marginBottom: 20 }} />
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "rgba(240,235,227,0.15)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Archive source: {record.institution} — {record.displayDate}
        </p>
      </div>
    </div>
  );
}
