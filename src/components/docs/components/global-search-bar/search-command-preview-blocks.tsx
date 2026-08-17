"use client";

import {
  FileTextIcon,
  SearchIcon,
  SettingsIcon,
  UploadIcon,
  UserPlusIcon,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/command";
import { GlobalSearchBar } from "@/components/global-search-bar";

export const patientSearchItems = [
  { label: "Elena Morales · MRN 104829", value: "patient-elena", group: "Patients" },
  { label: "Marcus Lee · MRN 104912", value: "patient-marcus", group: "Patients" },
  { label: "Priya Shah · MRN 105031", value: "patient-priya", group: "Patients" },
];

export const studySearchItems = [
  { label: "MRI brain without contrast · SRID-2841", value: "study-2841", group: "Studies" },
  { label: "CT chest with contrast · SRID-2904", value: "study-2904", group: "Studies" },
  { label: "PET/CT whole body · SRID-2977", value: "study-2977", group: "Studies" },
];

export const facilitySearchItems = [
  { label: "Medmo General Hospital", value: "facility-general", group: "Facilities" },
  { label: "Downtown Imaging Clinic", value: "facility-downtown", group: "Facilities" },
  { label: "Westbrook Outpatient Clinic", value: "facility-westbrook", group: "Facilities" },
];

export function SearchPatientsPreview() {
  return (
    <GlobalSearchBar
      placeholder="Search patients"
      dialogTitle="Search patients"
      dialogDescription="Find a patient by name or MRN"
      items={patientSearchItems}
      emptyMessage="No patients found."
      shortcutEnabled={false}
    />
  );
}

export function SearchStudiesPreview() {
  return (
    <GlobalSearchBar
      placeholder="Search studies"
      dialogTitle="Search studies"
      dialogDescription="Find a study by description or SRID"
      items={studySearchItems}
      emptyMessage="No studies found."
      shortcutEnabled={false}
    />
  );
}

export function SearchFacilitiesPreview() {
  return (
    <GlobalSearchBar
      placeholder="Search facilities"
      dialogTitle="Search facilities"
      dialogDescription="Find an imaging facility"
      items={facilitySearchItems}
      emptyMessage="No facilities found."
      shortcutEnabled={false}
    />
  );
}

export function SearchAllEntitiesPreview() {
  return (
    <GlobalSearchBar
      placeholder="Search patients, studies, facilities, and records"
      dialogTitle="Search Medmo"
      dialogDescription="Find healthcare entities and records across the application"
      items={[
        ...patientSearchItems,
        ...studySearchItems,
        ...facilitySearchItems,
        { label: "Dr. Aisha Patel · Radiology", value: "user-patel", group: "Users" },
        { label: "Referral record · REC-18420", value: "record-18420", group: "Records" },
      ]}
    />
  );
}

export function CommandActionsPreview({ onSelect }: { onSelect?: () => void } = {}) {
  return (
    <Command className="max-w-md rounded-[var(--radius-lg)] border border-[var(--color-border)]">
      <CommandInput placeholder="Type a command or action…" />
      <CommandList>
        <CommandEmpty>No commands found.</CommandEmpty>
        <CommandGroup heading="Quick Actions">
          <CommandItem value="create patient" onSelect={onSelect}>
            <UserPlusIcon aria-hidden />
            Create Patient
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem value="upload study" onSelect={onSelect}>
            <UploadIcon aria-hidden />
            Upload Study
            <CommandShortcut>⌘U</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Navigation">
          <CommandItem value="open settings" onSelect={onSelect}>
            <SettingsIcon aria-hidden />
            Open Settings
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
          <CommandItem value="navigate reports" onSelect={onSelect}>
            <FileTextIcon aria-hidden />
            Navigate to Reports
            <CommandShortcut>G R</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export function SearchCommandAuditPreview() {
  return (
    <div className="grid w-full gap-[var(--space-stack-lg)] lg:grid-cols-2">
      <div className="flex flex-col gap-[var(--space-stack-sm)]">
        <div className="flex items-center gap-[var(--space-inline-sm)]">
          <SearchIcon className="size-[var(--icon-sm)] text-[var(--color-info-foreground)]" aria-hidden />
          <h4 className="font-medium text-[var(--color-text-primary)]">Search</h4>
        </div>
        <SearchPatientsPreview />
        <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
          Finds healthcare entities and returns a result to open or select.
        </p>
      </div>
      <div className="flex flex-col gap-[var(--space-stack-sm)]">
        <div className="flex items-center gap-[var(--space-inline-sm)]">
          <SettingsIcon className="size-[var(--icon-sm)] text-[var(--color-info-foreground)]" aria-hidden />
          <h4 className="font-medium text-[var(--color-text-primary)]">Command</h4>
        </div>
        <CommandActionsPreview />
        <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
          Executes actions or navigates directly, with optional keyboard shortcuts.
        </p>
      </div>
    </div>
  );
}
