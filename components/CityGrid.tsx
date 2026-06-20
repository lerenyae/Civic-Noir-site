"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_38BWWfVTfhINFR7ADGqhw2ycQOc";

const backgrounds: Record<string, string> = {
  "/":           `${CDN}/hf_20260620_194950_15c3f610-17b2-4d8c-aa25-ba4b31562437_min.webp`,
  "/civic-noir": `${CDN}/hf_20260620_194956_a7e9220d-f218-40c0-a4ce-ccb483fc3e91_min.webp`,
  "/media":      `${CDN}/hf_20260620_195003_bf756753-5c64-410c-ab61-0237b75c4294_min.webp`,
  "/books":      `${CDN}/hf_20260620_195010_49e6789f-d750-48a8-a2f5-023b426abed5_min.webp`,
  "/soundtrack": `${CDN}/hf_20260620_195016_86f3dfea-1b18-4fd6-82cc-554cec3c606e_min.webp`,
  "/about":      `${CDN}/hf_20260620_195022_b67be700-3fcb-40d8-b3e2-cfbc351c98f1_min.webp`,
};

const DEFAULT_BG = backgrounds["/"];
const MAX_OPACITY = 0.12;

export default function CityGrid() {
  const [opacity, setOpacity] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const start = heroHeight * 0.6;
      const end = heroHeight * 1.2;
      if (scrollY <= start) setOpacity(0);
      else if (scrollY >= end) setOpacity(MAX_OPACITY);
      else setOpacity(((scrollY - start) / (end - start)) * MAX_OPACITY);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bg = backgrounds[pathname] || DEFAULT_BG;

  if (opacity === 0) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity,
        transition: "opacity 0.3s ease-out",
      }}
    />
  );
}
