"use client";

import { RadioField, RadioGroup, RadioGroupField } from "@/components/radio-group";

const visitOptions = [
  { value: "in-person", label: "In-person" },
  { value: "telemedicine", label: "Telemedicine" },
  { value: "home", label: "Home visit" },
] as const;

export function RadioDefaultPreview() {
  return (
    <RadioGroupField
      id="visit-type-default"
      legend="Visit type"
      defaultValue="in-person"
      options={[...visitOptions]}
    />
  );
}

export function RadioSelectedPreview() {
  return (
    <RadioGroupField
      id="visit-type-selected"
      legend="Visit type"
      defaultValue="telemedicine"
      options={[...visitOptions]}
    />
  );
}

export function RadioDisabledPreview() {
  return (
    <RadioGroupField
      id="visit-type-disabled"
      legend="Visit type"
      defaultValue="in-person"
      disabled
      options={[...visitOptions]}
    />
  );
}

export function RadioSelectedDisabledPreview() {
  return (
    <RadioGroupField
      id="visit-type-selected-disabled"
      legend="Visit type"
      defaultValue="telemedicine"
      disabled
      options={[...visitOptions]}
    />
  );
}

export function RadioErrorPreview() {
  return (
    <RadioGroupField
      id="visit-type-error"
      legend="Visit type"
      options={[...visitOptions]}
      error="Select a visit type to continue."
    />
  );
}

export function RadioWithDescriptionPreview() {
  return (
    <RadioGroupField
      id="visit-type-description"
      legend="Visit type"
      description="Choose how the patient prefers to be seen for this appointment."
      defaultValue="in-person"
      options={[...visitOptions]}
    />
  );
}

export function RadioWithLongLabelPreview() {
  return (
    <RadioGroup defaultValue="authorize">
      <RadioField
        value="authorize"
        label="I authorize Medmo to share my diagnostic imaging results, clinical notes, and referral details with my designated care team members for continuity of care."
      />
    </RadioGroup>
  );
}

export function RadioSimpleSelectionPreview() {
  return (
    <RadioGroupField
      id="contact-channel"
      legend="Preferred contact channel"
      defaultValue="email"
      options={[
        { value: "email", label: "Email" },
        { value: "phone", label: "Phone call" },
        { value: "sms", label: "SMS text message" },
      ]}
    />
  );
}

export function RadioSettingsSelectionPreview() {
  return (
    <RadioGroupField
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
        {
          value: "evening",
          label: "Evening (5 PM – 8 PM)",
          description: "Limited slots for after-work scheduling.",
        },
      ]}
    />
  );
}

export function RadioPreferencesSelectionPreview() {
  return (
    <RadioGroupField
      id="reminder-frequency"
      legend="Reminder frequency"
      description="How often should we send appointment reminders?"
      defaultValue="weekly"
      options={[
        { value: "daily", label: "Daily" },
        { value: "weekly", label: "Weekly" },
        { value: "none", label: "No reminders" },
      ]}
    />
  );
}

export function RadioHorizontalPreview() {
  return (
    <RadioGroupField
      id="reminder-frequency-horizontal"
      legend="Reminder frequency"
      defaultValue="daily"
      listClassName="flex flex-row flex-wrap gap-[var(--space-inline-md)]"
      options={[
        { value: "daily", label: "Daily" },
        { value: "weekly", label: "Weekly" },
      ]}
    />
  );
}

export function RadioSingleOptionDisabledPreview() {
  return (
    <RadioGroupField
      id="visit-type-partial-disabled"
      legend="Visit type"
      defaultValue="telemedicine"
      options={[
        { value: "in-person", label: "In-person" },
        { value: "telemedicine", label: "Telemedicine", disabled: true },
        { value: "home", label: "Home visit" },
      ]}
    />
  );
}
