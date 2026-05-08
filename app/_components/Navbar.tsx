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
                className="px-3 py-2 text-sm font-medium rounded-md"
                style={{
                  color: isActive
                    ? "var(--color-on-primary-container)"
                    : "var(--color-on-primary)",
                  background: isActive
                    ? "var(--color-primary-container)"
                    : "transparent",
                }}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
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
