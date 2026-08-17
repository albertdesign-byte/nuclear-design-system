"use client";

import {
  ClipboardListIcon,
  PhoneIcon,
  StickyNoteIcon,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import {
  Timeline,
  TimelineBody,
  TimelineColumn,
  TimelineColumnHeader,
  TimelineEntry,
  TimelineHeader,
} from "@/components/timeline";
import { TimelineCard } from "@/components/timeline-card";

export function TimelinePlayground() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Timeline Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <Timeline>
        <TimelineHeader>
          <TimelineColumnHeader column="system-events" />
          <TimelineColumnHeader column="notes" />
          <TimelineColumnHeader column="communications" />
        </TimelineHeader>
        <TimelineBody maxHeight="32rem">
          <TimelineColumn column="system-events">
            <TimelineEntry column="system-events" time="7:29 am">
              <TimelineCard
                icon={<ClipboardListIcon />}
                title="Px task created"
                author="Leslie Gonzales"
                description="Follow up - Authorization (3232293) created. Due 04/27/2026"
                tags={[
                  { label: "Patient", href: "#" },
                  {
                    label: "MRI Spine Lumbar with and without intravenous contrast",
                    href: "#",
                  },
                ]}
              />
            </TimelineEntry>
            <TimelineEntry column="system-events" time="7:28 am">
              <TimelineCard
                priority="High"
                icon={<ClipboardListIcon />}
                title="PA Updated"
                author="Maximilian Alexander Gonzalez"
                description="PA status changed from Submitted to Pending"
                tags={[{ label: "#534268", href: "#" }]}
              />
            </TimelineEntry>
          </TimelineColumn>

          <TimelineColumn column="notes">
            <TimelineEntry column="notes" time="7:29 am">
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
            </TimelineEntry>
          </TimelineColumn>

          <TimelineColumn column="communications">
            <TimelineEntry column="communications" time="7:29 am">
              <TimelineCard
                icon={<PhoneIcon />}
                title="Medmo voice call"
                author="Leslie Gonzales"
                description="Cardio direct transfer - Call canceled by agent"
                tags={[{ label: "Patient", href: "#" }]}
              />
            </TimelineEntry>
          </TimelineColumn>
        </TimelineBody>
      </Timeline>
    </div>
  );
}
