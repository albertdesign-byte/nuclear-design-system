import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { componentParameters } from "../../../.storybook/story-meta";

import { Badge } from "./badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Compact status and count label for tables, headers, and cards. Use Chip for filters and dismissible selections.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    children: { control: "text" },
  },
  args: {
    children: "Stable",
    variant: "default",
    size: "md",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: {
    children: "Stable",
    variant: "secondary",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--space-inline-sm)]">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Critical</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-[var(--space-inline-sm)]">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const AsLink: Story = {
  render: () => (
    <Badge render={<a href="#badge-link" />}>View policy</Badge>
  ),
  parameters: {
    docs: {
      description: {
        story: "Use the `render` prop to compose badge semantics with anchors or buttons.",
      },
    },
  },
};
