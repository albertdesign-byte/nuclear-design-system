import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SearchIcon } from "lucide-react";

import { componentParameters } from "../../../.storybook/story-meta";

import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Primary action control for the Nuclear Design System. Pairs with `InputButtonGroup` for search rows.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost"],
    },
    intent: {
      control: "select",
      options: ["default", "danger"],
    },
    size: {
      control: "select",
      options: [
        "sm",
        "md",
        "lg",
        "xl",
        "xxl",
        "icon-sm",
        "icon-md",
        "icon-lg",
        "icon-xl",
        "icon-xxl",
      ],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    children: { control: "text" },
    loadingLabel: { control: "text" },
  },
  args: {
    children: "Continue",
    variant: "primary",
    intent: "default",
    size: "md",
    loading: false,
    disabled: false,
    fullWidth: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: {
    children: "Continue",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-[var(--space-inline-sm)]">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Visual variants mapped to Medmo action tokens.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-[var(--space-inline-sm)]">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra large</Button>
      <Button size="xxl">2× large</Button>
      <Button size="icon-sm" aria-label="Search">
        <SearchIcon />
      </Button>
      <Button size="icon-md" aria-label="Search">
        <SearchIcon />
      </Button>
      <Button size="icon-lg" aria-label="Search">
        <SearchIcon />
      </Button>
      <Button size="icon-xl" aria-label="Search">
        <SearchIcon />
      </Button>
      <Button size="icon-xxl" aria-label="Search">
        <SearchIcon />
      </Button>
    </div>
  ),
};

export const DangerIntent: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--space-inline-sm)]">
      <Button variant="primary" intent="danger">
        Delete scan
      </Button>
      <Button variant="outline" intent="danger">
        Cancel appointment
      </Button>
      <Button variant="ghost" intent="danger">
        Remove
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Continue",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    loadingLabel: "Saving appointment",
    children: "Continue",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Continue",
  },
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
};
