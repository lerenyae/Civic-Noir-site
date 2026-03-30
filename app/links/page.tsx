import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
    title: "Links",
    description:
          "Quick links for LeRenyae Watkins — read Chapter One, listen to the soundtrack, and connect.",
    openGraph: {
          title: "Links — LeRenyae Watkins",
          description:
                  "Read Chapter One free, stream the Contempt soundtrack, and follow LeRenyae Watkins.",
          images: ["/covers/contempt-cover.png"],
    },
};

const links = [
  { label: "Read Chapter One Free", href: "/chapter-one", accent: true },
  {
        label: "CONTEMPT Soundtrack",
        href: "https://distrokid.com/hyperfollow/lerenyaewatkins/sounds-of-contempt",
        accent: false,
  },
  {
        label: "Instagram — @reigningwords",
        href: "https://instagram.com/reigningwords",
        accent: false,
  },
  ];

export default function LinksPage() {
    return (
          <section className="min-h-[80vh] flex items-center justify-center px-6 py-24">
                <div className="w-full max-w-md mx-auto text-center">
                        <SectionReveal>
                                  <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-6">
                                              LeRenyae Watkins
                                  </p>p>
                        </SectionReveal>SectionReveal>
                
                        <div className="flex flex-col gap-4">
                          {links.map((link, i) => (
                        <SectionReveal key={link.label} delay={i * 80}>
                          {link.href.startsWith("/") ? (
                                          <Link
                                                              href={link.href}
                                                              className={`block w-full border px-6 py-4 text-sm font-sans font-light tracking-widest uppercase transition-all duration-300 ${
                                                                                    link.accent
                                                                                      ? "border-burgundy/60 bg-burgundy/20 text-bone hover:bg-burgundy/30"
                                                                                      : "border-bone-300/10 text-bone-300/60 hover:border-gold/20 hover:text-bone-200"
                                                              }`}
                                                            >
                                            {link.label}
                                          </Link>Link>
                                        ) : (
                                          <a
                                                              href={link.href}
                                                              target="_blank"
                                                              rel="noopener noreferrer"
                                                              className={`block w-full border px-6 py-4 text-sm font-sans font-light tracking-widest uppercase transition-all duration-300 ${
                                                                                    link.accent
                                                                                      ? "border-burgundy/60 bg-burgundy/20 text-bone hover:bg-burgundy/30"
                                                                                      : "border-bone-300/10 text-bone-300/60 hover:border-gold/20 hover:text-bone-200"
                                                              }`}
                                                            >
                                            {link.label}
                                          </a>a>
                                      )}
                        </SectionReveal>SectionReveal>
                      ))}
                        </div>div>
                </div>div>
          </section>section>
        );
}
</section>
