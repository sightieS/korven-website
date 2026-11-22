
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Command,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import AppCard, { type AppInfo } from "../components/AppCard";
import SEO from "../components/SEO";
import "./Home.css";

const applications: AppInfo[] = [
  {
    name: "Zapture",
    slug: "zapture",
    description:
      "A modern screenshot and screen recording experience, redesigned for Windows.",
    category: "Productivity",
    status: "In development",
    initials: "Z",
  },
  {
    name: "Textura",
    slug: "textura",
    description:
      "A clean, focused space for your thoughts, ideas and everyday notes.",
    category: "Productivity",
    status: "Coming soon",
    initials: "T",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Thoughtful design",
    description:
      "Every detail has a purpose. Software should feel as good as it works.",
  },
  {
    icon: ShieldCheck,
    title: "Built with care",
    description:
      "We focus on creating dependable tools with a strong attention to detail.",
  },
  {
    icon: Command,
    title: "Made for Windows",
    description:
      "Purpose-built desktop experiences designed around the way you work.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Discover Korven, an independent software studio creating thoughtfully designed Windows applications. Explore Zapture, Textura and more."
        path="/"
      />

      <main className="home-page">
        <section className="home-hero">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-eyebrow" variants={itemVariants}>
              <span className="hero-eyebrow-dot" />
              INDEPENDENT SOFTWARE STUDIO
            </motion.div>

            <motion.h1 variants={itemVariants}>
              Software,
              <br />
              <span>thoughtfully</span> made.
            </motion.h1>

            <motion.p variants={itemVariants}>
              We create modern software designed to make everyday digital
              experiences simpler, smoother and more enjoyable.
            </motion.p>

            <motion.div className="hero-actions" variants={itemVariants}>
              <Link to="/apps" className="hero-primary-button">
                Explore our apps
                <ArrowUpRight size={17} />
              </Link>

              <Link to="/about" className="hero-secondary-button">
                Discover Korven
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div className="hero-note" variants={itemVariants}>
              <span className="hero-note-line" />
              Independent by design. Built with purpose.
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.88, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />

            <div className="hero-logo-glow" />

            <div className="hero-logo-frame">
              <img src="/korven-icon.webp" alt="Korven logo" />
            </div>

            <div className="hero-floating-label label-top">
              <span className="floating-label-dot" />
              Crafted with purpose
            </div>

            <div className="hero-floating-label label-bottom">
              <Sparkles size={14} />
              A better experience
            </div>
          </motion.div>

          <div className="hero-bottom">
            <span>01 / INTRODUCTION</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="home-apps section-container">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="section-eyebrow">THE KORVEN COLLECTION</span>
              <h2>
                Software worth <span>opening.</span>
              </h2>
              <p>
                A growing collection of carefully designed applications.
              </p>
            </div>

            <Link to="/apps" className="section-link">
              View all applications
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <div className="home-app-grid">
            {applications.map((app, index) => (
              <motion.div
                key={app.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
              >
                <AppCard app={app} />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="home-philosophy">
          <div className="philosophy-inner">
            <motion.div
              className="philosophy-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-eyebrow">WHAT WE BELIEVE</span>
              <h2>
                The little details
                <br />
                make the <span>difference.</span>
              </h2>
            </motion.div>

            <div className="philosophy-grid">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    className="philosophy-card"
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                  >
                    <div className="philosophy-icon">
                      <Icon size={20} />
                    </div>

                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="home-cta section-container">
          <div className="home-cta-panel">
            <div className="cta-glow" />

            <div className="cta-content">
              <span className="section-eyebrow">EXPLORE WHAT'S NEXT</span>
              <h2>
                Find your next
                <br />
                favourite <span>tool.</span>
              </h2>
              <p>
                Discover the applications we're building at Korven.
              </p>

              <Link to="/apps" className="hero-primary-button">
                Explore applications
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="cta-decoration">
              <img src="/korven-icon.png" alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
