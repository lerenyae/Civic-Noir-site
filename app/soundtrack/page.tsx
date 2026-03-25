import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Soundtrack",
  description: "Sounds of Contempt â 18 tracks. The temperature of the pages in sound. Original novel soundtrack by LeRenyae Watkins.",
};

const tracks = [
  { num: "01", title: "Contempt", time: "3:44", character: "Shawn", moment: "Title track. The weight of the word â legal, paternal, civic, self-inflicted. Every layer in one sound." },
  { num: "02", title: "Fatherâs Donât Fade", time: "3:01", character: "Shawn / Leo", moment: "Leoâs collapse on the courthouse steps. The briefcase. The inheritance no one asked for. Ch 1â2." },
  { num: "03", title: "Leather and Blood", time: "3:18", character: "Shawn", moment: "The briefcase opened. Leoâs case files, the Fedwire voucher, the IA file on Han. Clean on paper. Dirty in daylight. Ch 3." },
  { num: "04", title: "Crimson Fuse", time: "4:05", character: "Han / The City", moment: "The case fractures. Sandtown entry. Gunfire on exit. Parker chained in a basement. The city detonating. Ch 32." },
  { num: "05", title: "All Falls Down", time: "1:59", character: "Antonio", moment: "The rally. The bottle. The shot. Garrick drops. Antonio is underneath. Everything collapses in under two minutes." },
  { num: "06", title: "Letterhead", time: "3:07", character: "The Firm", moment: "Davidson & Associates. The name on the door. The name on the debt. Institutional pressure in stereo." },
  { num: "07", title: "Cold Trail", time: "3:11", character: "Shawn", moment: "Jordan chasing the missing witness. Eve behind Red Orchid. The story that doesnât want exposure. Ch 18â20." },
  { num: "08", title: "No Sirens", time: "3:24", character: "Han", moment: "Han at the Iron Rail. The favors. The math between the people he loved and the system that held their debts. Ch 4â5." },
  { num: "09", title: "Maya", time: "3:51", character: "Maya", moment: "The gallery. The divorce. The canvases face-down in glass. She doesnât argue â she observes. Her accuracy is the weapon. Ch 23." },
  { num: "10", title: "I Miss the Sun", time: "3:43", character: "Antonio", moment: "Antonio in county. The fluorescent halo. Lights on all night. No window. Stillness cost less than guessing. Ch 6." },
  { num: "11", title: "Before I Walk In", time: "3:04", character: "Shawn", moment: "The morning of opening statements. Briefcase burned cold in his palm. Leoâs habits borrowing his hands. Ch 24." },
  { num: "12", title: "Glass Halo", time: "4:14", character: "Han", moment: "TRUTH IS A BID carved in the wall. The metal sheet pretending to be a mirror. A boy learning to breathe where no one taught him how." },
  { num: "13", title: "Hold My Name", time: "4:31", character: "Antonio", moment: "Antonioâs prayer from the inside. Donât let them make me something I ainât. The name is all he has left." },
  { num: "14", title: "Exits", time: "2:26", character: "Jordan", moment: "Jordan in Central Booking. Charged. Bail denied. The documenter becomes the document. Ch 43." },
  { num: "15", title: "What It Cost", time: "3:27", character: "Shawn / Han / Jordan", moment: "The reckoning. Three men who paid for the truth in different currencies. Nobody got change." },
  { num: "16", title: "Shame", time: "3:09", character: "Shawn", moment: "Shawn confronting what he became to win. The tools he used. The father he sounds like. The name he canât return." },
  { num: "17", title: "Case Closed", time: "3:08", character: "The System", moment: "The split verdict. The system doesnât give clean wins. It adjusts. Paperwork and silence. Ch 51." },
  { num: "18", title: "Charm City", time: "3:24", character: "Baltimore", moment: "The closer. The city wakes up the same way it went to sleep. Cranes on the harbor. Domino burns red. Baltimore doesnât apologize." },
];

export default function SoundtrackPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-noir-950 via-noir-900/50 to-noir-950" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-burgundy/[0.06] rounded-full blur-[140px]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <SectionReveal>
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-8">Original Novel Soundtrack</p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-bone-100 font-light leading-[1.05] mb-4">
              SOUNDS OF<br /><span className="text-bone-300/80">CONTEMPT</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={200}>
            <div className="w-16 h-px bg-gold/40 mx-auto mb-6 animate-line-grow origin-center" />
          </SectionReveal>
          <SectionReveal delay={300}>
            <p className="text-xs font-sans font-light tracking-ultra uppercase text-bone-300/40 mb-8">18 Tracks &nbsp;|&nbsp; LeRenyae Watkins</p>
          </SectionReveal>
          <SectionReveal delay={400}>
            <p className="font-serif text-lg md:text-xl text-bone-300/50 font-light italic mb-12">...the temperature of the pages in sound.</p>
          </SectionReveal>
          <SectionReveal delay={500}>
            <a
              href="https://distrokid.com/hyperfollow/lerenyaewatkins/sounds-of-contempt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 border border-burgundy/60 text-bone bg-burgundy/20 text-xs font-sans font-light tracking-ultra uppercase hover:bg-burgundy/30 hover:border-burgundy transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M8 5v14l11-7z" /></svg>
              Listen on Your Platform
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* EMBEDS */}
      <section className="max-w-2xl mx-auto px-6 pb-16">
        <SectionReveal>
          <div className="flex flex-col gap-4">
            <div className="border border-bone-300/8 bg-noir-900/50 rounded-lg p-8 text-center">
              <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/40 mb-2">Spotify</p>
              <p className="text-xs text-bone-300/30 font-light"></p>
            </div>
            <div className="border border-bone-300/8 bg-noir-900/50 rounded-lg p-8 text-center">
              <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/40 mb-2">Apple Music</p>
              <p className="text-xs text-bone-300/30 font-light"></p>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* TRACKLIST */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gold/20" />
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 whitespace-nowrap">Tracklist &mdash; Character &amp; Chapter Pairings</p>
            <div className="h-px flex-1 bg-gold/20" />
          </div>
        </SectionReveal>

        <div className="flex flex-col">
          {tracks.map((track, i) => (
            <SectionReveal key={track.num} delay={i * 30}>
              <TrackRow track={track} />
            </SectionReveal>
          ))}
        </div>
      </section>
    </>
  );
}

function TrackRow({ track }: { track: typeof tracks[number] }) {
  return (
    <div className="group grid grid-cols-[2rem_1fr_auto] items-start py-4 border-b border-bone-300/5 hover:bg-bone/[0.02] transition-colors duration-200">
      <span className="text-xs text-bone-300/30 font-sans font-light tabular-nums pt-0.5">{track.num}</span>
      <div className="min-w-0">
        <p className="font-serif text-lg text-bone-200 font-light leading-snug">{track.title}</p>
        <p className="text-[11px] text-burgundy-light font-sans font-light italic mt-0.5">{track.character}</p>
        <p className="text-xs text-bone-300/40 font-light leading-relaxed mt-1.5 hidden md:block group-hover:text-bone-300/55 transition-colors duration-300">{track.moment}</p>
      </div>
      <span className="text-xs text-bone-300/25 font-sans font-light tabular-nums pt-1 pl-4">{track.time}</span>
    </div>
  );
}
