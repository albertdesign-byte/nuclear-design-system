"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

import type { DataTableColumnRegistration, DataTableVariant } from "./data-table.types";

/** Minimum column width in pixels — keeps columns from collapsing into neighbors. */
export const DATA_TABLE_MIN_COLUMN_WIDTH_PX = 80;

type DataTableContextValue = {
  variant: DataTableVariant;
  registerColumn: (registration: DataTableColumnRegistration) => void;
  unregisterColumn: (id: string) => void;
  columnOrder: string[];
  columnWidths: Record<string, number>;
  hiddenColumns: Set<string>;
  hideColumn: (id: string) => void;
  isColumnHidden: (id: string) => boolean;
  canResizeColumn: (id: string) => boolean;
  startResize: (columnId: string, clientX: number) => void;
  isResizing: boolean;
  containerRef: RefObject<HTMLDivElement | null>;
};

const DataTableContext = createContext<DataTableContextValue | null>(null);

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function getMinColumnPercent(containerWidth: number) {
  const width = Math.max(containerWidth, 1);
  const minPercent = (DATA_TABLE_MIN_COLUMN_WIDTH_PX / width) * 100;
  // Never allow more than 40% min on very narrow containers.
  return Math.min(minPercent, 40);
}

function normalizeWidths(
  columnIds: string[],
  widths: Record<string, number>,
  minPercent: number
) {
  if (columnIds.length === 0) {
    return {};
  }

  const next: Record<string, number> = {};
  for (const id of columnIds) {
    next[id] = Math.max(minPercent, widths[id] ?? 0);
  }

  const sum = columnIds.reduce((total, id) => total + next[id], 0);
  if (sum <= 0) {
    const equal = 100 / columnIds.length;
    for (const id of columnIds) {
      next[id] = equal;
    }
    return next;
  }

  for (const id of columnIds) {
    next[id] = (next[id] / sum) * 100;
  }

  return next;
}

function buildInitialWidths(
  columnIds: string[],
  registrations: Map<string, DataTableColumnRegistration>,
  minPercent: number
) {
  const widths: Record<string, number> = {};
  let assigned = 0;
  const unset: string[] = [];

  for (const id of columnIds) {
    const defaultWidth = registrations.get(id)?.defaultWidth;
    if (defaultWidth !== undefined) {
      widths[id] = defaultWidth;
      assigned += defaultWidth;
    } else {
      unset.push(id);
    }
  }

  const remaining = Math.max(0, 100 - assigned);
  const share = unset.length > 0 ? remaining / unset.length : 0;
  for (const id of unset) {
    widths[id] = share;
  }

  return normalizeWidths(columnIds, widths, minPercent);
}

function redistributeHiddenColumn(
  columnIds: string[],
  widths: Record<string, number>,
  hiddenId: string,
  minPercent: number
) {
  const hiddenWidth = widths[hiddenId] ?? 0;
  const remainingIds = columnIds.filter((id) => id !== hiddenId);
  if (remainingIds.length === 0 || hiddenWidth <= 0) {
    return normalizeWidths(remainingIds, widths, minPercent);
  }

  const next: Record<string, number> = {};
  for (const id of remainingIds) {
    next[id] = (widths[id] ?? 0) + hiddenWidth / remainingIds.length;
  }

  return normalizeWidths(remainingIds, next, minPercent);
}

