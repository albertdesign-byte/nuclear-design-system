"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { inputVisualStateClassName } from "@/stories/shared/interaction-state-classes";
import { InputButtonGroup } from "@/components/input-button-group";
import {
  Input,
  InputField,
} from "@/components/input";
import {
  InputDefaultPreview,
  InputDisabledPreview,
  InputEndIconPreview,
  InputErrorPreview,
  InputHelperTextPreview,
  InputLoadingPreview,
  InputPrefixCurrencyPreview,
  InputPrefixMrnPreview,
  InputReadOnlyPreview,
  InputRequiredPreview,
  InputSearchPreview,
  InputStartIconPreview,
  InputSuffixKgPreview,
  InputUnitHeightPreview,
  InputUnitWeightPreview,
} from "@/components/docs/components/input/input-preview-blocks";

import { componentParameters, fullWidthParameters } from "../../../.storybook/story-meta";

const meta = {
  title: "Components/Input",
  component: InputField,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Single-line text field with InputField (labeled), InputGroup (prefix/suffix/icons), and clinical unit patterns for Medmo healthcare flows.",
      },
    },
  },
  args: {
    id: "story-input",
    label: "Patient name",
    placeholder: "Enter full legal name",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => <InputDefaultPreview />,
};

export const Default: Story = {
  render: () => <InputDefaultPreview />,
};

export const Required: Story = {
  render: () => <InputRequiredPreview />,
};

export const Disabled: Story = {
  render: () => <InputDisabledPreview />,
};

export const Error: Story = {
  render: () => <InputErrorPreview />,
};

export const ReadOnly: Story = {
  render: () => <InputReadOnlyPreview />,
};

export const Loading: Story = {
  render: () => <InputLoadingPreview />,
};

export const WithHelperText: Story = {
  render: () => <InputHelperTextPreview />,
};

export const SearchInput: Story = {
  render: () => <InputSearchPreview />,
};

export const StartIcon: Story = {
  render: () => <InputStartIconPreview />,
};

export const EndIcon: Story = {
  render: () => <InputEndIconPreview />,
};

export const PrefixCurrency: Story = {
  render: () => <InputPrefixCurrencyPreview />,
};

export const PrefixMrn: Story = {
  render: () => <InputPrefixMrnPreview />,
};

export const SuffixUnits: Story = {
  render: () => <InputSuffixKgPreview />,
};

export const UnitWeight: Story = {
  render: () => <InputUnitWeightPreview />,
};

export const UnitHeight: Story = {
  render: () => <InputUnitHeightPreview />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-[var(--space-stack-md)]">
      <InputField id="input-size-sm" label="Small" size="sm" defaultValue="Small field" />
      <InputField id="input-size-md" label="Medium" size="md" defaultValue="Medium field" />
      <InputField id="input-size-lg" label="Large" size="lg" defaultValue="Large field" />
    </div>
  ),
};

const visualStates = [
  "Default",
  "Hover",
  "Focus",
  "Filled",
  "Disabled",
  "Error",
  "ReadOnly",
] as const;

export const InteractionStates: Story = {
  render: () => (
    <div className="grid gap-[var(--space-stack-md)] sm:grid-cols-2 xl:grid-cols-4">
      {visualStates.map((state) => (
        <div
          key={state}
          className="flex flex-col gap-[var(--space-stack-sm)] rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-inline-md)]"
        >
          <span className="text-[length:var(--text-caption-size)] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
            {state}
          </span>
          <div className="flex min-h-[var(--spacing-32)] items-center">
            {state === "Disabled" ? (
              <InputField id={`state-disabled`} label="Patient name" disabled defaultValue="Elena Morales" />
            ) : state === "Error" ? (
              <InputField id={`state-error`} label="Email" invalid defaultValue="not-an-email" error="Invalid email" />
            ) : state === "ReadOnly" ? (
              <InputField id={`state-readonly`} label="MRN" readOnly defaultValue="MRN-104829" />
            ) : (
              <InputField
                id={`state-${state.toLowerCase()}`}
                label="Patient name"
                defaultValue={state === "Filled" || state === "Focus" ? "Elena Morales" : undefined}
                placeholder={state === "Default" || state === "Hover" ? "Enter full legal name" : undefined}
                inputClassName={inputVisualStateClassName[state]}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const WithButtonGroup: Story = {
  render: () => <InputButtonGroup placeholder="Search by MRN or patient name" />,
  parameters: {
    ...fullWidthParameters,
    docs: {
      description: {
        story: "Search toolbars may omit a visible label when the placeholder and context are sufficient.",
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
};

export const PrimitiveInput: Story = {
  render: () => <Input placeholder="Primitive input" aria-label="Primitive input" />,
};
