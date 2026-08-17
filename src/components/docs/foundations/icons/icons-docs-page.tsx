"use client";

import {
  buttonWithIconSnippet,
  iconButtonSnippet,
  iconSizesCssSnippet,
  iconsLibrarySnippet,
  inputWithIconSnippet,
  navigationItemWithIconSnippet,
} from "@/components/docs/foundations/icons/icons-code-snippets";
import {
  IconsAccessibilityPreview,
  IconsColorPreview,
  IconsDeveloperPreview,
  IconsDoDontPreview,
  IconsLibraryPreview,
  IconsOverviewPreview,
  IconsSizesPreview,
  IconsUsagePreview,
} from "@/components/docs/foundations/icons/icons-preview-blocks";
import { DocsFoundationPage } from "@/components/docs/foundations/docs-foundation-page";
import { DocsCodeBlock } from "@/components/docs/primitives/docs-code-block";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsSection } from "@/components/docs/primitives/docs-section";
import { iconDocumentation } from "@medmo/tokens/tooling";

export function IconsDocsPage() {
  return (
    <DocsFoundationPage>
            <DocsSection
              id="overview"
              title="Overview"
              description="Icons support comprehension in clinical workflows. They reinforce labels and actions — they never replace critical text or stand alone without an accessible name."
            >
              <DocsPreview code={iconsLibrarySnippet}>
                <IconsOverviewPreview />
              </DocsPreview>
              <ul className="mt-[var(--space-stack-md)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
                <li>Use icons to speed scanning in navigation, actions, and status rows.</li>
                <li>Pair icons with visible text in buttons, alerts, and forms.</li>
                <li>Reserve icon-only controls for well-known actions and always provide an accessible name.</li>
              </ul>
            </DocsSection>

            <DocsSection
              id="icon-library"
              title="Icon Library"
              description={
                <>
                  Medmo uses {iconDocumentation.library.name} through{" "}
                  <DocsInlineCode>{iconDocumentation.library.package}</DocsInlineCode> as the official icon library.
                  Do not mix Heroicons, Font Awesome, or custom SVG sets in product UI.
                </>
              }
            >
              <DocsPreview code={iconsLibrarySnippet}>
                <IconsLibraryPreview />
              </DocsPreview>
              <div className="mt-[var(--space-stack-md)] rounded-[var(--radius-md)] border border-[var(--docs-chrome-border)] bg-[var(--docs-code-bg)] p-[var(--space-inline-md)]">
                <p className="text-[length:var(--text-caption-size)] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                  React import
                </p>
                <pre className="mt-[var(--space-stack-xs)] overflow-x-auto font-mono text-[0.875rem] text-[var(--color-text-primary)]">
                  {`import { SearchIcon, UsersIcon } from "lucide-react";`}
                </pre>
              </div>
            </DocsSection>

            <DocsSection
              id="sizes"
              title="Sizes"
              description="Use semantic icon tokens — never hardcode Tailwind size utilities in components."
            >
              <DocsPreview code={iconSizesCssSnippet}>
                <IconsSizesPreview />
              </DocsPreview>
            </DocsSection>

            <DocsSection
              id="usage-guidelines"
              title="Usage Guidelines"
              description="Apply consistent icon size and spacing tokens across buttons, inputs, navigation, alerts, and cards."
            >
              <IconsUsagePreview />
              <div className="mt-[var(--space-stack-md)] overflow-x-auto rounded-[var(--radius-md)] border border-[var(--docs-chrome-border)]">
                <table className="w-full min-w-[28rem] text-left text-[length:var(--text-body-small-size)]">
                  <thead className="border-b border-[var(--docs-chrome-border)] bg-[var(--color-surface-muted)]">
                    <tr>
                      <th className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)] font-medium">Context</th>
                      <th className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)] font-medium">Size</th>
                      <th className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)] font-medium">Gap</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--color-text-secondary)]">
                    {Object.entries(iconDocumentation.contexts).map(
                      ([role, context], index, contexts) => (
                        <tr
                          key={role}
                          className={
                            index < contexts.length - 1
                              ? "border-b border-[var(--docs-chrome-border)]"
                              : undefined
                          }
                        >
                          <td className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)]">
                            {context.purpose}
                          </td>
                          <td className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)]">
                            <DocsInlineCode>--icon-{context.size}</DocsInlineCode>
                          </td>
                          <td className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)]">
                            {context.gapSpacing === "none" ? (
                              "—"
                            ) : (
                              <DocsInlineCode>--{context.gapSpacing}</DocsInlineCode>
                            )}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </DocsSection>

            <DocsSection
              id="color-usage"
              title="Color Usage"
              description="Icons inherit color via currentColor from semantic text or feedback tokens. Never hardcode hex values on SVG paths."
            >
              <IconsColorPreview />
            </DocsSection>

            <DocsSection
              id="accessibility"
              title="Accessibility"
              description="Icon-only controls require an accessible name. Decorative icons paired with text should be hidden from assistive technology."
            >
              <IconsAccessibilityPreview />
            </DocsSection>

            <DocsSection
              id="do-dont"
              title="Do & Don't"
              description="Keep iconography functional, consistent, and clinically clear."
            >
              <IconsDoDontPreview />
            </DocsSection>

            <DocsSection
              id="developer-examples"
              title="Developer Examples"
              description="Common React patterns for Medmo components."
            >
              <IconsDeveloperPreview />
              <div className="mt-[var(--space-stack-md)] flex flex-col gap-[var(--space-stack-md)]">
                <div>
                  <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
                    Icon button
                  </h3>
                  <DocsCodeBlock lines={iconButtonSnippet} />
                </div>
                <div>
                  <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
                    Button with icon
                  </h3>
                  <DocsCodeBlock lines={buttonWithIconSnippet} />
                </div>
                <div>
                  <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
                    Input with icon
                  </h3>
                  <DocsCodeBlock lines={inputWithIconSnippet} />
                </div>
                <div>
                  <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
                    Navigation item with icon
                  </h3>
                  <DocsCodeBlock lines={navigationItemWithIconSnippet} />
                </div>
              </div>
            </DocsSection>

    </DocsFoundationPage>
  );
}
