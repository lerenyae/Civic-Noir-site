"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import { records, RecordType } from "@/lib/records";

const typeLabels: Record<RecordType, string> = {
  filing: "Business Filing",
  article: "Press",
  blotter: "Police Record",
  memo: "Internal Memo",
  obituary: "Obituary",
  evidence: "Evidence",
};

const typeColors: Record<RecordType, string> = {
  filing: "rgba(184,160,120,0.5)",
  article: "rgba(180,200,160,0.5)",
  blotter: "rgba(100,200,100,0.4)",
  memo: "rgba(200,150,100,0.5)",
  obituary: "rgba(180,160,200,0.5)",
  evidence: "rgba(200,100,100,0.5)",
};



export default function TheRecordIndex() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A0A0A",
        fontFamily: "Georgia, 'Times New Roman', serif",
        padding: "80px 24px",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Outfit:wght@200;300&family=IBM+Plex+Mono:wght@300;400&display=swap"
        rel="stylesheet"
      />

      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <p
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: 9,
              fontWeight: 200,
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "rgba(184,160,120,0.5)",
              marginBottom: 16,
            }}
          >
            Contempt · In-Universe Archive
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 52,
              fontWeight: 400,
              color: "rgba(240,235,227,0.9)",
              lineHeight: 1.1,
              marginBottom: 20,
              letterSpacing: "0.02em",
            }}
          >
            The Record
          </h1>
          <p
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: 13,
              fontWeight: 200,
              color: "rgba(240,235,227,0.35)",
              lineHeight: 1.7,
              maxWidth: 540,
            }}
          >
            Everything leaves a paper trail. Court filings, police blotters,
            internal memos, press coverage. The city ran on documents. Some of
            them survived.
          </p>
          <div
            style={{
              marginTop: 32,
              height: 1,
              background:
                "linear-gradient(to right, rgba(184,160,120,0.2), transparent)",
            }}
          />
        </div>

        {/* Records grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 2,
          }}
        >
          {records.map((record) => (
            <Link
              key={record.slug}
              href={`/the-record/${record.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  padding: "28px 32px",
                  background: "rgba(255,255,255,0.015)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  cursor: "pointer",
                  transition: "background 0.2s, border-color 0.2s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(184,160,120,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.015)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.04)";
                }}
              >
                {record.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: 2,
                      height: "100%",
                      background: "rgba(184,160,120,0.4)",
                    }}
                  />
                )}

                {/* Type + date */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 14,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: 9,
                      fontWeight: 200,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: typeColors[record.type],
                    }}
                  >
                    {typeLabels[record.type]}
                  </span>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 9,
                      color: "rgba(240,235,227,0.2)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {record.date}
                  </span>
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 18,
                    fontWeight: 400,
                    color: "rgba(240,235,227,0.8)",
                    lineHeight: 1.3,
                    marginBottom: 8,
                  }}
                >
                  {record.title}
                </h2>

                {record.subtitle && (
                  <p
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: 11,
                      fontWeight: 200,
                      color: "rgba(240,235,227,0.3)",
                      marginBottom: 12,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {record.subtitle}
                  </p>
                )}

                {/* Excerpt */}
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 13,
                    fontStyle: "italic",
                    color: "rgba(240,235,227,0.35)",
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  {record.excerpt}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {record.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "Outfit, sans-serif",
                        fontSize: 9,
                        fontWeight: 200,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "rgba(240,235,227,0.2)",
                        padding: "2px 8px",
                        border: "1px solid rgba(240,235,227,0.06)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div style={{ marginTop: 80, textAlign: "center" }}>
          <div
            style={{
              height: 1,
              background:
                "linear-gradient(to right, transparent, rgba(184,160,120,0.15), transparent)",
              marginBottom: 24,
            }}
          />
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 9,
              color: "rgba(240,235,227,0.1)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            All documents are fictional. Any resemblance to actual public
            records is intentional — that&apos;s the point.
          </p>
        </div>
      </div>
    </div>
  );
}
