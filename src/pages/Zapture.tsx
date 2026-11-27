import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Camera,
  Check,
  ChevronDown,
  Download,
  FileText,
  History,
  Link2,
  Monitor,
  RefreshCw,
  Share2,
  ShieldCheck,
  Video,
} from "lucide-react";

import SEO from "../components/SEO";
import AppIcon from "../components/AppIcon";
import Reveal from "../components/Reveal";
import {
  ClipToast,
  EditorMock,
  HomeMock,
  LibraryMock,
  OcrMock,
  PinMock,
  RecordingCard,
  RegionMock,
  TrayMock,
} from "../components/mockups/Mockups";
import { RELEASES_URL, type AppInfo } from "../data/apps";
import { formatDate, formatFileSize, useLatestRelease, type ReleaseState } from "../hooks/useLatestRelease";
import { useIsWindows } from "../hooks/usePlatform";
import "./Product.css";

/** This page's address, to open on a PC. */
const pageUrl = () => `${window.location.origin}/apps/zapture`;

/** The three things Zapture does, each with its default keys. */
const jobs = [
  {
    icon: Camera,
    title: "Take a screenshot",
    keys: ["Ctrl", "Shift", "S"],
    body: "The screen freezes. Drag over what you want, or click a window. Then mark it up, copy it or save it.",
    visual: "region",
  },
  {
    icon: Video,
    title: "Record your screen",
    keys: ["Ctrl", "Shift", "R"],
    body: "Records a monitor, a window or an area, with your PC’s sound and your microphone. Press again to stop and save.",
    visual: "record",
  },
  {
    icon: History,
    title: "Save what just happened",
    keys: ["Win", "Shift", "Q"],
    body: "Turn on Clipping and Zapture keeps the last 15 seconds to 5 minutes. Press the keys to save it as a clip.",
    visual: "clip",
  },
] as const;

const showcase = [
  { id: "home", label: "Home", caption: "Start a recording, take a screenshot or record an area, and see your latest captures.", view: <HomeMock /> },
  { id: "capture", label: "Select", caption: "The screen freezes while you choose an area, a window or a whole monitor.", view: <RegionMock /> },
  { id: "edit", label: "Edit", caption: "Arrows, shapes, text, blur and pixelate, in any colour. Zoom in for detail.", view: <EditorMock /> },
  { id: "library", label: "Library", caption: "Every screenshot, recording and clip in one place. Search by name, filter by date and format.", view: <LibraryMock /> },
  { id: "record", label: "Record", caption: "While recording, live levels show your sound is being captured. Pause or stop any time.", view: <HomeMock recording /> },
] as const;

const faqs = [
  {
    q: "Does Zapture work on Mac, Linux, phones or tablets?",
    a: "No. Zapture is made for Windows 10 and Windows 11 PCs only.",
  },
  {
    q: "Are my screenshots or recordings uploaded anywhere?",
    a: "No. Everything is saved on your PC and nothing is sent to Korven. There’s no account and no telemetry. Zapture only goes online to check for updates and to download FFmpeg, which it uses for video.",
  },
  {
    q: "Where are my captures saved?",
    a: "Screenshots go to Pictures\\Zapture Screenshots, recordings to Videos\\Zapture Recordings and clips to Videos\\Zapture Clips. You can change each folder in Settings → Storage.",
  },
  {
    q: "Can I change the keyboard shortcuts?",
    a: "Yes. Every shortcut can be changed in Settings → Shortcuts, to any key or combination. You can also make Win+Shift+S and Print Screen open Zapture instead of the Snipping Tool.",
  },
  {
    q: "Why does Windows say “Windows protected your PC” when I install it?",
    a: "Zapture’s installer isn’t code-signed yet, so Microsoft Defender SmartScreen doesn’t recognise it and shows its standard warning for new apps, with “Unknown publisher”. It’s a reputation check, not a virus detection. Click “More info”, then “Run anyway”. Your browser may also say the file isn’t commonly downloaded: choose Keep. On some Windows 11 PCs, Smart App Control blocks unsigned apps without offering “Run anyway”.",
  },
  {
    q: "How do updates work?",
    a: "Zapture checks for updates and installs them from inside the app, keeping your settings. You can turn automatic checks off in Settings → About.",
  },
];

