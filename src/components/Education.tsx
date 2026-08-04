import Section from "@/components/Section";
import { education } from "@/data/profile";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-md shadow-black/10 transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-white/[0.02] dark:shadow-none">
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
    </Section>
  );
}
