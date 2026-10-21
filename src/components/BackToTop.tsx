"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@/components/Icons";

export default function BackToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      tabIndex={shown ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 grid size-14 place-items-center rounded-full bg-ink text-bg shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-1 sm:bottom-10 sm:right-10 ${
        shown ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUpIcon className="size-5" />
    </a>
  );
}
