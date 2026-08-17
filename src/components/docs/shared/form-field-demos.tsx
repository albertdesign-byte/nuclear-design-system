"use client";

import { CheckboxField, CheckboxGroupField } from "@/components/checkbox";
import { InputField } from "@/components/input";
import {
  RadioGroupField,
} from "@/components/radio-group";
import { SelectField } from "@/components/select";

const statusOptions = [
  { value: "active", label: "Active" },
  { value: "observation", label: "Under observation" },
  { value: "discharged", label: "Discharged" },
] as const;

export function InputFieldPattern({
  id = "patient-name",
  variant = "default",
}: {
  id?: string;
  variant?: "default" | "required" | "disabled" | "error" | "helper";
}) {
  return (
    <InputField
      id={id}
      label={`Patient name${variant === "required" ? " *" : ""}`}
      placeholder="Enter full legal name"
      required={variant === "required"}
      disabled={variant === "disabled"}
      invalid={variant === "error"}
      defaultValue={
        variant === "disabled" || variant === "default"
          ? "Elena Morales"
          : variant === "error"
            ? "E"
            : undefined
      }
      helperText={
        variant === "helper"
          ? "Use the name shown on the insurance card."
          : undefined
      }
      error={
        variant === "error"
          ? "Enter the patient's full legal name."
          : undefined
      }
    />
  );
}

export function SelectFieldPattern({
  id = "patient-status",
  variant = "default",
}: {
  id?: string;
  variant?: "default" | "disabled" | "error" | "helper";
}) {
  return (
    <SelectField
      id={id}
      label="Patient status"
      options={[...statusOptions]}
      defaultValue={variant === "error" ? undefined : "active"}
      disabled={variant === "disabled"}
      helperText={
        variant === "helper"
          ? "Status updates sync to the care team dashboard."
          : undefined
      }
      error={
        variant === "error"
          ? "Select a patient status to continue."
          : undefined
      }
      placeholder="Select status"
    />
  );
}

export function CheckboxFieldPattern({
  id = "share-results",
  variant = "default",
}: {
  id?: string;
  variant?: "default" | "checked" | "disabled" | "error" | "description" | "helper" | "long-label";
}) {
  if (variant === "description") {
    return (
      <CheckboxField
        id={id}
        defaultChecked
        label="Share imaging results"
        description="Results are sent securely to the provider on your referral."
      />
    );
  }

  if (variant === "helper") {
    return (
      <CheckboxField
        id={id}
        label="Email me appointment reminders"
        helperText="You can change notification preferences anytime in account settings."
      />
    );
  }

  if (variant === "long-label") {
    return (
      <CheckboxField
        id={id}
        label="I authorize Medmo to share my diagnostic imaging results, clinical notes, and referral details with my designated care team members for continuity of care."
      />
    );
  }

  return (
    <CheckboxField
      id={id}
      defaultChecked={variant === "checked" || variant === "disabled"}
      disabled={variant === "disabled"}
      label="Share results with my provider"
      error={variant === "error" ? "Confirm consent before continuing." : undefined}
    />
  );
}

export function CheckboxGroupPattern() {
  return (
    <CheckboxGroupField
      id="notification-preferences"
      legend="Notification preferences"
      options={[
        { value: "email", label: "Email reminders", defaultChecked: true },
        { value: "sms", label: "SMS reminders" },
        { value: "none", label: "No reminders" },
      ]}
    />
  );
}

export function RadioFieldPattern({
  variant = "default",
}: {
  variant?: "default" | "selected" | "disabled" | "error" | "description";
}) {
  return (
    <RadioGroupField
      id="visit-type"
      legend="Visit type"
      description={
        variant === "description"
          ? "Choose how the patient prefers to be seen for this appointment."
          : undefined
      }
      defaultValue={variant === "selected" ? "telemedicine" : "in-person"}
      disabled={variant === "disabled"}
      invalid={variant === "error"}
      error={variant === "error" ? "Select a visit type to continue." : undefined}
      options={[
        { value: "in-person", label: "In-person" },
        { value: "telemedicine", label: "Telemedicine" },
        { value: "home", label: "Home visit" },
      ]}
    />
  );
}
