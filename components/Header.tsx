"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig, navigation } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-noir-950/90 backdrop-blur-md border-b border-bone-300/5">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="group shrink-0 mr-8">
          <span className="font-serif text-lg text-bone-200 tracking-wide group-hover:text-gold transition-colors duration-300">{siteConfig.name}</span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {navigation.map((item) =>
            item.cta ? (
              <Link key={item.href} href={item.href} className="px-4 py-1.5 border border-gold/60 text-gold text-xs font-sans font-light tracking-ultra uppercase hover:bg-gold/10 hover:border-gold transition-all duration-300">{item.label}</Link>
            ) : item.accent ? (
              <Link key={item.href} href={item.href} className={`px-4 py-1.5 border text-xs font-sans font-light tracking-ultra uppercase transition-all duration-300 ${pathname === item.href ? "border-burgundy-light text-bone bg-burgundy/20" : "border-burgundy/40 text-burgundy-light hover:bg-burgundy/10 hover:border-burgundy-light hover:text-bone"}`}>{item.label}</Link>
            ) : (
              <Link key={item.href} href={item.href} className={`nav-link ${pathname === item.href ? "nav-link-active" : ""}`}>{item.label}</Link>
            )
          )}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
          <span className={`block w-5 h-px bg-bone-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-5 h-px bg-bone-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </nav>
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pb-8 pt-2 flex flex-col gap-6 border-t border-bone-300/5">
          {navigation.map((item) =>
            item.cta ? (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block px-4 py-1.5 border border-gold/60 text-gold text-xs font-sans font-light tracking-ultra uppercase hover:bg-gold/10 hover:border-gold transition-all duration-300">{item.label}</Link>
            ) : item.accent ? (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={`block px-4 py-1.5 border border-burgundy/40 text-burgundy-light text-xs font-sans font-light tracking-ultra uppercase hover:bg-burgundy/10 hover:border-burgundy-light hover:text-bone transition-all duration-300 ${pathname === item.href ? "border-burgundy-light text-bone bg-burgundy/20" : ""}`}>{item.label}</Link>
            ) : (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={`nav-link text-sm ${pathname === item.href ? "nav-link-active" : ""}`}>{item.label}</Link>
            )
          )}
        </div>
      </div>
    </header>
  );
}
