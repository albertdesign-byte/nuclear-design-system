"use client";

import { Button } from "@/components/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/popover";
import { ThemeToggle } from "@/components/theme-toggle";
import { InfoIcon } from "lucide-react";

export function PopoverPlayground() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Popover Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-semibold">Medication info</h2>
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>
            <InfoIcon />
            Lisinopril 10 mg
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <PopoverHeader>
              <PopoverTitle>Lisinopril 10 mg</PopoverTitle>
              <PopoverDescription>
                ACE inhibitor for hypertension. Take once daily in the morning
                with or without food. Monitor potassium and renal function.
              </PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </section>
    </div>
  );
}
