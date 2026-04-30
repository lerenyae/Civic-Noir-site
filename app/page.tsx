import Link from "next/link";
import Image from "next/image";
import { siteConfig, books } from "@/lib/content";
import Newsletter from "@/components/Newsletter";
import SectionReveal from "@/components/SectionReveal";
import QuoteCarousel from "@/components/QuoteCarousel";

const contempt = books[0];
const PREORDER_URL = "https://www.amazon.com/dp/B0GYVVSFH9?ref=sp_email";

export default function Home() {
  return (
    <>
      {/* ======================================== */}
      {/*  LAUNCH HERO — Contempt pre-order        */}
      {/* ======================================== */}
      <section className="relative min-h-[100vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden w-full max-w-full">
        {/* Background photo */}
        <Image
          src="/images/contempt-launch-hero.jpg"
          alt="Contempt hardback under the Domino Sugars neon at the Baltimore Inner Harbor"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark gradient overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-noir-950/70 via-noir-950/40 to-noir-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir-950/30 via-transparent to-noir-950/30" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/70 mb-10 animate-fade-in">
            Forthcoming &mdash; June 21, 2026
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

          <div className="flex flex-col items-center gap-10 animate-fade-in delay-700">
            <a
              href={PREORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 sm:px-10 sm:py-4 bg-burgundy text-bone-100 text-[11px] sm:text-xs font-sans font-light tracking-widest sm:tracking-ultra uppercase whitespace-nowrap hover:bg-burgundy-light transition-colors duration-300 shadow-lg shadow-black/30"
            >
              Pre-order on Kindle &mdash; June 21, 2026
            </a>

            <div className="w-full max-w-md">
              <p className="font-serif italic text-sm text-bone-300/70 mb-4 [text-shadow:_0_2px_12px_rgba(0,0,0,0.7)]">
                Get launch updates and Founders Edition access.
              </p>
              <Newsletter variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/*  Existing sections preserved below       */}
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
            <a href="#newsletter" className="btn-secondary">Stay in the circuit</a>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionReveal><p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-12">Forthcoming &mdash; {contempt.year}</p></SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
            <SectionReveal delay={100}>
              <div className="relative aspect-[2/3] overflow-hidden border border-bone-300/5">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                  <source src="/covers/contempt-loop.mp4" type="video/mp4" />
                </video>
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

      <section className="py-24 px-6 border-t border-b border-bone-300/5">
        <SectionReveal>
          <Link href="/civic-noir" className="block max-w-2xl mx-auto text-center group">
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-8 group-hover:text-gold/80 transition-colors duration-300">What is Civic Noir</p>
            <blockquote className="font-serif text-2xl md:text-3xl text-bone-300/60 font-light leading-relaxed italic group-hover:text-bone-300/80 transition-colors duration-300">&ldquo;Fiction where the system is the protagonist, observation replaces exposition, and tension emerges from the machinery of institutions rather than the heroism of individuals.&rdquo;</blockquote>
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/30 mt-6 group-hover:text-gold/60 transition-colors duration-300">Read the full definition &rarr;</p>
          </Link>
        </SectionReveal>
      </section>

      <section className="py-24 px-6">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px flex-1 max-w-[60px] bg-gold/20" />
              <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50">Cold Read</p>
              <div className="h-px flex-1 max-w-[60px] bg-gold/20" />
            </div>
            <p className="font-serif text-base text-bone-300/30 font-light italic mb-14">Excerpts from Contempt</p>
            <QuoteCarousel />
            <div className="mt-12">
              <Link href="/chapter-one" className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/40 hover:text-gold/70 transition-colors duration-300">Read Chapter One &rarr;</Link>
            </div>
          </div>
        </SectionReveal>
      </section>

      <Newsletter />
    </>
  );
}
