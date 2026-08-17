import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { componentParameters, fullWidthParameters } from "../../../.storybook/story-meta";

import { InputButtonGroup } from "./input-button-group";

const meta = {
  title: "Components/Input Button Group",
  component: InputButtonGroup,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Search row combining `Input` and `Button`. Used in toolbars and global search.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    buttonVariant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost"],
    },
    placeholder: { control: "text" },
    buttonLabel: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    placeholder: "Search by MRN or patient name",
    buttonLabel: "Search",
    size: "md",
    buttonVariant: "secondary",
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InputButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-[var(--space-stack-sm)]">
      <InputButtonGroup size="sm" placeholder="Small search" />
      <InputButtonGroup size="md" placeholder="Medium search" />
      <InputButtonGroup size="lg" placeholder="Large search" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Search disabled",
  },
};
