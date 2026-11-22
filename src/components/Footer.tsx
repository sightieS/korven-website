
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link
            to="/"
            className="footer-logo"
            aria-label="Korven home"
          >
            <img src="/korven-icon.webp" alt="" />
            <span>korven</span>
          </Link>

          <p>
            Thoughtfully crafted software.
            <br />
            Built to make a difference.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/apps">Our apps</Link>
          <Link to="/about">About Korven</Link>
        </div>

        <div className="footer-column">
          <h3>Help</h3>
          <Link to="/support">Support centre</Link>
          <a href="mailto:contact.sightie@gmail.com">
            Contact support
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/eula">End User Licence Agreement</Link>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <span>Independent software</span>
          <span>Made with purpose</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Korven. All rights reserved.
        </span>

        <span className="footer-status">
          <span
            className="footer-status-dot"
            aria-hidden="true"
          />
          Designed for Windows
        </span>
      </div>
    </footer>
  );
}
