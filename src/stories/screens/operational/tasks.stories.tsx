"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  BellIcon,
  BriefcaseMedicalIcon,
  CalendarIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  PencilIcon,
  PlusIcon,
  RefreshCwIcon,
  RotateCcwIcon,
  SearchIcon,
  StethoscopeIcon,
  UploadIcon,
  UsersIcon,
} from "lucide-react";
import { useState } from "react";

import { AppHeader } from "@/components/app-header";
import { AppShell } from "@/components/app-shell";
import { AppSidebar, type AppSidebarNavItem } from "@/components/app-sidebar";
import { Button } from "@/components/button";
import { Checkbox, CheckboxField } from "@/components/checkbox";
import { Chip } from "@/components/chip";
import {
  DataTable,
  DataTableBody,
  DataTableCell,
  DataTableFilterCell,
  DataTableFilterRow,
  DataTableHead,
  DataTableHeader,
  DataTableLinkCell,
  DataTableMenuHead,
  DataTableRow,
} from "@/components/data-table";
import { GlobalSearchBar } from "@/components/global-search-bar";
import { Input, InputField } from "@/components/input";
import {
  Select,
  SelectContent,
  SelectField,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";
import { UserProfileBlock } from "@/components/user-profile-block";
import { getGlobalSearchItems } from "@/data/scan-requests";

import { screenParameters } from "../../../../.storybook/story-meta";

const sidebarItems: AppSidebarNavItem[] = [
  { label: "Dashboard", href: "#", icon: LayoutDashboardIcon },
  { label: "Patients", href: "#", icon: UsersIcon, active: true },
  { label: "Uploads", href: "#", icon: UploadIcon },
  { label: "Notifications", href: "#", icon: BellIcon },
  { label: "Calendar", href: "#", icon: CalendarIcon },
  { label: "Documents", href: "#", icon: FileTextIcon },
  { label: "Clinical", href: "#", icon: StethoscopeIcon },
  { label: "Orders", href: "#", icon: BriefcaseMedicalIcon },
  { label: "Sign out", href: "#", icon: LogOutIcon },
];

const searchItems = getGlobalSearchItems();

const preferenceOptions = [
  { value: "none", label: "-No Preference-" },
  { value: "morning", label: "Morning" },
  { value: "afternoon", label: "Afternoon" },
];

const taskTypeOptions = [
  { value: "additional-availability", label: "Additional availability" },
  { value: "phone-referral", label: "Phone referral" },
  { value: "patient-ping", label: "Patient Ping Consult" },
];

const assigneeOptions = [
  { value: "unassigned-everyone", label: "Unassigned, *Everyone" },
  { value: "jose-nevado", label: "Jose Nevado" },
];

const statusOptions = [
  { value: "open", label: "Open" },
  { value: "on-hold", label: "On-hold" },
];

const clientOptions = [
  { value: "api-test-i", label: "API Test I" },
];

const tasks = [
  {
    tid: "2041",
    taskType: "Phone referral",
    assignee: "Jose Nevado",
    status: "Open",
    dueDate: "08/14/2026 09:00",
    stage: "Completed",
    client: "API Test I",
    created: "08/10/2026 14:22",
    srid: "156990 (Completed)",
    priority: "1",
    tag: "Urgent",
    patient: "Angella Portilla",
  },
  {
    tid: "2042",
    taskType: "Patient Ping Consult",
    assignee: "Jose Nevado",
    status: "Open",
    dueDate: "08/15/2026 11:30",
    stage: "Qualified",
    client: "API Test I",
    created: "08/11/2026 08:15",
    srid: "156991 (Qualified)",
    priority: "2",
    tag: "Urgent",
    patient: "Elena Morales",
  },
] as const;

function FilterInput({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
}) {
  return (
    <Input size="sm" aria-label={`Filter ${label}`} placeholder={placeholder} />
  );
}

function FilterSelect({
  id,
  label,
  options,
  defaultValue,
}: {
  id: string;
  label: string;
  options: readonly { value: string; label: string }[];
  defaultValue?: string;
}) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger id={id} size="sm" aria-label={`Filter ${label}`}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function TaskRowActions() {
  return (
    <div className="flex items-center gap-[var(--space-inline-xs)]">
      <Tooltip>
        <TooltipTrigger
          render={
            <Button type="button" size="icon-sm" aria-label="Edit task">
              <PencilIcon />
            </Button>
          }
        />
        <TooltipContent>Edit</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button type="button" size="icon-sm" aria-label="View task">
              <FileTextIcon />
            </Button>
          }
        />
        <TooltipContent>View</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button type="button" size="icon-sm" aria-label="Return task">
              <RotateCcwIcon />
            </Button>
          }
        />
        <TooltipContent>Return</TooltipContent>
      </Tooltip>
    </div>
  );
}

