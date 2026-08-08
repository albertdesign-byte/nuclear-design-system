"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ComponentProps } from "react";
import { useState } from "react";

import { componentParameters } from "../../../.storybook/story-meta";

import { DayToggleGroup } from "./day-toggle-group";
import type { DayToggleValue } from "./day-toggle-group.types";

function DayToggleGroupDemo({
  initialValue = ["mon", "wed", "fri"],
  ...props
}: Omit<ComponentProps<typeof DayToggleGroup>, "value" | "onValueChange"> & {
  initialValue?: DayToggleValue[];
}) {
  const [value, setValue] = useState<DayToggleValue[]>(initialValue);

  return <DayToggleGroup {...props} value={value} onValueChange={setValue} />;
}

const meta = {
  title: "Components/DayToggleGroup",
  component: DayToggleGroupDemo,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Multi-select weekday toggles for availability scheduling. Used in the Patients availability screen.",
      },
    },
  },
  argTypes: {
    disabled: { control: "boolean" },
    initialValue: { control: false },
    "aria-label": { control: "text" },
  },
  args: {
    disabled: false,
    "aria-label": "Preferred days",
    initialValue: ["mon", "wed", "fri"],
  },
} satisfies Meta<typeof DayToggleGroupDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {};

export const Empty: Story = {
  args: {
    initialValue: [],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    initialValue: ["tue", "thu"],
  },
};

export const AllSelected: Story = {
  args: {
    initialValue: ["mon", "tue", "wed", "thu", "fri", "sat"],
  },
};
