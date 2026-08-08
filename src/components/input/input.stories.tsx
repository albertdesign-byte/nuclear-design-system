import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { InputButtonGroup } from "@/components/input-button-group";
import { Label } from "@/components/label";

import { componentParameters, fullWidthParameters } from "../../../.storybook/story-meta";

import { Input } from "./input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Single-line text field. Compose with `Label` and `FieldError`, or use `InputButtonGroup` for search rows.",
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
    type: { control: "text" },
  },
  args: {
    placeholder: "Search patients…",
    size: "md",
    fullWidth: true,
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  render: (args) => (
    <div className="flex w-full flex-col gap-[var(--space-stack-xs)]">
      <Label htmlFor="input-default">Patient name</Label>
      <Input {...args} id="input-default" defaultValue="Elena Morales" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-[var(--space-stack-sm)]">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled field",
    defaultValue: "Read only value",
  },
};

export const Invalid: Story = {
  render: () => (
    <Input
      aria-invalid
      defaultValue="not-an-email"
      placeholder="Email address"
      aria-describedby="input-invalid-help"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Pair `aria-invalid` with `FieldError` in production forms.",
      },
    },
  },
};

export const WithButtonGroup: Story = {
  render: () => <InputButtonGroup placeholder="Search by MRN or patient name" />,
  parameters: {
    ...fullWidthParameters,
    docs: {
      description: {
        story: "Related pattern combining Input and Button for search toolbars.",
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
};
