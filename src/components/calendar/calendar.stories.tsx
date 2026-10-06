"use client";

import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { componentParameters } from "../../../.storybook/story-meta";

import { Calendar } from "./calendar";

const calendarSurfaceClassName = [
  "w-fit rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)]",
  "bg-[var(--color-surface-floating)] shadow-[var(--shadow-md)] ring-1 ring-[var(--color-border-subtle)]",
].join(" ");

function ControlledCalendar({
  value: valueProp,
  ...props
}: ComponentProps<typeof Calendar>) {
  const [value, setValue] = useState<Date | null>(
    valueProp === undefined ? new Date(2024, 5, 12) : valueProp
  );

  return (
    <Calendar
      {...props}
      value={value}
      onSelect={setValue}
      onClear={() => setValue(null)}
    />
  );
}

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Standalone month grid for date selection. DatePicker and DateRangePicker render this calendar in a popover.",
      },
    },
  },
  argTypes: {
    locale: { control: "text" },
    disabled: { control: "boolean" },
    showFooter: { control: "boolean" },
  },
  args: {
    locale: "en-US",
    disabled: false,
    showFooter: true,
  },
  decorators: [
    (Story) => (
      <div className={calendarSurfaceClassName}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => <ControlledCalendar {...args} />,
};

export const Default: Story = {
  render: () => (
    <ControlledCalendar value={null} defaultViewDate={new Date(2024, 5, 1)} />
  ),
};

export const Selected: Story = {
  render: () => (
    <ControlledCalendar
      value={new Date(2024, 5, 12)}
      defaultViewDate={new Date(2024, 5, 1)}
    />
  ),
};

export const Today: Story = {
  render: () => <ControlledCalendar value={null} />,
};

export const Disabled: Story = {
  render: () => (
    <Calendar
      disabled
      value={new Date(2024, 5, 12)}
      defaultViewDate={new Date(2024, 5, 1)}
    />
  ),
};

export const RangeHighlight: Story = {
  name: "Range highlight",
  render: () => (
    <Calendar
      from={new Date(2024, 5, 10)}
      to={new Date(2024, 5, 16)}
      value={new Date(2024, 5, 10)}
      defaultViewDate={new Date(2024, 5, 1)}
    />
  ),
};
