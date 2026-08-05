"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AtomIcon, ChevronDownIcon, UsersIcon, type LucideIcon } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/popover";
import { cn } from "@/lib/utils";

import {
  docsProductNavEntries,
  type DocsProductNavEntry,
} from "../config/products-navigation";

const productIcons: Record<DocsProductNavEntry["id"], LucideIcon> = {
  nuclear: AtomIcon,
  patients: UsersIcon,
};

type DocsProductsNavDropdownProps = {
  triggerClassName: (active: boolean) => string;
};

export function DocsProductsNavDropdown({
  triggerClassName,
}: DocsProductsNavDropdownProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isProducts = pathname.startsWith("/docs/products");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={open}
            className={cn(
              triggerClassName(isProducts),
              "gap-[var(--space-inline-xs)]"
            )}
          />
        }
      >
        Products
        <ChevronDownIcon
          aria-hidden
          className={cn(
            "size-[0.875rem] shrink-0 opacity-70 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={8}
        className="w-[22rem] gap-0 p-[var(--space-inline-xs)]"
      >
        <div className="flex flex-col gap-[var(--space-stack-xs)]">
          {docsProductNavEntries.map((product) => {
            const Icon = productIcons[product.id];
            const isActive = pathname.startsWith(product.href);

            return (
              <Link
                key={product.id}
                href={product.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-start gap-[var(--space-inline-sm)] rounded-[var(--radius-md)] p-[var(--space-inline-sm)]",
                  "transition-[var(--motion-hover)] outline-none",
                  "hover:bg-[var(--color-surface-hover)] focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]",
                  isActive && "bg-[var(--docs-nav-active-bg)]"
                )}
              >
                <span
                  className={cn(
                    "flex size-[2.25rem] shrink-0 items-center justify-center rounded-[var(--radius-md)]",
                    "border border-[var(--color-border-subtle)] bg-background text-foreground"
                  )}
                >
                  <Icon aria-hidden className="size-[1rem]" />
                </span>
                <span className="flex min-w-0 flex-col gap-[var(--space-stack-xs)] pt-[0.125rem]">
                  <span className="text-[length:var(--text-label-size)] font-medium leading-[var(--text-label-line-height)] text-foreground">
                    {product.title}
                  </span>
                  <span className="text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-muted-foreground">
                    {product.description}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
