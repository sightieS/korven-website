import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

import "./Navbar.css";

const navigation = [
  { label: "Home", path: "/" },
  { label: "Apps", path: "/apps" },
  { label: "About", path: "/about" },
  { label: "Support", path: "/support" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar" aria-label="Main navigation">
        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="Korven home"
        >
          <img src="/korven-icon.webp" alt="" />
          <span>korven</span>
        </Link>

        <div
          id="korven-navigation"
          className={`navbar-links ${menuOpen ? "is-open" : ""}`}
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/apps"
            className="navbar-cta"
            onClick={closeMenu}
          >
            Explore apps
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          className="navbar-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="korven-navigation"
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
  );
}
