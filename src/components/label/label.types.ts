import type { ComponentProps } from "react";

export type LabelProps = ComponentProps<"label"> & {
  /** Applies error text color when the associated field is invalid. */
  invalid?: boolean;
};
