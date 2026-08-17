"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import {
  EmptyWorklistTable,
  exceptionsColumns,
  PopulatedWorklistTable,
} from "./worklist-table-previews";

const meta = {
  title: "Patterns/Worklist table",
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Operational lists with a title, columns, optional sort, row links, and a count. Compose DataTable. Empty tables keep headers and a 0 footer — do not add an illustrated empty.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Populated: Story = {
  name: "Populated with sort",
  render: () => <PopulatedWorklistTable />,
};

export const Empty: Story = {
  render: () => (
    <EmptyWorklistTable
      title="My exceptions"
      columns={[...exceptionsColumns]}
    />
  ),
};
