"use client";

import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import { DateRangePicker } from "./date-range-picker";
import type { DateRange } from "./date-range-picker.types";

const meta = {
  title: "Components/Date Range Picker",
  component: DateRangePicker,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Select a start and end date for scheduling, reporting, and clinical windows.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    fromLabel: { control: "text" },
    toLabel: { control: "text" },
    locale: { control: "text" },
  },
  args: {
    size: "md",
    disabled: false,
    fromLabel: "From:",
    toLabel: "To:",
    locale: "en-US",
  },
} satisfies Meta<typeof DateRangePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

function ControlledDateRangePicker(
  props: ComponentProps<typeof DateRangePicker>
) {
  const [range, setRange] = useState<DateRange>({
    from: props.from ?? new Date(2026, 6, 20),
    to: props.to ?? new Date(2026, 6, 24),
  });

  return (
    <DateRangePicker
      {...props}
      from={range.from}
      to={range.to}
      onRangeChange={setRange}
    />
  );
}

export const Playground: Story = {
  render: (args) => <ControlledDateRangePicker {...args} />,
};

export const Default: Story = {
  render: () => <ControlledDateRangePicker from={null} to={null} />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--space-stack-md)]">
      <ControlledDateRangePicker size="sm" />
      <ControlledDateRangePicker size="md" />
      <ControlledDateRangePicker size="lg" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <DateRangePicker
      disabled
      from={new Date(2026, 6, 20)}
      to={new Date(2026, 6, 24)}
    />
  ),
};
