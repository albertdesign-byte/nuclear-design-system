"use client";

import { UserProfileBlock } from "@/components/user-profile-block";
import { DocsRealScreenExampleLink } from "@/components/docs/primitives/docs-real-screen-example-link";

export function UserProfileBlockRealScreenPreview() {
  return (
    <div>
      <UserProfileBlock
        name="Jose Nevado"
        subtitle="Care Points: 0"
        onSettingsClick={() => undefined}
      />
      <DocsRealScreenExampleLink />
    </div>
  );
}
