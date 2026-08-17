"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  CheckboxFieldPattern,
  CheckboxGroupPattern,
  InputFieldPattern,
  RadioFieldPattern,
  SelectFieldPattern,
} from "@/components/docs/shared/form-field-demos";
import { InputField } from "@/components/input";
import { formFieldGroupClassName } from "@/lib/form-field";

import { componentParameters } from "../../../.storybook/story-meta";

const cityStateRowClassName =
  "flex gap-[var(--space-inline-sm)] [&>*]:min-w-0 [&>*]:flex-1";

const meta = {
  title: "Patterns/Form field",
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Visible label, control, optional helper, and optional inline error. Compose InputField, SelectField, CheckboxField, and RadioGroupField. Placeholders never replace the label.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Single field",
  render: () => <InputFieldPattern />,
};

export const Helper: Story = {
  render: () => <InputFieldPattern id="patient-name-helper" variant="helper" />,
};

export const Error: Story = {
  render: () => <InputFieldPattern id="patient-name-error" variant="error" />,
};

export const Stacked: Story = {
  render: () => (
    <div className={formFieldGroupClassName}>
      <InputField
        id="member-id"
        label="Member ID"
        placeholder="Enter member ID"
      />
      <InputField
        id="group-number"
        label="Group number"
        placeholder="Enter group number"
        helperText="Optional if not listed on the card."
      />
    </div>
  ),
};

export const TwoColumn: Story = {
  name: "Two-column",
  render: () => (
    <div className={cityStateRowClassName}>
      <InputField id="city" label="City" placeholder="City" />
      <InputField id="state" label="State" placeholder="State" />
    </div>
  ),
};

export const Select: Story = {
  render: () => <SelectFieldPattern />,
};

export const Checkbox: Story = {
  render: () => <CheckboxFieldPattern variant="description" />,
};

export const CheckboxGroup: Story = {
  render: () => <CheckboxGroupPattern />,
};

export const Radio: Story = {
  render: () => <RadioFieldPattern variant="description" />,
};
