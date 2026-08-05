"use client";

import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/tabs";
import type { TabsListVariant } from "@/components/tabs";

const variants: TabsListVariant[] = ["default", "line"];

export function TabsPlayground() {
  const [variant, setVariant] = useState<TabsListVariant>("default");

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Tabs Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr]">
        <aside className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4">
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-muted-foreground">Variant</span>
            <select
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              value={variant}
              onChange={(e) => setVariant(e.target.value as TabsListVariant)}
            >
              {variants.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </aside>

        <section className="rounded-lg border border-border bg-card p-6">
          <h2 className="mb-4 text-sm font-semibold">Clinical record</h2>
          <Tabs defaultValue="resumen">
            <TabsList variant={variant}>
              <TabsTrigger value="resumen">Resumen</TabsTrigger>
              <TabsTrigger value="labs">Labs</TabsTrigger>
              <TabsTrigger value="notas">Notas</TabsTrigger>
            </TabsList>
            <TabsContent value="resumen" className="mt-4">
              Diagnóstico principal: hipertensión controlada.
            </TabsContent>
            <TabsContent value="labs" className="mt-4">
              Hemoglobina 13.8 g/dL · Glucosa 98 mg/dL.
            </TabsContent>
            <TabsContent value="notas" className="mt-4">
              Paciente refiere adherencia al tratamiento.
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  );
}
