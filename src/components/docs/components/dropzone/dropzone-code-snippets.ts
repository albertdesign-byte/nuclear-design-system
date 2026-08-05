import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const dropzoneImport = `import { Dropzone } from "@/components/dropzone";`;

export const dropzoneInstallationUiSnippet = tsxSnippet(`${dropzoneImport}
import { useState } from "react";

export function Example() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <Dropzone
      label="Upload front of card"
      file={file}
      onFileChange={setFile}
      accept=".pdf,.jpeg,.jpg,.png"
    />
  );
}`);

export const dropzoneRealScreenSnippet = tsxSnippet(`${dropzoneImport}
import { useState } from "react";

export function Example() {
  const [frontFile, setFrontFile] = useState<File | null>(
    new File(["preview"], "front.png", { type: "image/png" })
  );
  const [backFile, setBackFile] = useState<File | null>(null);

  return (
    <div className="flex w-full max-w-md flex-col gap-[var(--space-stack-md)]">
      <Dropzone
        label="Upload front of card"
        file={frontFile}
        onFileChange={setFrontFile}
        accept=".pdf,.jpeg,.jpg,.png"
      />
      <Dropzone
        label="Upload back of card"
        file={backFile}
        onFileChange={setBackFile}
        accept=".pdf,.jpeg,.jpg,.png"
        error="Use file in .pdf, .jpeg or .png"
      />
    </div>
  );
}`);

export const dropzoneUsageSnippet = exampleSnippet(
  `<Dropzone
  label="Upload front of card"
  file={file}
  onFileChange={setFile}
  accept=".pdf,.jpeg,.jpg,.png"
/>`,
  { imports: [dropzoneImport, 'import { useState } from "react";'] }
);

export const dropzoneErrorSnippet = exampleSnippet(
  `<Dropzone
  label="Upload back of card"
  file={file}
  onFileChange={setFile}
  accept=".pdf,.jpeg,.jpg,.png"
  error="Use file in .pdf, .jpeg or .png"
/>`,
  { imports: [dropzoneImport] }
);
