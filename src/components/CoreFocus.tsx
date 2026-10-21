import { coreFocus } from "@/data/profile";
import Reveal from "@/components/Reveal";

const corner = "absolute size-1.5 bg-accent";

export default function CoreFocus() {
  const { quote, lead, columns, signature } = coreFocus;
  return (
    <section id="focus" className="py-28 sm:py-40" style={{ paddingInline: "var(--margin-outer)" }}>
      <Reveal className="relative mx-auto max-w-[1340px] border border-accent/40 px-6 py-12 sm:px-16 sm:py-16">
        <span className={`${corner} -left-[3px] -top-[3px]`} />
        <span className={`${corner} -right-[3px] -top-[3px]`} />
        <span className={`${corner} -bottom-[3px] -left-[3px]`} />
        <span className={`${corner} -bottom-[3px] -right-[3px]`} />

        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow text-accent">Core focus</p>
          <p className="hidden font-mono text-[10px] uppercase tracking-widest text-dim sm:block">
            Backend & software engineer
          </p>
        </div>

        <h2 className="mt-10 text-[clamp(2.25rem,6vw,5.25rem)] font-bold leading-[1.02] tracking-[-0.04em]">
          <span className="text-dim">&ldquo;</span>
          {quote.strong} <span className="text-dim">{quote.muted}</span>
          <br />
          <span className="font-serif font-normal italic tracking-[-0.02em] text-ink/90">{quote.italic}</span>
          <span className="text-dim">.&rdquo;</span>
        </h2>

        <div className="mt-12 grid gap-10 border-t border-line pt-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <p className="max-w-[34ch] text-xl leading-snug tracking-tight text-ink/80">
            {lead.before} <em className="font-serif">{lead.italic}</em> {lead.after}
          </p>
          {columns.map((col, i) => (
            <div key={col.title}>
              <h3 className="border-b border-line pb-4 text-sm font-bold uppercase tracking-[0.12em]">{col.title}</h3>
              <p className="mt-5 text-sm leading-relaxed text-dim">{col.body}</p>
              {col.note && <p className="mt-5 text-sm italic text-accent">{col.note}</p>}
              {i === columns.length - 1 && (
                <p className="mt-6 font-brush text-4xl text-ink/90" aria-label={`Signed, ${signature}`}>
                  {signature}
                </p>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
