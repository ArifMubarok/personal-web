"use client";

import { useEffect, useRef } from "react";

/** A giant word that slides sideways as the band scrolls through the viewport. */
export default function WordBand({ text }: { text: string }) {
  const band = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = band.current;
    const line = track.current;
    if (!el || !line || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const progress = 1 - (rect.bottom / (window.innerHeight + rect.height));
      const travel = line.scrollWidth - el.clientWidth;
      line.style.transform = `translate3d(${-Math.max(0, Math.min(1, progress)) * travel}px,0,0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="py-10" style={{ paddingInline: "var(--margin-outer)" }} aria-hidden>
      <div ref={band} className="overflow-hidden rounded-[28px] bg-surface-2 py-16 sm:py-28">
        <div ref={track} className="display flex w-max items-center gap-[0.3em] whitespace-nowrap text-[clamp(5rem,16vw,15rem)] uppercase text-[#b3b3b3] will-change-transform">
          {[0, 1, 2].map((n) => (
            <span key={n} className="flex items-center gap-[0.3em]">
              {text}
              <span className="inline-block size-[0.7em] rounded-full bg-[#8fae3c]" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
