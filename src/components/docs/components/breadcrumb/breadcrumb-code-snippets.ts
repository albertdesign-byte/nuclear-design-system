import {
  componentCodeExample,
  exampleSnippet,
  tsxSnippet,
} from "@/components/docs/primitives/docs-code-snippet";

const breadcrumbImport = `import { Breadcrumb } from "@/components/breadcrumb";`;

const breadcrumbCss = `.medmo-breadcrumb {
  font-family: var(--font-family-component);
}

.medmo-breadcrumb__list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-stack-xs) var(--space-inline-xs);
  margin: 0;
  padding: 0;
  list-style: none;
}

.medmo-breadcrumb__item {
  display: inline-flex;
  min-width: 0;
  align-items: center;
  gap: var(--space-inline-xs);
}

.medmo-breadcrumb__link,
.medmo-breadcrumb__current {
  display: inline-flex;
  min-width: 0;
  align-items: center;
  gap: var(--space-inline-xs);
  border-radius: var(--radius-sm);
  font-size: var(--text-body-small-size);
  line-height: var(--text-body-small-line-height);
}

.medmo-breadcrumb__link {
  color: var(--color-text-muted);
  text-decoration: none;
  transition: var(--motion-hover);
}

.medmo-breadcrumb__link:hover {
  color: var(--color-text-primary);
}

.medmo-breadcrumb__link:focus-visible {
  outline: none;
  box-shadow: 0 0 0 var(--focus-ring-width) var(--color-focus-ring);
}

.medmo-breadcrumb__link[aria-disabled="true"] {
  color: var(--color-disabled-text);
  pointer-events: none;
  cursor: not-allowed;
}

.medmo-breadcrumb__current {
  color: var(--color-text-primary);
  font-weight: 500;
}

.medmo-breadcrumb__separator {
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-text-muted);
}

.medmo-breadcrumb__separator svg {
  width: var(--icon-xs);
  height: var(--icon-xs);
}

.medmo-breadcrumb__home {
  width: var(--icon-sm);
  height: var(--icon-sm);
  flex-shrink: 0;
}

.medmo-breadcrumb__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`;

const chevronSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>`;

const houseSvg = `<svg class="medmo-breadcrumb__home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>`;

const defaultHtml = `<nav aria-label="Breadcrumb" class="medmo-breadcrumb">
  <ol class="medmo-breadcrumb__list">
    <li class="medmo-breadcrumb__item">
      <a class="medmo-breadcrumb__link" href="/">
        <span class="medmo-breadcrumb__label">Home</span>
      </a>
      <span class="medmo-breadcrumb__separator" aria-hidden="true">
          ${chevronSvg}
      </span>
    </li>
    <li class="medmo-breadcrumb__item">
      <a class="medmo-breadcrumb__link" href="/patients">
        <span class="medmo-breadcrumb__label">Patients</span>
      </a>
      <span class="medmo-breadcrumb__separator" aria-hidden="true">
          ${chevronSvg}
      </span>
    </li>
    <li class="medmo-breadcrumb__item">
      <span class="medmo-breadcrumb__current" aria-current="page">
        <span class="medmo-breadcrumb__label">Elena Morales</span>
      </span>
    </li>
  </ol>
</nav>`;

export const breadcrumbInstallationUiSnippet = componentCodeExample({
  reactHighlight: "example",
  exampleOptions: { imports: [breadcrumbImport] },
  react: `<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Patients", href: "/patients" },
    { label: "Elena Morales" },
  ]}
/>`,
  html: defaultHtml,
  css: breadcrumbCss,
});

export const breadcrumbRealScreenSnippet = tsxSnippet(`${breadcrumbImport}

export function Example() {
  return (
    <Breadcrumb
      items={[
        { label: "Home", href: "/" },
        { label: "Patients", href: "/patients" },
        { label: "Elena Morales" },
      ]}
      showHomeIcon
    />
  );
}`);

export const breadcrumbUsageSnippet = componentCodeExample({
  reactHighlight: "example",
  exampleOptions: { imports: [breadcrumbImport] },
  react: `<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Patients", href: "/patients" },
    { label: "Elena Morales" },
  ]}
/>`,
  html: defaultHtml,
  css: breadcrumbCss,
});

export const breadcrumbHomeIconSnippet = componentCodeExample({
  reactHighlight: "example",
  exampleOptions: { imports: [breadcrumbImport] },
  react: `<Breadcrumb
  showHomeIcon
  items={[
    { label: "Home", href: "/" },
    { label: "Patients", href: "/patients" },
    { label: "Elena Morales" },
  ]}
/>`,
  html: `<nav aria-label="Breadcrumb" class="medmo-breadcrumb">
  <ol class="medmo-breadcrumb__list">
    <li class="medmo-breadcrumb__item">
      <a class="medmo-breadcrumb__link" href="/">
        ${houseSvg}
        <span class="medmo-breadcrumb__label">Home</span>
      </a>
      <span class="medmo-breadcrumb__separator" aria-hidden="true">
          ${chevronSvg}
      </span>
    </li>
    <li class="medmo-breadcrumb__item">
      <a class="medmo-breadcrumb__link" href="/patients">
        <span class="medmo-breadcrumb__label">Patients</span>
      </a>
      <span class="medmo-breadcrumb__separator" aria-hidden="true">
          ${chevronSvg}
      </span>
    </li>
    <li class="medmo-breadcrumb__item">
      <span class="medmo-breadcrumb__current" aria-current="page">
        <span class="medmo-breadcrumb__label">Elena Morales</span>
      </span>
    </li>
  </ol>
</nav>`,
  css: breadcrumbCss,
});

export const breadcrumbMultipleSnippet = exampleSnippet(
  `<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Components", href: "/components" },
    { label: "Button" },
  ]}
/>`,
  { imports: [breadcrumbImport] }
);

export const breadcrumbLongSnippet = exampleSnippet(
  `<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Patients", href: "/patients" },
    { label: "Records", href: "/patients/records" },
    { label: "Imaging", href: "/patients/records/imaging" },
    { label: "Mammogram", href: "/patients/records/imaging/mammogram" },
    { label: "Results report SRID-1001" },
  ]}
/>`,
  { imports: [breadcrumbImport] }
);

export const breadcrumbDisabledSnippet = exampleSnippet(
  `<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Patients", href: "/patients", disabled: true },
    { label: "Elena Morales" },
  ]}
/>`,
  { imports: [breadcrumbImport] }
);
