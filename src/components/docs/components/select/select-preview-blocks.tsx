"use client";

import {
  MultiSelectField,
  SearchableSelectField,
  SelectField,
} from "@/components/select";

export const patientStatusOptions = [
  { value: "active", label: "Active" },
  { value: "observation", label: "Under observation" },
  { value: "discharged", label: "Discharged" },
];

const patientOptions = [
  { value: "elena-morales", label: "Elena Morales · MRN 104829" },
  { value: "marcus-lee", label: "Marcus Lee · MRN 104912" },
  { value: "priya-shah", label: "Priya Shah · MRN 105031" },
  { value: "daniel-kim", label: "Daniel Kim · MRN 105114" },
];

const providerOptions = [
  { value: "patel", label: "Dr. Aisha Patel · Radiology" },
  { value: "nguyen", label: "Dr. Minh Nguyen · Cardiology" },
  { value: "rodriguez", label: "Dr. Sofia Rodriguez · Primary Care" },
  { value: "cohen", label: "Dr. David Cohen · Orthopedics" },
];

const facilityOptions = [
  { value: "hospital-a", label: "Medmo General Hospital" },
  { value: "hospital-b", label: "Northside Medical Center" },
  { value: "clinic-a", label: "Downtown Imaging Clinic" },
  { value: "clinic-b", label: "Westbrook Outpatient Clinic" },
];

const studyOptions = [
  { value: "brain-mri", label: "MRI brain without contrast" },
  { value: "chest-ct", label: "CT chest with contrast" },
  { value: "knee-xray", label: "X-ray knee, 3 views" },
  { value: "pet-ct", label: "PET/CT whole body" },
  { value: "ultrasound", label: "Abdominal ultrasound" },
];

export function SelectDefaultPreview({
  id = "patient-status-default",
}: {
  id?: string;
}) {
  return (
    <SelectField
      id={id}
      label="Patient status"
      options={patientStatusOptions}
      defaultValue="active"
      placeholder="Select status"
    />
  );
}

export function SelectRequiredPreview() {
  return (
    <SelectField
      id="patient-status-required"
      label="Patient status"
      options={patientStatusOptions}
      required
      placeholder="Select status"
    />
  );
}

export function SelectDisabledPreview() {
  return (
    <SelectField
      id="patient-status-disabled"
      label="Patient status"
      options={patientStatusOptions}
      defaultValue="active"
      disabled
    />
  );
}

export function SelectErrorPreview() {
  return (
    <SelectField
      id="patient-status-error"
      label="Patient status"
      options={patientStatusOptions}
      error="Select a patient status to continue."
      placeholder="Select status"
    />
  );
}

export function SelectReadOnlyPreview() {
  return (
    <SelectField
      id="patient-status-readonly"
      label="Patient status"
      options={patientStatusOptions}
      defaultValue="discharged"
      readOnly
      helperText="This status is locked after the encounter is closed."
    />
  );
}

export function SelectLoadingPreview() {
  return (
    <SelectField
      id="facility-loading"
      label="Imaging facility"
      options={[]}
      loading
      helperText="Retrieving facilities from the scheduling network."
    />
  );
}

export function SelectHelperTextPreview({
  id = "patient-status-helper",
}: {
  id?: string;
}) {
  return (
    <SelectField
      id={id}
      label="Patient status"
      options={patientStatusOptions}
      defaultValue="active"
      helperText="Status updates sync to the care team dashboard."
    />
  );
}

export function SelectValidationMessagePreview() {
  return (
    <SelectField
      id="study-priority-validation"
      label="Study priority"
      options={[
        { value: "routine", label: "Routine" },
        { value: "urgent", label: "Urgent" },
        { value: "stat", label: "STAT" },
      ]}
      validationMessage="Choose STAT only when immediate clinical review is required."
      placeholder="Select priority"
    />
  );
}

export function SelectErrorMessagePreview() {
  return (
    <SelectField
      id="facility-error-message"
      label="Imaging facility"
      options={facilityOptions}
      error="Select a facility that supports the ordered study."
      placeholder="Select facility"
    />
  );
}

export function SearchablePatientsPreview() {
  return (
    <SearchableSelectField
      id="search-patients"
      label="Patient"
      options={patientOptions}
      placeholder="Search by patient name or MRN"
      helperText="Results match the active patient registry."
    />
  );
}

export function SearchableProvidersPreview() {
  return (
    <SearchableSelectField
      id="search-providers"
      label="Referring provider"
      options={providerOptions}
      placeholder="Search provider name or specialty"
    />
  );
}

export function SearchableFacilitiesPreview() {
  return (
    <SearchableSelectField
      id="search-facilities"
      label="Imaging facility"
      options={facilityOptions}
      placeholder="Search facility name"
    />
  );
}

export function SearchableStudiesPreview() {
  return (
    <SearchableSelectField
      id="search-studies"
      label="Ordered study"
      options={studyOptions}
      placeholder="Search studies and modalities"
    />
  );
}

export function MultiSelectStudiesPreview() {
  return (
    <MultiSelectField
      id="multi-studies"
      label="Studies to include"
      options={studyOptions}
      defaultValue={["brain-mri", "chest-ct"]}
      helperText="Select every study that belongs in the patient packet."
    />
  );
}

export function MultiSelectTagsPreview() {
  return (
    <MultiSelectField
      id="multi-care-tags"
      label="Care coordination tags"
      options={[
        { value: "high-risk", label: "High risk" },
        { value: "needs-transport", label: "Needs transportation" },
        { value: "interpreter", label: "Interpreter required" },
        { value: "prior-auth", label: "Prior authorization" },
      ]}
      defaultValue={["interpreter", "prior-auth"]}
      placeholder="Add tags"
    />
  );
}

export function MultiSelectRemovablePreview() {
  return (
    <MultiSelectField
      id="multi-facilities"
      label="Preferred facilities"
      options={facilityOptions}
      defaultValue={["hospital-a", "clinic-a", "clinic-b"]}
      helperText="Remove a selection with its × button or Backspace."
    />
  );
}

export function GroupedFacilitiesPreview() {
  return (
    <SelectField
      id="grouped-facilities"
      label="Imaging facility"
      placeholder="Select facility"
      options={[
        { value: "hospital-a", label: "Medmo General Hospital", group: "Hospitals" },
        { value: "hospital-b", label: "Northside Medical Center", group: "Hospitals" },
        { value: "clinic-a", label: "Downtown Imaging Clinic", group: "Clinics" },
        { value: "clinic-b", label: "Westbrook Outpatient Clinic", group: "Clinics" },
      ]}
    />
  );
}

export function LargeDatasetPreview() {
  return (
    <SearchableSelectField
      id="large-provider-dataset"
      label="Provider directory"
      options={[
        ...providerOptions,
        { value: "bennett", label: "Dr. Maya Bennett · Neurology" },
        { value: "williams", label: "Dr. Jordan Williams · Oncology" },
        { value: "martinez", label: "Dr. Luis Martinez · Internal Medicine" },
        { value: "chen", label: "Dr. Amy Chen · Endocrinology" },
      ]}
      placeholder="Search provider directory"
      helperText="Use search for directories with more than 10 options."
    />
  );
}

export function AsyncLoadingPreview() {
  return (
    <SearchableSelectField
      id="async-facilities"
      label="Network facility"
      options={[]}
      loading
      placeholder="Search network facilities"
      loadingMessage="Loading facilities…"
      helperText="Results load from the scheduling network."
    />
  );
}
