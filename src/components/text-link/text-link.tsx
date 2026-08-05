import Link from "next/link";

import { cn } from "@/lib/utils";

export type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function TextLink({ href, children, className }: TextLinkProps) {
  return (
    <Link
      href={href}
      data-slot="text-link"
      className={cn(
        "font-medium text-[var(--color-text-link)] underline-offset-[3px]",
        "transition-[var(--motion-hover)] hover:text-[var(--color-text-link-hover)] hover:underline",
        "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]",
        className
      )}
    >
      {children}
    </Link>
  );
}
