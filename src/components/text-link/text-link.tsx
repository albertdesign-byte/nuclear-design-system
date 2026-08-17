import Link from "next/link";

import { componentFontFamilyClassName } from "@/lib/component-font-family";
import { textLinkDisabledClassName } from "@/lib/disabled-styles";
import { cn } from "@/lib/utils";

export type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

export function TextLink({ href, children, className, disabled = false }: TextLinkProps) {
  const classNames = cn(
    componentFontFamilyClassName,
    "font-medium text-[var(--color-text-link)] underline-offset-[3px]",
    "transition-[var(--motion-hover)] hover:text-[var(--color-text-link-hover)] hover:underline",
    "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]",
    textLinkDisabledClassName,
    className
  );

  if (disabled) {
    return (
      <span data-slot="text-link" aria-disabled="true" className={classNames}>
        {children}
      </span>
    );
  }

  return (
    <Link href={href} data-slot="text-link" className={classNames}>
      {children}
    </Link>
  );
}
