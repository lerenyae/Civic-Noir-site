export type RecordType =
  | "filing"
  | "article"
  | "blotter"
  | "memo"
  | "commendation"
  | "evidence";

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
}

export const records: RecordEntry[] = [
  {
    slug: "davidson-associates-founding",
    type: "filing",
    title: "Articles of Organization — Davidson & Associates LLC",
    subtitle: "Domestic Limited Liability Company",
    date: "1982-10-20",
    displayDate: "October 20, 1982",
    institution: "Maryland Dept. of Assessments and Taxation",
    excerpt:
      "Four names. One address. The firm that would spend twenty years building Baltimore's legal architecture — and one year watching it burn.",
    tags: ["Davidson & Associates", "Leo Davidson", "Vincent Barber", "Charles Dawson"],
    featured: true,
  },
  {
    slug: "jordan-grey-pulitzer",
    type: "article",
    title: "From the Rubble: Civilians and the Cost of Precision",
    subtitle: "Pulitzer Prize — Foreign Correspondence, 1996",
    date: "1996-04-14",
    displayDate: "April 14, 1996",
    institution: "The Baltimore Sentinel Post",
    excerpt:
      "Jordan M. Grey, staff correspondent. Dhahran. The photo beneath the plaque: a soldier hauling a child through smoke. He looked at it like it was a person he owed.",
    tags: ["Jordan Grey", "Pulitzer", "Dhahran", "foreign correspondence"],
    featured: true,
  },
  {
    slug: "pinnacle-merger-announcement",
    type: "memo",
    title: "Transaction Closing — Pinnacle Investments LLC / Harbor East Partners",
    subtitle: "Davidson & Associates — Deal Memorandum",
    date: "1998-03-06",
    displayDate: "March 6, 1998",
    institution: "Davidson & Associates LLC — Internal",
    excerpt:
      "Lead counsel: S.A. Davidson, Esq. Transaction value: $4.2M. The harbor deal that made Shawn Davidson's name — and introduced him to every man who would later use it.",
    tags: ["Shawn Davidson", "Pinnacle Investments", "Davidson & Associates", "Leo Davidson"],
    featured: false,
  },
  {
    slug: "han-eve-commendation",
    type: "commendation",
    title: "Letter of Commendation — Detective Philip Han, Badge #3847",
    subtitle: "Meritorious Service — Officer-Involved Incident, Sandtown-Winchester",
    date: "2002-08-19",
    displayDate: "August 19, 2002",
    institution: "Baltimore Police Department — Office of the Commissioner",
    excerpt:
      "Detective Han sustained two impacts to his vest and maintained position to shield a civilian during an active shooting. He did not withdraw. The city called him a hero. The city has a short memory.",
    tags: ["Han", "Eve Franklin", "BPD", "commendation", "Sandtown"],
    featured: true,
  },
  {
    slug: "daniel-han-richards-assault",
    type: "blotter",
    title: "BPD Incident Report #04-08-2291",
    subtitle: "Assault — Off-Duty Officer / Suspect in Custody",
    date: "2004-08-22",
    displayDate: "August 22, 2004",
    institution: "Baltimore Police Department — Eastern District",
    excerpt:
      "Victim: Officer T. Richards, off-duty. Status: critical. Suspect: Han, Min-su Daniel. Highlandtown. Richards still lies in a dark room.",
    tags: ["Daniel Han", "Richards", "BPD", "assault", "Highlandtown"],
    featured: false,
  },
  {
    slug: "han-internal-affairs-summary",
    type: "memo",
    title: "Internal Affairs Review — Det. Philip Han",
    subtitle: "Summary Report / Confidential",
    date: "2004-09-18",
    displayDate: "September 18, 2004",
    institution: "Baltimore Police Department — Internal Affairs Division",
    excerpt:
      "Allegations sustained. Demotion recommended. File retained — active. Copy held by external counsel per arrangement with Davidson & Associates.",
    tags: ["Han", "Internal Affairs", "BPD", "demotion"],
    featured: false,
  },
  {
    slug: "davidson-departure-memo",
    type: "memo",
    title: "Internal Memorandum — Departure of S.A. Davidson, Esq.",
    subtitle: "Davidson & Associates LLC — Personnel",
    date: "2004-10-14",
    displayDate: "October 14, 2004",
    institution: "Davidson & Associates LLC — Internal",
    excerpt:
      "Mr. Davidson has tendered his resignation effective this date. Client files transferred to J. Colson, Esq. Property returned per attached. No reason given. None asked for.",
    tags: ["Shawn Davidson", "Davidson & Associates", "Leo Davidson", "departure"],
    featured: false,
  },
  {
    slug: "shawn-bar-registration",
    type: "filing",
    title: "Attorney Registration — Status Change",
    subtitle: "Maryland State Bar Association",
    date: "2004-10-14",
    displayDate: "October 14, 2004",
    institution: "Maryland State Bar Association",
    excerpt:
      "Davidson, Shawn A. Firm affiliation: TERMINATED. Baltimore City → Worcester County. Snow Hill, MD. Status: Active. The city processed his exit like a change of address.",
    tags: ["Shawn Davidson", "Maryland Bar", "Snow Hill", "Worcester County"],
    featured: false,
  },
  {
    slug: "chesapeake-civic-wire-memo",
    type: "memo",
    title: "Fedwire Transfer Authorization — Chesapeake Civic Partners",
    subtitle: "Internal Memo / Retainer Authorization",
    date: "2005-11-12",
    displayDate: "November 12, 2005",
    institution: "Davidson & Associates LLC — Internal",
    excerpt:
      "Amount: $75,000.00. Authorized by: L. Davidson. Timestamp: 20:53 EST. Thirty-one minutes after reported time of death. Not panic. Not cleanup. Choreography.",
    tags: ["Leo Davidson", "Chesapeake Civic", "Garrick", "wire transfer"],
    featured: true,
  },
  {
    slug: "garrick-shooting-sentinel",
    type: "article",
    title: "Deputy Mayor Gunned Down at City Hall Town Hall",
    subtitle: "Garrick Dies at Scene; Suspect Apprehended 32 Hours Later",
    date: "2005-11-14",
    displayDate: "November 14, 2005",
    institution: "The Baltimore Sentinel Post",
    excerpt:
      "Matthew Garrick, Deputy Mayor for Economic Development, was shot once at the back of the head. A 19-year-old Westport resident was taken into custody the following evening.",
    tags: ["Matt Garrick", "shooting", "Dawson Center", "Sentinel Post"],
    featured: false,
  },
  {
    slug: "antonio-moretti-intake-form",
    type: "blotter",
    title: "BCBIC Intake Processing — Moretti, Antonio R.",
    subtitle: "Baltimore City Booking and Intake Center",
    date: "2005-11-14",
    displayDate: "November 14, 2005",
    institution: "Baltimore City Booking and Intake Center",
    excerpt:
      "Property: wallet, shoelaces. Not listed: recorder device. Counsel: Public Defender assigned. Private substitution pending. Cell 4-C.",
    tags: ["Antonio Moretti", "intake", "BCBIC", "booking"],
    featured: false,
  },
  {
    slug: "azure-horizons-parcel-transfer",
    type: "filing",
    title: "Deed of Transfer — Azure Horizons LLC to Pinnacle Investments",
    subtitle: "Parcel 6A — Westport TIF District",
    date: "2005-11-14",
    displayDate: "November 14, 2005",
    institution: "Baltimore City Office of Finance — Land Records",
    excerpt:
      "Consideration: $400,000. The harbor deal didn't pause for a murder. It completed on schedule. Same day. Same routing.",
    tags: ["Azure Horizons", "Pinnacle Investments", "Westport", "TIF"],
    featured: false,
  },
  {
    slug: "sentinel-editorial-grey-byline",
    type: "article",
    title: "The Westport Files: What the City Sold and Who Paid",
    subtitle: "An Investigation into Baltimore's TIF Approval Process",
    date: "2006-01-09",
    displayDate: "January 9, 2006",
    institution: "The Baltimore Sentinel Post",
    excerpt:
      "The parcels moved in sequence. The approvals arrived without public comment periods. The money followed a line the city drew in pencil. Jordan Grey, Staff Reporter.",
    tags: ["Jordan Grey", "Westport", "Sentinel Post", "investigation"],
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
