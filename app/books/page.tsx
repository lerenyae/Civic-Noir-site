import type { Metadata } from "next";
import Image from "next/image";
import { books, siteConfig } from "@/lib/content";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = { title: "The Book", description: `Contempt — a legal thriller set in Baltimore, 2006. By ${siteConfig.name}.`, openGraph: { title: `Books — ${siteConfig.name}` } };

export default function BooksPage() {
  const contempt = books[0];
  return (
    <>
      {/* Hero — status + hookline */}
      <section className="pt-16 pb-8 px-6"><div className="max-w-5xl mx-auto"><SectionReveal><p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-4">{contempt.status}</p></SectionReveal>
      <div className="gold-rule max-w-5xl mx-auto" />
      </div></section>

      {/* Cover + Synopsis */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16 items-start">
            <SectionReveal><div className="relative aspect-[2/3] overflow-hidden border border-bone-300/5 sticky top-28"><Image src={contempt.cover} alt={contempt.title} fill className="object-cover" /></div></SectionReveal>
            <div>
              <SectionReveal><div className="mb-10"><p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-4">About the Book</p>
              <p className="font-serif text-2xl md:text-3xl text-bone-300/70 font-light italic leading-relaxed">&ldquo;{contempt.hookLine}&rdquo;</p></div></SectionReveal>
                            <div className="gold-rule mb-10" />
              <SectionReveal delay={200}><div className="mb-10">{contempt.synopsis.split("\n\n").map((para, i) => (<p key={i} className={`text-sm text-bone-300/50 font-light leading-[1.8] ${i < contempt.synopsis.split("\n\n").length - 1 ? "mb-6" : ""}`}>{para}</p>))}</div></SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Book — inspiration */}
      {contempt.inspiration && (
      <section className="py-20 px-6 border-t border-bone-300/5">
        <div className="max-w-3xl mx-auto">
          <SectionReveal><p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-8 text-center">Behind the Book</p>
          <h2 className="font-serif text-3xl md:text-4xl text-bone-200 font-light mb-10 text-center">What made this story necessary.</h2></SectionReveal>
          <SectionReveal delay={100}><div>{contempt.inspiration.split("\n\n").map((para, i) => (<p key={i} className={`text-sm text-bone-300/50 font-light leading-[1.8] ${i < contempt.inspiration.split("\n\n").length - 1 ? "mb-6" : ""}`}>{para}</p>))}</div></SectionReveal>
        </div>
      </section>
      )}

      {/* Themes */}
      {contempt.themes && contempt.themes.length > 0 && (
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal><p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-8">Themes</p>
          <div className="flex flex-wrap justify-center gap-4">{contempt.themes.map((theme, i) => (<span key={i} className="text-xs font-sans font-light tracking-widest uppercase text-bone-300/40 border border-bone-300/10 px-4 py-2">{theme}</span>))}</div></SectionReveal>
        </div>
      </section>
      )}

      {/* Buy links */}
      <section className="py-16 px-6 border-t border-bone-300/5">
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal><p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-8">Get the Book</p>
          {contempt.buyLinks.length > 0 && (<div className="flex flex-wrap justify-center gap-4">{contempt.buyLinks.map((link, i) => (<a key={i} href={link.url} target={link.url.startsWith("http") ? "_blank" : undefined} rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined} className="inline-block px-8 py-3 border border-bone-300/20 text-[11px] font-sans font-light tracking-ultra uppercase text-bone-300/60 hover:text-bone-100 hover:border-gold/40 transition-colors duration-300">{link.label}</a>))}</div>)}</SectionReveal>
        </div>
      </section>
    </>
  );
}
