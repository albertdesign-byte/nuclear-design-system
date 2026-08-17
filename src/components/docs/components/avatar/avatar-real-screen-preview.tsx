import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/avatar";

export function AvatarRealScreenPreview() {
  return (
    <div className="flex w-full max-w-md items-center gap-[var(--space-inline-md)] rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-card)] shadow-sm">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Dra. Ana Rivera" />
        <AvatarFallback>AR</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-[length:var(--text-body-small-size)] font-medium leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]">
          Dra. Ana Rivera
        </p>
        <p className="text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-text-muted)]">
          Attending physician · Cardiology
        </p>
      </div>
    </div>
  );
}
