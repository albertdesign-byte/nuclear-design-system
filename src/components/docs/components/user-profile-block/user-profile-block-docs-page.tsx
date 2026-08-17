"use client";

import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/button";
import { UserProfileBlock } from "@/components/user-profile-block";
import {
  userProfileBlockInstallationUiSnippet,
  userProfileBlockRealScreenSnippet,
  userProfileBlockUsageSnippet,
  userProfileBlockWithSettingsSnippet,
} from "@/components/docs/components/user-profile-block/user-profile-block-code-snippets";
import { UserProfileBlockRealScreenPreview } from "@/components/docs/components/user-profile-block/user-profile-block-real-screen-preview";
import { userProfileBlockTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const userProfileBlockApiRows = [
  { prop: "name", type: "string", defaultValue: "—" },
  { prop: "subtitle", type: "string", defaultValue: "—" },
  { prop: "avatarSrc", type: "string", defaultValue: "—" },
  { prop: "avatarFallback", type: "string", defaultValue: "initials from name" },
  { prop: "onSettingsClick", type: "() => void", defaultValue: "—" },
  { prop: "className", type: "string", defaultValue: "—" },
];

export function UserProfileBlockDocsPage() {
  return (
    <DocsComponentPage
      title="User Profile Block"
      description="Compact user identity block with avatar, name, subtitle, and optional settings action for app headers."
      tocItems={userProfileBlockTocItems}
      realScreen={{
        preview: <UserProfileBlockRealScreenPreview />,
        code: userProfileBlockRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={userProfileBlockInstallationUiSnippet}>
              <UserProfileBlock name="Jose Nevado" subtitle="Care Points: 0" />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from{" "}
                <DocsInlineCode>@/components/user-profile-block</DocsInlineCode>.
                Place in <DocsInlineCode>AppHeader</DocsInlineCode> actions.
              </>
            }
          >
            <DocsPreview code={userProfileBlockUsageSnippet}>
              <UserProfileBlock name="Jose Nevado" subtitle="Care Points: 0" />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="with-settings"
            title="With Settings"
            description="Pass onSettingsClick to render the settings icon button."
          >
            <DocsPreview code={userProfileBlockWithSettingsSnippet}>
              <UserProfileBlock
                name="Jose Nevado"
                subtitle="Care Points: 0"
                onSettingsClick={() => undefined}
              />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="full-example"
            title="Full Example"
            description="See User Profile Block in the app header on the dashboard screen."
          >
            <Button render={<Link href="/examples/dashboard" />}>
              Open dashboard example
              <ArrowRightIcon />
            </Button>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <DocsApiTable rows={userProfileBlockApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
