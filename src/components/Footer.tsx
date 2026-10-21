import { basicInfo, socials } from "@/data/profile";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--accent-ink)", paddingBlock: 56, paddingInline: "var(--margin-outer)" }}>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <p className="font-semibold" style={{ fontSize: "var(--step-lead)" }}>
          {basicInfo.name}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1" style={{ fontSize: "var(--step-small)" }}>
          <a
            href={`mailto:${basicInfo.email}`}
            className="inline-flex min-h-11 items-center underline decoration-accent-ink/40 underline-offset-4 hover:decoration-accent-ink"
          >
            {basicInfo.email}
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center underline decoration-accent-ink/40 underline-offset-4 hover:decoration-accent-ink"
          >
            LinkedIn
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center underline decoration-accent-ink/40 underline-offset-4 hover:decoration-accent-ink"
          >
            Code: github.com/ArifMubarok
          </a>
        </div>
        <p style={{ fontSize: "var(--step-small)", opacity: 0.6 }}>
          © {new Date().getFullYear()} {basicInfo.name}. All rights reserved.
        </p>
        <p
          className="credits"
          style={{ fontSize: "var(--step-small)", maxWidth: 720, opacity: 0.8, color: "var(--accent-ink)" }}
        >
          Pictures:{" "}
          <a href="https://www.metmuseum.org/art/collection/search/20365">&ldquo;Account Book Ledger&rdquo;</a> by John
          Carlin, 1835–56, public domain (CC0), via The Metropolitan Museum of Art;{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Textile_(Indonesia),_19th_century_(CH_18437549).jpg">
            &ldquo;Textile (Indonesia), 19th century&rdquo;
          </a>
          , public domain, via Wikimedia Commons;{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Hunt_and_peck_typing_%E2%80%94_Monkeytype_benchmark.webm">
            &ldquo;Hunt and peck typing&rdquo;
          </a>{" "}
          (video) by C40115, CC BY 4.0, via Wikimedia Commons;{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Servers_in_a_Rack.jpg">&ldquo;Servers in a Rack&rdquo;</a> by
          Abigor, CC BY-SA 3.0, via Wikimedia Commons.
        </p>
      </div>
    </footer>
  );
}
