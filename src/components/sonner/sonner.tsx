"use client";

import { useTheme } from "next-themes";
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

import {
  sonnerClassNames,
  sonnerRootClassName,
  sonnerThemeStyle,
} from "./sonner.styles";

function Toaster({ ...props }: ToasterProps) {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className={sonnerRootClassName}
      icons={{
        success: <CircleCheckIcon className="size-[var(--icon-md)]" />,
        info: <InfoCheckIcon />,
        warning: <TriangleAlertIcon className="size-[var(--icon-md)]" />,
        error: <OctagonXIcon className="size-[var(--icon-md)]" />,
        loading: (
          <Loader2Icon className="size-[var(--icon-md)] animate-spin" />
        ),
      }}
      style={sonnerThemeStyle}
      toastOptions={{
        classNames: sonnerClassNames,
      }}
      {...props}
    />
  );
}

function InfoCheckIcon() {
  return <InfoIcon className="size-[var(--icon-md)]" />;
}

export { Toaster };
export type { ToasterProps } from "sonner";
