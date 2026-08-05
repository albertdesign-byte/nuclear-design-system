"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";

const patients = [
  { mrn: "MRN-28491", name: "Elena Morales", status: "Activo" },
  { mrn: "MRN-19302", name: "Carlos Ruiz", status: "Pendiente" },
  { mrn: "MRN-44108", name: "Ana Vega", status: "Alta" },
];

export function TablePlayground() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Table Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-semibold">Patient list</h2>
        <Table>
          <TableCaption>Pacientes registrados hoy</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>MRN</TableHead>
              <TableHead>Paciente</TableHead>
              <TableHead>Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.mrn}>
                <TableCell className="font-medium">{patient.mrn}</TableCell>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
