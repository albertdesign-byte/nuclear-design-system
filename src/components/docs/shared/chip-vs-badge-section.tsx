"use client";

import { Badge } from "@/components/badge";
import { Chip } from "@/components/chip";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

export function ChipVsBadgeSection() {
  return (
    <DocsSection
      id="chip-vs-badge"
      title="Cuándo usar Chip vs Badge"
      description="Badge comunica estado o cantidad. Chip es un filtro o valor seleccionado, a menudo interactivo o descartable."
    >
      <div className="flex flex-col gap-[var(--space-stack-md)]">
        <div className="rounded-[var(--radius-md)] border border-[var(--docs-chrome-border)] p-[var(--space-inline-md)]">
          <h4 className="font-medium text-[var(--color-text-primary)]">Badge</h4>
          <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
            Información contextual que no requiere interacción.
          </p>
          <div className="mt-[var(--space-stack-sm)] flex flex-col items-start gap-[var(--space-stack-sm)]">
            <Badge variant="secondary">Stable</Badge>
            <Badge>3</Badge>
            <Badge variant="destructive">Critical</Badge>
          </div>
          <ul className="mt-[var(--space-stack-sm)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
            <li>Estado de un registro (Stable, Under review, Critical).</li>
            <li>Cantidad o recuento (resultados pendientes, ítems en un filtro).</li>
            <li>Metadato de solo lectura en tablas, cards y headers.</li>
            <li>No se descarta ni se selecciona como un filtro.</li>
          </ul>
        </div>
        <div className="rounded-[var(--radius-md)] border border-[var(--docs-chrome-border)] p-[var(--space-inline-md)]">
          <h4 className="font-medium text-[var(--color-text-primary)]">Chip</h4>
          <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
            Valor elegido o filtro que el usuario puede cambiar.
          </p>
          <div className="mt-[var(--space-stack-sm)] flex flex-col items-start gap-[var(--space-stack-sm)]">
            <Chip onRemove={() => {}}>MRI Brain</Chip>
            <Chip variant="outline">Prior Auth</Chip>
            <Chip variant="muted">Stat</Chip>
          </div>
          <ul className="mt-[var(--space-stack-sm)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
            <li>Filtros activos (modalidad, sede, estado de orden).</li>
            <li>Selección de valores en un campo multi-valor.</li>
            <li>
              Elementos descartables con <DocsInlineCode>onRemove</DocsInlineCode>{" "}
              cuando el usuario debe poder quitarlos.
            </li>
            <li>Interacción del usuario: elegir, quitar o representar una selección.</li>
          </ul>
        </div>
      </div>
      <p className="mt-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
        Decisión rápida: si solo informa y no se toca, usa{" "}
        <DocsInlineCode>Badge</DocsInlineCode>. Si el usuario lo eligió o puede
        quitarlo, usa <DocsInlineCode>Chip</DocsInlineCode>.
      </p>
    </DocsSection>
  );
}
