import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/components/button";
import { GlobalSearchBar } from "@/components/global-search-bar";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import { AppHeader } from "./app-header";

const meta = {
  title: "Components/App Header",
  component: AppHeader,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Application header with title, optional search slot, and trailing actions.",
      },
    },
  },
  argTypes: {
    title: { control: "text" },
  },
  args: {
    title: "Dashboard",
  },
} satisfies Meta<typeof AppHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: { title: "Dashboard" },
};

export const WithSearch: Story = {
  args: {
    title: "Dashboard",
    search: <GlobalSearchBar className="max-w-[16rem]" />,
  },
};

export const WithActions: Story = {
  args: {
    title: "Patients",
    actions: (
      <Button size="sm" variant="outline">
        Export
      </Button>
    ),
  },
};
