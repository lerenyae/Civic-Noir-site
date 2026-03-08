import { RecordEntry } from "@/lib/records";
import { FilingRenderer } from "./FilingRenderer";
import { ArticleRenderer } from "./ArticleRenderer";
import { BlotterRenderer } from "./BlotterRenderer";
import { MemoRenderer } from "./MemoRenderer";
import { CommendationRenderer } from "./CommendationRenderer";

export function RecordRenderer({ record }: { record: RecordEntry }) {
  switch (record.type) {
    case "filing":
      return <FilingRenderer record={record} />;
    case "article":
      return <ArticleRenderer record={record} />;
    case "blotter":
      return <BlotterRenderer record={record} />;
    case "memo":
      return <MemoRenderer record={record} />;
    case "commendation":
      return <CommendationRenderer record={record} />;
    default:
      return (
        <div style={{ minHeight: "100vh", background: "#0A0A0A", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ color: "rgba(240,235,227,0.3)", fontFamily: "monospace" }}>Document type not recognized.</p>
        </div>
      );
  }
}
