import Link from "next/link";

import { getPatternEntry } from "@/components/docs/config/patterns-registry";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const listClassName =
  "list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]";

const orderedListClassName =
  "list-decimal space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]";

const linkClassName =
  "font-medium text-[var(--color-text-link)] underline underline-offset-[3px] hover:text-[var(--color-text-link-hover)]";

export function DocsPatternContent({ href }: { href: string }) {
  const entry = getPatternEntry(href);

  if (!entry || entry.category === "Overview") {
    return null;
  }

  return (
    <>
      <DocsSection id="purpose" title="Purpose">
        <p className="text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)] text-[var(--color-text-secondary)]">
          {entry.purpose}
        </p>
      </DocsSection>

      <DocsSection id="when-to-use" title="When to use">
        <ul className={listClassName}>
          {entry.whenToUse.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </DocsSection>

      <DocsSection id="structure" title="Structure">
        <ol className={orderedListClassName}>
          {entry.structure.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </DocsSection>

      <DocsSection id="components-used" title="Components used">
        <ul className={listClassName}>
          {entry.componentsUsed.map((component) => (
            <li key={component.name}>
              {component.href ? (
                <Link href={component.href} className={linkClassName}>
                  {component.name}
                </Link>
              ) : (
                <DocsInlineCode>{component.name}</DocsInlineCode>
              )}
            </li>
          ))}
        </ul>
      </DocsSection>

      {entry.variations.length > 0 ? (
        <DocsSection id="variations" title="Variations">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)]">
                  <th className="py-[var(--space-stack-xs)] pr-[var(--space-inline-md)] font-semibold">
                    Variation
                  </th>
                  <th className="py-[var(--space-stack-xs)] pr-[var(--space-inline-md)] font-semibold">
                    What changes
                  </th>
                  <th className="py-[var(--space-stack-xs)] font-semibold">
                    Screens
                  </th>
                </tr>
              </thead>
              <tbody>
                {entry.variations.map((variation) => (
                  <tr
                    key={variation.name}
                    className="border-b border-[var(--color-border-subtle)] text-[var(--color-text-secondary)]"
                  >
                    <td className="py-[var(--space-stack-sm)] pr-[var(--space-inline-md)] font-medium text-[var(--color-text-primary)]">
                      {variation.name}
                    </td>
                    <td className="py-[var(--space-stack-sm)] pr-[var(--space-inline-md)]">
                      {variation.description}
                    </td>
                    <td className="py-[var(--space-stack-sm)]">
                      {variation.screens?.join(", ") ?? "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DocsSection>
      ) : null}

      <DocsSection id="accessibility" title="Accessibility">
        <ul className={listClassName}>
          {entry.accessibility.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </DocsSection>

      <DocsSection id="product-examples" title="Real product examples">
        <ul className={listClassName}>
          {entry.productExamples.map((example) => (
            <li key={example.href + example.title}>
              <span className="text-[var(--color-text-muted)]">{example.product}</span>
              {" — "}
              <Link href={example.href} className={linkClassName}>
                {example.title}
              </Link>
            </li>
          ))}
        </ul>
        {entry.relatedPatterns.length > 0 ? (
          <p className="mt-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
            Related patterns:{" "}
            {entry.relatedPatterns.map((href, index) => {
              const related = getPatternEntry(href);
              if (!related) {
                return null;
              }

              return (
                <span key={href}>
                  {index > 0 ? ", " : null}
                  <Link href={related.href} className={linkClassName}>
                    {related.title}
                  </Link>
                </span>
              );
            })}
          </p>
        ) : null}
      </DocsSection>
    </>
  );
}
