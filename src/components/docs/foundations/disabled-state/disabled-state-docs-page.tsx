"use client";

import {
  ariaDisabledLinkSnippet,
  ariaDisabledWithoutGuardSnippet,
  dataDisabledMenuItemSnippet,
  disabledButtonSnippet,
  disabledInputSnippet,
  disabledStylesImportSnippet,
  disabledTextLinkSnippet,
  nativeDisabledButtonSnippet,
} from "@/components/docs/foundations/disabled-state/disabled-state-code-snippets";
import {
  AriaDisabledLinkPreview,
  AriaDisabledWithoutGuardPreview,
  DataDisabledMenuItemPreview,
  DisabledDoPreview,
  DisabledDontPreview,
  DisabledHideVsDisablePreview,
  DisabledOverviewPreview,
  DisabledTextLinkPreview,
  NativeDisabledButtonPreview,
} from "@/components/docs/foundations/disabled-state/disabled-state-preview-blocks";
import { DocsFoundationPage } from "@/components/docs/foundations/docs-foundation-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsSection } from "@/components/docs/primitives/docs-section";

export function DisabledStateDocsPage() {
  return (
    <DocsFoundationPage>
            <DocsSection
              id="overview"
              title="Overview"
              description="Disabled semantics vary by platform primitive. Native disabled, aria-disabled, and data-disabled are not interchangeable and carry different interaction responsibilities."
            >
              <DocsPreview code={disabledStylesImportSnippet}>
                <DisabledOverviewPreview />
              </DocsPreview>
              <ul className="mt-[var(--space-stack-md)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
                <li>
                  Prefer native <DocsInlineCode>disabled</DocsInlineCode> when the
                  HTML element supports it.
                </li>
                <li>
                  Apply <DocsInlineCode>--color-disabled-background</DocsInlineCode>,{" "}
                  <DocsInlineCode>--color-disabled-border</DocsInlineCode>, and{" "}
                  <DocsInlineCode>--color-disabled-text</DocsInlineCode> — never{" "}
                  <DocsInlineCode>opacity-50</DocsInlineCode>.
                </li>
                <li>
                  A state attribute does not automatically guarantee activation
                  prevention; follow the behavior contract for the selected mechanism.
                </li>
              </ul>
            </DocsSection>

            <DocsSection
              id="native-disabled"
              title="Native disabled"
              description="Use the HTML disabled attribute for controls that support it, including buttons, inputs, selects, and textareas."
            >
              <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
                <li><strong>Keyboard:</strong> browsers suppress Enter and Space activation.</li>
                <li><strong>Pointer:</strong> click activation is suppressed by the browser.</li>
                <li><strong>Focus:</strong> native disabled controls are removed from sequential tab order.</li>
                <li><strong>Screen readers:</strong> announce the control as disabled or unavailable.</li>
                <li><strong>Activation prevention:</strong> provided by the browser; application event guards are not normally required.</li>
                <li><strong>Recommended use:</strong> unavailable form controls and buttons whose prerequisites are visible and achievable.</li>
              </ul>
              <DocsPreview code={nativeDisabledButtonSnippet} className="mt-[var(--space-stack-md)]">
                <NativeDisabledButtonPreview />
              </DocsPreview>
            </DocsSection>

            <DocsSection
              id="aria-disabled"
              title="aria-disabled"
              description="Use aria-disabled when an element must remain discoverable or focusable while being exposed as unavailable to assistive technology."
            >
              <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
                <li><strong>Keyboard:</strong> the element remains reachable and Enter or Space can still activate it unless guarded.</li>
                <li><strong>Pointer:</strong> clicks still fire unless the handler prevents activation.</li>
                <li><strong>Focus:</strong> remains in the tab order when the underlying element is normally focusable.</li>
                <li><strong>Screen readers:</strong> announce the element as disabled while preserving its role.</li>
                <li><strong>Activation prevention:</strong> the application must guard click and keyboard activation.</li>
                <li><strong>Recommended use:</strong> links or custom controls that must remain discoverable, especially when focus continuity matters.</li>
              </ul>
              <DocsPreview code={ariaDisabledLinkSnippet} className="mt-[var(--space-stack-md)]">
                <AriaDisabledLinkPreview />
              </DocsPreview>
              <DocsPreview code={ariaDisabledWithoutGuardSnippet} className="mt-[var(--space-stack-md)]">
                <AriaDisabledWithoutGuardPreview />
              </DocsPreview>
              <p className="mt-[var(--space-stack-sm)] text-[length:var(--text-body-small-size)] text-[var(--color-error-foreground)]">
                Anti-pattern: <DocsInlineCode>aria-disabled</DocsInlineCode> alone
                changes only the accessibility state; it does not prevent navigation.
              </p>
            </DocsSection>

            <DocsSection
              id="data-disabled"
              title="data-disabled"
              description="Use data-disabled as a component-state hook emitted by libraries such as Base UI. It styles and identifies state, but has no native HTML semantics by itself."
            >
              <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
                <li><strong>Keyboard:</strong> behavior depends on the owning component library; Base UI disabled menu items skip activation.</li>
                <li><strong>Pointer:</strong> the component implementation must suppress selection and click behavior.</li>
                <li><strong>Focus:</strong> composite widgets generally skip disabled items during arrow-key navigation.</li>
                <li><strong>Screen readers:</strong> data-disabled alone is not announced; the component must also expose the appropriate accessible state.</li>
                <li><strong>Activation prevention:</strong> belongs to the component primitive, not the CSS selector.</li>
                <li><strong>Recommended use:</strong> menu, command, select, and composite-widget internals where the library emits the attribute.</li>
              </ul>
              <DocsPreview code={dataDisabledMenuItemSnippet} className="mt-[var(--space-stack-md)]">
                <DataDisabledMenuItemPreview />
              </DocsPreview>
            </DocsSection>

            <DocsSection
              id="when-to-hide"
              title="When to hide instead"
              description="If the user cannot act on a control in the current context and there is no clear path to enabling it, remove it rather than showing a permanently disabled affordance."
            >
              <DocsPreview code={disabledInputSnippet}>
                <DisabledHideVsDisablePreview />
              </DocsPreview>
              <ul className="mt-[var(--space-stack-md)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
                <li>Permission-gated actions the user will never unlock in this session.</li>
                <li>Features turned off by account type or environment.</li>
                <li>Empty states where no action is possible yet — show guidance instead of disabled buttons.</li>
              </ul>
            </DocsSection>

            <DocsSection
              id="ux-practices"
              title="UX best practices"
              description="Disabled states should reduce emphasis without looking like an error or leaving users guessing."
            >
              <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
                <li>Pair disabled primary actions with helper text explaining what is missing.</li>
                <li>Do not use disabled styling for validation errors — use invalid states and error messages.</li>
                <li>
                  Prefer native <DocsInlineCode>disabled</DocsInlineCode>. Use{" "}
                  <DocsInlineCode>aria-disabled</DocsInlineCode> only when the
                  control must remain discoverable and activation is explicitly guarded.
                </li>
                <li>Keep sufficient contrast — disabled text must remain readable, not washed out.</li>
                <li>Avoid long lists of disabled menu items; hide unavailable paths when possible.</li>
              </ul>
              <DocsPreview code={disabledInputSnippet} className="mt-[var(--space-stack-md)]">
                <DisabledDontPreview />
              </DocsPreview>
            </DocsSection>

            <DocsSection
              id="component-coverage"
              title="Component coverage"
              description="These shared classes apply across the library. Import from one module — do not hand-roll per component."
            >
              <div className="overflow-x-auto rounded-[var(--radius-md)] border border-[var(--docs-chrome-border)]">
                <table className="w-full min-w-[32rem] text-left text-[length:var(--text-body-small-size)]">
                  <thead className="border-b border-[var(--docs-chrome-border)] bg-[var(--docs-code-bg)]">
                    <tr>
                      <th className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)] font-medium">Class</th>
                      <th className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)] font-medium">Used by</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--color-text-secondary)]">
                    <tr className="border-b border-[var(--docs-chrome-border)]">
                      <td className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)] font-mono text-[0.8125rem]">
                        controlDisabledClassName
                      </td>
                      <td className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)]">
                        Button, Input, Select, Checkbox, Radio, Textarea
                      </td>
                    </tr>
                    <tr className="border-b border-[var(--docs-chrome-border)]">
                      <td className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)] font-mono text-[0.8125rem]">
                        toggleDisabledClassName
                      </td>
                      <td className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)]">Switch</td>
                    </tr>
                    <tr className="border-b border-[var(--docs-chrome-border)]">
                      <td className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)] font-mono text-[0.8125rem]">
                        menuItemDisabledClassName
                      </td>
                      <td className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)]">
                        Dropdown Menu, Select items
                      </td>
                    </tr>
                    <tr className="border-b border-[var(--docs-chrome-border)]">
                      <td className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)] font-mono text-[0.8125rem]">
                        textLinkDisabledClassName
                      </td>
                      <td className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)]">Text Link</td>
                    </tr>
                    <tr>
                      <td className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)] font-mono text-[0.8125rem]">
                        pickerTriggerDisabledClassName
                      </td>
                      <td className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)]">Date Picker</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </DocsSection>

            <DocsSection
              id="examples"
              title="Examples"
              description="Correct and incorrect patterns for common clinical UI scenarios."
            >
              <div className="grid gap-[var(--space-stack-md)] lg:grid-cols-2">
                <div className="rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] p-[var(--space-inline-md)]">
                  <p className="text-[length:var(--text-caption-size)] font-medium uppercase tracking-[0.08em] text-[var(--color-success-text)]">
                    Do
                  </p>
                  <DocsPreview code={disabledButtonSnippet} className="mt-[var(--space-stack-sm)]">
                    <DisabledDoPreview />
                  </DocsPreview>
                </div>
                <div className="rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] p-[var(--space-inline-md)]">
                  <p className="text-[length:var(--text-caption-size)] font-medium uppercase tracking-[0.08em] text-[var(--color-error-text)]">
                    Don&apos;t
                  </p>
                  <DocsPreview code={disabledInputSnippet} className="mt-[var(--space-stack-sm)]">
                    <DisabledDontPreview />
                  </DocsPreview>
                </div>
              </div>
              <DocsPreview code={disabledTextLinkSnippet} className="mt-[var(--space-stack-md)]">
                <DisabledTextLinkPreview />
              </DocsPreview>
            </DocsSection>

    </DocsFoundationPage>
  );
}
