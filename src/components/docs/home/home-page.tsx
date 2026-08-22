import { TextLink } from "@/components/text-link";
import { getComponentNavCategories } from "@/components/docs/config/components-registry";

import { ComponentPreviewCard } from "./component-preview-card";

const homeCategories = getComponentNavCategories().filter(
  (category) => category.id !== "components-overview"
);

export function HomePage() {
  return (
    <main className="mx-auto w-full max-w-[90rem] flex-1 px-[var(--space-page)] py-[var(--space-page)]">
      <section className="mx-auto flex max-w-[52rem] flex-col items-center gap-[var(--space-stack-lg)] pb-[var(--space-section)] text-center">
        <div className="flex flex-col gap-[var(--space-stack-sm)]">
          <h1 className="font-heading text-[clamp(3rem,10vw,5.75rem)] font-extrabold leading-[0.95] tracking-[var(--letter-spacing-tight)] text-[var(--color-text-primary)]">
            Nuclear
          </h1>
          <p className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
            The design system of Medmo
          </p>
        </div>

        <p className="max-w-[36rem] text-[clamp(1.125rem,2.5vw,1.75rem)] leading-[var(--text-body-large-line-height)] text-[var(--color-text-secondary)]">
          All components are ready for use.
        </p>

        <TextLink href="/docs/components/button">Get lifetime access</TextLink>
      </section>

      <div className="flex flex-col gap-[var(--space-section)]">
        {homeCategories.map((category) => (
          <section key={category.id} aria-labelledby={`home-${category.id}`}>
            <h2
              id={`home-${category.id}`}
              className="mb-[var(--space-stack-md)] text-[length:var(--text-caption-size)] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]"
            >
              {category.title}
            </h2>

            <div className="grid grid-cols-1 gap-[var(--space-inline-md)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.items
                .filter((item) => item.href !== "#" && !item.href.includes("#"))
                .map((item) => (
                  <ComponentPreviewCard
                    key={item.href}
                    title={item.title}
                    href={item.href}
                  />
                ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
