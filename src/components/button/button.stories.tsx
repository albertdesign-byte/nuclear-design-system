import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SearchIcon } from "lucide-react";

import {
  ButtonGroupsPreview,
  ButtonIconPatternsPreview,
  ButtonPaddingComparisonPreview,
  ButtonStatesPreview,
  DangerButtonStatesPreview,
  HealthcareButtonExamplesPreview,
} from "@/components/docs/components/button/button-preview-blocks";

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
          "Official Nuclear DS action control for healthcare and enterprise workflows. Includes semantic danger intent, 6px icon spacing, action groups, and async states.",
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
    children: "Save patient",
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

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-[var(--space-inline-md)]">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button intent="danger">Danger</Button>
    </div>
  ),
};

export const HorizontalPaddingReview: Story = {
  render: () => <ButtonPaddingComparisonPreview />,
  parameters: {
    docs: {
      description: {
        story:
          "Current versus adopted horizontal padding: 8/8/12/12/16px becomes 12/12/16/20/24px.",
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
      {(["icon-sm", "icon-md", "icon-lg", "icon-xl", "icon-xxl"] as const).map(
        (size) => (
          <Button key={size} size={size} aria-label={`Search · ${size}`}>
            <SearchIcon />
          </Button>
        )
      )}
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => <ButtonIconPatternsPreview />,
  parameters: {
    docs: {
      description: {
        story:
          "Leading and trailing icons use the official 6px gap. Icon-only buttons require an accessible name.",
      },
    },
  },
};

export const DangerIntent: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--space-inline-sm)]">
      <Button intent="danger">Delete patient</Button>
      <Button intent="danger">Delete study</Button>
      <Button intent="danger">Remove user</Button>
      <Button intent="danger">Archive record</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Danger is soft by default: error background, border, and text—never a solid-red resting state.",
      },
    },
  },
};

export const DangerStates: Story = {
  render: () => <DangerButtonStatesPreview />,
};

export const ButtonGroups: Story = {
  render: () => <ButtonGroupsPreview />,
  parameters: {
    docs: {
      description: {
        story:
          "Standard order is Secondary then Primary. Destructive order is Cancel then Danger.",
      },
    },
  },
};

export const InteractionStates: Story = {
  render: () => <ButtonStatesPreview />,
  parameters: {
    docs: {
      description: {
        story:
          "Default, hover, focus, active, disabled, and loading states using shared semantic tokens.",
      },
    },
  },
};

export const HealthcareExamples: Story = {
  render: () => <HealthcareButtonExamplesPreview />,
};

export const Loading: Story = {
  args: {
    loading: true,
    loadingLabel: "Saving patient",
    children: "Save patient",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Save patient",
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
