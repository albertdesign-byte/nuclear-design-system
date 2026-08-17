"use client";

import { useState } from "react";

import { PaymentForm } from "@/components/payment-form";
import {
  paymentFormInstallationUiSnippet,
  paymentFormRealScreenSnippet,
  paymentFormUsageSnippet,
} from "@/components/docs/components/payment-form/payment-form-code-snippets";
import { PaymentFormRealScreenPreview } from "@/components/docs/components/payment-form/payment-form-real-screen-preview";
import { paymentFormTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const paymentFormApiRows = [
  { prop: "nameOnCard", type: "string", defaultValue: '""' },
  { prop: "cardNumber", type: "string", defaultValue: '""' },
  { prop: "expiry", type: "string", defaultValue: '""' },
  { prop: "cvv", type: "string", defaultValue: '""' },
  { prop: "onNameOnCardChange", type: "(value) => void", defaultValue: "—" },
  { prop: "onCardNumberChange", type: "(value) => void", defaultValue: "—" },
  { prop: "onExpiryChange", type: "(value) => void", defaultValue: "—" },
  { prop: "onCvvChange", type: "(value) => void", defaultValue: "—" },
  { prop: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"' },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
  { prop: "showStripeBadge", type: "boolean", defaultValue: "true" },
];

export function PaymentFormDocsPage() {
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <DocsComponentPage
      title="Payment Form"
      description="Card payment fields with expiry/CVV row and Stripe branding for deposit checkout."
      tocItems={paymentFormTocItems}
      realScreen={{
        preview: <PaymentFormRealScreenPreview />,
        code: paymentFormRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={paymentFormInstallationUiSnippet}>
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
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from <DocsInlineCode>@/components/payment-form</DocsInlineCode>.
                Control each field from the parent to enable or disable the checkout action.
              </>
            }
          >
            <DocsPreview code={paymentFormUsageSnippet}>
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
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <DocsApiTable rows={paymentFormApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
