import {
  componentCodeExample,
  exampleSnippet,
  tsxSnippet,
} from "@/components/docs/primitives/docs-code-snippet";
import type { ComponentCodeExample } from "@/components/docs/primitives/docs-preview";

const buttonImport = 'import { Button } from "@/components/button";';

const buttonBaseCss = `.medmo-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-inline-sm);
  border: 1px solid transparent;
  font-size: var(--text-label-size);
  line-height: var(--text-label-line-height);
  letter-spacing: var(--text-label-letter-spacing);
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: var(--motion-hover);
  outline: none;
}

.medmo-button:focus-visible {
  border-color: var(--color-focus-ring);
  box-shadow: 0 0 0 var(--focus-ring-width) var(--color-focus-ring);
}

.medmo-button:disabled {
  pointer-events: none;
  border-color: var(--color-disabled-border);
  background: var(--color-disabled-background);
  color: var(--color-disabled-text);
}`;

const buttonSizeMdCss = `.medmo-button--md {
  height: var(--spacing-32);
  min-height: var(--spacing-32);
  padding-inline: var(--space-inline-sm);
  border-radius: var(--radius-button);
}`;

const buttonPrimaryCss = `${buttonBaseCss}

${buttonSizeMdCss}

.medmo-button--primary {
  background: var(--color-action-primary);
  color: var(--color-action-primary-text);
}

.medmo-button--primary:hover {
  background: var(--color-action-primary-hover);
}

.medmo-button--primary:active {
  background: var(--color-action-primary-active);
}`;

const buttonOutlineCss = `${buttonBaseCss}

${buttonSizeMdCss}

.medmo-button--outline {
  border-color: var(--color-border);
  background: var(--color-background);
  color: var(--color-text-primary);
}

.medmo-button--outline:hover {
  background: var(--color-surface-muted);
  border-color: var(--color-border-strong);
}

.medmo-button--outline:active {
  background: var(--color-surface-active);
}`;

const buttonSecondaryCss = `${buttonBaseCss}

${buttonSizeMdCss}

.medmo-button--secondary {
  background: var(--color-surface-muted);
  color: var(--color-text-secondary);
  border-color: var(--color-border-subtle);
}

.medmo-button--secondary:hover {
  background: var(--color-surface-hover);
  color: var(--color-text-primary);
}

.medmo-button--secondary:active {
  background: var(--color-surface-active);
}`;

const buttonGhostCss = `${buttonBaseCss}

${buttonSizeMdCss}

.medmo-button--ghost {
  background: transparent;
  border-color: transparent;
  color: var(--color-text-primary);
}

.medmo-button--ghost:hover {
  background: var(--color-surface-muted);
}

.medmo-button--ghost:active {
  background: var(--color-surface-active);
}`;

const buttonDangerOutlineCss = `${buttonBaseCss}

${buttonSizeMdCss}

.medmo-button--danger-outline {
  border-color: var(--color-error-border);
  background: var(--color-background);
  color: var(--color-error-text);
}

.medmo-button--danger-outline:hover {
  background: var(--color-error-background);
  border-color: var(--color-error-foreground);
}`;

function buttonExample(config: {
  react: string;
  html: string;
  css: string;
  reactHighlight?: "tsx" | "example";
  exampleOptions?: { imports?: string[]; name?: string };
}): ComponentCodeExample {
  return componentCodeExample({
    reactHighlight: config.reactHighlight ?? "tsx",
    exampleOptions: config.exampleOptions,
    react: config.react,
    html: config.html,
    css: config.css,
  });
}

export const buttonInstallationUiSnippet = tsxSnippet(`${buttonImport}
import { ArrowUpIcon } from "lucide-react";

export function Example() {
  return (
    <>
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="icon-md" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </>
  );
}`);

export const buttonRealScreenSnippet = tsxSnippet(`${buttonImport}

export function Example() {
  return (
    <div role="dialog" aria-modal="true" className="rounded-lg border border-border bg-card shadow-lg">
      <div className="p-4">
        <h3 className="text-lg font-semibold">Guardar cambios</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Los datos de contacto se actualizarán en el registro clínico de Elena Morales.
        </p>
      </div>
      <div className="flex justify-end gap-2 border-t border-border bg-muted/30 p-4">
        <Button variant="outline" size="sm">
          Cancelar
        </Button>
        <Button size="sm">Guardar cambios</Button>
      </div>
    </div>
  );
}`);

