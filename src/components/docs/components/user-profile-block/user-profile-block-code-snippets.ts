import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const userProfileBlockImport = `import { UserProfileBlock } from "@/components/user-profile-block";`;

export const userProfileBlockInstallationUiSnippet = tsxSnippet(`${userProfileBlockImport}

export function Example() {
  return (
    <UserProfileBlock name="Jose Nevado" subtitle="Care Points: 0" />
  );
}`);

export const userProfileBlockRealScreenSnippet = tsxSnippet(`${userProfileBlockImport}

export function Example() {
  return (
    <UserProfileBlock
      name="Jose Nevado"
      subtitle="Care Points: 0"
      onSettingsClick={() => undefined}
    />
  );
}`);

export const userProfileBlockUsageSnippet = exampleSnippet(
  `<UserProfileBlock name="Jose Nevado" subtitle="Care Points: 0" />`,
  { imports: [userProfileBlockImport] }
);

export const userProfileBlockWithSettingsSnippet = exampleSnippet(
  `<UserProfileBlock
  name="Jose Nevado"
  subtitle="Care Points: 0"
  onSettingsClick={() => openSettings()}
/>`,
  { imports: [userProfileBlockImport] }
);
