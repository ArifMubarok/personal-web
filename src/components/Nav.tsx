"use client";

import { useEffect, useRef, useState } from "react";
import { socials } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function jakartaTime() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

export default function Nav() {
  const clock = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState("#top");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const tick = () => {
      if (clock.current) clock.current.textContent = jakartaTime();
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
      style={{
        paddingInline: "var(--margin-outer)",
        background: scrolled ? "linear-gradient(to bottom, rgba(0,0,0,0.85), transparent)" : "transparent",
      }}
    >
      <div className="flex h-20 items-center justify-between gap-4">
        <span
          className="w-24 font-mono text-lg font-bold tabular-nums tracking-widest text-ink/90 sm:text-[22px]"
          aria-label="Local time in Jakarta"
          ref={clock}
        >
          --:--:--
        </span>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-line/60 bg-black/50 p-1 backdrop-blur-md">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block rounded-full px-5 py-2 text-sm font-bold transition-colors ${
                    active === link.href ? "bg-surface-2 text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-full bg-surface-2/80 text-ink transition-colors hover:bg-ink hover:text-bg"
          >
            <GithubIcon className="size-[18px]" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid size-10 place-items-center rounded-full bg-surface-2/80 text-ink transition-colors hover:bg-ink hover:text-bg"
          >
            <LinkedinIcon className="size-[18px]" />
          </a>
        </div>
      </div>
    </header>
  );
}
