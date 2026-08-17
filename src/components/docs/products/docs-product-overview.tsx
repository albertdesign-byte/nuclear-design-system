import { DocsProductPage } from "@/components/docs/products/docs-product-page";

export function DocsProductOverview({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <DocsProductPage>
      <div className="mx-auto w-full max-w-[48rem]">
        <p className="text-[length:var(--text-caption-size)] font-medium uppercase tracking-wide text-muted-foreground">
          Products
        </p>
        <h1 className="mt-[var(--space-stack-xs)] text-[length:var(--text-h2-size)] font-semibold leading-[var(--text-h2-line-height)]">
          {title}
        </h1>
        <p className="mt-[var(--space-stack-sm)] text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)] text-muted-foreground">
          {description}
        </p>
        <p className="mt-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-muted-foreground">
          Select an implementation from the sidebar to explore the product in
          context.
        </p>
      </div>
    </DocsProductPage>
  );
}
