import {
  BriefcaseMedicalIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  UploadIcon,
  UsersIcon,
} from "lucide-react";

import type { MenuNavItem } from "@/components/menu";

export const menuDefaultItems: MenuNavItem[] = [
  { label: "Dashboard", href: "#", icon: LayoutDashboardIcon, active: true },
  { label: "Patients", href: "#", icon: UsersIcon },
  { label: "Uploads", href: "#", icon: UploadIcon },
  { label: "Messages", href: "#", icon: MessageSquareIcon },
];

export const menuExpandableItems: MenuNavItem[] = [
  { label: "Dashboard", href: "#dashboard", icon: LayoutDashboardIcon },
  {
    label: "Patients",
    icon: UsersIcon,
    children: [
      { label: "All patients", href: "#all-patients" },
      { label: "New referral", href: "#new-referral" },
    ],
  },
  {
    label: "Orders",
    icon: BriefcaseMedicalIcon,
    children: [
      { label: "My orders", href: "#orders" },
      { label: "Active", href: "#orders-active" },
      { label: "Eliminated", href: "#orders-eliminated" },
    ],
  },
  { label: "Messages", href: "#messages", icon: MessageSquareIcon },
];

export const menuExpandableActiveItems: MenuNavItem[] = [
  menuExpandableItems[0]!,
  {
    label: "Patients",
    icon: UsersIcon,
    children: [
      { label: "All patients", href: "#all-patients", active: true },
      { label: "New referral", href: "#new-referral" },
    ],
  },
  menuExpandableItems[2]!,
  menuExpandableItems[3]!,
];
