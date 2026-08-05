"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { cn } from "@/lib/utils";

import {
  inputButtonGroupButtonClassName,
  inputButtonGroupClassName,
  inputButtonGroupInputClassName,
} from "./input-button-group.styles";
import type { InputButtonGroupProps } from "./input-button-group.types";

export function InputButtonGroup({
  placeholder = "Search everything",
  buttonLabel = "Search",
  size = "md",
  className,
  inputClassName,
  buttonClassName,
  onButtonClick,
  buttonVariant = "secondary",
  ...inputProps
}: InputButtonGroupProps) {
  return (
    <div data-slot="input-button-group" className={cn(inputButtonGroupClassName, className)}>
      <Input
        type="search"
        size={size}
        fullWidth
        placeholder={placeholder}
        className={cn(inputButtonGroupInputClassName, inputClassName)}
        {...inputProps}
      />
      <Button
        type="button"
        variant={buttonVariant}
        size={size}
        className={cn(inputButtonGroupButtonClassName, buttonClassName)}
        onClick={onButtonClick}
      >
        {buttonLabel}
      </Button>
    </div>
  );
}
