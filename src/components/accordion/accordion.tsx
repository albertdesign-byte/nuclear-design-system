"use client";

import type { ComponentProps } from "react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  accordionHeaderClassName,
  accordionItemClassName,
  accordionPanelClassName,
  accordionPanelInnerClassName,
  accordionRootClassName,
  accordionTriggerClassName,
} from "./accordion.styles";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn(accordionRootClassName, className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(accordionItemClassName, className)}
      {...props}
    />
  );
}

function AccordionHeader({
  className,
  ...props
}: AccordionPrimitive.Header.Props) {
  return (
    <AccordionPrimitive.Header
      data-slot="accordion-header"
      className={cn(accordionHeaderClassName, className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Trigger
      data-slot="accordion-trigger"
      className={cn(accordionTriggerClassName, className)}
      {...props}
    >
      {children}
      <ChevronDownIcon aria-hidden />
    </AccordionPrimitive.Trigger>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={cn(accordionPanelClassName, className)}
      {...props}
    >
      <div className={accordionPanelInnerClassName}>{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
};
