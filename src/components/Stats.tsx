import { stats } from "@/data/profile";
import Reveal from "@/components/Reveal";
import BatchDemo from "@/components/BatchDemo";

function splitValue(value: string): [string, string] {
  const match = value.match(/^([\d,]+)(.*)$/);
  if (!match) return [value, ""];
  return [match[1], match[2]];
}

export default function Stats() {
  return (
    <section id="numbers" style={{ paddingBlock: "var(--gap-section)", paddingInline: "var(--margin-outer)" }}>
      <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-12 sm:gap-6">
        <div className="sm:col-span-5">
          <Reveal>
            <h2 className="font-semibold" style={{ fontSize: "var(--step-head)", lineHeight: 1.1 }}>
              <span style={{ color: "var(--muted)" }}>Proof,</span>
              <br />
              in numbers
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <BatchDemo />
          </Reveal>
        </div>

        <div className="sm:col-span-1" />

        <div className="sm:col-span-6">
          {stats.map((stat, i) => {
            const [whole, rest] = splitValue(stat.value);
            return (
              <Reveal key={stat.caption} delay={160 + i * 90} className="block">
                <div className="py-5">
                  <div className="flex min-w-0 items-baseline">
                    <span
                      className="shrink-0 text-right font-semibold tabular-nums"
                      style={{ fontSize: "var(--step-figure)", lineHeight: 1, width: "5ch" }}
                    >
                      {whole}
                    </span>
                    <span
                      className="min-w-0 text-left font-semibold tabular-nums"
                      style={{ fontSize: rest.length > 2 ? "var(--step-head)" : "var(--step-figure)", lineHeight: 1 }}
                    >
                      {rest}
                    </span>
                  </div>
                  <p className="mt-2" style={{ fontSize: "var(--step-body)", color: "var(--muted)" }}>
                    {stat.caption}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
