import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function DocsSection({
  id,
  title,
  description,
  children,
  className,
  headingLevel = 2,
  tocExclude = false,
}: {
  id: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  headingLevel?: 2 | 3;
  tocExclude?: boolean;
}) {
  const HeadingTag = headingLevel === 3 ? "h3" : "h2";

  return (
    <section
      id={id}
      data-toc-exclude={tocExclude ? "" : undefined}
      className={cn("scroll-mt-[calc(var(--docs-header-height)+var(--space-stack-md))]", className)}
    >
      <Link
        href={`#${id}`}
        className="group inline-flex items-center gap-[var(--space-inline-sm)] no-underline"
      >
        <HeadingTag
          className={cn(
            "font-semibold text-foreground",
            headingLevel === 3
              ? "text-[length:var(--text-title-size)] leading-[var(--text-title-line-height)]"
              : "text-[length:var(--text-h3-size)] leading-[var(--text-h3-line-height)] tracking-[var(--text-h3-letter-spacing)]"
          )}
        >
          {title}
        </HeadingTag>
        <span
          className={cn(
            "font-semibold text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100",
            headingLevel === 3
              ? "text-[length:var(--text-title-size)] leading-[var(--text-title-line-height)]"
              : "text-[length:var(--text-h3-size)] leading-[var(--text-h3-line-height)]"
          )}
        >
          #
        </span>
      </Link>
      {description ? (
        <div className="mt-[var(--space-stack-sm)] text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)] text-muted-foreground">
          {description}
        </div>
      ) : null}
      {children ? <div className="mt-[var(--space-stack-md)]">{children}</div> : null}
    </section>
  );
}
