"use client";
import { useEffect, useState } from "react";

const LAUNCH = new Date("2026-06-21T00:00:00-05:00").getTime();

function diff() {
  const d = Math.max(0, LAUNCH - Date.now());
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor(d / 3600000) % 24,
    mins: Math.floor(d / 60000) % 60,
    secs: Math.floor(d / 1000) % 60,
    done: d === 0,
  };
}

function Cell({ v, label }: { v: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[3.2rem]">
      <span className="font-serif text-2xl sm:text-3xl text-bone-100 font-light tabular-nums [text-shadow:_0_2px_12px_rgba(0,0,0,0.7)]">
        {String(v).padStart(2, "0")}
      </span>
      <span className="text-[9px] font-sans font-light tracking-ultra uppercase text-bone-300/60 mt-1">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTicker() {
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);
  useEffect(() => {
    setT(diff());
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);
  if (!t) return <div className="h-14" aria-hidden />;
  if (t.done)
    return (
      <p className="text-[11px] font-sans font-light tracking-ultra uppercase text-gold">
        Available now
      </p>
    );
  return (
    <div className="flex items-start justify-center gap-3 sm:gap-5" role="timer" aria-label="Countdown to launch, June 21, 2026">
      <Cell v={t.days} label="Days" />
      <span className="font-serif text-2xl sm:text-3xl text-gold/50 leading-none pt-0.5">:</span>
      <Cell v={t.hours} label="Hours" />
      <span className="font-serif text-2xl sm:text-3xl text-gold/50 leading-none pt-0.5">:</span>
      <Cell v={t.mins} label="Min" />
      <span className="font-serif text-2xl sm:text-3xl text-gold/50 leading-none pt-0.5">:</span>
      <Cell v={t.secs} label="Sec" />
    </div>
  );
}
