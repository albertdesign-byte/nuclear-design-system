import type { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import type { VariantProps } from "class-variance-authority";

import type { tabsListVariants } from "./tabs.styles";

export type TabsListVariant = "default" | "line" | "folder";

export interface TabsListProps
  extends TabsPrimitive.List.Props,
    VariantProps<typeof tabsListVariants> {
  /** Visual style for the tab list. @default "default" */
  variant?: TabsListVariant;
}
