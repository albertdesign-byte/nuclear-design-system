"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChevronLeftIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/button";
import { Dropzone } from "@/components/dropzone";
import {
  MultiStepFlowLayout,
  MultiStepFlowLayoutCard,
  MultiStepFlowLayoutInputPanel,
  MultiStepFlowLayoutMain,
} from "@/components/multi-step-flow-layout";

import { fullWidthParameters } from "../../../.storybook/story-meta";

const FILE_ACCEPT = ".pdf,.jpeg,.jpg,.png";

const uploadedDocument = new File(["sample"], "document.pdf", {
  type: "application/pdf",
});

function DocumentUpload({ filled = false }: { filled?: boolean }) {
  const [file, setFile] = useState<File | null>(filled ? uploadedDocument : null);
  const canContinue = file !== null;

  return (
    <MultiStepFlowLayout className="min-h-[24rem]">
      <MultiStepFlowLayoutMain className="gap-[var(--space-stack-md)]">
        <MultiStepFlowLayoutCard>
          <Button type="button" variant="ghost" size="sm">
            <ChevronLeftIcon aria-hidden />
            Back
          </Button>
          <div className="flex flex-col gap-[var(--space-stack-xs)]">
            <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
              Upload a document
            </h1>
            <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
              Use a file in .pdf, .jpeg or .png.
            </p>
            <p className="text-[length:var(--text-body-small-size)] font-semibold leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]">
              This is required to continue.
            </p>
          </div>
        </MultiStepFlowLayoutCard>

        <MultiStepFlowLayoutInputPanel>
          <Dropzone
            id={filled ? "document-upload-filled" : "document-upload-empty"}
            label="Upload document"
            file={file}
            accept={FILE_ACCEPT}
            onFileChange={setFile}
          />
        </MultiStepFlowLayoutInputPanel>

        <Button size="xxl" fullWidth disabled={!canContinue}>
          Continue
        </Button>
      </MultiStepFlowLayoutMain>
    </MultiStepFlowLayout>
  );
}

const meta = {
  title: "Patterns/Document upload",
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Attach a clinical document with a labeled Dropzone on a Patients step. Required single file: Continue stays disabled until a valid file is attached. Accept .pdf, .jpeg, .jpg, .png. Do not redesign the dropzone, add a file manager, or move upload into a modal or drawer.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  name: "Empty upload",
  render: () => <DocumentUpload />,
};

export const Uploaded: Story = {
  name: "Uploaded document",
  render: () => <DocumentUpload filled />,
};
