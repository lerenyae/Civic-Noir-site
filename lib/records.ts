export type RecordType =
  | "filing"
  | "article"
  | "blotter"
  | "memo"
  | "obituary"
  | "evidence";

export interface RecordEntry {
  slug: string;
  type: RecordType;
  title: string;
  subtitle?: string;
  date: string;
  institution: string;
  excerpt: string;
  tags: string[];
  featured?: boolean;
}

export const records: RecordEntry[] = [
  {
    slug: "davidson-associates-founding",
    type: "filing",
    title: "Articles of Organization — Davidson & Associates LLC",
    subtitle: "Domestic Limited Liability Company",
    date: "October 20, 1982",
    institution: "Maryland Dept. of Assessments and Taxation",
    excerpt:
      "Four names. One address. The firm that would spend twenty years building Baltimore's legal architecture — and one year watching it burn.",
    tags: ["Davidson & Associates", "Leo Davidson", "Ellis Parker", "Charles Dawson"],
    featured: true,
  },
  {
    slug: "moretti-arrest-blotter",
    type: "blotter",
    title: "BPD Incident Report #06-11-4471",
    subtitle: "Arrest — Suspected Homicide",
    date: "November 13, 2005",
    institution: "Baltimore Police Department — Central District",
    excerpt:
      "Male subject, 19, apprehended at Maria's Restaurant, rear entry, basement level. Subject stated: 'You got me.' Then: 'Tell my mom I'm sorry.' Blood visible on right sleeve.",
    tags: ["Antonio Moretti", "BPD", "Garrick shooting", "arrest"],
    featured: true,
  },
  {
    slug: "garrick-shooting-sentinel",
    type: "article",
    title: "Deputy Mayor Gunned Down at City Hall Town Hall",
    subtitle: "Garrick Dies at Scene; Suspect Apprehended 32 Hours Later",
    date: "November 14, 2005",
    institution: "The Baltimore Sentinel",
    excerpt:
      "Matthew Garrick, Deputy Mayor for Economic Development, was shot once at the back of the head during a standing-room public forum at the Dawson Center. A 19-year-old Westport resident was taken into custody the following evening.",
    tags: ["Matt Garrick", "shooting", "Dawson Center", "Sentinel"],
    featured: false,
  },
  {
    slug: "chesapeake-civic-wire-memo",
    type: "memo",
    title: "Fedwire Transfer Authorization — Chesapeake Civic Partners",
    subtitle: "Internal Memo / Retainer Authorization",
    date: "November 12, 2005",
    institution: "Davidson & Associates LLC — Internal",
    excerpt:
      "Amount: $75,000.00. Payee: Chesapeake Civic Partners. Memo: Retainer — Phase III. Authorized by: L. Davidson. Timestamp: 31 minutes after reported time of death.",
    tags: ["Leo Davidson", "Chesapeake Civic", "wire transfer", "financial"],
    featured: true,
  },
  {
    slug: "leo-davidson-obituary",
    type: "obituary",
    title: "Leo Aubrey Davidson, Esq.",
    subtitle: "Founding Partner, Davidson & Associates — 1941–2006",
    date: "March 3, 2006",
    institution: "The Baltimore Sun",
    excerpt:
      "Leo Davidson built a firm that outlasted every man who tried to outlast him. He is survived by his son, Shawn Davidson, and by a caseload no one has fully read.",
    tags: ["Leo Davidson", "obituary", "Davidson & Associates"],
    featured: false,
  },
  {
    slug: "han-internal-affairs-summary",
    type: "memo",
    title: "Internal Affairs Review — Det. Philip Han",
    subtitle: "Summary Report / Confidential",
    date: "September 18, 2004",
    institution: "Baltimore Police Department — Internal Affairs Division",
    excerpt:
      "Subject: Detective Philip Han, Badge #3847, Homicide Unit. Finding: Allegations of use-of-force irregularity sustained. Recommendation: Demotion from Grade III. File retained — pending review.",
    tags: ["Han", "Internal Affairs", "BPD", "demotion"],
    featured: false,
  },
  {
    slug: "azure-horizons-parcel-transfer",
    type: "filing",
    title: "Deed of Transfer — Azure Horizons LLC to Pinnacle Investments",
    subtitle: "Parcel 6A — Westport TIF District",
    date: "November 14, 2005",
    institution: "Baltimore City Office of Finance — Land Records",
    excerpt:
      "Consideration: $400,000. Two days after internal authorization. One day after Garrick's death. The harbor was always the point.",
    tags: ["Azure Horizons", "Pinnacle Investments", "Westport", "TIF", "Garrick"],
    featured: false,
  },
  {
    slug: "sentinel-editorial-grey-byline",
    type: "article",
    title: "The Westport Files: What the City Sold and Who Paid",
    subtitle: "An Investigation into Baltimore's TIF Approval Process",
    date: "January 9, 2006",
    institution: "The Baltimore Sentinel",
    excerpt:
      "The parcels moved in sequence. The approvals arrived without public comment periods. The money followed a line the city drew in pencil. Jordan Grey, Staff Reporter.",
    tags: ["Jordan Grey", "Westport", "Sentinel", "investigation", "TIF"],
    featured: false,
  },
  {
    slug: "vasquez-hold-ledger-notation",
    type: "memo",
    title: "Records Room Hold Notation — DHCD-Z-87 through 91",
    subtitle: "Hold for Redaction — City Archives",
    date: "January 6, 2006",
    institution: "Baltimore City Archives — Records Room B",
    excerpt:
      "HOLD FOR REDACTION. Underlined twice. The clerk didn't look up. She was counting rubber bands. Procedure doing the work.",
    tags: ["Vasquez", "records room", "DHCD", "redaction", "Jordan Grey"],
    featured: false,
  },
  {
    slug: "antonio-moretti-intake-form",
    type: "blotter",
    title: "BCBIC Intake Processing — Moretti, Antonio R.",
    subtitle: "Baltimore City Booking and Intake Center",
    date: "November 14, 2005",
    institution: "Baltimore City Booking and Intake Center",
    excerpt:
      "Property: wallet, shoelaces, press badge [NOT LISTED: recorder]. Assigned counsel: Public Defender. Note: Private counsel substitution pending. Cell 4-C.",
    tags: ["Antonio Moretti", "intake", "BCBIC", "booking"],
    featured: false,
  },
  {
    slug: "dawson-gala-security-log",
    type: "blotter",
    title: "Event Security Log — Mayor's Spring Gala",
    subtitle: "Executive Protection Unit — City Hall",
    date: "April 14, 2006",
    institution: "City of Baltimore — Executive Protection",
    excerpt:
      "Attending: Mayor C. Dawson, Deputy Director H. Smith, legal counsel. Flagged entry: Shawn Davidson + guest, 21:14. Log note: 'Arrived late. Stayed long.'",
    tags: ["Dawson", "Hank Smith", "gala", "Shawn Davidson", "security log"],
    featured: false,
  },
];

export function getRecord(slug: string): RecordEntry | undefined {
  return records.find((r) => r.slug === slug);
}

export function getRecordsByType(type: RecordType): RecordEntry[] {
  return records.filter((r) => r.type === type);
}

export function getFeaturedRecords(): RecordEntry[] {
  return records.filter((r) => r.featured);
}
