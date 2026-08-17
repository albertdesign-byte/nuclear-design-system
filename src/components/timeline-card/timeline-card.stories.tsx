import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ClipboardListIcon } from "lucide-react";

import { componentParameters } from "../../../.storybook/story-meta";

import { TimelineCard } from "./timeline-card";

const meta = {
  title: "Components/Timeline Card",
  component: TimelineCard,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "A single timeline event presented as a scannable operational card.",
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    author: { control: "text" },
    description: { control: "text" },
    priority: { control: "text" },
    tone: {
      control: "select",
      options: ["default", "priority"],
    },
  },
  args: {
    title: "Px task created",
    author: "Leslie Gonzales",
    description: "Follow up - Authorization (3232293) created.",
    tone: "default",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TimelineCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <TimelineCard
      {...args}
      icon={<ClipboardListIcon />}
      tags={[{ label: "Patient", href: "#" }]}
    />
  ),
};

export const Default: Story = {
  render: () => (
    <TimelineCard
      icon={<ClipboardListIcon />}
      title="Px task created"
      author="Leslie Gonzales"
      description="Follow up - Authorization (3232293) created."
      tags={[{ label: "Patient", href: "#" }]}
    />
  ),
};

export const Priority: Story = {
  render: () => (
    <TimelineCard
      priority="High"
      icon={<ClipboardListIcon />}
      title="PA Updated"
      author="Maximilian Alexander Gonzalez"
      description="PA status changed from Submitted to Pending"
      tags={[{ label: "#534268", href: "#" }]}
    />
  ),
};
