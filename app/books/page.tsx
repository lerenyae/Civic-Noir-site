import type { Metadata } from "next";
import Image from "next/image";
import { books, siteConfig } from "@/lib/content";
import SectionReveal from "@/components/SectionReveal";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Books",
  description: `Books by ${siteConfig.name}. Civic Noir — legal thrillers, institutional tension, lived-in realism.`,
};

export default function BooksPage() {
  const contempt = books[0];

  return (
    <>
      {/* Page Header */}
      <section className="pt-16 pb-8 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-4">
              Books &amp; Projects
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-bone-200 font-light">
              The Work
            </h1>
          </SectionReveal>
        </div>
      </section>

      <div className="gold-rule max-w-5xl mx-auto" />

      {/* Contempt — Feature */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16 items-start">
            {/* Cover */}
            <SectionReveal>
              <div className="relative aspect-[2/3] overflow-hidden border border-bone-300/5 sticky top-28">
                <Image
                  src={contempt.cover}
                  alt={contempt.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </SectionReveal>

            {/* Details */}
            <div>
              <SectionReveal>
                <div className="mb-10">
                  <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-4">
                    {contempt.status} &mdash; {contempt.year}
                  </p>
                  <h2 className="font-serif text-5xl md:text-6xl text-bone-200 font-light mb-2">
                    {contempt.title}
                  </h2>
                  <p className="text-xs text-bone-300/40 font-sans font-light tracking-widest uppercase">
                    {contempt.genre}
                  </p>
                </div>
              </SectionReveal>

              {/* Hook line */}
              <SectionReveal delay={100}>
                <div className="mb-10">
                  <p className="font-serif text-2xl md:text-3xl text-bone-300/70 font-light italic leading-relaxed">
                    &ldquo;{contempt.hookLine}&rdquo;
                  </p>
                </div>
              </SectionReveal>

              <div className="gold-rule mb-10" />

              {/* Full synopsis */}
              <SectionReveal delay={200}>
                <div className="mb-10">
                  {contempt.synopsis.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className={`text-sm text-bone-300/50 font-light leading-[1.8] mb-6 last:mb-0 ${
                        i === contempt.synopsis.split("\n\n").length - 1
                          ? "text-bone-300/70 font-serif text-lg italic"
                          : ""
                      }`}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </SectionReveal>

              <SectionReveal delay={300}>
                <div className="gold-rule mb-10" />

                {contempt.pullQuote && (
                  <blockquote className="border-l-2 border-gold/30 pl-6 mb-10">
                    <p className="font-serif text-lg text-bone-300/60 italic">
                      {contempt.pullQuote}
                    </p>
                  </blockquote>
                )}

                {contempt.buyLinks.length > 0 ? (
                  <div className="flex flex-wrap gap-4">
                    {contempt.buyLinks.map((link: any, i: number) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-bone-300/30 font-light italic">
                    Pre-order links coming soon.
                  </p>
                )}
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
