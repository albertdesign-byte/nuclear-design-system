import type { Metadata } from "next";
import { redirect } from "next/navigation";

export default function ProductsIndexRoute() {
  redirect("/docs/products/nuclear");
}

export const metadata: Metadata = {
  title: "Products",
};
