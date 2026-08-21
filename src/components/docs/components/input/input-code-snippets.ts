import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const inputImport = 'import { Input, InputField, InputGroup } from "@/components/input";';
const fieldImports = `import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Input, InputField, InputGroup } from "@/components/input";
import { Label } from "@/components/label";
import { formFieldGroupClassName } from "@/lib/form-field";`;
const searchImport = `${inputImport}
import { SearchIcon } from "lucide-react";`;

export const inputInstallationUiSnippet = tsxSnippet(`${inputImport}

export function Example() {
  return (
    <InputField
      id="patient-name"
      label="Patient name"
      defaultValue="Elena Morales"
    />
  );
}`);

export const inputRealScreenSnippet = tsxSnippet(`${inputImport}

export function Example() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-border bg-card p-4 shadow-sm">
      <h3 className="text-lg font-semibold">Clinical intake</h3>
      <div className="mt-4 grid gap-4">
        <InputField id="mrn" label="Medical record number" prefix="MRN" defaultValue="104829" />
        <InputField id="weight" label="Weight" suffix="kg" inputMode="decimal" defaultValue="72.5" />
        <InputField id="phone" label="Phone" type="tel" defaultValue="+1 (555) 014-2098" />
      </div>
    </div>
  );
}`);

export const inputUsageSnippet = exampleSnippet(
  `<InputField
  id="patient-name"
  label="Patient name"
  placeholder="Enter full legal name"
/>`,
  { imports: [inputImport] }
);

export const inputDefaultSnippet = exampleSnippet(
  `<InputField
  id="patient-name"
  label="Patient name"
  defaultValue="Elena Morales"
/>`,
  { imports: [inputImport] }
);

export const inputRequiredSnippet = exampleSnippet(
  `<InputField
  id="mrn"
  label="Medical record number"
  required
  placeholder="Enter MRN"
/>`,
  { imports: [inputImport] }
);

export const inputDisabledSnippet = exampleSnippet(
  `<InputField
  id="patient-name"
  label="Patient name"
  disabled
  defaultValue="Elena Morales"
/>`,
  { imports: [inputImport] }
);

export const inputReadOnlySnippet = exampleSnippet(
  `<InputField
  id="mrn"
  label="Medical record number"
  readOnly
  defaultValue="MRN-104829"
  helperText="Assigned at registration and cannot be edited."
/>`,
  { imports: [inputImport] }
);

export const inputLoadingSnippet = exampleSnippet(
  `<InputField
  id="patient-lookup"
  label="Patient lookup"
  loading
  defaultValue="MRN-104829"
  placeholder="Verifying MRN…"
/>`,
  { imports: [inputImport] }
);

export const inputErrorSnippet = exampleSnippet(
  `<InputField
  id="email"
  label="Email"
  invalid
  defaultValue="not-an-email"
  error="Enter a valid email address."
/>`,
  { imports: [inputImport] }
);

export const inputHelperTextSnippet = exampleSnippet(
  `<InputField
  id="patient-name"
  label="Patient name"
  placeholder="Enter full legal name"
  helperText="Use the name shown on the insurance card."
/>`,
  { imports: [inputImport] }
);

export const inputValidationTextSnippet = exampleSnippet(
  `<InputField
  id="phone"
  label="Mobile phone"
  type="tel"
  placeholder="(555) 000-0000"
  helperText="Enter a 10-digit US phone number without country code."
/>`,
  { imports: [inputImport] }
);

export const inputErrorMessageSnippet = exampleSnippet(
  `<InputField
  id="dob"
  label="Date of birth"
  invalid
  defaultValue="02/30/1985"
  error="Enter a valid date of birth."
/>`,
  { imports: [inputImport] }
);

export const inputSearchSnippet = exampleSnippet(
  `<InputField
  id="patient-search"
  label="Search patients"
  type="search"
  startIcon={<SearchIcon aria-hidden />}
  placeholder="Search by MRN or patient name"
/>`,
  { imports: [searchImport] }
);

export const inputStartIconSnippet = exampleSnippet(
  `<InputField
  id="patient-name"
  label="Patient name"
  startIcon={<UserIcon aria-hidden />}
  placeholder="Enter patient name"
/>`,
  { imports: [`${inputImport}\nimport { UserIcon } from "lucide-react";`] }
);

export const inputEndIconSnippet = exampleSnippet(
  `<InputField
  id="referral-id"
  label="Referral ID"
  defaultValue="REF-2026-0142"
  endIcon={<SearchIcon aria-hidden />}
/>`,
  { imports: [searchImport] }
);

export const inputPrefixSnippets = exampleSnippet(
  `<InputField id="copay" label="Copay amount" prefix="$" defaultValue="25.00" />
<InputField id="patient-id" label="Patient ID" prefix="ID" placeholder="Enter identifier" />
<InputField id="mrn" label="Medical record number" prefix="MRN" placeholder="104829" />`,
  { imports: [inputImport] }
);

export const inputSuffixSnippets = exampleSnippet(
  `<InputField id="weight-kg" label="Weight" suffix="kg" defaultValue="72" />
<InputField id="height-cm" label="Height" suffix="cm" defaultValue="168" />
<InputField id="weight-lbs" label="Weight" suffix="lbs" defaultValue="158" />
<InputField id="age" label="Age" suffix="years" defaultValue="42" />
<InputField id="coverage" label="Insurance coverage" suffix="%" defaultValue="80" />`,
  { imports: [inputImport] }
);

export const inputUnitsSnippet = exampleSnippet(
  `<InputField id="weight" label="Patient weight" suffix="kg" inputMode="decimal" defaultValue="72.5" />
<InputField id="height" label="Patient height" suffix="cm" inputMode="decimal" defaultValue="168" />
<InputField id="age" label="Patient age" suffix="years" inputMode="numeric" defaultValue="42" />
<InputField id="benefit" label="Benefit coverage" suffix="%" inputMode="decimal" defaultValue="80" />`,
  { imports: [inputImport] }
);

export const inputSizeSnippet = exampleSnippet(
  `<div className="flex max-w-md flex-col gap-4">
  <InputField id="input-sm" label="Small" size="sm" defaultValue="Small field" />
  <InputField id="input-md" label="Medium" size="md" defaultValue="Medium field" />
  <InputField id="input-lg" label="Large" size="lg" defaultValue="Large field" />
</div>`,
  { imports: [inputImport] }
);

export const inputFullWidthSnippet = exampleSnippet(
  `<InputField id="notes" label="Referral notes" fullWidth placeholder="Add clinical notes" />`,
  { imports: [inputImport] }
);

export const inputAccessibilitySnippet = exampleSnippet(
  `<InputField
  id="patient-name"
  label="Patient name"
  required
  helperText="Use the name shown on the insurance card."
  placeholder="Enter full legal name"
/>`,
  { imports: [inputImport] }
);

export const inputSearchToolbarSnippet = exampleSnippet(
  `<InputGroup
  type="search"
  size="sm"
  startIcon={<SearchIcon aria-hidden />}
  placeholder="Search by MRN or patient name"
  aria-label="Search by MRN or patient name"
/>`,
  { imports: [searchImport] }
);

/** @deprecated Use inputDefaultSnippet */
export const inputUsageLegacySnippet = exampleSnippet(
  `<div className={formFieldGroupClassName}>
  <Label htmlFor="patient-name">Patient name</Label>
  <Input id="patient-name" placeholder="Enter full legal name" />
</div>`,
  { imports: [fieldImports] }
);
