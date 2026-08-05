import type { InputProps, InputSize } from "@/components/input/input.types";
import type { ButtonProps } from "@/components/button/button.types";

export type InputButtonGroupProps = {
  placeholder?: string;
  buttonLabel?: string;
  size?: InputSize;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  onButtonClick?: () => void;
  buttonVariant?: ButtonProps["variant"];
} & Omit<InputProps, "size" | "fullWidth">;
