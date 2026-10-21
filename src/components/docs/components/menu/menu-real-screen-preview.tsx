"use client";

import { Menu } from "@/components/menu";
import { menuDefaultItems } from "@/components/docs/components/menu/menu-preview-items";

export function MenuRealScreenPreview() {
  return (
    <div className="flex h-[28rem] overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
      <Menu items={menuDefaultItems} logoHref="/" />
    </div>
  );
}
