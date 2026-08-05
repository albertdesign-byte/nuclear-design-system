"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import type { PatientsPreviewDevice } from "@/components/docs/layout/patients-device-context";
import { cn } from "@/lib/utils";

type DocsUserflowPreviewFrameProps = {
  device: PatientsPreviewDevice;
  children: ReactNode;
  className?: string;
};

export function DocsUserflowPreviewFrame({
  device,
  children,
  className,
}: DocsUserflowPreviewFrameProps) {
  const previousDevice = useRef(device);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (previousDevice.current === device) {
      return;
    }

    setIsTransitioning(true);
    previousDevice.current = device;

    const timeoutId = window.setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => window.clearTimeout(timeoutId);
  }, [device]);

  return (
    <div
      className={cn(
        "flex min-h-[calc(100vh-var(--docs-header-height))] w-full justify-center",
        "px-[var(--space-page)] py-[var(--space-page)]",
        className
      )}
    >
      <div
        data-device={device}
        className={cn(
          "w-full transition-[max-width,transform,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          device === "mobile" ? "max-w-[24rem]" : "max-w-[min(100%,90rem)]",
          isTransitioning
            ? device === "desktop"
              ? "scale-[0.985] opacity-95"
              : "scale-[1.015] opacity-95"
            : "scale-100 opacity-100"
        )}
      >
        {children}
      </div>
    </div>
  );
}
