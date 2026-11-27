import { Link } from "react-router-dom";
import { Mail, Sparkles } from "lucide-react";

import SEO from "../components/SEO";
import AppCard from "../components/AppCard";
import Reveal from "../components/Reveal";
import { apps } from "../data/apps";

export default function Apps() {
  return (
    <>
      <SEO
        title="Apps"
        description="Explore Korven's Windows apps: Zapture for screenshots, screen recording and instant clips, and Textura, an upcoming notes app."
        path="/apps"
      />

      <section className="page-hero">
        <div className="grid-bg" />
        <div className="glow" />
        <div className="container">
          <Reveal className="page-hero-inner">
            <span className="eyebrow">The Korven collection</span>
            <h1 className="h1">
              Tools for a <span className="gradient-text">better</span> day at your desk.
            </h1>
            <p className="lead">
              Each app is designed for Windows, does one job very well, and respects your privacy.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="grid-2">
            {apps.map((app, i) => (
              <Reveal key={app.slug} delay={i * 0.08}>
                <AppCard app={app} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="card apps-next">
              <span className="icon-tile">
                <Sparkles size={19} />
              </span>
              <div>
                <h3 className="h3">More is on the way.</h3>
                <p className="body">Have an idea for an app, or a feature you’d love to see? We read every message.</p>
              </div>
              <Link to="/support#contact" className="btn btn-secondary">
                <Mail size={16} />
                Share an idea
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
