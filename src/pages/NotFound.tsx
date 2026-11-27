import { Link } from "react-router-dom";
import { ArrowLeft, LifeBuoy } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "78vh", display: "grid", alignItems: "center" }}>
      <Helmet>
        <title>Page not found · Korven</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="grid-bg" />
      <div className="glow" />
      <div className="container">
        <div className="page-hero-inner center">
          <span className="eyebrow">Error 404</span>
          <h1 className="h1">This page doesn’t exist.</h1>
          <p className="lead">It may have moved, or the link might be mistyped.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 36, flexWrap: "wrap" }}>
            <Link to="/" className="btn btn-primary btn-lg">
              <ArrowLeft size={17} />
              Back to home
            </Link>
            <Link to="/support" className="btn btn-secondary btn-lg">
              <LifeBuoy size={17} />
              Help centre
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
