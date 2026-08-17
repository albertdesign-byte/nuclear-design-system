import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const tooltipImport = `import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/tooltip";`;
const buttonImport = 'import { Button } from "@/components/button";';
const iconImport = 'import { CircleHelpIcon } from "lucide-react";';

export const tooltipInstallationUiSnippet = tsxSnippet(`${tooltipImport}
${buttonImport}
${iconImport}

export function Example() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="ghost" size="icon-md" aria-label="Help" />}>
        <CircleHelpIcon />
      </TooltipTrigger>
      <TooltipContent>Contextual help text.</TooltipContent>
    </Tooltip>
  );
}`);

export const tooltipRealScreenSnippet = tsxSnippet(`${tooltipImport}
${buttonImport}
${iconImport}

export function Example() {
  return (
    <div className="flex items-center gap-[var(--space-inline-sm)]">
      <span>Patient ID: MED-104829</span>
      <Tooltip>
        <TooltipTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Patient ID help" />}>
          <CircleHelpIcon />
        </TooltipTrigger>
        <TooltipContent side="top">
          Internal identifier used across referrals and imaging studies.
        </TooltipContent>
      </Tooltip>
    </div>
  );
}`);

export const tooltipUsageSnippet = exampleSnippet(
  `<Tooltip>
  <TooltipTrigger render={<Button variant="ghost" size="icon-md" aria-label="Help" />}>
    <CircleHelpIcon />
  </TooltipTrigger>
  <TooltipContent>Contextual help text.</TooltipContent>
</Tooltip>`,
  { imports: [tooltipImport, buttonImport, iconImport] }
);

export const tooltipSideSnippet = exampleSnippet(
  `{(["top", "bottom", "left", "right"] as const).map((side) => (
  <Tooltip key={side}>
    <TooltipTrigger
      render={<Button variant="outline" size="sm">{side}</Button>}
    />
    <TooltipContent side={side}>Tooltip on {side}</TooltipContent>
  </Tooltip>
))}`,
  { imports: [tooltipImport, buttonImport] }
);

export const tooltipProviderSnippet = tsxSnippet(`import { TooltipProvider } from "@/components/tooltip";
${tooltipImport}

export function Example() {
  return (
    <TooltipProvider delay={200}>
      <Tooltip>
        <TooltipTrigger render={<button type="button">Hover me</button>} />
        <TooltipContent>Delayed tooltip</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`);

export const tooltipTriggerTypesSnippet = tsxSnippet(`${tooltipImport}
${buttonImport}
import { Input } from "@/components/input";
import Link from "next/link";
import { CircleHelpIcon } from "lucide-react";

export function Example() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger render={<Button size="icon-xl" aria-label="Patient ID help" />}>
          <CircleHelpIcon />
        </TooltipTrigger>
        <TooltipContent>Patient ID help</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger render={<Link href="/insurance">Insurance details</Link>} />
        <TooltipContent>View plan and eligibility information</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger render={<Button>Upload study</Button>} />
        <TooltipContent>Upload DICOM files</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger render={<Input aria-label="Patient ID" value="MED-104829" readOnly />} />
        <TooltipContent>Internal patient identifier</TooltipContent>
      </Tooltip>
    </>
  );
}`);

export const tooltipContentPatternsSnippet = exampleSnippet(
  `<TooltipContent>Patient ID</TooltipContent>

<TooltipContent>Report reviewed and ready to share.</TooltipContent>

<TooltipContent>
  Upload DICOM files only. Remove direct patient identifiers from filenames.
</TooltipContent>`
);

export const tooltipHealthcareSnippet = exampleSnippet(
  `<Tooltip>
  <TooltipTrigger render={<Button variant="ghost" size="icon-xl" aria-label="Study status help" />}>
    <CircleHelpIcon />
  </TooltipTrigger>
  <TooltipContent>
    The radiology report has not been signed yet.
  </TooltipContent>
</Tooltip>`,
  { imports: [tooltipImport, buttonImport, iconImport] }
);

export const tooltipAccessibilitySnippet = exampleSnippet(
  `<Tooltip>
  <TooltipTrigger
    render={<Button variant="ghost" size="icon-xl" aria-label="Insurance information" />}
  >
    <CircleHelpIcon />
  </TooltipTrigger>
  <TooltipContent>Coverage was verified today.</TooltipContent>
</Tooltip>`,
  { imports: [tooltipImport, buttonImport, iconImport] }
);
