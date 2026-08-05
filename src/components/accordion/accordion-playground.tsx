"use client";

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { ThemeToggle } from "@/components/theme-toggle";

export function AccordionPlayground() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Accordion Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
        <h2 className="text-sm font-semibold">Prior authorization FAQ</h2>
        <Accordion defaultValue={["coverage"]} className="max-w-lg">
          <AccordionItem value="coverage">
            <AccordionHeader>
              <AccordionTrigger>What imaging requires prior auth?</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              MRI, PET/CT, and advanced nuclear studies typically require
              authorization before scheduling.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="timeline">
            <AccordionHeader>
              <AccordionTrigger>How long does review take?</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              Standard reviews complete within 24–48 hours. Stat requests are
              escalated to the MS1 queue.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="documents">
            <AccordionHeader>
              <AccordionTrigger>Which documents should I attach?</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              Include the referral, recent clinical notes, and any prior imaging
              reports relevant to the request.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
