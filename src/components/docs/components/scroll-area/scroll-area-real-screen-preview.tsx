import { ScrollArea } from "@/components/scroll-area";

const medications = [
  "Metformin 850 mg — every 12 h",
  "Losartan 50 mg — every 24 h",
  "Atorvastatin 20 mg — every 24 h",
  "Aspirin 100 mg — every 24 h",
  "Levothyroxine 75 mcg — on empty stomach",
  "Omeprazole 20 mg — before breakfast",
  "Amlodipine 5 mg — every 24 h",
  "Insulin glargine 22 units — at night",
];

export function ScrollAreaRealScreenPreview() {
  return (
    <div className="w-full max-w-sm rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-card)] shadow-sm">
      <h3 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)]">
        Active medication
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
