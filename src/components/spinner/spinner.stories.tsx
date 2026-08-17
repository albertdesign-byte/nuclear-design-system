import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { componentParameters } from "../../../.storybook/story-meta";

import { Spinner } from "./spinner";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Loading indicator with `role=\"status\"`. Size follows the iconography scale.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  args: {
    size: "md",
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: { size: "md" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-[var(--space-inline-md)]">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
      <Spinner size="sm" />
      Saving record…
    </div>
  ),
};
