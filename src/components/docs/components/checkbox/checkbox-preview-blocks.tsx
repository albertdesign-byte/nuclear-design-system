"use client";

import { CheckboxField, CheckboxGroupField } from "@/components/checkbox";

export function CheckboxDefaultPreview() {
  return (
    <CheckboxField
      id="consent-default"
      label="Share results with my provider"
    />
  );
}

export function CheckboxCheckedPreview() {
  return (
    <CheckboxField
      id="consent-checked"
      defaultChecked
      label="Insurance card on file"
    />
  );
}

export function CheckboxDisabledPreview() {
  return (
    <CheckboxField
      id="consent-disabled"
      disabled
      defaultChecked
      label="SMS appointment reminders"
    />
  );
}

export function CheckboxErrorPreview() {
  return (
    <CheckboxField
      id="consent-error"
      label="I accept clinical data processing"
      error="Confirm consent before continuing."
    />
  );
}

export function CheckboxIndeterminatePreview() {
  return (
    <CheckboxField
      id="select-all"
      indeterminate
      label="Select all imaging studies"
    />
  );
}

export function CheckboxWithDescriptionPreview() {
  return (
    <CheckboxField
      id="consent-description"
      defaultChecked
      label="Share imaging results"
      description="Results are sent securely to the provider listed on your referral."
    />
  );
}

export function CheckboxWithLongLabelPreview() {
  return (
    <CheckboxField
      id="consent-long-label"
      label="I authorize Medmo to share my diagnostic imaging results, clinical notes, and referral details with my designated care team members for continuity of care."
    />
  );
}

export function CheckboxWithHelperTextPreview() {
  return (
    <CheckboxField
      id="consent-helper"
      label="Email me appointment reminders"
      helperText="You can change notification preferences anytime in account settings."
    />
  );
}

export function CheckboxMultipleSelectionPreview() {
  return (
    <CheckboxGroupField
      id="imaging-modalities"
      legend="Imaging modalities to include"
      description="Select all studies that should appear in the exported patient packet."
      options={[
        { value: "mri", label: "MRI", defaultChecked: true },
        { value: "ct", label: "CT scan" },
        { value: "pet", label: "PET scan", defaultChecked: true },
        { value: "xray", label: "X-ray" },
      ]}
    />
  );
}

export function CheckboxSettingsGroupPreview() {
  return (
    <CheckboxGroupField
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
        {
          value: "proxy",
          label: "Enable caregiver proxy access",
          description: "Authorized caregivers can view records on the patient's behalf.",
        },
      ]}
    />
  );
}

export function CheckboxPreferencesGroupPreview() {
  return (
    <CheckboxGroupField
      id="appointment-preferences"
      legend="Appointment preferences"
      helperText="Preferences apply to future scheduling requests only."
      options={[
        { value: "morning", label: "Morning appointments", defaultChecked: true },
        { value: "telehealth", label: "Telehealth when available" },
        { value: "interpreter", label: "Interpreter services needed" },
      ]}
    />
  );
}
