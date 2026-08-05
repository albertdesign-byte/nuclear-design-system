import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  nuclearUserflowScreenRoutes,
  nuclearUserflowScreenSlugs,
} from "@/components/docs/config/userflow-screen-routes";

type NuclearUserflowScreenPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return nuclearUserflowScreenSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: NuclearUserflowScreenPageProps): Promise<Metadata> {
  const { slug } = await params;
  return nuclearUserflowScreenRoutes[slug]?.metadata ?? {};
}

export default async function NuclearUserflowScreenPage({
  params,
}: NuclearUserflowScreenPageProps) {
  const { slug } = await params;
  const route = nuclearUserflowScreenRoutes[slug];

  if (!route) {
    notFound();
  }

  const Page = route.component;
  return <Page />;
}
