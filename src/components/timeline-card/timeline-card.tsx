"use client";

import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  timelineCardAuthorClassName,
  timelineCardClassName,
  timelineCardContentClassName,
  timelineCardDescriptionClassName,
  timelineCardHeaderMainClassName,
  timelineCardHeaderVariants,
  timelineCardIconClassName,
  timelineCardIconPriorityClassName,
  timelineCardPriorityClassName,
  timelineCardTagClassName,
  timelineCardTagLabelClassName,
  timelineCardTagsClassName,
  timelineCardTitleClassName,
  timelineCardTitlePriorityClassName,
} from "./timeline-card.styles";
import type {
  TimelineCardContentProps,
  TimelineCardHeaderProps,
  TimelineCardPriorityProps,
  TimelineCardProps,
  TimelineCardTagProps,
} from "./timeline-card.types";

function TimelineCard({
  className,
  title,
  author,
  description,
  icon,
  priority,
  tags,
  tone = "default",
  children,
  ...props
}: TimelineCardProps) {
  const resolvedTone = priority ? "priority" : tone;

  return (
    <article
      data-slot="timeline-card"
      data-tone={resolvedTone}
      className={cn(timelineCardClassName, className)}
      {...props}
    >
      <TimelineCardHeader tone={resolvedTone}>
        <div className={timelineCardHeaderMainClassName}>
          {priority ? (
            <TimelineCardPriority>{priority}</TimelineCardPriority>
          ) : null}
          {icon ? (
            <span
              className={cn(
                timelineCardIconClassName,
                resolvedTone === "priority" && timelineCardIconPriorityClassName
              )}
            >
              {icon}
            </span>
          ) : null}
          <span
            className={cn(
              timelineCardTitleClassName,
              resolvedTone === "priority" && timelineCardTitlePriorityClassName
            )}
          >
            {title}
          </span>
        </div>
        {author ? (
          <span className={timelineCardAuthorClassName}>{author}</span>
        ) : null}
      </TimelineCardHeader>

      {description || tags?.length || children ? (
        <TimelineCardContent>
          {description ? (
            <p className={timelineCardDescriptionClassName}>{description}</p>
          ) : null}
          {tags?.length ? (
            <div className={timelineCardTagsClassName}>
              {tags.map((tag, index) => (
                <TimelineCardTag
                  key={`${String(tag.label)}-${index}`}
                  href={tag.href}
                  onClick={tag.onClick}
                >
                  {tag.label}
                </TimelineCardTag>
              ))}
            </div>
          ) : null}
          {children}
        </TimelineCardContent>
      ) : null}
    </article>
  );
}

function TimelineCardHeader({
  className,
  tone = "default",
  ...props
}: TimelineCardHeaderProps) {
  return (
    <div
      data-slot="timeline-card-header"
      data-tone={tone}
      className={cn(timelineCardHeaderVariants({ tone }), className)}
      {...props}
    />
  );
}

function TimelineCardPriority({
  className,
  children = "High",
  ...props
}: TimelineCardPriorityProps) {
  return (
    <span
      data-slot="timeline-card-priority"
      className={cn(timelineCardPriorityClassName, className)}
      {...props}
    >
      {children}
    </span>
  );
}

function TimelineCardContent({
  className,
  ...props
}: TimelineCardContentProps) {
  return (
    <div
      data-slot="timeline-card-content"
      className={cn(timelineCardContentClassName, className)}
      {...props}
    />
  );
}

function TimelineCardTag({
  className,
  children,
  href,
  onClick,
}: TimelineCardTagProps) {
  const content = (
    <>
      <span className={timelineCardTagLabelClassName}>{children}</span>
      <ChevronRightIcon aria-hidden />
    </>
  );

  if (href) {
    return (
      <Link
        data-slot="timeline-card-tag"
        href={href}
        className={cn(timelineCardTagClassName, className)}
      >
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        type="button"
        data-slot="timeline-card-tag"
        className={cn(timelineCardTagClassName, className)}
        onClick={onClick}
      >
        {content}
      </button>
    );
  }

  return (
    <span
      data-slot="timeline-card-tag"
      className={cn(timelineCardTagClassName, className)}
    >
      {content}
    </span>
  );
}

export {
  TimelineCard,
  TimelineCardContent,
  TimelineCardHeader,
  TimelineCardPriority,
  TimelineCardTag,
};
