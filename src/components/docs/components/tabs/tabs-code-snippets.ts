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
        <TabsTrigger value="resumen">Resumen</TabsTrigger>
        <TabsTrigger value="labs">Labs</TabsTrigger>
      </TabsList>
      <TabsContent value="resumen">Resumen clínico.</TabsContent>
      <TabsContent value="labs">Resultados de laboratorio.</TabsContent>
    </Tabs>
  );
}`);

export const tabsRealScreenSnippet = tsxSnippet(`${tabsImport}

export function Example() {
  return (
    <Tabs defaultValue="resumen">
      <TabsList>
        <TabsTrigger value="resumen">Resumen</TabsTrigger>
        <TabsTrigger value="labs">Labs</TabsTrigger>
        <TabsTrigger value="notas">Notas</TabsTrigger>
      </TabsList>
      <TabsContent value="resumen">
        Diagnóstico principal: hipertensión controlada.
      </TabsContent>
      <TabsContent value="labs">
        Hemoglobina 13.8 g/dL · Glucosa 98 mg/dL.
      </TabsContent>
      <TabsContent value="notas">
        Paciente refiere adherencia al tratamiento.
      </TabsContent>
    </Tabs>
  );
}`);

export const tabsUsageSnippet = exampleSnippet(
  `<Tabs defaultValue="resumen">
  <TabsList>
    <TabsTrigger value="resumen">Resumen</TabsTrigger>
    <TabsTrigger value="labs">Labs</TabsTrigger>
  </TabsList>
  <TabsContent value="resumen">Resumen clínico.</TabsContent>
  <TabsContent value="labs">Resultados de laboratorio.</TabsContent>
</Tabs>`,
  { imports: [tabsImport] }
);

export const tabsDefaultSnippet = exampleSnippet(
  `import { tabsSegmentedContentClassName } from "@/components/tabs";

<Tabs defaultValue="resumen">
  <TabsList>
    <TabsTrigger value="resumen">Resumen</TabsTrigger>
    <TabsTrigger value="labs">Labs</TabsTrigger>
  </TabsList>
  <TabsContent value="resumen" className={tabsSegmentedContentClassName}>
    Resumen clínico.
  </TabsContent>
  <TabsContent value="labs" className={tabsSegmentedContentClassName}>
    Resultados de laboratorio.
  </TabsContent>
</Tabs>`,
  { imports: [tabsImport] }
);

export const tabsLineSnippet = exampleSnippet(
  `<Tabs defaultValue="resumen">
  <TabsList variant="line">
    <TabsTrigger value="resumen">Resumen</TabsTrigger>
    <TabsTrigger value="labs">Labs</TabsTrigger>
  </TabsList>
  <TabsContent value="resumen">Resumen clínico.</TabsContent>
  <TabsContent value="labs">Resultados de laboratorio.</TabsContent>
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
    <TabsTrigger value="resumen">Resumen</TabsTrigger>
    <TabsTrigger value="labs">Labs</TabsTrigger>
  </TabsList>
  <TabsContent value="resumen">Resumen clínico.</TabsContent>
  <TabsContent value="labs">Resultados de laboratorio.</TabsContent>
</Tabs>`,
  { imports: [tabsImport] }
);
