import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { cn } from "@/lib/utils";
import { textLinkStateClassName } from "@/stories/shared/interaction-state-classes";

import { InteractionStateGrid } from "../../../.storybook/interaction-state-grid";
import { componentParameters } from "../../../.storybook/story-meta";

import { TextLink } from "./text-link";

const meta = {
  title: "Components/Text Link",
  component: TextLink,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Inline navigation link for tables and body copy. Supports a disabled state via aria-disabled.",
      },
    },
  },
  args: {
    href: "/patients/123",
    children: "View patient record",
    disabled: false,
  },
} satisfies Meta<typeof TextLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  render: (args) => (
    <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
      Referral submitted — <TextLink {...args} /> for details.
    </p>
  ),
};

export const Disabled: Story = {
  render: () => (
    <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
      Record locked —{" "}
      <TextLink href="/patients/123" disabled>
        open chart
      </TextLink>{" "}
      is unavailable.
    </p>
  ),
};

export const InteractionStates: Story = {
  render: () => (
    <InteractionStateGrid
      disabled={
        <TextLink href="/patients/123" disabled>
          View record
        </TextLink>
      }
    >
      {(state) => (
        <TextLink
          href="/patients/123"
          className={cn(textLinkStateClassName[state])}
        >
          View record
        </TextLink>
      )}
    </InteractionStateGrid>
  ),
};
