import Link from "next/link";
import {
  FiGithub,
  FiHeart,
  FiMessageCircle,
  FiTwitter,
} from "react-icons/fi";

const footerColumns = [
  {
    title: "Product",
    links: [
      { href: "/about", label: "About" },
      { href: "/documentation", label: "Documentation" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/documentation", label: "Setup Guide" },
      { href: "/faq", label: "Common Questions" },
      { href: "/contact", label: "Support Channel" },
      { href: "/about", label: "Our Story" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Hearth" },
      { href: "/documentation", label: "Docs" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/", label: "Privacy Policy" },
      { href: "/", label: "Terms of Service" },
      { href: "/", label: "Cookie Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-top">
          <div className="footer-brand-row">
            <span className="footer-brand-mark">
              <FiHeart />
            </span>
            <p className="footer-brand">Hearth</p>
          </div>
          <p className="footer-tagline">
            The music bot trusted by communities worldwide. Stable, responsive,
            and built for Discord servers that want a better listening vibe.
          </p>
          <div className="footer-socials" aria-label="Social links">
            <a href="https://twitter.com" aria-label="Twitter" className="social-btn" target="_blank" rel="noreferrer">
              <FiTwitter />
            </a>
            <a href="https://github.com" aria-label="GitHub" className="social-btn" target="_blank" rel="noreferrer">
              <FiGithub />
            </a>
            <a href="https://discord.com" aria-label="Discord" className="social-btn" target="_blank" rel="noreferrer">
              <FiMessageCircle />
            </a>
          </div>
        </div>

        <div className="footer-grid">
          {footerColumns.map((column) => (
            <div key={column.title} className="footer-col">
              <p className="footer-title">{column.title}</p>
              <div className="footer-links">
                {column.links.map((item) => (
                  <Link key={`${column.title}-${item.label}`} href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Hearth Music. All rights reserved.</p>
          <p className="footer-made">Made with care for music communities everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
