import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { componentParameters } from "../../../.storybook/story-meta";

import { StageFlowBadge } from "./stage-flow-badge";

const meta = {
  title: "Components/Stage Flow Badge",
  component: StageFlowBadge,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Visual stage marker for multi-step operational and clinical workflows.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "neutral"],
    },
    hideArrow: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "Requested → MS1 Approved",
    variant: "success",
    hideArrow: false,
  },
} satisfies Meta<typeof StageFlowBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: { variant: "default", children: "Requested" },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--space-inline-sm)]">
      <StageFlowBadge variant="default">Default</StageFlowBadge>
      <StageFlowBadge variant="success">Success</StageFlowBadge>
      <StageFlowBadge variant="warning">Warning</StageFlowBadge>
      <StageFlowBadge variant="neutral">Neutral</StageFlowBadge>
    </div>
  ),
};

export const WithoutArrow: Story = {
  args: {
    hideArrow: true,
    children: "Qualified",
  },
};
