import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Feather, Gauge, Lock, MessageCircle, Sparkles } from "lucide-react";

import SEO from "../components/SEO";
import AppIcon from "../components/AppIcon";
import Reveal from "../components/Reveal";
import Spotlight from "../components/Spotlight";
import { apps, statusClass } from "../data/apps";
import "./Home.css";

const principles = [
  {
    icon: Lock,
    title: "Private by default",
    body: "No accounts and no tracking. What you make with our apps stays on your device.",
  },
  {
    icon: Gauge,
    title: "Fast and native",
    body: "Real Windows apps that open instantly, stay light and respect your PC’s resources.",
  },
  {
    icon: Feather,
    title: "Calm and clear",
    body: "Plain words, sensible defaults and no clutter. Powerful when you need it, quiet when you don’t.",
  },
  {
    icon: Sparkles,
    title: "Finished properly",
    body: "Each app is tested on real hardware and polished down to the small details before it ships.",
  },
];

/** A few words on what each app is for, shown on its card. */
const highlights: Record<string, string[]> = {
  zapture: ["Screenshots with an editor", "Screen recording with sound", "Instant replays of the last minutes"],
  textura: ["Distraction-free writing", "Find any note in moments", "Built for the keyboard"],
};

export default function Home() {
  const reduce = useReducedMotion();
  const float = (delay: number) =>
    reduce ? {} : { animate: { y: [0, -10, 0] }, transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay } };

  return (
    <>
      <SEO
        title="Korven: Thoughtfully crafted software for Windows"
        description="Korven is an independent software studio making fast, private and carefully finished apps for Windows."
        path="/"
      />

      <section className="studio-hero">
        <div className="studio-glow" aria-hidden="true" />
        <div className="grid-bg" aria-hidden="true" />
        <div className="container studio-hero-grid">
          <div className="studio-copy">
            <Reveal>
              <span className="eyebrow">Independent software studio</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="display">
                Software that
                <br />
                <span className="gradient-text">feels considered.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">
                Korven makes focused apps for Windows: fast, private and properly finished. Each one does its job well, without
                accounts, ads or clutter.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="studio-actions">
                <Link to="/apps" className="btn btn-primary btn-lg">
                  Explore our apps
                  <ArrowRight size={17} />
                </Link>
                <Link to="/about" className="btn btn-secondary btn-lg">
                  About Korven
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="studio-art" aria-hidden="true">
            <motion.div className="studio-mark" {...float(0)}>
              <img src="/korven-icon.webp" alt="" width={150} height={150} />
            </motion.div>
            <motion.div className="studio-tile t1" {...float(0.8)}>
              <img src="/zapture/zapture-icon.webp" alt="" width={64} height={64} />
              <span>
                <strong>Zapture</strong>
                <em>Available</em>
              </span>
            </motion.div>
            <motion.div className="studio-tile t2" {...float(1.6)}>
              <span className="studio-initial">T</span>
              <span>
                <strong>Textura</strong>
                <em>Coming soon</em>
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <Reveal className="section-head">
              <span className="eyebrow">Our apps</span>
              <h2 className="h2">Made to be used every day.</h2>
            </Reveal>
            <Link to="/apps" className="link">
              All apps <ArrowRight size={15} />
            </Link>
          </div>
          <div className="studio-apps">
            {apps.map((app, i) => (
              <Reveal key={app.slug} delay={i * 0.08}>
                <Link to={`/apps/${app.slug}`} className={`studio-app ${app.slug}`}>
                  <div className="studio-app-top">
                    <AppIcon app={app} size={72} />
                    <span className={`badge ${statusClass(app.status)}`}>
                      <span className="badge-dot" />
                      {app.status}
                    </span>
                  </div>
                  <h3 className="h3">{app.name}</h3>
                  <p className="body">{app.tagline}</p>
                  <ul className="studio-app-points">
                    {(highlights[app.slug] ?? []).map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <span className="studio-app-more">
                    {app.status === "Coming soon" ? "Learn what’s coming" : `Discover ${app.name}`}
                    <ArrowUpRight size={17} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-divider">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">How we build</span>
            <h2 className="h2">A few things we never compromise on.</h2>
          </Reveal>
          <div className="principles">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <Spotlight className="principle">
                  <span className="icon-tile">
                    <p.icon size={20} />
                  </span>
                  <h3 className="h3">{p.title}</h3>
                  <p className="body">{p.body}</p>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Reveal>
            <Link to="/apps/zapture" className="news">
              <span className="news-tag">New</span>
              <img src="/zapture/zapture-icon.webp" alt="" width={28} height={28} />
              <span className="news-text">
                <strong>Zapture 1.0 is out.</strong> Our first stable release, with a faster capture and a better editor.
              </span>
              <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container about-band">
          <Reveal className="about-band-copy">
            <span className="eyebrow">The studio</span>
            <h2 className="h2">Small on purpose.</h2>
            <p className="lead">
              Korven is an independent studio. Apps are designed, built and supported in one place, so your feedback goes straight to
              the person writing the code, and nothing ships until it’s right.
            </p>
            <Link to="/about" className="link">
              More about Korven <ArrowRight size={15} />
            </Link>
          </Reveal>
          <Reveal delay={0.08} className="about-band-card">
            <MessageCircle size={22} />
            <h3 className="h3">Have an idea or found a bug?</h3>
            <p className="body">Tell us what you’d like an app to do, or what got in your way. Every message is read.</p>
            <Link to="/support#contact" className="btn btn-primary">
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
