"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";

import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

import { buttonVariants } from "./button.styles";
import type { ButtonProps } from "./button.types";

function Button({
  className,
  variant = "primary",
  intent = "default",
  size = "md",
  loading = false,
  loadingLabel = "Loading",
  fullWidth = false,
  disabled = false,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <ButtonPrimitive
      data-slot="button"
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      className={cn(
        buttonVariants({ variant, intent, size }),
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <Spinner
            className={cn(
              size === "sm" || size === "icon-sm" ? "size-3.5" : "size-4"
            )}
            aria-hidden
          />
          <span className="sr-only">{loadingLabel}</span>
        </>
      ) : null}
      {children}
    </ButtonPrimitive>
  );
}

export { Button };
