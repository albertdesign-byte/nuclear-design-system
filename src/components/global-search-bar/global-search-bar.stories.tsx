import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  SearchAllEntitiesPreview,
  SearchFacilitiesPreview,
  SearchPatientsPreview,
  SearchStudiesPreview,
  patientSearchItems,
} from "@/components/docs/components/global-search-bar/search-command-preview-blocks";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import { GlobalSearchBar } from "./global-search-bar";

const meta = {
  title: "Components/Global Search Bar",
  component: GlobalSearchBar,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "The official Search composite for finding patients, studies, facilities, users, and records. Built from Command primitives but distinct from an action palette.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-24 w-full items-start justify-center p-[var(--space-inline-md)]">
        <Story />
      </div>
    ),
  ],
  args: {
    placeholder: "Search patients",
    items: patientSearchItems,
  },
} satisfies Meta<typeof GlobalSearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const SearchPatients: Story = {
  render: () => <SearchPatientsPreview />,
};

export const SearchStudies: Story = {
  render: () => <SearchStudiesPreview />,
};

export const SearchFacilities: Story = {
  render: () => <SearchFacilitiesPreview />,
};

export const SearchAllEntities: Story = {
  render: () => <SearchAllEntitiesPreview />,
};

export const WithoutShortcut: Story = {
  render: () => (
    <GlobalSearchBar
      placeholder="Search patients"
      items={patientSearchItems}
      shortcutEnabled={false}
    />
  ),
};
