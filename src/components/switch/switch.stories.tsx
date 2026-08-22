"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { switchStateClassName } from "@/stories/shared/interaction-state-classes";
import { Label } from "@/components/label";

import { InteractionStateGrid } from "../../../.storybook/interaction-state-grid";
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
        component:
          "Toggle control for binary settings. In settings rows, place Label on the left and Switch on the right. Do not duplicate labels.",
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
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

function SettingsSwitchRow({
  id,
  label,
  defaultChecked,
  ...switchProps
}: React.ComponentProps<typeof Switch> & { id: string; label: string }) {
  const [checked, setChecked] = useState(defaultChecked ?? false);

  return (
    <div className="flex max-w-md items-center justify-between gap-[var(--space-inline-md)]">
      <Label htmlFor={id}>{label}</Label>
      <Switch
        {...switchProps}
        id={id}
        checked={checked}
        onCheckedChange={(value) => setChecked(Boolean(value))}
      />
    </div>
  );
}

export const Playground: Story = {
  render: (args) => (
    <SettingsSwitchRow {...args} id="switch-playground" label="Email reminders" />
  ),
};

export const Default: Story = {
  render: () => (
    <SettingsSwitchRow
      id="switch-default"
      defaultChecked
      label="SMS appointment reminders"
    />
  ),
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
    <div className="flex max-w-md flex-col gap-[var(--space-stack-sm)]">
      <div className="flex items-center justify-between gap-[var(--space-inline-md)]">
        <Label htmlFor="switch-disabled-off">Disabled</Label>
        <Switch id="switch-disabled-off" disabled />
      </div>
      <div className="flex items-center justify-between gap-[var(--space-inline-md)]">
        <Label htmlFor="switch-disabled-on">Disabled checked</Label>
        <Switch id="switch-disabled-on" disabled defaultChecked />
      </div>
    </div>
  ),
};

export const InteractionStates: Story = {
  render: () => (
    <InteractionStateGrid disabled={<Switch disabled aria-label="Disabled" />}>
      {(state) => (
        <Switch
          aria-label={`Switch ${state}`}
          className={cn(switchStateClassName[state])}
        />
      )}
    </InteractionStateGrid>
  ),
};

export const WithLabel: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Settings row: Label on the left, Switch on the right, linked with htmlFor and id. Do not add a second label.",
      },
    },
  },
  render: () => (
    <SettingsSwitchRow
      id="switch-label"
      defaultChecked
      label="Critical results alerts"
    />
  ),
};
