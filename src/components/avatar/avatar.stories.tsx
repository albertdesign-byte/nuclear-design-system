import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CheckIcon } from "lucide-react";

import { componentParameters } from "../../../.storybook/story-meta";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "./avatar";

const sampleImageSrc =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&h=128";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  subcomponents: {
    AvatarImage,
    AvatarFallback,
    AvatarBadge,
    AvatarGroup,
    AvatarGroupCount,
  },
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Identity avatar with image, fallback initials, status badge, and stacked group variants.",
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
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src={sampleImageSrc} alt="Elena Morales" />
      <AvatarFallback size={args.size}>EM</AvatarFallback>
    </Avatar>
  ),
};

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src={sampleImageSrc} alt="Elena Morales" />
      <AvatarFallback>EM</AvatarFallback>
    </Avatar>
  ),
};

export const Fallback: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>JR</AvatarFallback>
    </Avatar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-[var(--space-inline-sm)]">
      <Avatar size="sm">
        <AvatarFallback size="sm">SM</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarFallback size="md">MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback size="lg">LG</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <Avatar size="lg">
      <AvatarImage src={sampleImageSrc} alt="Verified clinician" />
      <AvatarFallback>EM</AvatarFallback>
      <AvatarBadge size="lg">
        <CheckIcon />
      </AvatarBadge>
    </Avatar>
  ),
};

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar size="md">
        <AvatarImage src={sampleImageSrc} alt="Clinician one" />
        <AvatarFallback>EM</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarFallback>JR</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarFallback>AL</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+4</AvatarGroupCount>
    </AvatarGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Stack multiple avatars for care teams and assignment lists.",
      },
    },
  },
};
