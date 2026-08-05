import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/radio-group";

export function RadioGroupRealScreenPreview() {
  return (
    <div className="w-full max-w-sm rounded-[var(--radius-card)] border border-border bg-card p-[var(--space-card)] shadow-sm">
      <h3 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-foreground">
        Tipo de consulta
      </h3>
      <p className="mt-[var(--space-stack-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-muted-foreground">
        Selecciona cómo se realizará la cita de seguimiento.
      </p>
      <RadioGroup defaultValue="telemedicine" className="mt-[var(--space-stack-md)]">
        <label className="flex items-center gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
          <RadioGroupItem value="in-person" id="radio-real-screen-in-person" />
          <span>Presencial en clínica</span>
        </label>
        <label className="flex items-center gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
          <RadioGroupItem value="telemedicine" id="radio-real-screen-telemedicine" />
          <span>Telemedicina</span>
        </label>
        <label className="flex items-center gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
          <RadioGroupItem value="home" id="radio-real-screen-home" />
          <span>Visita domiciliaria</span>
        </label>
      </RadioGroup>
    </div>
  );
}
