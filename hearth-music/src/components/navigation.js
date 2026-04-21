"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiDisc, FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "@/data/site";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="top-nav-wrap">
      <nav className="top-nav container" aria-label="Main navigation">
        <div className="nav-pill desktop-pill">
          <Link href="/" className="brand" aria-label="Hearth home page">
            <span className="brand-mark">
              <FiDisc />
            </span>
            <span>Hearth</span>
          </Link>

          <div className="link-row desktop-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? "is-active" : ""}`.trim()}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <Link href="/support" className="button button-primary nav-cta desktop-cta">
            Invite Bot
          </Link>
        </div>

        <Link href="/" className="brand mobile-brand" aria-label="Hearth home page">
          <span className="brand-mark">
            <FiDisc />
          </span>
          <span>Hearth</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

      </nav>

      <div className={`mobile-menu container ${isOpen ? "is-open" : ""}`.trim()}>
        <div className="mobile-menu-inner glass-card">
          <div className="mobile-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mobile-link ${isActive ? "is-active" : ""}`.trim()}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <Link href="/support" className="button button-primary nav-cta mobile-cta">
            Invite Bot
          </Link>
        </div>
      </div>
    </header>
  );
}
