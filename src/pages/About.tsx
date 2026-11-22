
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Heart,
  Lightbulb,
  Target,
  Sparkles,
} from "lucide-react";

import SEO from "../components/SEO";
import "./About.css";

const principles = [
  {
    icon: Lightbulb,
    title: "Purposeful innovation",
    description:
      "We believe technology should solve problems, improve experiences and make everyday tasks easier.",
  },
  {
    icon: Heart,
    title: "Designed with care",
    description:
      "From the smallest interaction to the overall experience, every detail deserves attention.",
  },
  {
    icon: Target,
    title: "Quality over quantity",
    description:
      "We focus on building software that feels complete, reliable and genuinely useful.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Discover Korven, an independent software brand focused on purposeful innovation, thoughtful design and creating better software experiences."
        path="/about"
      />

      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-glow" />

          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">GET TO KNOW US</span>

            <h1>
              More than software.
              <br />
              <span>A better way forward.</span>
            </h1>

            <p>
              Korven is an independent software brand focused on creating
              thoughtfully designed applications for everyday life.
            </p>

            <div className="about-hero-brand">
              <img src="/korven-icon.webp" alt="Korven logo" />
              <span>Independent by design.</span>
            </div>
          </motion.div>
        </section>

        <section className="about-story">
          <div className="about-story-heading">
            <span className="section-eyebrow">OUR APPROACH</span>
            <h2>
              Technology should feel
              <br />
              <span>effortless.</span>
            </h2>
          </div>

          <div className="about-story-copy">
            <p>
              Software is part of almost everything we do. Yet the tools we use
              every day can often feel complicated, cluttered or unnecessarily
              difficult.
            </p>

            <p>
              Korven exists to explore a different approach: creating
              applications that combine thoughtful functionality with
              considered design.
            </p>

            <p>
              We're building a growing collection of software, with each
              application shaped around a simple idea: make the experience
              better.
            </p>
          </div>
        </section>

        <section className="about-principles">
          <div className="about-section-heading">
            <span className="section-eyebrow">WHAT GUIDES US</span>
            <h2>Our principles.</h2>
            <p>The ideas behind everything we create.</p>
          </div>

          <div className="about-principles-grid">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.article
                  className="about-principle-card"
                  key={principle.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                >
                  <div className="about-principle-icon">
                    <Icon size={21} />
                  </div>

                  <span className="about-principle-number">
                    0{index + 1}
                  </span>

                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="about-vision">
          <div className="about-vision-glow" />

          <div className="about-vision-content">
            <Sparkles size={22} />

            <span className="section-eyebrow">LOOKING AHEAD</span>

            <h2>
              We're just
              <br />
              <span>getting started.</span>
            </h2>

            <p>
              Korven is a growing project with plenty of ideas ahead. We're
              focused on developing useful applications and continually
              improving the experiences we create.
            </p>

            <a href="/apps" className="about-vision-link">
              Explore our applications
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="about-vision-logo">
            <img src="/korven-icon.png" alt="" />
          </div>
        </section>
      </main>
    </>
  );
}
