import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links",
  description: "All links — LeRenyae Lawrence Watkins. Author of Contempt.",
};

const links = [
  {
    label: "Read Chapter One Free",
    href: "/chapter-one",
    accent: true,
  },
  {
    label: "CONTEMPT — Pre-Order",
    href: "#",
    accent: false,
    note: "Coming Soon",
  },
  {
    label: "CONTEMPT Soundtrack",
    href: "#",
    accent: false,
    note: "Apple Music — Coming Soon",
  },
  {
    label: "YouTube — @ReigningAudio",
    href: "https://www.youtube.com/@ReigningAudio",
    accent: false,
  },
  {
    label: "Instagram — @reigningwords",
    href: "https://instagram.com/reigningwords",
    accent: false,
  },
  {
    label: "Personal Website",
    href: "https://lerenyaewatkins.com",
    accent: false,
  },
];

export default function LinksPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md text-center">
        {/* Identity */}
        <h1 className="font-serif text-3xl md:text-4xl text-bone font-light tracking-wide mb-2">
          LeRenyae Watkins
        </h1>
        <p className="text-bone-300/60 text-sm font-sans font-light tracking-widest uppercase mb-1">
          Author of Contempt
        </p>
        <p className="text-bone-300/40 text-xs font-sans font-light tracking-wide mb-10">
          Civic Noir — A legal-crime thriller set in Baltimore, 2006.
        </p>

        <div className="gold-rule mb-10" />

        {/* Links */}
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={
                link.accent
                  ? "block w-full px-6 py-4 border border-gold/60 text-gold text-sm font-sans font-light tracking-ultra uppercase hover:bg-gold/10 hover:border-gold transition-all duration-300"
                  : "block w-full px-6 py-4 border border-bone-300/20 text-bone-300/70 text-sm font-sans font-light tracking-widest uppercase hover:border-bone-300/40 hover:text-bone transition-all duration-300"
              }
            >
              {link.label}
              {link.note && (
                <span className="block text-[10px] text-bone-300/30 tracking-wide mt-1 normal-case">
                  {link.note}
                </span>
              )}
            </a>
          ))}
        </div>

        <div className="gold-rule mt-10 mb-6" />

        <p className="text-bone-300/30 text-[10px] font-sans tracking-widest uppercase">
          Reigning Words Publishing
        </p>
      </div>
    </section>
  );
}
