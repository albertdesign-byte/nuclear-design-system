import { Fragment } from "react";

import { Separator } from "@/components/separator";
import { cn } from "@/lib/utils";

import {
  depositSummaryClassName,
  depositSummaryItemClassName,
  depositSummaryItemTitleClassName,
  depositSummaryRowAmountClassName,
  depositSummaryRowAmountEmphasisClassName,
  depositSummaryRowClassName,
  depositSummaryRowLabelClassName,
  depositSummaryRowsClassName,
  depositSummaryTotalAmountClassName,
  depositSummaryTotalClassName,
  depositSummaryTotalLabelClassName,
} from "./deposit-summary.styles";
import type { DepositSummaryProps } from "./deposit-summary.types";

export function DepositSummary({
  items,
  totalLabel = "Total due now",
  totalAmount,
  className,
  ...props
}: DepositSummaryProps) {
  return (
    <section
      data-slot="deposit-summary"
      className={cn(depositSummaryClassName, className)}
      {...props}
    >
      {items.map((item, index) => (
        <Fragment key={item.title}>
          {index > 0 ? <Separator /> : null}
          <div className={depositSummaryItemClassName}>
            <h3 className={depositSummaryItemTitleClassName}>{item.title}</h3>
            <div className={depositSummaryRowsClassName}>
              {item.lines.map((line) => (
                <div key={line.label} className={depositSummaryRowClassName}>
                  <span className={depositSummaryRowLabelClassName}>{line.label}</span>
                  <span
                    className={cn(
                      depositSummaryRowAmountClassName,
                      line.emphasis && depositSummaryRowAmountEmphasisClassName
                    )}
                  >
                    {line.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Fragment>
      ))}

      <div className={depositSummaryTotalClassName}>
        <span className={depositSummaryTotalLabelClassName}>{totalLabel}</span>
        <span className={depositSummaryTotalAmountClassName}>{totalAmount}</span>
      </div>
    </section>
  );
}
