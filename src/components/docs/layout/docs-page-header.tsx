"use client";

import { CheckIcon, CopyIcon, ChevronDownIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/button";
import {
  getPatientsComponentSlug,
  patientsSlugSupportsDevicePreview,
} from "@/components/docs/config/patients-component-routes";
import { DocsPatientsDeviceDropdown } from "@/components/docs/layout/docs-patients-device-dropdown";

export function DocsPageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const patientsSlug = getPatientsComponentSlug(pathname);
  const showPatientsDeviceDropdown = patientsSlugSupportsDevicePreview(patientsSlug);

  async function copyPage() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-col gap-[var(--space-stack-sm)] sm:flex-row sm:items-start sm:justify-between">
      <div className="flex max-w-[32rem] flex-col gap-[var(--space-stack-sm)]">
        <h1 className="text-[length:var(--text-h1-size)] font-semibold leading-[var(--text-h1-line-height)] tracking-[var(--text-h1-letter-spacing)] text-foreground">
          {title}
        </h1>
        <p className="text-[length:var(--text-body-large-size)] leading-[var(--text-body-large-line-height)] text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-[var(--space-inline-sm)]">
        {showPatientsDeviceDropdown ? <DocsPatientsDeviceDropdown /> : null}
        <div className="flex overflow-hidden rounded-[var(--radius-button)] border border-[var(--docs-chrome-border)] bg-card">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="rounded-none border-0"
            onClick={copyPage}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            Copy Page
          </Button>
          <div className="w-px self-stretch bg-[var(--docs-chrome-border)]" />
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="rounded-none border-0"
            aria-label="More actions"
          >
            <ChevronDownIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
