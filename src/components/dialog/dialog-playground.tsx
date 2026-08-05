"use client";

import { useState } from "react";

import { Button } from "@/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { ThemeToggle } from "@/components/theme-toggle";

export function DialogPlayground() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Dialog Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-semibold">Confirm cancellation</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger render={<Button variant="outline" />}>
            Cancelar cita
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>¿Cancelar cita?</DialogTitle>
              <DialogDescription>
                La cita del 18 de julio a las 10:30 se marcará como cancelada.
                Esta acción no se puede deshacer.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Mantener cita
              </Button>
              <Button intent="danger" onClick={() => setOpen(false)}>
                Confirmar cancelación
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
}
