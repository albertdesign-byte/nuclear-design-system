import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Label } from "@/components/label";

import { componentParameters } from "../../../.storybook/story-meta";

import { Textarea } from "./textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Multiline text input for notes, addresses, and open-ended responses.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    rows: { control: "number" },
  },
  args: {
    placeholder: "Add any details that will help us prepare for your visit…",
    size: "md",
    fullWidth: true,
    disabled: false,
    rows: 4,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  render: (args) => (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <Label htmlFor="textarea-default">Additional details</Label>
      <Textarea {...args} id="textarea-default" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-[var(--space-stack-sm)]">
      <Textarea size="sm" placeholder="Small textarea" rows={3} />
      <Textarea size="md" placeholder="Medium textarea" rows={3} />
      <Textarea size="lg" placeholder="Large textarea" rows={3} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "This response cannot be edited.",
  },
};

export const Invalid: Story = {
  render: () => (
    <Textarea
      aria-invalid
      placeholder="Describe your symptoms"
      aria-describedby="textarea-invalid-help"
    />
  ),
};
