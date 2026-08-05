import type { ComponentProps } from "react";
import type { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";

import type { ButtonProps } from "@/components/button";

export interface AlertDialogFooterProps extends ComponentProps<"div"> {}

export type AlertDialogActionProps = AlertDialogPrimitive.Close.Props &
  ButtonProps;

export type AlertDialogCancelProps = AlertDialogPrimitive.Close.Props &
  ButtonProps;
