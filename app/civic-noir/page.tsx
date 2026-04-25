import type { Metadata } from "next";
import Link from "next/link";

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
      <article className="civic-noir-page">
        <h1>What Is Civic Noir?</h1>
        <p className="lede">
          A definition, a lineage, and what separates it from legal thriller.
        </p>

        <h2>The Definition</h2>
        <p>Civic noir is fiction in which the system itself is the antagonist.</p>
        <p>
          Not a corrupt cop. Not a single bad mayor. Not the lone bad apple the
          news cycle feeds on. The system. The machinery. The case file that was
          missing the right page before anyone showed up to read it. The witness
          who got coached by the people who were supposed to be coaching no one.
          The architecture of consequence that pre-decides who walks out of a
          building and who doesn't.
        </p>
        <p>
          In civic noir, the heroism isn't in breaking through. The heroism is
          in seeing clearly, naming what you see, and refusing to look away —
          even when looking away would let you keep your name clean.
        </p>

        <h2>What Separates Civic Noir from Legal Thriller</h2>
        <p>
          Most legal thrillers are mystery novels in suits. A wrong is committed.
          A protagonist investigates. The truth is uncovered. Justice — or some
          recognizable cousin of it — is served, or denied, by the time the
          reader closes the book.
        </p>
        <p>Civic noir doesn't promise that arc.</p>
        <p>
          A civic noir novel can end with the case won and the system unchanged.
          It can end with the verdict the protagonist worked for and the loss
          the protagonist didn't see coming. It can end with the right person
          walking free and the wrong person inheriting the silence.
        </p>
        <p>
          The genre takes its rules from somewhere older than the legal thriller.
          From noir itself, which never promised redemption. From the social
          novel, which always knew the city was the real protagonist. From the
          procedural, which understood that institutions don't have hearts to
          change.
        </p>
        <p>
          What civic noir adds is the present-tense weight of the institutions
          themselves. The DA's office. The police union. The school district.
          The development authority. The courts. The press. The block.
        </p>

        <h2>The Lineage</h2>
        <p>
          Civic noir didn't begin with me. It began with the writers who refused
          to pretend that one good lawyer fixes anything.
        </p>
        <p>
          George Pelecanos. <em>The Wire</em> — every season a different
          American institution failing the people it was built to serve. Walter
          Mosley, who put Easy Rawlins in rooms where the law wasn't the same
          law twice. Attica Locke, whose Texas is a Texas of land deeds and
          zoning meetings as much as it is a Texas of murders. Richard Wright.
          James Baldwin. Toni Morrison. Earlier still: Dreiser, Wharton, the
          muckrakers — different politics, same instinct, that the system is
          the story.
        </p>
        <p>
          If the legal thriller is John Grisham, civic noir is Pelecanos. If the
          courtroom drama is <em>To Kill a Mockingbird</em>, civic noir is{" "}
          <em>Bloodchild</em>. The detective novel is Chandler. Civic noir is
          Himes.
        </p>

        <h2>What Civic Noir Demands of the Writer</h2>
        <p>Four rules, as I write them:</p>

        <h3>1. Systems apply pressure. People absorb it.</h3>
        <p>
          The novel's job is to render the pressure visible. Not to lecture
          about it. To put the reader inside the room where the pressure is
          being applied and let them feel the weight on the body of the person
          who came in unprepared for it.
        </p>

        <h3>2. Dialogue is subtext first.</h3>
        <p>
          Messy. Interrupted. Defensive. Civic noir doesn't trust speeches
          because the people inside the system don't trust speeches. They trust
          silences. They trust what isn't said in the meeting after the meeting.
        </p>

        <h3>3. Procedure is never background.</h3>
        <p>
          The motion to suppress isn't filler before the real story. The motion
          to suppress is the story. The clerk's filing window is the story. The
          intake form is the story. Procedure is leverage — it's how the
          powerful keep their power and how, occasionally, the rest of us get
          a window.
        </p>

        <h3>4. No clean endings.</h3>
        <p>
          Civic noir refuses the catharsis the system was built to deny. If the
          book ends clean, the genre wasn't honest. Consequence is the only
          ending earned.
        </p>

        <h2>Why It Matters Now</h2>
        <p>
          We are living through the most legible failure of American
          institutions in a generation. People can name what's wrong with the
          courts, the police, the schools, the press, the housing market, the
          lender, the lobbyist — they can name it because they have been on
          the receiving end of it. They are tired of fiction that pretends the
          system can be fixed by one good person in one good moment.
        </p>
        <p>
          Civic noir doesn't pretend that. It doesn't promise hope and it
          doesn't promise despair. It promises only the truth of the room. What
          was said. What wasn't. Who left with their name intact and who didn't.
          What it cost.
        </p>
        <p>
          That, more than the courtroom climax or the surprise witness, is the
          inheritance the genre is here to claim.
        </p>

        <h2>Where to Begin</h2>
        <p>
          If you're new to civic noir and looking for entry points, start here:
        </p>
        <ul>
          <li>
            <strong>Walter Mosley</strong> — <em>Devil in a Blue Dress.</em> The
            system as gravitational field. Easy Rawlins inside it.
          </li>
          <li>
            <strong>George Pelecanos</strong> — <em>The Sweet Forever.</em> DC.
            The trade. The cost.
          </li>
          <li>
            <strong>Attica Locke</strong> — <em>Bluebird, Bluebird.</em> East
            Texas. Race. Land. Procedure.
          </li>
          <li>
            <strong>S.A. Cosby</strong> — <em>All the Sinners Bleed.</em> The
            current generation. Sheriff. Small town. The real machinery
            underneath.
          </li>
          <li>
            <strong>Richard Wright</strong> — <em>Native Son.</em> The original
            argument that the system makes the man before the man makes the
            choice.
          </li>
        </ul>

        <p>
          And, when it lands:{" "}
          <Link href="/books">
            <strong>CONTEMPT.</strong>
          </Link>{" "}
          My first novel. Baltimore, 2006. A deputy mayor is dead. An
          eighteen-year-old is in county. The lawyer inherited the case from the
          father who didn't live to try it. The system is older than all of
          them. June 21, 2026.
        </p>

        <hr />

        <p>
          <strong>
            Lerenyae Watkins is a Dallas-based novelist working in the civic
            noir tradition. CONTEMPT, his debut, releases June 21, 2026.
          </strong>
        </p>
        <p>
          <Link href="/chapter-one">Read Chapter One →</Link>
          {" · "}
          <Link href="/books">The Book →</Link>
          {" · "}
          <Link href="/about">About →</Link>
        </p>
      </article>
    </>
  );
}
