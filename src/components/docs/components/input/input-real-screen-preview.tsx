import { Input } from "@/components/input";

export function InputRealScreenPreview() {
  return (
    <div className="w-full max-w-sm rounded-[var(--radius-card)] border border-border bg-card p-[var(--space-card)] shadow-sm">
      <h3 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-foreground">
        Información de contacto
      </h3>
      <div className="mt-[var(--space-stack-md)] grid gap-[var(--space-stack-sm)]">
        <div className="grid gap-[var(--space-inline-xs)]">
          <label
            htmlFor="input-real-screen-phone"
            className="text-[length:var(--text-body-small-size)] font-medium leading-[var(--text-body-small-line-height)]"
          >
            Teléfono
          </label>
          <Input
            id="input-real-screen-phone"
            defaultValue="+1 (555) 014-2098"
          />
        </div>
        <div className="grid gap-[var(--space-inline-xs)]">
          <label
            htmlFor="input-real-screen-email"
            className="text-[length:var(--text-body-small-size)] font-medium leading-[var(--text-body-small-line-height)]"
          >
            Email
          </label>
          <Input
            id="input-real-screen-email"
            type="email"
            defaultValue="elena.morales@email.com"
          />
        </div>
      </div>
    </div>
  );
}
