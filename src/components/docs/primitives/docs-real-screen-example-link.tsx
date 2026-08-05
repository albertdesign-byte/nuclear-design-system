import Link from "next/link";

export function DocsRealScreenExampleLink({
  href = "/examples/dashboard",
  children = "Open dashboard example",
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <p className="mt-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
      See it in a full screen:{" "}
      <Link
        href={href}
        className="font-medium text-[var(--color-text-link)] underline underline-offset-[3px] hover:text-[var(--color-text-link-hover)]"
      >
        {children}
      </Link>
    </p>
  );
}
