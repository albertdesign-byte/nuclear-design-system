"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/avatar";
import {
  avatarBadgeSnippet,
  avatarFallbackSnippet,
  avatarGroupSnippet,
  avatarImageSnippet,
  avatarInstallationUiSnippet,
  avatarRealScreenSnippet,
  avatarSizeSnippet,
  avatarUsageSnippet,
} from "@/components/docs/components/avatar/avatar-code-snippets";
import { AvatarRealScreenPreview } from "@/components/docs/components/avatar/avatar-real-screen-preview";
import { avatarTocItems } from "@/components/docs/config/navigation";
import { Button } from "@/components/button";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import type { CodeLine } from "@/components/docs/primitives/docs-preview";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const avatarApiRows = [
  {
    prop: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
  },
  {
    prop: "className",
    type: "string",
    defaultValue: "undefined",
  },
];

export function AvatarDocsPage() {
  return (
    <DocsComponentPage
      title="Avatar"
      description="An image element with a fallback for representing the user."
      tocItems={avatarTocItems}
      realScreen={{
        preview: <AvatarRealScreenPreview />,
        code: avatarRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/badge" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Badge
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/card" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Card
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={avatarInstallationUiSnippet}>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Dr. Rivera"
                />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from <DocsInlineCode>@/components/avatar</DocsInlineCode>.
                Always provide meaningful <DocsInlineCode>alt</DocsInlineCode> text
                on images or initials in the fallback.
              </>
            }
          >
            <DocsPreview code={avatarUsageSnippet}>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Dr. Rivera"
                />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="size"
            title="Size"
            description={
              <>
                The default size is <DocsInlineCode>md</DocsInlineCode> (formerly
                shadcn&apos;s <DocsInlineCode>default</DocsInlineCode>).
              </>
            }
          >
            <DocsPreview code={avatarSizeSnippet}>
              <div className="flex items-center gap-[var(--space-inline-md)]">
                <Avatar size="sm">
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <Avatar size="md">
                  <AvatarFallback>MD</AvatarFallback>
                </Avatar>
                <Avatar size="lg">
                  <AvatarFallback>LG</AvatarFallback>
                </Avatar>
              </div>
            </DocsPreview>
          </DocsSection>

          <StateSection
            id="image"
            title="Image"
            code={avatarImageSnippet}
            preview={
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Dr. Rivera"
                />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
            }
          />

          <StateSection
            id="fallback"
            title="Fallback"
            code={avatarFallbackSnippet}
            preview={
              <Avatar>
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
            }
          />

          <StateSection
            id="badge"
            title="Badge"
            description="Status indicator anchored to the avatar corner."
            code={avatarBadgeSnippet}
            preview={
              <Avatar>
                <AvatarFallback>DR</AvatarFallback>
                <AvatarBadge aria-hidden />
              </Avatar>
            }
          />

          <StateSection
            id="group"
            title="Group"
            code={avatarGroupSnippet}
            preview={
              <AvatarGroup>
                <Avatar>
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>JM</AvatarFallback>
                </Avatar>
                <AvatarGroupCount>+2</AvatarGroupCount>
              </AvatarGroup>
            }
          />

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              Avatar
            </h3>
            <DocsApiTable rows={avatarApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}

function StateSection({
  id,
  title,
  code,
  preview,
  description,
}: {
  id: string;
  title: string;
  code: CodeLine[];
  preview: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <DocsSection id={id} title={title} description={description}>
      <DocsPreview code={code}>{preview}</DocsPreview>
    </DocsSection>
  );
}
