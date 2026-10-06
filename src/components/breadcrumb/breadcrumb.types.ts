export type BreadcrumbItem = {
  label: string;
  href?: string;
  current?: boolean;
  disabled?: boolean;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
  showHomeIcon?: boolean;
  className?: string;
  "aria-label"?: string;
};
