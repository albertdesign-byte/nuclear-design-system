import { TextLink } from "@/components/text-link";
import { DocsRealScreenExampleLink } from "@/components/docs/primitives/docs-real-screen-example-link";

export function TextLinkRealScreenPreview() {
  return (
    <div>
      <div className="flex flex-col gap-[var(--space-stack-sm)]">
        <TextLink href="#">SRID-1001</TextLink>
        <TextLink href="#">Elena Morales</TextLink>
      </div>
      <DocsRealScreenExampleLink />
    </div>
  );
}
