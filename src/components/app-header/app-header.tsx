import { cn } from "@/lib/utils";

import {
  appHeaderActionsClassName,
  appHeaderCenterClassName,
  appHeaderClassName,
  appHeaderTitleClassName,
} from "./app-header.styles";
import type { AppHeaderProps } from "./app-header.types";

function AppHeader({ title, search, actions, className }: AppHeaderProps) {
  return (
    <header data-slot="app-header" className={cn(appHeaderClassName, className)}>
      <h1 className={appHeaderTitleClassName}>{title}</h1>
      {search ? <div className={appHeaderCenterClassName}>{search}</div> : null}
      {actions ? <div className={appHeaderActionsClassName}>{actions}</div> : null}
    </header>
  );
}

export { AppHeader };
