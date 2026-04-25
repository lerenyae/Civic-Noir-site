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
      "Four signatures. Four men who believed process could outpace consequence. They were wrong, but it took twenty-four years and a body on the courthouse steps to prove it. Dawson would get a community center. A deputy mayor would die inside it. Bates would leave for the Eastern Shore and never come back. And Leo — Leo would build the thing that swallowed them all. The notary's red seal still holds. Everything else cracked.",
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
      "Rain on the sidewalk, brass plate beside the door. Dawson's hand on the plate. Bates and Davidson and Barber a step back. Twenty-four years later, a copy of this photograph hung crooked in Leo's study — torn at the edge where someone had taken themselves out of it by force. The version in the firm archive is untouched. Someone decided which one to keep whole. (See Chapter One.)",
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
      "Shawn was twenty-five. His signature sits beside his father's at the bottom of the deal memo — the first time a Davidson appeared twice on the same closing. Four point two million dollars. Three parcels in the Harbor East TIF District. Eight years later, Jordan Grey would follow this transaction through seventeen shell transfers and arrive at a question no one at the firm wanted asked. The Macallan 25 on the table is Leo's. It always was.",
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
      "The center was named for Charles Emmanuel Dawson — founding partner, dead six years by then. A deputy mayor was shot inside it. A seventeen-year-old was arrested before midnight. And when Leo Davidson stood on the Mitchell courthouse steps nine months later to speak about this case, he never finished the sentence. The Westport TIF sidebar shares the front page. Nobody read it that morning. Jordan Grey did.",
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
      "Sealed by court order three weeks before opening statements. The Pinnacle name survived the redaction only because it was already on the public side of the transaction. Everything else went under black bar — grantor, consideration, the names behind the names. The Worcester County Clerk who processed the seal signed the bottom in blue ballpoint: P. Bates. The founding partner's surname. In a courthouse where his son sat on the bench. Coincidence is a word people use when they'd rather not look.",
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
      "Six months of work. Seventeen parcels. One byline. Grey followed the money through a small group of attorneys whose names recurred with statistical impossibility — and arrived at a firm whose founding partner was about to stand on courthouse steps for the last time. The yellow highlight is Grey's. The margin notes are Grey's. The question the article couldn't answer — who approved the transfers inside City Hall — is the one that kept him awake.",
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
      "What did Phillip Han do that cost him two grades in a single action? The city sealed the answer. But the cover sheet survived — and the name at the bottom is Capt. R. Harley, the same Harley who authorized the release of Daniel Han's file to outside counsel twenty-six days later. A brother demoted. A brother's file handed to a law firm. Same approving officer. No one in the department has explained why.",
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
      "Why does a law firm need a detective's brother's assault file? Forty-seven pages — incident report, witness statements, medical exam — released to Davidson & Associates at 2:47 PM on October 14, 2004. The same afternoon Shawn Davidson signed his resignation and left Baltimore for Snow Hill. Same authorizing officer as the IA demotion: Capt. R. Harley. Someone needed this file badly enough to move it the day the firm lost its heir. The question is whether it was leverage or cleanup.",
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
      "Leo's memo to Vincent Barber, signed in violet ink: No reason given. None asked for. Beneath it, the Court of Appeals registration change — filed the same day. New address: 215 Broad Street, Snow Hill, Maryland. Two hours east. A different world. When Chapter One opens, Shawn has been there for two years, practicing law in a courthouse small enough to sentence the man you see at the gas station. Leo never visited. The memo never asked him to.",
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
      "Found in the glove compartment of Han's city-issued Crown Vic, between a vehicle registration and a pair of latex gloves. The handwritten note is Eddie O'Connell's: Phil — Key under the mat. — E. A polaroid edge peeks from underneath. The boxing club is where Han went when the badge stopped making sense. Eddie never asked why he came in at 5 AM. The latex gloves are harder to explain. No one at the precinct has tried.",
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
      "He was seventeen. Born on Valentine's Day. His property at intake: fourteen dollars in cash and a pair of brown shoelaces. That's everything Antonio Moretti owned when the state of Maryland charged him with killing a deputy mayor. Eight hours and thirteen minutes between the shooting and the booking photo. The cheek wound is still fresh in the mugshot. Nobody asked how he got it. Leo Davidson would take this case all the way to the courthouse steps — and never come back down.",
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
      "Maya kept it. Taped at four corners into a leather book she never showed anyone. Rosemary pressed beside it — for remembrance, the old way. The funeral program from August 17 to the right. In the lower-left corner, a blue note in her hand: He hated the photo they used. — M. She was there when he fell. She was there when the cameras arrived. She was there when they stopped. The scrapbook is the only record that remembers him the way she did.",
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
      "Where the archive gets its name. Jordan Grey filed this dispatch from Dhahran, Saudi Arabia, on April 12, 1996 — a soldier carrying a child through rubble that used to be a market. Grey took a round under the left rib just after the second blast. He kept shooting. He kept writing. The record mattered more than the hand holding it. Pulitzer, 1997. Nine years later he'd aim that same instinct at Baltimore, and Baltimore would aim back.",
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
