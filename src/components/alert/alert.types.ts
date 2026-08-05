import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

import type { alertVariants } from "./alert.styles";

export type AlertProps = ComponentProps<"div"> &
  VariantProps<typeof alertVariants>;
