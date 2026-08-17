"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/button";
import { Spinner } from "@/components/spinner";

export function SonnerRealScreenPreview() {
  const [saving, setSaving] = useState(false);

  function handleSave() {
    setSaving(true);
    window.setTimeout(() => {
      setSaving(false);
      toast.success("Record saved", {
        description: "Patient changes synced successfully.",
      });
    }, 1200);
  }

  return (
    <div className="flex flex-col gap-[var(--space-stack-md)]">
      <Button onClick={handleSave} disabled={saving}>
        {saving ? (
          <>
            <Spinner size="sm" aria-hidden />
            Saving…
          </>
        ) : (
          "Save record"
        )}
      </Button>
      <p className="text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-text-muted)]">
        The notification uses the global Toaster mounted in AppProviders.
      </p>
    </div>
  );
}
