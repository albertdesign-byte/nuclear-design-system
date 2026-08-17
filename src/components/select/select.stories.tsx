"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  AsyncLoadingPreview,
  GroupedFacilitiesPreview,
  MultiSelectRemovablePreview,
  MultiSelectStudiesPreview,
  MultiSelectTagsPreview,
  SearchableFacilitiesPreview,
  SearchablePatientsPreview,
  SearchableProvidersPreview,
  SearchableStudiesPreview,
  SelectDefaultPreview,
  SelectDisabledPreview,
  SelectErrorPreview,
  SelectHelperTextPreview,
  SelectLoadingPreview,
  SelectReadOnlyPreview,
  SelectRequiredPreview,
  patientStatusOptions,
} from "@/components/docs/components/select/select-preview-blocks";
import { SelectField } from "@/components/select";
import { selectVisualStateClassName } from "@/stories/shared/interaction-state-classes";

import { componentParameters } from "../../../.storybook/story-meta";

const meta = {
  title: "Components/Select",
  component: SelectField,
  tags: ["autodocs"],
  parameters: {
    ...componentParameters,
    docs: {
      ...componentParameters.docs,
      description: {
        component:
          "Accessible selection patterns with visible labels: SelectField, SearchableSelectField, and MultiSelectField.",
      },
    },
  },
  args: {
    id: "story-select",
    label: "Patient status",
    options: patientStatusOptions,
    placeholder: "Select status",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SelectField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => <SelectDefaultPreview />,
};

export const Default: Story = {
  render: () => <SelectDefaultPreview />,
};

export const Required: Story = {
  render: () => <SelectRequiredPreview />,
};

export const Disabled: Story = {
  render: () => <SelectDisabledPreview />,
};

export const Error: Story = {
  render: () => <SelectErrorPreview />,
};

export const ReadOnly: Story = {
  render: () => <SelectReadOnlyPreview />,
};

export const Loading: Story = {
  render: () => <SelectLoadingPreview />,
};

export const WithHelperText: Story = {
  render: () => <SelectHelperTextPreview />,
};

export const SearchablePatients: Story = {
  render: () => <SearchablePatientsPreview />,
};

export const SearchableProviders: Story = {
  render: () => <SearchableProvidersPreview />,
};

export const SearchableFacilities: Story = {
  render: () => <SearchableFacilitiesPreview />,
};

export const SearchableStudies: Story = {
  render: () => <SearchableStudiesPreview />,
};

export const MultipleSelection: Story = {
  render: () => <MultiSelectStudiesPreview />,
};

export const Tags: Story = {
  render: () => <MultiSelectTagsPreview />,
};

export const RemovableSelections: Story = {
  render: () => <MultiSelectRemovablePreview />,
};

export const GroupedOptions: Story = {
  render: () => <GroupedFacilitiesPreview />,
};

export const AsyncLoading: Story = {
  render: () => <AsyncLoadingPreview />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-[var(--space-stack-md)]">
      <SelectField id="select-size-sm" label="Small" size="sm" options={patientStatusOptions} />
      <SelectField id="select-size-md" label="Medium" size="md" options={patientStatusOptions} />
      <SelectField id="select-size-lg" label="Large" size="lg" options={patientStatusOptions} />
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
  "Loading",
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
          <SelectField
            id={`select-state-${state.toLowerCase()}`}
            label="Patient status"
            options={patientStatusOptions}
            defaultValue={state === "Filled" || state === "Disabled" ? "active" : undefined}
            disabled={state === "Disabled"}
            loading={state === "Loading"}
            error={state === "Error" ? "Select a patient status." : undefined}
            triggerClassName={
              state === "Disabled" || state === "Error" || state === "Loading"
                ? undefined
                : selectVisualStateClassName[state]
            }
          />
        </div>
      ))}
    </div>
  ),
};
