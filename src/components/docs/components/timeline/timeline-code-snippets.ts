import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const timelineImport = `import {
  Timeline,
  TimelineBody,
  TimelineColumn,
  TimelineColumnHeader,
  TimelineEntry,
  TimelineHeader,
} from "@/components/timeline";
import { TimelineCard } from "@/components/timeline-card";`;

export const timelineInstallationUiSnippet = tsxSnippet(`${timelineImport}
import { ClipboardListIcon } from "lucide-react";

export function Example() {
  return (
    <Timeline>
      <TimelineHeader>
        <TimelineColumnHeader column="system-events" />
        <TimelineColumnHeader column="notes" />
        <TimelineColumnHeader column="communications" />
      </TimelineHeader>
      <TimelineBody>
        <TimelineColumn column="system-events">
          <TimelineEntry column="system-events" time="7:29 am">
            <TimelineCard
              icon={<ClipboardListIcon />}
              title="Px task created"
              author="Leslie Gonzales"
              tags={[{ label: "Patient", href: "#" }]}
            />
          </TimelineEntry>
        </TimelineColumn>
        <TimelineColumn column="notes" />
        <TimelineColumn column="communications" />
      </TimelineBody>
    </Timeline>
  );
}`);

export const timelineRealScreenSnippet = tsxSnippet(`${timelineImport}
import {
  ClipboardListIcon,
  PhoneIcon,
  StickyNoteIcon,
} from "lucide-react";

export function Example() {
  return (
    <Timeline>
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
              description="Follow up - Authorization (3232293) created."
              tags={[{ label: "Patient", href: "#" }]}
            />
          </TimelineEntry>
        </TimelineColumn>
        <TimelineColumn column="notes">
          <TimelineEntry column="notes" time="7:29 am">
            <TimelineCard
              icon={<StickyNoteIcon />}
              title="Internal notes"
              author="Leslie Gonzales"
              description="Stage updated from Requested to Qualified."
            />
          </TimelineEntry>
        </TimelineColumn>
        <TimelineColumn column="communications">
          <TimelineEntry column="communications" time="7:29 am">
            <TimelineCard
              icon={<PhoneIcon />}
              title="Medmo voice call"
              author="Leslie Gonzales"
              description="Cardio direct transfer - Call canceled by agent."
              tags={[{ label: "Patient", href: "#" }]}
            />
          </TimelineEntry>
        </TimelineColumn>
      </TimelineBody>
    </Timeline>
  );
}`);

export const timelineUsageSnippet = exampleSnippet(
  `<TimelineColumn column="notes">
  <TimelineEntry column="notes" time="7:29 am">
    <TimelineCard
      title="Internal notes"
      author="Leslie Gonzales"
      tags={[{ label: "Patient", href: "#" }]}
    />
  </TimelineEntry>
</TimelineColumn>`,
  { imports: [timelineImport] }
);

export const timelineDeprecatedSnippet = exampleSnippet(
  `<TimelineEventCard
  column="system-events"
  time="9:14 AM"
  title="PX_task — Prior Authorization"
  stages={[
    { label: "Requested", variant: "success" },
    { label: "MS1 Approved", variant: "success" },
  ]}
/>`,
  {
    imports: [
      `import { TimelineEventCard } from "@/components/timeline";`,
    ],
  }
);
