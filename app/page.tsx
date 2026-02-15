import Link from "next/link";
import Image from "next/image";
import { siteConfig, books } from "@/lib/content";
import Newsletter from "@/components/Newsletter";
import SectionReveal from "@/components/SectionReveal";

const contempt = books[0];

export default function Home() {
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-noir-950 via-noir-900/50 to-noir-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/[0.02] rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto text-center">
      

          {/* Genre marker */}
          <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-8 animate-fade-in">
            {siteConfig.tagline}
          </p>

          {/* Name */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-bone-100 font-light leading-[1.1] mb-6 animate-fade-up">
            LeRenyae
            <br />
            <span className="text-bone-300/80">Lawrence Watkins</span>
          </h1>

          {/* Divider */}
          <div className="w-16 h-px bg-gold/40 mx-auto mb-8 animate-line-grow origin-center delay-300" />

          {/* Positioning line */}
          <p className="font-serif text-lg md:text-xl text-bone-300/50 font-light italic max-w-lg mx-auto mb-12 animate-fade-in delay-500">
            Systems over heroes. Subtext over speeches.
            <br />
            Lived-in realism.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-700">
            <Link href="/books" className="btn-primary">
              The Work
            </Link>
            <a href="#newsletter" className="btn-secondary">
              Stay in the circuit
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ BOOK PREVIEW ═══════════════════ */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-12">
              Forthcoming &mdash; {contempt.year}
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
            {/* Book cover — real image */}
            <SectionReveal delay={100}>
              <div className="relative aspect-[2/3] overflow-hidden border border-bone-300/5">
                <Image
                  src={contempt.cover}
                  alt={contempt.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </SectionReveal>

            {/* Book info */}
            <SectionReveal delay={200}>
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-bone-200 font-light mb-2">
                  {contempt.title}
                </h2>
                <p className="text-xs text-bone-300/40 font-sans font-light tracking-widest uppercase mb-8">
                  {contempt.genre}
                </p>

                {/* Hook line */}
                <p className="font-serif text-2xl md:text-3xl text-bone-300/70 font-light italic leading-relaxed mb-8">
                  &ldquo;{contempt.hookLine}&rdquo;
                </p>

                <div className="gold-rule mb-8" />

                {/* First paragraph of synopsis only on home */}
                <p className="text-sm text-bone-300/50 font-light leading-[1.8] mb-8">
                  {contempt.synopsis.split("\n\n")[0]}
                </p>

                <Link href="/books" className="btn-primary">
                  Read more
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ GENRE STATEMENT ═══════════════════ */}
      <section className="py-24 px-6 border-t border-b border-bone-300/5">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-8">
              What is Civic Noir
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl text-bone-300/60 font-light leading-relaxed italic">
              &ldquo;Fiction where the system is the protagonist, observation
              replaces exposition, and tension emerges from the machinery of
              institutions rather than the heroism of individuals.&rdquo;
            </blockquote>
          </div>
        </SectionReveal>
      </section>

      {/* ═══════════════════ NEWSLETTER ═══════════════════ */}
      <Newsletter />
    </>
  );
}
