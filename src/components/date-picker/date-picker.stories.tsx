"use client";

import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { expect, userEvent, within } from "storybook/test";

import { cn } from "@/lib/utils";
import { datePickerStateClassName } from "@/stories/shared/interaction-state-classes";
import { Label } from "@/components/label";

import { InteractionStateGrid } from "../../../.storybook/interaction-state-grid";
import { componentParameters } from "../../../.storybook/story-meta";

import { DatePicker } from "./date-picker";

const meta = {
  title: "Components/Date Picker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Editable MM/DD/YYYY field with optional calendar. Digits are formatted as you type; slashes are optional. Incomplete values are not errors.",
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
    error: { control: "text" },
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

function ControlledDatePicker(props: ComponentProps<typeof DatePicker>) {
  const [value, setValue] = useState<Date | null>(
    props.value === undefined ? new Date(2024, 5, 12) : props.value
  );

  return <DatePicker {...props} value={value} onChange={setValue} />;
}

async function typeIntoDateField(canvasElement: HTMLElement, keys: string, label = "Select date") {
  const canvas = within(canvasElement);
  const input = canvas.getByLabelText(label);
  await userEvent.click(input);
  await userEvent.type(input, keys, { delay: 20 });
  return input;
}

export const Playground: Story = {
  render: (args) => <ControlledDatePicker {...args} />,
};

export const Empty: Story = {
  render: () => <ControlledDatePicker value={null} />,
};

export const Default: Story = {
  name: "Single date",
  render: () => (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <Label htmlFor="date-picker-default">Last mammogram date</Label>
      <ControlledDatePicker id="date-picker-default" value={null} />
    </div>
  ),
};

export const TypingDigitsAutomaticallyFormatted: Story = {
  name: "Typing digits 07121992",
  parameters: {
    docs: {
      description: {
        story: "07121992 is formatted as 07/12/1992. Incomplete digit sequences do not show an error.",
      },
    },
  },
  render: () => <ControlledDatePicker value={null} aria-label="Select date" />,
  play: async ({ canvasElement }) => {
    const input = await typeIntoDateField(canvasElement, "07121992");
    await expect(input).toHaveValue("07/12/1992");
  },
};

export const ManualSlashInput: Story = {
  name: "Manual slash 9/",
  parameters: {
    docs: {
      description: {
        story: "Typing 9/ normalizes the month to 09/ without duplicating the slash.",
      },
    },
  },
  render: () => <ControlledDatePicker value={null} aria-label="Select date" />,
  play: async ({ canvasElement }) => {
    const input = await typeIntoDateField(canvasElement, "9/");
    await expect(input).toHaveValue("09/");
  },
};

export const SingleDigitMonthThenDay: Story = {
  name: "09 + 1 → 09/1",
  parameters: {
    docs: {
      description: {
        story: "After 09, the next digit starts the day: 091 becomes 09/1.",
      },
    },
  },
  render: () => <ControlledDatePicker value={null} aria-label="Select date" />,
  play: async ({ canvasElement }) => {
    const input = await typeIntoDateField(canvasElement, "091");
    await expect(input).toHaveValue("09/1");
  },
};

export const SingleDigitDayNormalization: Story = {
  name: "Single-digit day 9/1/",
  parameters: {
    docs: {
      description: {
        story: "A slash after a one-digit day pads it: 9/1/ becomes 09/01/.",
      },
    },
  },
  render: () => <ControlledDatePicker value={null} aria-label="Select date" />,
  play: async ({ canvasElement }) => {
    const input = await typeIntoDateField(canvasElement, "9/1/");
    await expect(input).toHaveValue("09/01/");
  },
};

export const CompleteValidDate: Story = {
  name: "Complete valid date",
  render: () => (
    <ControlledDatePicker value={new Date(1992, 6, 12)} aria-label="Select date" />
  ),
};

export const InvalidCompleteDate: Story = {
  name: "Invalid complete date",
  parameters: {
    docs: {
      description: {
        story:
          "13/40/1992 is complete but not a real date, so Field Error appears. Incomplete values such as 07/12/323 do not.",
      },
    },
  },
  render: () => <ControlledDatePicker value={null} aria-label="Select date" />,
  play: async ({ canvasElement }) => {
    const input = await typeIntoDateField(canvasElement, "13401992");
    await expect(input).toHaveValue("13/40/1992");
    await expect(within(canvasElement).getByRole("alert")).toHaveTextContent(
      "Enter a valid date as MM/DD/YYYY."
    );
  },
};

export const CalendarSelection: Story = {
  name: "Calendar selection",
  parameters: {
    docs: {
      description: {
        story:
          "Focus or click the field to open the calendar. Navigate months and years, then select a day. The input updates to the same value.",
      },
    },
  },
  render: () => (
    <ControlledDatePicker value={new Date(2024, 3, 17)} aria-label="Select date from calendar" />
  ),
};

export const DateOfBirth: Story = {
  name: "Date of birth",
  parameters: {
    docs: {
      description: {
        story:
          "Date of birth uses the same DatePicker. Type 04171992 or 04/17/1992, or pick a day from the calendar.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <Label htmlFor="date-picker-dob">Date of birth</Label>
      <ControlledDatePicker
        id="date-picker-dob"
        value={null}
        placeholder="MM/DD/YYYY"
        aria-label="Date of birth"
      />
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

export const InteractionStates: Story = {
  render: () => (
    <InteractionStateGrid
      disabled={
        <DatePicker
          disabled
          value={new Date(2024, 5, 12)}
          aria-label="Disabled date picker"
        />
      }
    >
      {(state) => (
        <DatePicker
          value={new Date(2024, 5, 12)}
          aria-label={`Date picker ${state}`}
          className={cn(datePickerStateClassName[state])}
        />
      )}
    </InteractionStateGrid>
  ),
};
