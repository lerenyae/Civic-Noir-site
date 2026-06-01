"use client";

import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";

type Track = {
  num: string;
  title: string;
  time: string;
  character: string;
  moment: string;
  spotifyId?: string;
};

const ALBUM_ID = "6OVH9ZeRu3A2p3SoxTkCgk";
const albumEmbed = `https://open.spotify.com/embed/album/${ALBUM_ID}?utm_source=generator&theme=0`;
const trackEmbed = (id: string) =>
  `https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`;
const COVER = "https://i.scdn.co/image/ab67616d0000b27394a1f3aeb2e36d78a05b28c2";

export default function SoundtrackPlayer({ tracks }: { tracks: Track[] }) {
  const [activeNum, setActiveNum] = useState<string | null>(null);
  const [src, setSrc] = useState(albumEmbed);

  const active = tracks.find((t) => t.num === activeNum) || null;
  const cued = active ? `${active.num} — ${active.title}` : "Sounds of CONTEMPT — full album";

  function select(t: Track) {
    if (activeNum === t.num) {
      setActiveNum(null);
      setSrc(albumEmbed);
      return;
    }
    setActiveNum(t.num);
    setSrc(t.spotifyId ? trackEmbed(t.spotifyId) : albumEmbed);
  }

  return (
    <section className="max-w-3xl mx-auto px-6 pb-24">
      {/* LIVE PLAYER — present on entry */}
      <SectionReveal>
        <div className="grid grid-cols-1 sm:grid-cols-[176px_1fr] gap-7 items-start border-t border-b border-bone-300/10 py-8 mb-14">
          <div className="w-[176px] max-w-full aspect-square overflow-hidden border border-bone-300/10 bg-noir-900 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={COVER} alt="Sounds of CONTEMPT — cover art" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-4 min-w-0">
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="inline-flex items-center gap-2 text-[10px] font-sans font-light tracking-ultra uppercase text-gold/60">
                <span className="w-1.5 h-1.5 rounded-full bg-burgundy-light animate-pulse" />
                Now Playing
              </span>
              <span className="font-serif text-lg text-bone-200 font-light">{cued}</span>
            </div>
            <iframe
              key={src}
              title="Spotify — Sounds of CONTEMPT"
              src={src}
              height={152}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="w-full border-0"
            />
            <div className="flex flex-wrap gap-2.5">
              <a
                href={`https://open.spotify.com/album/${ALBUM_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-burgundy/60 text-bone bg-burgundy/20 text-[10px] font-sans font-light tracking-ultra uppercase hover:bg-burgundy/30 hover:border-burgundy transition-all duration-300"
              >
                Spotify
              </a>
              <a
                href="https://www.deezer.com/album/945796151"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-burgundy/60 text-bone bg-burgundy/20 text-[10px] font-sans font-light tracking-ultra uppercase hover:bg-burgundy/30 hover:border-burgundy transition-all duration-300"
              >
                Deezer
              </a>
              <a
                href="https://www.iheart.com/artist/id-50132594/albums/id-389013351"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-burgundy/60 text-bone bg-burgundy/20 text-[10px] font-sans font-light tracking-ultra uppercase hover:bg-burgundy/30 hover:border-burgundy transition-all duration-300"
              >
                iHeartRadio
              </a>
              <a
                href="https://distrokid.com/hyperfollow/lerenyaewatkins/sounds-of-contempt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-bone-300/15 text-bone-300/60 text-[10px] font-sans font-light tracking-ultra uppercase hover:border-bone-300/40 hover:text-bone transition-all duration-300"
              >
                All Platforms ↗
              </a>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* SECTION LABEL */}
      <SectionReveal>
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gold/20" />
          <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 whitespace-nowrap">
            Tracklist &mdash; Character &amp; Chapter Pairings
          </p>
          <div className="h-px flex-1 bg-gold/20" />
        </div>
      </SectionReveal>

      {/* TRACKS — click to play */}
      <div className="flex flex-col">
        {tracks.map((track, i) => {
          const isActive = activeNum === track.num;
          return (
            <SectionReveal key={track.num} delay={i * 30}>
              <button
                type="button"
                onClick={() => select(track)}
                aria-pressed={isActive}
                className={`group w-full text-left grid grid-cols-[2rem_1fr_auto] items-start py-4 border-b border-bone-300/5 transition-colors duration-200 ${
                  isActive ? "bg-burgundy/10" : "hover:bg-bone/[0.02]"
                }`}
              >
                <span
                  className={`text-xs font-sans font-light tabular-nums pt-0.5 transition-colors duration-200 ${
                    isActive ? "text-burgundy-light" : "text-bone-300/30 group-hover:text-burgundy-light"
                  }`}
                >
                  {track.num}
                </span>
                <div className="min-w-0">
                  <p
                    className={`font-serif text-lg font-light leading-snug transition-colors duration-200 ${
                      isActive ? "text-bone-100" : "text-bone-200"
                    }`}
                  >
                    {track.title}
                  </p>
                  <p className="text-[11px] text-burgundy-light font-sans font-light italic mt-0.5">
                    {track.character}
                  </p>
                  <p className="text-xs text-bone-300/40 font-light leading-relaxed mt-1.5 hidden md:block group-hover:text-bone-300/55 transition-colors duration-300">
                    {track.moment}
                  </p>
                </div>
                <span
                  className={`text-xs font-sans font-light tabular-nums pt-1 pl-4 transition-colors duration-200 ${
                    isActive ? "text-burgundy-light" : "text-bone-300/25"
                  }`}
                >
                  {track.time}
                </span>
              </button>
            </SectionReveal>
          );
        })}
      </div>
    </section>
  );
}
