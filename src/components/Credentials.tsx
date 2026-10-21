import Image from "next/image";
import { certifications, education, skills } from "@/data/profile";
import Reveal from "@/components/Reveal";

const languages = skills.find((s) => s.category === "Languages")?.items ?? [];
const stack = skills.filter((s) => s.category !== "Languages").flatMap((s) => s.items);

function Row({ name, meta, note }: { name: string; meta?: string; note?: string }) {
  return (
    <div className="py-3">
      <div className="flex items-baseline justify-between gap-4">
        <span style={{ fontSize: "var(--step-body)" }}>{name}</span>
        {meta && (
          <span className="shrink-0 tabular-nums" style={{ fontSize: "var(--step-small)", color: "var(--muted)" }}>
            {meta}
          </span>
        )}
      </div>
      {note && (
        <p className="mt-1" style={{ fontSize: "var(--step-small)", color: "var(--muted)" }}>
          {note}
        </p>
      )}
    </div>
  );
}

function Group({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="mt-14 first:mt-0">
      <h3 className="text-center font-semibold" style={{ fontSize: "1.375rem" }}>
        {name}
      </h3>
      <div className="mt-5" style={{ maxWidth: 420, marginInline: "auto" }}>
        {children}
      </div>
    </div>
  );
}

export default function Credentials() {
  return (
    <section id="credentials">
      <Reveal as="div" className="relative h-[28vh] w-full overflow-hidden">
        <Image
          src="/img/textile-indonesia-19th-century.webp"
          alt="A 19th-century Indonesian batik textile, in the family's own pattern tradition"
          fill
          sizes="100vw"
          className="duotone pan object-cover"
        />
      </Reveal>

      <div className="flex justify-center" style={{ paddingBlock: "var(--gap-section)", paddingInline: "var(--margin-outer)" }}>
      <Reveal
        as="div"
        className="scallop-edge w-full max-w-[640px]"
        style={{ background: "var(--surface)", paddingInline: 40, paddingTop: 56, paddingBottom: 40 }}
      >
        <h2 className="text-center font-semibold" style={{ fontSize: "var(--step-head)" }}>
          Credentials
        </h2>
        <p className="mt-2 text-center" style={{ fontSize: "var(--step-small)", color: "var(--muted)" }}>
          Languages, tools, and the record so far.
        </p>

        <Group name="Languages">
          {languages.map((item) => {
            const [name, meta] = item.split(" (");
            return <Row key={item} name={name} meta={meta?.replace(")", "")} />;
          })}
        </Group>

        <Group name="Daily stack">
          <Row name="Backend & frontend" meta={`${stack.length} tools`} note={stack.join(", ")} />
        </Group>

        <Group name="Certifications">
          {certifications.map((cert) => (
            <Row key={cert.name} name={cert.name} meta={cert.date.replace("Issued ", "")} note={cert.issuer} />
          ))}
        </Group>

        <Group name="Education">
          <Row name={education.degree.split(" / ")[0]} meta={education.gpa} note={education.school} />
          <p className="mt-3" style={{ fontSize: "var(--step-small)", color: "var(--muted)" }}>
            {education.honors.join(" · ")}
          </p>
        </Group>

        <div className="mt-14 text-center">
          <p style={{ fontSize: "var(--step-small)", color: "var(--muted)" }}>Open to full-time roles and contract work</p>
          <p style={{ fontSize: "var(--step-small)", color: "var(--muted)" }}>Usually replies within 24 hours</p>
        </div>
      </Reveal>
      </div>
    </section>
  );
}
