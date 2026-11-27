import { useIsWindows } from "../hooks/usePlatform";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";

const navigation = [
  { label: "Apps", path: "/apps" },
  { label: "Zapture", path: "/apps/zapture" },
  { label: "About", path: "/about" },
  { label: "Support", path: "/support" },
];

export default function Navbar() {
  const windows = useIsWindows();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = navigation.map((item) => (
    <NavLink
      key={item.path}
      to={item.path}
      end={item.path === "/apps"}
      className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
    >
      {item.label}
    </NavLink>
  ));

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="Korven home">
          <img src="/korven-icon.webp" alt="" width={28} height={28} />
          <span>korven</span>
        </Link>

        <nav className="nav-links" aria-label="Main">
          {links}
        </nav>

        <div className="nav-actions">
          <Link to={windows ? "/apps/zapture#download" : "/apps/zapture"} className="btn btn-primary btn-sm">
            {windows && <Download size={15} />}
            {windows ? "Get Zapture" : "See Zapture"}
          </Link>
          <button
            className="nav-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="nav-mobile" aria-label="Main">
          {links}
          <Link to={windows ? "/apps/zapture#download" : "/apps/zapture"} className="btn btn-primary">
            {windows && <Download size={16} />}
            {windows ? "Get Zapture" : "See Zapture"}
          </Link>
        </nav>
      )}
    </header>
  );
}
