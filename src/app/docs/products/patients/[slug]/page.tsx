import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  patientsComponentRoutes,
  patientsComponentSlugs,
} from "@/components/docs/config/patients-component-routes";

type PatientsComponentPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return patientsComponentSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PatientsComponentPageProps): Promise<Metadata> {
  const { slug } = await params;
  return patientsComponentRoutes[slug]?.metadata ?? {};
}

export default async function PatientsComponentPage({
  params,
}: PatientsComponentPageProps) {
  const { slug } = await params;
  const route = patientsComponentRoutes[slug];

  if (!route) {
    notFound();
  }

  const Page = route.component;
  return <Page />;
}
