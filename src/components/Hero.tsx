import { hero, socials } from "@/data/profile";
import { ArrowIcon, BoltIcon, BracketIcon, GithubIcon, LinkedinIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";

const icons = {
  bolt: <BoltIcon className="h-[0.8em] w-[0.8em] text-sky-400" strokeWidth={1.6} />,
  bracket: <BracketIcon className="h-[0.78em] w-[0.78em] text-amber-400" strokeWidth={1.8} />,
};

export default function Hero() {
  return (
    <section id="top" className="spotlight relative flex min-h-svh flex-col overflow-hidden">
      {/* side tab */}
      <a
        href="#contact"
        className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-r-2xl bg-ink px-3 py-10 text-bg transition-transform hover:translate-x-1 lg:block"
      >
        <span className="block text-[10px] font-bold uppercase tracking-[0.35em] [writing-mode:vertical-rl]">
          Available for opportunity
        </span>
      </a>

      <div
        className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-center pt-28 pb-10"
        style={{ paddingInline: "var(--margin-outer)" }}
      >
        <h1 className="sr-only">Arif Rahman Mubarok, Backend & Software Engineer</h1>

        <div className="display relative text-[clamp(3.25rem,11.5vw,10rem)] uppercase">
          {hero.lines.map((line, i) => (
            <Reveal
              key={i}
              delay={120 + i * 120}
              className={`flex items-center gap-[0.06em] ${
                i === 0 ? "justify-end" : i === 1 ? "justify-center" : "justify-start"
              }`}
            >
              {i === 0 && (
                <span className="mr-auto hidden max-w-[24ch] self-start pt-[0.1em] font-sans text-[11px] font-medium normal-case leading-relaxed tracking-[0.2em] text-muted lg:block">
                  <span className="uppercase">{hero.intro}</span>
                </span>
              )}
              <span aria-hidden className={i === 0 ? "sheen" : "text-ink"}>{line.before}</span>
              {line.icon && <span aria-hidden className="inline-flex px-[0.04em]">{icons[line.icon]}</span>}
              {line.after && <span aria-hidden className="sheen">{line.after}</span>}
              {i === hero.lines.length - 1 && (
                <span className="ml-auto hidden max-w-[24ch] self-end pb-[0.1em] font-sans text-[11px] font-medium normal-case leading-relaxed tracking-[0.15em] text-muted lg:block">
                  <span className="uppercase">{hero.aside}</span>
                </span>
              )}
            </Reveal>
          ))}

          {/* scattered social marks, like stickers on the type */}
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="absolute right-[2%] top-[-8%] hidden text-muted lg:block transition-colors hover:text-ink"
          >
            <GithubIcon className="size-[clamp(22px,2.4vw,34px)]" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="absolute left-[2%] top-[36%] hidden text-muted lg:block transition-colors hover:text-ink"
          >
            <LinkedinIcon className="size-[clamp(22px,2.4vw,34px)]" />
          </a>
        </div>

        {/* the side notes move under the type on smaller screens */}
        <Reveal delay={480} className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
          <p className="max-w-[30ch] text-[11px] font-medium uppercase leading-relaxed tracking-[0.2em] text-muted">
            {hero.intro}
          </p>
          <p className="max-w-[30ch] text-[11px] font-medium uppercase leading-relaxed tracking-[0.15em] text-muted sm:justify-self-end">
            {hero.aside}
          </p>
        </Reveal>
      </div>

      <div className="relative flex items-center gap-6 pb-10" style={{ paddingInline: "var(--margin-outer)" }}>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-line to-line" />
        <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-muted">
          {hero.place} — {new Date().getFullYear()}
        </span>
        <a
          href="#focus"
          aria-label="Scroll to next section"
          className="grid size-12 place-items-center rounded-full bg-ink text-bg transition-transform hover:translate-y-1"
        >
          <ArrowIcon className="size-5" />
        </a>
      </div>
    </section>
  );
}
