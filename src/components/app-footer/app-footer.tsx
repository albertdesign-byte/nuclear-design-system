import Link from "next/link";
import { MailIcon, PhoneIcon } from "lucide-react";

import { TextLink } from "@/components/text-link";
import { cn } from "@/lib/utils";

import {
  appFooterCopyrightClassName,
  appFooterLinksClassName,
  appFooterVariants,
  patientsFooterContactItemClassName,
  patientsFooterContactListClassName,
  patientsFooterDividerClassName,
  patientsFooterLinkClassName,
  patientsFooterMetaClassName,
  patientsFooterSectionClassName,
  patientsFooterSectionTitleClassName,
  patientsFooterWordmarkClassName,
} from "./app-footer.styles";
import type { AppFooterLink, AppFooterProps } from "./app-footer.types";

const defaultLinks: AppFooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

function PatientsAppFooter({ device, className }: Pick<AppFooterProps, "device" | "className">) {
  const year = new Date().getFullYear();

  return (
    <footer
      data-slot="app-footer"
      data-variant="patients"
      data-device={device}
      className={cn(appFooterVariants({ variant: "patients", device }), className)}
    >
      <div className="flex flex-col gap-[var(--space-stack-sm)]">
        <p className={patientsFooterWordmarkClassName}>medmo</p>
        <div className={patientsFooterMetaClassName}>
          <p>{year} Medmo, Inc</p>
          <p>All Rights Reserved</p>
          <p>New York, NY, USA</p>
        </div>
      </div>

      <section className={patientsFooterSectionClassName}>
        <h2 className={patientsFooterSectionTitleClassName}>Contact Us</h2>
        <hr className={patientsFooterDividerClassName} />
        <ul className={patientsFooterContactListClassName}>
          <li>
            <Link href="tel:+18334463366" className={patientsFooterContactItemClassName}>
              <PhoneIcon aria-hidden className="size-4 shrink-0" />
              (833) 446-3366
            </Link>
          </li>
          <li>
            <Link
              href="mailto:support@medmo.com"
              className={patientsFooterContactItemClassName}
            >
              <MailIcon aria-hidden className="size-4 shrink-0" />
              support@medmo.com
            </Link>
          </li>
        </ul>
      </section>

      <section className={patientsFooterSectionClassName}>
        <h2 className={patientsFooterSectionTitleClassName}>About Medmo</h2>
        <hr className={patientsFooterDividerClassName} />
        <Link href="#" className={patientsFooterLinkClassName}>
          Security and Privacy
        </Link>
      </section>
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
          <TextLink
            key={link.label}
            href={link.href}
            className="text-[length:var(--text-caption-size)] font-normal text-[var(--color-text-muted)] hover:text-[var(--color-text-link-hover)]"
          >
            {link.label}
          </TextLink>
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
  className,
}: AppFooterProps) {
  if (variant === "patients") {
    return <PatientsAppFooter device={device} className={className} />;
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
