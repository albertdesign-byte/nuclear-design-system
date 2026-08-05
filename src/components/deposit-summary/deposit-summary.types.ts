import type { ComponentProps } from "react";

export type DepositSummaryLine = {
  label: string;
  amount: string;
  emphasis?: boolean;
};

export type DepositSummaryItem = {
  title: string;
  lines: DepositSummaryLine[];
};

export type DepositSummaryProps = ComponentProps<"section"> & {
  items: DepositSummaryItem[];
  totalLabel?: string;
  totalAmount: string;
};
