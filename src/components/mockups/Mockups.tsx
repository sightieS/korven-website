/**
 * Mockups of Zapture's interface, drawn to match the app: its default dark theme and purple
 * accent (src/ui/theme.rs), its sidebar and page names, the home page's Capture card, the
 * selector's mode bar and the editor's colours. Captures shown inside are made-up examples.
 */
import type { CSSProperties, ReactNode } from "react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  ArrowUpRight,
  AudioWaveform,
  Bold,
  Camera,
  Circle,
  CircleDot,
  Copy,
  Cpu,
  Crop,
  Droplets,
  Film,
  FolderOpen,
  Gauge,
  Grid3x3,
  HardDrive,
  Highlighter,
  History,
  House,
  Image,
  Info,
  Keyboard,
  Lasso,
  Maximize,
  Minus,
  Monitor,
  MousePointer2,
  Palette,
  Pause,
  Pen,
  Pin,
  Redo2,
  Save,
  ScanText,
  Search,
  SlidersHorizontal,
  Square,
  SquareDashed,
  Type,
  Undo2,
  AppWindow as WindowIcon,
  X,
  ZoomIn,
} from "lucide-react";

import "./Mockups.css";

const VERSION = "1.0.0";

/** Zapture's own window: its title bar and window buttons. */
export function AppWindow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`zp zp-window ${className}`}>
      <div className="zp-titlebar">
        <img src="/zapture/zapture-icon.webp" alt="" width={18} height={18} />
        <strong>Zapture</strong>
        <span className="zp-winbtns" aria-hidden="true">
          <Minus size={14} />
          <Square size={11} />
          <X size={14} />
        </span>
      </div>
      {children}
    </div>
  );
}

const PAGES = [
  { icon: House, label: "Home" },
  { icon: FolderOpen, label: "Library" },
];
const SETTINGS = [
  { icon: SlidersHorizontal, label: "General" },
  { icon: CircleDot, label: "Recording" },
  { icon: History, label: "Clips" },
  { icon: AudioWaveform, label: "Audio" },
  { icon: Gauge, label: "Quality" },
  { icon: HardDrive, label: "Storage" },
  { icon: Keyboard, label: "Shortcuts" },
  { icon: Palette, label: "Appearance" },
  { icon: Cpu, label: "Advanced" },
  { icon: Info, label: "About" },
];

function Sidebar({ active }: { active: string }) {
  const item = (p: { icon: typeof House; label: string }) => (
    <span key={p.label} className={`zp-nav${p.label === active ? " on" : ""}`}>
      <p.icon size={15} />
      {p.label}
    </span>
  );
  return (
    <div className="zp-sidebar">
      {PAGES.map(item)}
      <span className="zp-navhead">SETTINGS</span>
      {SETTINGS.map(item)}
      <span className="zp-navver">Zapture {VERSION}</span>
    </div>
  );
}

function Toggle({ on }: { on: boolean }) {
  return <span className={`zp-toggle${on ? " on" : ""}`} aria-hidden="true" />;
}