function TasksWorklist({
  rows,
}: {
  rows: readonly (typeof tasks)[number][];
}) {
  return (
    <DataTable variant="operational">
      <DataTableHeader>
        <DataTableRow>
          <DataTableHead columnId="expand" resizable={false} defaultWidth={4}>
            {" "}
          </DataTableHead>
          <DataTableHead columnId="select" resizable={false} defaultWidth={4}>
            <Checkbox aria-label="Select all tasks" size="sm" />
          </DataTableHead>
          <DataTableMenuHead columnId="tid">TID</DataTableMenuHead>
          <DataTableMenuHead columnId="task-type">Task Type</DataTableMenuHead>
          <DataTableMenuHead columnId="assignee">Assignee</DataTableMenuHead>
          <DataTableMenuHead columnId="status">Task Status</DataTableMenuHead>
          <DataTableMenuHead columnId="due-date">Due Date</DataTableMenuHead>
          <DataTableMenuHead columnId="stage">Stage</DataTableMenuHead>
          <DataTableMenuHead columnId="client">Client</DataTableMenuHead>
          <DataTableMenuHead columnId="created">Created Date</DataTableMenuHead>
          <DataTableMenuHead columnId="srid">SRIDs</DataTableMenuHead>
          <DataTableMenuHead columnId="priority">Priority</DataTableMenuHead>
          <DataTableMenuHead columnId="tags">Tag(s)</DataTableMenuHead>
          <DataTableMenuHead columnId="patient">Patient</DataTableMenuHead>
          <DataTableHead columnId="actions" resizable={false}>
            Actions
          </DataTableHead>
        </DataTableRow>
        <DataTableFilterRow>
          <DataTableFilterCell columnId="expand" />
          <DataTableFilterCell columnId="select" />
          <DataTableFilterCell columnId="tid">
            <FilterInput label="TID" />
          </DataTableFilterCell>
          <DataTableFilterCell columnId="task-type">
            <FilterSelect
              id="filter-task-type"
              label="Task Type"
              options={taskTypeOptions}
              defaultValue="additional-availability"
            />
          </DataTableFilterCell>
          <DataTableFilterCell columnId="assignee">
            <FilterSelect
              id="filter-assignee"
              label="Assignee"
              options={assigneeOptions}
              defaultValue="unassigned-everyone"
            />
          </DataTableFilterCell>
          <DataTableFilterCell columnId="status">
            <FilterSelect
              id="filter-status"
              label="Task Status"
              options={statusOptions}
              defaultValue="open"
            />
          </DataTableFilterCell>
          <DataTableFilterCell columnId="due-date">
            <FilterInput label="Due Date" placeholder="__/__/____" />
          </DataTableFilterCell>
          <DataTableFilterCell columnId="stage">
            <FilterInput label="Stage" />
          </DataTableFilterCell>
          <DataTableFilterCell columnId="client">
            <FilterSelect
              id="filter-client"
              label="Client"
              options={clientOptions}
            />
          </DataTableFilterCell>
          <DataTableFilterCell columnId="created">
            <FilterInput label="Created Date" placeholder="__/__/____" />
          </DataTableFilterCell>
          <DataTableFilterCell columnId="srid">
            <FilterInput label="SRIDs" />
          </DataTableFilterCell>
          <DataTableFilterCell columnId="priority">
            <FilterInput label="Priority" />
          </DataTableFilterCell>
          <DataTableFilterCell columnId="tags">
            <FilterInput label="Tag(s)" />
          </DataTableFilterCell>
          <DataTableFilterCell columnId="patient">
            <FilterInput label="Patient" />
          </DataTableFilterCell>
          <DataTableFilterCell columnId="actions" />
        </DataTableFilterRow>
      </DataTableHeader>
      <DataTableBody>
        {rows.map((row) => (
          <DataTableRow key={row.tid}>
            <DataTableCell columnId="expand">
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                aria-label={`Expand ${row.tid}`}
                aria-expanded={false}
              >
                <PlusIcon />
              </Button>
            </DataTableCell>
            <DataTableCell columnId="select">
              <Checkbox aria-label={`Select ${row.tid}`} size="sm" />
            </DataTableCell>
            <DataTableCell columnId="tid">{row.tid}</DataTableCell>
            <DataTableCell columnId="task-type">{row.taskType}</DataTableCell>
            <DataTableCell columnId="assignee">{row.assignee}</DataTableCell>
            <DataTableCell columnId="status">{row.status}</DataTableCell>
            <DataTableCell columnId="due-date">{row.dueDate}</DataTableCell>
            <DataTableCell columnId="stage">{row.stage}</DataTableCell>
            <DataTableCell columnId="client">{row.client}</DataTableCell>
            <DataTableCell columnId="created">{row.created}</DataTableCell>
            <DataTableLinkCell columnId="srid" href="#">
              {row.srid}
            </DataTableLinkCell>
            <DataTableCell columnId="priority">{row.priority}</DataTableCell>
            <DataTableCell columnId="tags">
              <Chip>{row.tag}</Chip>
            </DataTableCell>
            <DataTableLinkCell columnId="patient" href="#">
              {row.patient}
            </DataTableLinkCell>
            <DataTableCell columnId="actions">
              <TaskRowActions />
            </DataTableCell>
          </DataTableRow>
        ))}
      </DataTableBody>
    </DataTable>
  );
}

