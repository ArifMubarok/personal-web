import Section from "@/components/Section";
import { basicInfo, socials } from "@/data/profile";

const links = [
  { label: "Email", value: basicInfo.email, href: `mailto:${basicInfo.email}` },
  { label: "LinkedIn", value: "arifrm", href: socials.linkedin },
];

export default function Contact() {
  return (
    <Section id="contact" title="Let's Connect">
      <p className="max-w-xl text-base leading-relaxed text-black/70 dark:text-white/70">
        I&apos;m open to interesting conversations and opportunities. Feel free to reach out through any of the
        channels below.
      </p>

      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent-soft px-4 py-3 max-w-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="mt-0.5 h-5 w-5 shrink-0 text-accent"
        >
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
        </svg>
        <p className="text-sm leading-relaxed text-accent">
          I usually reply within <span className="font-semibold">24 hours</span> via email or LinkedIn.
        </p>
      </div>

      <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-sm font-medium transition-colors hover:border-accent/40 hover:text-accent dark:border-white/20"
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
