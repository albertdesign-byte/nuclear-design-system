"use client";

import { SearchIcon, UserIcon } from "lucide-react";

import { InputField, InputGroup } from "@/components/input";

export function InputDefaultPreview() {
  return (
    <InputField
      id="patient-name-default"
      label="Patient name"
      defaultValue="Elena Morales"
    />
  );
}

export function InputRequiredPreview() {
  return (
    <InputField
      id="mrn-required"
      label="Medical record number"
      required
      placeholder="Enter MRN"
    />
  );
}

export function InputDisabledPreview() {
  return (
    <InputField
      id="patient-name-disabled"
      label="Patient name"
      disabled
      defaultValue="Elena Morales"
    />
  );
}

export function InputErrorPreview() {
  return (
    <InputField
      id="email-error"
      label="Email"
      invalid
      defaultValue="not-an-email"
      error="Enter a valid email address."
    />
  );
}

export function InputReadOnlyPreview() {
  return (
    <InputField
      id="mrn-readonly"
      label="Medical record number"
      readOnly
      defaultValue="MRN-104829"
      helperText="Assigned at registration and cannot be edited."
    />
  );
}

export function InputLoadingPreview() {
  return (
    <InputField
      id="patient-lookup-loading"
      label="Patient lookup"
      loading
      placeholder="Verifying MRN…"
      defaultValue="MRN-104829"
    />
  );
}

export function InputHelperTextPreview() {
  return (
    <InputField
      id="patient-name-helper"
      label="Patient name"
      placeholder="Enter full legal name"
      helperText="Use the name shown on the insurance card."
    />
  );
}

export function InputValidationTextPreview() {
  return (
    <InputField
      id="phone-validation"
      label="Mobile phone"
      type="tel"
      placeholder="(555) 000-0000"
      helperText="Enter a 10-digit US phone number without country code."
    />
  );
}

export function InputErrorMessagePreview() {
  return (
    <InputField
      id="dob-error"
      label="Date of birth"
      invalid
      defaultValue="02/30/1985"
      error="Enter a valid date of birth."
    />
  );
}

export function InputSearchPreview() {
  return (
    <InputField
      id="patient-search"
      label="Search patients"
      type="search"
      startIcon={<SearchIcon aria-hidden />}
      placeholder="Search by MRN or patient name"
    />
  );
}

export function InputStartIconPreview() {
  return (
    <InputField
      id="patient-name-icon"
      label="Patient name"
      startIcon={<UserIcon aria-hidden />}
      placeholder="Enter patient name"
    />
  );
}

export function InputEndIconPreview() {
  return (
    <InputField
      id="referral-id"
      label="Referral ID"
      defaultValue="REF-2026-0142"
      endIcon={<SearchIcon aria-hidden />}
      helperText="Press Enter or click search to verify the referral."
    />
  );
}

export function InputPrefixCurrencyPreview() {
  return (
    <InputField
      id="copay-amount"
      label="Copay amount"
      prefix="$"
      inputMode="decimal"
      defaultValue="25.00"
      helperText="Enter the amount collected at check-in."
    />
  );
}

export function InputPrefixIdPreview() {
  return (
    <InputField
      id="patient-id"
      label="Patient ID"
      prefix="ID"
      placeholder="Enter identifier"
    />
  );
}

export function InputPrefixMrnPreview() {
  return (
    <InputField
      id="mrn-prefix"
      label="Medical record number"
      prefix="MRN"
      placeholder="104829"
    />
  );
}

export function InputSuffixKgPreview() {
  return (
    <InputField
      id="weight-kg"
      label="Weight"
      suffix="kg"
      inputMode="decimal"
      defaultValue="72"
    />
  );
}

export function InputSuffixCmPreview() {
  return (
    <InputField
      id="height-cm"
      label="Height"
      suffix="cm"
      inputMode="decimal"
      defaultValue="168"
    />
  );
}

export function InputSuffixLbsPreview() {
  return (
    <InputField
      id="weight-lbs"
      label="Weight"
      suffix="lbs"
      inputMode="decimal"
      defaultValue="158"
    />
  );
}

export function InputSuffixYearsPreview() {
  return (
    <InputField
      id="patient-age"
      label="Age"
      suffix="years"
      inputMode="numeric"
      defaultValue="42"
    />
  );
}

export function InputSuffixPercentPreview() {
  return (
    <InputField
      id="coverage-percent"
      label="Insurance coverage"
      suffix="%"
      inputMode="decimal"
      defaultValue="80"
    />
  );
}

export function InputUnitWeightPreview() {
  return (
    <InputField
      id="vitals-weight"
      label="Patient weight"
      suffix="kg"
      inputMode="decimal"
      defaultValue="72.5"
      helperText="Record the most recent weight from the clinical intake."
    />
  );
}

export function InputUnitHeightPreview() {
  return (
    <InputField
      id="vitals-height"
      label="Patient height"
      suffix="cm"
      inputMode="decimal"
      defaultValue="168"
      helperText="Use centimeters for imaging protocol calculations."
    />
  );
}

export function InputUnitAgePreview() {
  return (
    <InputField
      id="vitals-age"
      label="Patient age"
      suffix="years"
      inputMode="numeric"
      defaultValue="42"
    />
  );
}

export function InputUnitPercentagePreview() {
  return (
    <InputField
      id="benefit-percent"
      label="Benefit coverage"
      suffix="%"
      inputMode="decimal"
      defaultValue="80"
      helperText="Percentage covered by the primary insurance plan."
    />
  );
}

export function InputSearchToolbarPreview() {
  return (
    <InputGroup
      type="search"
      size="sm"
      startIcon={<SearchIcon aria-hidden />}
      placeholder="Search by MRN or patient name"
      aria-label="Search by MRN or patient name"
    />
  );
}
