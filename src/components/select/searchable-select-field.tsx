"use client";

import { Combobox } from "@base-ui/react/combobox";
import { CheckIcon, ChevronDownIcon, SearchIcon, XIcon } from "lucide-react";
import { useState, type ReactNode } from "react";

import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import { Spinner } from "@/components/spinner";
import { cn } from "@/lib/utils";
import { formFieldGroupClassName } from "@/lib/form-field";

import {
  multiSelectChipClassName,
  multiSelectChipRemoveClassName,
  multiSelectChipsClassName,
  multiSelectInputClassName,
  multiSelectInputGroupClassName,
  searchableSelectEmptyClassName,
  searchableSelectInputClassName,
  searchableSelectInputGroupClassName,
  searchableSelectPopupClassName,
  searchableSelectPositionerClassName,
  searchableSelectSearchIconClassName,
  searchableSelectStatusClassName,
  searchableSelectTriggerClassName,
  selectItemClassName,
  selectItemIndicatorClassName,
} from "./select.styles";

export type SearchableSelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type SharedSearchableSelectProps = {
  id: string;
  label: ReactNode;
  options: SearchableSelectOption[];
  placeholder?: string;
  description?: ReactNode;
  helperText?: ReactNode;
  validationMessage?: ReactNode;
  error?: ReactNode;
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  emptyMessage?: ReactNode;
  loadingMessage?: ReactNode;
  className?: string;
};

export type SearchableSelectFieldProps = SharedSearchableSelectProps & {
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string | null) => void;
};

export type MultiSelectFieldProps = SharedSearchableSelectProps & {
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
};

function FieldMessages({
  id,
  helperText,
  validationMessage,
  error,
}: Pick<
  SharedSearchableSelectProps,
  "id" | "helperText" | "validationMessage" | "error"
>) {
  return (
    <>
      {helperText ? (
        <FieldDescription id={`${id}-helper`}>{helperText}</FieldDescription>
      ) : null}
      {validationMessage ? (
        <FieldDescription id={`${id}-validation`}>
          {validationMessage}
        </FieldDescription>
      ) : null}
      {error ? <FieldError id={`${id}-error`}>{error}</FieldError> : null}
    </>
  );
}

function getDescribedBy(
  id: string,
  props: Pick<
    SharedSearchableSelectProps,
    "description" | "helperText" | "validationMessage" | "error"
  >
) {
  return [
    props.description && `${id}-description`,
    props.helperText && `${id}-helper`,
    props.validationMessage && `${id}-validation`,
    props.error && `${id}-error`,
  ]
    .filter(Boolean)
    .join(" ");
}

function ComboboxPopup({
  loading,
  loadingMessage,
  emptyMessage,
}: Pick<
  SharedSearchableSelectProps,
  "loading" | "loadingMessage" | "emptyMessage"
>) {
  return (
    <Combobox.Portal>
      <Combobox.Positioner
        sideOffset={4}
        align="start"
        className={searchableSelectPositionerClassName}
      >
        <Combobox.Popup className={searchableSelectPopupClassName}>
          <Combobox.Empty className={searchableSelectEmptyClassName}>
            {loading ? loadingMessage : emptyMessage}
          </Combobox.Empty>
          <Combobox.List>
            {(option: SearchableSelectOption) => (
              <Combobox.Item
                key={option.value}
                value={option}
                disabled={option.disabled}
                className={selectItemClassName}
              >
                <span className="min-w-0 flex-1 truncate">{option.label}</span>
                <Combobox.ItemIndicator className={selectItemIndicatorClassName}>
                  <CheckIcon aria-hidden />
                </Combobox.ItemIndicator>
              </Combobox.Item>
            )}
          </Combobox.List>
        </Combobox.Popup>
      </Combobox.Positioner>
    </Combobox.Portal>
  );
}

