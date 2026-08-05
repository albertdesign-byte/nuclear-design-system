import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  ComponentWireframe,
  componentSlugFromHref,
} from "./component-wireframes";

export function ComponentPreviewCard({
  title,
  href,
  className,
}: {
  title: string;
  href: string;
  className?: string;
}) {
  const slug = componentSlugFromHref(href);

  return (
    <Link
      href={href}
      className={cn(
        "group block overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]",
        "transition-[var(--motion-hover)] hover:ring-[var(--color-border-strong)] focus-visible:outline-none",
        "focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]",
        className
      )}
    >
      <div className="relative flex min-h-[9.5rem] items-center justify-center bg-[var(--color-surface-muted)] p-[var(--space-inline-md)] sm:min-h-[10.5rem]">
        <ComponentWireframe slug={slug} />
      </div>
      <div className="border-t border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-[var(--space-inline-md)] py-[var(--space-stack-sm)] text-center">
        <span className="text-[length:var(--text-label-size)] font-medium leading-[var(--text-label-line-height)] text-[var(--color-text-primary)]">
          {title}
        </span>
      </div>
    </Link>
  );
}
