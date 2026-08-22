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
          "Start and end date fields with the same MM/DD/YYYY formatter. Type digits or slashes, or pick dates from the calendar.",
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
    from: props.from !== undefined ? props.from : new Date(2026, 6, 20),
    to: props.to !== undefined ? props.to : new Date(2026, 6, 24),
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
  name: "Date range",
  render: () => <ControlledDateRangePicker from={null} to={null} />,
};

export const DirectTextEntry: Story = {
  name: "Direct text entry",
  parameters: {
    docs: {
      description: {
        story:
          "Type digits such as 07121992 or a slash after a one-digit month (9/). Incomplete values are not errors.",
      },
    },
  },
  render: () => <ControlledDateRangePicker from={null} to={null} />,
};

export const DateValidation: Story = {
  name: "Date validation",
  parameters: {
    docs: {
      description: {
        story: "Invalid complete dates show the Field Error state on the affected field.",
      },
    },
  },
  render: () => (
    <DateRangePicker
      from={null}
      to={null}
      fromError="Enter a valid date as MM/DD/YYYY."
    />
  ),
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
