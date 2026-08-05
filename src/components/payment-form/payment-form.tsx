"use client";

import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { cn } from "@/lib/utils";

import {
  paymentFormClassName,
  paymentFormFieldGroupClassName,
  paymentFormRowClassName,
} from "./payment-form.styles";
import type { PaymentFormProps } from "./payment-form.types";
import { StripeBadge } from "./stripe-badge";

export function PaymentForm({
  nameOnCard = "",
  cardNumber = "",
  expiry = "",
  cvv = "",
  onNameOnCardChange,
  onCardNumberChange,
  onExpiryChange,
  onCvvChange,
  size = "md",
  disabled = false,
  showStripeBadge = true,
  className,
}: PaymentFormProps) {
  return (
    <section data-slot="payment-form" className={cn(paymentFormClassName, className)}>
      <div className={paymentFormFieldGroupClassName}>
        <Label htmlFor="payment-name-on-card">Name on card</Label>
        <Input
          id="payment-name-on-card"
          size={size}
          disabled={disabled}
          value={nameOnCard}
          autoComplete="cc-name"
          onChange={(event) => onNameOnCardChange?.(event.target.value)}
        />
      </div>

      <div className={paymentFormFieldGroupClassName}>
        <Label htmlFor="payment-card-number">Card number</Label>
        <Input
          id="payment-card-number"
          size={size}
          disabled={disabled}
          value={cardNumber}
          autoComplete="cc-number"
          inputMode="numeric"
          onChange={(event) => onCardNumberChange?.(event.target.value)}
        />
      </div>

      <div className={paymentFormRowClassName}>
        <div className={paymentFormFieldGroupClassName}>
          <Label htmlFor="payment-expiry">Expiry date</Label>
          <Input
            id="payment-expiry"
            size={size}
            disabled={disabled}
            value={expiry}
            placeholder="MM/YYYY"
            autoComplete="cc-exp"
            onChange={(event) => onExpiryChange?.(event.target.value)}
          />
        </div>

        <div className={paymentFormFieldGroupClassName}>
          <Label htmlFor="payment-cvv">CVV</Label>
          <Input
            id="payment-cvv"
            size={size}
            disabled={disabled}
            value={cvv}
            autoComplete="cc-csc"
            inputMode="numeric"
            onChange={(event) => onCvvChange?.(event.target.value)}
          />
        </div>
      </div>

      {showStripeBadge ? <StripeBadge /> : null}
    </section>
  );
}
