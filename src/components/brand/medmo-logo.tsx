"use client";

import { useId } from "react";

import { cn } from "@/lib/utils";

export function MedmoLogo({ className }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg
      aria-hidden
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-8 shrink-0", className)}
    >
      <rect width="32" height="32" rx="6" fill={`url(#${gradientId})`} />
      <path
        d="M17.8521 15.9063V22.221H14.539V15.8832C14.539 14.2706 14.0911 13.0126 12.6194 13.0126C11.1477 13.0126 10.731 14.3212 10.731 15.9063V22.221H7.4001V10.4278H10.731V12.0405C11.468 10.8701 12.541 10.179 13.7909 10.179C15.5336 10.179 16.7164 10.96 17.2966 12.1533C18.1657 10.4278 19.8188 10.1974 20.9119 10.1974C24.1286 10.1974 25 12.8399 25 15.8257V22.221H21.6713V15.8832C21.6713 14.2706 21.2233 13.0126 19.7516 13.0126C18.2799 13.0126 17.8521 14.3212 17.8521 15.9063Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="-5.44"
          y1="4"
          x2="24.5787"
          y2="48.8328"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.311779" stopColor="#41507A" />
          <stop offset="0.432558" stopColor="#5E70A6" />
          <stop offset="0.562971" stopColor="#242F4F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function MedmoLogoLockup({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[var(--space-inline-sm)]",
        className
      )}
    >
      <MedmoLogo className={iconClassName} />
      <span className="text-[length:var(--text-label-size)] font-semibold leading-[var(--text-label-line-height)] tracking-[0.02em] text-[var(--color-text-primary)]">
        medmo
      </span>
    </span>
  );
}
