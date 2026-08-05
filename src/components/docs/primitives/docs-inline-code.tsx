import { cn } from "@/lib/utils";

export function DocsInlineCode({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <code
      className={cn(
        "rounded-[var(--radius-sm)] bg-[var(--docs-inline-code-bg)] px-[0.24rem] py-[0.06rem] font-mono text-[0.8rem] text-foreground",
        className
      )}
    >
      {children}
    </code>
  );
}
