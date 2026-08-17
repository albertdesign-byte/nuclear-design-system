export type AppFooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type AppFooterDevice = "mobile" | "tablet" | "desktop";

export type AppFooterVariant = "default" | "patients";

export type AppFooterProps = {
  variant?: AppFooterVariant;
  device?: AppFooterDevice;
  links?: AppFooterLink[];
  copyright?: string;
  logoHref?: string;
  className?: string;
};