export function DataTableProvider({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: DataTableVariant;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const columnWidthsRef = useRef<Record<string, number>>({});
  const [registrations, setRegistrations] = useState<
    Map<string, DataTableColumnRegistration>
  >(new Map());
  const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
  const [hiddenColumns, setHiddenColumns] = useState<Set<string>>(new Set());
  const [isResizing, setIsResizing] = useState(false);

  const columnOrder = useMemo(
    () => Array.from(registrations.keys()),
    [registrations]
  );

  const visibleColumns = useMemo(
    () => columnOrder.filter((id) => !hiddenColumns.has(id)),
    [columnOrder, hiddenColumns]
  );

  useEffect(() => {
    columnWidthsRef.current = columnWidths;
  }, [columnWidths]);

  const registrationsRef = useRef(registrations);
  registrationsRef.current = registrations;

  useLayoutEffect(() => {
    const containerWidth = containerRef.current?.offsetWidth ?? 800;
    const minPercent = getMinColumnPercent(containerWidth);

    setColumnWidths((previous) => {
      const visibleSet = new Set(visibleColumns);
      const previousVisible = Object.keys(previous).filter((id) =>
        visibleSet.has(id)
      );

      const sameColumns =
        previousVisible.length === visibleColumns.length &&
        visibleColumns.every((id) => previous[id] !== undefined);

      if (sameColumns) {
        return previous;
      }

      return buildInitialWidths(
        visibleColumns,
        registrationsRef.current,
        minPercent
      );
    });
  }, [visibleColumns]);

  const registerColumn = useCallback((registration: DataTableColumnRegistration) => {
    setRegistrations((previous) => {
      const next = new Map(previous);
      next.set(registration.id, registration);
      return next;
    });
  }, []);

  const unregisterColumn = useCallback((id: string) => {
    setRegistrations((previous) => {
      const next = new Map(previous);
      next.delete(id);
      return next;
    });
    setColumnWidths((previous) => {
      if (!(id in previous)) return previous;
      const next = { ...previous };
      delete next[id];
      return next;
    });
    setHiddenColumns((previous) => {
      if (!previous.has(id)) return previous;
      const next = new Set(previous);
      next.delete(id);
      return next;
    });
  }, []);

  const hideColumn = useCallback(
    (id: string) => {
      if (hiddenColumns.has(id)) return;

      const containerWidth = containerRef.current?.offsetWidth ?? 800;
      const minPercent = getMinColumnPercent(containerWidth);
      const currentlyVisible = columnOrder.filter(
        (columnId) => !hiddenColumns.has(columnId)
      );

      setColumnWidths((previous) =>
        redistributeHiddenColumn(currentlyVisible, previous, id, minPercent)
      );

      setHiddenColumns((previous) => {
        const next = new Set(previous);
        next.add(id);
        return next;
      });
    },
    [columnOrder, hiddenColumns]
  );

  const isColumnHidden = useCallback(
    (id: string) => hiddenColumns.has(id),
    [hiddenColumns]
  );

  const canResizeColumn = useCallback(
    (id: string) => {
      const index = visibleColumns.indexOf(id);
      return index >= 0 && index < visibleColumns.length - 1;
    },
    [visibleColumns]
  );

  const startResize = useCallback(
    (columnId: string, startX: number) => {
      const index = visibleColumns.indexOf(columnId);
      const nextId = visibleColumns[index + 1];
      if (nextId === undefined) return;

      const startWidths = { ...columnWidthsRef.current };
      const pairTotal = startWidths[columnId] + startWidths[nextId];

      setIsResizing(true);

      const onMouseMove = (event: MouseEvent) => {
        const containerWidth = containerRef.current?.offsetWidth ?? 800;
        const minPercent = getMinColumnPercent(containerWidth);
        const deltaPercent = ((event.clientX - startX) / containerWidth) * 100;

        const maxCurrent = pairTotal - minPercent;
        const nextCurrent = clamp(
          startWidths[columnId] + deltaPercent,
          minPercent,
          maxCurrent
        );
        const nextWidth = pairTotal - nextCurrent;

        setColumnWidths((previous) => ({
          ...previous,
          [columnId]: nextCurrent,
          [nextId]: nextWidth,
        }));
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
        setIsResizing(false);
      };

      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [visibleColumns]
  );

  const value = useMemo(
    () => ({
      variant,
      registerColumn,
      unregisterColumn,
      columnOrder,
      columnWidths,
      hiddenColumns,
      hideColumn,
      isColumnHidden,
      canResizeColumn,
      startResize,
      isResizing,
      containerRef,
    }),
    [
      variant,
      registerColumn,
      unregisterColumn,
      columnOrder,
      columnWidths,
      hiddenColumns,
      hideColumn,
      isColumnHidden,
      canResizeColumn,
      startResize,
      isResizing,
    ]
  );

  return (
    <DataTableContext.Provider value={value}>{children}</DataTableContext.Provider>
  );
}

export function useDataTable() {
  const context = useContext(DataTableContext);
  if (!context) {
    throw new Error("DataTable column components must be used within DataTable.");
  }
  return context;
}

export function useDataTableOptional() {
  return useContext(DataTableContext);
}

export function useDataTableColumn(
  columnId: string,
  defaultWidth?: number
) {
  const context = useDataTable();
  const { registerColumn, unregisterColumn, isColumnHidden, canResizeColumn, startResize } =
    context;

  useLayoutEffect(() => {
    registerColumn({ id: columnId, defaultWidth });
    return () => unregisterColumn(columnId);
  }, [columnId, defaultWidth, registerColumn, unregisterColumn]);

  return {
    hidden: isColumnHidden(columnId),
    canResize: canResizeColumn(columnId),
    onResizeStart: (clientX: number) => startResize(columnId, clientX),
  };
}

export function DataTableColGroup() {
  const { columnOrder, columnWidths, hiddenColumns } = useDataTable();

  return (
    <colgroup>
      {columnOrder.map((id) => (
        <col
          key={id}
          span={1}
          style={{
            width: hiddenColumns.has(id) ? 0 : `${columnWidths[id] ?? 0}%`,
          }}
          className={hiddenColumns.has(id) ? "hidden" : undefined}
        />
      ))}
    </colgroup>
  );
}

export function DataTableRoot({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { containerRef, isResizing } = useDataTable();

  return (
    <div data-slot="data-table" className={className}>
      <div
        ref={containerRef}
        data-resizing={isResizing ? "" : undefined}
        className="relative w-full overflow-x-auto"
      >
        {children}
      </div>
    </div>
  );
}
