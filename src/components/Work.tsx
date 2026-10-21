"use client";

import { useState } from "react";
import Image from "next/image";
import { experience } from "@/data/profile";
import { renderBold } from "@/lib/text";
import Reveal from "@/components/Reveal";

export default function Work() {
  const [openCompany, setOpenCompany] = useState<string | null>(null);

  return (
    <section id="experience" style={{ paddingBlock: "var(--gap-section)", paddingInline: "var(--margin-outer)" }}>
      <div className="mx-auto flex max-w-5xl flex-col gap-10 sm:flex-row sm:items-end">
        <Reveal as="div" className="relative hidden w-[18%] shrink-0 overflow-hidden sm:block" style={{ aspectRatio: "3 / 4" }}>
          <Image
            src="/img/account-book-ledger.webp"
            alt="A 19th-century marbled account-book cover, standing in for the ledger"
            fill
            sizes="18vw"
            className="duotone object-cover"
          />
        </Reveal>

        <div className="flex-1">
        <Reveal>
          <h2 className="font-semibold" style={{ fontSize: "var(--step-head)" }}>
            Where I&rsquo;ve worked
          </h2>
        </Reveal>

        <div className="mt-8" style={{ maxWidth: 680 }}>
          {experience.map((entry, i) => {
            const isOpen = openCompany === entry.company;
            return (
              <Reveal key={entry.company} delay={i * 90} className="block">
                <button
                  type="button"
                  onClick={() => setOpenCompany(isOpen ? null : entry.company)}
                  aria-expanded={isOpen}
                  className="flex min-h-11 w-full cursor-pointer flex-wrap items-baseline gap-x-4 gap-y-2 py-5 text-left transition-opacity hover:opacity-70"
                >
                  <span className="font-semibold" style={{ fontSize: "var(--step-body)", flex: "0 0 auto" }}>
                    {entry.company}
                  </span>
                  <span className="flex-1" style={{ fontSize: "var(--step-small)", color: "var(--muted)" }}>
                    {entry.highlight}
                  </span>
                  <span className="shrink-0 tabular-nums" style={{ fontSize: "var(--step-small)", color: "var(--muted)" }}>
                    {entry.years}
                  </span>
                  <span
                    aria-hidden
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-medium"
                    style={{ fontSize: "var(--step-small)", background: "var(--surface-strong)" }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-8 pl-0 pt-2" style={{ maxWidth: "62ch" }}>
                    {entry.roles.map((role) => (
                      <div key={role.role} className="mb-5">
                        <p className="font-medium" style={{ fontSize: "var(--step-small)" }}>
                          {role.role} · {role.duration}
                        </p>

                        {role.techStack && (
                          <p className="mt-3" style={{ fontSize: "var(--step-small)", color: "var(--muted)" }}>
                            {role.techStack.join(" · ")}
                          </p>
                        )}

                        {role.achievements && role.achievements.length > 0 && (
                          <ul
                            className="mt-3 list-disc space-y-2"
                            style={{ fontSize: "var(--step-body)", paddingLeft: "1.25em" }}
                          >
                            {role.achievements.map((line) => (
                              <li key={line}>{renderBold(line)}</li>
                            ))}
                          </ul>
                        )}

                        <ul
                          className="mt-3 list-disc space-y-2"
                          style={{ fontSize: "var(--step-body)", color: "var(--muted)", paddingLeft: "1.25em" }}
                        >
                          {role.description.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
