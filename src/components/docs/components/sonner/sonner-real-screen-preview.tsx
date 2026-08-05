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
      toast.success("Registro guardado", {
        description: "Los cambios del paciente se sincronizaron correctamente.",
      });
    }, 1200);
  }

  return (
    <div className="flex flex-col gap-[var(--space-stack-md)]">
      <Button onClick={handleSave} disabled={saving}>
        {saving ? (
          <>
            <Spinner size="sm" aria-hidden />
            Guardando…
          </>
        ) : (
          "Guardar registro"
        )}
      </Button>
      <p className="text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-text-muted)]">
        La notificación usa el Toaster global montado en AppProviders.
      </p>
    </div>
  );
}
