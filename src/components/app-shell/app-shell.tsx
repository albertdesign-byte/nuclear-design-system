import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import {
  appShellBodyClassName,
  appShellClassName,
  appShellMainClassName,
} from "./app-shell.styles";

export type AppShellProps = {
  sidebar: ReactNode;
  header?: ReactNode;
  children: ReactNode;
  className?: string;
};

function AppShell({ sidebar, header, children, className }: AppShellProps) {
  return (
    <div data-slot="app-shell" className={cn(appShellClassName, className)}>
      {sidebar}
      <div className={appShellBodyClassName}>
        {header}
        <main className={appShellMainClassName}>{children}</main>
      </div>
    </div>
  );
}

export { AppShell };
