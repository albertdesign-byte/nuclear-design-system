import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const radioGroupImports = `import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/radio-group";`;

const baseRadioGroupJsx = `<RadioGroup defaultValue="in-person">
  <label className="flex items-center gap-2 text-sm">
    <RadioGroupItem value="in-person" />
    Presencial
  </label>
  <label className="flex items-center gap-2 text-sm">
    <RadioGroupItem value="telemedicine" />
    Telemedicina
  </label>
</RadioGroup>`;

export const radioGroupInstallationUiSnippet = tsxSnippet(`${radioGroupImports}

export function Example() {
  return (
    <>
      ${baseRadioGroupJsx}
      <RadioGroup defaultValue="morning">
        <label className="flex items-center gap-2 text-sm">
          <RadioGroupItem value="morning" />
          Mañana
        </label>
        <label className="flex items-center gap-2 text-sm">
          <RadioGroupItem value="afternoon" />
          Tarde
        </label>
      </RadioGroup>
    </>
  );
}`);

export const radioGroupRealScreenSnippet = tsxSnippet(`${radioGroupImports}

export function Example() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-border bg-card p-4 shadow-sm">
      <h3 className="text-lg font-semibold">Tipo de consulta</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Selecciona cómo se realizará la cita de seguimiento.
      </p>
      <RadioGroup defaultValue="telemedicine" className="mt-4">
        <label className="flex items-center gap-2 text-sm">
          <RadioGroupItem value="in-person" id="visit-in-person" />
          <span>Presencial en clínica</span>
        </label>
        <label className="flex items-center gap-2 text-sm">
          <RadioGroupItem value="telemedicine" id="visit-telemedicine" />
          <span>Telemedicina</span>
        </label>
        <label className="flex items-center gap-2 text-sm">
          <RadioGroupItem value="home" id="visit-home" />
          <span>Visita domiciliaria</span>
        </label>
      </RadioGroup>
    </div>
  );
}`);

export const radioGroupUsageSnippet = exampleSnippet(baseRadioGroupJsx, {
  imports: [radioGroupImports],
});

export const radioGroupSizeSnippet = exampleSnippet(
  `<RadioGroup defaultValue="md" className="flex items-center gap-3">
  <RadioGroupItem value="sm" size="sm" aria-label="Small" />
  <RadioGroupItem value="md" size="md" aria-label="Medium" />
  <RadioGroupItem value="lg" size="lg" aria-label="Large" />
</RadioGroup>`,
  { imports: [radioGroupImports] }
);

export const radioGroupDisabledSnippet = exampleSnippet(
  `<RadioGroup defaultValue="active" disabled>
  <label className="flex items-center gap-2 text-sm">
    <RadioGroupItem value="active" />
    Activo
  </label>
  <label className="flex items-center gap-2 text-sm">
    <RadioGroupItem value="inactive" />
    Inactivo
  </label>
</RadioGroup>`,
  { imports: [radioGroupImports] }
);

export const radioGroupInvalidSnippet = exampleSnippet(
  `<RadioGroup defaultValue="option-a" aria-invalid>
  <label className="flex items-center gap-2 text-sm">
    <RadioGroupItem value="option-a" />
    Opción A
  </label>
  <label className="flex items-center gap-2 text-sm">
    <RadioGroupItem value="option-b" />
    Opción B
  </label>
</RadioGroup>`,
  { imports: [radioGroupImports] }
);

export const radioGroupWithLabelSnippet = tsxSnippet(`${radioGroupImports}

export function Example() {
  return (
    <fieldset className="grid gap-2">
      <legend className="text-sm font-medium">Canal de contacto preferido</legend>
      <RadioGroup defaultValue="phone">
        <label className="flex items-center gap-2 text-sm">
          <RadioGroupItem value="phone" id="contact-phone" />
          <span>Teléfono</span>
        </label>
        <label className="flex items-center gap-2 text-sm">
          <RadioGroupItem value="email" id="contact-email" />
          <span>Email</span>
        </label>
      </RadioGroup>
    </fieldset>
  );
}`);

export const radioGroupHorizontalSnippet = exampleSnippet(
  `<RadioGroup
  defaultValue="daily"
  className="flex flex-row flex-wrap gap-[var(--space-inline-md)]"
>
  <label className="flex items-center gap-2 text-sm">
    <RadioGroupItem value="daily" />
    Diario
  </label>
  <label className="flex items-center gap-2 text-sm">
    <RadioGroupItem value="weekly" />
    Semanal
  </label>
  <label className="flex items-center gap-2 text-sm">
    <RadioGroupItem value="monthly" />
    Mensual
  </label>
</RadioGroup>`,
  { imports: [radioGroupImports] }
);
