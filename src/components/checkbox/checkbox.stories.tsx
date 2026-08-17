"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { checkboxStateClassName } from "@/stories/shared/interaction-state-classes";
import {
  Checkbox,
  CheckboxField,
  CheckboxGroupField,
  checkboxControlClassName,
} from "@/components/checkbox";
import {
  CheckboxCheckedPreview,
  CheckboxDefaultPreview,
  CheckboxDisabledPreview,
  CheckboxErrorPreview,
  CheckboxIndeterminatePreview,
  CheckboxMultipleSelectionPreview,
  CheckboxPreferencesGroupPreview,
  CheckboxSettingsGroupPreview,
  CheckboxWithDescriptionPreview,
  CheckboxWithHelperTextPreview,
  CheckboxWithLongLabelPreview,
} from "@/components/docs/components/checkbox/checkbox-preview-blocks";

import { componentParameters } from "../../../.storybook/story-meta";

const meta = {
  title: "Components/Checkbox",
  component: CheckboxField,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Accessible binary selection with CheckboxField (labeled, 44×44px touch target) and CheckboxGroupField for multi-select settings.",
      },
    },
  },
  args: {
    id: "story-checkbox",
    label: "Share results with my provider",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CheckboxField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => <CheckboxDefaultPreview />,
};

export const Default: Story = {
  render: () => <CheckboxDefaultPreview />,
};

export const Checked: Story = {
  render: () => <CheckboxCheckedPreview />,
};

export const Disabled: Story = {
  render: () => <CheckboxDisabledPreview />,
};

export const Error: Story = {
  render: () => <CheckboxErrorPreview />,
};

export const Indeterminate: Story = {
  render: () => <CheckboxIndeterminatePreview />,
};

export const WithLabel: Story = {
  render: () => <CheckboxDefaultPreview />,
};

export const WithDescription: Story = {
  render: () => <CheckboxWithDescriptionPreview />,
};

export const WithLongLabel: Story = {
  render: () => <CheckboxWithLongLabelPreview />,
};

export const WithHelperText: Story = {
  render: () => <CheckboxWithHelperTextPreview />,
};

export const MultipleSelectionGroup: Story = {
  render: () => <CheckboxMultipleSelectionPreview />,
};

export const SettingsGroup: Story = {
  render: () => <CheckboxSettingsGroupPreview />,
};

export const PreferencesGroup: Story = {
  render: () => <CheckboxPreferencesGroupPreview />,
};

const visualStates = [
  "Default",
  "Hover",
  "Focus",
  "Checked",
  "Disabled",
  "Error",
  "Indeterminate",
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
          <div className="flex min-h-[var(--space-touch-target-min)] items-center">
            {state === "Disabled" ? (
              <CheckboxField
                id={`state-disabled`}
                disabled
                defaultChecked
                label="SMS reminders"
              />
            ) : state === "Error" ? (
              <CheckboxField
                id={`state-error`}
                label="Accept consent"
                error="Required"
              />
            ) : state === "Indeterminate" ? (
              <CheckboxField id={`state-indeterminate`} indeterminate label="Select all studies" />
            ) : (
              <CheckboxField
                id={`state-${state.toLowerCase()}`}
                label={state === "Checked" ? "Insurance on file" : "Share results"}
                defaultChecked={state === "Checked"}
                checkboxClassName={checkboxStateClassName[state]}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const PrimitiveWithTouchTarget: Story = {
  render: () => (
    <label className="inline-flex cursor-pointer items-center">
      <span className={checkboxControlClassName}>
        <Checkbox aria-label="Icon-only checkbox" />
      </span>
    </label>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Icon-only checkboxes use a native label for toggling. The 44×44px hit area is expanded invisibly via a pseudo-element on the control.",
      },
    },
  },
};

export const CheckboxGroupFieldStory: Story = {
  name: "Checkbox Group",
  render: () => (
    <CheckboxGroupField
      id="story-group"
      legend="Notification preferences"
      options={[
        { value: "email", label: "Email reminders", defaultChecked: true },
        { value: "sms", label: "SMS reminders" },
      ]}
    />
  ),
};
