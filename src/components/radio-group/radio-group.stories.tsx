"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { Label } from "@/components/label";

import { componentParameters } from "../../../.storybook/story-meta";

import { RadioGroup, RadioGroupItem } from "./radio-group";

const visitOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "prefer-not", label: "Prefer not to answer" },
] as const;

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  subcomponents: { RadioGroupItem },
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Single-select control for mutually exclusive options. Compose with `RadioGroupItem` and labels.",
      },
    },
  },
  argTypes: {
    disabled: { control: "boolean" },
  },
  args: {
    disabled: false,
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

function ControlledRadioGroup({
  disabled = false,
  defaultValue = "no",
  size = "md" as const,
}: {
  disabled?: boolean;
  defaultValue?: string;
  size?: "sm" | "md" | "lg";
}) {
  const [value, setValue] = useState(defaultValue);

  return (
    <RadioGroup value={value} onValueChange={setValue} disabled={disabled}>
      {visitOptions.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-[var(--space-inline-sm)] text-sm"
        >
          <RadioGroupItem value={option.value} size={size} />
          {option.label}
        </label>
      ))}
    </RadioGroup>
  );
}

export const Playground: Story = {
  render: (args) => <ControlledRadioGroup disabled={args.disabled} />,
};

export const Default: Story = {
  render: () => <ControlledRadioGroup />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-[var(--space-inline-md)]">
      {(["sm", "md", "lg"] as const).map((size) => (
        <RadioGroup key={size} defaultValue={size}>
          <RadioGroupItem value={size} size={size} aria-label={`Size ${size}`} />
        </RadioGroup>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  render: () => <ControlledRadioGroup disabled defaultValue="yes" />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--space-stack-sm)]">
      <Label>Have you had a COVID-19 vaccine?</Label>
      <ControlledRadioGroup defaultValue="prefer-not" />
    </div>
  ),
};
