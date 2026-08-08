"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { Label } from "@/components/label";

import { componentParameters } from "../../../.storybook/story-meta";

import { DatePicker } from "./date-picker";

const meta = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Single-date selector with calendar popover. Used in mammogram and scheduling flows.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    locale: { control: "text" },
  },
  args: {
    placeholder: "MM/DD/YYYY",
    size: "md",
    disabled: false,
    locale: "en-US",
    "aria-label": "Select date",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-xs">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

function ControlledDatePicker(props: React.ComponentProps<typeof DatePicker>) {
  const [value, setValue] = useState<Date | null>(
    props.value ?? new Date(2024, 5, 12)
  );

  return <DatePicker {...props} value={value} onChange={setValue} />;
}

export const Playground: Story = {
  render: (args) => <ControlledDatePicker {...args} />,
};

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <Label htmlFor="date-picker-default">Last mammogram date</Label>
      <ControlledDatePicker id="date-picker-default" value={null} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-[var(--space-stack-sm)]">
      <ControlledDatePicker size="sm" value={new Date(2024, 0, 15)} />
      <ControlledDatePicker size="md" value={new Date(2024, 0, 15)} />
      <ControlledDatePicker size="lg" value={new Date(2024, 0, 15)} />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <DatePicker
      disabled
      value={new Date(2024, 5, 12)}
      aria-label="Disabled date picker"
    />
  ),
};

export const Empty: Story = {
  render: () => <ControlledDatePicker value={null} />,
};
