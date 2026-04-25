export type RecordType =
  | "filing"
  | "article"
  | "blotter"
  | "memo"
  | "commendation"
  | "evidence";

export type RecordCollection =
  | "firm"
  | "westport"
  | "trial"
  | "family"
  | "personal";

export interface RecordEntry {
  slug: string;
  type: RecordType;
  title: string;
  subtitle?: string;
  date: string;
  displayDate: string;
  institution: string;
  excerpt: string;
  tags: string[];
  featured?: boolean;
  image?: string;
  collection?: RecordCollection;
  recordNumber?: string;
  provenance?: string;
  blurb?: string;
}

export const records: RecordEntry[] = [
  {
    slug: "davidson-associates-founding",
    type: "filing",
    title: "Articles of Organization",
    subtitle: "Davidson, Bates, Dawson & Barber, P.A.",
    date: "1982-10-20",
    displayDate: "October 20, 1982",
    institution: "Maryland SDAT · Charter Division",
    excerpt:
      "The earliest document in The Record. Four wet-ink signatures on the day a firm became real on paper. Leo Arthur Davidson at thirty-four. Harold James Bates at thirty-four. Charles Emmanuel Dawson at thirty-one. Vincent Charles Barber at twenty-eight. The notary's red seal still holds.",
    tags: ["Davidson & Associates", "Leo Davidson", "Vincent Barber", "Charles Dawson"],
    featured: false,
    image: "davidson-associates-founding",
    collection: "firm",
    recordNumber: "001",
    provenance: "Maryland SDAT · Charter Division · Book 1982/M, p. 4731\nRetrieved by V. C. Barber · Public Inspection · 09-22-2006",
  },
  {
    slug: "davidson-associates-founding-press",
    type: "article",
    title: "New Law Firm Opens on St. Paul Place",
    subtitle: "Baltimore Afro-American Business · Page B-3",
    date: "1982-10-20",
    displayDate: "October 20, 1982",
    institution: "Baltimore Afro-American",
    excerpt:
      "Four men outside 200 St. Paul Place. Rain on the sidewalk, brass plate beside the door. Dawson's hand on the plate. Bates and Davidson and Barber a step back. Photographed by Marcus Coleman for the Afro-American. Pasted in firm history Volume I, where it has stayed for twenty-four years.",
    tags: ["Davidson & Associates", "Leo Davidson", "Harold Bates", "press"],
    featured: false,
    image: "davidson-associates-founding-press",
    collection: "firm",
    recordNumber: "002",
    provenance: "Davidson & Associates Firm Historical Archive\nVolume I — Founding Years 1982-1989",
  },
  {
    slug: "pinnacle-merger-announcement",
    type: "memo",
    title: "Pinnacle / Harbor East Closing",
    subtitle: "Three parcels. Four point two million. Father and son, both signed.",
    date: "1998-03-06",
    displayDate: "March 6, 1998",
    institution: "Davidson & Associates LLC — Internal",
    excerpt:
      "Shawn Davidson's first big closing. Twenty-five years old, signature beside Leo's at the bottom of the deal memo. Parcels 12A, 12B, and 14C in the Harbor East TIF District. The transaction Jordan Grey would later trace, eight years after the ink dried. The Macallan 25 is Leo's. The retrieval slip is V. C. Barber's.",
    tags: ["Shawn Davidson", "Pinnacle Investments", "Davidson & Associates", "Leo Davidson"],
    featured: true,
    image: "pinnacle-merger-announcement",
    collection: "firm",
    recordNumber: "003",
    provenance: "Davidson & Associates Firm Records Vault\nFile DA-98-0234 · Volumes 1 of 3 · Storage 1998-Active\nRetrieved by V. C. Barber 09-15-2006",
  },
  {
    slug: "garrick-shooting-sentinel",
    type: "article",
    title: "Deputy Mayor Shot at Town Hall",
    subtitle: "Garrick Killed at Dawson Center; Teen Suspect in Custody",
    date: "2005-11-14",
    displayDate: "November 14, 2005",
    institution: "The Baltimore Sentinel Post",
    excerpt:
      "The morning after. The Sentinel Post's front-page photograph shows uniforms kneeling outside the Charles Emmanuel Dawson Community Center, the lectern toppled to the curb. Photo by Danielle Kostas. The Westport TIF sidebar shares the page.",
    tags: ["Matt Garrick", "shooting", "Dawson Center", "Sentinel Post"],
    featured: false,
    image: "garrick-shooting-sentinel",
    collection: "westport",
    recordNumber: "004",
    provenance: "Sentinel Post Bureau Archive · Front Pages Vol. 47\nRetrieved 02-09-2006 · J. Grey, Features",
  },
  {
    slug: "azure-horizons-parcel-transfer",
    type: "filing",
    title: "Sealed Property Transfer",
    subtitle: "Pinnacle Investments LLC · grantor and consideration redacted",
    date: "2005-11-14",
    displayDate: "Sealed 14 March 2006",
    institution: "Worcester County Circuit Court",
    excerpt:
      "Sealed by court order three weeks before opening statements. The grantee survived the redaction because the Pinnacle name was already on the public side of the transaction. Everything else went under black bar. The Worcester County Clerk who processed the seal signed the bottom in blue ballpoint. P. Bates.",
    tags: ["Azure Horizons", "Pinnacle Investments", "Westport", "TIF"],
    featured: false,
    image: "azure-horizons-parcel-transfer",
    collection: "westport",
    recordNumber: "005",
    provenance: "State of Maryland · Worcester County Circuit Court\nSealed Matter AH-2005-1127 · Retrieved by P. Bates, Clerk",
  },
  {
    slug: "sentinel-editorial-grey-byline",
    type: "article",
    title: "The Westport Files: What the City Sold and Who Paid",
    subtitle: "A Sentinel Post Investigation",
    date: "2006-01-09",
    displayDate: "January 9, 2006",
    institution: "The Baltimore Sentinel Post",
    excerpt:
      "Six months of work. Seventeen parcels. One byline. Grey's investigation into how the Baltimore harbor renewal moved through a small group of attorneys whose names recurred with statistical impossibility. The yellow highlight is his. The margin notes — Pinnacle, Azure deed, Bates connection, Davidson & Assoc. — are his.",
    tags: ["Jordan Grey", "Westport", "Sentinel Post", "investigation"],
    featured: true,
    image: "sentinel-editorial-grey-byline",
    collection: "westport",
    recordNumber: "006",
    provenance: "Westport Files Investigation · Vol. 1 · Opened 07-14-2005\nPersonal archive · J. M. Grey · Sentinel Post Features",
  },
  {
    slug: "han-internal-affairs-summary",
    type: "memo",
    title: "Internal Affairs Review",
    subtitle: "Han, Phillip · Badge 3847 · Demotion Sustained",
    date: "2004-09-18",
    displayDate: "September 18, 2004",
    institution: "BPD Professional Standards Bureau",
    excerpt:
      "The cover sheet of the file the city sealed. Detective Grade III to Grade I, effective 09/18/04. Reviewed by Lt. Michael Crane, Homicide. Approved by Capt. R. Harley, IA Liaison. The yellow legal pad in the corner is the supervisor's checklist.",
    tags: ["Han", "Internal Affairs", "BPD", "demotion"],
    featured: false,
    image: "han-internal-affairs-summary",
    collection: "personal",
    recordNumber: "007",
    provenance: "BPD Professional Standards Bureau\nCase IA-04-0918-H · Personnel File PF-H.3847 · Sealed",
  },
  {
    slug: "daniel-han-richards-assault",
    type: "blotter",
    title: "File Requisition · Han, D. J.",
    subtitle: "Released to outside counsel · same day Shawn resigned",
    date: "2004-08-22",
    displayDate: "October 14, 2004",
    institution: "BPD Central Records Division",
    excerpt:
      "Forty-seven pages, full file: incident report, witness statements, arresting officer notes, medical exam, prosecutor correspondence. Requested by Davidson & Associates, attention V. Barber. Authorized by Capt. R. Harley, IA Liaison. Stamped released to outside counsel at 2:47 PM on October 14, 2004.",
    tags: ["Daniel Han", "Richards", "BPD", "assault", "Highlandtown"],
    featured: false,
    image: "daniel-han-richards-assault",
    collection: "personal",
    recordNumber: "008",
    provenance: "BPD Central Records Division\nFile BPD-04-08-1129 · Subject: Han, Daniel J. · DOB 05-22-74",
  },
  {
    slug: "shawn-bar-registration",
    type: "filing",
    title: "Departure File",
    subtitle: "Personnel Action — Resignation · Shawn A. Davidson",
    date: "2004-10-14",
    displayDate: "October 14, 2004",
    institution: "Davidson & Associates LLC",
    excerpt:
      "Two paperclipped documents. Leo's internal memo to Vincent Barber, signed in violet ink: No reason given. None asked for. The Court of Appeals registration change beneath it, filed the same day. New filing address: 215 Broad Street, Snow Hill, Maryland. Worcester County.",
    tags: ["Shawn Davidson", "Maryland Bar", "Snow Hill", "Worcester County"],
    featured: false,
    image: "shawn-bar-registration",
    collection: "firm",
    recordNumber: "009",
    provenance: "Davidson & Associates Firm Archive · 2004 Q4\nPersonnel File DA-P-04-0108 · Sealed — Active",
  },
  {
    slug: "eddies-boxing-club",
    type: "evidence",
    title: "Eddie's Boxing Club",
    subtitle: "Come in hungry. Leave honest.",
    date: "2003-01-01",
    displayDate: "circa 2003",
    institution: "Eddie's Boxing Club · Est. 1978 · 1847 Montford Avenue",
    excerpt:
      "Found in the glove compartment of Han's Crown Vic. The handwritten note is Eddie O'Connell's: Phil — Key under the mat. — E. A polaroid edge in the corner. State of Maryland vehicle registration to one side. Latex gloves to the other.",
    tags: ["Han", "Eddie O'Connell", "boxing", "Highlandtown"],
    featured: false,
    image: "eddies-boxing-club",
    collection: "personal",
    recordNumber: "010",
    provenance: "Personal effects of Det. Phillip Han\nRecovered from glove compartment, BPD-issued sedan",
  },
  {
    slug: "antonio-moretti-intake-form",
    type: "blotter",
    title: "Property Receipt · Moretti, A. R.",
    subtitle: "Wallet ($14). Brown shoelaces. Nothing else.",
    date: "2005-11-14",
    displayDate: "November 14, 2005",
    institution: "Baltimore City Booking and Intake Center",
    excerpt:
      "Booked at the Baltimore City Booking and Intake Center at 22:47 on November 14, 2005. Eight hours and thirteen minutes after Garrick was pronounced dead at the scene. Charges: Murder 1, Handgun Crimes. The mugshot still shows the cheek wound fresh.",
    tags: ["Antonio Moretti", "intake", "BCBIC", "booking"],
    featured: false,
    image: "antonio-moretti-intake-form",
    collection: "trial",
    recordNumber: "011",
    provenance: "Baltimore City Booking and Intake Center\nSubject: Moretti, Antonio R. · DOB 02-14-88 · #05-1465",
  },
  {
    slug: "leo-davidson-obituary",
    type: "evidence",
    title: "In Memory of Leo Arthur Davidson",
    subtitle: "1948 — 2006 · Maya's scrapbook · taped, with rosemary",
    date: "2006-08-14",
    displayDate: "August 14, 2006",
    institution: "The Baltimore Sentinel Post",
    excerpt:
      "Maya kept it. Taped at four corners into a leather book. Rosemary sprig pressed beside it for remembrance. The funeral program from August 17 to the right. The blue note in her hand at the lower-left: He hated the photo they used. — M.",
    tags: ["Leo Davidson", "obituary", "Davidson & Associates", "memorial"],
    featured: true,
    image: "leo-davidson-obituary",
    collection: "family",
    recordNumber: "012",
    provenance: "Davidson family archive · Maya Davidson Clarke\nMemorial scrapbook · pressed pages · private holding",
  },
  {
    slug: "jordan-grey-pulitzer",
    type: "article",
    title: "From the Rubble",
    subtitle: "A soldier, a child, and the morning after the market · By Jordan M. Grey",
    date: "1996-04-14",
    displayDate: "April 14, 1996",
    institution: "The Baltimore Sentinel Post",
    excerpt:
      "Where the archive gets its name. Jordan Grey filed this dispatch from Dhahran, Saudi Arabia, on April 12, 1996. He took a round under the left rib just after the second blast. He kept working. The record mattered more than the hand holding it. Pulitzer 1997.",
    tags: ["Jordan Grey", "Pulitzer", "Dhahran", "foreign correspondence"],
    featured: true,
    image: "jordan-grey-pulitzer",
    collection: "personal",
    recordNumber: "013",
    provenance: "Sentinel Post Morgue · Reel 1996-04 · Frame 14A\nPrinted 02/07/2006 · Personal correspondence J. Grey 1994-1998",
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

export function getRecordsByCollection(collection: RecordCollection): RecordEntry[] {
  return records.filter((r) => r.collection === collection);
}
