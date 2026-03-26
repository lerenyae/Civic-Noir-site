export const siteConfig = {
  name: "LeRenyae Lawrence Watkins",
  tagline: "Civic Noir",
  description: "Author of literary crime fiction and legal thrillers. Systems apply pressure. People absorb it.",
  url: "https://lerenyaewatkins.com",
  ogImage: "/covers/contempt-cover.png",
  logo: "/logo-crown.png",
links: { instagram: "https://instagram.com/reigningwords", twitter: "https://x.com/lerenyaew", email: "reigningwordspublishing@gmail.com" },
  newsletter: { hookLine: "First chapters. Process notes. No noise.", email: "reigningwordspublishing@gmail.com" },
};

export const books = [{
  slug: "contempt", title: "Contempt", subtitle: "A Novel", year: "2026",
  genre: "Legal Thriller / Civic Noir", status: "Forthcoming", cover: "/covers/contempt-cover.png",
  hookLine: "A deputy mayor is dead. An eighteen-year-old sits in county because his prints were on a gun that went missing weeks before the murder. And the only lawyer willing to take the case inherited it from his father who died before the trial began.",
  synopsis: `Baltimore, 2006. A deputy mayor is dead. An eighteen-year-old sits in county because his fingerprints were on a gun that vanished from his family’s restaurant weeks before the killing. Old prints. New blame.

By the following summer, he’s still waiting to begin the fight for his innocence. The attorney who took his case collapses on the courthouse steps before the trial begins — briefcase in hand, files inside — leaving behind a son who never wanted the name in the first place.

Shawn Davidson spent the last two years trying to outrun Baltimore. Now he’s back holding the file, the firm, and whatever his father was carrying when he went down. The trial doesn’t pause. The docket doesn’t care. And the State already has a version of events it can live with.

Across town, a demoted detective trades favors with the same dirty hands that built the case — because the only way to protect the people he loves is to play the game that can bury them. And in the margins, a journalist chasing a missing trial witness discovers that some stories don’t want exposure.

No heroes. No clean wins. Just pressure and what it makes people do.`,
  buyLinks: [], pullQuote: null,
}];

export const bio = {
  short: "LeRenyae Lawrence Watkins writes literary crime fiction and legal thrillers grounded in institutional realism, procedural credibility, and psychological consequence. A father of three based in Plano, Texas, he spent over 15 years in cybersecurity before transitioning to writing full time. His debut novel, Contempt, is forthcoming in 2026 alongside an 18-track original soundtrack he composed for the book.",
  long: `LeRenyae Lawrence Watkins has been writing since 6th grade. Poetry first, then short stories, scripts, music, and now novels. A father of three living in Plano, Texas, just outside of Dallas, everything he writes comes back to systems. Not the hero who breaks through the wall, but the wall itself. How it was built, who benefits, and what it costs the people on both sides.\n\nHis background spans over 15 years in cybersecurity and enterprise technology sales before he transitioned to writing full time. Whether the work is a legal thriller or historical fiction, he leaves no stone unturned. The courtroom procedure, the zoning law, the chain of custody, the geography. He wants readers to feel like they are standing in the room. It felt like I was there is the compliment he chases.\n\nHe writes for adaptation. Structure, scenes, and visual language that translates from page to screen. CONTEMPT is his debut novel, releasing alongside an 18-track original soundtrack he composed for the book.`,
  photo: "/covers/IMG_2374.JPG",
  howIWrite: [
    "Systems apply pressure. People absorb it.",
    "Dialogue is subtext first - messy, interrupted, defensive.",
    "Procedure is never background. It's leverage.",
    "No speeches. No clean endings. Just consequence.",
  ],
};

export const mediaKit = {
  authorName: "LeRenyae Lawrence Watkins", genre: "Literary Thriller / Legal Thriller",
  representation: "Reigning Words Publishing",
  bio: `LeRenyae Lawrence Watkins writes literary crime fiction and legal thrillers grounded in institutional realism, procedural credibility, and psychological consequence.

His debut novel, Contempt, is set in Baltimore, 2006. After a deputy mayor is killed at a community rally, an eighteen-year-old sits in county awaiting trial. When the defense attorney willing to take the case collapses on the courthouse steps, his son, Shawn Davidson, is forced to inherit the file, the firm, and the city's attention - whether he's ready or not.

Contempt is forthcoming in 2026.`,
  availableFor: ["Author interviews & profiles", "Podcast appearances", "Panel discussions", "Book club Q&As (virtual and in-person)", "Film & television adaptation inquiries"],
  highResPhotos: null, bookCoverHighRes: "/covers/contempt-cover.png",
  pressContact: "reigningwordspublishing@gmail.com", pressClippings: [],
};

export const navigation: { label: string; href: string; cta?: boolean; accent?: boolean }[] = [
  { label: "Books", href: "/books" },
  { label: "Read", href: "/chapter-one", cta: true },
  { label: "The Record", href: "/the-record" },
  { label: "Dispatches", href: "/dispatches" },
  { label: "About", href: "/about" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
  { label: "Links", href: "/links" },
  { label: "Soundtrack", href: "/soundtrack", accent: true },
];
