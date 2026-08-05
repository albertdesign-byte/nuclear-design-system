import { MedmoLogoLockup } from "@/components/brand";

export function HomeFooter() {
  return (
    <footer className="border-t border-[var(--docs-chrome-border)] bg-[var(--color-surface)]">
      <div className="mx-auto flex max-w-[90rem] items-center justify-center gap-[var(--space-inline-sm)] px-[var(--space-page)] py-[var(--space-stack-lg)]">
        <span className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
          by
        </span>
        <MedmoLogoLockup iconClassName="size-6" />
      </div>
    </footer>
  );
}
