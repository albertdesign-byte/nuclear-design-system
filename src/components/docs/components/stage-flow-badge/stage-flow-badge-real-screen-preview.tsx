import { StageFlowBadge } from "@/components/stage-flow-badge";

export function StageFlowBadgeRealScreenPreview() {
  return (
    <div className="flex flex-wrap gap-[var(--space-inline-xs)]">
      <StageFlowBadge variant="success">Requested</StageFlowBadge>
      <StageFlowBadge variant="success">MS1 Approved</StageFlowBadge>
      <StageFlowBadge variant="warning">Pending payer</StageFlowBadge>
      <StageFlowBadge variant="neutral" hideArrow>
        Scheduled
      </StageFlowBadge>
    </div>
  );
}
