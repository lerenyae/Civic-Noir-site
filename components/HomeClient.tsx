"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type Excerpt = { text: string; where: string; type: "prose" | "dialogue" };

const excerpts: Excerpt[] = [
  { type: "prose", where: "Chapter 1 · Shawn", text: "Most collapses don't announce themselves. They keep their appointments." },
  { type: "prose", where: "Chapter 5 · Dawson", text: "From the second floor you lost distance. You got detail." },
  { type: "prose", where: "Chapter 7 · Shawn", text: "Davidson & Associates didn't welcome. It measured." },
  { type: "dialogue", where: "Chapter 10 · Jordan", text: "\"You let him put his hands on you?\"\n\"Wouldn't say 'let.'\"" },
  { type: "prose", where: "Chapter 13 · Han", text: "Cord twisted so tight the coil had forgotten its shape." },
  { type: "prose", where: "Chapter 17 · Han", text: "Loose strands catching the fluorescent like copper does when it hasn't been polished." },
  { type: "prose", where: "Chapter 21 · Jordan", text: "He saw the flower on the door before he saw the smoke." },
  { type: "prose", where: "Chapter 25 · Shawn", text: "Nobody moved it overnight. Nobody would until the jury did." },
  { type: "prose", where: "Chapter 28 · Han", text: "He kept the water running after it was clean." },
  { type: "prose", where: "Chapter 31 · Shawn", text: "\"You just couldn't help yourself,\" Jamie said. She pulled her chair back. Sat. Not an invitation. A position." },
  { type: "dialogue", where: "Chapter 32 · Shawn", text: "\"Have you ever seen a zoning reclassification reversed because a resident raised his voice at a community meeting?\"\n\"No.\"" },
  { type: "prose", where: "Chapter 34 · Han", text: "The shirt smelled like sweat and chemical and a building he'd been inside too long." },
  { type: "prose", where: "Chapter 37 · Maria", text: "Her hand stayed on the recipe card for a second. Nonna's. Sunday gravy." },
  { type: "dialogue", where: "Chapter 37 · Maria", text: "\"I get to hold up a recipe card for my son.\"" },
  { type: "prose", where: "Chapter 46 · Shawn", text: "Keys found their rhythm. The sound of the system remembering what just happened one floor below." },
];

export function ColdReadCarousel() {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(true);

  const swap = useCallback((next: number) => {
    setShown(false);
    setTimeout(() => { setI(next); setShown(true); }, 600);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setShown(false);
      setTimeout(() => { setI((p) => (p + 1) % excerpts.length); setShown(true); }, 600);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const e = excerpts[i];

  return (
    <div className="relative">
      <div
        className="min-h-[240px] flex flex-col items-center justify-center px-2"
        style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(14px)", transition: "opacity 600ms ease, transform 600ms ease" }}
      >
        <blockquote className="max-w-2xl mx-auto">
          {e.type === "dialogue" ? (
            <div className="space-y-2">
              {e.text.split("\n").map((line, k) => (
                <p key={k} className="font-serif text-xl md:text-2xl text-bone-200/90 font-light leading-relaxed">{line}</p>
              ))}
            </div>
          ) : (
            <p className="font-serif text-2xl md:text-3xl text-bone-200/80 font-light italic leading-[1.5] [text-wrap:balance]">{e.text}</p>
          )}
        </blockquote>
        <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mt-8">
          {e.where} <span className="text-bone-300/30">· {e.type}</span>
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-2 mt-10 max-w-xs mx-auto">
        {excerpts.map((_, k) => (
          <button
            key={k}
            onClick={() => k !== i && swap(k)}
            aria-label={`Excerpt ${k + 1}`}
            className="h-px transition-all duration-500"
            style={{ width: k === i ? "1.75rem" : "0.5rem", opacity: k === i ? 1 : 0.3, backgroundColor: "rgb(212 175 55 / 0.6)" }}
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
