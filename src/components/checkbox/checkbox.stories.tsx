"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { Label } from "@/components/label";

import { componentParameters } from "../../../.storybook/story-meta";

import { Checkbox } from "./checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Binary selection control. Supports checked, unchecked, and indeterminate states.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
    indeterminate: { control: "boolean" },
  },
  args: {
    size: "md",
    disabled: false,
    "aria-label": "Accept terms",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

function ControlledCheckbox(
  props: React.ComponentProps<typeof Checkbox> & { label?: string }
) {
  const { label, defaultChecked, ...checkboxProps } = props;
  const [checked, setChecked] = useState(defaultChecked ?? false);

  return (
    <label className="flex items-center gap-[var(--space-inline-sm)] text-sm">
      <Checkbox
        {...checkboxProps}
        checked={checked}
        onCheckedChange={(value) => setChecked(Boolean(value))}
      />
      {label}
    </label>
  );
}

export const Playground: Story = {
  render: (args) => <ControlledCheckbox {...args} label="Morning appointments" />,
};

export const Default: Story = {
  render: () => (
    <ControlledCheckbox defaultChecked label="Share results with my provider" />
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-[var(--space-inline-md)]">
      <Checkbox size="sm" defaultChecked aria-label="Small" />
      <Checkbox size="md" defaultChecked aria-label="Medium" />
      <Checkbox size="lg" defaultChecked aria-label="Large" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--space-stack-sm)]">
      <ControlledCheckbox label="Unchecked" />
      <ControlledCheckbox defaultChecked label="Checked" />
      <label className="flex items-center gap-[var(--space-inline-sm)] text-sm">
        <Checkbox indeterminate aria-label="Indeterminate" />
        Indeterminate
      </label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--space-stack-sm)]">
      <label className="flex items-center gap-[var(--space-inline-sm)] text-sm">
        <Checkbox disabled aria-label="Disabled unchecked" />
        Disabled
      </label>
      <label className="flex items-center gap-[var(--space-inline-sm)] text-sm">
        <Checkbox disabled defaultChecked aria-label="Disabled checked" />
        Disabled checked
      </label>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <Label htmlFor="checkbox-label">Insurance card on file</Label>
      <div className="flex items-center gap-[var(--space-inline-sm)]">
        <Checkbox id="checkbox-label" defaultChecked aria-labelledby="checkbox-label" />
        <span className="text-sm">I have uploaded my insurance card</span>
      </div>
    </div>
  ),
};
