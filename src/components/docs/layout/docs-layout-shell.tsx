"use client";

import "../docs-shell.css";

import { usePathname } from "next/navigation";

import { AppFooter } from "@/components/app-footer";
import { cn } from "@/lib/utils";

import { DocsHeader } from "./docs-header";
import { DocsSidebar } from "./docs-sidebar";
import {
  PatientsDeviceProvider,
  usePatientsDevice,
} from "./patients-device-context";
import {
  UserflowLayoutProvider,
  useUserflowLayout,
} from "./userflow-layout-context";

function PatientsLayoutFooter() {
  const { device } = usePatientsDevice();

  return <AppFooter variant="patients" device={device} />;
}

function DocsLayoutShellInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isUserflow = pathname.startsWith("/docs/userflow");
  const isPatientsProduct = pathname.startsWith("/docs/products/patients");
  const isPatientsUserflow = pathname.startsWith("/docs/userflow/patients");
  const isPatientsContext = isPatientsProduct || isPatientsUserflow;
  const { sidebarVisible } = useUserflowLayout();
  const isUserflowExpanded = isUserflow && !sidebarVisible;

  const shellBody = (
    <>
      {!isUserflowExpanded ? <DocsSidebar /> : null}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex min-w-0 flex-1">{children}</div>
        {isPatientsProduct ? <PatientsLayoutFooter /> : null}
      </div>
    </>
  );

  const shell = (
    <div className="docs-shell flex min-h-full flex-col bg-background text-foreground">
      <DocsHeader />
      <div
        className={cn(
          "flex w-full flex-1",
          !isUserflowExpanded && "mx-auto max-w-[90rem]"
        )}
      >
        {shellBody}
      </div>
    </div>
  );

  return isPatientsContext ? (
    <PatientsDeviceProvider>{shell}</PatientsDeviceProvider>
  ) : (
    shell
  );
}

export function DocsLayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <UserflowLayoutProvider>
      <DocsLayoutShellInner>{children}</DocsLayoutShellInner>
    </UserflowLayoutProvider>
  );
}
