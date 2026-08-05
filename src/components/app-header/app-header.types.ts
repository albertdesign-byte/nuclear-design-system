import type { ReactNode } from "react";

export type AppHeaderProps = {
  title: string;
  search?: ReactNode;
  actions?: ReactNode;
  className?: string;
};
