import Section from "@/components/Section";
import { certifications, skills } from "@/data/profile";

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Certifications">
      <div className="grid gap-8 sm:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold text-black/50 dark:text-white/50">{group.category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 px-3 py-1 text-sm text-black/70 dark:border-white/15 dark:text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
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
