"use client";
import { useEffect, useState } from "react";

const LAUNCH = new Date("2026-06-21T00:00:00-05:00").getTime();
const PREORDER_URL = "https://www.amazon.com/dp/B0GYVVSFH9";

export default function StickyBar() {
  const [show, setShow] = useState(false);
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(Math.max(0, Math.ceil((LAUNCH - Date.now()) / 86400000)));
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 border-t border-bone-300/10 bg-noir-950/95 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/70 whitespace-nowrap">
          {days !== null ? (days === 0 ? "Out Now" : `${days} days`) : ""}
          <span className="text-bone-300/40 hidden sm:inline"> &mdash; June 21, 2026</span>
        </p>
        <div className="flex items-center gap-3">
          <a href={PREORDER_URL} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-burgundy hover:bg-burgundy-light transition-colors text-bone-100 text-[10px] font-sans font-light tracking-widest uppercase whitespace-nowrap">
            Buy on Kindle
          </a>
          <a href="/#reserve" className="px-4 py-2 border border-bone-300/20 hover:border-gold/50 transition-colors text-bone-300 text-[10px] font-sans font-light tracking-widest uppercase whitespace-nowrap hidden sm:block">
            Reserve Print Edition
          </a>
        </div>
      </div>
    </div>
  );
}
