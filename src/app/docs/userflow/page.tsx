import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Userflow",
};

export default function UserflowIndexRoute() {
  redirect("/docs/userflow/nuclear");
}
