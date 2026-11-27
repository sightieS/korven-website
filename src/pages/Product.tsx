import { lazy, Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock3, LifeBuoy, Mail, Monitor } from "lucide-react";

import SEO from "../components/SEO";
import AppIcon from "../components/AppIcon";
import Reveal from "../components/Reveal";
import NotFound from "./NotFound";
import { CONTACT_EMAIL, findApp, statusClass, type AppInfo } from "../data/apps";
import "./Product.css";

const ZapturePage = lazy(() => import("./Zapture"));

export default function Product() {
  const { slug } = useParams<{ slug: string }>();
  const app = findApp(slug);
  if (!app) return <NotFound />;
  if (app.slug === "zapture") {
    return (
      <Suspense fallback={<div className="page-loader" aria-hidden="true" />}>
        <ZapturePage app={app} />
      </Suspense>
    );
  }

  return (
    <>
      <SEO title={app.seoTitle} description={app.seoDescription} path={`/apps/${app.slug}`} />

      <section className="product-hero">
        <div className="grid-bg" />
        <div className="glow product-glow" />
        <div className="container product-hero-grid">
          <Reveal className="product-hero-copy">
            <Link to="/apps" className="back-link">
              <ArrowLeft size={15} />
              All apps
            </Link>
            <div className="product-identity">
              <AppIcon app={app} size={72} />
              <div>
                <h1 className="product-name">{app.name}</h1>
                <span className={`badge ${statusClass(app.status)}`}>
                  <span className="badge-dot" />
                  {app.status}
                </span>
              </div>
            </div>
            <p className="product-tagline">{app.tagline}</p>
            <p className="lead">{app.description}</p>
            <div className="product-actions">
              <ComingSoonButton />
            </div>
            <p className="small product-platform">
              <Monitor size={14} />
              Windows 10 and 11
            </p>
          </Reveal>

          <Reveal delay={0.1} className="product-hero-media">
            <Placeholder app={app} />
          </Reveal>
        </div>
      </section>

      <section className="section section-divider" id="features">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What we’re building</span>
            <h2 className="h2">Planned for the first release.</h2>
          </Reveal>
          <div className="feature-grid">
            {app.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.06}>
                <div className="card feature">
                  <span className="icon-tile">
                    <f.icon size={20} />
                  </span>
                  <h3 className="h3">{f.title}</h3>
                  <p className="body">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-divider" id="download">
        <div className="container">
          <ComingSoonPanel app={app} />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="product-help">
            <LifeBuoy size={18} />
            <span>
              Questions about {app.name}? Visit the <Link to="/support#faq">help centre</Link> or{" "}
              <Link to="/support#contact">contact us</Link>.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

function ComingSoonButton() {
  return (
    <button className="btn btn-secondary btn-lg" type="button" disabled>
      <Clock3 size={17} />
      Not available yet
    </button>
  );
}

function Placeholder({ app }: { app: AppInfo }) {
  return (
    <div className="card product-placeholder">
      <AppIcon app={app} size={120} />
      <p className="h3">{app.name} is in design</p>
      <p className="small">Screenshots will appear here closer to release.</p>
    </div>
  );
}

function ComingSoonPanel({ app }: { app: AppInfo }) {
  const subject = encodeURIComponent(`Tell me when ${app.name} is out`);
  return (
    <Reveal className="card coming-panel">
      <span className="icon-tile">
        <Clock3 size={20} />
      </span>
      <div>
        <h2 className="h3">Coming when it’s ready.</h2>
        <p className="body">
          We’re taking the time to build {app.name} properly. No release date has been announced yet.
        </p>
      </div>
      <a className="btn btn-secondary" href={`mailto:${CONTACT_EMAIL}?subject=${subject}`}>
        <Mail size={16} />
        Ask to be told
      </a>
    </Reveal>
  );
}
