
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  MessageCircle,
  ShieldQuestion,
  Download,
} from "lucide-react";

import SEO from "../components/SEO";
import "./Support.css";

const faqs = [
  {
    question: "Are Korven applications free?",
    answer:
      "Our goal is to make our applications accessible. Pricing and licensing information will be clearly displayed on each product page when an application is released.",
  },
  {
    question: "How do I download a Korven application?",
    answer:
      "When an application becomes available, its product page will include the official download link, version information and installation instructions.",
  },
  {
    question: "Which operating systems are supported?",
    answer:
      "Our current applications are being developed for Windows. Specific Windows version requirements will be published on each product page.",
  },
  {
    question: "How do I report a problem?",
    answer:
      "You can contact our support team by email. Include the application name, version and a description of the issue so we can understand what happened.",
  },
  {
    question: "How can I suggest a feature?",
    answer:
      "We welcome ideas and feedback. Send us an email describing your suggestion and how you think it would improve the application.",
  },
];

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <SEO
        title="Support"
        description="Need help with Korven? Find answers to common questions, learn about our applications and contact the Korven support team."
        path="/support"
      />

      <main className="support-page">
        <section className="support-hero">
          <div className="support-hero-glow" />

          <motion.div
            className="support-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="support-hero-icon">
              <ShieldQuestion size={24} />
            </div>

            <span className="section-eyebrow">KORVEN HELP CENTRE</span>

            <h1>
              We're here
              <br />
              <span>to help.</span>
            </h1>

            <p>
              Find answers, get assistance and learn more about your Korven
              applications.
            </p>

            <a href="#contact" className="support-hero-button">
              Get support
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </section>

        <section className="support-options">
          <div className="support-section-heading">
            <span className="section-eyebrow">HOW CAN WE HELP?</span>
            <h2>Find the help you need.</h2>
            <p>Choose the option that best describes what you're looking for.</p>
          </div>

          <div className="support-option-grid">
            <a href="#faq" className="support-option-card">
              <div className="support-option-icon">
                <MessageCircle size={21} />
              </div>
              <h3>Common questions</h3>
              <p>Find answers to frequently asked questions.</p>
              <span>
                Browse FAQs <ArrowUpRight size={15} />
              </span>
            </a>

            <a href="#contact" className="support-option-card">
              <div className="support-option-icon">
                <Mail size={21} />
              </div>
              <h3>Contact support</h3>
              <p>Get in touch if you need help with an application.</p>
              <span>
                Contact us <ArrowUpRight size={15} />
              </span>
            </a>

            <a href="/apps" className="support-option-card">
              <div className="support-option-icon">
                <Download size={21} />
              </div>
              <h3>Our applications</h3>
              <p>Explore product information and release details.</p>
              <span>
                View applications <ArrowUpRight size={15} />
              </span>
            </a>
          </div>
        </section>

        <section className="support-faq" id="faq">
          <div className="support-faq-heading">
            <span className="section-eyebrow">NEED AN ANSWER?</span>
            <h2>Frequently asked questions.</h2>
            <p>Some useful information about Korven and our applications.</p>
          </div>

          <div className="support-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`support-faq-item ${isOpen ? "open" : ""}`}
                  key={faq.question}
                >
                  <button
                    className="support-faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className="support-faq-chevron"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="support-faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        <section className="support-contact" id="contact">
          <div className="support-contact-panel">
            <div className="support-contact-glow" />

            <div className="support-contact-content">
              <div className="support-contact-icon">
                <Mail size={22} />
              </div>

              <span className="section-eyebrow">STILL NEED HELP?</span>

              <h2>Let's talk.</h2>

              <p>
                Have a question, encountered an issue or simply want to share
                feedback? We'd be happy to hear from you.
              </p>

              <a
                href="mailto:contact.sightie@gmail.com?subject=Korven%20Support"
                className="support-contact-button"
              >
                Email support
                <ArrowUpRight size={16} />
              </a>

              <span className="support-contact-email">
                contact.sightie@gmail.com
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
