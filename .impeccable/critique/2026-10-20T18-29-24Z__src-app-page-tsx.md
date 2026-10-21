---
target: homepage (src/app/page.tsx)
total_score: 19
max_score: 28
na_heuristics: 7,9,10
p0_count: 1
p1_count: 2
target_identity: "file:/Users/arifrm/Documents/personal-project/personal-web/src/app/page.tsx"
target_fingerprint: "sha256:f2669a134ba2da1f09cdd83c72bfa839320df185c48a3ca9f18ef8977d19dc04"
target_path: /Users/arifrm/Documents/personal-project/personal-web/src/app/page.tsx
timestamp: 2026-10-20T18-29-24Z
slug: src-app-page-tsx
closed: true
---
Method: dual-agent (A: ac1df7f176642deb1 · B: a6f5a2adae40654dd)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Theme toggle and hover states give clear feedback, but the Projects card (a full-bleed `<a>`) gives no "leaves the site" cue until hover, and focus relies on the browser's bare default outline everywhere. |
| 2 | Match Between System and Real World | 3/4 | Natural resume ordering, but unglossed acronyms ("IRB-compliant," "HRIS," "ERP (Merchandising & HRIS)") assume domain fluency a generalist recruiter may not have. |
| 3 | User Control and Freedom | 3/4 | No traps, external links are safe (`target=_blank rel=noopener`), theme is instantly reversible; no back-to-top on a long single-page scroll. |
| 4 | Consistency and Standards | 2/4 | DESIGN.md's confirmed rejections state "no gradients" and the One-Accent Rule says the accent "never fills a section background." `globals.css:33` ships a full-page `linear-gradient(...) fixed` body background that violates both — confirmed live in both themes. |
| 5 | Error Prevention | 3/4 | Nothing destructive exists; the Projects full-card-link pattern is the one soft foot-gun (can't distinguish "click title" from "click whitespace"). |
| 6 | Recognition Rather Than Recall | 2/4 | Below 640px the header nav collapses to logo + theme toggle only — no hamburger, no substitute. A mobile visitor must scroll linearly through Hero + About before reaching Experience/Skills/Contact. |
| 7 | Flexibility and Efficiency of Use | n/a | Single-pass Persuade/portfolio page — no repeat-user workflows to accelerate (mode-applicability rule). |
| 8 | Aesthetic and Minimalist Design | 3/4 | The Compression Rule mostly holds, but is undercut by the unrendered achievement bullets (P0 below) and the un-spec'd body gradient (P1) — both work against the system's own "nothing competes with the content" premise. |
| 9 | Error Recovery | n/a | No forms, no destructive actions, no error states exist on this site. |
| 10 | Help and Documentation | n/a | Not applicable to a single-pass portfolio landing page. |
| **Total** | | **19/28 (68%)** | **Acceptable** |

7 heuristics scored; 3 marked `n/a` (7, 9, 10) per the mode-applicability rule for a Persuade/Experience-leaning personal landing page. Applicable max: 28.

## Design Specificity Verdict

**LLM assessment:** Mixed. The *content* is genuinely specific — named companies, the exact "batches up to 50 invoices per request" detail, Jakarta Selatan, GPA, a real linked GitHub project. The *visual/interaction system*, though, is a tasteful but largely category-interchangeable "single-accent SaaS marketing page in miniature": sticky translucent header, pill buttons, rounded-2xl hairline cards, one accent, dark/light toggle. That's a defensible choice for a CV site — content should carry the differentiation, not chrome — but it means specificity rests entirely on the content actually reaching the page, which (see P0) it currently doesn't in the one place that matters most. The one place genuine product-specific design thinking shows up is the Contact page's "I usually reply within 24 hours" callout — a real behavioral-design decision tied to this product's actual conversion moment, not a generic trust badge.

**Deterministic scan:** The static CLI scan (`impeccable detect --json src/app src/components`) returned a clean `[]` — it can't see rendered, composited colors. The **browser-based overlay scan, run against the live DOM, found 13 issues**:
- 6× low-contrast: `#77777d` on `#eeeef9` (the gradient-tinted background), 3.9:1 — need 4.5:1. Located at Hero's "Hi, I'm" (`Hero.tsx:8`) and Skills category labels (`Skills.tsx:10`), all `text-black/50`.
- 4× low-contrast: `#808080` on `#ffffff`, 3.9:1. Located at Experience card locations and role durations (`Experience.tsx:14`, `:24`), also `text-black/50`.
- 2× low-contrast: `#8f8f95` on `#eeeef9` (gradient-tinted), **2.8:1** — a steeper failure, consistent with `text-black/40` (Footer, cert issuer line).
- 1× overused-font: Geist covers 100% of rendered text.

No false positives found on cross-check against source — every flagged selector's reported color matches what the Tailwind opacity utility actually produces. The one finding not treated as an actionable defect: **overused-font**. DESIGN.md explicitly commits to a single, personality-free typeface ("Plain and utilitarian by design... keeps the quantified content the sole focus"), so a single-typeface page is the documented intent, not a lapse — noted here, not carried into Priority Issues.

**Visual overlays:** Injection succeeded and rendered genuine on-page UI (confirmed via screenshot: an "OVERUSED FONT" banner strip and an orange "LOW CONTRAST TEXT" highlight box around the Hero's "Hi, I'm" text) — this was real DOM evidence, not just console noise. The overlay tab was reloaded afterward to capture clean supplementary screenshots, so it is no longer live in your browser; re-run `/impeccable critique` or `/impeccable live` if you want to see it rendered again.

## Overall Impression

The system (DESIGN.md's "Technical Ledger") is well-conceived and mostly well-executed — the Compression Rule and the accent-rarity discipline genuinely work. But two things are quietly undermining it at the same time: the shipped `body` background contradicts the system's own written rules (and makes an already-marginal contrast problem worse in the tinted corner), and the single most persuasive content on the page — the quantified e-Invoice/Loyalty/HRIS achievement bullets PRODUCT.md calls "the headline differentiator" — is defined in the data layer and never rendered. The biggest opportunity here isn't a redesign; it's closing the gap between what the system and the content model already promise and what's actually on screen.

## What's Working

1. **The Contact "reply within 24 hours" callout** — the system's one deliberate accent-filled container, placed exactly where cold-outreach anxiety peaks. Real applied behavioral design, not decoration.
2. **The Compression Rule in Experience cards** — Title → Label → Body is consistently compressed so metadata never competes with the actual claims, even six bullets deep.
3. **Restrained one-accent system** — when not undercut by the stray gradient, the navy reads as "ink to mark what matters" rather than an off-the-shelf SaaS palette, and ties specifically to the "quantified engineer" positioning.

## Priority Issues

**[P0] The site's single most persuasive content is defined but never rendered**
- **What:** `src/data/profile.ts` defines `role.achievements` — bolded, quantified proof points ("Architected and optimized a bulk e-Invoice processing pipeline... batches of up to 50 invoices," "exporting 6M+ database records in under 10 minutes"). `Experience.tsx` only maps `role.description` and `role.techStack`; `role.achievements` is read nowhere in the codebase.
- **Why it matters:** PRODUCT.md's Product Principle #1 is "Lead with quantified, verifiable impact... over generic claims," and Positioning names the e-Invoice work as the headline differentiator. That exact quantification doesn't exist on the rendered page — visitors see only the unquantified "Managed Malaysia e-Invoice integration projects" bullet.
- **Fix:** Render `role.achievements` as a visually distinct top-tier group above the routine description bullets, using a treatment consistent with the Compression Rule (e.g., a "Key wins" label at Title weight, bolded phrases already marked in the data).
- **Suggested command:** `/impeccable clarify`

**[P1] The shipped body background contradicts the documented design system — and worsens an already-marginal contrast problem**
- **What:** DESIGN.md's confirmed rejections state "no gradients," and the One-Accent Rule says the accent "never fills a section background." `globals.css:33` ships `background: linear-gradient(160deg, var(--background) 0%, var(--background) 55%, var(--accent-soft) 100%) fixed;` on `body` — visible as a lavender wash (light) / violet glow (dark) across the whole page. The browser-based detector's two steepest contrast failures (2.8:1, `#8f8f95` on `#eeeef9`) were measured in exactly this gradient-tinted region — the undocumented background is making the Alpha-Neutral Rule's weakest step fail harder than it would against the flat paper-white the spec describes.
- **Why it matters:** The system's entire premise is that the accent functions as rare, purposeful "ink." Turning it into ambient wallpaper undermines that premise on every load, and it's degrading legibility exactly where legibility was already thinnest.
- **Fix:** Revert `body` to flat `var(--background)`. If a depth cue is genuinely wanted, document it explicitly in DESIGN.md as an intentional addition to the existing light/dark depth strategy, rather than letting implementation drift ahead of the spec.
- **Suggested command:** `/impeccable harden`

**[P1] The Alpha-Neutral Rule's muted text steps fail WCAG AA system-wide**
- **What:** Both the 40% and 50% opacity steps of the documented Alpha-Neutral Rule fail AA contrast (4.5:1) for normal text. Browser-measured: `text-black/50` renders at 3.9:1 in 10 of the 13 detector findings (Hero's "Hi, I'm," Experience locations and durations, Skills category labels); `text-black/40` renders at 2.8:1 (cert issuer line, footer). This is broader than a single footer nitpick — it's the step used for dates, locations, and category labels throughout the page, i.e. exactly what a time-pressed recruiter skims for recency and credibility.
- **Why it matters:** This is a real accessibility failure, not a style nitpick, and it hits content a recruiter relies on to judge currency.
- **Fix:** Reserve the 40%/50% steps for larger or decorative-only text; bump small running text (≤14px) to the 60%/70% steps already present in the Alpha-Neutral ramp, which do clear AA against both paper-white and carbon-black.
- **Suggested command:** `/impeccable harden`

**[P2] Mobile navigation disappears entirely below 640px**
- **What:** `Header.tsx` hides both the link list and the GitHub icon with `hidden ... sm:flex` / `hidden ... sm:block`, leaving only the logo and theme toggle under 640px. No hamburger, no substitute — confirmed at 375px.
- **Why it matters:** A shared-link CV site plausibly gets the majority of first-touch traffic on mobile (a recruiter opening a LinkedIn-shared link between meetings). Combined with the Hero's name wrapping to two lines at 375px (pushing both CTAs below the first screen), this works against PRODUCT.md's own "keep the path to action short" principle.
- **Fix:** Add a minimal mobile menu — an icon-triggered sheet or "jump to" control with the same six links — rather than removing wayfinding outright below the breakpoint.
- **Suggested command:** `/impeccable adapt`

## Persona Red Flags

Selected: **Jordan** (first-timer/non-technical recruiter screener), **Riley** (stress tester), **Casey** (distracted mobile user) — closest fit to "Landing page / marketing."

**Jordan (Confused First-Timer):**
- Jargon barrier: "IRB-compliant," "ERP (Merchandising & HRIS)" are dropped with zero inline gloss — exactly the terms meant to signal regulatory credibility read as noise to a generalist HR screener.
- The most persuasive, plain-language proof points (50 invoices/request, 6M+ records in under 10 minutes) never render, so even a patient, careful reader never encounters them.
- No restated "next step" after Contact — just two muted pill links and a copyright line.

**Riley (Deliberate Stress Tester):**
- The entire Projects card is one `<a>` wrapping headline, description, role, bullets, and tech chips — to assistive tech this is a single link whose accessible name is the whole card's text. Selecting a specific stat out of it fights the wrapper.
- "View Resume" opens a Google Drive share link, not a hosted PDF — the one CTA with an external dependency and no visible fallback if sharing permissions ever lapse.
- One genuine pass: static export means no mid-flow state to lose on refresh.

**Casey (Distracted Mobile User):**
- No mobile nav (P2) is the single biggest failure for Casey — she can't jump to Experience/Skills in the thumb zone and must scroll through the full hero + bio first.
- Hero name wraps to two lines at 375px, pushing both CTAs below the first screen before any scrolling.
- The 32×32px theme toggle and small nav/footer pills sit under the 44×44pt thumb-target guideline — tight for one-handed use.

## Minor Observations

- CLI static scan (`[]`, clean) diverged entirely from the browser-based dynamic scan (13 findings) — the static scanner can't compute rendered contrast against Tailwind opacity utilities composited over a gradient background. Treat the browser-based pass as the authoritative signal for contrast going forward.
- Certifications mix "Issued ..." and "Issued ... · Expires ..." date formats inline with no consistent column strategy, wrapping unpredictably at narrow widths.
- Header's GitHub icon is icon-only with no visible text label for sighted users (aria-label covers screen readers only).
- Geist Mono is loaded but applied nowhere — DESIGN.md already flags this as dormant. The P0 fix (rendering achievements) is a plausible, on-brand place to finally use it for the quantified figures.
- The only focus indicator anywhere is the browser's default 1px auto-color outline — functional, but easy to miss against the translucent blurred header, especially in dark mode.
- `ThemeProvider`'s `suppressHydrationWarning` + `defaultTheme="light"` setup looks correctly mitigated against next-themes' usual flash-of-wrong-theme — confirmed as a non-issue, not a finding.

## Questions to Consider

1. The data model already contains the quantified "headline differentiator" achievements — if the single most persuasive content on the site isn't reaching the screen, what else in `profile.ts` might be sitting unused?
2. DESIGN.md calls the accent "ink used to mark what matters" and explicitly rejects gradients — is the shipped gradient actually a direction worth adopting and documenting, or accidental drift that should just be reverted?
3. On a single-page CV meant to be shared and skimmed on a phone, does removing all navigation below 640px actually serve "keep the path to action short," or work against it?
