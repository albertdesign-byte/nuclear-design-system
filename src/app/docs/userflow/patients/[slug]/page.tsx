import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  patientsUserflowScreenRoutes,
  patientsUserflowScreenSlugs,
} from "@/components/docs/config/userflow-screen-routes";

type PatientsUserflowScreenPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return patientsUserflowScreenSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PatientsUserflowScreenPageProps): Promise<Metadata> {
  const { slug } = await params;
  return patientsUserflowScreenRoutes[slug]?.metadata ?? {};
}

export default async function PatientsUserflowScreenRoute({
  params,
}: PatientsUserflowScreenPageProps) {
  const { slug } = await params;
  const route = patientsUserflowScreenRoutes[slug];

  if (!route) {
    notFound();
  }

  const Page = route.component;
  return <Page />;
}
