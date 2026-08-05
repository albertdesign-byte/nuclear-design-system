import { DepositSummary } from "@/components/deposit-summary";

const previewItems = [
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
];

export function DepositSummaryRealScreenPreview() {
  return (
    <DepositSummary
      className="w-full max-w-md"
      items={previewItems}
      totalAmount="$90.00"
    />
  );
}
