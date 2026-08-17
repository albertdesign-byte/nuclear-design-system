import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { componentParameters } from "../../../.storybook/story-meta";

import { UserProfileBlock } from "./user-profile-block";

const meta = {
  title: "Components/User Profile Block",
  component: UserProfileBlock,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Compact identity block combining avatar, name, and supporting metadata.",
      },
    },
  },
  argTypes: {
    name: { control: "text" },
    subtitle: { control: "text" },
    avatarFallback: { control: "text" },
  },
  args: {
    name: "Jose Nevado",
    subtitle: "Care Points: 0",
    avatarFallback: "JN",
  },
} satisfies Meta<typeof UserProfileBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: {
    name: "Jose Nevado",
    subtitle: "Care Points: 0",
  },
};

export const NameOnly: Story = {
  args: {
    name: "Elena Morales",
    subtitle: undefined,
  },
};

export const WithSettings: Story = {
  args: {
    name: "Jose Nevado",
    subtitle: "Operations",
    onSettingsClick: () => undefined,
  },
};
