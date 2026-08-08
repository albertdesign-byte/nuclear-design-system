"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import { Dropzone } from "./dropzone";

const meta = {
  title: "Components/Dropzone",
  component: Dropzone,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "File upload trigger for prescriptions, insurance cards, and documents. Integrates `FieldError` for validation.",
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "text" },
    accept: { control: "text" },
  },
  args: {
    label: "Upload prescription (PDF or image)",
    disabled: false,
    accept: "image/*,.pdf",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dropzone>;

export default meta;

type Story = StoryObj<typeof meta>;

function ControlledDropzone(
  props: React.ComponentProps<typeof Dropzone> & {
    initialFile?: File | null;
  }
) {
  const { initialFile = null, ...dropzoneProps } = props;
  const [file, setFile] = useState<File | null>(initialFile);

  return <Dropzone {...dropzoneProps} file={file} onFileChange={setFile} />;
}

export const Playground: Story = {
  render: (args) => <ControlledDropzone {...args} />,
};

export const Default: Story = {
  render: (args) => <ControlledDropzone {...args} />,
};

export const WithFile: Story = {
  render: () => (
    <ControlledDropzone
      label="Upload prescription"
      initialFile={new File(["sample"], "prescription.pdf", { type: "application/pdf" })}
    />
  ),
};

export const WithError: Story = {
  render: () => (
    <ControlledDropzone
      label="Upload insurance card"
      error="File must be a PDF or image under 10 MB."
    />
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Upload disabled",
  },
};
