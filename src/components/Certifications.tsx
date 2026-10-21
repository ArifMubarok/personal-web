import { certifications, education } from "@/data/profile";
import Reveal from "@/components/Reveal";

const issuerTone: Record<string, string> = {
  Udemy: "#a435f0",
  Sololearn: "#149ef2",
  "Dicoding Indonesia": "#2d3e50",
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 sm:py-40" style={{ paddingInline: "var(--margin-outer)" }}>
      <div className="mx-auto max-w-[1340px]">
        <div className="text-center">
          <Reveal as="p" className="eyebrow text-dim">
            Certifications & achievements
          </Reveal>
          <Reveal as="h2" delay={80} className="mx-auto mt-5 max-w-[18ch] text-[clamp(2.25rem,5vw,4.25rem)] font-black leading-[1.02] tracking-[-0.05em]">
            Validating the craft, <span className="font-serif font-normal italic tracking-[-0.02em] text-muted">one course at a time.</span>
          </Reveal>
          <Reveal as="p" delay={160} className="mx-auto mt-5 max-w-[50ch] text-muted">
            Certifications in JavaScript, SQL and cloud fundamentals, plus the competitions and programs from university.
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal as="li" key={cert.name} delay={i * 70}>
              <article className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-sm bg-[#f4f4f2] p-7 text-neutral-900 transition-transform duration-500 hover:-translate-y-1.5">
                <span className="absolute inset-3 border border-neutral-300" aria-hidden />
                <div className="relative flex items-center justify-between">
                  <span className="text-sm font-black" style={{ color: issuerTone[cert.issuer] ?? "#111" }}>
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">Certificate</span>
                </div>
                <h3 className="relative mt-8 text-xl font-bold leading-snug tracking-tight">{cert.name}</h3>
                <div className="relative mt-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-serif text-lg italic">Arif Rahman Mubarok</p>
                    <p className="text-[11px] text-neutral-500">{cert.date}</p>
                  </div>
                  <span
                    aria-hidden
                    className="grid size-12 shrink-0 place-items-center rounded-full border-2 border-dashed font-mono text-xs font-bold"
                    style={{ borderColor: issuerTone[cert.issuer] ?? "#999", color: issuerTone[cert.issuer] ?? "#555" }}
                  >
                    {cert.issuer
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal as="li" delay={certifications.length * 70}>
            <article className="flex h-full min-h-[260px] flex-col justify-between rounded-sm border border-line bg-surface p-7">
              <p className="eyebrow text-dim">Achievements</p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
                {education.honors.slice(0, 3).map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
