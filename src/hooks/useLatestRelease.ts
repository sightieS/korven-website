import { useEffect, useState } from "react";

import { LATEST_RELEASE_API } from "../data/apps";

interface GitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  html_url: string;
  assets: { name: string; size: number; browser_download_url: string }[];
}

export interface Release {
  version: string;
  date: string;
  notes: string;
  downloadUrl: string;
  fileName: string;
  fileSize: number;
  releaseUrl: string;
}

export type ReleaseState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "ready"; release: Release }
  | { kind: "error" };

/** The latest Zapture release on GitHub with its Windows installer, when `enabled`. */
export function useLatestRelease(enabled: boolean): ReleaseState {
  const [state, setState] = useState<ReleaseState>({ kind: enabled ? "loading" : "idle" });

  useEffect(() => {
    if (!enabled) {
      setState({ kind: "idle" });
      return;
    }
    const controller = new AbortController();
    setState({ kind: "loading" });

    (async () => {
      try {
        const response = await fetch(LATEST_RELEASE_API, {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github+json" },
        });
        if (!response.ok) throw new Error(`GitHub answered ${response.status}`);
        const data: GitHubRelease = await response.json();
        const installer = data.assets.find((a) => a.name.toLowerCase().endsWith(".exe"));
        if (!installer) throw new Error("The latest release has no Windows installer.");
        setState({
          kind: "ready",
          release: {
            version: data.tag_name || data.name,
            date: data.published_at,
            notes: data.body?.trim() || "No release notes were provided.",
            downloadUrl: installer.browser_download_url,
            fileName: installer.name,
            fileSize: installer.size,
            releaseUrl: data.html_url,
          },
        });
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        console.warn("Zapture release:", error);
        setState({ kind: "error" });
      }
    })();

    return () => controller.abort();
  }, [enabled]);

  return state;
}

export function formatFileSize(bytes: number) {
  return bytes < 1024 * 1024 ? `${(bytes / 1024).toFixed(1)} KB` : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
