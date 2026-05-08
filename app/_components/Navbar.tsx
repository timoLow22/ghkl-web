"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkPayload {
    href: string;
    label: string;
} 

const NAVIGATION_LINKS: LinkPayload[] = [
    { label: "Home",       href: "/" },
    { label: "Articles",   href: "/articles" },
    { label: "Ministries", href: "/ministries" },
    { label: "About",      href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const renderNavigationLink = ({ href, label }: LinkPayload) => {
        const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className="px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 hover:bg-white/10"
                style={{
                  color: isActive
                    ? "var(--color-on-primary-container)"
                    : "var(--color-on-primary)",
                  background: isActive
                    ? "var(--color-primary-container)"
                    : "transparent",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            )
    }

    return (
        <nav className="bg-primary">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-2 py-3 md:flex-row md:items-end md:justify-between">
                    {/* Logo section */}
                    <div className="flex flex-col p-2 align-middle">
                        <div className="h-20 bg-gray-500"/>
                        <h1 className="p-2 text-on-primary">GHKL Image here</h1>
                    </div>
                    {/* Links section */}
                    <div className="flex flex-col p-2 md:min-w-[24rem]">
                        {/* Church verse placeholder */}
                        <div className="h-20 bg-gray-500"/>
                        {/* Mobile navigation toggle */}
                        <div className="flex justify-end p-2 md:hidden">
                          <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen((previousState) => !previousState)}
                            className="rounded-md border px-3 py-2 text-sm font-medium transition-colors duration-150 hover:bg-white/10"
                            style={{
                              borderColor: "var(--color-on-primary)",
                              color: "var(--color-on-primary)",
                            }}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-navigation-menu"
                          >
                            Menu
                          </button>
                        </div>
                        {/* Desktop navigation */}
                        <div className="hidden flex-row p-2 justify-end md:flex">
                            {NAVIGATION_LINKS.map(renderNavigationLink)}
                        </div>
                        {/* Mobile navigation */}
                        {isMobileMenuOpen && (
                          <div
                            id="mobile-navigation-menu"
                            className="flex flex-col gap-1 p-2 md:hidden"
                          >
                            {NAVIGATION_LINKS.map(renderNavigationLink)}
                          </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
