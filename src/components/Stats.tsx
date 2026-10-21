import { headlineStats, stats } from "@/data/profile";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

const details = stats.filter((s) => !s.value.includes("/"));

export default function Stats() {
  return (
    <section
      id="numbers"
      className="relative z-10 -mt-10 rounded-t-[48px] border-t border-line/70 bg-bg py-28 shadow-[0_-30px_60px_rgba(0,0,0,0.8)] sm:rounded-t-[80px] sm:py-36"
      style={{ paddingInline: "var(--margin-outer)" }}
    >
      <div className="mx-auto max-w-[1100px] text-center">
        <Reveal className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface-2/60 px-4 py-1.5">
          <span className="pulse size-2 rounded-full bg-green-500" />
          <span className="text-xs font-semibold uppercase tracking-[0.1em]">Professional statistics</span>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mx-auto mt-6 max-w-[22ch] text-[clamp(2rem,5vw,4rem)] font-black leading-[1.1] tracking-[-0.06em]">
            Code that ships. Systems that scale. One engineer, and the numbers behind the work.
          </h2>
        </Reveal>

        <Reveal
          delay={200}
          className="mt-14 grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-surface-2/70 to-surface md:grid-cols-4"
        >
          {headlineStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-4 py-8 ${i % 2 === 1 ? "border-l border-dashed border-line" : ""} ${
                i > 1 ? "border-t border-dashed border-line md:border-t-0" : ""
              } ${i === 2 ? "md:border-l" : ""}`}
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">{stat.label}</p>
              <p className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                <CountUp value={stat.value} decimals={stat.decimals} />
                <span className="text-xl font-bold sm:text-2xl">{stat.suffix}</span>
              </p>
            </div>
          ))}
        </Reveal>

        <ul className="mt-6 grid gap-3 text-left sm:grid-cols-2">
          {details.map((s, i) => (
            <Reveal as="li" key={s.caption} delay={260 + i * 80} className="rounded-2xl border border-line/70 bg-surface p-6">
              <p className="text-2xl font-black tracking-tight">{s.value}</p>
              <p className="mt-1 text-sm leading-relaxed text-dim">{s.caption}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
