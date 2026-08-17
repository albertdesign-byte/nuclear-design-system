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
        <TabsTrigger value="resumen">Summary</TabsTrigger>
        <TabsTrigger value="labs">Labs</TabsTrigger>
        <TabsTrigger value="notas">Notes</TabsTrigger>
      </TabsList>
      <TabsContent value="resumen" className={tabsSegmentedContentClassName}>
        Primary diagnosis: controlled hypertension. Blood pressure 128/82 mmHg at last visit.
      </TabsContent>
      <TabsContent value="labs" className={tabsSegmentedContentClassName}>
        Hemoglobin 13.8 g/dL · Glucose 98 mg/dL · Creatinine 0.9 mg/dL.
      </TabsContent>
      <TabsContent value="notas" className={tabsSegmentedContentClassName}>
        Patient reports treatment adherence. No adverse effects
        reported.
      </TabsContent>
    </Tabs>
  );
}
