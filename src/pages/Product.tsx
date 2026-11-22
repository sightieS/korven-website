
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Clock3,
  Monitor,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import SEO from "../components/SEO";
import "./Product.css";

const products = {
  zapture: {
    name: "Zapture",
    category: "Productivity",
    status: "In development",
    seoTitle: "Zapture - Screenshot & Screen Recording",
    seoDescription:
      "Discover Zapture by Korven, a modern Windows screenshot and screen recording application designed for effortless screen capture.",
    description:
      "A modern screenshot and screen recording experience, redesigned from the ground up for Windows.",
    longDescription:
      "Capture anything on your screen with a clean, intuitive experience. Zapture is being developed to make screenshots, screen recordings and everyday screen capture workflows feel effortless.",
    initials: "Z",
    features: [
      {
        title: "Precision screenshots",
        description:
          "Capture specific regions, individual windows or your entire screen.",
      },
      {
        title: "Screen recording",
        description:
          "Record your screen with configurable quality and audio options.",
      },
      {
        title: "Modern experience",
        description:
          "A carefully designed interface with smooth interactions and intuitive controls.",
      },
      {
        title: "Customisation",
        description:
          "Personalise shortcuts, appearance and capture preferences.",
      },
    ],
  },

  textura: {
    name: "Textura",
    category: "Productivity",
    status: "Coming soon",
    seoTitle: "Textura - Notes Application",
    seoDescription:
      "Discover Textura by Korven, an upcoming Windows notes application focused on simplicity, organisation and a beautiful writing experience.",
    description:
      "A beautifully designed notes application for capturing thoughts, organising ideas and staying productive.",
    longDescription:
      "Textura is an upcoming notes application focused on simplicity, organisation and an exceptional writing experience. Create, manage and revisit your notes in a clean, modern environment designed for Windows.",
    initials: "T",
    features: [
      {
        title: "Beautiful writing experience",
        description:
          "A clean, distraction-free environment for writing and capturing your ideas.",
      },
      {
        title: "Smart organisation",
        description:
          "Keep your notes organised and easy to navigate.",
      },
      {
        title: "Personalisation",
        description:
          "Make your workspace feel like your own with a thoughtfully designed interface.",
      },
      {
        title: "Designed for Windows",
        description:
          "A polished desktop experience built specifically for Windows.",
      },
    ],
  },
};

type ProductSlug = keyof typeof products;

export default function Product() {
  const { slug } = useParams<{ slug: string }>();

  const product =
    slug && Object.prototype.hasOwnProperty.call(products, slug)
      ? products[slug as ProductSlug]
      : null;

  if (!product) {
    return (
      <>
        <SEO
          title="Application Not Found"
          description="The application you're looking for could not be found. Explore the Korven collection to discover our software."
          path={`/apps/${slug ?? ""}`}
        />

        <main className="product-not-found">
          <span>404 / APPLICATION NOT FOUND</span>
          <h1>We couldn't find that application.</h1>
          <Link to="/apps">
            <ArrowLeft size={16} />
            Back to applications
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <SEO
        title={product.seoTitle}
        description={product.seoDescription}
        path={`/apps/${slug}`}
      />

      <main className="product-page">
        <section className="product-hero">
          <div className="product-hero-glow" />

          <motion.div
            className="product-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <Link to="/apps" className="product-back">
              <ArrowLeft size={15} />
              All applications
            </Link>

            <div className="product-identity">
              <div className="product-icon">
                <span>{product.initials}</span>
              </div>

              <div>
                <div className="product-category">
                  {product.category}
                </div>
                <h1>{product.name}</h1>
              </div>
            </div>

            <div className="product-status">
              <span className="product-status-dot" />
              {product.status}
            </div>

            <p className="product-description">
              {product.description}
            </p>

            <div className="product-actions">
              <button
                className="product-download-button"
                type="button"
                disabled
              >
                <Clock3 size={17} />
                Not available yet
              </button>

              <span className="product-platform">
                <Monitor size={15} />
                Windows
              </span>
            </div>
          </motion.div>

          <motion.div
            className="product-preview"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="product-preview-window">
              <div className="preview-titlebar">
                <div className="preview-brand">
                  <span className="preview-brand-icon">
                    {product.initials}
                  </span>
                  {product.name}
                </div>

                <div className="preview-window-controls">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="preview-body">
                <div className="preview-sidebar">
                  <div className="preview-sidebar-item active" />
                  <div className="preview-sidebar-item" />
                  <div className="preview-sidebar-item" />
                  <div className="preview-sidebar-item" />
                </div>

                <div className="preview-main">
                  <div className="preview-heading-line" />
                  <div className="preview-subheading-line" />

                  <div className="preview-feature-card">
                    <Sparkles size={24} />
                    <div className="preview-feature-lines">
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className="preview-bottom-cards">
                    <div />
                    <div />
                  </div>
                </div>
              </div>

              <div className="preview-overlay">
                <Sparkles size={17} />
                <span>Product preview</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="product-overview">
          <div className="product-overview-copy">
            <span className="section-eyebrow">
              ABOUT THE APPLICATION
            </span>
            <h2>
              Designed with
              <br />
              <span>purpose.</span>
            </h2>
            <p>{product.longDescription}</p>
          </div>

          <div className="product-overview-note">
            <ShieldCheck size={22} />
            <h3>Built with attention to detail.</h3>
            <p>
              Korven applications are designed with a focus on usability,
              performance and a polished user experience.
            </p>
          </div>
        </section>

        <section className="product-features">
          <div className="product-section-heading">
            <span className="section-eyebrow">
              WHAT TO EXPECT
            </span>
            <h2>Made to do more.</h2>
            <p>
              Explore the features planned for this application.
            </p>
          </div>

          <div className="product-feature-grid">
            {product.features.map((feature, index) => (
              <motion.div
                className="product-feature-card"
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="product-feature-check">
                  <Check size={17} />
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="product-release">
          <div className="product-release-inner">
            <div>
              <span className="section-eyebrow">
                RELEASE INFORMATION
              </span>
              <h2>Coming when it's ready.</h2>
              <p>
                We're taking the time to build this application properly.
                We'll share release information here when it's available.
              </p>
            </div>

            <div className="product-release-status">
              <Clock3 size={20} />
              <span>{product.status}</span>
              <small>Release date not announced</small>
            </div>
          </div>
        </section>

        <div className="product-bottom-link">
          <Link to="/apps">
            Explore other applications
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </main>
    </>
  );
}
