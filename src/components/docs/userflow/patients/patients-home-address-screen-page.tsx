"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState, type Dispatch, type SetStateAction } from "react";

import { AppFooter } from "@/components/app-footer";
import { MedmoLogoLockup } from "@/components/brand/medmo-logo";
import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
import { usePatientsDeviceOptional } from "@/components/docs/layout/patients-device-context";
import { DocsUserflowPage } from "@/components/docs/userflow/docs-userflow-page";
import { DocsUserflowPreviewFrame } from "@/components/docs/userflow/docs-userflow-preview-frame";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import {
  PatientsShell,
  PatientsShellCard,
  PatientsShellHeader,
  PatientsShellInputPanel,
  PatientsShellLocale,
  PatientsShellMain,
  PatientsShellMainDesktop,
  PatientsShellProgress,
  patientsFieldGroupClassName,
  patientsShellDesktopContentClassName,
} from "@/components/patients-shell";
import { cn } from "@/lib/utils";

const cityStateRowClassName =
  "flex gap-[var(--space-inline-sm)] [&>*]:min-w-0 [&>*]:flex-1";

const checkboxLabelClassName =
  "flex items-start gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]";

type AddressFields = {
  address: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;
};

const emptyAddressFields = (): AddressFields => ({
  address: "",
  apartment: "",
  city: "",
  state: "",
  zipCode: "",
});

function isAddressComplete(fields: AddressFields) {
  return (
    fields.address.trim() !== "" &&
    fields.city.trim() !== "" &&
    fields.state.trim() !== "" &&
    fields.zipCode.trim() !== ""
  );
}

function HomeAddressBackButton({ onClick }: { onClick: () => void }) {
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

function HomeAddressIntro() {
  return (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
        What is your home address?
      </h1>
      <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
        Enter your home address. We use this to find radiology centers near you.
      </p>
    </div>
  );
}

type AddressFormFieldsProps = {
  idPrefix: string;
  fields: AddressFields;
  onFieldChange: <K extends keyof AddressFields>(field: K, value: AddressFields[K]) => void;
};

function AddressFormFields({ idPrefix, fields, onFieldChange }: AddressFormFieldsProps) {
  return (
    <>
      <div className={cn(patientsFieldGroupClassName)}>
        <Label htmlFor={`${idPrefix}-address`}>Address</Label>
        <Input
          id={`${idPrefix}-address`}
          value={fields.address}
          placeholder="123 Grand Street"
          onChange={(event) => onFieldChange("address", event.target.value)}
        />
      </div>

      <div className={cn(patientsFieldGroupClassName)}>
        <Label htmlFor={`${idPrefix}-apartment`}>Apartment or unit (optional)</Label>
        <Input
          id={`${idPrefix}-apartment`}
          value={fields.apartment}
          placeholder="Apt. 3E"
          onChange={(event) => onFieldChange("apartment", event.target.value)}
        />
      </div>

      <div className={cityStateRowClassName}>
        <div className={cn(patientsFieldGroupClassName)}>
          <Label htmlFor={`${idPrefix}-city`}>City</Label>
          <Input
            id={`${idPrefix}-city`}
            value={fields.city}
            onChange={(event) => onFieldChange("city", event.target.value)}
          />
        </div>
        <div className={cn(patientsFieldGroupClassName)}>
          <Label htmlFor={`${idPrefix}-state`}>State</Label>
          <Input
            id={`${idPrefix}-state`}
            value={fields.state}
            onChange={(event) => onFieldChange("state", event.target.value)}
          />
        </div>
      </div>

      <div className={cn(patientsFieldGroupClassName, "max-w-[50%]")}>
        <Label htmlFor={`${idPrefix}-zip`}>Zip Code</Label>
        <Input
          id={`${idPrefix}-zip`}
          value={fields.zipCode}
          inputMode="numeric"
          onChange={(event) => onFieldChange("zipCode", event.target.value.replace(/\D/g, ""))}
        />
      </div>
    </>
  );
}

type HomeAddressFormProps = {
  homeAddress: AddressFields;
  alternateAddress: AddressFields;
  useDifferentAddress: boolean;
  onHomeFieldChange: <K extends keyof AddressFields>(field: K, value: AddressFields[K]) => void;
  onAlternateFieldChange: <K extends keyof AddressFields>(
    field: K,
    value: AddressFields[K]
  ) => void;
  onUseDifferentAddressChange: (checked: boolean) => void;
};

function HomeAddressForm({
  homeAddress,
  alternateAddress,
  useDifferentAddress,
  onHomeFieldChange,
  onAlternateFieldChange,
  onUseDifferentAddressChange,
}: HomeAddressFormProps) {
  return (
    <>
      <PatientsShellInputPanel>
        <AddressFormFields
          idPrefix="patients-home-address"
          fields={homeAddress}
          onFieldChange={onHomeFieldChange}
        />

        <label className={checkboxLabelClassName}>
          <Checkbox
            id="patients-home-address-alternate-toggle"
            checked={useDifferentAddress}
            onCheckedChange={(checked) => onUseDifferentAddressChange(checked === true)}
          />
          <span>Find radiology centers near a different address</span>
        </label>
      </PatientsShellInputPanel>

      {useDifferentAddress ? (
        <PatientsShellInputPanel>
          <h2 className="text-[length:var(--text-body-size)] font-semibold leading-[var(--text-body-line-height)] text-[var(--color-text-primary)]">
            Find near a different address
          </h2>
          <AddressFormFields
            idPrefix="patients-alternate-address"
            fields={alternateAddress}
            onFieldChange={onAlternateFieldChange}
          />
        </PatientsShellInputPanel>
      ) : null}
    </>
  );
}

type HomeAddressScreenProps = HomeAddressFormProps & {
  onBack: () => void;
  canContinue: boolean;
  onContinue: () => void;
};

function PatientsHomeAddressMobileScreen({
  onBack,
  canContinue,
  onContinue,
  ...formProps
}: HomeAddressScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <PatientsShellHeader>
        <MedmoLogoLockup />
        <PatientsShellLocale />
      </PatientsShellHeader>

      <PatientsShellMain className="flex-1 gap-[var(--space-stack-md)]">
        <PatientsShellCard>
          <HomeAddressBackButton onClick={onBack} />
          <HomeAddressIntro />
        </PatientsShellCard>

        <HomeAddressForm {...formProps} />

        <Button
          className="w-full"
          variant="primary"
          disabled={!canContinue}
          onClick={onContinue}
        >
          Continue
        </Button>
      </PatientsShellMain>
    </PatientsShell>
  );
}

