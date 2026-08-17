"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { toast } from "sonner";

import { Button } from "@/components/button";

import { componentParameters } from "../../../.storybook/story-meta";

import { Toaster } from "./sonner";

const meta = {
  title: "Components/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Toast notifications with theme-aware Foundation tokens. Mount Toaster once, then call `toast()` from sonner.",
      },
    },
  },
  argTypes: {
    position: {
      control: "select",
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
    },
    richColors: { control: "boolean" },
    closeButton: { control: "boolean" },
  },
  args: {
    position: "top-right",
    richColors: true,
    closeButton: true,
  },
  decorators: [
    (Story, context) => (
      <>
        <Toaster
          position={context.args.position}
          richColors={context.args.richColors}
          closeButton={context.args.closeButton}
        />
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Button onClick={() => toast("Event created")}>Show toast</Button>
  ),
};

export const Default: Story = {
  render: () => (
    <Button onClick={() => toast("Study queued")}>Default</Button>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--space-inline-sm)]">
      <Button onClick={() => toast.success("Record saved")}>Success</Button>
      <Button onClick={() => toast.error("Could not save")}>Error</Button>
      <Button onClick={() => toast.warning("Authorization expiring")}>
        Warning
      </Button>
      <Button onClick={() => toast.info("Results posted")}>Info</Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <Button
      onClick={() => {
        const id = toast.loading("Saving record…");
        window.setTimeout(() => toast.success("Record saved", { id }), 1500);
      }}
    >
      Save with loading
    </Button>
  ),
};
