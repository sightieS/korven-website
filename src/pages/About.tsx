import { Link } from "react-router-dom";
import { ArrowRight, Gauge, Heart, Lightbulb, MapPin, Monitor, ShieldCheck, Target, User } from "lucide-react";

import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import "./About.css";

const principles = [
  {
    icon: Lightbulb,
    title: "Purposeful",
    description: "Every feature has to solve a real problem. If it doesn’t make your day easier, it doesn’t ship.",
  },
  {
    icon: Heart,
    title: "Crafted",
    description: "From the first launch to the smallest sound, every detail deserves attention.",
  },
  {
    icon: Target,
    title: "Focused",
    description: "Fewer, better apps. We’d rather finish one thing properly than start ten.",
  },
  {
    icon: ShieldCheck,
    title: "Respectful",
    description: "No accounts, no tracking and no dark patterns. Your work belongs to you.",
  },
  {
    icon: Gauge,
    title: "Fast",
    description: "Native code, quick startup and low overhead, so apps never slow you down.",
  },
  {
    icon: Monitor,
    title: "Windows first",
    description: "Designed for Windows 10 and 11, following the platform rather than fighting it.",
  },
];

const facts = [
  { icon: User, label: "Independent", value: "Built by one developer" },
  { icon: MapPin, label: "Based in", value: "United Kingdom" },
  { icon: Monitor, label: "Platform", value: "Windows 10 & 11" },
];

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Korven is an independent UK software studio making fast, private and thoughtfully designed apps for Windows."
        path="/about"
      />

      <section className="page-hero">
        <div className="grid-bg" />
        <div className="glow" />
        <div className="container">
          <Reveal className="page-hero-inner">
            <span className="eyebrow">About Korven</span>
            <h1 className="h1">
              Small studio.
              <br />
              <span className="gradient-text">High standards.</span>
            </h1>
            <p className="lead">
              Korven is an independent software studio making Windows apps that feel calm, fast and genuinely useful.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="about-facts">
              {facts.map((f) => (
                <div key={f.label} className="card">
                  <f.icon size={18} />
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section section-divider">
        <div className="container about-story">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="h2">Technology should feel effortless.</h2>
          </Reveal>
          <Reveal delay={0.08} className="about-story-copy">
            <p className="lead">
              Software is part of almost everything we do, yet the tools we use every day often feel cluttered, slow or
              harder than they need to be.
            </p>
            <p className="body">
              Korven exists to take a different approach: small, focused applications that combine solid engineering with
              considered design. Zapture, our first app, is built around a simple goal: capturing your own screen
              should take one shortcut, not five steps.
            </p>
            <p className="body">
              Each new app is shaped around the same idea. Make the experience better, keep it private, and sweat the details
              most people never notice but everyone feels.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section-divider">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What guides us</span>
            <h2 className="h2">Our principles.</h2>
          </Reveal>
          <div className="feature-grid">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.06}>
                <div className="card feature">
                  <span className="icon-tile">
                    <p.icon size={20} />
                  </span>
                  <h3 className="h3">{p.title}</h3>
                  <p className="body">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <div>
                <h2 className="h2">We’re just getting started.</h2>
                <p className="lead">See what we’ve made so far, or tell us what you’d like to see next.</p>
              </div>
              <div className="cta-band-actions">
                <Link to="/apps" className="btn btn-primary btn-lg">
                  Explore apps
                  <ArrowRight size={16} />
                </Link>
                <Link to="/support#contact" className="btn btn-secondary btn-lg">
                  Contact us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
