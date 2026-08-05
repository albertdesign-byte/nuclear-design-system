import type { Menu as MenuPrimitive } from "@base-ui/react/menu";

export interface DropdownMenuItemProps extends MenuPrimitive.Item.Props {
  inset?: boolean;
  variant?: "default" | "destructive";
}