/** Made-up captures, in colour: what a library of screenshots and clips looks like. */
export function Shot({ kind, label, meta }: { kind: "code" | "web" | "game" | "chart" | "chat" | "design"; label?: string; meta?: string }) {
  return (
    <div className="zp-shotcard">
      <div className={`zp-shot ${kind}`}>
        {kind === "code" && (
          <div className="s-code">
            {[
              ["k", 30, "f", 42],
              ["v", 22, "s", 50],
              ["k", 18, "n", 26],
              ["c", 60, "", 0],
              ["k", 26, "f", 34],
              ["v", 40, "s", 30],
            ].map(([a, w1, b, w2], i) => (
              <p key={i} style={{ paddingLeft: i % 3 ? 14 : 0 }}>
                <i className={String(a)} style={{ width: `${w1}%` }} />
                {b && <i className={String(b)} style={{ width: `${w2}%` }} />}
              </p>
            ))}
          </div>
        )}
        {kind === "web" && (
          <div className="s-web">
            <span className="bar" />
            <span className="hero" />
            <span className="l1" />
            <span className="l2" />
            <span className="btn" />
          </div>
        )}
        {kind === "game" && (
          <div className="s-game">
            <span className="sun" />
            <span className="hills" />
            <span className="play" />
          </div>
        )}
        {kind === "chart" && (
          <div className="s-chart">
            {[40, 62, 48, 80, 66, 92, 74].map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        )}
        {kind === "chat" && (
          <div className="s-chat">
            <i className="in" style={{ width: "58%" }} />
            <i className="out" style={{ width: "44%" }} />
            <i className="in" style={{ width: "66%" }} />
            <i className="out" style={{ width: "36%" }} />
          </div>
        )}
        {kind === "design" && (
          <div className="s-design">
            <span className="a" />
            <span className="b" />
            <span className="c" />
          </div>
        )}
      </div>
      {label && (
        <span className="zp-shotname">
          {label}
          {meta && <em>{meta}</em>}
        </span>
      )}
    </div>
  );
}

/** The Home page: greeting, the Capture card and recent captures. */
export function HomeMock({ recording = false }: { recording?: boolean }) {
  return (
    <AppWindow>
      <div className="zp-body">
        <Sidebar active="Home" />
        <div className="zp-main">
          <div className="zp-header">
            <h4>Good evening</h4>
            <span>{recording ? "Recording · 00:42" : "Ready when you are."}</span>
          </div>
          <span className="zp-grouphead">Capture</span>
          <div className="zp-card">
            <div className="zp-row">
              <span className="zp-seg">
                <b className="on">
                  <Monitor size={13} /> Display
                </b>
                <b>
                  <WindowIcon size={13} /> Window
                </b>
                <b>
                  <SquareDashed size={13} /> Region
                </b>
              </span>
              <span className="zp-combo">Display 1 · 2560 × 1440</span>
            </div>
            <div className="zp-row">
              <span className="zp-rowtext">
                <strong>System audio</strong>
                <span>Sound playing on this computer.</span>
              </span>
              {recording && <span className="zp-meter" style={{ "--lvl": "68%" } as CSSProperties} />}
              <Toggle on />
            </div>
            <div className="zp-row">
              <span className="zp-rowtext">
                <strong>Microphone</strong>
                <span>Your voice, mixed in or on its own track (see Audio settings).</span>
              </span>
              {recording && <span className="zp-meter b" style={{ "--lvl": "42%" } as CSSProperties} />}
              <Toggle on={recording} />
            </div>
            <div className="zp-row zp-actions">
              {recording ? (
                <>
                  <span className="zp-big record">
                    <Square size={13} fill="currentColor" /> Stop and save
                  </span>
                  <span className="zp-big">
                    <Pause size={14} /> Pause
                  </span>
                </>
              ) : (
                <>
                  <span className="zp-big primary">
                    <Circle size={13} fill="currentColor" /> Start recording
                  </span>
                  <span className="zp-big">
                    <Camera size={14} /> Screenshot
                  </span>
                  <span className="zp-big">
                    <SquareDashed size={14} /> Record an area
                  </span>
                </>
              )}
            </div>
            <span className="zp-hint">Win+Shift+S screenshot · Win+Shift+R record an area</span>
          </div>
          <div className="zp-recenthead">
            <span>Recent</span>
            <span className="zp-ghost">
              <FolderOpen size={13} /> View all
            </span>
          </div>
          <div className="zp-recent">
            <Shot kind="code" />
            <Shot kind="game" />
            <Shot kind="web" />
            <Shot kind="chart" />
          </div>
        </div>
      </div>
    </AppWindow>
  );
}

/** A made-up desktop: a wallpaper and a browser window, frozen when the selector opens. */
function Desktop() {
  return (
    <div className="zp-desktop" aria-hidden="true">
      <div className="zp-dwin">
        <div className="zp-dwin-bar">
          <span />
          <span />
          <span />
          <em />
        </div>
        <div className="zp-dwin-body">
          <div className="d-side">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="d-main">
            <span className="d-title" />
            <div className="d-cards">
              <span className="c1">
                <b>2,481</b>
              </span>
              <span className="c2">
                <b>94%</b>
              </span>
              <span className="c3">
                <b>+18%</b>
              </span>
            </div>
            <div className="d-chart">
              {[34, 50, 42, 66, 58, 80, 70, 92, 76, 88].map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const MODES = [SquareDashed, WindowIcon, Monitor, Lasso];

/** The region selector: frozen screen, purple selection with its size, the mode bar. */
export function RegionMock() {
  return (
    <div className="zp zp-region" role="img" aria-label="Zapture's region selector: an area of the screen selected, with its size shown">
      <Desktop />
      <div className="zp-shade" />
      <div className="zp-sel">
        <span className="zp-size">1280 × 720</span>
      </div>
      <MousePointer2 className="zp-cursor" size={18} />
      <div className="zp-float zp-modebar">
        {MODES.map((M, i) => (
          <span key={i} className={i === 0 ? "on" : ""}>
            <M size={15} />
          </span>
        ))}
        <i />
        <span>
          <Maximize size={15} />
        </span>
        <span>
          <MousePointer2 size={15} />
        </span>
        <span>
          <ZoomIn size={15} />
        </span>
        <i />
        <span>
          <X size={15} />
        </span>
      </div>
      <div className="zp-tip">Drag to select · Click a window · Scroll for part of a window · Esc to cancel</div>
    </div>
  );
}

const TOOLS = [MousePointer2, Pen, Highlighter, ArrowUpRight, Square, Type, Droplets, Grid3x3, Crop];
/** The editor's colour row, as in the app (src/ui/canvas.rs COLORS). */
const COLORS = ["#e5484d", "#ff9a4d", "#ffd43b", "#3fb27f", "#3b82f6", "#8b5cf6", "#ffffff", "#17171c"];

/** The editor: a marked-up capture, the tool bar and the properties row. */
export function EditorMock({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`zp zp-editor${compact ? " compact" : ""}`}>
      <div className="zp-canvas">
        <Desktop />
        <svg className="zp-ink" viewBox="0 0 600 340" preserveAspectRatio="none" aria-hidden="true">
          <rect className="draw" x="300" y="150" width="250" height="150" rx="6" />
          <path className="draw" d="M150 300 C 200 300, 250 280, 292 236" />
          <path className="draw head" d="M276 240 L 293 235 L 290 252" />
        </svg>
        <span className="zp-label">Sales are up 18%</span>
        <span className="zp-blur" />
        <span className="zp-zoom">200%</span>
      </div>
      <div className="zp-float zp-toolbar">
        <span className="zp-grip" aria-hidden="true" />
        {TOOLS.map((T, i) => (
          <span key={i} className={i === 3 ? "on" : ""}>
            <T size={15} />
          </span>
        ))}
        <i />
        <span>
          <Undo2 size={15} />
        </span>
        <span>
          <Redo2 size={15} />
        </span>
        <i />
        <span>
          <ScanText size={15} />
        </span>
        <span>
          <Pin size={15} />
        </span>
        <span>
          <Copy size={15} />
        </span>
        <span>
          <Save size={15} />
        </span>
      </div>
      {!compact && (
        <div className="zp-float zp-props">
          {COLORS.map((c, i) => (
            <span key={c} className={`zp-swatch${i === 0 ? " on" : ""}`} style={{ background: c }} />
          ))}
          <span className="zp-field mono">#E5484D</span>
          <i />
          <span className="zp-field">Sans</span>
          <span className="zp-field mono">24</span>
          <span className="zp-ico on">
            <Bold size={13} />
          </span>
          <span className="zp-ico on">
            <AlignLeft size={13} />
          </span>
          <span className="zp-ico">
            <AlignCenter size={13} />
          </span>
          <span className="zp-ico">
            <AlignRight size={13} />
          </span>
        </div>
      )}
    </div>
  );
}

/** The notification after a clip is saved. */
export function ClipToast({ style }: { style?: CSSProperties }) {
  return (
    <div className="zp zp-toast" style={style}>
      <span className="zp-toast-icon">
        <History size={16} />
      </span>
      <div>
        <strong>Clip saved</strong>
        <span>The last 30 seconds · Clip 2026-11-26 21-13-43.mp4</span>
      </div>
    </div>
  );
}

/** The recording card, with its level meters. */
export function RecordingCard({ style }: { style?: CSSProperties }) {
  return (
    <div className="zp zp-rec" style={style}>
      <span className="zp-recdot" />
      <div>
        <strong>00:42</strong>
        <span>Ctrl+Shift+R to stop</span>
      </div>
      <span className="zp-recmeters" aria-hidden="true">
        <i />
        <i />
      </span>
      <span className="zp-recbtn">
        <Pause size={14} />
      </span>
      <span className="zp-recbtn stop">
        <Square size={11} fill="currentColor" />
      </span>
    </div>
  );
}

/** The Library page, searched and filtered. */
export function LibraryMock() {
  const items: { kind: "code" | "web" | "game" | "chart" | "chat" | "design"; name: string; meta: string; video?: boolean }[] = [
    { kind: "web", name: "Screenshot 2026-11-26 login page.png", meta: "PNG · 412 KB" },
    { kind: "game", name: "Clip 2026-11-25 last round.mp4", meta: "0:30 · 18 MB", video: true },
    { kind: "chat", name: "Screenshot 2026-11-25 login error.png", meta: "PNG · 96 KB" },
    { kind: "code", name: "Recording 2026-11-24 login fix.mp4", meta: "4:12 · 64 MB", video: true },
    { kind: "design", name: "Screenshot 2026-11-23 login mockup.webp", meta: "WebP · 230 KB" },
    { kind: "chart", name: "Screenshot 2026-11-22 login stats.png", meta: "PNG · 188 KB" },
  ];
  return (
    <AppWindow>
      <div className="zp-body">
        <Sidebar active="Library" />
        <div className="zp-main">
          <div className="zp-header">
            <h4>Library</h4>
            <span>Everything saved in your output folder.</span>
          </div>
          <div className="zp-filters">
            <span className="zp-chips">
              <b className="on">All</b>
              <b>Videos</b>
              <b>Images</b>
              <b>Clips</b>
            </span>
          </div>
          <div className="zp-filters">
            <span className="zp-search">
              <Search size={13} /> login<b className="zp-caret" />
            </span>
            <span className="zp-combo">Past 7 days</span>
            <span className="zp-combo">All formats</span>
          </div>
          <div className="zp-grid">
            {items.map((it) => (
              <div key={it.name} className="zp-libcard">
                <Shot kind={it.kind} />
                <span className="zp-shotname">
                  {it.video ? <Film size={11} /> : <Image size={11} />} {it.name}
                  <em>{it.meta}</em>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppWindow>
  );
}

/** Copy text: words found in a capture, copied. */
export function OcrMock() {
  return (
    <div className="zp zp-ocr">
      <div className="zp-ocr-src">
        <strong>Something went wrong</strong>
        <span>Error 0x80070005: Access is denied.</span>
      </div>
      <span className="zp-ocr-go" aria-hidden="true">
        <ScanText size={16} />
      </span>
      <div className="zp-ocr-out">
        <code>
          Something went wrong
          <br />
          Error 0x80070005: Access is denied.
        </code>
        <em>Text copied · 2 lines</em>
      </div>
    </div>
  );
}

/** A capture pinned above other windows. */
export function PinMock() {
  return (
    <div className="zp zp-pin">
      <div className="zp-pin-back">
        <Desktop />
      </div>
      <div className="zp-pin-front">
        <Shot kind="chart" />
        <span className="zp-pin-tag">
          <Pin size={11} /> Pinned
        </span>
      </div>
    </div>
  );
}

/** The tray icon's menu. */
export function TrayMock() {
  const rows: (string | [string, string?, string?])[] = [
    ["Open Zapture", "", "b"],
    "-",
    ["Take a screenshot", "Win+Shift+S"],
    ["Screenshot of", "›"],
    ["Record the screen", "Win+Shift+R"],
    "-",
    ["Save the last 30 s", "Shift+Win+Q"],
    ["Clipping", "", "✓"],
    "-",
    ["Open folder", "›"],
    ["Settings"],
    "-",
    ["Quit Zapture"],
  ];
  return (
    <div className="zp zp-tray" role="img" aria-label="Zapture's tray menu">
      {rows.map((r, i) =>
        r === "-" ? (
          <i key={i} />
        ) : (
          <span key={i} className={Array.isArray(r) && r[2] === "b" ? "b" : ""}>
            <em>{Array.isArray(r) && r[2] === "✓" ? "✓" : ""}</em>
            {Array.isArray(r) ? r[0] : r}
            <small>{Array.isArray(r) ? r[1] : ""}</small>
          </span>
        ),
      )}
    </div>
  );
}
