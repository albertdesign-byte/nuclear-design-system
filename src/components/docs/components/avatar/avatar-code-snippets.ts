import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const avatarImport = `import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/avatar";`;

export const avatarInstallationUiSnippet = tsxSnippet(`${avatarImport}

export function Example() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="Dr. Rivera" />
      <AvatarFallback>DR</AvatarFallback>
    </Avatar>
  );
}`);

export const avatarRealScreenSnippet = tsxSnippet(`${avatarImport}

export function Example() {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Dr. Rivera" />
        <AvatarFallback>DR</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium">Dra. Ana Rivera</p>
        <p className="text-xs text-muted-foreground">Attending physician · Cardiology</p>
      </div>
    </div>
  );
}`);

export const avatarUsageSnippet = exampleSnippet(
  `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="Dr. Rivera" />
  <AvatarFallback>DR</AvatarFallback>
</Avatar>`,
  { imports: [avatarImport] }
);

export const avatarSizeSnippet = exampleSnippet(
  `<div className="flex items-center gap-3">
  <Avatar size="sm">
    <AvatarFallback>SM</AvatarFallback>
  </Avatar>
  <Avatar size="md">
    <AvatarFallback>MD</AvatarFallback>
  </Avatar>
  <Avatar size="lg">
    <AvatarFallback>LG</AvatarFallback>
  </Avatar>
</div>`,
  { imports: [avatarImport] }
);

export const avatarImageSnippet = exampleSnippet(
  `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="Dr. Rivera" />
  <AvatarFallback>DR</AvatarFallback>
</Avatar>`,
  { imports: [avatarImport] }
);

export const avatarFallbackSnippet = exampleSnippet(
  `<Avatar>
  <AvatarFallback>AR</AvatarFallback>
</Avatar>`,
  { imports: [avatarImport] }
);

export const avatarBadgeSnippet = tsxSnippet(`${avatarImport}

export function Example() {
  return (
    <Avatar>
      <AvatarFallback>DR</AvatarFallback>
      <AvatarBadge aria-hidden />
    </Avatar>
  );
}`);

export const avatarGroupSnippet = tsxSnippet(`${avatarImport}
import { AvatarGroup, AvatarGroupCount } from "@/components/avatar";

export function Example() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>AR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JM</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+2</AvatarGroupCount>
    </AvatarGroup>
  );
}`);
