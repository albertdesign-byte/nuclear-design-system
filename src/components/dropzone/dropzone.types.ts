import type { ComponentProps } from "react";

export type DropzoneProps = {
  label: string;
  file?: File | null;
  onFileChange?: (file: File | null) => void;
  accept?: string;
  error?: string;
  disabled?: boolean;
  id?: string;
  className?: string;
} & Omit<ComponentProps<"div">, "onChange">;
