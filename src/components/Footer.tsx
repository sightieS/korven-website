import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

import { CONTACT_EMAIL, RELEASES_URL } from "../data/apps";
import { useIsWindows } from "../hooks/usePlatform";

const columns = [
  {
    title: "Products",
    links: [
      { label: "Zapture", to: "/apps/zapture" },
      { label: "Textura", to: "/apps/textura" },
      { label: "All apps", to: "/apps" },
      // Downloads are offered on Windows only.
      { label: "Releases", href: RELEASES_URL, windowsOnly: true },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help centre", to: "/support" },
      { label: "FAQ", to: "/support#faq" },
      { label: "Contact us", to: "/support#contact" },
      { label: "Report a bug", to: "/support#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Korven", to: "/about" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "EULA", to: "/eula" },
    ],
  },
];

export default function Footer() {
  const windows = useIsWindows();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand" aria-label="Korven home">
              <img src="/korven-icon.webp" alt="" width={28} height={28} />
              <span>korven</span>
            </Link>
            <p>Independent software for Windows, designed with care and built to be fast, private and genuinely useful.</p>
            <a className="footer-email" href={`mailto:${CONTACT_EMAIL}`}>
              <Mail size={15} />
              {CONTACT_EMAIL}
            </a>
          </div>

          {columns.map((col) => (
            <div className="footer-col" key={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.links.filter((l) => windows || !("windowsOnly" in l && l.windowsOnly)).map((l) => (
                  <li key={l.label}>
                    {"href" in l && l.href ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                      </a>
                    ) : (
                      <Link to={l.to!}>{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Korven. All rights reserved.</span>
          <span>Made independently in the United Kingdom.</span>
        </div>
      </div>
    </footer>
  );
}
