"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiDisc } from "react-icons/fi";
import { navLinks } from "@/data/site";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="top-nav-wrap">
      <nav className="top-nav container" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="Hearth home page">
          <span className="brand-mark">
            <FiDisc />
          </span>
          <span>Hearth</span>
        </Link>

        <div className="link-row">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "is-active" : ""}`.trim()}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link href="/support" className="button button-primary nav-cta">
          Invite Bot
        </Link>
      </nav>
    </header>
  );
}
