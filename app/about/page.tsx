import type { Metadata } from "next";
import Image from "next/image";
import { bio, siteConfig } from "@/lib/content";
import SectionReveal from "@/components/SectionReveal";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}. Civic Noir — crime and legal fiction built on pressure, procedure, and consequence.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-16 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-4">
              About
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-bone-200 font-light">
              The Author
            </h1>
          </SectionReveal>
        </div>
      </section>

      <div className="gold-rule max-w-4xl mx-auto" />

      {/* Bio Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-16 items-start">
            {/* Photo — Contempt cover as visual */}
            <SectionReveal>
              <div className="relative aspect-[3/4] overflow-hidden border border-bone-300/5 sticky top-28">
                <Image
                  src={bio.photo}
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                />
              </div>
            </SectionReveal>

            {/* Bio Text */}
            <div>
              <SectionReveal>
                <div className="mb-12">
                  {bio.long.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="font-serif text-lg text-bone-300/70 font-light leading-[1.8] mb-6 last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </SectionReveal>

              {/* How I Write */}
              <SectionReveal delay={100}>
                <div className="gold-rule mb-10" />
                <div className="mb-10">
                  <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-6">
                    How I Write
                  </p>
                  <div className="space-y-4">
                    {bio.howIWrite.map((tenet, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <span className="text-gold/30 text-xs mt-1 font-light">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm text-bone-300/50 font-light">
                          {tenet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>

              {/* Contact CTA */}
              <SectionReveal delay={200}>
                <div className="gold-rule mb-10" />
                <p className="text-sm text-bone-300/40 font-light mb-6">
                  For press inquiries, speaking, or adaptation interest:
                </p>
                <a href="/contact" className="btn-primary">
                  Get in touch
                </a>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
