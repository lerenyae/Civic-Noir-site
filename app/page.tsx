import Link from "next/link";
import Image from "next/image";
import { siteConfig, books } from "@/lib/content";
import SectionReveal from "@/components/SectionReveal";
import { ColdReadCarousel, SummonsViewer } from "@/components/HomeClient";
import Reviews from "@/components/Reviews";
import CoverLoop from "@/components/CoverLoop";
import StickyBar from "@/components/StickyBar";

const contempt = books[0];
const BN_URL = "https://www.barnesandnoble.com/w/contempt-lerenyae-watkins/1150335221?ean=9798995333104";
const HC_URL = "https://www.amazon.com/dp/B0H48RHL6Z";

export default function Home() {
  return (
    <>
      {/* ======================================== */}
      {/*  LAUNCH HERO — Contempt pre-order        */}
      {/* ======================================== */}
      <section className="relative min-h-[100vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden w-full max-w-full">
        <Image
          src="/images/contempt-launch-hero.jpg"
          alt="Contempt hardback under the Domino Sugars neon at the Baltimore Inner Harbor"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir-950/70 via-noir-950/40 to-noir-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir-950/30 via-transparent to-noir-950/30" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/70 mb-6 animate-fade-in">
            Available Now
          </p>
          <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl text-bone-100 font-light tracking-tight sm:tracking-wide uppercase leading-[0.95] mb-6 animate-fade-up [text-shadow:_0_2px_24px_rgba(0,0,0,0.7)]">
            Contempt
          </h1>
          <p className="font-serif italic text-base md:text-lg text-bone-300/85 tracking-widest uppercase mb-6 animate-fade-in delay-200 [text-shadow:_0_2px_12px_rgba(0,0,0,0.7)]">
            A Civic Noir Novel
          </p>
          <div className="w-16 h-px bg-gold/50 mx-auto mb-6 animate-line-grow origin-center delay-300" />
          <p className="text-[11px] font-sans font-light tracking-ultra uppercase text-bone-300/80 mb-10 animate-fade-in delay-300 [text-shadow:_0_2px_12px_rgba(0,0,0,0.7)]">
            LeRenyae Watkins
          </p>
          <p className="font-serif text-lg md:text-xl text-bone-300/80 font-light italic leading-relaxed max-w-xl mx-auto mb-12 animate-fade-in delay-500 [text-shadow:_0_2px_12px_rgba(0,0,0,0.7)]">
            Baltimore, 2006. Defense attorney Shawn Davidson inherits his dead father&rsquo;s murder trial and discovers the case was never built to find the truth. It was built to protect the people who own it.
          </p>

          <div className="flex flex-col items-center gap-6 animate-fade-in delay-700">
            <a
              href={HC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center px-6 py-3 sm:px-10 sm:py-4 bg-burgundy text-bone-100 text-[11px] sm:text-xs font-sans font-light tracking-widest sm:tracking-ultra uppercase whitespace-nowrap hover:bg-burgundy-light transition-colors duration-300 shadow-lg shadow-black/30"
            >
              <span>Order on Amazon</span>
              <span className="text-[9px] tracking-[0.2em] text-bone-100/70 normal-case mt-1">Hardcover · Paperback · Kindle</span>
            </a>
            <a
              href={BN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 sm:px-10 sm:py-4 bg-burgundy text-bone-100 text-[11px] sm:text-xs font-sans font-light tracking-widest sm:tracking-ultra uppercase whitespace-nowrap hover:bg-burgundy-light transition-colors duration-300 shadow-lg shadow-black/30"
            >
              Order on Barnes &amp; Noble
            </a>
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/*  Early reader reviews                    */}
      {/* ======================================== */}
      <Reviews />

      {/* ======================================== */}
      {/*  Featured line                           */}
      {/* ======================================== */}
      <section className="py-20 px-6 border-t border-bone-300/5">
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-2xl md:text-4xl text-bone-200 font-light italic leading-snug [text-wrap:balance]">&ldquo;Your name is either clean, or it&rsquo;s useful.&rdquo;</p>
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mt-6">From Contempt</p>
          </div>
        </SectionReveal>
      </section>

      {/* ======================================== */}
      {/* Official Trailer */}
      {/* ======================================== */}
      <section className="py-24 px-6">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px flex-1 max-w-[60px] bg-gold/20" />
              <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50">Official Trailer</p>
              <div className="h-px flex-1 max-w-[60px] bg-gold/20" />
            </div>
            <div className="relative mx-auto" style={{ maxWidth: "360px" }}>
              <div className="relative overflow-hidden border border-bone-300/5" style={{ aspectRatio: "9/16" }}>
                <iframe
                  src="https://www.youtube.com/embed/DVzU_lJ1RU0"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Contempt — Official Trailer"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      
      {/* ======================================== */}
      {/*  The Summons                             */}
      {/* ======================================== */}
      <section className="py-24 px-6">
        <SectionReveal>
          <SummonsViewer />
        </SectionReveal>
      </section>

      {/* ======================================== */}
      {/*  Cold Read — taste the prose             */}
      {/* ======================================== */}
      <section className="py-24 px-6">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px flex-1 max-w-[60px] bg-gold/20" />
              <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50">Cold Read</p>
              <div className="h-px flex-1 max-w-[60px] bg-gold/20" />
            </div>
            <p className="font-serif text-base text-bone-300/30 font-light italic mb-14">Excerpts from Contempt</p>
            <ColdReadCarousel />
            <div className="mt-12">
              <Link href="/chapter-one" className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/40 hover:text-gold/70 transition-colors duration-300">Read Chapter One &rarr;</Link>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ======================================== */}
      {/*  The Score — the differentiator          */}
      {/* ======================================== */}
      <section className="py-24 px-6 border-t border-bone-300/5">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-6">The Score</p>
            <h2 className="font-serif text-3xl md:text-4xl text-bone-200 font-light mb-5">A novel with its own soundtrack.</h2>
            <p className="text-sm text-bone-300/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              Eighteen original tracks, composed for the book. Character-driven. Chapter-mapped. Press play, then read.
            </p>
            <div className="mb-8">
              <iframe
                src="https://open.spotify.com/embed/track/19mI0I7RtCszJezE8zZNJq?theme=0"
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Contempt — title track"
              />
            </div>
            <Link href="/soundtrack" className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/40 hover:text-gold/70 transition-colors duration-300">Hear the full score &rarr;</Link>
          </div>
        </SectionReveal>
      </section>

      {/* ======================================== */}
      {/*  The book                                */}
      {/* ======================================== */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionReveal><p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-12">Available Now</p></SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
            <SectionReveal delay={100}>
              <div className="relative aspect-[2/3] overflow-hidden border border-bone-300/5">
                <CoverLoop />
              </div>
            </SectionReveal>
            <SectionReveal delay={200}>
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-bone-200 font-light mb-2">{contempt.title}</h2>
                <p className="text-xs text-bone-300/40 font-sans font-light tracking-widest uppercase mb-8">{contempt.genre}</p>
                <p className="font-serif text-2xl md:text-3xl text-bone-300/70 font-light italic leading-relaxed mb-8">&ldquo;{contempt.hookLine}&rdquo;</p>
                <div className="gold-rule mb-8" />
                <p className="text-sm text-bone-300/50 font-light leading-[1.8] mb-8">{contempt.synopsis.split("\n\n")[0]}</p>
                <Link href="/books" className="btn-primary">Read more</Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/*  Author                                  */}
      {/* ======================================== */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-noir-950 via-noir-900/50 to-noir-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/[0.02] rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Link href="/civic-noir" className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-8 animate-fade-in hover:text-gold/80 transition-colors duration-300 block">{siteConfig.tagline}</Link>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-bone-100 font-light leading-[1.1] mb-6 animate-fade-up">LeRenyae<br /><span className="text-bone-300/80">Lawrence Watkins</span></h2>
          <div className="w-16 h-px bg-gold/40 mx-auto mb-8 animate-line-grow origin-center delay-300" />
          <p className="font-serif text-lg md:text-xl text-bone-300/50 font-light italic max-w-lg mx-auto mb-12 animate-fade-in delay-500">Systems over heroes. Subtext over speeches.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-700">
            <Link href="/books" className="btn-primary">The Work</Link>
            
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/*  What is Civic Noir                      */}
      {/* ======================================== */}
      <section className="py-24 px-6 border-t border-b border-bone-300/5">
        <SectionReveal>
          <Link href="/civic-noir" className="block max-w-2xl mx-auto text-center group">
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-8 group-hover:text-gold/80 transition-colors duration-300">What is Civic Noir</p>
            <blockquote className="font-serif text-2xl md:text-3xl text-bone-300/60 font-light leading-relaxed italic group-hover:text-bone-300/80 transition-colors duration-300">&ldquo;Fiction where the system is the protagonist, observation replaces exposition, and tension emerges from the machinery of institutions rather than the heroism of individuals.&rdquo;</blockquote>
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/30 mt-6 group-hover:text-gold/60 transition-colors duration-300">Read the full definition &rarr;</p>
          </Link>
        </SectionReveal>
      </section>

      {/* ======================================== */}
      {/* Acknowledgements                        */}
      {/* ======================================== */}
      <section className="py-24 px-6">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-8">Acknowledgements</p>
            <h2 className="font-serif text-3xl md:text-4xl text-bone-200 font-light mb-6">This book exists because of you.</h2>
            <p className="text-sm text-bone-300/50 font-light leading-relaxed max-w-lg mx-auto mb-12">
              Thank you for waiting. Thank you for watching patiently. None of this moves without the people who believed in the work before there was anything to show for it.
            </p>
            <p className="font-serif text-base text-bone-300/60 font-light italic leading-relaxed max-w-lg mx-auto mb-12">
              To <span className="text-bone-200">Keasha</span> &mdash; for always encouraging me to never stop writing. You kept saying it before I believed it.
            </p>
            <div className="w-12 h-px bg-gold/30 mx-auto mb-12" />
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/40 mb-4">The Circle</p>
            <p className="text-sm text-bone-300/50 font-light leading-relaxed mb-12">
              <span className="text-bone-200">Jeremy</span>, <span className="text-bone-200">Eric</span>, <span className="text-bone-200">Asiah</span>, <span className="text-bone-200">Lauren</span>, <span className="text-bone-200">AJ</span> &mdash; <span className="font-serif italic">for continuous support, from the first draft to launch day.</span>
            </p>
            <div className="w-12 h-px bg-gold/30 mx-auto mb-12" />
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/40 mb-4">The Readers</p>
            <p className="text-sm text-bone-300/50 font-light leading-relaxed">
              <span className="text-bone-200">Quiana</span>, <span className="text-bone-200">Ashley</span>, <span className="text-bone-200">Morgan</span>, <span className="text-bone-200">Layla</span> &mdash; <span className="font-serif italic">for stepping in to put eyes on the story, providing reviews and honest feedback that made this book what it is.</span>
            </p>
          </div>
        </SectionReveal>
      </section>
      <StickyBar />
    </>
  );
}
