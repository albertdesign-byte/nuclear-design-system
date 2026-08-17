import { DocsPatternContent } from "@/components/docs/patterns/docs-pattern-content";
import { DocsPatternPage } from "@/components/docs/patterns/docs-pattern-page";

export function PatternDocsRoute({ href }: { href: string }) {
  return (
    <DocsPatternPage>
      <DocsPatternContent href={href} />
    </DocsPatternPage>
  );
}
