"use client";

import {
  dropzoneConstraintsSnippet,
  dropzoneDraggingSnippet,
  dropzoneEmptySnippet,
  dropzoneErrorSnippet,
  dropzoneInstallationUiSnippet,
  dropzoneLoadingSnippet,
  dropzoneRealScreenSnippet,
  dropzoneSuccessSnippet,
  dropzoneUsageSnippet,
} from "@/components/docs/components/dropzone/dropzone-code-snippets";
import {
  DropzoneConstraintsPreview,
  DropzoneDraggingPreview,
  DropzoneEmptyPreview,
  DropzoneErrorPreview,
  DropzoneLoadingPreview,
  DropzoneSuccessPreview,
} from "@/components/docs/components/dropzone/dropzone-preview-blocks";
import { DropzoneRealScreenPreview } from "@/components/docs/components/dropzone/dropzone-real-screen-preview";
import { dropzoneTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const dropzoneApiRows = [
  { prop: "label", type: "string", defaultValue: "—" },
  { prop: "file", type: "File | null", defaultValue: "null" },
  { prop: "onFileChange", type: "(file) => void", defaultValue: "—" },
  { prop: "accept", type: "string", defaultValue: "undefined" },
  { prop: "maxSize", type: "number (bytes)", defaultValue: "undefined" },
  { prop: "error", type: "string", defaultValue: "undefined" },
  { prop: "loading", type: "boolean", defaultValue: "false" },
  { prop: "dragging", type: "boolean", defaultValue: "false" },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
  { prop: "id", type: "string", defaultValue: "auto" },
];

export function DropzoneDocsPage() {
  return (
    <DocsComponentPage
      title="Dropzone"
      description="Official file upload for Nuclear DS. Click to select a file or drag and drop. Do not use a separate File Input."
      tocItems={dropzoneTocItems}
      realScreen={{
        preview: <DropzoneRealScreenPreview />,
        code: dropzoneRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={dropzoneInstallationUiSnippet}>
              <DropzoneEmptyPreview />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from <DocsInlineCode>@/components/dropzone</DocsInlineCode>.
                The same surface covers both upload methods: click the empty
                dropzone to open the file picker, or drag a file onto it. A
                hidden native <DocsInlineCode>input type=&quot;file&quot;</DocsInlineCode>{" "}
                stays inside Dropzone — it is not a public File Input component.
              </>
            }
          >
            <DocsPreview code={dropzoneUsageSnippet}>
              <DropzoneEmptyPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="states"
            title="States"
            description="Empty (click or drop), hover/dragging, loading, success with the selected file, and error with Field Error."
          >
            <div className="flex flex-col gap-[var(--space-stack-lg)]">
              <div className="flex flex-col gap-[var(--space-stack-sm)]">
                <h3 className="text-[length:var(--text-title-size)] font-medium text-[var(--color-text-primary)]">
                  Empty
                </h3>
                <DocsPreview code={dropzoneEmptySnippet}>
                  <DropzoneEmptyPreview />
                </DocsPreview>
              </div>
              <div className="flex flex-col gap-[var(--space-stack-sm)]">
                <h3 className="text-[length:var(--text-title-size)] font-medium text-[var(--color-text-primary)]">
                  Hover / dragging
                </h3>
                <DocsPreview code={dropzoneDraggingSnippet}>
                  <DropzoneDraggingPreview />
                </DocsPreview>
              </div>
              <div className="flex flex-col gap-[var(--space-stack-sm)]">
                <h3 className="text-[length:var(--text-title-size)] font-medium text-[var(--color-text-primary)]">
                  Loading
                </h3>
                <DocsPreview code={dropzoneLoadingSnippet}>
                  <DropzoneLoadingPreview />
                </DocsPreview>
              </div>
              <div className="flex flex-col gap-[var(--space-stack-sm)]">
                <h3 className="text-[length:var(--text-title-size)] font-medium text-[var(--color-text-primary)]">
                  Success
                </h3>
                <DocsPreview code={dropzoneSuccessSnippet}>
                  <DropzoneSuccessPreview />
                </DocsPreview>
              </div>
              <div className="flex flex-col gap-[var(--space-stack-sm)]">
                <h3 className="text-[length:var(--text-title-size)] font-medium text-[var(--color-text-primary)]">
                  Error
                </h3>
                <DocsPreview code={dropzoneErrorSnippet}>
                  <DropzoneErrorPreview />
                </DocsPreview>
              </div>
            </div>
          </DocsSection>

          <DocsSection
            id="file-constraints"
            title="Accepted types and size"
            description={
              <>
                Pass <DocsInlineCode>accept</DocsInlineCode> as a native accept
                string (extensions or MIME types). Pass{" "}
                <DocsInlineCode>maxSize</DocsInlineCode> in bytes when the
                product has a limit. Dropzone rejects files that do not match
                and shows a Field Error. Click and drag and drop both run the
                same checks.
              </>
            }
          >
            <DocsPreview code={dropzoneConstraintsSnippet}>
              <DropzoneConstraintsPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <DocsApiTable rows={dropzoneApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
