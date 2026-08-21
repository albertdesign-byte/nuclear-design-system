import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FieldError } from "@/components/field-error";
import { Input } from "@/components/input";

import { componentParameters } from "../../../.storybook/story-meta";

import { Label } from "./label";

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Supported primitive for visible field labels. Prefer Field composites when one exists (`InputField`, `SelectField`, and similar). Use Label with controls that currently have no Field wrapper, such as DatePicker, Textarea, Switch, and DayToggleGroup.",
      },
    },
  },
  argTypes: {
    invalid: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "Patient name",
    invalid: false,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  render: (args) => (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <Label {...args} htmlFor="label-default" />
      <Input id="label-default" placeholder="Enter patient name" />
    </div>
  ),
};

export const Invalid: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <Label htmlFor="label-invalid" invalid>
        Email address
      </Label>
      <Input id="label-invalid" aria-invalid defaultValue="not-an-email" />
      <FieldError showIcon>Enter a valid email address.</FieldError>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Set `invalid` when the associated field has a validation error.",
      },
    },
  },
};
