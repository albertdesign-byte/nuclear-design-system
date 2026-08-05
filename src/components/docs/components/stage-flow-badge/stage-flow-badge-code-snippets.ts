import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const stageFlowBadgeImport =
  'import { StageFlowBadge } from "@/components/stage-flow-badge";';

export const stageFlowBadgeInstallationUiSnippet = tsxSnippet(`${stageFlowBadgeImport}

export function Example() {
  return (
    <div className="flex flex-wrap gap-2">
      <StageFlowBadge variant="success">Requested</StageFlowBadge>
      <StageFlowBadge variant="success">MS1 Approved</StageFlowBadge>
      <StageFlowBadge variant="warning">Pending payer</StageFlowBadge>
    </div>
  );
}`);

export const stageFlowBadgeRealScreenSnippet = tsxSnippet(`${stageFlowBadgeImport}

export function Example() {
  return (
    <div className="flex flex-wrap gap-2">
      <StageFlowBadge variant="success">Requested</StageFlowBadge>
      <StageFlowBadge variant="success">MS1 Approved</StageFlowBadge>
      <StageFlowBadge variant="warning">Pending payer</StageFlowBadge>
      <StageFlowBadge variant="neutral" hideArrow>
        Scheduled
      </StageFlowBadge>
    </div>
  );
}`);

export const stageFlowBadgeUsageSnippet = exampleSnippet(
  `<StageFlowBadge variant="success">MS1 Approved</StageFlowBadge>`,
  { imports: [stageFlowBadgeImport] }
);
