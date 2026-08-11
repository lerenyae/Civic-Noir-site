"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

type Excerpt = { label: string; where: string; who: string; text: string };

const PAGE_SIZE = 4;

const excerpts: Excerpt[] = [
  { label: "The Appointment", where: "Georgetown University, 1998", who: "Shawn, at his father's commencement", text: "Most collapses don't announce themselves. They keep their appointments." },
  { label: "The Permission", where: "Worcester County Circuit Court", who: "Leo's last words to his son", text: "Second chair's safe. You don't have to own the room from there." },
  { label: "The Firm", where: "Davidson & Associates", who: "Shawn, back after two years", text: "Davidson & Associates didn't welcome. It measured." },
  { label: "The Mayor", where: "Baltimore City Hall", who: "Charles Dawson", text: "Men like Leo make messes so theirs can be seen as clean. I expect nothing different from the son. Maybe worse." },
  { label: "The Rule", where: "The Iron Rail Diner", who: "Shawn, on his father's method", text: "Leo had taught him that. Pick ground over comfort." },
  { label: "The Inheritance", where: "Leo's briefcase", who: "Shawn, opening what Leo left", text: "A note, typed and initialed: Debt makes the honest useful. \"Leverage,\" he said quietly." },
  { label: "The Narrative", where: "The Sentinel Post", who: "Donna, to Jordan Grey", text: "That's narrative. You just handed Baltimore a guy to root for." },
  { label: "The Choice", where: "Holliday Street", who: "The chant the city made", text: "Garrick. Moretti. Pick one. The city didn't care which." },
  { label: "The Desk", where: "Property Crimes", who: "Detective Phil Han, reassigned", text: "City bleeding out and he's writing up the band-aids." },
  { label: "The Brother", where: "Jessup Correctional", who: "Daniel Han, Han's brother", text: "Off-duty officer, Highlandtown, one swing that cost a decade." },
  { label: "The Model", where: "Dawson Group Boardroom", who: "The development, in miniature", text: "Chesapeake Landing the way it was supposed to exist by 2016. Everything sterilized in miniature. No scaffolding, sirens, or memory." },
  { label: "The Defense", where: "The War Room", who: "Jamie, building the case", text: "Chain is people. We make them people. 'Certainty' is branding." },
  { label: "The Spine", where: "Courtroom 4C", who: "Shawn, reading the State's case", text: "They want a story that doesn't sweat. Convenience isn't certainty." },
  { label: "The Tell", where: "Courtroom 4C", who: "Antonio Moretti, on trial", text: "Antonio opened his hand under the table. The scab cracked. A thin line of blood ran into the crease of his palm. Nobody saw. Shawn saw." },
  { label: "The Mother", where: "Courtroom 4C", who: "Antonio's mother, on the stand", text: "I get to hold up a recipe card for my son." },
  { label: "The Raid", where: "Sandtown-Winchester", who: "Han, 4:22 a.m.", text: "Back door gave its whole history in one touch. Crowbar scar, latch bent, frame kicked too many times to count." },
  { label: "The Father", where: "Leo's Brownstone", who: "Shawn, alone with what he found", text: "You knew. You fucking knew." },
  { label: "The Funeral", where: "Mount Auburn Cemetery", who: "Han", text: "A man attends enough funerals, death stops arriving. It just stands there waiting when he pulls up." },
  { label: "The Block", where: "O'Connell's Boxing Club", who: "Han, after the shooting", text: "Twenty-eight years of running this block clean punched full of holes." },
  { label: "The Coda", where: "Penn Station, 2007", who: "Nico, one year later", text: "Nico took the one nearest the window, where Charles Street came through the glass in long columns of morning." },
];

const pageCount = Math.ceil(excerpts.length / PAGE_SIZE);

export function ColdReadCarousel() {
  const [page, setPage] = useState(0);
  const [shown, setShown] = useState(true);
  const pausedRef = useRef(false);

  const swap = useCallback((next: number) => {
    setShown(false);
    setTimeout(() => { setPage(next); setShown(true); }, 500);
  }, []);

  useEffect(() => {
    const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setShown(false);
      setTimeout(() => { setPage((p) => (p + 1) % pageCount); setShown(true); }, 500);
    }, 25000);
    return () => clearInterval(id);
  }, []);

  const items = excerpts.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <div
      className="relative"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 min-h-[520px] sm:min-h-[460px]"
        style={{ opacity: shown ? 1 : 0, transition: "opacity 500ms ease" }}
      >
        {items.map((e, k) => (
          <Link
            key={k}
            href="/chapter-one"
            className="group flex flex-col text-left no-underline"
            style={{ background: "#fffdf9", border: "1px solid #e7dfcf", borderRadius: "12px", padding: "20px 22px" }}
          >
            <div
              className="font-sans font-medium mb-3"
              style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#b0632f" }}
            >
              {e.label} &middot; {e.where}
            </div>
            <p className="font-serif flex-1" style={{ fontSize: "1.18rem", lineHeight: 1.4, color: "#1a1814" }}>
              {e.text}
            </p>
            <div className="flex items-center justify-between mt-4 pt-3" style={{ borderTop: "1px solid #efe8d9" }}>
              <span className="font-serif italic" style={{ fontSize: "0.9rem", color: "#9a9784" }}>{e.who}</span>
              <span
                className="font-sans font-medium"
                style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#b0632f" }}
              >
                Keep reading &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2.5 mt-8">
        {Array.from({ length: pageCount }).map((_, k) => (
          <button
            key={k}
            onClick={() => k !== page && swap(k)}
            aria-label={"Page " + (k + 1)}
            className="transition-all duration-500"
            style={{ height: "2px", width: k === page ? "1.6rem" : "0.5rem", opacity: k === page ? 1 : 0.3, backgroundColor: "rgb(212 175 55 / 0.7)" }}
          />
        ))}
      </div>
    </div>
  );
}

export function SummonsViewer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (ev: KeyboardEvent) => { if (ev.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block max-w-[420px] mx-auto cursor-zoom-in"
        aria-label="Open the summons larger"
      >
        <Image
          src="/images/summons-portrait.jpg"
          alt="Official summons from Davidson and Associates, Attorneys at Law"
          width={1080}
          height={1920}
          className="w-full h-auto border border-gold/30 transition-opacity duration-300 group-hover:opacity-90"
        />
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] font-sans font-light tracking-ultra uppercase text-bone-100/90 bg-noir-950/70 px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to read
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-noir-950/90 p-4 sm:p-8 animate-fade-in"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-5 right-6 text-bone-100/70 hover:text-bone-100 text-4xl font-light leading-none"
          >
            &times;
          </button>
          <div className="relative" onClick={(ev) => ev.stopPropagation()}>
            <Image
              src="/images/summons-portrait.jpg"
              alt="Official summons from Davidson and Associates, Attorneys at Law"
              width={1080}
              height={1920}
              className="h-[90vh] w-auto max-w-[92vw] object-contain border border-gold/30 shadow-2xl shadow-black/60"
            />
          </div>
        </div>
      )}
    </>
  );
}
