import type { TableCellProps } from "@/components/table/table.types";

export type SortDirection = "asc" | "desc" | null;

export type DataTableVariant = "default" | "operational";

export type DataTableColumnRegistration = {
  id: string;
  defaultWidth?: number;
};

export type DataTableColumnHeadProps = {
  columnId: string;
  children: React.ReactNode;
  className?: string;
  /** Initial width as a percentage of the table. Columns always fill 100% total. */
  defaultWidth?: number;
  /** Show a drag handle to resize this column against the next visible column. */
  resizable?: boolean;
};

export type DataTableMenuHeadProps = DataTableColumnHeadProps & {
  sortDirection?: SortDirection;
  onSortAsc?: () => void;
  onSortDesc?: () => void;
  onHide?: () => void;
};

export type DataTableCellProps = TableCellProps & {
  columnId?: string;
};

export type DataTableFilterCellProps = {
  columnId: string;
  children?: React.ReactNode;
  className?: string;
};

export type DataTableProps = {
  children: React.ReactNode;
  className?: string;
  variant?: DataTableVariant;
  /** Renders the dashboard panel shell with title, muted background, and border. */
  title?: string;
  /** Optional slot between the panel title and table (e.g. search bar + actions). */
  toolbar?: React.ReactNode;
};
