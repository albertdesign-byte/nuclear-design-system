import { DocsInlineCode } from "./docs-inline-code";

export type DocsApiRow = {
  prop: string;
  type: string;
  defaultValue: string;
};

export function DocsApiTable({ rows }: { rows: DocsApiRow[] }) {
  return (
    <div className="overflow-x-auto pt-[var(--spacing-4)]">
      <table className="w-full min-w-[36rem] border-collapse text-left">
        <thead>
          <tr className="border-b border-[var(--docs-chrome-border)]">
            <th className="w-[4.75rem] py-[0.6rem] pr-[var(--space-inline-md)] text-[0.9375rem] font-medium leading-[1.4]">
              Prop
            </th>
            <th className="py-[0.6rem] px-[var(--space-inline-md)] text-[0.9375rem] font-medium leading-[1.4]">
              Type
            </th>
            <th className="w-[6.65rem] py-[0.6rem] pl-[var(--space-inline-md)] text-[0.9375rem] font-medium leading-[1.4]">
              Default
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.prop} className="border-t border-[var(--docs-chrome-border)]">
              <td className="py-[0.85rem] pr-[var(--space-inline-md)] align-top">
                <DocsInlineCode>{row.prop}</DocsInlineCode>
              </td>
              <td className="py-[0.85rem] px-[var(--space-inline-md)] align-top">
                <DocsInlineCode className="whitespace-normal">{row.type}</DocsInlineCode>
              </td>
              <td className="py-[0.85rem] pl-[var(--space-inline-md)] align-top">
                <DocsInlineCode>{row.defaultValue}</DocsInlineCode>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
