"use client";

import { useEffect, useRef } from "react";

export default function CoverLoop() {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    el.defaultMuted = true;
    el.setAttribute("muted", "");
    el.setAttribute("playsinline", "");
    const tryPlay = () => {
      el.play().catch(() => {});
    };
    tryPlay();
    const onTouch = () => {
      tryPlay();
      window.removeEventListener("touchstart", onTouch);
    };
    window.addEventListener("touchstart", onTouch, { passive: true });
    return () => window.removeEventListener("touchstart", onTouch);
  }, []);

  return (
    <video
      ref={ref}
      src="/covers/contempt-loop-3.mp4"
      poster="/covers/contempt-loop-poster-3.jpg"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}
