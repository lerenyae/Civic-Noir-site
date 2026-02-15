import Link from "next/link";
import { siteConfig, navigation } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-bone-300/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <p className="font-serif text-lg text-bone-200 mb-3">
              {siteConfig.name}
            </p>
            <p className="text-xs text-bone-300/40 font-light tracking-wide uppercase">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social / Newsletter */}
          <div className="flex flex-col gap-4">
            <a
              href={siteConfig.links.newsletter}
              className="nav-link hover:text-gold"
            >
              Newsletter
            </a>
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Instagram
            </a>
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              X / Twitter
            </a>
          </div>
        </div>

        <div className="gold-rule mt-16 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-bone-300/30 font-light tracking-widest uppercase">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="text-[10px] text-bone-300/20 font-light tracking-widest uppercase">
            Systems over heroes
          </p>
        </div>
      </div>
    </footer>
  );
}
