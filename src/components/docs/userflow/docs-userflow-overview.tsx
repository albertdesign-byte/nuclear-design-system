import { DocsUserflowPage } from "@/components/docs/userflow/docs-userflow-page";

export function DocsUserflowOverview({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <DocsUserflowPage className="px-[var(--docs-page-padding-x)] py-[var(--space-page)]">
      <div className="mx-auto w-full max-w-[48rem]">
        <p className="text-[length:var(--text-caption-size)] font-medium uppercase tracking-wide text-muted-foreground">
          Userflow
        </p>
        <h1 className="mt-[var(--space-stack-xs)] text-[length:var(--text-heading-2-size)] font-semibold leading-[var(--text-heading-2-line-height)]">
          {title}
        </h1>
        <p className="mt-[var(--space-stack-sm)] text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)] text-muted-foreground">
          {description}
        </p>
        <p className="mt-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-muted-foreground">
          Select a screen from the sidebar to open the full user flow preview.
          Patients screens use the three-block shell: header on{" "}
          <code className="text-foreground">--color-surface</code>, content card
          on <code className="text-foreground">--color-surface-muted</code>,
          and footer on <code className="text-foreground">--color-action-primary</code>.
        </p>
      </div>
    </DocsUserflowPage>
  );
}
