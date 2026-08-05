import { MedmoLogoLockup } from "@/components/brand";

export function LogoRealScreenPreview() {
  return (
    <header className="flex w-full max-w-md items-center rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--space-card)] py-[var(--space-stack-md)] shadow-sm">
      <MedmoLogoLockup />
    </header>
  );
}
