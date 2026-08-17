import { Switch } from "@/components/switch";

export function SwitchRealScreenPreview() {
  return (
    <div className="w-full max-w-sm rounded-[var(--radius-card)] border border-border bg-card p-[var(--space-card)] shadow-sm">
      <h3 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-foreground">
        Patient preferences
      </h3>
      <p className="mt-[var(--space-stack-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-muted-foreground">
        Configure automatic reminders for the treatment plan.
      </p>
      <div className="mt-[var(--space-stack-md)] flex items-center justify-between gap-[var(--space-inline-md)]">
        <label
          htmlFor="switch-real-screen-reminders"
          className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]"
        >
          Medication reminders
        </label>
        <Switch id="switch-real-screen-reminders" defaultChecked />
      </div>
    </div>
  );
}
