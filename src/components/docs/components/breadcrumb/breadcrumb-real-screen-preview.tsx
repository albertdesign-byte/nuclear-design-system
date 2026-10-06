import { Breadcrumb } from "@/components/breadcrumb";
import { DocsRealScreenExampleLink } from "@/components/docs/primitives/docs-real-screen-example-link";

export function BreadcrumbRealScreenPreview() {
  return (
    <div>
      <div className="flex w-full max-w-lg flex-col gap-[var(--space-stack-sm)] rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-page)]">
        <Breadcrumb
          showHomeIcon
          items={[
            { label: "Home", href: "/" },
            { label: "Patients", href: "/patients" },
            { label: "Elena Morales" },
          ]}
        />
        <div className="flex flex-col gap-[var(--space-stack-xs)]">
          <h3 className="text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
            Elena Morales
          </h3>
          <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
            Patient record · Date of birth 04/17/1992
          </p>
        </div>
      </div>
      <DocsRealScreenExampleLink href="/docs/userflow/patients">
        Open Patients userflow
      </DocsRealScreenExampleLink>
    </div>
  );
}
