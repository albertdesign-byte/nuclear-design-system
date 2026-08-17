import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { componentParameters } from "../../../.storybook/story-meta";

import { ScrollArea } from "./scroll-area";

const items = Array.from({ length: 12 }, (_, index) => `Queue item ${index + 1}`);

const meta = {
  title: "Components/Scroll Area",
  component: ScrollArea,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Contained scrolling region for long lists, menus, and nested panels.",
      },
    },
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <ScrollArea className="h-40 w-64 rounded-[var(--radius-md)] border border-[var(--color-border-subtle)]">
      <div className="space-y-[var(--space-stack-sm)] p-[var(--space-card)]">
        {items.map((item) => (
          <p
            key={item}
            className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]"
          >
            {item}
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-32 w-56 rounded-[var(--radius-md)] border border-[var(--color-border-subtle)]">
      <div className="p-[var(--space-card)] text-[length:var(--text-body-small-size)]">
        {items.join(" · ")}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-64 rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] whitespace-nowrap">
      <div className="flex w-max gap-[var(--space-inline-sm)] p-[var(--space-card)]">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-[var(--radius-md)] bg-[var(--color-surface-muted)] px-[var(--space-inline-sm)] py-[var(--space-stack-xs)] text-[length:var(--text-caption-size)]"
          >
            {item}
          </span>
        ))}
      </div>
    </ScrollArea>
  ),
};
