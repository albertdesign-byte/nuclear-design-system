"use client";

import { cn } from "@/lib/utils";

import {
  tableBodyClassName,
  tableCaptionClassName,
  tableCellClassName,
  tableClassName,
  tableContainerClassName,
  tableFooterClassName,
  tableHeadClassName,
  tableHeaderClassName,
  tableRowClassName,
} from "./table.styles";
import type {
  TableBodyProps,
  TableCaptionProps,
  TableCellProps,
  TableFooterProps,
  TableHeadProps,
  TableHeaderProps,
  TableProps,
  TableRowProps,
} from "./table.types";

function Table({ className, ...props }: TableProps) {
  return (
    <div data-slot="table-container" className={tableContainerClassName}>
      <table
        data-slot="table"
        className={cn(tableClassName, className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: TableHeaderProps) {
  return (
    <thead
      data-slot="table-header"
      className={cn(tableHeaderClassName, className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: TableBodyProps) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(tableBodyClassName, className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: TableFooterProps) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(tableFooterClassName, className)}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: TableRowProps) {
  return (
    <tr
      data-slot="table-row"
      className={cn(tableRowClassName, className)}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: TableHeadProps) {
  return (
    <th
      data-slot="table-head"
      className={cn(tableHeadClassName, className)}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: TableCellProps) {
  return (
    <td
      data-slot="table-cell"
      className={cn(tableCellClassName, className)}
      {...props}
    />
  );
}

function TableCaption({ className, ...props }: TableCaptionProps) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(tableCaptionClassName, className)}
      {...props}
    />
  );
}

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
