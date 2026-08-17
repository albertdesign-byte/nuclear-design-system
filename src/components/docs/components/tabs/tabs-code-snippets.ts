import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const tabsImport = `import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/tabs";`;

export const tabsInstallationUiSnippet = tsxSnippet(`${tabsImport}

export function Example() {
  return (
    <Tabs defaultValue="resumen">
      <TabsList>
        <TabsTrigger value="resumen">Summary</TabsTrigger>
        <TabsTrigger value="labs">Labs</TabsTrigger>
      </TabsList>
      <TabsContent value="resumen">Clinical summary.</TabsContent>
      <TabsContent value="labs">Lab results.</TabsContent>
    </Tabs>
  );
}`);

export const tabsRealScreenSnippet = tsxSnippet(`${tabsImport}

export function Example() {
  return (
    <Tabs defaultValue="resumen">
      <TabsList>
        <TabsTrigger value="resumen">Summary</TabsTrigger>
        <TabsTrigger value="labs">Labs</TabsTrigger>
        <TabsTrigger value="notas">Notes</TabsTrigger>
      </TabsList>
      <TabsContent value="resumen">
        Primary diagnosis: controlled hypertension.
      </TabsContent>
      <TabsContent value="labs">
        Hemoglobin 13.8 g/dL · Glucose 98 mg/dL.
      </TabsContent>
      <TabsContent value="notas">
        Patient reports treatment adherence.
      </TabsContent>
    </Tabs>
  );
}`);

export const tabsUsageSnippet = exampleSnippet(
  `<Tabs defaultValue="resumen">
  <TabsList>
    <TabsTrigger value="resumen">Summary</TabsTrigger>
    <TabsTrigger value="labs">Labs</TabsTrigger>
  </TabsList>
  <TabsContent value="resumen">Clinical summary.</TabsContent>
  <TabsContent value="labs">Lab results.</TabsContent>
</Tabs>`,
  { imports: [tabsImport] }
);

export const tabsDefaultSnippet = exampleSnippet(
  `import { tabsSegmentedContentClassName } from "@/components/tabs";

<Tabs defaultValue="resumen">
  <TabsList>
    <TabsTrigger value="resumen">Summary</TabsTrigger>
    <TabsTrigger value="labs">Labs</TabsTrigger>
  </TabsList>
  <TabsContent value="resumen" className={tabsSegmentedContentClassName}>
    Clinical summary.
  </TabsContent>
  <TabsContent value="labs" className={tabsSegmentedContentClassName}>
    Lab results.
  </TabsContent>
</Tabs>`,
  { imports: [tabsImport] }
);

export const tabsLineSnippet = exampleSnippet(
  `<Tabs defaultValue="resumen">
  <TabsList variant="line">
    <TabsTrigger value="resumen">Summary</TabsTrigger>
    <TabsTrigger value="labs">Labs</TabsTrigger>
  </TabsList>
  <TabsContent value="resumen">Clinical summary.</TabsContent>
  <TabsContent value="labs">Lab results.</TabsContent>
</Tabs>`,
  { imports: [tabsImport] }
);

export const tabsFolderSnippet = exampleSnippet(
  `import { tabsFolderContentClassName } from "@/components/tabs";

<Tabs defaultValue="my-info" className="gap-0">
  <TabsList variant="folder">
    <TabsTrigger value="my-info">My info</TabsTrigger>
    <TabsTrigger value="scan-search">Scan Search</TabsTrigger>
    <TabsTrigger value="my-reports">My Reports</TabsTrigger>
  </TabsList>
  <TabsContent value="my-info" className={tabsFolderContentClassName}>
    Dashboard content
  </TabsContent>
</Tabs>`,
  { imports: [tabsImport] }
);

export const tabsVerticalSnippet = exampleSnippet(
  `<Tabs defaultValue="resumen" orientation="vertical">
  <TabsList>
    <TabsTrigger value="resumen">Summary</TabsTrigger>
    <TabsTrigger value="labs">Labs</TabsTrigger>
  </TabsList>
  <TabsContent value="resumen">Clinical summary.</TabsContent>
  <TabsContent value="labs">Lab results.</TabsContent>
</Tabs>`,
  { imports: [tabsImport] }
);
