import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "What Is Civic Noir? A Definition — Lerenyae Watkins",
  description:
    "Civic noir is fiction where the system is the protagonist. Lerenyae Watkins, author of CONTEMPT, defines the genre, names its lineage, and explains why it isn't just legal thriller with extra footnotes.",
  alternates: { canonical: "https://lerenyaewatkins.com/civic-noir" },
  openGraph: {
    title: "What Is Civic Noir? A Definition by Lerenyae Watkins",
    description:
      "Civic noir is fiction where the system is the protagonist. The genre, defined.",
    type: "article",
    url: "https://lerenyaewatkins.com/civic-noir",
    images: ["https://lerenyaewatkins.com/covers/civic-noir-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Civic Noir? A Definition by Lerenyae Watkins",
    description:
      "Civic noir is fiction where the system is the protagonist. The genre, defined.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  name: "Civic Noir",
  description:
    "Fiction where the system is the protagonist, observation replaces exposition, and tension emerges from the machinery of institutions rather than the heroism of individuals.",
  inDefinedTermSet: { "@type": "DefinedTermSet", name: "Literary Genres" },
  url: "https://lerenyaewatkins.com/civic-noir",
  author: {
    "@type": "Person",
    name: "Lerenyae Watkins",
    url: "https://lerenyaewatkins.com",
  },
};

export default function CivicNoirPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Header */}
      <section className="pt-16 pb-8 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-4">
              Genre &middot; Definition
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-bone-200 font-light">
              What Is Civic Noir?
            </h1>
            <p className="font-serif text-lg md:text-xl text-bone-300/50 font-light italic mt-4">
              A definition, a lineage, and what separates it from legal thriller.
            </p>
          </SectionReveal>
        </div>
      </section>

      <div className="gold-rule max-w-3xl mx-auto" />

      {/* Body */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">

          {/* The Definition */}
          <SectionReveal>
            <h2 className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-8">
              The Definition
            </h2>
            <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8] mb-6">
              Civic noir is fiction in which the system itself is the antagonist.
            </p>
            <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8] mb-6">
              Not a corrupt cop. Not a single bad mayor. Not the lone bad apple the
              news cycle feeds on. The system. The machinery. The case file that was
              missing the right page before anyone showed up to read it. The witness
              who got coached by the people who were supposed to be coaching no one.
              The architecture of consequence that pre-decides who walks out of a
              building and who doesn&rsquo;t.
            </p>
            <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8] mb-6">
              In civic noir, the heroism isn&rsquo;t in breaking through. The heroism is
              in seeing clearly, naming what you see, and refusing to look away &mdash;
              even when looking away would let you keep your name clean.
            </p>
          </SectionReveal>

          <div className="gold-rule my-12" />

          {/* What Separates It */}
          <SectionReveal delay={100}>
            <h2 className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-8">
              What Separates Civic Noir from Legal Thriller
            </h2>
            <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8] mb-6">
              Most legal thrillers are mystery novels in suits. A wrong is committed.
              A protagonist investigates. The truth is uncovered. Justice &mdash; or some
              recognizable cousin of it &mdash; is served, or denied, by the time the
              reader closes the book.
            </p>
            <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8] mb-6">
              Civic noir doesn&rsquo;t promise that arc.
            </p>
            <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8] mb-6">
              A civic noir novel can end with the case won and the system unchanged.
              It can end with the verdict the protagonist worked for and the loss
              the protagonist didn&rsquo;t see coming. It can end with the right person
              walking free and the wrong person inheriting the silence.
            </p>
            <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8] mb-6">
              The genre takes its rules from somewhere older than the legal thriller.
              From noir itself, which never promised redemption. From the social
              novel, which always knew the city was the real protagonist. From the
              procedural, which understood that institutions don&rsquo;t have hearts to
              change.
            </p>
            <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8] mb-6">
              What civic noir adds is the present-tense weight of the institutions
              themselves. The DA&rsquo;s office. The police union. The school district.
              The development authority. The courts. The press. The block.
            </p>
          </SectionReveal>

          <div className="gold-rule my-12" />

          {/* The Lineage */}
          <SectionReveal delay={100}>
            <h2 className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-8">
              The Lineage
            </h2>
            <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8] mb-6">
              Civic noir didn&rsquo;t begin with me. It began with the writers who refused
              to pretend that one good lawyer fixes anything.
            </p>
            <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8] mb-6">
              George Pelecanos. <em>The Wire</em> &mdash; every season a different
              American institution failing the people it was built to serve. Walter
              Mosley, who put Easy Rawlins in rooms where the law wasn&rsquo;t the same
              law twice. Attica Locke, whose Texas is a Texas of land deeds and
              zoning meetings as much as it is a Texas of murders. Richard Wright.
              James Baldwin. Toni Morrison. Earlier still: Dreiser, Wharton, the
              muckrakers &mdash; different politics, same instinct, that the system is
              the story.
            </p>
            <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8] mb-6">
              If the legal thriller is John Grisham, civic noir is Pelecanos. If the
              courtroom drama is <em>To Kill a Mockingbird</em>, civic noir is{" "}
              <em>Bloodchild</em>. The detective novel is Chandler. Civic noir is
              Himes.
            </p>
          </SectionReveal>

          <div className="gold-rule my-12" />

          {/* What It Demands */}
          <SectionReveal delay={100}>
            <h2 className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-8">
              What Civic Noir Demands of the Writer
            </h2>
            <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8] mb-8">
              Four rules, as I write them:
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <span className="text-gold/30 text-xs mt-1 font-light">01</span>
                <div>
                  <p className="text-sm text-bone-200/80 font-sans font-light tracking-wide uppercase mb-3">
                    Systems apply pressure. People absorb it.
                  </p>
                  <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8]">
                    The novel&rsquo;s job is to render the pressure visible. Not to lecture
                    about it. To put the reader inside the room where the pressure is
                    being applied and let them feel the weight on the body of the person
                    who came in unprepared for it.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-gold/30 text-xs mt-1 font-light">02</span>
                <div>
                  <p className="text-sm text-bone-200/80 font-sans font-light tracking-wide uppercase mb-3">
                    Dialogue is subtext first.
                  </p>
                  <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8]">
                    Messy. Interrupted. Defensive. Civic noir doesn&rsquo;t trust speeches
                    because the people inside the system don&rsquo;t trust speeches. They trust
                    silences. They trust what isn&rsquo;t said in the meeting after the meeting.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-gold/30 text-xs mt-1 font-light">03</span>
                <div>
                  <p className="text-sm text-bone-200/80 font-sans font-light tracking-wide uppercase mb-3">
                    Procedure is never background.
                  </p>
                  <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8]">
                    The motion to suppress isn&rsquo;t filler before the real story. The motion
                    to suppress is the story. The clerk&rsquo;s filing window is the story. The
                    intake form is the story. Procedure is leverage &mdash; it&rsquo;s how the
                    powerful keep their power and how, occasionally, the rest of us get
                    a window.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-gold/30 text-xs mt-1 font-light">04</span>
                <div>
                  <p className="text-sm text-bone-200/80 font-sans font-light tracking-wide uppercase mb-3">
                    No clean endings.
                  </p>
                  <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8]">
                    Civic noir refuses the catharsis the system was built to deny. If the
                    book ends clean, the genre wasn&rsquo;t honest. Consequence is the only
                    ending earned.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          <div className="gold-rule my-12" />

          {/* Why It Matters Now */}
          <SectionReveal delay={100}>
            <h2 className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-8">
              Why It Matters Now
            </h2>
            <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8] mb-6">
              We are living through the most legible failure of American
              institutions in a generation. People can name what&rsquo;s wrong with the
              courts, the police, the schools, the press, the housing market, the
              lender, the lobbyist &mdash; they can name it because they have been on
              the receiving end of it. They are tired of fiction that pretends the
              system can be fixed by one good person in one good moment.
            </p>
            <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8] mb-6">
              Civic noir doesn&rsquo;t pretend that. It doesn&rsquo;t promise hope and it
              doesn&rsquo;t promise despair. It promises only the truth of the room. What
              was said. What wasn&rsquo;t. Who left with their name intact and who didn&rsquo;t.
              What it cost.
            </p>
            <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8] mb-6">
              That, more than the courtroom climax or the surprise witness, is the
              inheritance the genre is here to claim.
            </p>
          </SectionReveal>

          <div className="gold-rule my-12" />

          {/* Where to Begin */}
          <SectionReveal delay={100}>
            <h2 className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-8">
              Where to Begin
            </h2>
            <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8] mb-8">
              If you&rsquo;re new to civic noir and looking for entry points, start here:
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <span className="text-gold/30 text-xs mt-1 font-light">&mdash;</span>
                <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8]">
                  <strong className="text-bone-200/80">Walter Mosley</strong> &mdash; <em>Devil in a Blue Dress.</em> The
                  system as gravitational field. Easy Rawlins inside it.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-gold/30 text-xs mt-1 font-light">&mdash;</span>
                <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8]">
                  <strong className="text-bone-200/80">George Pelecanos</strong> &mdash; <em>The Sweet Forever.</em> DC.
                  The trade. The cost.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-gold/30 text-xs mt-1 font-light">&mdash;</span>
                <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8]">
                  <strong className="text-bone-200/80">Attica Locke</strong> &mdash; <em>Bluebird, Bluebird.</em> East
                  Texas. Race. Land. Procedure.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-gold/30 text-xs mt-1 font-light">&mdash;</span>
                <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8]">
                  <strong className="text-bone-200/80">S.A. Cosby</strong> &mdash; <em>All the Sinners Bleed.</em> The
                  current generation. Sheriff. Small town. The real machinery
                  underneath.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-gold/30 text-xs mt-1 font-light">&mdash;</span>
                <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8]">
                  <strong className="text-bone-200/80">Richard Wright</strong> &mdash; <em>Native Son.</em> The original
                  argument that the system makes the man before the man makes the
                  choice.
                </p>
              </div>
            </div>

            <p className="font-serif text-lg text-bone-300/70 font-light leading-[1.8] mb-6">
              And, when it lands:{" "}
              <Link href="/books" className="text-gold hover:text-gold/80 transition-colors">
                <strong>CONTEMPT.</strong>
              </Link>{" "}
              My first novel. Baltimore, 2006. A deputy mayor is dead. An
              eighteen-year-old is in county. The lawyer inherited the case from the
              father who didn&rsquo;t live to try it. The system is older than all of
              them. June 21, 2026.
            </p>
          </SectionReveal>

          <div className="gold-rule my-12" />

          {/* Bio + Links */}
          <SectionReveal delay={100}>
            <p className="font-serif text-sm text-bone-300/50 font-light leading-[1.8] mb-8">
              <strong className="text-bone-300/70">
                Lerenyae Watkins is a Dallas-based novelist working in the civic
                noir tradition. CONTEMPT, his debut, releases June 21, 2026.
              </strong>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/chapter-one" className="btn-primary">
                Read Chapter One
              </Link>
              <Link href="/books" className="btn-secondary">
                The Book
              </Link>
              <Link href="/about" className="btn-secondary">
                About
              </Link>
            </div>
          </SectionReveal>

        </div>
      </section>
    </>
  );
}
