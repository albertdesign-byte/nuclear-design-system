import { TextLink } from "@/components/text-link";

import { docsChromeFontClassName } from "./docs-nav-styles";

type DocsPagerItem = {
  href: string;
  title: string;
};

export function DocsPager({
  previous,
  next,
  label,
}: {
  previous?: DocsPagerItem | null;
  next?: DocsPagerItem | null;
  label: string;
}) {
  return (
    <nav
      aria-label={label}
      className="mt-[var(--space-section)] flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-lg)]"
    >
      {previous ? (
        <TextLink href={previous.href} className={docsChromeFontClassName}>
          Previous: {previous.title}
        </TextLink>
      ) : (
        <span aria-hidden />
      )}

      {next ? (
        <TextLink href={next.href} className={docsChromeFontClassName}>
          Next: {next.title}
        </TextLink>
      ) : (
        <span aria-hidden />
      )}
    </nav>
  );
}
