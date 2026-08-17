import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { MailIcon, PhoneIcon } from "lucide-react";

import { MedmoLogoLockup } from "@/components/brand";
import { cn } from "@/lib/utils";

import {
  appFooterCopyrightClassName,
  appFooterLinkClassName,
  appFooterLinksClassName,
  appFooterVariants,
  patientsFooterBrandClassName,
  patientsFooterBrandLinkClassName,
  patientsFooterContactListClassName,
  patientsFooterDividerClassName,
  patientsFooterLinkClassName,
  patientsFooterMetaClassName,
  patientsFooterNavigationClassName,
  patientsFooterSectionClassName,
  patientsFooterSectionTitleClassName,
} from "./app-footer.styles";
import type {
  AppFooterLink,
  AppFooterProps,
} from "./app-footer.types";

const MEDMO_WEBSITE_URL = "https://medmo.com/";

const defaultLinks: AppFooterLink[] = [
  {
    label: "Privacy Policy",
    href: "https://medmo.com/privacy",
    external: true,
  },
  {
    label: "Contact Us",
    href: "https://medmo.com/contact",
    external: true,
  },
];

type PatientsFooterNavigationLink = AppFooterLink & {
  icon?: LucideIcon;
};

const patientsFooterGroups: {
  title: string;
  links: PatientsFooterNavigationLink[];
}[] = [
  {
    title: "About Medmo",
    links: [
      { label: "Medmo website", href: MEDMO_WEBSITE_URL, external: true },
      {
        label: "Security and Privacy",
        href: "https://medmo.com/privacy",
        external: true,
      },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { label: "(833) 446-3366", href: "tel:+18334463366", icon: PhoneIcon },
      {
        label: "support@medmo.com",
        href: "mailto:support@medmo.com",
        icon: MailIcon,
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Resources",
        href: "https://medmo.com/resources",
        external: true,
      },
      {
        label: "For Physicians",
        href: "https://medmo.com/for-physicians",
        external: true,
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "Patient Support",
        href: "https://medmo.com/for-patients",
        external: true,
      },
      {
        label: "Contact form",
        href: "https://medmo.com/contact",
        external: true,
      },
    ],
  },
];

function FooterLink({
  link,
  inverse = false,
}: {
  link: PatientsFooterNavigationLink;
  inverse?: boolean;
}) {
  const className = inverse
    ? patientsFooterLinkClassName
    : appFooterLinkClassName;
  const Icon = link.icon;
  const content = (
    <>
      {Icon ? <Icon aria-hidden className="size-4 shrink-0" /> : null}
      <span>{link.label}</span>
      {link.external ? <span className="sr-only"> (opens in new tab)</span> : null}
    </>
  );

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  );
}

function PatientsAppFooter({
  device = "desktop",
  logoHref = MEDMO_WEBSITE_URL,
  className,
}: Pick<AppFooterProps, "device" | "logoHref" | "className">) {
  const year = new Date().getFullYear();

  return (
    <footer
      data-slot="app-footer"
      data-variant="patients"
      data-device={device}
      className={cn(appFooterVariants({ variant: "patients", device }), className)}
    >
      <div className={patientsFooterBrandClassName}>
        <a
          href={logoHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Medmo website (opens in new tab)"
          className={patientsFooterBrandLinkClassName}
        >
          <MedmoLogoLockup size="lg" variant="inverse" />
        </a>
        <div className={patientsFooterMetaClassName}>
          <p>© {year} Medmo, Inc.</p>
          <p>All Rights Reserved</p>
          <p>New York, NY, USA</p>
        </div>
      </div>

      <nav
        aria-label="Footer navigation"
        className={patientsFooterNavigationClassName({ device })}
      >
        {patientsFooterGroups.map((group) => (
          <section key={group.title} className={patientsFooterSectionClassName}>
            <h2 className={patientsFooterSectionTitleClassName}>{group.title}</h2>
            <hr aria-hidden className={patientsFooterDividerClassName} />
            <ul className={patientsFooterContactListClassName}>
              {group.links.map((link) => (
                <li key={`${group.title}-${link.label}`}>
                  <FooterLink link={link} inverse />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </nav>
    </footer>
  );
}

function DefaultAppFooter({
  device = "desktop",
  links = defaultLinks,
  copyright = `© ${new Date().getFullYear()} Medmo`,
  className,
}: Omit<AppFooterProps, "variant">) {
  return (
    <footer
      data-slot="app-footer"
      data-variant="default"
      data-device={device}
      className={cn(appFooterVariants({ variant: "default", device }), className)}
    >
      <nav aria-label="Legal" className={appFooterLinksClassName({ device })}>
        {links.map((link) => (
          <FooterLink key={`${link.label}-${link.href}`} link={link} />
        ))}
      </nav>
      <p className={appFooterCopyrightClassName}>{copyright}</p>
    </footer>
  );
}

function AppFooter({
  variant = "default",
  device = "desktop",
  links = defaultLinks,
  copyright,
  logoHref,
  className,
}: AppFooterProps) {
  if (variant === "patients") {
    return (
      <PatientsAppFooter
        device={device}
        logoHref={logoHref}
        className={className}
      />
    );
  }

  return (
    <DefaultAppFooter
      device={device}
      links={links}
      copyright={copyright}
      className={className}
    />
  );
}

export { AppFooter };
export { MEDMO_WEBSITE_URL };
