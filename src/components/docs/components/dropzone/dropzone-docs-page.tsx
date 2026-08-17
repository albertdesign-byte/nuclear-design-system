"use client";

import { useState } from "react";

import { Dropzone } from "@/components/dropzone";
import {
  dropzoneErrorSnippet,
  dropzoneInstallationUiSnippet,
  dropzoneRealScreenSnippet,
  dropzoneUsageSnippet,
} from "@/components/docs/components/dropzone/dropzone-code-snippets";
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
  { prop: "error", type: "string", defaultValue: "undefined" },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
  { prop: "id", type: "string", defaultValue: "auto" },
];

export function DropzoneDocsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [errorFile, setErrorFile] = useState<File | null>(null);

  return (
    <DocsComponentPage
      title="Dropzone"
      description="File upload field with empty, selected, and error states for insurance cards and documents."
      tocItems={dropzoneTocItems}
      realScreen={{
        preview: <DropzoneRealScreenPreview />,
        code: dropzoneRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={dropzoneInstallationUiSnippet}>
              <Dropzone
                label="Upload front of card"
                file={file}
                onFileChange={setFile}
                accept=".pdf,.jpeg,.jpg,.png"
              />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from <DocsInlineCode>@/components/dropzone</DocsInlineCode>.
                Control the selected file from the parent to validate type and size.
              </>
            }
          >
            <DocsPreview code={dropzoneUsageSnippet}>
              <Dropzone
                label="Upload front of card"
                file={file}
                onFileChange={setFile}
                accept=".pdf,.jpeg,.jpg,.png"
              />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="error"
            title="Error"
            description="Pass an error message to show invalid styling and a Field Error with icon below the dropzone."
          >
            <DocsPreview code={dropzoneErrorSnippet}>
              <Dropzone
                label="Upload back of card"
                file={errorFile}
                onFileChange={setErrorFile}
                accept=".pdf,.jpeg,.jpg,.png"
                error="Use file in .pdf, .jpeg or .png"
              />
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
