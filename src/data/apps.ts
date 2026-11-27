import type { LucideIcon } from "lucide-react";
import {
  Camera,
  Clapperboard,
  Command,
  FolderOpen,
  History,
  Keyboard,
  Lock,
  Palette,
  PenLine,
  Pin,
  ScanText,
  Search,
  Sparkles,
  Type,
  Video,
} from "lucide-react";

export type AppStatus = "Available" | "In development" | "Coming soon";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Shortcut {
  keys: string[];
  action: string;
}

export interface AppInfo {
  slug: string;
  name: string;
  category: string;
  status: AppStatus;
  /** One line, used on cards. */
  tagline: string;
  /** A short paragraph, used in the product hero. */
  description: string;
  icon?: string;
  initials: string;
  seoTitle: string;
  seoDescription: string;
  features: Feature[];
  shortcuts?: Shortcut[];
  requirements?: string[];
}

export const CONTACT_EMAIL = "contact.sightie@gmail.com";
export const RELEASES_URL = "https://github.com/sightieS/zapture-updates/releases";
export const LATEST_RELEASE_API = "https://api.github.com/repos/sightieS/zapture-updates/releases/latest";

export const apps: AppInfo[] = [
  {
    slug: "zapture",
    name: "Zapture",
    category: "Screen capture",
    status: "Available",
    tagline: "Screenshots, screen recording and instant clips for Windows, in one fast native app.",
    description:
      "Capture a region, a window or the whole screen. Mark it up, record with system audio and microphone, or save the last few minutes you just played. Everything stays on your PC.",
    icon: "/zapture/zapture-icon.webp",
    initials: "Z",
    seoTitle: "Zapture: Screenshots & Screen Recording for Windows",
    seoDescription:
      "Zapture by Korven is a fast, native Windows app for screenshots, screen recording and instant clips, with a built-in editor and one-click export for Discord.",
    features: [
      {
        icon: Camera,
        title: "Precise screenshots",
        description:
          "Freeze the screen, then drag a region, click a window or press F for the whole monitor. Copy, save or open it in the editor.",
      },
      {
        icon: PenLine,
        title: "Mark up in seconds",
        description:
          "Pen, highlighter, arrows, shapes, blur and pixelate at the strength you choose, any HEX colour, saved presets, and undo and redo. Zoom in close for pixel-level detail.",
      },
      {
        icon: Type,
        title: "A proper text tool",
        description:
          "Add text, then move, resize and restyle it any time: font, size, weight, colour, alignment, a background box or an outline.",
      },
      {
        icon: ScanText,
        title: "Copy text from captures",
        description:
          "Pull the words out of any screenshot, from error dialogs to slides, using the text recognition built into Windows. Nothing is sent online.",
      },
      {
        icon: Pin,
        title: "Pin to screen",
        description:
          "Keep a capture floating above your other windows while you work. Drag it, scroll to zoom, copy or save it, double-click to close.",
      },
      {
        icon: Video,
        title: "Screen recording",
        description:
          "Record a display, a window or a region with system audio and microphone, using your GPU's encoder when available. Live level meters show sound is being captured, and you can pause any time.",
      },
      {
        icon: History,
        title: "Instant clips",
        description:
          "Turn on Clipping and press Win+Shift+Q to save the last 15 seconds to 5 minutes. The clip ends at the moment you pressed, with sound in sync.",
      },
      {
        icon: Clapperboard,
        title: "Video editor & export",
        description:
          "Trim, split and cut, then export MP4, WebM, GIF or MP3. “Fit under 20 MB” makes a file ready to drop into Discord. Screenshots save as PNG, JPEG or WebP.",
      },
      {
        icon: Keyboard,
        title: "Shortcuts your way",
        description:
          "Set any key or combination, including Win keys, Print Screen, the numpad and media keys. Conflicts are caught before they happen.",
      },
      {
        icon: FolderOpen,
        title: "A searchable library",
        description:
          "Every screenshot, recording and clip in one place. Search by name and filter by date and format, then select several at once.",
      },
      {
        icon: Palette,
        title: "Make it yours",
        description:
          "Themes, accent colours, corner style, density and a compact sidebar, so Zapture fits the way you work.",
      },
      {
        icon: Lock,
        title: "Private by default",
        description:
          "No account and no telemetry. Your captures are saved to your own folders and never uploaded to Korven.",
      },
    ],
    shortcuts: [
      { keys: ["Ctrl", "Shift", "S"], action: "Take a screenshot" },
      { keys: ["Ctrl", "Shift", "R"], action: "Start or stop recording" },
      { keys: ["Ctrl", "Shift", "P"], action: "Pause or resume recording" },
      { keys: ["Win", "Shift", "Q"], action: "Save a clip of the last few minutes" },
    ],
    requirements: [
      "Windows 10 (version 1803 or later) or Windows 11, 64-bit",
      "FFmpeg is downloaded automatically when it’s first needed",
      "A GPU with a hardware video encoder is used when available",
    ],
  },
  {
    slug: "textura",
    name: "Textura",
    category: "Notes",
    status: "Coming soon",
    tagline: "A calm, focused place for your notes, ideas and everyday writing.",
    description:
      "Textura is an upcoming notes app for Windows built around simplicity and a beautiful writing experience. Create, organise and revisit your notes without the clutter.",
    initials: "T",
    seoTitle: "Textura: Notes for Windows",
    seoDescription:
      "Textura by Korven is an upcoming Windows notes application focused on simplicity, organisation and a beautiful writing experience.",
    features: [
      {
        icon: PenLine,
        title: "Distraction-free writing",
        description: "A clean, quiet editor that gets out of the way so you can focus on your words.",
      },
      {
        icon: Search,
        title: "Find anything",
        description: "Organise notes your way and get back to any of them in moments.",
      },
      {
        icon: Sparkles,
        title: "Thoughtful design",
        description: "Considered typography and spacing that make long notes comfortable to read.",
      },
      {
        icon: Command,
        title: "Built for Windows",
        description: "A native desktop app that feels at home on Windows, with keyboard-first controls.",
      },
    ],
  },
];

export function findApp(slug: string | undefined): AppInfo | undefined {
  return apps.find((a) => a.slug === slug);
}

export function statusClass(status: AppStatus) {
  return status.toLowerCase().replace(/\s+/g, "-");
}
