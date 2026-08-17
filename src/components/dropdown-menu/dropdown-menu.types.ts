import type { Menu as MenuPrimitive } from "@base-ui/react/menu";

import type { ButtonProps } from "@/components/button";

export interface DropdownMenuItemProps extends MenuPrimitive.Item.Props {
  inset?: boolean;
  variant?: "default" | "danger" | "destructive";
}

export type DropdownMenuButtonProps = Omit<ButtonProps, "render">;

export type DropdownMenuIconButtonProps = Omit<
  DropdownMenuButtonProps,
  "children"
> & {
  "aria-label": string;
};
