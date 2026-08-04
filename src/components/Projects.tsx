import Section from "@/components/Section";
import { projects } from "@/data/profile";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-black/10 bg-white p-6 shadow-md shadow-black/10 transition-shadow hover:border-accent/40 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.02] dark:shadow-none"
          >
            <h3 className="font-semibold">{project.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-black/70 dark:text-white/70">{project.description}</p>
            <p className="mt-3 text-sm text-black/60 dark:text-white/60">
              <span className="font-medium">{project.role}</span>
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-black/70 dark:text-white/70">
              {project.contributions.map((c, j) => (
                <li key={j}>{c}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
