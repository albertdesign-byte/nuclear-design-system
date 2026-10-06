"use client";

import {
  breadcrumbDisabledSnippet,
  breadcrumbHomeIconSnippet,
  breadcrumbInstallationUiSnippet,
  breadcrumbLongSnippet,
  breadcrumbMultipleSnippet,
  breadcrumbRealScreenSnippet,
  breadcrumbUsageSnippet,
} from "@/components/docs/components/breadcrumb/breadcrumb-code-snippets";
import {
  BreadcrumbDefaultPreview,
  BreadcrumbDisabledPreview,
  BreadcrumbHomeIconPreview,
  BreadcrumbLongPreview,
  BreadcrumbMultiplePreview,
} from "@/components/docs/components/breadcrumb/breadcrumb-preview-blocks";
import { BreadcrumbRealScreenPreview } from "@/components/docs/components/breadcrumb/breadcrumb-real-screen-preview";
import { breadcrumbTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const breadcrumbApiRows = [
  { prop: "items", type: "BreadcrumbItem[]", defaultValue: "required" },
  { prop: "showHomeIcon", type: "boolean", defaultValue: "false" },
  { prop: '"aria-label"', type: "string", defaultValue: '"Breadcrumb"' },
  { prop: "className", type: "string", defaultValue: "undefined" },
];

const breadcrumbItemApiRows = [
  { prop: "label", type: "string", defaultValue: "required" },
  { prop: "href", type: "string", defaultValue: "undefined" },
  { prop: "current", type: "boolean", defaultValue: "last item" },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
];

export function BreadcrumbDocsPage() {
  return (
    <DocsComponentPage
      title="Breadcrumb"
      description="Hierarchical location trail for nested product screens. Ancestor items are links; the current page is text."
      tocItems={breadcrumbTocItems}
      realScreen={{
        preview: <BreadcrumbRealScreenPreview />,
        code: breadcrumbRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={breadcrumbInstallationUiSnippet}>
              <BreadcrumbDefaultPreview />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Pass an <DocsInlineCode>items</DocsInlineCode> array. Items with{" "}
                <DocsInlineCode>href</DocsInlineCode> are links. The last item is
                the current page unless another item sets{" "}
                <DocsInlineCode>current</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={breadcrumbUsageSnippet}>
              <BreadcrumbDefaultPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="default"
            title="Default"
            description="Two or more levels with a chevron separator. The current page is not a link."
          >
            <DocsPreview code={breadcrumbUsageSnippet}>
              <BreadcrumbDefaultPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="multiple-levels"
            title="Multiple levels"
            description="Use as many levels as the product hierarchy requires. Extra items wrap."
          >
            <DocsPreview code={breadcrumbMultipleSnippet}>
              <BreadcrumbMultiplePreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="with-home-icon"
            title="With Home icon"
            description={
              <>
                Set <DocsInlineCode>showHomeIcon</DocsInlineCode> to pair the
                first item with the Lucide house icon. The label stays visible.
              </>
            }
          >
            <DocsPreview code={breadcrumbHomeIconSnippet}>
              <BreadcrumbHomeIconPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="long-trail"
            title="Long trail"
            description="Long trails wrap onto the next line. Individual labels truncate when they cannot fit."
          >
            <DocsPreview code={breadcrumbLongSnippet}>
              <BreadcrumbLongPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="disabled"
            title="Disabled"
            description="Mark an ancestor disabled when that location cannot be opened. The current page stays readable."
          >
            <DocsPreview code={breadcrumbDisabledSnippet}>
              <BreadcrumbDisabledPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="guidelines"
            title="Guidelines"
            description="Breadcrumb shows where the user is. Text Link is for inline navigation in copy and tables."
          >
            <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li>
                Use Breadcrumb on nested records (patient → study → report), not
                as primary navigation.
              </li>
              <li>
                Keep labels short. Prefer the entity name over a full sentence.
              </li>
              <li>
                Do not replace the page heading with the current breadcrumb
                item. Show both.
              </li>
              <li>
                For a single-level screen, omit Breadcrumb. One item is not a
                trail.
              </li>
            </ul>
          </DocsSection>

          <DocsSection
            id="accessibility"
            title="Accessibility"
            description="Semantic trail that keyboard and screen reader users can follow."
          >
            <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li>
                Renders <DocsInlineCode>nav</DocsInlineCode> with{" "}
                <DocsInlineCode>aria-label=&quot;Breadcrumb&quot;</DocsInlineCode>{" "}
                and an ordered list of levels.
              </li>
              <li>
                The current page uses{" "}
                <DocsInlineCode>aria-current=&quot;page&quot;</DocsInlineCode>{" "}
                and is not a link.
              </li>
              <li>
                Chevron separators are{" "}
                <DocsInlineCode>aria-hidden</DocsInlineCode> so they are not
                announced as content.
              </li>
              <li>
                Tab moves between ancestor links. Focus rings use{" "}
                <DocsInlineCode>--focus-ring-width</DocsInlineCode> and{" "}
                <DocsInlineCode>--color-focus-ring</DocsInlineCode>.
              </li>
            </ul>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium">
              Breadcrumb
            </h3>
            <DocsApiTable rows={breadcrumbApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-lg)] text-[length:var(--text-title-size)] font-medium">
              BreadcrumbItem
            </h3>
            <DocsApiTable rows={breadcrumbItemApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
