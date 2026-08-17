import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const radioImport =
  'import { RadioField, RadioGroup, RadioGroupField } from "@/components/radio-group";';

const visitOptionsSnippet = `options={[
    { value: "in-person", label: "In-person" },
    { value: "telemedicine", label: "Telemedicine" },
    { value: "home", label: "Home visit" },
  ]}`;

export const radioGroupInstallationUiSnippet = tsxSnippet(`${radioImport}

export function Example() {
  return (
    <RadioGroupField
      id="visit-type"
      legend="Visit type"
      defaultValue="in-person"
      ${visitOptionsSnippet}
    />
  );
}`);

export const radioGroupRealScreenSnippet = tsxSnippet(`${radioImport}

export function Example() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-border bg-card p-4 shadow-sm">
      <RadioGroupField
        id="visit-type"
        legend="Visit type"
        description="Select how the follow-up appointment will take place."
        defaultValue="telemedicine"
        options={[
          { value: "in-person", label: "In-person at clinic" },
          { value: "telemedicine", label: "Telemedicine" },
          { value: "home", label: "Home visit" },
        ]}
      />
    </div>
  );
}`);

export const radioGroupUsageSnippet = exampleSnippet(
  `<RadioGroupField
  id="visit-type"
  legend="Visit type"
  defaultValue="in-person"
  ${visitOptionsSnippet}
/>`,
  { imports: [radioImport] }
);

export const radioGroupDefaultSnippet = radioGroupUsageSnippet;

export const radioGroupSelectedSnippet = exampleSnippet(
  `<RadioGroupField
  id="visit-type"
  legend="Visit type"
  defaultValue="telemedicine"
  ${visitOptionsSnippet}
/>`,
  { imports: [radioImport] }
);

export const radioGroupDisabledSnippet = exampleSnippet(
  `<RadioGroupField
  id="visit-type"
  legend="Visit type"
  defaultValue="in-person"
  disabled
  ${visitOptionsSnippet}
/>`,
  { imports: [radioImport] }
);

export const radioGroupSelectedDisabledSnippet = exampleSnippet(
  `<RadioGroupField
  id="visit-type"
  legend="Visit type"
  defaultValue="telemedicine"
  disabled
  ${visitOptionsSnippet}
/>`,
  { imports: [radioImport] }
);

export const radioGroupErrorSnippet = exampleSnippet(
  `<RadioGroupField
  id="visit-type"
  legend="Visit type"
  ${visitOptionsSnippet}
  error="Select a visit type to continue."
/>`,
  { imports: [radioImport] }
);

export const radioGroupWithLabelSnippet = exampleSnippet(
  `<RadioGroupField
  id="visit-type"
  legend="Visit type"
  defaultValue="in-person"
  options={[
    { value: "in-person", label: "In-person" },
    { value: "telemedicine", label: "Telemedicine" },
  ]}
/>`,
  { imports: [radioImport] }
);

export const radioGroupWithDescriptionSnippet = exampleSnippet(
  `<RadioGroupField
  id="visit-type"
  legend="Visit type"
  description="Choose how the patient prefers to be seen for this appointment."
  defaultValue="in-person"
  options={[
    { value: "in-person", label: "In-person" },
    { value: "telemedicine", label: "Telemedicine" },
  ]}
/>`,
  { imports: [radioImport] }
);

export const radioGroupWithLongLabelSnippet = exampleSnippet(
  `<RadioGroup defaultValue="authorize">
  <RadioField
    value="authorize"
    label="I authorize Medmo to share my diagnostic imaging results, clinical notes, and referral details with my designated care team members for continuity of care."
  />
</RadioGroup>`,
  { imports: [radioImport] }
);

export const radioGroupSimpleSelectionSnippet = exampleSnippet(
  `<RadioGroupField
  id="contact-channel"
  legend="Preferred contact channel"
  defaultValue="email"
  options={[
    { value: "email", label: "Email" },
    { value: "phone", label: "Phone call" },
    { value: "sms", label: "SMS text message" },
  ]}
/>`,
  { imports: [radioImport] }
);

export const radioGroupSettingsSelectionSnippet = exampleSnippet(
  `<RadioGroupField
  id="appointment-window"
  legend="Appointment window"
  defaultValue="morning"
  options={[
    {
      value: "morning",
      label: "Morning (8 AM – 12 PM)",
      description: "Best for patients who prefer early visits before work.",
    },
    {
      value: "afternoon",
      label: "Afternoon (12 PM – 5 PM)",
      description: "Standard clinic hours with the widest availability.",
    },
  ]}
/>`,
  { imports: [radioImport] }
);

export const radioGroupPreferencesSelectionSnippet = exampleSnippet(
  `<RadioGroupField
  id="reminder-frequency"
  legend="Reminder frequency"
  description="How often should we send appointment reminders?"
  defaultValue="weekly"
  options={[
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "none", label: "No reminders" },
  ]}
/>`,
  { imports: [radioImport] }
);

export const radioGroupSizeSnippet = exampleSnippet(
  `<RadioGroup defaultValue="md" className="flex items-center gap-3">
  <RadioField value="sm" size="sm" label="Small" />
  <RadioField value="md" size="md" label="Medium" />
  <RadioField value="lg" size="lg" label="Large" />
</RadioGroup>`,
  { imports: [radioImport] }
);

export const radioGroupHorizontalSnippet = exampleSnippet(
  `<RadioGroupField
  id="reminder-frequency"
  legend="Reminder frequency"
  defaultValue="daily"
  listClassName="flex flex-row flex-wrap gap-[var(--space-inline-md)]"
  options={[
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
  ]}
/>`,
  { imports: [radioImport] }
);

export const radioGroupAccessibilitySnippet = exampleSnippet(
  `<RadioGroupField
  id="visit-type"
  legend="Visit type"
  description="Results are sent securely to the provider listed on your referral."
  defaultValue="in-person"
  options={[
    { value: "in-person", label: "In-person" },
    { value: "telemedicine", label: "Telemedicine" },
  ]}
/>`,
  { imports: [radioImport] }
);
