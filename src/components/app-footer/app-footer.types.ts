export type AppFooterLink = {
  label: string;
  href: string;
};

export type AppFooterDevice = "mobile" | "tablet" | "desktop";

export type AppFooterVariant = "default" | "patients";

export type AppFooterProps = {
  variant?: AppFooterVariant;
  device?: AppFooterDevice;
  links?: AppFooterLink[];
  copyright?: string;
  className?: string;
};
