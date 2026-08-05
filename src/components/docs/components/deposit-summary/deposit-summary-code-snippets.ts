import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const depositSummaryImport = `import { DepositSummary } from "@/components/deposit-summary";`;

const sampleItems = `const items = [
  {
    title: "Ultrasound Joint (Scan ID: 9181)",
    lines: [
      { label: "Total cost", amount: "$350.00" },
      { label: "Pay on appointment", amount: "$260.00" },
      { label: "Due now", amount: "$45.00", emphasis: true },
    ],
  },
  {
    title: "Ultrasound Joint (Scan ID: 9182)",
    lines: [
      { label: "Total cost", amount: "$350.00" },
      { label: "Pay on appointment", amount: "$260.00" },
      { label: "Due now", amount: "$45.00", emphasis: true },
    ],
  },
];`;

export const depositSummaryInstallationUiSnippet = tsxSnippet(`${depositSummaryImport}

${sampleItems}

export function Example() {
  return (
    <DepositSummary
      items={items}
      totalAmount="$90.00"
    />
  );
}`);

export const depositSummaryRealScreenSnippet = depositSummaryInstallationUiSnippet;

export const depositSummaryUsageSnippet = exampleSnippet(
  `<DepositSummary
  items={items}
  totalAmount="$90.00"
/>`,
  { imports: [depositSummaryImport, sampleItems] }
);
