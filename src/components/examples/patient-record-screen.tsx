"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertCircleIcon,
  ArrowLeftIcon,
  DownloadIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@/components/alert";
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
            Records
          </Link>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Patient
            </p>
            <h1 className="text-2xl font-semibold tracking-tight">
              Elena Morales · MRN-28491
            </h1>
            <p className="text-sm text-muted-foreground">
              Last updated 12 minutes ago
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm">
            <DownloadIcon />
            Export
          </Button>
          <Button variant="secondary" size="sm">
            <PencilIcon />
            Edit
          </Button>
          <Button size="sm" loading={saving} onClick={handleSave}>
            Save changes
          </Button>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Contact information</h2>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <Item label="Phone" value="+1 (555) 014-2098" />
            <Item label="Email" value="elena.morales@email.com" />
            <Item label="Address" value="742 Evergreen Terrace" />
            <Item label="Insurance" value="BlueCross PPO" />
          </dl>

          <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
            <Button variant="outline" className="sm:min-w-28">
              Cancel
            </Button>
            <Button loading={saving} onClick={handleSave} className="sm:min-w-36">
              Save changes
            </Button>
          </div>
        </div>

        <aside className="flex flex-col gap-4">
          <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
            <h3 className="text-sm font-semibold">Quick actions</h3>
            <div className="mt-3 flex flex-col gap-2">
              <Button variant="ghost" fullWidth className="justify-start">
                View clinical history
              </Button>
              <Button variant="ghost" fullWidth className="justify-start">
                Schedule appointment
              </Button>
            </div>
          </div>

          <Alert variant="error">
            <AlertIcon><AlertCircleIcon /></AlertIcon>
            <AlertTitle>Danger zone</AlertTitle>
            <AlertDescription>
              Deleting this record is permanent and cannot be undone.
            </AlertDescription>
            <AlertAction>
              <Button variant="outline" intent="danger" fullWidth>
                <Trash2Icon />
                Delete record
              </Button>
            </AlertAction>
          </Alert>
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
