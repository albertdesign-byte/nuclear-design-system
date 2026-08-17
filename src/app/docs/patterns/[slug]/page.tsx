import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getPatternEntry,
  getPatternMetadata,
  getPatternRouteSlugs,
} from "@/components/docs/config/patterns-registry";
import { PatternDocsRoute } from "@/components/docs/patterns/pattern-docs-route";

type PatternDocsSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPatternRouteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PatternDocsSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  return getPatternMetadata(`/docs/patterns/${slug}`);
}

export default async function PatternDocsSlugRoute({
  params,
}: PatternDocsSlugPageProps) {
  const { slug } = await params;
  const href = `/docs/patterns/${slug}`;
  const entry = getPatternEntry(href);

  if (!entry || entry.category === "Overview") {
    notFound();
  }

  return <PatternDocsRoute href={href} />;
}
