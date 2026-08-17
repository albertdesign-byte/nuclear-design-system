"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArchiveIcon, UserIcon } from "lucide-react";

import {
  DropdownContentPatternsPreview,
  DropdownDangerActionsPreview,
  DropdownHealthcareExamplesPreview,
  DropdownStatesPreview,
  DropdownVariantsPreview,
} from "@/components/docs/components/dropdown-menu/dropdown-menu-preview-blocks";

import { componentParameters } from "../../../.storybook/story-meta";

import {
  DropdownMenu,
  DropdownMenuButton,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./";

const meta = {
  title: "Components/Dropdown Menu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Contextual actions with a consistent Chevron Down indicator, token-based Danger items, and Base UI keyboard and focus behavior.",
      },
    },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuButton size="sm">
        <UserIcon data-icon="inline-start" />
        Patient actions
      </DropdownMenuButton>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Maria Gonzalez</DropdownMenuLabel>
          <DropdownMenuItem>View chart</DropdownMenuItem>
          <DropdownMenuItem>Schedule follow-up</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="danger">
            <ArchiveIcon />
            Archive patient
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const Variants: Story = {
  render: () => <DropdownVariantsPreview />,
  parameters: { layout: "padded" },
};

export const MenuStates: Story = {
  render: () => <DropdownStatesPreview />,
  parameters: { layout: "padded" },
};

export const ContentPatterns: Story = {
  render: () => <DropdownContentPatternsPreview />,
  parameters: { layout: "padded" },
};

export const DangerousActions: Story = {
  render: () => (
    <div className="flex min-h-64 items-start justify-center">
      <DropdownDangerActionsPreview />
    </div>
  ),
  parameters: { layout: "padded" },
};

export const HealthcareExamples: Story = {
  render: () => <DropdownHealthcareExamplesPreview />,
  parameters: { layout: "padded" },
};

export const KeyboardNavigation: Story = {
  render: () => (
    <DropdownMenu defaultOpen>
      <DropdownMenuButton size="sm">Keyboard actions</DropdownMenuButton>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Use Arrow keys, Home, End, and Escape</DropdownMenuLabel>
          <DropdownMenuItem>First action</DropdownMenuItem>
          <DropdownMenuItem disabled>Unavailable action</DropdownMenuItem>
          <DropdownMenuItem>Last action</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
