import { TextLink } from "@/components/text-link";
import { DocsRealScreenExampleLink } from "@/components/docs/primitives/docs-real-screen-example-link";

export function TextLinkRealScreenPreview() {
  return (
    <div>
      <div className="flex flex-wrap gap-[var(--space-inline-md)]">
        <TextLink href="#">SRID-1001</TextLink>
        <TextLink href="#">Elena Morales</TextLink>
      </div>
      <DocsRealScreenExampleLink />
    </div>
  );
}
