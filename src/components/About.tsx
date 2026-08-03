import Section from "@/components/Section";
import { bio } from "@/data/profile";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <p className="max-w-2xl text-base leading-relaxed text-black/70 dark:text-white/70">{bio.long}</p>
    </Section>
  );
}
