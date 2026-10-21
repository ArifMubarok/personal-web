"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

export default function Interstitial() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = (reduceMotion: boolean) => {
      if (reduceMotion) video.pause();
      else video.play().catch(() => {});
    };
    sync(query.matches);
    const onChange = (e: MediaQueryListEvent) => sync(e.matches);
    query.addEventListener("change", onChange);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      query.removeEventListener("change", onChange);
    };
  }, []);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  }

  return (
    <Reveal as="div" className="relative h-[48svh] w-full overflow-hidden sm:h-[60svh]">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster="/img/hunt-and-peck-typing-monkeytype-benchmark-poster.webp"
        aria-hidden="true"
        className="duotone h-full w-full object-cover"
      >
        <source src="/img/hunt-and-peck-typing-monkeytype-benchmark.webm" type="video/webm" />
      </video>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4" style={{ padding: "var(--margin-outer)" }}>
        <p
          className="inline-block px-3 py-2"
          style={{ fontSize: "var(--step-small)", color: "var(--accent-ink)", background: "var(--ink)" }}
        >
          Every record still gets processed, one field at a time, just faster now.
        </p>
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause background video" : "Play background video"}
          className="flex h-11 w-11 shrink-0 items-center justify-center transition-opacity hover:opacity-85"
          style={{ background: "var(--ink)", color: "var(--accent-ink)" }}
        >
          {playing ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M7 5l12 7-12 7z" />
            </svg>
          )}
        </button>
      </div>
    </Reveal>
  );
}
