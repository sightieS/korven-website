
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-glow" />

      <div className="not-found-content">
        <div className="not-found-logo">
          <img src="/korven-icon.png" alt="" />
          <span>korven</span>
        </div>

        <span className="not-found-code">404</span>

        <h1>This page doesn't exist.</h1>

        <p>
          The page you're looking for may have been moved,
          removed, or never existed in the first place.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="not-found-primary">
            <ArrowLeft size={17} />
            Back to home
          </Link>

          <Link to="/apps" className="not-found-secondary">
            Explore our apps
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <span className="not-found-footer">
          ERROR 404 — PAGE NOT FOUND
        </span>
      </div>
    </main>
  );
}
