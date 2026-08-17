import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/components/button";
import {
  DataTable,
  DataTableBody,
  DataTableCell,
  DataTableHead,
  DataTableHeader,
  DataTableRow,
  DataTableRowCountFooter,
} from "@/components/data-table";
import { ScanSearchSection } from "@/components/examples/scan-search-section";
import { GlobalSearchBar } from "@/components/global-search-bar";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import {
  SearchResults,
  SearchResultsResults,
  SearchResultsSearch,
  SearchResultsToolbar,
} from "./search-results";

const genericItems = [
  { label: "Record 1001", value: "1001", group: "Records" },
  { label: "Record 1002", value: "1002", group: "Records" },
];

function ToolbarTitle({ children }: { children: string }) {
  return (
    <h2 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
      {children}
    </h2>
  );
}

const meta = {
  title: "Templates/SearchResults",
  component: SearchResults,
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Search results layout extracted from the MPF Scan Search tab: toolbar, search, and results slots. Nuclear owns structure. Products own copy, query logic, and the results table. Compose inside AppShell. No filters slot — the source screen has none.",
      },
    },
  },
} satisfies Meta<typeof SearchResults>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <SearchResults>
      <SearchResultsToolbar>
        <ToolbarTitle>Search records</ToolbarTitle>
        <Button variant="outline" className="shrink-0">
          Create new
        </Button>
      </SearchResultsToolbar>
      <SearchResultsSearch>
        <GlobalSearchBar
          placeholder="Search everything"
          items={genericItems}
          shortcutEnabled={false}
        />
      </SearchResultsSearch>
    </SearchResults>
  ),
};

export const PreSearch: Story = {
  render: () => (
    <SearchResults>
      <SearchResultsToolbar>
        <ToolbarTitle>Search records</ToolbarTitle>
        <Button variant="outline" className="shrink-0">
          Create new
        </Button>
      </SearchResultsToolbar>
      <SearchResultsSearch>
        <GlobalSearchBar
          placeholder="Search everything"
          items={genericItems}
          shortcutEnabled={false}
        />
      </SearchResultsSearch>
    </SearchResults>
  ),
};

export const WithResults: Story = {
  render: () => (
    <SearchResults>
      <SearchResultsToolbar>
        <ToolbarTitle>Search records</ToolbarTitle>
        <Button variant="outline" className="shrink-0">
          Create new
        </Button>
      </SearchResultsToolbar>
      <SearchResultsSearch>
        <GlobalSearchBar
          placeholder="Search everything"
          items={genericItems}
          shortcutEnabled={false}
        />
      </SearchResultsSearch>
      <SearchResultsResults>
        <DataTable title="Search results">
          <DataTableHeader>
            <DataTableRow>
              <DataTableHead columnId="id">ID</DataTableHead>
              <DataTableHead columnId="name">Name</DataTableHead>
              <DataTableHead columnId="status">Status</DataTableHead>
            </DataTableRow>
          </DataTableHeader>
          <DataTableBody>
            <DataTableRow>
              <DataTableCell columnId="id">1001</DataTableCell>
              <DataTableCell columnId="name">Record one</DataTableCell>
              <DataTableCell columnId="status">Open</DataTableCell>
            </DataTableRow>
            <DataTableRow>
              <DataTableCell columnId="id">1002</DataTableCell>
              <DataTableCell columnId="name">Record two</DataTableCell>
              <DataTableCell columnId="status">Open</DataTableCell>
            </DataTableRow>
          </DataTableBody>
          <DataTableRowCountFooter count={2} />
        </DataTable>
      </SearchResultsResults>
    </SearchResults>
  ),
};

export const SourceScreen: Story = {
  name: "Source screen (Scan Search)",
  render: () => <ScanSearchSection />,
};
