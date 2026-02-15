import type { Metadata } from "next";
import { mediaKit, siteConfig } from "@/lib/content";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Media Kit",
  description: `Press and media resources for ${siteConfig.name}.`,
};

export default function MediaPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-16 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-4">
              Press
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-bone-200 font-light">
              Media Kit
            </h1>
          </SectionReveal>
        </div>
      </section>

      <div className="gold-rule max-w-4xl mx-auto" />

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left column */}
            <div>
              <SectionReveal>
                <div className="mb-12">
                  <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-4">
                    Author
                  </p>
                  <p className="font-serif text-2xl text-bone-200 font-light mb-2">
                    {mediaKit.authorName}
                  </p>
                  <p className="text-xs text-bone-300/40 font-light tracking-wide">
                    {mediaKit.genre}
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={100}>
                <div className="mb-12">
                  <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-4">
                    Bio
                  </p>
                  {mediaKit.bio.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-sm text-bone-300/50 font-light leading-[1.8] mb-4 last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </SectionReveal>

              <SectionReveal delay={200}>
                <div className="mb-12">
                  <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-4">
                    Representation
                  </p>
                  <p className="text-sm text-bone-300/50 font-light italic">
                    {mediaKit.representation}
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={300}>
                <div>
                  <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-4">
                    Press Contact
                  </p>
                  <a
                    href={`mailto:${mediaKit.pressContact}`}
                    className="text-sm text-gold/70 font-light hover:text-gold transition-colors"
                  >
                    {mediaKit.pressContact}
                  </a>
                </div>
              </SectionReveal>
            </div>

            {/* Right column */}
            <div>
              <SectionReveal>
                <div className="mb-12">
                  <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-6">
                    Available For
                  </p>
                  <div className="space-y-4">
                    {mediaKit.availableFor.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <span className="text-gold/30 text-xs mt-0.5 font-light">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm text-bone-300/50 font-light">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={100}>
                <div className="gold-rule mb-12" />
                <div className="mb-12">
                  <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-6">
                    Downloads
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border border-bone-300/10 p-4 opacity-50">
                      <span className="text-sm text-bone-300/60 font-light">
                        Author Photos (High-Res)
                      </span>
                      <span className="text-[10px] text-bone-300/30 tracking-widest uppercase">
                        Coming Soon
                      </span>
                    </div>
                    <a
                      href={mediaKit.bookCoverHighRes}
                      download
                      className="flex items-center justify-between border border-bone-300/10 p-4 hover:border-gold/20 transition-colors group"
                    >
                      <span className="text-sm text-bone-300/60 font-light group-hover:text-bone-200 transition-colors">
                        Book Cover &mdash; Contempt
                      </span>
                      <span className="text-[10px] text-gold/40 tracking-widest uppercase">
                        JPG
                      </span>
                    </a>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={200}>
                <div>
                  <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-6">
                    Press
                  </p>
                  <p className="text-sm text-bone-300/30 font-light italic">
                    Press clippings will be added as coverage develops.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
