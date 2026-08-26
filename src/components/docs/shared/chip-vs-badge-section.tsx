"use client";

import { Badge } from "@/components/badge";
import { Chip } from "@/components/chip";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

export function ChipVsBadgeSection() {
  return (
    <DocsSection
      id="chip-vs-badge"
      title="When to use Chip vs Badge"
      description="Badge communicates status or a count. Chip is a selected filter or value, often interactive or dismissible."
    >
      <div className="flex flex-col gap-[var(--space-stack-md)]">
        <div className="rounded-[var(--radius-md)] border border-[var(--docs-chrome-border)] p-[var(--space-inline-md)]">
          <h4 className="font-medium text-[var(--color-text-primary)]">Badge</h4>
          <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
            Contextual information that does not require interaction.
          </p>
          <div className="mt-[var(--space-stack-sm)] flex flex-col items-start gap-[var(--space-stack-sm)]">
            <Badge variant="secondary">Stable</Badge>
            <Badge>3</Badge>
            <Badge variant="destructive">Critical</Badge>
          </div>
          <ul className="mt-[var(--space-stack-sm)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
            <li>Record status (Stable, Under review, Critical).</li>
            <li>Count or quantity (pending results, items in a filter).</li>
            <li>Read-only metadata in tables, cards, and headers.</li>
            <li>It is not dismissed or selected as a filter.</li>
          </ul>
        </div>
        <div className="rounded-[var(--radius-md)] border border-[var(--docs-chrome-border)] p-[var(--space-inline-md)]">
          <h4 className="font-medium text-[var(--color-text-primary)]">Chip</h4>
          <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
            A chosen value or filter the user can change.
          </p>
          <div className="mt-[var(--space-stack-sm)] flex flex-col items-start gap-[var(--space-stack-sm)]">
            <Chip onRemove={() => {}}>MRI Brain</Chip>
            <Chip variant="outline">Prior Auth</Chip>
            <Chip variant="muted">Stat</Chip>
          </div>
          <ul className="mt-[var(--space-stack-sm)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
            <li>Active filters (modality, site, order status).</li>
            <li>Multi-value field selections.</li>
            <li>
              Dismissible items with <DocsInlineCode>onRemove</DocsInlineCode>{" "}
              when the user must be able to remove them.
            </li>
            <li>User interaction: choose, remove, or represent a selection.</li>
          </ul>
        </div>
      </div>
      <p className="mt-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
        Quick rule: if it only informs and is not interactive, use{" "}
        <DocsInlineCode>Badge</DocsInlineCode>. If the user chose it or can
        remove it, use <DocsInlineCode>Chip</DocsInlineCode>.
      </p>
    </DocsSection>
  );
}
