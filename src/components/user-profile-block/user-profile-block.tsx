"use client";

import { Settings2Icon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

export type UserProfileBlockProps = {
  name: string;
  subtitle?: string;
  avatarSrc?: string;
  avatarFallback?: string;
  onSettingsClick?: () => void;
  className?: string;
};

export function UserProfileBlock({
  name,
  subtitle,
  avatarSrc,
  avatarFallback,
  onSettingsClick,
  className,
}: UserProfileBlockProps) {
  const initials =
    avatarFallback ??
    name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <div
      data-slot="user-profile-block"
      className={cn(
        "flex items-center gap-[var(--space-inline-sm)]",
        className
      )}
    >
      <Avatar size="sm">
        {avatarSrc ? <AvatarImage src={avatarSrc} alt={name} /> : null}
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      <div className="hidden min-w-0 flex-col sm:flex">
        <span className="truncate text-[length:var(--text-label-size)] font-medium leading-[var(--text-label-line-height)] text-[var(--color-text-primary)]">
          {name}
        </span>
        {subtitle ? (
          <span className="truncate text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-text-muted)]">
            {subtitle}
          </span>
        ) : null}
      </div>

      {onSettingsClick ? (
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label="Account settings"
          onClick={onSettingsClick}
        >
          <Settings2Icon />
        </Button>
      ) : null}
    </div>
  );
}
