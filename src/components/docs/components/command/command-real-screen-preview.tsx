"use client";

import { useState } from "react";
import { UserIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/command";

const patients = [
  { name: "María González", mrn: "MRN-48291" },
  { name: "Elena Morales", mrn: "MRN-51002" },
];

export function CommandRealScreenPreview() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
        Search patients
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search patients"
        description="Find a patient by name or MRN"
      >
        <Command>
          <CommandInput placeholder="Search patients…" />
          <CommandList>
            <CommandEmpty>No patients found.</CommandEmpty>
            <CommandGroup heading="Patients">
              {patients.map((patient) => (
                <CommandItem
                  key={patient.mrn}
                  value={`${patient.name} ${patient.mrn}`}
                  onSelect={() => setOpen(false)}
                >
                  <UserIcon />
                  {patient.name}
                  <span className="text-[var(--color-text-muted)]">
                    {patient.mrn}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
