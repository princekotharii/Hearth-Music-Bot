import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import { navLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-brand">
          <FiHeart /> Built with rhythm by Hearth
        </p>
        <div className="footer-links" aria-label="Footer links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="footer-link">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
