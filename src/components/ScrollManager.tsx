import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the top on a new page, or to the `#section` in the address (e.g. /support#contact
 * opened from Zapture). Pages load lazily, so the target is looked for until it appears.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let timer = 0;
    const find = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: tries === 0 ? "smooth" : "auto", block: "start" });
        return;
      }
      if (tries++ < 40) timer = window.setTimeout(find, 50);
    };
    find();
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
