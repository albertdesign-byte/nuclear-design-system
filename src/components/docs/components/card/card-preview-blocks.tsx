"use client";

import {
  CalendarClockIcon,
  FileTextIcon,
  InboxIcon,
  ScanLineIcon,
  StethoscopeIcon,
  UserRoundIcon,
} from "lucide-react";

import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
  CardTitle,
} from "@/components/card";

function StudyArtwork({ label }: { label: string }) {
  return (
    <svg
      viewBox="0 0 640 360"
      role="img"
      aria-label={label}
      className="aspect-video w-full bg-[var(--color-surface-muted)]"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="640" height="360" fill="var(--color-surface-muted)" />
      <circle
        cx="320"
        cy="180"
        r="112"
        fill="var(--color-background)"
        stroke="var(--color-border)"
        strokeWidth="4"
      />
      <circle
        cx="320"
        cy="180"
        r="72"
        fill="var(--color-surface)"
        stroke="var(--color-border-strong)"
        strokeWidth="3"
      />
      <path
        d="M220 180h200M320 80v200"
        stroke="var(--color-border)"
        strokeWidth="2"
        strokeDasharray="8 8"
      />
      <path
        d="M275 180c18-38 72-38 90 0-18 38-72 38-90 0Z"
        fill="var(--color-surface-active)"
        stroke="var(--color-action-primary)"
        strokeWidth="3"
      />
    </svg>
  );
}

