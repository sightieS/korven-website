
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import AppCard, { type AppInfo } from "../components/AppCard";
import SEO from "../components/SEO";
import "./Apps.css";

const applications: AppInfo[] = [
  {
    name: "Zapture",
    slug: "zapture",
    description:
      "A powerful, modern screenshot and screen recording tool designed to make capturing your screen effortless.",
    category: "Productivity",
    status: "In development",
    initials: "Z",
  },
  {
    name: "Textura",
    slug: "textura",
    description:
      "A beautifully simple notes application designed to keep your thoughts organised and accessible.",
    category: "Productivity",
    status: "Coming soon",
    initials: "T",
  },
];

export default function Apps() {
  return (
    <>
      <SEO
        title="Our Apps"
        description="Explore the Korven collection of thoughtfully designed Windows software. Discover Zapture, our screenshot and screen recording app, and Textura, our upcoming notes application."
        path="/apps"
      />

      <main className="apps-page">
        <section className="apps-hero">
          <div className="apps-hero-glow" />

          <motion.div
            className="apps-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="apps-eyebrow">
              <Sparkles size={13} />
              THE KORVEN COLLECTION
            </div>

            <h1>
              Tools for a
              <br />
              <span>better experience.</span>
            </h1>

            <p>
              Discover thoughtfully designed applications built to make your
              everyday digital life simpler.
            </p>

            <div className="apps-hero-meta">
              <span>{applications.length} applications</span>
              <span className="apps-meta-divider" />
              <span>Designed for Windows</span>
            </div>
          </motion.div>
        </section>

        <section className="apps-catalog">
          <div className="apps-catalog-heading">
            <div>
              <span className="section-eyebrow">EXPLORE OUR SOFTWARE</span>
              <h2>All applications</h2>
              <p>Discover what's available and what's coming next.</p>
            </div>

            <span className="apps-count">
              {String(applications.length).padStart(2, "0")} PRODUCTS
            </span>
          </div>

          <div className="apps-catalog-grid">
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

          <div className="apps-coming-note">
            <div className="apps-coming-icon">
              <Sparkles size={19} />
            </div>

            <div>
              <h3>Something new is taking shape.</h3>
              <p>
                We're working on more software. Keep an eye on Korven for future
                releases.
              </p>
            </div>

            <ArrowUpRight className="apps-coming-arrow" size={19} />
          </div>
        </section>
      </main>
    </>
  );
}
