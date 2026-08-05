"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeftIcon,
  DownloadIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react";

import { Button } from "@/components/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function PatientRecordScreen() {
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    setSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSaving(false);
  }

  return (
    <div className="mx-auto flex min-h-full w-full max-w-5xl flex-col gap-6 p-6 md:p-8">
      <header className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeftIcon className="size-4" />
            Registros
          </Link>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Paciente
            </p>
            <h1 className="text-2xl font-semibold tracking-tight">
              Elena Morales · MRN-28491
            </h1>
            <p className="text-sm text-muted-foreground">
              Última actualización hace 12 minutos
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm">
            <DownloadIcon />
            Exportar
          </Button>
          <Button variant="secondary" size="sm">
            <PencilIcon />
            Editar
          </Button>
          <Button size="sm" loading={saving} onClick={handleSave}>
            Guardar cambios
          </Button>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Información de contacto</h2>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <Item label="Teléfono" value="+1 (555) 014-2098" />
            <Item label="Email" value="elena.morales@email.com" />
            <Item label="Dirección" value="742 Evergreen Terrace" />
            <Item label="Seguro" value="BlueCross PPO" />
          </dl>

          <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
            <Button variant="outline" className="sm:min-w-28">
              Cancelar
            </Button>
            <Button loading={saving} onClick={handleSave} className="sm:min-w-36">
              Guardar cambios
            </Button>
          </div>
        </div>

        <aside className="flex flex-col gap-4">
          <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
            <h3 className="text-sm font-semibold">Acciones rápidas</h3>
            <div className="mt-3 flex flex-col gap-2">
              <Button variant="ghost" fullWidth className="justify-start">
                Ver historial clínico
              </Button>
              <Button variant="ghost" fullWidth className="justify-start">
                Programar cita
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-[var(--color-error-border)] bg-[var(--color-error-background)] p-4">
            <h3 className="text-sm font-semibold text-[var(--color-error-text)]">
              Zona de riesgo
            </h3>
            <p className="mt-1 text-sm text-[var(--color-error-text)]">
              Eliminar este registro es permanente y no se puede deshacer.
            </p>
            <Button
              variant="outline"
              intent="danger"
              fullWidth
              className="mt-4"
            >
              <Trash2Icon />
              Eliminar registro
            </Button>
          </div>
        </aside>
      </section>
    </div>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
