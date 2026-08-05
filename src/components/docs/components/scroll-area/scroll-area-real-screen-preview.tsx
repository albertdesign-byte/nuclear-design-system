import { ScrollArea } from "@/components/scroll-area";

const medications = [
  "Metformina 850 mg — cada 12 h",
  "Losartán 50 mg — cada 24 h",
  "Atorvastatina 20 mg — cada 24 h",
  "Aspirina 100 mg — cada 24 h",
  "Levotiroxina 75 mcg — ayunas",
  "Omeprazol 20 mg — antes del desayuno",
  "Amlodipino 5 mg — cada 24 h",
  "Insulina glargina 22 UI — noche",
];

export function ScrollAreaRealScreenPreview() {
  return (
    <div className="w-full max-w-sm rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-card)] shadow-sm">
      <h3 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)]">
        Medicación activa
      </h3>
      <ScrollArea className="mt-[var(--space-stack-md)] h-40">
        <ul className="divide-y divide-[var(--color-border-subtle)] pr-[var(--space-inline-sm)]">
          {medications.map((item) => (
            <li
              key={item}
              className="py-[var(--space-stack-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}
