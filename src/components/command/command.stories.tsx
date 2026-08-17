"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CommandActionsPreview } from "@/components/docs/components/global-search-bar/search-command-preview-blocks";
import { cn } from "@/lib/utils";
import { inputStateClassName, menuItemStateClassName } from "@/stories/shared/interaction-state-classes";

import { InteractionStateGrid } from "../../../.storybook/interaction-state-grid";
import { componentParameters } from "../../../.storybook/story-meta";

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  commandClassName,
  commandItemClassName,
} from "./";

const meta = {
  title: "Components/Command",
  component: Command,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Action and navigation palette for quick actions, keyboard shortcuts, and global navigation. Use Global Search Bar to find healthcare entities.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Command>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => <CommandActionsPreview />,
};

export const Default: Story = {
  render: () => (
    <Command className={commandClassName}>
      <CommandInput placeholder="Type a command…" />
      <CommandList>
        <CommandGroup heading="Actions">
          <CommandItem>New referral</CommandItem>
          <CommandItem disabled>Export report</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const DisabledInput: Story = {
  render: () => (
    <Command className={commandClassName}>
      <CommandInput disabled placeholder="Search unavailable" />
    </Command>
  ),
};

export const InteractionStates: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--space-stack-lg)]">
      <InteractionStateGrid
        disabled={<CommandInput disabled placeholder="Search unavailable" />}
      >
        {(state) => (
          <CommandInput
            placeholder="Type a command…"
            className={cn(inputStateClassName[state])}
          />
        )}
      </InteractionStateGrid>
      <InteractionStateGrid
        disabled={
          <div className={cn(commandClassName, "w-full")}>
            <div
              className={cn(commandItemClassName, "data-[disabled=true]")}
              data-disabled
            >
              Export (locked)
            </div>
          </div>
        }
      >
        {(state) => (
          <div className={cn(commandClassName, "w-full")}>
            <div className={cn(commandItemClassName, menuItemStateClassName[state])}>
              New referral
            </div>
          </div>
        )}
      </InteractionStateGrid>
    </div>
  ),
};
