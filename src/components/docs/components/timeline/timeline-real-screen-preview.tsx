import {
  ClipboardListIcon,
  PhoneIcon,
  StickyNoteIcon,
} from "lucide-react";

import {
  Timeline,
  TimelineBody,
  TimelineColumn,
  TimelineColumnHeader,
  TimelineEntry,
  TimelineHeader,
} from "@/components/timeline";
import { TimelineCard } from "@/components/timeline-card";

export function TimelineRealScreenPreview() {
  return (
    <Timeline className="w-full">
      <TimelineHeader>
        <TimelineColumnHeader column="system-events" />
        <TimelineColumnHeader column="notes" />
        <TimelineColumnHeader column="communications" />
      </TimelineHeader>
      <TimelineBody maxHeight="24rem">
        <TimelineColumn column="system-events">
          <TimelineEntry column="system-events" time="7:29 am">
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
          </TimelineEntry>
          <TimelineEntry column="system-events" time="7:28 am">
            <TimelineCard
              priority="High"
              icon={<ClipboardListIcon />}
              title="PA Updated"
              author="Maximilian Alejandro de la Cruz González"
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
  );
}
