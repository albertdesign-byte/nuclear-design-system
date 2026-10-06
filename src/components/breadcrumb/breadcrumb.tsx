import { ChevronRightIcon, HouseIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  breadcrumbClassName,
  breadcrumbCurrentClassName,
  breadcrumbItemClassName,
  breadcrumbLabelClassName,
  breadcrumbLinkClassName,
  breadcrumbListClassName,
  breadcrumbSeparatorClassName,
} from "./breadcrumb.styles";
import type { BreadcrumbItem, BreadcrumbProps } from "./breadcrumb.types";

function isCurrentItem(item: BreadcrumbItem, index: number, items: BreadcrumbItem[]) {
  if (item.current) {
    return true;
  }

  if (items.some((entry) => entry.current)) {
    return false;
  }

  return index === items.length - 1;
}

function BreadcrumbLabel({
  label,
  showHomeIcon,
}: {
  label: string;
  showHomeIcon: boolean;
}) {
  return (
    <>
      {showHomeIcon ? (
        <HouseIcon
          className="size-[var(--icon-sm)] shrink-0"
          strokeWidth={2}
          aria-hidden
        />
      ) : null}
      <span className={breadcrumbLabelClassName}>{label}</span>
    </>
  );
}

export function Breadcrumb({
  items,
  showHomeIcon = false,
  className,
  "aria-label": ariaLabel = "Breadcrumb",
}: BreadcrumbProps) {
  return (
    <nav
      data-slot="breadcrumb"
      aria-label={ariaLabel}
      className={cn(breadcrumbClassName, className)}
    >
      <ol className={breadcrumbListClassName}>
        {items.map((item, index) => {
          const current = isCurrentItem(item, index, items);
          const homeIcon = showHomeIcon && index === 0;
          const content = <BreadcrumbLabel label={item.label} showHomeIcon={homeIcon} />;

          return (
            <li key={`${item.label}-${index}`} className={breadcrumbItemClassName}>
              {current ? (
                <span aria-current="page" className={breadcrumbCurrentClassName}>
                  {content}
                </span>
              ) : item.disabled || !item.href ? (
                <span
                  aria-disabled={item.disabled || undefined}
                  className={breadcrumbLinkClassName}
                >
                  {content}
                </span>
              ) : (
                <Link href={item.href} className={breadcrumbLinkClassName}>
                  {content}
                </Link>
              )}
              {index < items.length - 1 ? (
                <span className={breadcrumbSeparatorClassName} aria-hidden>
                  <ChevronRightIcon
                    className="size-[var(--icon-xs)]"
                    strokeWidth={2}
                  />
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
