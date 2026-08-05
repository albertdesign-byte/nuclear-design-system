import { cn } from "@/lib/utils";

import { stripeBadgeBrandClassName, stripeBadgeClassName } from "./payment-form.styles";

export function StripeBadge({ className }: { className?: string }) {
  return (
    <div data-slot="stripe-badge" className={cn(stripeBadgeClassName, className)}>
      <span>Powered by</span>
      <span className={stripeBadgeBrandClassName}>stripe</span>
    </div>
  );
}
