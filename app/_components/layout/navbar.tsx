"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/app/_components/layout/container";
import { siteConfig, type NavigationLink } from "@/config/site";
import { mergeClassNames } from "@/lib/styles/mergeClassNames";

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

interface NavLinkProps {
  link: NavigationLink;
  pathname: string;
  onNavigate?: () => void;
}

function NavLink({ link, pathname, onNavigate }: NavLinkProps) {
  const isActive = isActivePath(pathname, link.href);

  return (
    <Link
      href={link.href}
      className={mergeClassNames(
        "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 hover:bg-white/10",
        isActive
          ? "bg-primary-container text-on-primary-container"
          : "text-on-primary",
      )}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
    >
      {link.label}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="bg-primary">
      <Container>
        <div className="flex flex-col gap-2 py-3 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col p-2">
            <Link href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
              {siteConfig.logo.src ? (
                <Image
                  src={siteConfig.logo.src}
                  alt={siteConfig.logo.alt}
                  width={siteConfig.logo.width}
                  height={siteConfig.logo.height}
                  priority
                />
              ) : (
                <div
                  className="h-20 w-20 rounded-md bg-primary-container/40"
                  aria-hidden="true"
                />
              )}
              <span className="font-heading text-lg font-semibold text-on-primary">
                {siteConfig.shortName}
              </span>
            </Link>
          </div>

          <div className="flex flex-col p-2 md:min-w-96">
            <blockquote className="mb-2 border-l-2 border-primary-container px-3 py-1 text-sm italic text-on-primary/90">
              <p>{siteConfig.verse.text}</p>
              <cite className="mt-1 block text-xs not-italic text-on-primary/70">
                — {siteConfig.verse.reference}
              </cite>
            </blockquote>

            <div className="flex justify-end p-2 md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((previous) => !previous)}
                className="rounded-md border border-on-primary px-3 py-2 text-sm font-medium text-on-primary transition-colors duration-150 hover:bg-white/10"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-menu"
              >
                Menu
              </button>
            </div>

            <nav
              aria-label="Main navigation"
              className="hidden flex-row justify-end gap-1 p-2 md:flex"
            >
              {siteConfig.navigation.map((link) => (
                <NavLink key={link.href} link={link} pathname={pathname} />
              ))}
            </nav>

            {isMobileMenuOpen && (
              <nav
                id="mobile-navigation-menu"
                aria-label="Main navigation"
                className="flex flex-col gap-1 p-2 md:hidden"
              >
                {siteConfig.navigation.map((link) => (
                  <NavLink
                    key={link.href}
                    link={link}
                    pathname={pathname}
                    onNavigate={closeMobileMenu}
                  />
                ))}
              </nav>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
