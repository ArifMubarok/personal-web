import { features } from "@/data/profile";
import Reveal from "@/components/Reveal";

export default function Features() {
  return (
    <section aria-label="What I do" className="py-24 sm:py-36" style={{ paddingInline: "var(--margin-outer)" }}>
      <div className="mx-auto max-w-[1200px] space-y-32 sm:space-y-48">
        {features.map((feature, i) => {
          const flip = i % 2 === 1;
          return (
            <div key={feature.title} className="grid items-center gap-16 md:grid-cols-2">
              <div className={`cube-scene grid place-items-center py-10 ${flip ? "md:order-2" : ""}`} aria-hidden>
                <div className="cube" style={{ animationDelay: `${-i * 5}s` }}>
                  {feature.faces.map((face) => (
                    <div key={face.label} className="cube-face" style={{ backgroundColor: face.color }}>
                      <span className="rounded-lg bg-black px-3 py-1.5 text-sm font-black tracking-widest text-ink sm:text-base">
                        {face.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Reveal className="flex items-center gap-4">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.5em] text-dim">
                    Feature — {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-12 bg-line" />
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="mt-6 text-[clamp(2.5rem,5vw,4rem)] font-black uppercase leading-[0.95] tracking-[-0.05em]">
                    {feature.title.split(" ").map((w) => (
                      <span key={w} className="block">
                        {w}
                      </span>
                    ))}
                  </h2>
                </Reveal>
                <Reveal as="p" delay={160} className="mt-8 max-w-[44ch] text-lg leading-relaxed text-muted sm:text-xl">
                  {feature.body}
                </Reveal>
                <Reveal as="ul" delay={240} className="mt-10 flex max-w-[480px] flex-wrap gap-3">
                  {feature.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-xl border border-line bg-surface px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors hover:border-ink/40"
                    >
                      {tag}
                    </li>
                  ))}
                </Reveal>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