export const buttonUsageSnippet = buttonExample({
  reactHighlight: "example",
  exampleOptions: { imports: [buttonImport] },
  react: "<Button>Save changes</Button>",
  html: `<button type="button" class="medmo-button medmo-button--md medmo-button--primary">
  Save changes
</button>`,
  css: buttonPrimaryCss,
});

export const buttonSizeSnippet = buttonExample({
  reactHighlight: "example",
  exampleOptions: { imports: [buttonImport] },
  react: `<div className="flex items-end gap-2">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>`,
  html: `<div class="medmo-button-group">
  <button type="button" class="medmo-button medmo-button--sm medmo-button--primary">Small</button>
  <button type="button" class="medmo-button medmo-button--md medmo-button--primary">Medium</button>
  <button type="button" class="medmo-button medmo-button--lg medmo-button--primary">Large</button>
</div>`,
  css: `${buttonPrimaryCss}

.medmo-button-group {
  display: flex;
  align-items: flex-end;
  gap: var(--space-inline-sm);
}

.medmo-button--sm {
  height: var(--spacing-28);
  min-height: var(--spacing-28);
  padding-inline: var(--space-inline-sm);
  border-radius: var(--radius-md);
}

.medmo-button--lg {
  height: var(--spacing-36);
  min-height: var(--spacing-36);
  padding-inline: var(--space-inline-md);
  border-radius: var(--radius-button);
}`,
});

export const buttonPrimarySnippet = buttonExample({
  reactHighlight: "example",
  exampleOptions: { imports: [buttonImport] },
  react: '<Button variant="primary">Primary</Button>',
  html: `<button type="button" class="medmo-button medmo-button--md medmo-button--primary">
  Primary
</button>`,
  css: buttonPrimaryCss,
});

export const buttonOutlineSnippet = buttonExample({
  reactHighlight: "example",
  exampleOptions: { imports: [buttonImport] },
  react: '<Button variant="outline">Outline</Button>',
  html: `<button type="button" class="medmo-button medmo-button--md medmo-button--outline">
  Outline
</button>`,
  css: buttonOutlineCss,
});

export const buttonSecondarySnippet = buttonExample({
  reactHighlight: "example",
  exampleOptions: { imports: [buttonImport] },
  react: '<Button variant="secondary">Secondary</Button>',
  html: `<button type="button" class="medmo-button medmo-button--md medmo-button--secondary">
  Secondary
</button>`,
  css: buttonSecondaryCss,
});

export const buttonGhostSnippet = buttonExample({
  reactHighlight: "example",
  exampleOptions: { imports: [buttonImport] },
  react: '<Button variant="ghost">Ghost</Button>',
  html: `<button type="button" class="medmo-button medmo-button--md medmo-button--ghost">
  Ghost
</button>`,
  css: buttonGhostCss,
});

export const buttonDangerSnippet = buttonExample({
  reactHighlight: "example",
  exampleOptions: { imports: [buttonImport] },
  react: '<Button intent="danger" variant="outline">Delete</Button>',
  html: `<button type="button" class="medmo-button medmo-button--md medmo-button--danger-outline">
  Delete
</button>`,
  css: buttonDangerOutlineCss,
});

export const buttonIconSnippet = tsxSnippet(`${buttonImport}
import { ArrowUpIcon } from "lucide-react";

export function Example() {
  return (
    <Button size="icon-md" aria-label="Submit">
      <ArrowUpIcon />
    </Button>
  );
}`);

export const buttonWithIconSnippet = tsxSnippet(`${buttonImport}
import { PlusIcon } from "lucide-react";

export function Example() {
  return (
    <Button>
      <PlusIcon />
      New patient
    </Button>
  );
}`);

export const buttonLoadingSnippet = exampleSnippet(
  '<Button loading loadingLabel="Saving…">Save</Button>'
);

export const buttonFullWidthSnippet = exampleSnippet(
  `<div className="w-full max-w-xs">
  <Button fullWidth>Save changes</Button>
</div>`
);

export const buttonGroupSnippet = exampleSnippet(
  `<div className="flex flex-wrap gap-2">
  <Button variant="outline">Cancel</Button>
  <Button>Save changes</Button>
</div>`
);

export const buttonAsLinkSnippet = tsxSnippet(`${buttonImport}
import Link from "next/link";

export function Example() {
  return <Button render={<Link href="/" />}>Home</Button>;
}`);
