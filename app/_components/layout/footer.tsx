import Link from "next/link";
import { Container } from "@/app/_components/layout/container";
import { siteConfig } from "@/config/site";
import { formatAddress } from "@/lib/stringUtils";

const footerLinkClassName =
  "text-sm text-inverse-on-surface/80 transition-colors hover:text-inverse-primary";

const footerHeadingClassName =
  "font-heading text-sm font-semibold tracking-wide uppercase";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <Container className="py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <section aria-labelledby="footer-about">
            <h2 id="footer-about" className={footerHeadingClassName}>
              {siteConfig.shortName}
            </h2>
            <p className="mt-3 text-sm text-inverse-on-surface/80">
              {siteConfig.footer.tagline}
            </p>
          </section>

          <section aria-labelledby="footer-navigation">
            <h2 id="footer-navigation" className={footerHeadingClassName}>
              Navigation
            </h2>
            <ul className="mt-3 space-y-2">
              {siteConfig.navigation.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={footerLinkClassName}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-visit">
            <h2 id="footer-visit" className={footerHeadingClassName}>
              Visit Us
            </h2>
            <address className="mt-3 space-y-3 text-sm not-italic text-inverse-on-surface/80">
              <p>{formatAddress(siteConfig.address)}</p>
              <ul className="space-y-1">
                {siteConfig.serviceTimes.map(({ day, time, label }) => (
                  <li key={`${day}-${time}`}>
                    <span className="font-medium text-inverse-on-surface">
                      {day}
                    </span>
                    {" — "}
                    {time} ({label})
                  </li>
                ))}
              </ul>
              {siteConfig.contact.email && (
                <p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className={footerLinkClassName}
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
              )}
            </address>
          </section>
        </div>

        <p className="mt-8 border-t border-inverse-on-surface/20 pt-6 text-center text-sm text-inverse-on-surface/60">
          © {currentYear} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
