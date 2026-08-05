"use client";

import Link from "next/link";
import {
  BriefcaseMedicalIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  MessageSquareIcon,
  PlusIcon,
  StethoscopeIcon,
  UploadIcon,
  UsersIcon,
} from "lucide-react";

import { AppHeader } from "@/components/app-header";
import { AppShell } from "@/components/app-shell";
import { AppSidebar } from "@/components/app-sidebar";
import { GlobalSearchBar } from "@/components/global-search-bar";
import { UserProfileBlock } from "@/components/user-profile-block";

const previewItems = [
  { label: "Dashboard", href: "#", icon: LayoutDashboardIcon, active: true },
  { label: "Patients", href: "#", icon: UsersIcon },
  { label: "Uploads", href: "#", icon: UploadIcon },
  { label: "Messages", href: "#", icon: MessageSquareIcon },
  { label: "Create", href: "#", icon: PlusIcon },
  { label: "Clinical", href: "#", icon: StethoscopeIcon },
  { label: "Orders", href: "#", icon: BriefcaseMedicalIcon },
  { label: "Sign out", href: "#", icon: LogOutIcon },
];

export function AppShellRealScreenPreview() {
  return (
    <AppShell
      className="h-full min-h-0"
      sidebar={<AppSidebar items={previewItems} logoHref="/" />}
        header={
          <AppHeader
            title="Dashboard"
            search={<GlobalSearchBar className="max-w-[12rem]" />}
            actions={
              <UserProfileBlock name="Jose Nevado" subtitle="Care Points: 0" />
            }
          />
        }
      >
        <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-muted)]">
          Main content slot — see the full dashboard at{" "}
          <Link href="/examples/dashboard" className="text-[var(--color-text-link)] underline">
            /examples/dashboard
          </Link>
          .
        </p>
      </AppShell>
  );
}
