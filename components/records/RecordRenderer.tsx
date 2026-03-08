import { RecordEntry } from "@/lib/records";
import { FilingRenderer } from "./FilingRenderer";
import { ArticleRenderer } from "./ArticleRenderer";
import { BlotterRenderer } from "./BlotterRenderer";
import { MemoRenderer } from "./MemoRenderer";
import { ObituaryRenderer } from "./ObituaryRenderer";

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
    case "obituary":
      return <ObituaryRenderer record={record} />;
    default:
      return <FilingRenderer record={record} />;
  }
}
