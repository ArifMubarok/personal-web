import Section from "@/components/Section";
import { certifications, education } from "@/data/profile";

export default function Education() {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="rounded-2xl border border-black/10 p-6 dark:border-white/10">
        <h3 className="font-semibold">{education.degree}</h3>
        <p className="text-sm text-black/60 dark:text-white/60">
          {education.school} · GPA {education.gpa}
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-black/70 dark:text-white/70">
          {education.honors.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>

      <h3 className="mt-10 text-sm font-semibold text-black/50 dark:text-white/50">Certifications</h3>
      <ul className="mt-3 space-y-2">
        {certifications.map((cert, i) => (
          <li key={i} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 text-sm">
            <span className="text-black/80 dark:text-white/80">
              {cert.name} <span className="text-black/50 dark:text-white/50">· {cert.issuer}</span>
            </span>
            <span className="text-black/40 dark:text-white/40">{cert.date}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
