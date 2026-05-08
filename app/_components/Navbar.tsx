"use client";

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
    const renderNavigationLink = ({ href, label }: LinkPayload) => {
        const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className="relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150"
                style={{
                  fontFamily: "var(--font-body)",
                  color: isActive ? "var(--color-primary-95)" : "var(--color-primary-80)",
                  background: isActive ? "rgba(255,255,255,0.12)" : "transparent",
                }}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
                {isActive && (
                  <span
                    className="absolute bottom-0.5 left-3 right-3 h-px rounded-full"
                    style={{ background: "var(--color-primary-80)" }}
                  />
                )}
              </Link>
            )
    }

    return (
        <nav className="bg-primary">
            <div className="flex flex-row justify-center">
                {/* Logo section */}
                <div className="flex flex-col p-2 align-middle">
                    <div className="h-20 bg-gray-500"/>
                    <h1 className="p-2 text-on-primary">GHKL Image here</h1>
                </div>
                {/* Links section */}
                <div className="flex flex-col p-2">
                    {/* Church verse placeholder */}
                    <div className="h-20 bg-gray-500"/>
                    {/* Desktop navigation */}
                    <div className="flex flex-row p-2 justify-end">
                        {NAVIGATION_LINKS.map(renderNavigationLink)}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
