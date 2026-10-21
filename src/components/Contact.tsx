import { basicInfo, ribbons, socials } from "@/data/profile";
import { LayersIcon, LinkedinIcon, MailIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";

function Ribbon({ items, className, reverse, speed }: { items: string[]; className: string; reverse?: boolean; speed: string }) {
  const run = [...items, ...items, ...items, ...items];
  return (
    <div className={`absolute -inset-x-20 overflow-hidden py-3 ${className}`} aria-hidden>
      <div className="marquee" data-reverse={reverse ? "" : undefined} style={{ "--marquee-speed": speed } as React.CSSProperties}>
        {[0, 1].map((half) => (
          <span key={half} className="flex shrink-0">
            {run.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center whitespace-nowrap">
                <span className="px-4">{item}</span>
                <span className="opacity-50">•</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden pt-56 pb-24 sm:pt-64">
      <Ribbon
        items={ribbons.stack}
        speed="60s"
        reverse
        className="top-16 rotate-[4deg] bg-surface-2 font-mono text-sm font-medium uppercase text-dim"
      />
      <Ribbon
        items={ribbons.roles}
        speed="50s"
        className="top-20 -rotate-[4deg] border-y border-line bg-bg text-sm font-bold uppercase tracking-[0.12em] text-ink"
      />

      <div className="relative text-center" style={{ paddingInline: "var(--margin-outer)" }}>
        <Reveal as="h2" className="mx-auto text-[clamp(2.5rem,6vw,4.25rem)] font-black leading-[1.05] tracking-[-0.03em]">
          Let&rsquo;s Build Something
          <br />
          <span className="text-muted">Reliable</span> Together
        </Reveal>
        <Reveal as="p" delay={100} className="mx-auto mt-6 max-w-[56ch] text-lg text-muted">
          Open to full-time roles and contract work on backend systems, integrations and retail platforms. I usually reply
          within 24 hours.
        </Reveal>
        <Reveal delay={200} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${basicInfo.email}`}
            className="inline-flex items-center gap-3 rounded-full bg-ink px-10 py-5 text-lg font-bold text-bg transition-transform hover:-translate-y-0.5"
          >
            <MailIcon className="size-5" /> Hire Me
          </a>
          <a
            href={socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-line px-10 py-5 text-lg font-bold transition-colors hover:border-ink/50"
          >
            <LayersIcon className="size-5" /> View My Resume
          </a>
        </Reveal>
      </div>

      <footer className="relative mt-32" style={{ paddingInline: "var(--margin-outer)" }}>
        <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-5 rounded-[28px] border border-line bg-surface px-8 py-7 sm:flex-row">
          <p className="text-sm font-bold uppercase tracking-[0.15em]">
            © {new Date().getFullYear()} {basicInfo.name}.
          </p>
          <div className="flex items-center gap-2">
            {[
              { href: socials.linkedin, label: "LinkedIn", icon: <LinkedinIcon className="size-4" /> },
              { href: `mailto:${basicInfo.email}`, label: "Email", icon: <MailIcon className="size-4" /> },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                aria-label={l.label}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink"
              >
                {l.icon}
              </a>
            ))}
          </div>
        </div>
        <p className="credits mx-auto mt-6 max-w-[900px] text-center text-xs leading-relaxed text-dim">
          Pictures:{" "}
          <a href="https://www.metmuseum.org/art/collection/search/20365">&ldquo;Account Book Ledger&rdquo;</a> by John
          Carlin, 1835–56, public domain (CC0), via The Metropolitan Museum of Art;{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Servers_in_a_Rack.jpg">&ldquo;Servers in a Rack&rdquo;</a> by
          Abigor, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons.
        </p>
      </footer>
    </section>
  );
}
