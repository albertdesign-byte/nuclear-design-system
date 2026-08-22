"use client";

import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import { Dropzone } from "./dropzone";

const PRESCRIPTION_ACCEPT = "image/*,.pdf";
const PRESCRIPTION_MAX_SIZE = 10 * 1024 * 1024;

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
          "Official Nuclear DS file upload. Click to select a file or drag and drop. Covers empty, hover/dragging, loading, success, and error, plus `accept` and `maxSize`.",
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    dragging: { control: "boolean" },
    error: { control: "text" },
    accept: { control: "text" },
    maxSize: { control: "number" },
  },
  args: {
    label: "Upload prescription (PDF or image)",
    disabled: false,
    loading: false,
    accept: PRESCRIPTION_ACCEPT,
    maxSize: PRESCRIPTION_MAX_SIZE,
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
  props: ComponentProps<typeof Dropzone> & {
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
  name: "Empty",
  render: (args) => <ControlledDropzone {...args} />,
};

export const Dragging: Story = {
  render: () => (
    <Dropzone
      label="Upload prescription (PDF or image)"
      accept={PRESCRIPTION_ACCEPT}
      maxSize={PRESCRIPTION_MAX_SIZE}
      dragging
    />
  ),
};

export const Loading: Story = {
  render: () => (
    <Dropzone
      label="Upload prescription (PDF or image)"
      accept={PRESCRIPTION_ACCEPT}
      maxSize={PRESCRIPTION_MAX_SIZE}
      loading
    />
  ),
};

export const WithFile: Story = {
  name: "Success",
  render: () => (
    <ControlledDropzone
      label="Upload prescription"
      accept={PRESCRIPTION_ACCEPT}
      maxSize={PRESCRIPTION_MAX_SIZE}
      initialFile={new File(["sample"], "prescription.pdf", { type: "application/pdf" })}
    />
  ),
};

export const WithError: Story = {
  name: "Error",
  render: () => (
    <ControlledDropzone
      label="Upload insurance card"
      accept={PRESCRIPTION_ACCEPT}
      maxSize={PRESCRIPTION_MAX_SIZE}
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
