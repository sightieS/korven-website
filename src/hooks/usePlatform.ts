import { useState } from "react";

type UAData = { platform?: string; mobile?: boolean };

/**
 * Whether this browser is running on a Windows PC, the only place Zapture runs.
 * Uses User-Agent Client Hints where the browser has them (Chromium), otherwise the user agent.
 * Phones, tablets, Macs, Linux, ChromeOS, Windows Phone and Xbox all count as "not Windows".
 */
export function detectWindows(): boolean {
  if (typeof navigator === "undefined") return true;
  const hints = (navigator as Navigator & { userAgentData?: UAData }).userAgentData;
  if (hints?.platform) return hints.platform === "Windows" && !hints.mobile;
  const ua = navigator.userAgent || "";
  return /Windows NT/i.test(ua) && !/Windows Phone|Xbox|Mobile/i.test(ua);
}

/** `detectWindows`, worked out once per page. */
export function useIsWindows(): boolean {
  const [windows] = useState(detectWindows);
  return windows;
}
