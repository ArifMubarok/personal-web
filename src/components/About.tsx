import Image from "next/image";
import * as si from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import { basicInfo, bio, education, techStack } from "@/data/profile";
import Reveal from "@/components/Reveal";

const iconFor: Record<string, SimpleIcon> = {
  NestJS: si.siNestjs,
  "Node.js": si.siNodedotjs,
  TypeScript: si.siTypescript,
  JavaScript: si.siJavascript,
  Laravel: si.siLaravel,
  PHP: si.siPhp,
  Angular: si.siAngular,
  Ionic: si.siIonic,
  TypeORM: si.siTypeorm,
  Express: si.siExpress,
  PostgreSQL: si.siPostgresql,
  MySQL: si.siMysql,
  MongoDB: si.siMongodb,
  Docker: si.siDocker,
  Cloudflare: si.siCloudflare,
  Nginx: si.siNginx,
  Git: si.siGit,
  Linux: si.siLinux,
  Postman: si.siPostman,
  React: si.siReact,
};

// Brand colours that disappear on black get a lighter stand-in.
const colorOverride: Record<string, string> = { Angular: "#dd0031", Express: "#e5e5e5" };

function Logo({ name }: { name: string }) {
  const icon = iconFor[name];
  return (
    <span className="flex shrink-0 items-center gap-3 px-8 sm:px-12">
      {icon && (
        <svg viewBox="0 0 24 24" className="size-8" aria-hidden fill={colorOverride[name] ?? `#${icon.hex}`}>
          <path d={icon.path} />
        </svg>
      )}
      <span className="text-lg font-semibold text-muted sm:text-xl">{name}</span>
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="pt-24 sm:pt-32">
      <div className="mx-auto max-w-[1340px]" style={{ paddingInline: "var(--margin-outer)" }}>
        <Reveal className="text-center">
          <p className="eyebrow text-dim">My short story</p>
          <h2 className="display mt-4 text-[clamp(4rem,13vw,11rem)]">
            <span className="sheen">About me</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-[420px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line bg-surface-2">
              <Image
                src={basicInfo.photo}
                alt={`Portrait of ${basicInfo.name}`}
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20">
                <p className="text-lg font-bold">{basicInfo.name}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">{basicInfo.tagline}</p>
              </div>
            </div>
            <p className="absolute -right-3 -top-4 rotate-6 rounded-full bg-ink px-4 py-2 text-xs font-black uppercase tracking-wider text-bg">
              Team lead
            </p>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                Building retail systems
                <br />
                <span className="text-muted">that hold up under real load.</span>
              </h3>
            </Reveal>
            <div className="mt-8 space-y-5">
              {bio.letter.map((p, i) => (
                <Reveal as="p" key={i} delay={i * 80} className="max-w-[62ch] leading-relaxed text-muted">
                  {p}
                </Reveal>
              ))}
            </div>
            <Reveal delay={360} className="mt-10 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
              <div>
                <p className="eyebrow text-dim">Education</p>
                <p className="mt-2 font-semibold">{education.school}</p>
                <p className="text-sm text-muted">Associate Degree, Informatics Engineering · GPA {education.gpa}</p>
              </div>
              <div>
                <p className="eyebrow text-dim">Based in</p>
                <p className="mt-2 font-semibold">{basicInfo.location}</p>
                <p className="text-sm text-muted">Indonesian (native) · English (professional)</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mt-28">
        <p className="eyebrow mb-10 text-muted" style={{ paddingInline: "var(--margin-outer)" }}>
          Tech stack & ecosystem
        </p>
        <div className="marquee-mask space-y-10 overflow-hidden">
          {techStack.map(({ row }, i) => (
            <div key={i} className="marquee" data-reverse={i % 2 === 1 ? "" : undefined} style={{ "--marquee-speed": "45s" } as React.CSSProperties}>
              {[...row, ...row].map((name, j) => (
                <Logo key={`${name}-${j}`} name={name} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
