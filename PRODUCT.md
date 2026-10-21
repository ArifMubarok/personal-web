# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, served with roughly equal weight: hiring managers/recruiters evaluating Arif for a full-time Software Engineer / tech-lead role, and potential clients considering him for contract engineering work. Both arrive to quickly assess his technical depth, leadership scope, and proof of impact, then decide whether to download his resume or reach out.

## Product Purpose

A personal portfolio/CV site presenting Arif Rahman Mubarok, a Software Engineer based in Jakarta. Success means a visitor leaves convinced of his expertise and takes action — downloading the resume, or connecting via email or LinkedIn.

## Positioning

His Malaysia IRB-compliant e-Invoice integration work is the differentiator a similar backend engineer's portfolio couldn't truthfully claim: architecting a bulk submission pipeline that batches up to 50 invoices per request under strict regulatory constraints. This sits alongside large-scale retail systems impact (POS, ERP, Loyalty) and a hands-on-engineer-plus-team-lead hybrid role — the combination, anchored by the compliance work, is the headline.

## Operating Context

Site content lives in [`src/data/profile.ts`](src/data/profile.ts), which the components render; it is the source of truth for everything on the page, including the redesign's section copy (hero lines, Core Focus, features, work cards, ribbons). [`docs/personal-web.md`](docs/personal-web.md) is the older authoring notes file and currently lags behind (it still names Alturian Indonesia rather than Nimbli). Next.js (App Router) static export, deployed to GitHub Pages at the custom domain `arifmubarok.my.id` via `.github/workflows` on push to `main`.

## Capabilities and Constraints

- Static export only (`next build` → `out/`), Next.js 16 App Router, Tailwind CSS v4, TypeScript, GitHub Pages hosting with a custom domain (CNAME). Code is pushed to both `github` (GitHub, deploys) and `origin` (GitLab mirror).
- Dark theme only; there is no theme toggle. The visual system is documented in [`DESIGN.md`](DESIGN.md).
- No animation library: motion is CSS keyframes plus small scroll/IntersectionObserver handlers, and every effect respects `prefers-reduced-motion`.
- Fonts are self-hosted at build time through `next/font` (Inter, Playfair Display, JetBrains Mono, Alex Brush); tech logos come from the `simple-icons` package. The page makes no runtime third-party requests.
- English proficiency should read as "Professional working proficiency (written)" — strong written English, limited spoken practice.
- Education duration (4 years) is intentionally not displayed, per Arif's preference; degree, school, honors, and GPA stay.
- Resume link and employment history must stay synced to whichever CV revision is current; the latest sync renamed Alturian Indonesia → Nimbli. Re-sync both whenever a newer CV supersedes it.
- Work-card years in `work` (`src/data/profile.ts`) are approximate placements within each role's tenure, not dates from the CV; confirm them before treating them as fact.

## Brand Commitments

Name: Arif Rahman Mubarok. Tagline stays "Software Engineer." Voice is direct and achievement-forward — quantified bullets over generic claims. GitHub is intentionally omitted from the Contact / "Let's Connect" area.

## Evidence on Hand

- Full work history and quantified achievements for three roles (Nimbli, Orbit360, CV. Gudang Media Perkasa) in `src/data/profile.ts`.
- One personal project: Smart Edu-5P (repo: https://github.com/badaso404/smartedu5p). The Work section also presents four pieces of Nimbli work (IRB e-Invoice pipeline, reporting export pipeline, Loyalty program, HRIS attendance & payroll) as cards, using only facts from the CV bullets.
- Five certifications (Udemy, Sololearn ×2, Dicoding ×2) and university achievements, shown as certificate-style cards. There are no certificate images or verification links, so the cards make no "verified" claim.
- Resume PDF via Google Drive link (update when the CV revision changes).
- Profile photo at `public/profile.webp` (source: `docs/profile.jpeg`).
- Two credited archival photos used in the Work section (Account Book Ledger, CC0; Servers in a Rack, CC BY-SA 3.0), listed in `public/img/credits.json`; their credit line in the footer must stay.
- No testimonials, case studies, or press exist — do not fabricate any.

## Product Principles

1. Lead with quantified, verifiable impact (customer counts, record counts, throughput) over generic claims.
2. Treat the Malaysia e-Invoice/IRB compliance work as the headline differentiator, not a footnote.
3. Keep site content synced to the latest CV as the single source of truth; never let it drift ahead of or behind the resume.
4. Serve recruiters and clients with equal weight — don't skew copy or structure toward only one audience.
5. Keep the path to action short: resume download and a direct, responsive-feeling way to connect.
