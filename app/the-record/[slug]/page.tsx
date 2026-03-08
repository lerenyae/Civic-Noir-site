import { notFound } from "next/navigation";
import Link from "next/link";
import { getRecord, records } from "@/lib/records";
import { RecordRenderer } from "@/components/records/RecordRenderer";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return records.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props) {
  const record = getRecord(params.slug);
  if (!record) return { title: "Not Found" };
  return {
    title: `${record.title} — The Record`,
    description: record.excerpt,
  };
}

export default function RecordPage({ params }: Props) {
  const record = getRecord(params.slug);
  if (!record) notFound();

  return (
    <>
      {/* Back nav — floats above all renderers */}
      <div
        style={{
          position: "fixed",
          top: 24,
          left: 24,
          zIndex: 100,
        }}
      >
        <Link
          href="/the-record"
          style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: 10,
            fontWeight: 200,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(240,235,227,0.3)",
            textDecoration: "none",
            padding: "8px 14px",
            border: "1px solid rgba(240,235,227,0.08)",
            background: "rgba(10,10,10,0.8)",
            backdropFilter: "blur(8px)",
            transition: "color 0.2s",
          }}
        >
          ← The Record
        </Link>
      </div>

      <RecordRenderer record={record} />
    </>
  );
}
