import type { InputSize } from "@/components/input/input.types";

export type PaymentFormProps = {
  nameOnCard?: string;
  cardNumber?: string;
  expiry?: string;
  cvv?: string;
  onNameOnCardChange?: (value: string) => void;
  onCardNumberChange?: (value: string) => void;
  onExpiryChange?: (value: string) => void;
  onCvvChange?: (value: string) => void;
  size?: InputSize;
  disabled?: boolean;
  showStripeBadge?: boolean;
  className?: string;
};
