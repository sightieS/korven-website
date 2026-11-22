
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Clock3,
  Download,
  FileText,
  Monitor,
  ShieldCheck,
  Sparkles,
  RefreshCw,
} from "lucide-react";

import SEO from "../components/SEO";
import "./Product.css";

interface GitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  html_url: string;
  assets: {
    name: string;
    size: number;
    browser_download_url: string;
  }[];
}

interface ZaptureRelease {
  version: string;
  date: string;
  notes: string;
  downloadUrl: string;
  fileName: string;
  fileSize: number;
  releaseUrl: string;
}

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
        description: "Keep your notes organised and easy to navigate.",
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

const GITHUB_RELEASE_API =
  "https://api.github.com/repos/sightieS/zapture-updates/releases/latest";

const GITHUB_RELEASES_URL =
  "https://github.com/sightieS/zapture-updates/releases";

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatReleaseDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Product() {
  const { slug } = useParams<{ slug: string }>();

  const product =
    slug && Object.prototype.hasOwnProperty.call(products, slug)
      ? products[slug as ProductSlug]
      : null;

  const [release, setRelease] = useState<ZaptureRelease | null>(null);
  const [releaseLoading, setReleaseLoading] = useState(false);
  const [releaseError, setReleaseError] = useState(false);

  useEffect(() => {
    if (slug !== "zapture") return;

    const controller = new AbortController();

    async function fetchRelease() {
      setReleaseLoading(true);
      setReleaseError(false);

      try {
        const response = await fetch(GITHUB_RELEASE_API, {
          signal: controller.signal,
          headers: {
            Accept: "application/vnd.github+json",
          },
        });

        if (!response.ok) {
          throw new Error("Unable to retrieve the latest release.");
        }

        const data: GitHubRelease = await response.json();

        const installer = data.assets.find((asset) =>
          asset.name.toLowerCase().endsWith(".exe")
        );

        if (!installer) {
          throw new Error("No Windows installer was found.");
        }

        setRelease({
          version: data.tag_name || data.name,
          date: data.published_at,
          notes: data.body || "No release notes were provided.",
          downloadUrl: installer.browser_download_url,
          fileName: installer.name,
          fileSize: installer.size,
          releaseUrl: data.html_url,
        });
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }

        console.error("Zapture release error:", error);
        setReleaseError(true);
      } finally {
        if (!controller.signal.aborted) {
          setReleaseLoading(false);
        }
      }
    }

    fetchRelease();

    return () => controller.abort();
  }, [slug]);

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

  const isZapture = slug === "zapture";
  const productStatus = isZapture && release ? "Available" : product.status;

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
                <div className="product-category">{product.category}</div>
                <h1>{product.name}</h1>
              </div>
            </div>

            <div className="product-status">
              <span className="product-status-dot" />
              {productStatus}
            </div>

            <p className="product-description">{product.description}</p>

            <div className="product-actions">
              {isZapture && release ? (
                <a
                  className="product-download-button"
                  href={release.downloadUrl}
                  aria-label={`Download Zapture ${release.version} for Windows`}
                  title={`Download ${release.fileName}`}
                >
                  <Download size={17} />
                  Download for Windows
                </a>
              ) : (
                <button
                  className="product-download-button"
                  type="button"
                  disabled
                >
                  {isZapture && releaseLoading ? (
                    <>
                      <RefreshCw size={17} />
                      Checking release...
                    </>
                  ) : (
                    <>
                      <Clock3 size={17} />
                      {isZapture && releaseError
                        ? "Download unavailable"
                        : "Not available yet"}
                    </>
                  )}
                </button>
              )}

              <span className="product-platform">
                <Monitor size={15} />
                Windows
              </span>
            </div>

            {isZapture && (
              <a
                className="product-release-history-link"
                href={GITHUB_RELEASES_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View all releases <ArrowUpRight size={14} />
              </a>
            )}
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
            <span className="section-eyebrow">ABOUT THE APPLICATION</span>
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
            <span className="section-eyebrow">WHAT TO EXPECT</span>
            <h2>Made to do more.</h2>
            <p>Explore the features planned for this application.</p>
          </div>

          <div className="product-feature-grid">
            {product.features.map((feature, index) => (
              <motion.div
                className="product-feature-card"
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

        {isZapture ? (
          <section className="product-release">
            <div className="product-release-inner">
              <div>
                <span className="section-eyebrow">RELEASE INFORMATION</span>

                <h2>
                  {release
                    ? "Ready when you are."
                    : releaseLoading
                      ? "Checking for releases."
                      : "Zapture releases."}
                </h2>

                <p>
                  {release
                    ? "Download the latest version of Zapture for Windows."
                    : releaseLoading
                      ? "We're retrieving the latest version information from GitHub."
                      : releaseError
                        ? "We couldn't retrieve the latest release information. You can still visit the release history on GitHub."
                        : "The latest release information will appear here when available."}
                </p>

                {release && (
                  <div className="zapture-release-details">
                    <div>
                      <span>VERSION</span>
                      <strong>{release.version}</strong>
                    </div>

                    <div>
                      <span>RELEASED</span>
                      <strong>{formatReleaseDate(release.date)}</strong>
                    </div>

                    <div>
                      <span>INSTALLER</span>
                      <strong>{formatFileSize(release.fileSize)}</strong>
                    </div>
                  </div>
                )}

                {release && (
                  <a
                    className="zapture-release-link"
                    href={release.releaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View release on GitHub <ArrowUpRight size={15} />
                  </a>
                )}

                {releaseError && (
                  <a
                    className="zapture-release-link"
                    href={GITHUB_RELEASES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View GitHub releases <ArrowUpRight size={15} />
                  </a>
                )}
              </div>

              <div className="product-release-status">
                {release ? (
                  <Download size={20} />
                ) : releaseLoading ? (
                  <RefreshCw size={20} />
                ) : (
                  <Clock3 size={20} />
                )}

                <span>{productStatus}</span>

                <small>
                  {release
                    ? release.fileName
                    : "Release information"}
                </small>
              </div>
            </div>

            {release && (
              <div className="zapture-release-notes">
                <div className="zapture-release-notes-heading">
                  <FileText size={18} />
                  <h3>What's new</h3>
                </div>

                <pre>{release.notes}</pre>
              </div>
            )}
          </section>
        ) : (
          <section className="product-release">
            <div className="product-release-inner">
              <div>
                <span className="section-eyebrow">RELEASE INFORMATION</span>
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
        )}

        <div className="product-bottom-link">
          <Link to="/apps">
            Explore other applications <ArrowUpRight size={16} />
          </Link>
        </div>
      </main>
    </>
  );
}
