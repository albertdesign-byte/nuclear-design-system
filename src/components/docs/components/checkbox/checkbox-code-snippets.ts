import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const checkboxImport = 'import { Checkbox, CheckboxField, CheckboxGroupField } from "@/components/checkbox";';

export const checkboxInstallationUiSnippet = tsxSnippet(`${checkboxImport}

export function Example() {
  return (
    <CheckboxField
      id="share-results"
      defaultChecked
      label="Share results with my provider"
    />
  );
}`);

export const checkboxRealScreenSnippet = tsxSnippet(`${checkboxImport}

export function Example() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-border bg-card p-4 shadow-sm">
      <h3 className="text-lg font-semibold">Informed consent</h3>
      <CheckboxField
        id="consent"
        defaultChecked
        className="mt-4"
        label="Clinical data processing"
        description="I accept clinical data processing per center policy."
      />
    </div>
  );
}`);

export const checkboxUsageSnippet = exampleSnippet(
  `<CheckboxField
  id="share-results"
  label="Share results with my provider"
/>`,
  { imports: [checkboxImport] }
);

export const checkboxDefaultSnippet = checkboxUsageSnippet;

export const checkboxCheckedSnippet = exampleSnippet(
  `<CheckboxField
  id="insurance-card"
  defaultChecked
  label="Insurance card on file"
/>`,
  { imports: [checkboxImport] }
);

export const checkboxDisabledSnippet = exampleSnippet(
  `<CheckboxField
  id="sms-reminders"
  disabled
  defaultChecked
  label="SMS appointment reminders"
/>`,
  { imports: [checkboxImport] }
);

export const checkboxErrorSnippet = exampleSnippet(
  `<CheckboxField
  id="consent"
  label="I accept clinical data processing"
  error="Confirm consent before continuing."
/>`,
  { imports: [checkboxImport] }
);

export const checkboxIndeterminateSnippet = exampleSnippet(
  `<CheckboxField
  id="select-all"
  indeterminate
  label="Select all imaging studies"
/>`,
  { imports: [checkboxImport] }
);

export const checkboxWithLabelSnippet = checkboxUsageSnippet;

export const checkboxWithDescriptionSnippet = exampleSnippet(
  `<CheckboxField
  id="share-imaging"
  defaultChecked
  label="Share imaging results"
  description="Results are sent securely to the provider on your referral."
/>`,
  { imports: [checkboxImport] }
);

export const checkboxWithLongLabelSnippet = exampleSnippet(
  `<CheckboxField
  id="consent-long"
  label="I authorize Medmo to share my diagnostic imaging results, clinical notes, and referral details with my designated care team members for continuity of care."
/>`,
  { imports: [checkboxImport] }
);

export const checkboxWithHelperTextSnippet = exampleSnippet(
  `<CheckboxField
  id="email-reminders"
  label="Email me appointment reminders"
  helperText="You can change notification preferences anytime in account settings."
/>`,
  { imports: [checkboxImport] }
);

export const checkboxGroupMultipleSnippet = exampleSnippet(
  `<CheckboxGroupField
  id="imaging-modalities"
  legend="Imaging modalities to include"
  description="Select all studies for the exported patient packet."
  options={[
    { value: "mri", label: "MRI", defaultChecked: true },
    { value: "ct", label: "CT scan" },
    { value: "pet", label: "PET scan", defaultChecked: true },
  ]}
/>`,
  { imports: [checkboxImport] }
);

export const checkboxGroupSettingsSnippet = exampleSnippet(
  `<CheckboxGroupField
  id="patient-settings"
  legend="Patient portal settings"
  options={[
    {
      value: "results",
      label: "Show imaging results",
      description: "Patients can view finalized reports in the portal.",
      defaultChecked: true,
    },
    {
      value: "messages",
      label: "Allow secure messages",
      description: "Enable two-way messaging with the care team.",
    },
  ]}
/>`,
  { imports: [checkboxImport] }
);

export const checkboxGroupPreferencesSnippet = exampleSnippet(
  `<CheckboxGroupField
  id="appointment-preferences"
  legend="Appointment preferences"
  helperText="Preferences apply to future scheduling requests only."
  options={[
    { value: "morning", label: "Morning appointments", defaultChecked: true },
    { value: "telehealth", label: "Telehealth when available" },
  ]}
/>`,
  { imports: [checkboxImport] }
);

export const checkboxGroupSnippet = checkboxGroupMultipleSnippet;

export const checkboxAccessibilitySnippet = exampleSnippet(
  `<CheckboxField
  id="consent"
  label="Share results with my provider"
  description="Results are sent securely to your referring provider."
/>`,
  { imports: [checkboxImport] }
);

export const checkboxSizeSnippet = exampleSnippet(
  `<div className="flex flex-col gap-2">
  <CheckboxField id="size-sm" size="sm" label="Small checkbox" />
  <CheckboxField id="size-md" size="md" label="Medium checkbox" />
  <CheckboxField id="size-lg" size="lg" label="Large checkbox" />
</div>`,
  { imports: [checkboxImport] }
);
