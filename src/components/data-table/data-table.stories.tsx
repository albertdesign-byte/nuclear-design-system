"use client";

import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import { Input } from "@/components/input";

import {
  DataTable,
  DataTableBody,
  DataTableCell,
  DataTableFilterCell,
  DataTableFilterRow,
  DataTableHead,
  DataTableHeader,
  DataTableLinkCell,
  DataTableMenuHead,
  DataTableRow,
  DataTableRowCountFooter,
} from "./data-table";

const rows = [
  { srid: "SRID-1001", patient: "Elena Morales", agent: "Jose Nevado", stage: "Requested" },
  { srid: "SRID-1002", patient: "Carlos Ruiz", agent: "Jose Nevado", stage: "Qualified" },
  { srid: "SRID-1003", patient: "Ana Vega", agent: "Jose Nevado", stage: "Requested" },
];

const meta = {
  title: "Components/Data Table",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Interactive table with sorting, a column filter row, selection, and operational row actions.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "operational"],
    },
    title: { control: "text" },
  },
  args: {
    variant: "default",
    title: "My active scans",
    children: <div />,
  },
} satisfies Meta<typeof DataTable>;

export default meta;

type Story = StoryObj<typeof meta>;

function DataTableDemo(
  props: Pick<ComponentProps<typeof DataTable>, "variant" | "title">
) {
  const [sort, setSort] = useState<"asc" | "desc" | null>("asc");

  return (
    <DataTable {...props}>
      <DataTableHeader>
        <DataTableRow>
          <DataTableMenuHead
            columnId="srid"
            sortDirection={sort}
            onSortAsc={() => setSort("asc")}
            onSortDesc={() => setSort("desc")}
          >
            SRID
          </DataTableMenuHead>
          <DataTableHead columnId="patient">Patient</DataTableHead>
          <DataTableHead columnId="agent">Agent</DataTableHead>
          <DataTableHead columnId="stage">Stage</DataTableHead>
        </DataTableRow>
      </DataTableHeader>
      <DataTableBody>
        {rows.map((row) => (
          <DataTableRow key={row.srid}>
            <DataTableLinkCell columnId="srid" href="#">
              {row.srid}
            </DataTableLinkCell>
            <DataTableLinkCell columnId="patient" href="#">
              {row.patient}
            </DataTableLinkCell>
            <DataTableCell columnId="agent">{row.agent}</DataTableCell>
            <DataTableCell columnId="stage">{row.stage}</DataTableCell>
          </DataTableRow>
        ))}
      </DataTableBody>
      <DataTableRowCountFooter count={rows.length} />
    </DataTable>
  );
}

export const Playground: Story = {
  render: ({ variant, title }) => <DataTableDemo variant={variant} title={title} />,
};

export const Default: Story = {
  render: () => <DataTableDemo title="My active scans" />,
};

export const Operational: Story = {
  render: () => (
    <DataTableDemo variant="operational" title="Operational worklist" />
  ),
};

export const FilterRow: Story = {
  render: () => (
    <DataTable variant="operational">
      <DataTableHeader>
        <DataTableRow>
          <DataTableMenuHead columnId="srid">SRID</DataTableMenuHead>
          <DataTableHead columnId="patient">Patient</DataTableHead>
          <DataTableHead columnId="stage">Stage</DataTableHead>
        </DataTableRow>
        <DataTableFilterRow>
          <DataTableFilterCell columnId="srid">
            <Input size="sm" aria-label="Filter SRID" />
          </DataTableFilterCell>
          <DataTableFilterCell columnId="patient">
            <Input size="sm" aria-label="Filter Patient" />
          </DataTableFilterCell>
          <DataTableFilterCell columnId="stage">
            <Input size="sm" aria-label="Filter Stage" />
          </DataTableFilterCell>
        </DataTableFilterRow>
      </DataTableHeader>
      <DataTableBody>
        {rows.map((row) => (
          <DataTableRow key={row.srid}>
            <DataTableLinkCell columnId="srid" href="#">
              {row.srid}
            </DataTableLinkCell>
            <DataTableLinkCell columnId="patient" href="#">
              {row.patient}
            </DataTableLinkCell>
            <DataTableCell columnId="stage">{row.stage}</DataTableCell>
          </DataTableRow>
        ))}
      </DataTableBody>
    </DataTable>
  ),
};
