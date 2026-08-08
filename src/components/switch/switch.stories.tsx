"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { Label } from "@/components/label";

import { componentParameters } from "../../../.storybook/story-meta";

import { Switch } from "./switch";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component: "Toggle control for binary settings such as notifications or preferences.",
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
  },
  args: {
    size: "md",
    disabled: false,
    "aria-label": "Enable notifications",
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

function ControlledSwitch(props: React.ComponentProps<typeof Switch> & { label?: string }) {
  const { label, defaultChecked, ...switchProps } = props;
  const [checked, setChecked] = useState(defaultChecked ?? false);

  return (
    <label className="flex items-center gap-[var(--space-inline-sm)] text-sm">
      <Switch
        {...switchProps}
        checked={checked}
        onCheckedChange={(value) => setChecked(Boolean(value))}
      />
      {label}
    </label>
  );
}

export const Playground: Story = {
  render: (args) => <ControlledSwitch {...args} label="Email reminders" />,
};

export const Default: Story = {
  render: () => <ControlledSwitch defaultChecked label="SMS appointment reminders" />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-[var(--space-inline-md)]">
      <Switch size="sm" defaultChecked aria-label="Small" />
      <Switch size="md" defaultChecked aria-label="Medium" />
      <Switch size="lg" defaultChecked aria-label="Large" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--space-stack-sm)]">
      <label className="flex items-center gap-[var(--space-inline-sm)] text-sm">
        <Switch disabled aria-label="Disabled off" />
        Disabled
      </label>
      <label className="flex items-center gap-[var(--space-inline-sm)] text-sm">
        <Switch disabled defaultChecked aria-label="Disabled on" />
        Disabled checked
      </label>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <Label htmlFor="switch-label">Marketing emails</Label>
      <ControlledSwitch id="switch-label" label="Send me product updates" />
    </div>
  ),
};