export function CardVariantsPreview() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-[var(--space-card-gap)]">
      <Card>
        <CardContent>
          <p className="font-medium">Basic Card</p>
          <p className="mt-[var(--space-stack-xs)] text-[var(--color-text-muted)]">
            A simple grouped content surface.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <h3>Card with Header</h3>
          </CardTitle>
          <CardDescription>Patient information updated today.</CardDescription>
        </CardHeader>
        <CardContent>Vital signs are within expected ranges.</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <h3>Card with Footer</h3>
          </CardTitle>
        </CardHeader>
        <CardContent>Review this referral before scheduling.</CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            View referral
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <h3>Card with Actions</h3>
          </CardTitle>
          <CardDescription>Actions adapt instead of overflowing.</CardDescription>
          <CardAction>
            <Badge variant="outline">Pending</Badge>
          </CardAction>
        </CardHeader>
        <CardContent>Study requires a final quality review.</CardContent>
        <CardFooter className="justify-end">
          <Button variant="ghost" size="sm">
            Dismiss
          </Button>
          <Button variant="outline" size="sm">
            Review
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardMedia>
          <StudyArtwork label="Abstract axial CT study preview" />
        </CardMedia>
        <CardHeader>
          <CardTitle>
            <h3>Card with Image</h3>
          </CardTitle>
          <CardDescription>Chest CT · 246 images</CardDescription>
        </CardHeader>
        <CardContent>Acquired 14 Aug 2026 at 09:42.</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <h3>Empty State Card</h3>
          </CardTitle>
          <CardDescription>No reports have been added.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-start gap-[var(--space-stack-sm)]">
          <InboxIcon className="size-5 text-[var(--color-text-muted)]" aria-hidden />
          <p className="text-[var(--color-text-muted)]">
            Create the first report when findings are ready.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            Create report
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export function CardContentFlexibilityPreview() {
  return (
    <div className="flex w-full flex-col items-start gap-[var(--space-card-gap)]">
      <Card>
        <CardHeader>
          <CardTitle>
            <h3>
              Follow-up review for a patient with a long multi-specialty care
              plan
            </h3>
          </CardTitle>
          <CardDescription>
            This longer description remains fully visible and wraps naturally
            without pushing the status action outside the Card.
          </CardDescription>
          <CardAction>
            <Badge variant="secondary">Needs review</Badge>
          </CardAction>
        </CardHeader>
        <CardContent>
          Dynamic notes can add lines while the container continues growing with
          its content.
        </CardContent>
      </Card>

      <Card className="max-w-[18rem]">
        <CardHeader>
          <CardTitle>
            <h3>Multiple actions</h3>
          </CardTitle>
          <CardDescription>
            Footer controls wrap at narrow widths.
          </CardDescription>
        </CardHeader>
        <CardContent>
          No action is clipped when localization or content increases its width.
        </CardContent>
        <CardFooter className="justify-end">
          <Button variant="ghost" size="sm">
            Cancel
          </Button>
          <Button variant="outline" size="sm">
            Save draft
          </Button>
          <Button size="sm">Finalize</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <h3>Dynamic study history</h3>
          </CardTitle>
          <CardDescription>Items may be added at runtime.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-[var(--space-stack-xs)]">
            {[
              "Order received",
              "Insurance verified",
              "Study scheduled",
              "Images acquired",
              "Report in progress",
            ].map((event) => (
              <li key={event} className="flex items-center gap-[var(--space-inline-sm)]">
                <span
                  className="size-1.5 shrink-0 rounded-full bg-[var(--color-action-primary)]"
                  aria-hidden
                />
                {event}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <h3>Long identifiers</h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          STUDY-2026-CARDIOLOGY-MULTI-SITE-REFERRAL-00000048291
        </CardContent>
      </Card>
    </div>
  );
}

const responsiveExamples = [
  {
    label: "Mobile",
    width: "max-w-[17.5rem]",
    description: "Single column, wrapped title, stacked header action.",
  },
  {
    label: "Tablet",
    width: "max-w-md",
    description: "One or two columns based on available space.",
  },
  {
    label: "Desktop",
    width: "max-w-xl",
    description: "Multi-column grids with content-driven heights.",
  },
] as const;

export function CardResponsivePreview() {
  return (
    <div className="flex w-full flex-col items-center gap-[var(--space-stack-lg)]">
      {responsiveExamples.map(({ label, width, description }) => (
        <div key={label} className={`w-full ${width}`}>
          <p className="mb-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] font-medium text-[var(--color-text-muted)]">
            {label}
          </p>
          <Card>
            <CardHeader>
              <CardTitle>
                <h3>Responsive patient coordination summary</h3>
              </CardTitle>
              <CardDescription>{description}</CardDescription>
              <CardAction>
                <Badge variant="outline">Open</Badge>
              </CardAction>
            </CardHeader>
            <CardContent>
              The Card grows vertically and preserves every line of content.
            </CardContent>
            <CardFooter className="justify-end">
              <Button variant="outline" size="sm">
                View details
              </Button>
              <Button size="sm">Continue</Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}

const healthcareCards = [
  {
    id: "patient-summary-card",
    title: "Patient Summary Card",
    description: "Maria Gonzalez · MRN 48291",
    icon: UserRoundIcon,
    content: "58 years · Cardiology · Next visit 18 Aug 2026",
    badge: "Stable",
  },
  {
    id: "study-card",
    title: "Study Card",
    description: "Chest CT with contrast",
    icon: ScanLineIcon,
    content: "246 images · Acquired today at 09:42",
    badge: "Ready",
  },
  {
    id: "report-card",
    title: "Report Card",
    description: "Radiology findings",
    icon: FileTextIcon,
    content: "Draft updated 12 minutes ago by Dr. Patel",
    badge: "Draft",
  },
  {
    id: "provider-card",
    title: "Provider Card",
    description: "Dr. Avery Patel",
    icon: StethoscopeIcon,
    content: "Radiology · 14 studies assigned today",
    badge: "Available",
  },
] as const;

export function HealthcareCardExamplesPreview() {
  return (
    <div className="flex w-full flex-col items-start gap-[var(--space-card-gap)]">
      {healthcareCards.map(
        ({ id, title, description, icon: Icon, content, badge }) => (
          <Card key={id} role="region" aria-labelledby={id}>
            <CardHeader>
              <CardTitle>
                <h3 id={id} className="flex items-center gap-[var(--space-inline-sm)]">
                  <Icon className="size-4 shrink-0 text-[var(--color-text-muted)]" aria-hidden />
                  {title}
                </h3>
              </CardTitle>
              <CardDescription>{description}</CardDescription>
              <CardAction>
                <Badge variant="secondary">{badge}</Badge>
              </CardAction>
            </CardHeader>
            <CardContent>{content}</CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                View details
              </Button>
            </CardFooter>
          </Card>
        )
      )}
    </div>
  );
}

export function CardGuidelineCard({
  title,
  description,
  correct,
  incorrect,
  icon: Icon = CalendarClockIcon,
}: {
  title: string;
  description: string;
  correct: string;
  incorrect: string;
  icon?: typeof CalendarClockIcon;
}) {
  return (
    <article className="flex flex-col gap-[var(--space-stack-sm)] rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]">
      <div className="flex items-center gap-[var(--space-inline-sm)]">
        <Icon className="size-4 shrink-0 text-[var(--color-text-muted)]" aria-hidden />
        <h3 className="text-[length:var(--text-label-size)] font-semibold text-[var(--color-text-primary)]">
          {title}
        </h3>
      </div>
      <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
        {description}
      </p>
      <p className="text-[length:var(--text-caption-size)] text-[var(--color-success-text)]">
        <strong>Correct:</strong> {correct}
      </p>
      <p className="text-[length:var(--text-caption-size)] text-[var(--color-error-text)]">
        <strong>Incorrect:</strong> {incorrect}
      </p>
    </article>
  );
}
