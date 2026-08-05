import { tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const selectImports = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";`;

const baseSelectJsx = `<Select defaultValue="active">
  <SelectTrigger className="max-w-xs">
    <SelectValue placeholder="Select status" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="active">Activo</SelectItem>
    <SelectItem value="observation">En observación</SelectItem>
    <SelectItem value="discharged">Alta</SelectItem>
  </SelectContent>
</Select>`;

export const selectInstallationUiSnippet = tsxSnippet(`${selectImports}

export function Example() {
  return (
    <>
      ${baseSelectJsx}
      <Select defaultValue="bluecross">
        <SelectTrigger className="max-w-xs">
          <SelectValue placeholder="Select insurance" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="bluecross">BlueCross PPO</SelectItem>
          <SelectItem value="aetna">Aetna HMO</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}`);

export const selectRealScreenSnippet = tsxSnippet(`${selectImports}

export function Example() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-border bg-card p-4 shadow-sm">
      <h3 className="text-lg font-semibold">Datos del paciente</h3>
      <div className="mt-4 grid gap-3">
        <div className="grid gap-1.5">
          <label htmlFor="insurance" className="text-sm font-medium">
            Seguro médico
          </label>
          <Select defaultValue="bluecross">
            <SelectTrigger id="insurance">
              <SelectValue placeholder="Select insurance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bluecross">BlueCross PPO</SelectItem>
              <SelectItem value="aetna">Aetna HMO</SelectItem>
              <SelectItem value="medicare">Medicare</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}`);

export const selectUsageSnippet = tsxSnippet(`${selectImports}

export function Example() {
  return (
    ${baseSelectJsx}
  );
}`);

export const selectSizeSnippet = tsxSnippet(`${selectImports}

export function Example() {
  return (
    <div className="flex max-w-md flex-col gap-2">
      <Select defaultValue="active">
        <SelectTrigger size="sm">
          <SelectValue placeholder="Small" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="active">Activo</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="active">
        <SelectTrigger size="md">
          <SelectValue placeholder="Medium" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="active">Activo</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="active">
        <SelectTrigger size="lg">
          <SelectValue placeholder="Large" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="active">Activo</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`);

export const selectDisabledSnippet = tsxSnippet(`${selectImports}

export function Example() {
  return (
    <Select defaultValue="active" disabled>
      <SelectTrigger className="max-w-xs">
        <SelectValue placeholder="Disabled" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="active">Activo</SelectItem>
      </SelectContent>
    </Select>
  );
}`);

export const selectInvalidSnippet = tsxSnippet(`${selectImports}

export function Example() {
  return (
    <Select>
      <SelectTrigger className="max-w-xs" aria-invalid>
        <SelectValue placeholder="Invalid value" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="active">Activo</SelectItem>
      </SelectContent>
    </Select>
  );
}`);

export const selectPlaceholderSnippet = tsxSnippet(`${selectImports}

export function Example() {
  return (
    <Select>
      <SelectTrigger className="max-w-xs">
        <SelectValue placeholder="Select appointment type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="follow-up">Seguimiento</SelectItem>
        <SelectItem value="urgent">Urgente</SelectItem>
      </SelectContent>
    </Select>
  );
}`);

export const selectFullWidthSnippet = tsxSnippet(`${selectImports}

export function Example() {
  return (
    <div className="w-full max-w-md">
      <Select defaultValue="active">
        <SelectTrigger fullWidth>
          <SelectValue placeholder="Full width field" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="active">Activo</SelectItem>
          <SelectItem value="observation">En observación</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`);
