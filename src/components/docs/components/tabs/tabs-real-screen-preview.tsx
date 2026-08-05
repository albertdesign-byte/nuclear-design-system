import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  tabsSegmentedContentClassName,
} from "@/components/tabs";

export function TabsRealScreenPreview() {
  return (
    <Tabs defaultValue="resumen">
      <TabsList>
        <TabsTrigger value="resumen">Resumen</TabsTrigger>
        <TabsTrigger value="labs">Labs</TabsTrigger>
        <TabsTrigger value="notas">Notas</TabsTrigger>
      </TabsList>
      <TabsContent value="resumen" className={tabsSegmentedContentClassName}>
        Diagnóstico principal: hipertensión controlada. Presión arterial 128/82
        mmHg en la última visita.
      </TabsContent>
      <TabsContent value="labs" className={tabsSegmentedContentClassName}>
        Hemoglobina 13.8 g/dL · Glucosa 98 mg/dL · Creatinina 0.9 mg/dL.
      </TabsContent>
      <TabsContent value="notas" className={tabsSegmentedContentClassName}>
        Paciente refiere adherencia al tratamiento. Sin efectos adversos
        reportados.
      </TabsContent>
    </Tabs>
  );
}
