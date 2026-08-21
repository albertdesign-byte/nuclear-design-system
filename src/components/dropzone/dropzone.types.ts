import type { ComponentProps } from "react";

export type DropzoneProps = {
  label: string;
  file?: File | null;
  onFileChange?: (file: File | null) => void;
  accept?: string;
  /** Maximum file size in bytes. Files over this limit are rejected. */
  maxSize?: number;
  error?: string;
  disabled?: boolean;
  /** Async upload in progress. Blocks picker, drop, and remove. */
  loading?: boolean;
  /**
   * Drag-over highlight. Set automatically while a file is dragged over the
   * surface; pass `true` only to preview the dragging state.
   */
  dragging?: boolean;
  id?: string;
  className?: string;
} & Omit<
  ComponentProps<"div">,
  "onChange" | "onDrop" | "onDragOver" | "onDragEnter" | "onDragLeave"
>;
