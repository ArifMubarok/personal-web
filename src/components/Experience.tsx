import Section from "@/components/Section";
import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10 border-l border-black/10 dark:border-white/10">
        {experience.map((job, i) => (
          <li key={i} className="relative pl-6">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-black dark:bg-white" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-semibold">{job.role}</h3>
              <span className="text-sm text-black/50 dark:text-white/50">{job.duration}</span>
            </div>
            <p className="text-sm text-black/60 dark:text-white/60">
              {job.company} · {job.location}
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-black/70 dark:text-white/70">
              {job.description.map((line, j) => (
                <li key={j}>{line}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
