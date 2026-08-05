import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const paymentFormImport = `import { PaymentForm } from "@/components/payment-form";`;

export const paymentFormInstallationUiSnippet = tsxSnippet(`${paymentFormImport}
import { useState } from "react";

export function Example() {
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <PaymentForm
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
}`);

export const paymentFormRealScreenSnippet = paymentFormInstallationUiSnippet;

export const paymentFormUsageSnippet = exampleSnippet(
  `<PaymentForm
  nameOnCard={nameOnCard}
  cardNumber={cardNumber}
  expiry={expiry}
  cvv={cvv}
  onNameOnCardChange={setNameOnCard}
  onCardNumberChange={setCardNumber}
  onExpiryChange={setExpiry}
  onCvvChange={setCvv}
/>`,
  { imports: [paymentFormImport, 'import { useState } from "react";'] }
);
