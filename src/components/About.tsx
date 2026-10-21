import Image from "next/image";
import { basicInfo, bio } from "@/data/profile";
import Reveal from "@/components/Reveal";

const sheetStyle = { background: "var(--surface)", padding: "48px 40px 32px" };

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center"
      style={{ paddingBlock: "var(--gap-section)", paddingInline: "var(--margin-outer)" }}
    >
      <Reveal as="div" className="scallop-edge w-full max-w-[640px]" style={sheetStyle}>
        <div className="flex items-center gap-3">
          <Image
            src={basicInfo.photo}
            alt={`Portrait of ${basicInfo.name}`}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <h2 style={{ fontSize: "var(--step-small)", color: "var(--ink)" }}>A letter, from Jakarta</h2>
        </div>

        <div className="mt-7 space-y-5" style={{ maxWidth: "58ch" }}>
          {bio.letter.map((paragraph) => (
            <p key={paragraph} style={{ fontSize: "var(--step-body)", lineHeight: 1.55 }}>
              {paragraph}
            </p>
          ))}
        </div>

        <p className="mt-8 italic" style={{ fontSize: "var(--step-lead)" }}>
          {basicInfo.name}
        </p>
        <p style={{ fontSize: "var(--step-small)", color: "var(--ink)" }}>{basicInfo.tagline}</p>

        <div className="mt-10 pb-6">
          <div className="dotted-row" aria-hidden />
          <a
            href={`mailto:${basicInfo.email}`}
            className="mt-5 flex min-h-11 items-center justify-center font-medium transition-opacity hover:opacity-80"
            style={{ fontSize: "var(--step-body)" }}
          >
            {basicInfo.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
