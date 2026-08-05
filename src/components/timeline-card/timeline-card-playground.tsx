"use client";

import {
  ClipboardListIcon,
  PhoneIcon,
  StickyNoteIcon,
} from "lucide-react";

import { TimelineCard } from "@/components/timeline-card";
import { ThemeToggle } from "@/components/theme-toggle";

export function TimelineCardPlayground() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Timeline Card Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="flex flex-col gap-6 rounded-lg border border-border bg-card p-6">
        <TimelineCard
          icon={<ClipboardListIcon />}
          title="Px task created"
          author="Leslie Gonzales"
          description="Follow up - Authorization (3232293) created. Description: follow up on auth, once approved, send MS task to Sentara Norfolk General Hospital. Due 04/27/2026"
          tags={[
            { label: "Patient", href: "#" },
            {
              label: "MRI Spine Lumbar with and without intravenous contrast",
              href: "#",
            },
          ]}
        />

        <TimelineCard
          icon={<StickyNoteIcon />}
          title="Internal notes"
          author="Leslie Gonzales"
          description="Stage updated from Requested to Qualified by Leslie Gonzalez"
          tags={[
            {
              label: "MRI Spine Lumbar with and without intravenous contrast",
              href: "#",
            },
          ]}
        />

        <TimelineCard
          priority="High"
          icon={<ClipboardListIcon />}
          title="PA Updated"
          author="Maximilian Alejandro de la Cruz González"
          description="PA status changed from Submitted to Pending"
          tags={[{ label: "#534268", href: "#" }]}
        />

        <TimelineCard
          icon={<PhoneIcon />}
          title="Medmo voice call"
          author="Leslie Gonzales"
          description="Cardio direct transfer - Call canceled by agent"
          tags={[{ label: "Patient", href: "#" }]}
        />
      </section>
    </div>
  );
}
