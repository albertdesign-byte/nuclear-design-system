"use client";

import {
  ArrowDownWideNarrowIcon,
  ArrowUpWideNarrowIcon,
  ChevronDownIcon,
  XIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { cn } from "@/lib/utils";

import { TextLink } from "@/components/text-link";

import {
  DataTableColGroup,
  DataTableProvider,
  DataTableRoot,
  useDataTable,
  useDataTableColumn,
  useDataTableOptional,
} from "./data-table-context";
import {
  dataTableCellClassName,
  dataTableCellContentClassName,
  dataTableClassName,
  dataTableHeadCellClassName,
  dataTableHeadContentClassName,
  dataTableHeadLabelClassName,
  dataTableHeadMenuTriggerClassName,
  dataTableMenuContentClassName,
  dataTablePanelClassName,
  dataTablePanelContentClassName,
  dataTablePanelHeaderClassName,
  dataTablePanelToolbarClassName,
  dataTableOperationalBodyClassName,
  dataTableOperationalHeadCellClassName,
  dataTableOperationalHeadContentClassName,
  dataTableOperationalHeadMenuTriggerClassName,
  dataTableOperationalResizeHandleClassName,
  dataTableResizeHandleClassName,
  dataTableFilterCellClassName,
} from "./data-table.styles";
import type {
  DataTableCellProps,
  DataTableColumnHeadProps,
  DataTableFilterCellProps,
  DataTableMenuHeadProps,
  DataTableProps,
} from "./data-table.types";

export type { DataTableVariant, SortDirection } from "./data-table.types";

function DataTableColumnResizeHandle({
  columnId,
  enabled = true,
}: {
  columnId: string;
  enabled?: boolean;
}) {
  const { canResize, onResizeStart } = useDataTableColumn(columnId);
  const { variant } = useDataTable();

  if (!enabled || !canResize) {
    return null;
  }

  return (
    <span
      role="separator"
      aria-orientation="vertical"
      aria-label="Resize column"
      className={cn(
        dataTableResizeHandleClassName,
        variant === "operational" && dataTableOperationalResizeHandleClassName
      )}
      onMouseDown={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onResizeStart(event.clientX);
      }}
    />
  );
}

function DataTableColumnHead({
  columnId,
  children,
  className,
  defaultWidth,
  resizable = true,
  menu,
}: DataTableColumnHeadProps & {
  menu?: React.ReactNode;
}) {
  const { hidden } = useDataTableColumn(columnId, defaultWidth);
  const { variant } = useDataTable();
  const isOperational = variant === "operational";

  if (hidden) {
    return (
      <TableHead className="hidden p-0" aria-hidden>
        {children}
      </TableHead>
    );
  }

  return (
    <TableHead
      className={cn(
        dataTableHeadCellClassName,
        isOperational && dataTableOperationalHeadCellClassName,
        className
      )}
    >
      <div
        className={cn(
          dataTableHeadContentClassName,
          isOperational && dataTableOperationalHeadContentClassName
        )}
      >
        <span className={dataTableHeadLabelClassName}>{children}</span>
        {menu}
      </div>
      <DataTableColumnResizeHandle columnId={columnId} enabled={resizable} />
    </TableHead>
  );
}

export function DataTable({
  children,
  className,
  variant = "default",
  title,
  toolbar,
}: DataTableProps) {
  const table = (
    <DataTableProvider variant={variant}>
      <DataTableRoot className={cn("w-full", className)}>
        <table data-slot="table" className={dataTableClassName}>
          <DataTableColGroup />
          {children}
        </table>
      </DataTableRoot>
    </DataTableProvider>
  );

  if (!title) {
    return table;
  }

  return (
    <section data-slot="data-table-panel" className={dataTablePanelClassName}>
      <header className={dataTablePanelHeaderClassName}>{title}</header>
      {toolbar ? <div className={dataTablePanelToolbarClassName}>{toolbar}</div> : null}
      <div className={dataTablePanelContentClassName}>{table}</div>
    </section>
  );
}

export function DataTableHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <TableHeader className={className}>{children}</TableHeader>;
}

export function DataTableFilterRow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <TableRow className={cn("hover:bg-transparent", className)}>{children}</TableRow>
  );
}

export function DataTableBody({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { variant } = useDataTable();

  return (
    <TableBody
      className={cn(
        variant === "operational" && dataTableOperationalBodyClassName,
        className
      )}
    >
      {children}
    </TableBody>
  );
}

export function DataTableRow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <TableRow className={className}>{children}</TableRow>;
}

