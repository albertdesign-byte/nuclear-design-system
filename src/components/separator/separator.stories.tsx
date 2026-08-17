import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { componentParameters } from "../../../.storybook/story-meta";

import { Separator } from "./separator";

const meta = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component: "Visual divider for grouping related content in layouts and menus.",
      },
    },
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    orientation: "horizontal",
  },
  decorators: [
    (Story) => (
      <div className="flex h-24 w-64 items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: { orientation: "horizontal" },
};

export const Horizontal: Story = {
  args: { orientation: "horizontal" },
  decorators: [
    (Story) => (
      <div className="flex w-64 flex-col gap-[var(--space-stack-sm)]">
        <p className="text-[length:var(--text-body-small-size)]">Patient</p>
        <Story />
        <p className="text-[length:var(--text-body-small-size)]">Insurance</p>
      </div>
    ),
  ],
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  decorators: [
    (Story) => (
      <div className="flex h-16 items-center gap-[var(--space-inline-sm)]">
        <span className="text-[length:var(--text-body-small-size)]">Inbox</span>
        <Story />
        <span className="text-[length:var(--text-body-small-size)]">Archive</span>
      </div>
    ),
  ],
};
