"use client";

import { useState } from "react";

import { PaymentForm } from "@/components/payment-form";

export function PaymentFormRealScreenPreview() {
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <PaymentForm
      className="w-full max-w-md"
      nameOnCard={nameOnCard}
      cardNumber={cardNumber}
      expiry={expiry}
      cvv={cvv}
      onNameOnCardChange={setNameOnCard}
      onCardNumberChange={setCardNumber}
      onExpiryChange={setExpiry}
      onCvvChange={setCvv}
    />
  );
}
