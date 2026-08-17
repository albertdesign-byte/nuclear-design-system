import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const selectImport =
  'import { MultiSelectField, SearchableSelectField, SelectField } from "@/components/select";';

const statusOptions = `options={[
    { value: "active", label: "Active" },
    { value: "observation", label: "Under observation" },
    { value: "discharged", label: "Discharged" },
  ]}`;

export const selectInstallationUiSnippet = tsxSnippet(`${selectImport}

export function Example() {
  return (
    <SelectField
      id="patient-status"
      label="Patient status"
      defaultValue="active"
      ${statusOptions}
    />
  );
}`);

export const selectRealScreenSnippet = tsxSnippet(`${selectImport}

export function Example() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-border bg-card p-4 shadow-sm">
      <SelectField
        id="insurance"
        label="Medical insurance"
        defaultValue="bluecross"
        options={[
          { value: "bluecross", label: "BlueCross PPO" },
          { value: "aetna", label: "Aetna HMO" },
          { value: "medicare", label: "Medicare" },
        ]}
      />
    </div>
  );
}`);

export const selectUsageSnippet = exampleSnippet(
  `<SelectField
  id="patient-status"
  label="Patient status"
  placeholder="Select status"
  ${statusOptions}
/>`,
  { imports: [selectImport] }
);

export const selectDefaultSnippet = exampleSnippet(
  `<SelectField
  id="patient-status"
  label="Patient status"
  defaultValue="active"
  ${statusOptions}
/>`,
  { imports: [selectImport] }
);

export const selectRequiredSnippet = exampleSnippet(
  `<SelectField
  id="patient-status"
  label="Patient status"
  required
  placeholder="Select status"
  ${statusOptions}
/>`,
  { imports: [selectImport] }
);

export const selectDisabledSnippet = exampleSnippet(
  `<SelectField
  id="patient-status"
  label="Patient status"
  disabled
  defaultValue="active"
  ${statusOptions}
/>`,
  { imports: [selectImport] }
);

export const selectErrorSnippet = exampleSnippet(
  `<SelectField
  id="patient-status"
  label="Patient status"
  error="Select a patient status to continue."
  ${statusOptions}
/>`,
  { imports: [selectImport] }
);

export const selectReadOnlySnippet = exampleSnippet(
  `<SelectField
  id="patient-status"
  label="Patient status"
  readOnly
  defaultValue="discharged"
  helperText="This status is locked after the encounter is closed."
  ${statusOptions}
/>`,
  { imports: [selectImport] }
);

export const selectLoadingSnippet = exampleSnippet(
  `<SelectField
  id="facility"
  label="Imaging facility"
  loading
  options={[]}
  helperText="Retrieving facilities from the scheduling network."
/>`,
  { imports: [selectImport] }
);

export const selectHelperTextSnippet = exampleSnippet(
  `<SelectField
  id="patient-status"
  label="Patient status"
  defaultValue="active"
  helperText="Status updates sync to the care team dashboard."
  ${statusOptions}
/>`,
  { imports: [selectImport] }
);

export const selectValidationMessageSnippet = exampleSnippet(
  `<SelectField
  id="study-priority"
  label="Study priority"
  validationMessage="Choose STAT only when immediate clinical review is required."
  options={[
    { value: "routine", label: "Routine" },
    { value: "urgent", label: "Urgent" },
    { value: "stat", label: "STAT" },
  ]}
/>`,
  { imports: [selectImport] }
);

export const selectErrorMessageSnippet = exampleSnippet(
  `<SelectField
  id="facility"
  label="Imaging facility"
  error="Select a facility that supports the ordered study."
  options={[
    { value: "hospital", label: "Medmo General Hospital" },
    { value: "clinic", label: "Downtown Imaging Clinic" },
  ]}
/>`,
  { imports: [selectImport] }
);

export const searchableSelectSnippet = exampleSnippet(
  `<SearchableSelectField
  id="patient"
  label="Patient"
  placeholder="Search by patient name or MRN"
  options={[
    { value: "elena", label: "Elena Morales · MRN 104829" },
    { value: "marcus", label: "Marcus Lee · MRN 104912" },
    { value: "priya", label: "Priya Shah · MRN 105031" },
  ]}
/>`,
  { imports: [selectImport] }
);

export const multiSelectSnippet = exampleSnippet(
  `<MultiSelectField
  id="studies"
  label="Studies to include"
  defaultValue={["brain-mri", "chest-ct"]}
  options={[
    { value: "brain-mri", label: "MRI brain without contrast" },
    { value: "chest-ct", label: "CT chest with contrast" },
    { value: "knee-xray", label: "X-ray knee, 3 views" },
  ]}
/>`,
  { imports: [selectImport] }
);

export const groupedSelectSnippet = exampleSnippet(
  `<SelectField
  id="facility"
  label="Imaging facility"
  placeholder="Select facility"
  options={[
    { value: "hospital-a", label: "Medmo General Hospital", group: "Hospitals" },
    { value: "hospital-b", label: "Northside Medical Center", group: "Hospitals" },
    { value: "clinic-a", label: "Downtown Imaging Clinic", group: "Clinics" },
    { value: "clinic-b", label: "Westbrook Outpatient Clinic", group: "Clinics" },
  ]}
/>`,
  { imports: [selectImport] }
);

export const asyncSelectSnippet = exampleSnippet(
  `<SearchableSelectField
  id="network-facility"
  label="Network facility"
  options={facilities}
  loading={isLoading}
  loadingMessage="Loading facilities…"
  placeholder="Search network facilities"
/>`,
  { imports: [selectImport] }
);

export const selectSizeSnippet = exampleSnippet(
  `<div className="flex max-w-md flex-col gap-4">
  <SelectField id="select-sm" label="Small" size="sm" ${statusOptions} />
  <SelectField id="select-md" label="Medium" size="md" ${statusOptions} />
  <SelectField id="select-lg" label="Large" size="lg" ${statusOptions} />
</div>`,
  { imports: [selectImport] }
);

export const selectFullWidthSnippet = exampleSnippet(
  `<SelectField
  id="patient-status"
  label="Patient status"
  fullWidth
  ${statusOptions}
/>`,
  { imports: [selectImport] }
);

export const selectAccessibilitySnippet = exampleSnippet(
  `<SelectField
  id="patient-status"
  label="Patient status"
  required
  helperText="Status updates sync to the care team dashboard."
  ${statusOptions}
/>`,
  { imports: [selectImport] }
);
