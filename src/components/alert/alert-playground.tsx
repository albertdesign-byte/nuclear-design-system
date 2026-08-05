"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/alert";
import { Button } from "@/components/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { AlertTriangleIcon, InfoIcon } from "lucide-react";

export function AlertPlayground() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Alert Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
        <h2 className="text-sm font-semibold">Critical lab result</h2>
        <Alert variant="destructive">
          <AlertTriangleIcon />
          <AlertTitle>Potassium critically high — 6.8 mEq/L</AlertTitle>
          <AlertDescription>
            Result exceeds critical threshold. Notify attending physician
            immediately and repeat stat draw to confirm.
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertTitle>Follow-up scheduled</AlertTitle>
          <AlertDescription>
            Cardiology consult confirmed for Monday at 09:00.
          </AlertDescription>
        </Alert>
        <Alert variant="success">
          <InfoIcon />
          <AlertTitle>Cancelation policy.</AlertTitle>
          <AlertDescription>
            Cancel at least 24 hours before your appointment for a full refund.
          </AlertDescription>
        </Alert>
        <Button variant="outline" size="sm" className="w-fit">
          Acknowledge alert
        </Button>
      </section>
    </div>
  );
}
