import { socials } from "@/data/profile";
import Reveal from "@/components/Reveal";

const folders = [
  { id: "about", label: "About" },
  { id: "numbers", label: "Numbers" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Project" },
  { id: "credentials", label: "Credentials" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink text-accent-ink"
      style={{ paddingInline: "var(--margin-outer)" }}
    >
      <div className="mx-auto max-w-3xl pt-14 text-center sm:pt-20">
        <Reveal delay={120}>
          <h1
            className="mx-auto font-semibold"
            style={{
              fontSize: "var(--step-display)",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
            }}
          >
            Arif Rahman
            <br />
            Mubarok
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p
            className="mx-auto mt-6 opacity-85 sm:mt-8"
            style={{ fontSize: "var(--step-lead)", maxWidth: "46ch", lineHeight: 1.4 }}
          >
            Software Engineer in Jakarta, building Malaysia&rsquo;s IRB-compliant e-Invoice systems and retail
            platforms at scale.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center px-6 py-3 text-[15px] font-medium transition-opacity hover:opacity-85"
              style={{ background: "var(--bg)", color: "var(--ink)" }}
            >
              Let&rsquo;s connect →
            </a>
            <a
              href={socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] underline decoration-accent-ink/40 underline-offset-4 transition-colors hover:decoration-accent-ink"
            >
              Résumé ↗
            </a>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 max-w-3xl pb-0 sm:mt-14">
        <nav aria-label="Sections">
        {folders.map((folder, i) => (
          <Reveal
            key={folder.id}
            delay={280 + i * 70}
            className="relative block"
            style={{ marginTop: i === 0 ? 0 : "-44px", zIndex: i + 1 }}
          >
            <a
              href={`#${folder.id}`}
              className="group relative block w-[86%] mx-auto min-h-[84px] rounded-none px-6 py-5 transition-transform duration-300 ease-out hover:-translate-y-2 focus-visible:-translate-y-2"
              style={{
                background: i % 2 === 0 ? "var(--surface)" : "var(--surface-strong)",
                color: "var(--ink)",
              }}
            >
              <span
                className="absolute -top-[18px] left-6 inline-flex h-[34px] items-center px-4 text-[13px] font-medium"
                style={{
                  background: "var(--accent)",
                  color: "var(--accent-ink)",
                  clipPath: "polygon(0 100%, 0 0, 100% 0, 85% 100%)",
                }}
              >
                {folder.label}
              </span>
              <span
                aria-hidden
                className="absolute bottom-4 right-6 opacity-40 transition-opacity group-hover:opacity-90"
                style={{ fontSize: "var(--step-small)" }}
              >
                ↓
              </span>
            </a>
          </Reveal>
        ))}
      </nav>

        <Reveal
          delay={280 + folders.length * 70}
          className="relative block"
          style={{ marginTop: "-44px", zIndex: folders.length + 1 }}
        >
          <div
            className="relative mx-auto w-[86%] px-6 pb-8 pt-10 sm:px-10"
            style={{ background: "var(--bg)", color: "var(--ink)" }}
          >
            <span
              className="absolute -top-[18px] left-6 inline-flex h-[34px] items-center px-4 text-[13px] font-medium"
              style={{ background: "var(--accent)", color: "var(--accent-ink)", clipPath: "polygon(0 100%, 0 0, 100% 0, 85% 100%)" }}
            >
              Contact
            </span>
            <p className="max-w-md" style={{ fontSize: "var(--step-body)" }}>
              Open to full-time roles and contract work. I usually reply within 24 hours, by email or LinkedIn.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
