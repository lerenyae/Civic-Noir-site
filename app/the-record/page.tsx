"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect, useCallback } from "react";
import { records, RecordEntry } from "@/lib/records";

const collectionLabels: Record<string, string> = {
  firm: "Firm History",
  westport: "The Westport Files",
  trial: "Trial Exhibits",
  family: "Family Archives",
  personal: "Personal Effects",
};

const sections = [
  {
    id: "foundation",
    numeral: "I",
    title: "The Foundation",
    sub: "What the four founders signed in 1982. What grew from it.",
    slugs: [
      "davidson-associates-founding",
      "davidson-associates-founding-press",
      "pinnacle-merger-announcement",
    ],
  },
  {
    id: "westport",
    numeral: "II",
    title: "The Westport Files",
    sub: "Eight months. Seventeen parcels. One reporter who did not stop.",
    slugs: [
      "garrick-shooting-sentinel",
      "azure-horizons-parcel-transfer",
      "sentinel-editorial-grey-byline",
    ],
  },
  {
    id: "people",
    numeral: "III",
    title: "The People",
    sub: "The men inside the system. The men the system kept files on.",
    slugs: [
      "han-internal-affairs-summary",
      "daniel-han-richards-assault",
      "shawn-bar-registration",
      "eddies-boxing-club",
    ],
  },
  {
    id: "trial",
    numeral: "IV",
    title: "The Trial",
    sub: "What the State offered. What the defense offered back.",
    slugs: ["antonio-moretti-intake-form"],
  },
  {
    id: "family",
    numeral: "V",
    title: "The Family",
    sub: "What was kept. What was pressed between pages.",
    slugs: ["leo-davidson-obituary"],
  },
  {
    id: "work",
    numeral: "VI",
    title: "The Work",
    sub: "Where the title came from. The hand that held the shutter.",
    slugs: ["jordan-grey-pulitzer"],
  },
];

function getSrcSet(slug: string) {
  return `/images/the-record/${slug}-480w.webp 480w, /images/the-record/${slug}-960w.webp 960w, /images/the-record/${slug}-1920w.webp 1920w`;
}

function getSrc(slug: string) {
  return `/images/the-record/${slug}-960w.webp`;
}

