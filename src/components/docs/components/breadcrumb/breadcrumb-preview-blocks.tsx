import { Breadcrumb } from "@/components/breadcrumb";

const defaultItems = [
  { label: "Home", href: "/" },
  { label: "Patients", href: "/patients" },
  { label: "Elena Morales" },
];

const multipleItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Components", href: "/components" },
  { label: "Button" },
];

const longItems = [
  { label: "Home", href: "/" },
  { label: "Patients", href: "/patients" },
  { label: "Records", href: "/patients/records" },
  { label: "Imaging", href: "/patients/records/imaging" },
  { label: "Mammogram", href: "/patients/records/imaging/mammogram" },
  { label: "Results report SRID-1001" },
];

const disabledItems = [
  { label: "Home", href: "/" },
  { label: "Patients", href: "/patients", disabled: true },
  { label: "Elena Morales" },
];

export function BreadcrumbDefaultPreview() {
  return <Breadcrumb items={defaultItems} />;
}

export function BreadcrumbHomeIconPreview() {
  return <Breadcrumb items={defaultItems} showHomeIcon />;
}

export function BreadcrumbMultiplePreview() {
  return <Breadcrumb items={multipleItems} />;
}

export function BreadcrumbLongPreview() {
  return (
    <div className="w-full max-w-sm">
      <Breadcrumb items={longItems} />
    </div>
  );
}

export function BreadcrumbDisabledPreview() {
  return <Breadcrumb items={disabledItems} />;
}