export function DataTableHead({
  columnId,
  children,
  className,
  defaultWidth,
  resizable = true,
}: DataTableColumnHeadProps) {
  return (
    <DataTableColumnHead
      columnId={columnId}
      className={className}
      defaultWidth={defaultWidth}
      resizable={resizable}
    >
      {children}
    </DataTableColumnHead>
  );
}

export function DataTableMenuHead({
  columnId,
  children,
  className,
  defaultWidth,
  resizable = true,
  sortDirection = null,
  onSortAsc,
  onSortDesc,
  onHide,
}: DataTableMenuHeadProps) {
  const { hideColumn, variant } = useDataTable();
  const isOperational = variant === "operational";

  const menu = (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            type="button"
            aria-label={`Open ${String(children)} column menu`}
            className={cn(
              dataTableHeadMenuTriggerClassName,
              isOperational && dataTableOperationalHeadMenuTriggerClassName
            )}
          />
        }
      >
        <ChevronDownIcon
          className="size-3.5"
          aria-hidden
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className={dataTableMenuContentClassName}>
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={onSortAsc}
            className={sortDirection === "asc" ? "bg-[var(--color-surface-hover)]" : undefined}
          >
            <ArrowUpWideNarrowIcon className="size-4" aria-hidden />
            Sort Ascending
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={onSortDesc}
            className={sortDirection === "desc" ? "bg-[var(--color-surface-hover)]" : undefined}
          >
            <ArrowDownWideNarrowIcon className="size-4" aria-hidden />
            Sort Descending
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              hideColumn?.(columnId);
              onHide?.();
            }}
          >
            <XIcon className="size-4" aria-hidden />
            Hide Column
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <DataTableColumnHead
      columnId={columnId}
      className={className}
      defaultWidth={defaultWidth}
      resizable={resizable}
      menu={menu}
    >
      {children}
    </DataTableColumnHead>
  );
}

/** @deprecated Prefer DataTableMenuHead for column menus or DataTableHead for plain headers. */
export function SortableTableHead({
  columnId,
  children,
  sortDirection = null,
  onSort,
  onSortAsc,
  onSortDesc,
  onHide,
  className,
  defaultWidth,
  resizable,
}: DataTableMenuHeadProps & {
  columnId: string;
  onSort?: () => void;
}) {
  return (
    <DataTableMenuHead
      columnId={columnId}
      sortDirection={sortDirection}
      onSortAsc={onSortAsc ?? onSort}
      onSortDesc={onSortDesc ?? onSort}
      onHide={onHide}
      className={className}
      defaultWidth={defaultWidth}
      resizable={resizable}
    >
      {children}
    </DataTableMenuHead>
  );
}

function useHiddenColumnClassName(columnId?: string) {
  const context = useDataTableOptional();
  const hidden = columnId ? context?.isColumnHidden(columnId) : false;
  return hidden ? "hidden" : undefined;
}

export function DataTableCell({
  columnId,
  className,
  ...props
}: DataTableCellProps) {
  const hiddenClassName = useHiddenColumnClassName(columnId);

  return (
    <TableCell
      className={cn(dataTableCellClassName, hiddenClassName, className)}
      aria-hidden={hiddenClassName ? true : undefined}
      title={typeof props.children === "string" ? props.children : undefined}
      {...props}
    />
  );
}

export function DataTableLinkCell({
  href,
  children,
  className,
  columnId,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  columnId?: string;
}) {
  const hiddenClassName = useHiddenColumnClassName(columnId);

  return (
    <TableCell
      className={cn(dataTableCellClassName, hiddenClassName, className)}
      aria-hidden={hiddenClassName ? true : undefined}
      title={typeof children === "string" ? children : undefined}
    >
      <span className={dataTableCellContentClassName}>
        <TextLink href={href}>{children}</TextLink>
      </span>
    </TableCell>
  );
}

export function DataTableFilterCell({
  columnId,
  children,
  className,
}: DataTableFilterCellProps) {
  const hiddenClassName = useHiddenColumnClassName(columnId);

  return (
    <TableHead
      className={cn(dataTableFilterCellClassName, hiddenClassName, className)}
      aria-hidden={hiddenClassName ? true : undefined}
    >
      {children}
    </TableHead>
  );
}

export function DataTableRowCountFooter({
  count,
  label = "total rows",
  className,
}: {
  count: number;
  label?: string;
  className?: string;
}) {
  return (
    <TableFooter className={className}>
      <TableRow className="hover:bg-transparent">
        <TableCell
          colSpan={100}
          className="py-[var(--space-stack-sm)] text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]"
        >
          {label}: {count}
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
