"use client";

import { useEffect, useState } from "react";
import { CalendarIcon, FileTextIcon, UserIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/command";
import { ThemeToggle } from "@/components/theme-toggle";

const patients = [
  { id: "48291", name: "María González", mrn: "MRN-48291" },
  { id: "51002", name: "Elena Morales", mrn: "MRN-51002" },
  { id: "44718", name: "Carlos Ruiz", mrn: "MRN-44718" },
];

export function CommandPlayground() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Command Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-semibold">Search patients</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Press{" "}
          <kbd className="rounded border px-1.5 py-0.5 text-xs">⌘K</kbd> or use
          the button below.
        </p>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open command palette
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
                    key={patient.id}
                    value={`${patient.name} ${patient.mrn}`}
                    onSelect={() => setOpen(false)}
                  >
                    <UserIcon />
                    <span>{patient.name}</span>
                    <span className="text-[var(--color-text-muted)]">
                      {patient.mrn}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Actions">
                <CommandItem onSelect={() => setOpen(false)}>
                  <CalendarIcon />
                  Schedule appointment
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  <FileTextIcon />
                  New clinical note
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </section>
    </div>
  );
}
