"use client";

import { useState, type ReactNode } from "react";

import { Button } from "@/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { CheckboxField } from "@/components/checkbox";
import { Input, InputField } from "@/components/input";
import { Label } from "@/components/label";
import { SelectField } from "@/components/select";
import {
  SideModal,
  SideModalBody,
  SideModalClose,
  SideModalContent,
  SideModalDescription,
  SideModalFooter,
  SideModalHeader,
  SideModalTitle,
  SideModalTrigger,
} from "@/components/side-modal";
import { Switch } from "@/components/switch";

const roleOptions = [
  { value: "agent", label: "Clinical ops agent" },
  { value: "admin", label: "Platform admin" },
  { value: "imaging", label: "Imaging center admin" },
];

const teamOptions = [
  "Patient experience team 1",
  "Patient experience team 2",
  "Patient operations",
  "SPIN Team",
  "Premier Medical Services",
];

const permissionGroups = [
  {
    heading: "Platform Admin",
    items: [
      {
        id: "cxadmin",
        label: "CXADMIN",
        description:
          "User can perform administrative functions across the platform.",
      },
      {
        id: "mfpadmin",
        label: "MFPADMIN",
        description:
          "User can manage and update MFP account-level settings.",
      },
    ],
  },
  {
    heading: "Imaging Center Admin",
    items: [
      {
        id: "icadmin",
        label: "ICADMIN",
        description:
          "User can manage Imaging Center–specific settings and users.",
      },
    ],
  },
  {
    heading: "Clinical Ops Agent",
    items: [
      {
        id: "user-edit",
        label: "USER_EDIT",
        description:
          "User can create, modify, and manage user accounts in the system.",
      },
      {
        id: "scan-override",
        label: "SCAN_OVERRIDE",
        description:
          "User can override scan-related restrictions and validations.",
      },
    ],
  },
  {
    heading: "Financial",
    items: [
      {
        id: "refund",
        label: "REFUND",
        description: "User can process refunds and financial adjustments.",
      },
    ],
  },
  {
    heading: "Reporting & Data",
    items: [
      {
        id: "report-view",
        label: "REPORT_VIEW",
        description: "User can view and access system reports and analytics.",
      },
      {
        id: "data-export",
        label: "DATA_EXPORT",
        description: "User can export data from the system.",
      },
    ],
  },
];

export function CreateNewUserForm() {
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col gap-[var(--space-form)]">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-[var(--space-form)]">
          <InputField
            id="create-user-first-name"
            label="First Name"
            placeholder="Enter first name"
            required
          />
          <InputField
            id="create-user-last-name"
            label="Last Name"
            placeholder="Enter last name"
            required
          />
          <InputField
            id="create-user-email"
            type="email"
            label="Email"
            placeholder="user@example.com"
            required
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-[var(--space-form-label)]">
          <div className="flex flex-wrap items-center justify-between gap-[var(--space-inline-sm)]">
            <Label htmlFor="create-user-password">
              Password{" "}
              <span className="text-[var(--color-error-text)]">*</span>
            </Label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setPassword("TemporaryPass123")}
            >
              Generate password
            </Button>
          </div>
          <Input
            id="create-user-password"
            type="text"
            placeholder="Enter or generate password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            required
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-[var(--space-inline-sm)]">
            <Switch id="create-user-active" defaultChecked />
            <Label htmlFor="create-user-active">Active</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Role</CardTitle>
        </CardHeader>
        <CardContent>
          <SelectField
            id="create-user-role"
            label="Select a role"
            placeholder="Select a role"
            options={roleOptions}
            required
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Teams</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-[var(--space-stack-sm)]">
          {teamOptions.map((team) => (
            <CheckboxField
              key={team}
              id={`create-user-team-${team}`}
              label={team}
            />
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Permissions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-[var(--space-form-group)]">
          {permissionGroups.map((group) => (
            <fieldset
              key={group.heading}
              className="flex flex-col gap-[var(--space-stack-sm)] border-0 p-0"
            >
              <legend className="text-[length:var(--text-label-size)] font-medium leading-[var(--text-label-line-height)] text-[var(--color-text-primary)]">
                {group.heading}
              </legend>
              {group.items.map((item) => (
                <CheckboxField
                  key={item.id}
                  id={`create-user-permission-${item.id}`}
                  label={item.label}
                  description={item.description}
                />
              ))}
            </fieldset>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function SideModalExample({
  trigger,
  title,
  description,
  children,
  defaultOpen = false,
  open,
  onOpenChange,
}: {
  trigger: string;
  title: string;
  description?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  return (
    <SideModal
      defaultOpen={open === undefined ? defaultOpen : undefined}
      open={open}
      onOpenChange={onOpenChange}
    >
      <SideModalTrigger render={<Button variant="outline" size="sm" />}>
        {trigger}
      </SideModalTrigger>
      <SideModalContent>
        <SideModalHeader>
          <SideModalTitle>{title}</SideModalTitle>
          {description ? (
            <SideModalDescription>{description}</SideModalDescription>
          ) : null}
        </SideModalHeader>
        <SideModalBody>{children}</SideModalBody>
        <SideModalFooter>
          <SideModalClose render={<Button variant="outline" />}>
            Cancel
          </SideModalClose>
          <SideModalClose render={<Button />}>Save</SideModalClose>
        </SideModalFooter>
      </SideModalContent>
    </SideModal>
  );
}

export function SideModalBasicPreview() {
  return (
    <SideModalExample
      trigger="Open side modal"
      title="Edit details"
      description="Update this record without leaving the current page."
    >
      <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
        Place any form or task content in the body. The footer stays in view.
      </p>
    </SideModalExample>
  );
}

export function SideModalLongContentPreview() {
  return (
    <SideModalExample
      trigger="Open scrolling example"
      title="Long task"
      description="The body scrolls independently of the header and footer."
    >
      <div className="flex flex-col gap-[var(--space-stack-md)]">
        {Array.from({ length: 12 }, (_, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Section {index + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
                Placeholder content used to demonstrate overflow. Header and
                footer remain visible while this column scrolls.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SideModalExample>
  );
}

export function SideModalControlledPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-start gap-[var(--space-stack-sm)]">
      <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
        Open from page state
      </Button>
      <SideModal open={open} onOpenChange={setOpen}>
        <SideModalContent>
          <SideModalHeader>
            <SideModalTitle>Controlled panel</SideModalTitle>
            <SideModalDescription>
              Opened with <code>open</code> and <code>onOpenChange</code>. No
              trigger is required.
            </SideModalDescription>
          </SideModalHeader>
          <SideModalBody>
            <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
              Close with Escape, the overlay, Cancel, or the header close
              control.
            </p>
          </SideModalBody>
          <SideModalFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save</Button>
          </SideModalFooter>
        </SideModalContent>
      </SideModal>
    </div>
  );
}

export function CreateNewUserSideModalPreview() {
  const [open, setOpen] = useState(false);

  return (
    <SideModal open={open} onOpenChange={setOpen}>
      <SideModalTrigger render={<Button variant="outline" size="sm" />}>
        Create new user
      </SideModalTrigger>
      <SideModalContent>
        <SideModalHeader>
          <SideModalTitle>Create new user</SideModalTitle>
          <SideModalDescription>
            Add a new user to the system
          </SideModalDescription>
        </SideModalHeader>
        <SideModalBody>
          <CreateNewUserForm />
        </SideModalBody>
        <SideModalFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Save</Button>
        </SideModalFooter>
      </SideModalContent>
    </SideModal>
  );
}
