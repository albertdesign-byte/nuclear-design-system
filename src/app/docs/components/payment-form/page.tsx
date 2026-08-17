import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { PaymentFormDocsPage } from "@/components/docs/components/payment-form/payment-form-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/payment-form");

export default function PaymentFormDocsRoute() {
  return <PaymentFormDocsPage />;
}
