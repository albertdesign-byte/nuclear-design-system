import Link from "next/link";

import { cn } from "@/lib/utils";

export function DocsSection({
  id,
  title,
  description,
  children,
  className,
}: {
  id: string;
  title: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-[calc(var(--docs-header-height)+var(--space-stack-md))]", className)}
    >
      <Link
        href={`#${id}`}
        className="group inline-flex items-center gap-[var(--space-inline-sm)] no-underline"
      >
        <h2 className="text-[length:var(--text-h3-size)] font-semibold leading-[var(--text-h3-line-height)] tracking-[var(--text-h3-letter-spacing)] text-foreground">
          {title}
        </h2>
        <span className="text-[length:var(--text-h3-size)] font-semibold leading-[var(--text-h3-line-height)] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
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
