import { experience } from "@/data/profile";
import { renderBold } from "@/lib/text";
import Reveal from "@/components/Reveal";

const roles = experience.flatMap((entry) =>
  entry.roles.map((role) => ({ ...role, company: entry.company, location: entry.location })),
);

const colStart = ["lg:col-start-1", "lg:col-start-2", "lg:col-start-3"];

function RoleCard({ role }: { role: (typeof roles)[number] }) {
  return (
    <div>
      <span className="inline-block rounded-md border border-line bg-surface-2 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted">
        {role.duration}
      </span>
      <article className="mt-3 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-white/20">
        <h3 className="text-xl font-bold tracking-tight">{role.role}</h3>
        <p className="mt-1 text-sm font-semibold text-muted">
          {role.company} · {role.location}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-dim">{role.description[0]}</p>
        {role.techStack && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {role.techStack.map((t) => (
              <li
                key={t}
                className="rounded-full border border-line px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        )}
        {(role.achievements || role.description.length > 1) && (
          <details className="group mt-5 border-t border-line pt-4">
            <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-bold uppercase tracking-widest [&::-webkit-details-marker]:hidden">
              View details
              <span aria-hidden className="text-base transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              {(role.achievements ?? role.description.slice(1)).map((a) => (
                <li key={a}>{renderBold(a)}</li>
              ))}
            </ul>
          </details>
        )}
      </article>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 sm:py-40" style={{ paddingInline: "var(--margin-outer)" }}>
      <div className="mx-auto max-w-[1340px]">
        <div className="text-center">
          <Reveal as="h2" className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-[-0.05em]">
            Professional Journey
          </Reveal>
          <Reveal as="p" delay={100} className="mx-auto mt-4 max-w-[48ch] text-muted">
            Roles, responsibilities and the work shipped along the way, from a POS internship to leading a team.
          </Reveal>
        </div>

        {/* Desktop: cards alternate above and below one rail. Phones: a plain vertical list. */}
        <div className="relative mt-20">
          <span
            aria-hidden
            className="absolute inset-x-0 top-1/2 hidden h-px bg-gradient-to-r from-violet-500 via-blue-500 to-sky-400 lg:block"
          />
          <ol className="grid gap-8 lg:grid-cols-3 lg:grid-rows-[1fr_5rem_1fr] lg:gap-x-8 lg:gap-y-0">
            {roles.map((role, i) => {
              const above = i % 2 === 0;
              return (
                <li
                  key={`${role.company}-${role.role}`}
                  className={`relative ${colStart[i % 3]} ${above ? "lg:row-start-1 lg:self-end" : "lg:row-start-3 lg:self-start"}`}
                >
                  <Reveal delay={i * 120}>
                    <RoleCard role={role} />
                  </Reveal>
                  <span
                    aria-hidden
                    className={`absolute left-8 hidden size-4 rounded-full border-4 border-bg bg-ink lg:block ${
                      above ? "-bottom-[2.5rem]" : "-top-[2.5rem]"
                    }`}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
