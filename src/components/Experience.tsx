import Section from "@/components/Section";
import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-6">
        {experience.map((entry) => (
          <div
            key={entry.company}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-md shadow-black/10 transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-white/[0.02] dark:shadow-none"
          >
            <h3 className="font-semibold">{entry.company}</h3>
            <p className="text-sm text-black/50 dark:text-white/50">{entry.location}</p>

            <div className="mt-5 space-y-6">
              {entry.roles.map((role, i) => (
                <div
                  key={i}
                  className={i > 0 ? "border-t border-black/10 pt-6 dark:border-white/10" : ""}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="text-sm font-semibold">{role.role}</h4>
                    <span className="text-xs text-black/50 dark:text-white/50">{role.duration}</span>
                  </div>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-black/70 dark:text-white/70">
                    {role.description.map((line, j) => (
                      <li key={j}>{line}</li>
                    ))}
                  </ul>

                  {role.techStack && role.techStack.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {role.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