function SearchableSelectField({
  id,
  label,
  options,
  placeholder = "Search and select",
  description,
  helperText,
  validationMessage,
  error,
  invalid = false,
  required = false,
  disabled = false,
  readOnly = false,
  loading = false,
  emptyMessage = "No results found.",
  loadingMessage = "Loading options…",
  className,
  value,
  defaultValue = null,
  onValueChange,
}: SearchableSelectFieldProps) {
  const [internalValue, setInternalValue] = useState<string | null>(defaultValue);
  const selectedValue = value === undefined ? internalValue : value;
  const selectedOption =
    options.find((option) => option.value === selectedValue) ?? null;
  const isInvalid = invalid || Boolean(error);
  const describedBy = getDescribedBy(id, {
    description,
    helperText,
    validationMessage,
    error,
  });

  return (
    <div
      className={cn(formFieldGroupClassName, "w-full", className)}
      data-slot="searchable-select-field"
    >
      <Label htmlFor={id} invalid={isInvalid}>
        {label}
        {required ? " *" : null}
      </Label>
      {description ? (
        <FieldDescription id={`${id}-description`}>{description}</FieldDescription>
      ) : null}
      <Combobox.Root
        items={options}
        value={selectedOption}
        onValueChange={(nextOption) => {
          const nextValue = nextOption?.value ?? null;
          if (value === undefined) {
            setInternalValue(nextValue);
          }
          onValueChange?.(nextValue);
        }}
        itemToStringLabel={(option) => option.label}
        itemToStringValue={(option) => option.value}
        isItemEqualToValue={(option, selected) => option.value === selected.value}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
      >
        <Combobox.InputGroup
          className={searchableSelectInputGroupClassName}
          aria-invalid={isInvalid || undefined}
        >
          <SearchIcon className={searchableSelectSearchIconClassName} aria-hidden />
          <Combobox.Input
            id={id}
            className={searchableSelectInputClassName}
            placeholder={loading ? "Loading options…" : placeholder}
            disabled={disabled || loading}
            aria-invalid={isInvalid || undefined}
            aria-required={required || undefined}
            aria-busy={loading || undefined}
            aria-describedby={describedBy || undefined}
          />
          <Combobox.Trigger
            className={searchableSelectTriggerClassName}
            disabled={disabled || loading}
            aria-label="Show options"
          >
            {loading ? <Spinner size="sm" /> : <ChevronDownIcon aria-hidden />}
          </Combobox.Trigger>
        </Combobox.InputGroup>
        <Combobox.Status className={searchableSelectStatusClassName}>
          {loading ? loadingMessage : null}
        </Combobox.Status>
        <ComboboxPopup
          loading={loading}
          loadingMessage={loadingMessage}
          emptyMessage={emptyMessage}
        />
      </Combobox.Root>
      <FieldMessages
        id={id}
        helperText={helperText}
        validationMessage={validationMessage}
        error={error}
      />
    </div>
  );
}

function MultiSelectField({
  id,
  label,
  options,
  placeholder = "Search and select multiple",
  description,
  helperText,
  validationMessage,
  error,
  invalid = false,
  required = false,
  disabled = false,
  readOnly = false,
  loading = false,
  emptyMessage = "No results found.",
  loadingMessage = "Loading options…",
  className,
  value,
  defaultValue = [],
  onValueChange,
}: MultiSelectFieldProps) {
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
  const selectedValues = value === undefined ? internalValue : value;
  const selectedOptions = options.filter((option) =>
    selectedValues.includes(option.value)
  );
  const isInvalid = invalid || Boolean(error);
  const describedBy = getDescribedBy(id, {
    description,
    helperText,
    validationMessage,
    error,
  });

  return (
    <div
      className={cn(formFieldGroupClassName, "w-full", className)}
      data-slot="multi-select-field"
    >
      <Label htmlFor={id} invalid={isInvalid}>
        {label}
        {required ? " *" : null}
      </Label>
      {description ? (
        <FieldDescription id={`${id}-description`}>{description}</FieldDescription>
      ) : null}
      <Combobox.Root
        multiple
        items={options}
        value={selectedOptions}
        onValueChange={(nextOptions) => {
          const nextValues = nextOptions.map((option) => option.value);
          if (value === undefined) {
            setInternalValue(nextValues);
          }
          onValueChange?.(nextValues);
        }}
        itemToStringLabel={(option) => option.label}
        itemToStringValue={(option) => option.value}
        isItemEqualToValue={(option, selected) => option.value === selected.value}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
      >
        <Combobox.InputGroup
          className={multiSelectInputGroupClassName}
          aria-invalid={isInvalid || undefined}
        >
          <Combobox.Chips className={multiSelectChipsClassName}>
            <Combobox.Value>
              {(currentOptions: SearchableSelectOption[]) => (
                <>
                  {currentOptions.map((option) => (
                    <Combobox.Chip key={option.value} className={multiSelectChipClassName}>
                      <span className="max-w-[10rem] truncate">{option.label}</span>
                      <Combobox.ChipRemove
                        className={multiSelectChipRemoveClassName}
                        aria-label={`Remove ${option.label}`}
                      >
                        <XIcon className="size-3" aria-hidden />
                      </Combobox.ChipRemove>
                    </Combobox.Chip>
                  ))}
                  <Combobox.Input
                    id={id}
                    className={multiSelectInputClassName}
                    placeholder={currentOptions.length ? "" : placeholder}
                    disabled={disabled || loading}
                    aria-invalid={isInvalid || undefined}
                    aria-required={required || undefined}
                    aria-busy={loading || undefined}
                    aria-describedby={describedBy || undefined}
                  />
                </>
              )}
            </Combobox.Value>
          </Combobox.Chips>
          <Combobox.Trigger
            className={searchableSelectTriggerClassName}
            disabled={disabled || loading}
            aria-label="Show options"
          >
            {loading ? <Spinner size="sm" /> : <ChevronDownIcon aria-hidden />}
          </Combobox.Trigger>
        </Combobox.InputGroup>
        <Combobox.Status className={searchableSelectStatusClassName}>
          {loading ? loadingMessage : null}
        </Combobox.Status>
        <ComboboxPopup
          loading={loading}
          loadingMessage={loadingMessage}
          emptyMessage={emptyMessage}
        />
      </Combobox.Root>
      <FieldMessages
        id={id}
        helperText={helperText}
        validationMessage={validationMessage}
        error={error}
      />
    </div>
  );
}

export { MultiSelectField, SearchableSelectField };
