import { ClipboardListIcon } from "lucide-react";

import { TimelineCard } from "@/components/timeline-card";

export function TimelineCardRealScreenPreview() {
  return (
    <TimelineCard
      priority="High"
      icon={<ClipboardListIcon />}
      title="PA Updated"
      author="Maximilian Alexander Gonzalez"
      description="PA status changed from Submitted to Pending"
      tags={[{ label: "#534268", href: "#" }]}
    />
  );
}