export default function ZapturePage({ app }: { app: AppInfo }) {
  const windows = useIsWindows();
  // Only Windows visitors can download, so only their browsers ask GitHub for the latest version.
  const release = useLatestRelease(windows);
  const ready = release.kind === "ready" ? release.release : null;

  return (
    <>
      <SEO title={app.seoTitle} description={app.seoDescription} path="/apps/zapture" image="/zapture/zapture-icon.png" />

      <section className="zh">
        <div className="zh-glow" aria-hidden="true" />
        <div className="grid-bg" aria-hidden="true" />
        <div className="container zh-grid">
          <Reveal className="zh-copy">
            <Link to="/apps" className="back-link">
              <ArrowLeft size={15} />
              All apps
            </Link>
            <div className="zh-name">
              <AppIcon app={app} size={64} />
              <div>
                <h1>Zapture</h1>
                <span>for Windows 10 and 11</span>
              </div>
            </div>
            <p className="zh-tagline">Screenshots, screen recording and instant replays, in one small app.</p>
            <p className="lead">
              Press a shortcut to capture your screen, mark it up and share it. Record videos with sound, or save the last few minutes
              of anything you’ve just seen.
            </p>
            <DownloadArea release={release} windows={windows} compact />
            <p className="small zh-meta">
              <Monitor size={14} />
              Windows 10 (1803+) and 11, 64-bit
              {ready && <> · Version {ready.version}</>} · No account needed
            </p>
          </Reveal>
          <Reveal delay={0.12} className="zh-visual">
            <HomeMock />
            <ClipToast style={{ position: "absolute", right: -22, bottom: -36, width: 340 }} />
          </Reveal>
        </div>
      </section>

      <section className="section section-divider" id="how">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">What it does</span>
            <h2 className="h2">Three jobs, one shortcut each.</h2>
            <p className="lead">These are the default keys. You can change any of them.</p>
          </Reveal>
          <div className="jobs">
            {jobs.map((j, i) => (
              <Reveal key={j.title} delay={i * 0.08} className="job">
                <div className={`job-visual ${j.visual}`}>
                  {j.visual === "region" && <RegionMock />}
                  {j.visual === "record" && <RecordingCard />}
                  {j.visual === "clip" && (
                    <div className="job-clip">
                      <div className="job-timeline" aria-hidden="true">
                        <span className="job-buffer" />
                        <span className="job-now">Now</span>
                      </div>
                      <ClipToast />
                    </div>
                  )}
                </div>
                <div className="job-copy">
                  <h3 className="h3">
                    <span className="job-icon">
                      <j.icon size={17} />
                    </span>
                    {j.title}
                  </h3>
                  <span className="job-keys">
                    {j.keys.map((k) => (
                      <kbd key={k}>{k}</kbd>
                    ))}
                  </span>
                  <p className="body">{j.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-divider">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Take a look</span>
            <h2 className="h2">This is Zapture.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Showcase />
          </Reveal>
        </div>
      </section>

      <section className="section section-divider">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Handy extras</span>
            <h2 className="h2">Small things that save time.</h2>
          </Reveal>
          <div className="extras">
            <Reveal className="extra">
              <div className="extra-visual">
                <OcrMock />
              </div>
              <h3 className="h3">Copy text from a screenshot</h3>
              <p className="body">Get the words out of error messages, slides or videos, using the text recognition built into Windows.</p>
            </Reveal>
            <Reveal delay={0.06} className="extra">
              <div className="extra-visual">
                <PinMock />
              </div>
              <h3 className="h3">Pin it on top</h3>
              <p className="body">Keep a capture floating above your other windows while you work. Scroll to zoom, double-click to close.</p>
            </Reveal>
            <Reveal delay={0.12} className="extra">
              <div className="extra-visual tray">
                <TrayMock />
              </div>
              <h3 className="h3">Always in your tray</h3>
              <p className="body">Right-click the tray icon to capture, record, save a clip or open your folders, without opening the app.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-divider" id="features">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Everything in Zapture</span>
            <h2 className="h2">All the features, in plain words.</h2>
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
          <DownloadPanel app={app} release={release} windows={windows} />
        </div>
      </section>

      <section className="section section-divider" id="faq">
        <div className="container zfaq">
          <Reveal>
            <span className="eyebrow">Questions</span>
            <h2 className="h2">Good to know.</h2>
            <p className="body" style={{ marginTop: 14 }}>
              Something else? Visit the <Link to="/support#faq">help centre</Link> or <Link to="/support#contact">contact us</Link>.
            </p>
          </Reveal>
          <Reveal delay={0.06} className="zfaq-list">
            {faqs.map((f) => (
              <details key={f.q} className="zfaq-item">
                <summary>
                  {f.q}
                  <ChevronDown size={18} />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

    </>
  );
}

/** The download button on Windows; elsewhere, why it isn't there and a way to send the link to a PC. */
function DownloadArea({ release, windows, compact = false }: { release: ReleaseState; windows: boolean; compact?: boolean }) {
  if (windows) {
    return (
      <>
        <div className="zh-actions">
          <DownloadButton release={release} />
          {compact && (
            <a href="#how" className="btn btn-secondary btn-lg">
              How it works
            </a>
          )}
        </div>
        {compact && (
          <p className="small zh-warning-hint">
            Windows may show a SmartScreen warning the first time. <a href="#windows-warning">Here’s what to do</a>.
          </p>
        )}
      </>
    );
  }
  return <WindowsOnly />;
}

function WindowsOnly() {
  const [sent, setSent] = useState<"" | "copied" | "shared">("");
  const canShare = typeof navigator !== "undefined" && typeof navigator.share === "function";
  const send = async () => {
    try {
      if (canShare) {
        await navigator.share({ title: "Zapture for Windows", text: "Download Zapture on your Windows PC", url: pageUrl() });
        setSent("shared");
      } else {
        await navigator.clipboard.writeText(pageUrl());
        setSent("copied");
      }
    } catch {
      // Sharing was cancelled, or the clipboard isn't available: nothing to report.
    }
  };
  return (
    <div className="windows-only" role="note">
      <div className="windows-only-text">
        <Monitor size={20} />
        <div>
          <strong>Zapture is for Windows PCs</strong>
          <span>It can’t be installed on this device. Open this page on your Windows 10 or 11 PC to download it.</span>
        </div>
      </div>
      <button type="button" className="btn btn-secondary" onClick={send}>
        {sent ? <Check size={16} /> : canShare ? <Share2 size={16} /> : <Link2 size={16} />}
        {sent === "copied" ? "Link copied" : sent === "shared" ? "Link sent" : canShare ? "Send the link to your PC" : "Copy the link for your PC"}
      </button>
    </div>
  );
}

function DownloadButton({ release }: { release: ReleaseState }) {
  if (release.kind === "ready") {
    return (
      <a className="btn btn-primary btn-lg" href={release.release.downloadUrl} title={`Download ${release.release.fileName}`}>
        <Download size={17} />
        Download for Windows
      </a>
    );
  }
  if (release.kind === "error") {
    return (
      <a className="btn btn-primary btn-lg" href={RELEASES_URL} target="_blank" rel="noopener noreferrer">
        <Download size={17} />
        Download from GitHub
      </a>
    );
  }
  return (
    <button className="btn btn-primary btn-lg" type="button" disabled>
      <RefreshCw size={17} className="spin" />
      Finding the latest version…
    </button>
  );
}

function Showcase() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(!reduce);
  useEffect(() => {
    if (!auto) return;
    const t = window.setTimeout(() => setActive((i) => (i + 1) % showcase.length), 6000);
    return () => window.clearTimeout(t);
  }, [active, auto]);
  const item = showcase[active];
  return (
    <div className="showcase" onPointerEnter={() => setAuto(false)}>
      <div className="show-tabs" role="tablist" aria-label="Parts of Zapture">
        {showcase.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            id={`tab-${s.id}`}
            aria-selected={i === active}
            aria-controls="show-panel"
            className={i === active ? "is-active" : ""}
            onClick={() => {
              setActive(i);
              setAuto(false);
            }}
          >
            {s.label}
            {i === active && auto && <span className="show-progress" />}
          </button>
        ))}
      </div>
      <p className="show-caption" aria-live="polite">
        {item.caption}
      </p>
      <div className="show-stage" id="show-panel" role="tabpanel" aria-labelledby={`tab-${item.id}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            className="show-view"
            initial={reduce ? false : { opacity: 0, y: 14, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: -10, scale: 0.985 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {item.view}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/** What to do when SmartScreen warns about the (unsigned) installer. */
function SmartScreenNote() {
  return (
    <div className="smartscreen" id="windows-warning">
      <div className="smartscreen-head">
        <span className="smartscreen-icon" aria-hidden="true">
          <ShieldCheck size={18} />
        </span>
        <div>
          <h3 className="h3">Windows may warn you the first time</h3>
          <p className="small">
            The installer isn’t code-signed yet, so Microsoft Defender SmartScreen doesn’t recognise it and may show “Windows protected your
            PC” with “Unknown publisher”. That’s its usual warning for new apps from small developers, not a virus detection.
          </p>
        </div>
      </div>
      <ol className="smartscreen-steps">
        <li>
          <span className="step-no">1</span>
          <span>
            Click <span className="ui-label">More info</span>
          </span>
        </li>
        <li>
          <span className="step-no">2</span>
          <span>
            Click <span className="ui-label">Run anyway</span>
          </span>
        </li>
      </ol>
      <p className="small smartscreen-more">
        Your browser may also say the file isn’t commonly downloaded: choose <span className="ui-label">Keep</span>. On some Windows 11 PCs,
        Smart App Control blocks unsigned apps and doesn’t offer “Run anyway”.
      </p>
    </div>
  );
}

function DownloadPanel({ app, release, windows }: { app: AppInfo; release: ReleaseState; windows: boolean }) {
  const ready = release.kind === "ready" ? release.release : null;
  return (
    <div className="download-grid">
      <Reveal className="card download-card">
        <span className="eyebrow">Download</span>
        <h2 className="h2">
          {!windows
            ? "Download on your Windows PC"
            : ready
              ? `Get ${app.name} ${ready.version}`
              : release.kind === "error"
                ? `Get ${app.name}`
                : "Checking for the latest version…"}
        </h2>
        <p className="body" style={{ marginTop: 12 }}>
          {!windows
            ? "Zapture runs on Windows 10 and 11 only, so it can’t be downloaded on this device."
            : ready
              ? "The installer sets up Zapture for your account, with Start menu and optional desktop shortcuts. Updates install from inside the app."
              : release.kind === "error"
                ? "We couldn’t reach GitHub to show the latest version here. Every release, with its installer, is on the releases page."
                : "Looking up the newest release on GitHub."}
        </p>

        {ready && (
          <dl className="release-facts">
            <div>
              <dt>Version</dt>
              <dd>{ready.version}</dd>
            </div>
            <div>
              <dt>Released</dt>
              <dd>{formatDate(ready.date)}</dd>
            </div>
            <div>
              <dt>Installer</dt>
              <dd>{formatFileSize(ready.fileSize)}</dd>
            </div>
          </dl>
        )}

        <div className="download-actions">
          {windows ? (
            <>
              <DownloadButton release={release} />
              <a className="link" href={ready ? ready.releaseUrl : RELEASES_URL} target="_blank" rel="noopener noreferrer">
                {ready ? "Release notes on GitHub" : "All releases"} <ArrowUpRight size={15} />
              </a>
            </>
          ) : (
            <WindowsOnly />
          )}
        </div>
        {windows && <SmartScreenNote />}
        {windows && (
          <p className="small download-legal">
            By downloading you agree to the <Link to="/eula">End User Licence Agreement</Link>. See how we handle data in the{" "}
            <Link to="/privacy">Privacy Policy</Link>.
          </p>
        )}
      </Reveal>

      <Reveal delay={0.08} className="card requirements-card">
        <h3 className="h3">System requirements</h3>
        <ul>
          {app.requirements?.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        {app.shortcuts && (
          <>
            <h3 className="h3" style={{ marginTop: 22 }}>
              Default shortcuts
            </h3>
            <div className="shortcut-table compact">
              {app.shortcuts.map((s) => (
                <div className="shortcut-row" key={s.action}>
                  <span>{s.action}</span>
                  <span className="shortcut-keys">
                    {s.keys.map((k) => (
                      <kbd key={k}>{k}</kbd>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </Reveal>

      {ready && (
        <Reveal className="card notes-card">
          <h3 className="h3 notes-title">
            <FileText size={18} />
            What’s new in {ready.version}
          </h3>
          <ReleaseNotes text={ready.notes} />
        </Reveal>
      )}
    </div>
  );
}

/** GitHub release notes are Markdown; this shows headings, lists, bold and code as plain elements. */
function ReleaseNotes({ text }: { text: string }) {
  const blocks: ReactNode[] = [];
  let list: string[] = [];
  const flush = () => {
    if (list.length) {
      blocks.push(
        <ul key={blocks.length}>
          {list.map((item, i) => (
            <li key={i}>{inline(item)}</li>
          ))}
        </ul>,
      );
      list = [];
    }
  };
  for (const raw of text.replace(/\r/g, "").split("\n")) {
    const line = raw.trim();
    const bullet = line.match(/^[-*+]\s+(.*)$/);
    if (bullet) {
      list.push(bullet[1]);
      continue;
    }
    flush();
    if (!line) continue;
    const heading = line.match(/^#{1,6}\s+(.*)$/);
    if (heading) blocks.push(<h4 key={blocks.length}>{inline(heading[1])}</h4>);
    else blocks.push(<p key={blocks.length}>{inline(line)}</p>);
  }
  flush();
  return <div className="release-notes">{blocks}</div>;
}

function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) return <code key={i}>{part.slice(1, -1)}</code>;
    return part;
  });
}
