"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { work } from "@/data/profile";
import Reveal from "@/components/Reveal";

const tints = ["#1d1d22", "#14202e", "#2a1d12", "#13261c", "#22142a"];

export default function Projects() {
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setPage(Number((entry.target as HTMLElement).dataset.index) + 1);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    cards.current.forEach((c) => c && observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="relative">
      <div className="grid min-h-[80svh] place-items-center text-center" style={{ paddingInline: "var(--margin-outer)" }}>
        <div>
          <Reveal as="h2" className="mx-auto max-w-[20ch] text-[clamp(2.25rem,5.5vw,4.75rem)] font-medium leading-[1.05] tracking-[-0.04em] text-muted">
            Work that runs real stores, payrolls and tax filings
          </Reveal>
          <Reveal delay={200} className="mt-14 flex flex-col items-center gap-4">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.5em] text-dim">Scroll to explore</span>
            <span className="h-10 w-px animate-pulse bg-gradient-to-b from-dim to-transparent" />
          </Reveal>
        </div>
      </div>

      <div className="relative">
        {work.map((item, i) => (
          <div
            key={item.title}
            ref={(el) => {
              cards.current[i] = el;
            }}
            data-index={i}
            className="sticky top-0 grid h-svh place-items-center overflow-hidden"
            style={{ background: tints[i % tints.length], paddingInline: "var(--margin-outer)" }}
          >
            {/* blurred backdrop */}
            {item.image ? (
              <Image src={item.image} alt="" fill sizes="100vw" className="scale-110 object-cover opacity-40 blur-2xl" aria-hidden />
            ) : (
              <span aria-hidden className="display absolute inset-0 grid place-items-center text-[38vw] text-white/[0.04]">
                {item.visual}
              </span>
            )}

            <article className="relative grid w-full max-w-[1230px] gap-6 bg-ink p-6 text-bg shadow-2xl sm:p-10 md:grid-cols-[1fr_1.15fr_1fr] md:p-4 md:pl-10 md:pr-10">
              <div className="flex flex-col justify-between gap-4 md:py-6">
                <span className="text-xs font-black">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">{item.category}</span>
                <span className="text-xs tracking-[0.12em] text-neutral-400">{item.summary}</span>
              </div>

              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100 md:aspect-auto md:min-h-[230px]">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? ""}
                    fill
                    sizes="(min-width: 768px) 440px, 90vw"
                    className="object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center bg-neutral-950">
                    <span className="display text-[clamp(3.5rem,8vw,7rem)] text-ink">{item.visual}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between gap-4 md:items-end md:py-6 md:text-right">
                <h3 className="text-2xl uppercase leading-tight tracking-tight">{item.title}</h3>
                <span className="text-[11px] font-bold tracking-[0.2em] text-neutral-500">{item.year}</span>
                <p className="text-sm leading-relaxed text-neutral-600 md:max-w-[30ch]">{item.detail}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start border-b border-neutral-400 text-xs font-semibold uppercase md:self-end"
                  >
                    View on GitHub ↗
                  </a>
                )}
              </div>
            </article>
          </div>
        ))}

        {/* page indicator, pinned while the stack is on screen */}
        <div className="pointer-events-none absolute inset-0 z-20">
          <div className="sticky top-[calc(100svh-4.5rem)] hidden items-center gap-6 sm:flex" style={{ paddingInline: "var(--margin-outer)" }}>
            <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-dim">Page</span>
            <span className="relative h-px w-36 bg-white/15">
              <span
                className="absolute inset-y-0 left-0 bg-ink transition-[width] duration-500"
                style={{ width: `${(page / work.length) * 100}%` }}
              />
            </span>
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-ink">
              {page} / {work.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
