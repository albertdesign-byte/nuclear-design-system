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
    <div className="flex items-center gap-2">
      <span className="text-sm">Resultado HbA1c: 7.2%</span>
      <Tooltip>
        <TooltipTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Explicar HbA1c" />}>
          <CircleHelpIcon />
        </TooltipTrigger>
        <TooltipContent side="top">
          La hemoglobina glicosilada (HbA1c) refleja el control glucémico promedio de los últimos 2–3 meses.
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
  `<Tooltip>
  <TooltipTrigger render={<Button variant="outline" size="sm">Bottom</Button>} />
  <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
</Tooltip>`,
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
