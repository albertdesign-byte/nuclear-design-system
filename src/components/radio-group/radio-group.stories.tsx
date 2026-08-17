"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { radioStateClassName } from "@/stories/shared/interaction-state-classes";
import {
  RadioField,
  RadioGroup,
  RadioGroupField,
  RadioGroupItem,
  radioControlClassName,
} from "@/components/radio-group";
import {
  RadioDefaultPreview,
  RadioDisabledPreview,
  RadioErrorPreview,
  RadioPreferencesSelectionPreview,
  RadioSelectedDisabledPreview,
  RadioSelectedPreview,
  RadioSettingsSelectionPreview,
  RadioSimpleSelectionPreview,
  RadioWithDescriptionPreview,
  RadioWithLongLabelPreview,
} from "@/components/docs/components/radio-group/radio-preview-blocks";

import { componentParameters } from "../../../.storybook/story-meta";

const meta = {
  title: "Components/Radio Group",
  component: RadioGroupField,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Accessible single-select control with RadioField (labeled, 44×44px touch target) and RadioGroupField for exclusive option sets.",
      },
    },
  },
  args: {
    id: "story-radio-group",
    legend: "Visit type",
    options: [
      { value: "in-person", label: "In-person" },
      { value: "telemedicine", label: "Telemedicine" },
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RadioGroupField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => <RadioDefaultPreview />,
};

export const Default: Story = {
  render: () => <RadioDefaultPreview />,
};

export const Selected: Story = {
  render: () => <RadioSelectedPreview />,
};

export const Disabled: Story = {
  render: () => <RadioDisabledPreview />,
};

export const SelectedDisabled: Story = {
  render: () => <RadioSelectedDisabledPreview />,
};

export const Error: Story = {
  render: () => <RadioErrorPreview />,
};

export const WithLabel: Story = {
  render: () => <RadioDefaultPreview />,
};

export const WithDescription: Story = {
  render: () => <RadioWithDescriptionPreview />,
};

export const WithLongLabel: Story = {
  render: () => <RadioWithLongLabelPreview />,
};

export const SimpleSelectionGroup: Story = {
  render: () => <RadioSimpleSelectionPreview />,
};

export const SettingsSelectionGroup: Story = {
  render: () => <RadioSettingsSelectionPreview />,
};

export const PreferencesSelectionGroup: Story = {
  render: () => <RadioPreferencesSelectionPreview />,
};

const visualStates = [
  "Default",
  "Hover",
  "Focus",
  "Selected",
  "Disabled",
  "SelectedDisabled",
  "Error",
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
            {state === "SelectedDisabled" ? "Selected + Disabled" : state}
          </span>
          <div className="flex min-h-[var(--space-touch-target-min)] items-center">
            {state === "Disabled" ? (
              <RadioGroup defaultValue="in-person" disabled>
                <RadioField value="in-person" label="In-person" />
              </RadioGroup>
            ) : state === "SelectedDisabled" ? (
              <RadioGroup defaultValue="telemedicine" disabled>
                <RadioField value="telemedicine" label="Telemedicine" />
              </RadioGroup>
            ) : state === "Error" ? (
              <RadioGroupField
                id={`state-${state.toLowerCase()}`}
                legend="Visit type"
                options={[{ value: "in-person", label: "In-person" }]}
                error="Required"
              />
            ) : (
              <RadioGroup defaultValue={state === "Selected" ? "telemedicine" : "in-person"}>
                <RadioField
                  value={state === "Selected" ? "telemedicine" : "in-person"}
                  label={state === "Selected" ? "Telemedicine" : "In-person"}
                  itemClassName={radioStateClassName[state]}
                />
              </RadioGroup>
            )}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const PrimitiveWithTouchTarget: Story = {
  render: () => (
    <RadioGroup defaultValue="preview">
      <label className="inline-flex min-h-[var(--space-touch-target-min)] cursor-pointer items-center">
        <span className={radioControlClassName}>
          <RadioGroupItem value="preview" aria-label="Icon-only radio" />
        </span>
      </label>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Icon-only radios use a native label for selection. The 44×44px hit area is expanded invisibly via a pseudo-element on the control.",
      },
    },
  },
};

export const RadioGroupFieldStory: Story = {
  name: "Radio Group",
  render: () => (
    <RadioGroupField
      id="story-group"
      legend="Visit type"
      defaultValue="in-person"
      options={[
        { value: "in-person", label: "In-person" },
        { value: "telemedicine", label: "Telemedicine" },
        { value: "home", label: "Home visit" },
      ]}
    />
  ),
};