export default function TheRecordIndex() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<RecordEntry | null>(null);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  const openLightbox = useCallback((record: RecordEntry) => {
    setLightbox(record);
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeLightbox]);

  const filteredSlugs = (slugs: string[]) =>
    slugs.filter((slug) => {
      if (filter === "all") return true;
      const r = records.find((rec) => rec.slug === slug);
      return r?.collection === filter;
    });

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse at top, rgba(201,169,97,0.04) 0%, transparent 60%), #0d0a08",
        backgroundAttachment: "fixed",
        fontFamily: "'EB Garamond', serif",
        color: "#d4d0c8",
        lineHeight: 1.6,
        overflowX: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Special+Elite&family=Caveat:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* ===== HEADER ===== */}
      <header
        style={{
          padding: "100px 40px 80px",
          textAlign: "center",
          borderBottom: "1px solid #2a2018",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 30,
            left: "50%",
            transform: "translateX(-50%)",
            width: 60,
            height: 1,
            background: "#c9a961",
            opacity: 0.6,
          }}
        />
        <div
          style={{
            fontFamily: "'Special Elite', monospace",
            fontSize: 11,
            letterSpacing: 6,
            color: "#c9a961",
            marginBottom: 32,
            textTransform: "uppercase",
          }}
        >
          — A Working Archive —
        </div>
        <h1
          style={{
            fontFamily: "'EB Garamond', serif",
            fontSize: 88,
            fontWeight: 400,
            letterSpacing: 12,
            color: "#e8e4d8",
            marginBottom: 20,
            fontVariant: "small-caps",
            lineHeight: 1,
          }}
        >
          The Record
        </h1>
        <p
          style={{
            maxWidth: 680,
            margin: "0 auto 40px",
            fontSize: 18,
            lineHeight: 1.7,
            color: "#a8a39a",
            fontStyle: "italic",
          }}
        >
          <span style={{ fontStyle: "normal", color: "#c9a961" }}>&ldquo;</span>
          The record mattered more than the hand holding it.
          <span style={{ fontStyle: "normal", color: "#c9a961" }}>&rdquo;</span>
        </p>
        <div
          style={{
            fontFamily: "'Special Elite', monospace",
            fontSize: 10,
            letterSpacing: 3,
            color: "#8a7a5a",
            textTransform: "uppercase",
          }}
        >
          — J. Grey, Sentinel Post · Dhahran, 1996
        </div>
      </header>

      {/* ===== FILTER BAR ===== */}
      <nav
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "50px 40px 60px",
          display: "flex",
          gap: 0,
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {[
          { key: "all", label: "All Artifacts" },
          { key: "firm", label: "Firm History" },
          { key: "westport", label: "The Westport Files" },
          { key: "trial", label: "Trial Exhibits" },
          { key: "family", label: "Family Archives" },
          { key: "personal", label: "Personal Effects" },
        ].map((f, i) => (
          <span key={f.key} style={{ display: "flex", alignItems: "center" }}>
            {i > 0 && (
              <span
                style={{
                  width: 1,
                  height: 16,
                  background: "#2a2018",
                }}
              />
            )}
            <button
              onClick={() => setFilter(f.key)}
              style={{
                background: "transparent",
                border: "none",
                color: filter === f.key ? "#c9a961" : "#6a6560",
                padding: "12px 28px",
                fontFamily: "'Special Elite', monospace",
                fontSize: 11,
                letterSpacing: 3,
                cursor: "pointer",
                textTransform: "uppercase",
                position: "relative",
                transition: "color 0.3s",
              }}
            >
              {f.label}
              {filter === f.key && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 4,
                    left: 28,
                    right: 28,
                    height: 1,
                    background: "#c9a961",
                  }}
                />
              )}
            </button>
          </span>
        ))}
      </nav>

      {/* ===== SECTIONS ===== */}
      {sections.map((section) => {
        const sectionRecords = filteredSlugs(section.slugs);
        if (sectionRecords.length === 0) return null;

        return (
          <div key={section.id}>
            {/* Section Divider */}
            <div
              style={{
                maxWidth: 1400,
                margin: "60px auto",
                padding: "0 40px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 32,
                }}
              >
                <span
                  style={{
                    flex: 1,
                    height: 1,
                    background: "#2a2018",
                    maxWidth: 200,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Special Elite', monospace",
                    fontSize: 11,
                    letterSpacing: 6,
                    color: "#c9a961",
                    textTransform: "uppercase",
                  }}
                >
                  {section.numeral}
                </span>
                <span
                  style={{
                    flex: 1,
                    height: 1,
                    background: "#2a2018",
                    maxWidth: 200,
                  }}
                />
              </div>
              <h2
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: 36,
                  fontWeight: 400,
                  fontVariant: "small-caps",
                  letterSpacing: 6,
                  color: "#d4d0c8",
                  marginTop: 24,
                  marginBottom: 8,
                }}
              >
                {section.title}
              </h2>
              <p
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontStyle: "italic",
                  fontSize: 15,
                  color: "#8a8579",
                }}
              >
                {section.sub}
              </p>
            </div>

            {/* Gallery Grid */}
            <div
              style={{
                maxWidth: 1400,
                margin: "0 auto",
                padding: "0 40px 80px",
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "64px 48px",
              }}
            >
              {sectionRecords.map((slug) => {
                const record = records.find((r) => r.slug === slug);
                if (!record || !record.image) return null;

                return (
                  <RecordCard
                    key={record.slug}
                    record={record}
                    onClick={() => openLightbox(record)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}

      {/* ===== FOOTER ===== */}
      <footer
        style={{
          marginTop: 80,
          padding: "60px 40px 40px",
          textAlign: "center",
          borderTop: "1px solid #2a2018",
          fontFamily: "'Special Elite', monospace",
          fontSize: 10,
          letterSpacing: 3,
          color: "#6a6560",
        }}
      >
        <div style={{ color: "#8a7a5a", marginBottom: 12 }}>
          — THE RECORD · CONTEMPT UNIVERSE —
        </div>
        <div>CURATED FROM SOURCES BOTH OFFICIAL AND OTHERWISE</div>
      </footer>

      {/* ===== LIGHTBOX ===== */}
      {lightbox && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.96)",
            zIndex: 1000,
            overflowY: "auto",
            padding: "60px 40px",
            animation: "fadeIn 0.4s ease",
          }}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: "fixed",
              top: 30,
              right: 40,
              background: "transparent",
              border: "1px solid #c9a961",
              color: "#c9a961",
              width: 48,
              height: 48,
              fontFamily: "'EB Garamond', serif",
              fontSize: 22,
              cursor: "pointer",
              zIndex: 1010,
            }}
          >
            ×
          </button>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <img
              src={getSrc(lightbox.image!)}
              srcSet={getSrcSet(lightbox.image!)}
              sizes="(max-width: 900px) 100vw, 1200px"
              alt={lightbox.title}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                marginBottom: 60,
                boxShadow: "0 16px 60px rgba(0,0,0,0.8)",
              }}
            />
            <div style={{ maxWidth: 760, margin: "0 auto", color: "#d4d0c8" }}>
              <div
                style={{
                  fontFamily: "'Special Elite', monospace",
                  fontSize: 11,
                  letterSpacing: 4,
                  color: "#c9a961",
                  marginBottom: 20,
                  textTransform: "uppercase",
                }}
              >
                {lightbox.institution} · {lightbox.displayDate}
              </div>
              <h2
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: 56,
                  fontWeight: 500,
                  lineHeight: 1.1,
                  marginBottom: 16,
                  color: "#f4f0e6",
                  fontVariant: "small-caps",
                  letterSpacing: 2,
                }}
              >
                {lightbox.title}
              </h2>
              {lightbox.subtitle && (
                <div
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontStyle: "italic",
                    fontSize: 22,
                    color: "#a8a39a",
                    marginBottom: 32,
                    lineHeight: 1.4,
                  }}
                >
                  {lightbox.subtitle}
                </div>
              )}
              <div
                style={{
                  width: 60,
                  height: 1,
                  background: "#c9a961",
                  marginBottom: 32,
                }}
              />
              <div
                style={{
                  fontSize: 18,
                  lineHeight: 1.85,
                  color: "#c8c4b8",
                  marginBottom: 40,
                }}
              >
                <p>{lightbox.excerpt}</p>
              </div>
              {lightbox.provenance && (
                <div
                  style={{
                    fontFamily: "'Special Elite', monospace",
                    fontSize: 11,
                    letterSpacing: 2,
                    color: "#6a6560",
                    borderTop: "1px solid #2a2018",
                    paddingTop: 28,
                    lineHeight: 1.8,
                    textTransform: "uppercase",
                    whiteSpace: "pre-line",
                  }}
                >
                  {lightbox.provenance}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 900px) {
          header h1 { font-size: 56px !important; letter-spacing: 6px !important; }
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function RecordCard({
  record,
  onClick,
}: {
  record: RecordEntry;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        cursor: "pointer",
        transition: "transform 0.5s ease",
        transform: hovered ? "translateY(-6px)" : "none",
        gridColumn: record.featured ? "1 / -1" : undefined,
      }}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#000",
          boxShadow: hovered
            ? "0 16px 50px rgba(0,0,0,0.7), 0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,169,97,0.2)"
            : "0 8px 30px rgba(0,0,0,0.6), 0 16px 60px rgba(0,0,0,0.4)",
          transition: "box-shadow 0.5s ease",
        }}
      >
        {record.collection && (
          <span
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              background: "rgba(13,10,8,0.85)",
              backdropFilter: "blur(4px)",
              color: "#a8a39a",
              padding: "8px 14px",
              fontFamily: "'Special Elite', monospace",
              fontSize: 9,
              letterSpacing: 2,
              textTransform: "uppercase",
              zIndex: 2,
            }}
          >
            {collectionLabels[record.collection] || record.collection}
          </span>
        )}
        {record.recordNumber && (
          <span
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "rgba(13,10,8,0.85)",
              backdropFilter: "blur(4px)",
              color: "#c9a961",
              padding: "8px 14px",
              fontFamily: "'Special Elite', monospace",
              fontSize: 10,
              letterSpacing: 3,
              border: "1px solid rgba(201,169,97,0.3)",
              zIndex: 2,
            }}
          >
            RECORD No. {record.recordNumber}
          </span>
        )}
        <img
          src={getSrc(record.image!)}
          srcSet={getSrcSet(record.image!)}
          sizes={
            record.featured
              ? "(max-width: 900px) 100vw, 1400px"
              : "(max-width: 900px) 100vw, 700px"
          }
          alt={record.title}
          loading="lazy"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            aspectRatio: "3/2",
            objectFit: "cover",
          }}
        />
      </div>
      <div style={{ padding: "28px 4px 4px" }}>
        <div
          style={{
            fontFamily: "'Special Elite', monospace",
            fontSize: 10,
            letterSpacing: 3,
            color: "#8a7a5a",
            marginBottom: 12,
            textTransform: "uppercase",
          }}
        >
          {record.institution} · {record.displayDate}
        </div>
        <h2
          style={{
            fontFamily: "'EB Garamond', serif",
            fontSize: record.featured ? 42 : 30,
            fontWeight: 500,
            lineHeight: 1.15,
            color: "#e8e4d8",
            marginBottom: 8,
            letterSpacing: 0.5,
          }}
        >
          {record.title}
        </h2>
        {record.subtitle && (
          <div
            style={{
              fontFamily: "'EB Garamond', serif",
              fontStyle: "italic",
              fontSize: record.featured ? 20 : 17,
              color: "#a8a39a",
              marginBottom: 18,
              lineHeight: 1.4,
            }}
          >
            {record.subtitle}
          </div>
        )}
        <div
          style={{
            width: 36,
            height: 1,
            background: "#c9a961",
            marginBottom: 18,
            opacity: 0.5,
          }}
        />
        <p
          style={{
            fontSize: record.featured ? 16 : 15,
            lineHeight: 1.7,
            color: "#b8b4a8",
            marginBottom: 20,
            maxWidth: record.featured ? 760 : 580,
          }}
        >
          {record.excerpt}
        </p>
        {record.provenance && (
          <div
            style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: 9,
              lineHeight: 1.7,
              color: "#6a6560",
              letterSpacing: 1,
              borderTop: "1px dotted #2a2018",
              paddingTop: 14,
              textTransform: "uppercase",
              whiteSpace: "pre-line",
            }}
          >
            {record.provenance}
          </div>
        )}
      </div>
    </article>
  );
}
