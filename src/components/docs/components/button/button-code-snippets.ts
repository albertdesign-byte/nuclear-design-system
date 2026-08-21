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
  gap: var(--space-button-icon-gap);
  border: 1px solid transparent;
  border-radius: var(--radius-full);
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
  padding-inline: var(--space-button-padding-md);
  border-radius: var(--radius-full);
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

const buttonDangerCss = `${buttonBaseCss}

${buttonSizeMdCss}

.medmo-button--danger {
  border-color: var(--color-error-border);
  background: var(--color-error-background);
  color: var(--color-error-text);
}

.medmo-button--danger:hover {
  border-color: var(--color-error-foreground);
  color: var(--color-error-foreground);
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
        <h3 className="text-lg font-semibold">Save changes</h3>
        <p className="mt-[var(--space-stack-sm)] text-sm text-muted-foreground">
          Contact details will be updated in Elena Morales's clinical record.
        </p>
      </div>
      <div className="flex justify-end gap-[var(--space-inline-sm)] border-t border-border bg-muted/30 p-[var(--space-card)]">
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button size="sm">Save changes</Button>
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
  react: `<div className="flex items-end gap-[var(--space-inline-sm)]">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
  <Button size="xl">Extra large</Button>
  <Button size="xxl">2× large</Button>
</div>`,
  html: `<div class="medmo-button-group">
  <button type="button" class="medmo-button medmo-button--sm medmo-button--primary">Small</button>
  <button type="button" class="medmo-button medmo-button--md medmo-button--primary">Medium</button>
  <button type="button" class="medmo-button medmo-button--lg medmo-button--primary">Large</button>
  <button type="button" class="medmo-button medmo-button--xl medmo-button--primary">Extra large</button>
  <button type="button" class="medmo-button medmo-button--xxl medmo-button--primary">2× large</button>
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
  padding-inline: var(--space-button-padding-sm);
  border-radius: var(--radius-full);
}

.medmo-button--lg {
  height: var(--spacing-36);
  min-height: var(--spacing-36);
  padding-inline: var(--space-button-padding-lg);
  border-radius: var(--radius-full);
}

.medmo-button--xl {
  height: var(--spacing-48);
  min-height: var(--spacing-48);
  padding-inline: var(--space-button-padding-xl);
  border-radius: var(--radius-full);
}

.medmo-button--xxl {
  height: var(--spacing-56);
  min-height: var(--spacing-56);
  padding-inline: var(--space-button-padding-xxl);
  border-radius: var(--radius-full);
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
  react: '<Button intent="danger">Delete study</Button>',
  html: `<button type="button" class="medmo-button medmo-button--md medmo-button--danger">
  Delete study
</button>`,
  css: buttonDangerCss,
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
      <PlusIcon data-icon="inline-start" />
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
  `<div
  role="group"
  aria-label="Save patient actions"
  className="flex flex-wrap justify-end gap-[var(--space-inline-sm)]"
>
  <Button variant="outline">Cancel</Button>
  <Button>Save patient</Button>
</div>`
);

export const buttonPaddingReviewSnippet = exampleSnippet(
  `// Adopted horizontal padding by size:
// sm 12px · md 12px · lg 16px · xl 20px · xxl 24px
<Button size="sm">Save patient</Button>
<Button size="md">Save patient</Button>
<Button size="lg">Save patient</Button>
<Button size="xl">Save patient</Button>
<Button size="xxl">Save patient</Button>`
);

export const buttonDangerStatesSnippet = exampleSnippet(
  `<Button intent="danger">Delete patient</Button>
<Button intent="danger">Delete study</Button>
<Button intent="danger">Remove user</Button>
<Button intent="danger">Archive record</Button>
<Button intent="danger" disabled>Delete study</Button>
<Button intent="danger" loading loadingLabel="Deleting study">
  Delete study
</Button>`
);

export const buttonIconPatternsSnippet = tsxSnippet(`${buttonImport}
import { ArrowRightIcon, SaveIcon, UploadIcon } from "lucide-react";

export function Example() {
  return (
    <>
      <Button>
        <SaveIcon data-icon="inline-start" />
        Save patient
      </Button>
      <Button variant="outline">
        View report
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
      <Button size="icon-xl" variant="outline" aria-label="Upload study">
        <UploadIcon />
      </Button>
    </>
  );
}`);

export const buttonStatesSnippet = exampleSnippet(
  `<Button>Save patient</Button>
<Button disabled>Save patient</Button>
<Button loading loadingLabel="Saving patient">
  Save patient
</Button>`
);

export const buttonHealthcareSnippet = exampleSnippet(
  `<Button>Save patient</Button>
<Button variant="secondary">Upload study</Button>
<Button variant="ghost">View report</Button>
<Button intent="danger">Delete study</Button>
<Button variant="outline" intent="danger">Archive record</Button>`
);