function PatientsHomeAddressDesktopScreen({
  onBack,
  canContinue,
  onContinue,
  ...formProps
}: HomeAddressScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <div className="bg-[var(--color-surface)]">
        <PatientsShellHeader className="pb-[var(--space-stack-sm)]">
          <MedmoLogoLockup />
          <PatientsShellLocale showGlobe />
        </PatientsShellHeader>
        <PatientsShellProgress value={0.85} />
      </div>

      <PatientsShellMainDesktop className="flex-1">
        <div className={patientsShellDesktopContentClassName}>
          <PatientsShellCard>
            <HomeAddressBackButton onClick={onBack} />
            <HomeAddressIntro />
          </PatientsShellCard>

          <HomeAddressForm {...formProps} />

          <Button
            className="w-full"
            variant="primary"
            disabled={!canContinue}
            onClick={onContinue}
          >
            Continue
          </Button>
        </div>
      </PatientsShellMainDesktop>
    </PatientsShell>
  );
}

function createAddressFieldUpdater(setFields: Dispatch<SetStateAction<AddressFields>>) {
  return <K extends keyof AddressFields>(field: K, value: AddressFields[K]) => {
    setFields((current) => ({ ...current, [field]: value }));
  };
}

export function PatientsHomeAddressScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const [homeAddress, setHomeAddress] = useState<AddressFields>(emptyAddressFields);
  const [alternateAddress, setAlternateAddress] = useState<AddressFields>(emptyAddressFields);
  const [useDifferentAddress, setUseDifferentAddress] = useState(false);

  const canContinue = useMemo(() => {
    if (!isAddressComplete(homeAddress)) {
      return false;
    }

    if (useDifferentAddress) {
      return isAddressComplete(alternateAddress);
    }

    return true;
  }, [alternateAddress, homeAddress, useDifferentAddress]);

  function handleBack() {
    router.push("/docs/userflow/patients/general-question");
  }

  function handleContinue() {
    if (!canContinue) {
      return;
    }

    router.push("/docs/userflow/patients/email");
  }

  const formProps: HomeAddressFormProps = {
    homeAddress,
    alternateAddress,
    useDifferentAddress,
    onHomeFieldChange: createAddressFieldUpdater(setHomeAddress),
    onAlternateFieldChange: createAddressFieldUpdater(setAlternateAddress),
    onUseDifferentAddressChange: setUseDifferentAddress,
  };

  const screenProps: HomeAddressScreenProps = {
    ...formProps,
    onBack: handleBack,
    canContinue,
    onContinue: handleContinue,
  };

  return (
    <DocsUserflowPage>
      <DocsUserflowPreviewFrame device={device}>
        <div className="flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
          {device === "desktop" ? (
            <PatientsHomeAddressDesktopScreen {...screenProps} />
          ) : (
            <PatientsHomeAddressMobileScreen {...screenProps} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
