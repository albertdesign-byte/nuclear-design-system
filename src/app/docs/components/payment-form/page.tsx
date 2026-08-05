import type { Metadata } from "next";

import { PaymentFormDocsPage } from "@/components/docs/components/payment-form/payment-form-docs-page";

export const metadata: Metadata = {
  title: "Payment Form",
  description: "Medmo Design System — Payment Form component documentation.",
};

export default function PaymentFormDocsRoute() {
  return <PaymentFormDocsPage />;
}
