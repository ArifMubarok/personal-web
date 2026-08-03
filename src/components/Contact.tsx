import Section from "@/components/Section";
import { basicInfo, socials } from "@/data/profile";

const links = [
  { label: "Email", value: basicInfo.email, href: `mailto:${basicInfo.email}` },
  { label: "GitHub", value: "ArifMubarok", href: socials.github },
  { label: "LinkedIn", value: "arifrm", href: socials.linkedin },
];

export default function Contact() {
  return (
    <Section id="contact" title="Let's Connect">
      <p className="max-w-xl text-base leading-relaxed text-black/70 dark:text-white/70">
        I&apos;m open to interesting conversations and opportunities. Feel free to reach out through any of the
        channels below.
      </p>
      <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
            >
              {link.label}
              <span className="text-black/40 dark:text-white/40">{link.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
