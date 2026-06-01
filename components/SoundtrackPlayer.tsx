"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import SectionReveal from "@/components/SectionReveal";

type Track = {
  num: string;
  title: string;
  time: string;
  character: string;
  moment: string;
  spotifyId?: string;
};

type EmbedController = {
  loadUri: (uri: string) => void;
  play: () => void;
  resume: () => void;
  pause: () => void;
  togglePlay: () => void;
};

type SpotifyIFrameAPI = {
  createController: (
    element: HTMLElement,
    options: { uri: string; width: string | number; height: string | number },
    callback: (controller: EmbedController) => void
  ) => void;
};

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: SpotifyIFrameAPI) => void;
    __spotifyIFrameAPI?: SpotifyIFrameAPI;
  }
}

const ALBUM_ID = "6OVH9ZeRu3A2p3SoxTkCgk";
const COVER = "https://i.scdn.co/image/ab67616d0000b27394a1f3aeb2e36d78a05b28c2";
const trackUri = (id: string) => `spotify:track:${id}`;

/**
 * Holds the Spotify IFrame-API embed. Rendered once (via useMemo in the parent)
 * so React never re-renders it and never touches the node Spotify replaces.
 */
function PlayerEmbed({
  firstUri,
  onReady,
}: {
  firstUri: string;
  onReady: (controller: EmbedController) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let cancelled = false;
    function make(api: SpotifyIFrameAPI) {
      if (cancelled || !ref.current) return;
      api.createController(
        ref.current,
        { uri: firstUri, width: "100%", height: 152 },
        (controller) => {
          if (!cancelled) onReady(controller);
        }
      );
    }
    if (window.__spotifyIFrameAPI) {
      make(window.__spotifyIFrameAPI);
    } else {
      window.onSpotifyIframeApiReady = (api: SpotifyIFrameAPI) => {
        window.__spotifyIFrameAPI = api;
        make(api);
      };
      if (!document.getElementById("spotify-iframe-api-script")) {
        const s = document.createElement("script");
        s.id = "spotify-iframe-api-script";
        s.src = "https://open.spotify.com/embed/iframe-api/v1";
        s.async = true;
        document.body.appendChild(s);
      }
    }
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div ref={ref} />;
}

export default function SoundtrackPlayer({ tracks }: { tracks: Track[] }) {
  const [activeNum, setActiveNum] = useState<string>(tracks[0]?.num ?? "01");
  const controllerRef = useRef<EmbedController | null>(null);
  const active = tracks.find((t) => t.num === activeNum) ?? tracks[0];

  // created once — never re-renders, so the Spotify iframe stays mounted
  const embed = useMemo(
    () => (
      <PlayerEmbed
        firstUri={trackUri(tracks[0]?.spotifyId ?? "")}
        onReady={(controller) => {
          controllerRef.current = controller;
        }}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  function select(t: Track) {
    setActiveNum(t.num);
    const c = controllerRef.current;
    if (c && t.spotifyId) {
      // called inside the click gesture so browsers allow autoplay
      c.loadUri(trackUri(t.spotifyId));
      c.play();
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <h1 className="sr-only">Sounds of CONTEMPT — Original Novel Soundtrack by LeRenyae Watkins</h1>

      {/* GREETING — album cover + live player */}
      <SectionReveal>
        <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-8 text-center sm:text-left">
          Original Novel Soundtrack &nbsp;·&nbsp; 18 Tracks
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-[260px_1fr] gap-8 items-start pb-10 mb-12 border-b border-bone-300/10">
          <div className="w-[260px] max-w-full aspect-square overflow-hidden border border-bone-300/10 bg-noir-900 shadow-2xl mx-auto sm:mx-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={COVER} alt="Sounds of CONTEMPT — cover art" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-5 min-w-0">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-sans font-light tracking-ultra uppercase text-gold/60 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-burgundy-light animate-pulse" />
                Now Playing
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-bone-100 font-light leading-tight">
                {active.title}
              </h2>
              <p className="text-[11px] font-sans font-light tracking-ultra uppercase text-burgundy-light mt-2">
                {active.character}
                <span className="text-bone-300/30">&nbsp; · &nbsp;{active.time}</span>
              </p>
            </div>
            <div className="w-full overflow-hidden">{embed}</div>
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

      {/* TRACKS — click any row to play it above */}
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
