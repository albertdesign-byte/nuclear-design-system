import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const timelineCardImport = 'import { TimelineCard } from "@/components/timeline-card";';
const iconImport = 'import { ClipboardListIcon } from "lucide-react";';

export const timelineCardInstallationUiSnippet = tsxSnippet(`${iconImport}
${timelineCardImport}

export function Example() {
  return (
    <TimelineCard
      icon={<ClipboardListIcon />}
      title="Px task created"
      author="Leslie Gonzales"
      description="Follow up - Authorization (3232293) created."
      tags={[{ label: "Patient", href: "#" }]}
    />
  );
}`);

export const timelineCardRealScreenSnippet = tsxSnippet(`${iconImport}
${timelineCardImport}

<TimelineCard
  priority="High"
  icon={<ClipboardListIcon />}
  title="PA Updated"
  author="Maximilian Alejandro de la Cruz González"
  description="PA status changed from Submitted to Pending"
  tags={[{ label: "#534268", href: "#" }]}
/>`);

export const timelineCardUsageSnippet = exampleSnippet(
  `<TimelineCard
  title="Internal notes"
  author="Leslie Gonzales"
  description="Stage updated from Requested to Qualified by Leslie Gonzalez"
  tags={[{ label: "Patient", href: "#" }]}
/>`,
  { imports: [timelineCardImport] }
);
