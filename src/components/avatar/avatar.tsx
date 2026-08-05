"use client";

import * as React from "react";
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";

import { cn } from "@/lib/utils";

import {
  avatarBadgeVariants,
  avatarFallbackVariants,
  avatarGroupClassName,
  avatarGroupCountVariants,
  avatarImageClassName,
  avatarVariants,
} from "./avatar.styles";
import type {
  AvatarBadgeProps,
  AvatarFallbackProps,
  AvatarGroupCountProps,
  AvatarGroupProps,
  AvatarImageProps,
  AvatarProps,
} from "./avatar.types";

function Avatar({ className, size = "md", ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(avatarVariants({ size }), className)}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(avatarImageClassName, className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  size,
  ...props
}: AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        avatarFallbackVariants({ size }),
        "group-data-[size=sm]/avatar:text-[length:var(--text-caption-size)]",
        className
      )}
      {...props}
    />
  );
}

function AvatarBadge({ className, size, ...props }: AvatarBadgeProps) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        avatarBadgeVariants({ size }),
        "group-data-[size=sm]/avatar:size-[var(--spacing-8)] group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=md]/avatar:size-[var(--spacing-12)] group-data-[size=md]/avatar:[&>svg]:size-[var(--icon-sm)]",
        "group-data-[size=lg]/avatar:size-[var(--spacing-12)] group-data-[size=lg]/avatar:[&>svg]:size-[var(--icon-sm)]",
        className
      )}
      {...props}
    />
  );
}

function AvatarGroup({ className, ...props }: AvatarGroupProps) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(avatarGroupClassName, className)}
      {...props}
    />
  );
}

function AvatarGroupCount({ className, ...props }: AvatarGroupCountProps) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        avatarGroupCountVariants({ size: "md" }),
        "group-has-data-[size=lg]/avatar-group:size-[var(--spacing-40)] group-has-data-[size=sm]/avatar-group:size-[var(--spacing-24)]",
        "group-has-data-[size=lg]/avatar-group:[&>svg]:size-[var(--icon-lg)] group-has-data-[size=sm]/avatar-group:[&>svg]:size-[var(--icon-sm)]",
        className
      )}
      {...props}
    />
  );
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
};