function TasksPagination({ count }: { count: number }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-[var(--space-stack-sm)]">
      <div className="flex flex-wrap items-center gap-[var(--space-inline-xs)]">
        <Button type="button" variant="ghost" size="icon-sm" aria-label="First page" disabled>
          <ChevronsLeftIcon />
        </Button>
        <Button type="button" variant="ghost" size="icon-sm" aria-label="Previous page" disabled>
          <ChevronLeftIcon />
        </Button>
        <Input
          size="sm"
          aria-label="Current page"
          defaultValue="1"
          className="w-[var(--spacing-48)]"
          fullWidth={false}
        />
        <span className="text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]">
          / 1
        </span>
        <Button type="button" variant="ghost" size="icon-sm" aria-label="Next page" disabled>
          <ChevronRightIcon />
        </Button>
        <Button type="button" variant="ghost" size="icon-sm" aria-label="Last page" disabled>
          <ChevronsRightIcon />
        </Button>
        <Select defaultValue="25">
          <SelectTrigger
            id="tasks-page-size"
            size="sm"
            fullWidth={false}
            aria-label="Items per page"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="25">25</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]">
          items per page
        </span>
      </div>
      <span className="text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]">
        {count === 0 ? "0 items" : `1 - ${count} of ${count} items`}
      </span>
    </div>
  );
}

function OperationalTasks() {
  const [tab, setTab] = useState("my-tasks");
  const rows: readonly (typeof tasks)[number][] =
    tab === "unassigned" ? [] : tasks;

  return (
    <AppShell
      sidebar={<AppSidebar items={sidebarItems} logoHref="/" />}
      header={
        <AppHeader
          title="Tasks"
          search={<GlobalSearchBar items={searchItems} />}
          actions={
            <UserProfileBlock
              name="Jose Nevado"
              subtitle="Care Points: 0"
              onSettingsClick={() => undefined}
            />
          }
        />
      }
    >
      <div className="flex flex-col gap-[var(--space-stack-md)]">
        <div className="flex flex-wrap items-end gap-[var(--space-inline-sm)]">
          <SelectField
            id="current-preference"
            label="Current preference:"
            options={preferenceOptions}
            defaultValue="none"
            size="sm"
            fullWidth={false}
          />
          <Button type="button" variant="outline" size="sm">
            Save preferences
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-[var(--space-stack-sm)]">
          <Tabs value={tab} onValueChange={setTab}>
            <TabsList>
              <TabsTrigger value="my-tasks">My tasks</TabsTrigger>
              <TabsTrigger value="unassigned">Unassigned tasks</TabsTrigger>
              <TabsTrigger value="all-tasks">All tasks</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex flex-wrap items-center gap-[var(--space-inline-sm)]">
            <Button type="button" variant="outline" size="sm">
              <RefreshCwIcon />
              Refresh
            </Button>
            <Button type="button" size="sm">
              <PlusIcon />
              Request tasks
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-[var(--space-stack-sm)]">
          <div className="flex flex-wrap items-center gap-[var(--space-inline-md)]">
            <CheckboxField id="filter-open" label="Open" defaultChecked />
            <CheckboxField id="filter-on-hold" label="On-hold" />
          </div>
          <InputField
            id="tasks-search"
            label="Search"
            size="sm"
            endIcon={<SearchIcon aria-hidden className="size-4" />}
            groupClassName="w-[16rem]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-[var(--space-inline-sm)] rounded-[var(--radius-md)] bg-[var(--color-info-background)] px-[var(--space-inline-md)] py-[var(--space-stack-sm)]">
          <span className="text-[length:var(--text-label-size)] text-[var(--color-text-muted)]">
            Bulk actions:
          </span>
          <Button type="button" variant="secondary" size="sm">
            Close
          </Button>
          <Button type="button" variant="secondary" size="sm">
            Reassign
          </Button>
          <Button type="button" variant="secondary" size="sm">
            Update Due Date
          </Button>
        </div>

        <div className="flex flex-col gap-[var(--space-stack-sm)]">
          <TasksWorklist rows={rows} />
          <TasksPagination count={rows.length} />
        </div>
      </div>
    </AppShell>
  );
}

const meta = {
  title: "Screens/Operational/Tasks",
  tags: ["autodocs"],
  parameters: {
    ...screenParameters,
    docs: {
      ...screenParameters.docs,
      description: {
        component:
          "MPF operational tasks view reconstructed from the production screenshot using existing Nuclear assets. DataTableFilterRow is the only DataTable slot added. Selection, expand, row actions, bulk actions, and pagination are composed — they are not new components.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tasks: Story = {
  render: () => <OperationalTasks />,
};
