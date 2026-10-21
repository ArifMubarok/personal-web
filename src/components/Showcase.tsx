"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/profile";
import Reveal from "@/components/Reveal";

const tabs = ["Overview", "Contributions", "Stack"] as const;

export default function Showcase() {
  const project = projects[0];
  const [tab, setTab] = useState<(typeof tabs)[number]>("Overview");

  return (
    <section id="project" className="flex flex-col sm:min-h-[88svh] sm:flex-row">
      <Reveal
        as="div"
        className="relative aspect-square w-full overflow-hidden sm:aspect-auto sm:w-1/2"
        style={{ background: "var(--ink)" }}
      >
        <Image
          src="/img/servers-in-a-rack.webp"
          alt="A server rack, representative of the infrastructure Arif provisions and maintains"
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="duotone object-cover"
        />
      </Reveal>

      <div
        className="flex w-full flex-col justify-between sm:w-1/2"
        style={{ padding: "48px var(--margin-outer)", background: "var(--surface)" }}
      >
        <Reveal as="div" className="flex gap-6">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`min-h-11 min-w-11 px-1 transition-opacity ${tab === t ? "opacity-100" : "opacity-40 hover:opacity-80"}`}
              style={{
                fontSize: "var(--step-small)",
                fontWeight: tab === t ? 600 : 400,
              }}
            >
              {t}
            </button>
          ))}
        </Reveal>

        <Reveal delay={100} as="div" className="mt-10 sm:mt-0">
          <h2 className="font-semibold" style={{ fontSize: "var(--step-head)" }}>
            {project.name.split(" (")[0]}
          </h2>

          {tab === "Overview" && (
            <p className="mt-5" style={{ fontSize: "var(--step-body)", maxWidth: "34ch" }}>
              {project.description}
            </p>
          )}
          {tab === "Contributions" && (
            <ul className="mt-5 list-disc space-y-2 pl-5" style={{ fontSize: "var(--step-body)", maxWidth: "40ch" }}>
              {project.contributions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          )}
          {tab === "Stack" && (
            <p className="mt-5" style={{ fontSize: "var(--step-body)", maxWidth: "34ch" }}>
              {project.stack.join(" · ")}
            </p>
          )}
        </Reveal>

        <Reveal delay={200} as="div" className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[72px] flex-1 items-center justify-center text-center font-medium transition-opacity hover:opacity-85"
            style={{ background: "var(--ink)", color: "var(--accent-ink)", fontSize: "var(--step-body)" }}
          >
            View repo ↗
          </a>
          <div
            className="flex min-h-[72px] flex-1 items-center justify-center px-4 text-center"
            style={{ background: "var(--surface-strong)", fontSize: "var(--step-small)", color: "var(--ink)" }}
          >
            {project.role}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
