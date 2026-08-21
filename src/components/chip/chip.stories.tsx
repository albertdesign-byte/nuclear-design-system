"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { componentParameters } from "../../../.storybook/story-meta";

import { Chip } from "./chip";

const meta = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Compact label for filters, tags, and selections. Optional dismiss control via `onRemove`. Use Badge for non-interactive status or counts.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "muted"],
    },
    children: { control: "text" },
    removeLabel: { control: "text" },
  },
  args: {
    children: "MRI Brain",
    variant: "default",
    removeLabel: "Remove",
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: { children: "MRI Brain" },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--space-inline-sm)]">
      <Chip variant="default">Default</Chip>
      <Chip variant="outline">Outline</Chip>
      <Chip variant="muted">Muted</Chip>
    </div>
  ),
};

export const Dismissible: Story = {
  render: function DismissibleChips() {
    const [tags, setTags] = useState(["MRI Brain", "Prior Auth", "Stat"]);

    return (
      <div className="flex flex-wrap gap-[var(--space-inline-sm)]">
        {tags.map((tag) => (
          <Chip
            key={tag}
            onRemove={() =>
              setTags((current) => current.filter((item) => item !== tag))
            }
          >
            {tag}
          </Chip>
        ))}
      </div>
    );
  },
};
