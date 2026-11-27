import type { ReactNode, PointerEvent } from "react";

/** A card whose border and surface light up softly under the pointer. */
export default function Spotlight({ children, className = "" }: { children: ReactNode; className?: string }) {
  const move = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div className={`spot ${className}`} onPointerMove={move}>
      {children}
    </div>
  );
}
