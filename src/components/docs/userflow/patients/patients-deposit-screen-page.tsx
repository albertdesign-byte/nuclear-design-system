"use client";

import { ChevronLeftIcon, InfoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/alert";
import { AppFooter } from "@/components/app-footer";
import { MedmoLogoLockup } from "@/components/brand/medmo-logo";
import { Button } from "@/components/button";
import { PatientsFlowContinueButton } from "@/components/docs/userflow/patients/patients-flow-buttons";
import { DepositSummary } from "@/components/deposit-summary";
import type { DepositSummaryItem } from "@/components/deposit-summary";
import { usePatientsDeviceOptional } from "@/components/docs/layout/patients-device-context";
import { DocsUserflowPage } from "@/components/docs/userflow/docs-userflow-page";
import { DocsUserflowPreviewFrame } from "@/components/docs/userflow/docs-userflow-preview-frame";
import { PaymentForm } from "@/components/payment-form";
import {
  PatientsShell,
  PatientsShellHeader,
  PatientsShellLocale,
  PatientsShellMain,
  PatientsShellMainDesktop,
  PatientsShellProgress,
  patientsShellDesktopContentClassName,
} from "@/components/patients-shell";

const depositSummaryItems: DepositSummaryItem[] = [
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

function DepositBackButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="-ml-[var(--space-inline-xs)] self-start px-[var(--space-inline-xs)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
      onClick={onClick}
    >
      <ChevronLeftIcon aria-hidden />
      Back
    </Button>
  );
}

type DepositIntroProps = {
  onBack: () => void;
};

function DepositIntro({ onBack }: DepositIntroProps) {
  return (
    <div className="flex flex-col gap-[var(--space-stack-md)]">
      <DepositBackButton onClick={onBack} />
      <div className="flex flex-col gap-[var(--space-stack-xs)]">
        <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
          Hold your appointment with a small deposit
        </h1>
        <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
          You won&apos;t be charged until your appointment is confirmed. The remaining balance
          is paid at the imaging center when you arrive.
        </p>
      </div>
      <Alert variant="success">
        <InfoIcon />
        <AlertTitle>Cancelation policy.</AlertTitle>
        <AlertDescription>
          Cancel at least 24 hours before your appointment for a full refund.
        </AlertDescription>
      </Alert>
    </div>
  );
}

type DepositFormProps = {
  onBack: () => void;
  nameOnCard: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  onNameOnCardChange: (value: string) => void;
  onCardNumberChange: (value: string) => void;
  onExpiryChange: (value: string) => void;
  onCvvChange: (value: string) => void;
  canContinue: boolean;
  onContinue: () => void;
};

function DepositFormSections({
  onBack,
  nameOnCard,
  cardNumber,
  expiry,
  cvv,
  onNameOnCardChange,
  onCardNumberChange,
  onExpiryChange,
  onCvvChange,
}: Omit<DepositFormProps, "canContinue" | "onContinue">) {
  return (
    <>
      <DepositIntro onBack={onBack} />
      <DepositSummary items={depositSummaryItems} totalAmount="$90.00" />
      <PaymentForm
        nameOnCard={nameOnCard}
        cardNumber={cardNumber}
        expiry={expiry}
        cvv={cvv}
        onNameOnCardChange={onNameOnCardChange}
        onCardNumberChange={onCardNumberChange}
        onExpiryChange={onExpiryChange}
        onCvvChange={onCvvChange}
      />
    </>
  );
}

function PatientsDepositMobileScreen({
  onBack,
  nameOnCard,
  cardNumber,
  expiry,
  cvv,
  onNameOnCardChange,
  onCardNumberChange,
  onExpiryChange,
  onCvvChange,
  canContinue,
  onContinue,
}: DepositFormProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <PatientsShellHeader>
        <MedmoLogoLockup />
        <PatientsShellLocale />
      </PatientsShellHeader>

      <PatientsShellMain className="flex-1 gap-[var(--space-stack-md)]">
        <DepositFormSections
          onBack={onBack}
          nameOnCard={nameOnCard}
          cardNumber={cardNumber}
          expiry={expiry}
          cvv={cvv}
          onNameOnCardChange={onNameOnCardChange}
          onCardNumberChange={onCardNumberChange}
          onExpiryChange={onExpiryChange}
          onCvvChange={onCvvChange}
        />
        <PatientsFlowContinueButton
                    disabled={!canContinue}
          onClick={onContinue}
        >
          Continue
        </PatientsFlowContinueButton>
      </PatientsShellMain>
    </PatientsShell>
  );
}

function PatientsDepositDesktopScreen({
  onBack,
  nameOnCard,
  cardNumber,
  expiry,
  cvv,
  onNameOnCardChange,
  onCardNumberChange,
  onExpiryChange,
  onCvvChange,
  canContinue,
  onContinue,
}: DepositFormProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <div className="bg-[var(--color-surface)]">
        <PatientsShellHeader className="pb-[var(--space-stack-sm)]">
          <MedmoLogoLockup />
          <PatientsShellLocale showGlobe />
        </PatientsShellHeader>
        <PatientsShellProgress value={0.66} />
      </div>

      <PatientsShellMainDesktop className="flex-1">
        <div className={patientsShellDesktopContentClassName}>
          <DepositFormSections
            onBack={onBack}
            nameOnCard={nameOnCard}
            cardNumber={cardNumber}
            expiry={expiry}
            cvv={cvv}
            onNameOnCardChange={onNameOnCardChange}
            onCardNumberChange={onCardNumberChange}
            onExpiryChange={onExpiryChange}
            onCvvChange={onCvvChange}
          />
          <PatientsFlowContinueButton
                        disabled={!canContinue}
            onClick={onContinue}
          >
            Continue
          </PatientsFlowContinueButton>
        </div>
      </PatientsShellMainDesktop>
    </PatientsShell>
  );
}

function isPaymentFormComplete(values: {
  nameOnCard: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}) {
  return (
    values.nameOnCard.trim().length > 0 &&
    values.cardNumber.trim().length > 0 &&
    values.expiry.trim().length > 0 &&
    values.cvv.trim().length > 0
  );
}

export function PatientsDepositScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const canContinue = useMemo(
    () =>
      isPaymentFormComplete({
        nameOnCard,
        cardNumber,
        expiry,
        cvv,
      }),
    [nameOnCard, cardNumber, expiry, cvv]
  );

  function handleBack() {
    router.push("/docs/userflow/patients/welcome");
  }

  function handleContinue() {
    if (!canContinue) {
      return;
    }

    router.push("/docs/userflow/patients/insurance");
  }

  const formProps = {
    onBack: handleBack,
    nameOnCard,
    cardNumber,
    expiry,
    cvv,
    onNameOnCardChange: setNameOnCard,
    onCardNumberChange: setCardNumber,
    onExpiryChange: setExpiry,
    onCvvChange: setCvv,
    canContinue,
    onContinue: handleContinue,
  };

  return (
    <DocsUserflowPage>
      <DocsUserflowPreviewFrame device={device}>
        <div className="flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
          {device === "desktop" ? (
            <PatientsDepositDesktopScreen {...formProps} />
          ) : (
            <PatientsDepositMobileScreen {...formProps} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
