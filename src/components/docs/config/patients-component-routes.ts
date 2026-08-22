import type { Metadata } from "next";
import type { ComponentType } from "react";

import { AppFooterDocsPage } from "@/components/docs/components/app-footer/app-footer-docs-page";
import { FieldErrorDocsPage } from "@/components/docs/components/field-error/field-error-docs-page";
import { AlertDocsPage } from "@/components/docs/components/alert/alert-docs-page";
import { ButtonDocsPage } from "@/components/docs/components/button/button-docs-page";
import { CheckboxDocsPage } from "@/components/docs/components/checkbox/checkbox-docs-page";
import { ChipDocsPage } from "@/components/docs/components/chip/chip-docs-page";
import { DatePickerDocsPage } from "@/components/docs/components/date-picker/date-picker-docs-page";
import { DateRangePickerDocsPage } from "@/components/docs/components/date-range-picker/date-range-picker-docs-page";
import { DayToggleGroupDocsPage } from "@/components/docs/components/day-toggle-group/day-toggle-group-docs-page";
import { DepositSummaryDocsPage } from "@/components/docs/components/deposit-summary/deposit-summary-docs-page";
import { DialogDocsPage } from "@/components/docs/components/dialog/dialog-docs-page";
import { DropzoneDocsPage } from "@/components/docs/components/dropzone/dropzone-docs-page";
import { InputDocsPage } from "@/components/docs/components/input/input-docs-page";
import { LogoDocsPage } from "@/components/docs/components/logo/logo-docs-page";
import { PaymentFormDocsPage } from "@/components/docs/components/payment-form/payment-form-docs-page";
import { RadioGroupDocsPage } from "@/components/docs/components/radio-group/radio-group-docs-page";
import { SeparatorDocsPage } from "@/components/docs/components/separator/separator-docs-page";
import { TextLinkDocsPage } from "@/components/docs/components/text-link/text-link-docs-page";

export type PatientsComponentRoute = {
  component: ComponentType;
  metadata: Metadata;
  devicePreview?: boolean;
};

export const patientsComponentRoutes: Record<string, PatientsComponentRoute> = {
  "app-footer": {
    component: AppFooterDocsPage,
    devicePreview: true,
    metadata: {
      title: "App Footer",
      description: "Medmo Design System — App Footer component documentation.",
    },
  },
  logo: {
    component: LogoDocsPage,
    metadata: {
      title: "Logo",
      description: "Medmo Design System — Logo component documentation.",
    },
  },
  input: {
    component: InputDocsPage,
    metadata: {
      title: "Input",
      description: "Medmo Design System — Input component documentation.",
    },
  },
  button: {
    component: ButtonDocsPage,
    metadata: {
      title: "Button",
      description: "Medmo Design System — Button component documentation.",
    },
  },
  "text-link": {
    component: TextLinkDocsPage,
    metadata: {
      title: "Text Link",
      description: "Medmo Design System — Text Link component documentation.",
    },
  },
  checkbox: {
    component: CheckboxDocsPage,
    metadata: {
      title: "Checkbox",
      description: "Medmo Design System — Checkbox component documentation.",
    },
  },
  "radio-group": {
    component: RadioGroupDocsPage,
    metadata: {
      title: "Radio Group",
      description: "Medmo Design System — Radio Group component documentation.",
    },
  },
  chip: {
    component: ChipDocsPage,
    metadata: {
      title: "Chip",
      description: "Medmo Design System — Chip component documentation.",
    },
  },
  "field-error": {
    component: FieldErrorDocsPage,
    metadata: {
      title: "Field Error",
      description: "Medmo Design System — Field Error component documentation.",
    },
  },
  alert: {
    component: AlertDocsPage,
    metadata: {
      title: "Alert",
      description: "Medmo Design System — Alert component documentation.",
    },
  },
  "deposit-summary": {
    component: DepositSummaryDocsPage,
    metadata: {
      title: "Deposit Summary",
      description: "Medmo Design System — Deposit Summary component documentation.",
    },
  },
  "payment-form": {
    component: PaymentFormDocsPage,
    metadata: {
      title: "Payment Form",
      description: "Medmo Design System — Payment Form component documentation.",
    },
  },
  dropzone: {
    component: DropzoneDocsPage,
    metadata: {
      title: "Dropzone",
      description: "Medmo Design System — official file upload with click and drag and drop.",
    },
  },
  dialog: {
    component: DialogDocsPage,
    metadata: {
      title: "Dialog",
      description: "Medmo Design System — Dialog component documentation.",
    },
  },
  "date-picker": {
    component: DatePickerDocsPage,
    metadata: {
      title: "Date Picker",
      description: "Medmo Design System — Date Picker component documentation.",
    },
  },
  "date-range-picker": {
    component: DateRangePickerDocsPage,
    metadata: {
      title: "Date Range Picker",
      description: "Medmo Design System — Date Range Picker component documentation.",
    },
  },
  "day-toggle-group": {
    component: DayToggleGroupDocsPage,
    metadata: {
      title: "Day Toggle Group",
      description: "Medmo Design System — Day Toggle Group component documentation.",
    },
  },
  separator: {
    component: SeparatorDocsPage,
    metadata: {
      title: "Separator",
      description: "Medmo Design System — Separator component documentation.",
    },
  },
};

export function toPatientsProductHref(componentHref: string): string {
  if (componentHref === "#" || componentHref.startsWith("/docs/products/patients")) {
    return componentHref;
  }

  const [path, hash] = componentHref.split("#");
  const match = path.match(/^\/docs\/components\/(.+)$/);
  if (!match) {
    return componentHref;
  }

  return `/docs/products/patients/${match[1]}${hash ? `#${hash}` : ""}`;
}

export function getPatientsComponentSlug(href: string): string | null {
  const [path] = href.split("#");
  const match = path.match(/^\/docs\/products\/patients\/(.+)$/);
  return match?.[1] ?? null;
}

export const patientsComponentSlugs = Object.keys(patientsComponentRoutes);

export function patientsSlugSupportsDevicePreview(slug: string | null) {
  if (!slug) {
    return false;
  }

  return patientsComponentRoutes[slug]?.devicePreview === true;
}
