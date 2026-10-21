---
name: Arif Rahman Mubarok — Personal Site
description: A software engineer's portfolio set like a dark gallery poster — giant stacked type under a spotlight, with quiet grey detail underneath.
colors:
  stage-black: "#000000"
  surface: "#0b0b0c"
  surface-raised: "#18181b"
  hairline: "#262626"
  ink: "#fafafa"
  muted: "#a3a3a3"
  dim: "#85858e"
  signal-red: "#ef4444"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 11.5vw, 10rem)"
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 5rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.05em"
  quote:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  accent-serif:
    fontFamily: "Playfair Display, Georgia, serif"
    fontStyle: "italic"
    fontWeight: 400
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  eyebrow:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.3em"
    textTransform: "uppercase"
  mono-label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.3em–0.5em"
    textTransform: "uppercase"
  signature:
    fontFamily: "Alex Brush, cursive"
    fontSize: "2.25rem"
    fontWeight: 400
rounded:
  square: "0px"
  chip: "12px"
  card: "16px"
  panel: "28px"
  sheet: "48px–80px (top corners only)"
  pill: "9999px"
spacing:
  container-margin: "clamp(16px, 5vw, 96px)"
  section-padding: "112px–160px vertical"
  content-max: "1100px–1340px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stage-black}"
    rounded: "{rounded.pill}"
    padding: "20px 40px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.pill}"
    padding: "20px 40px"
  icon-button:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "40px"
---

# Design System: Arif Rahman Mubarok — Personal Site

## Overview

**Creative North Star: "The Lit Stage"**

The page is a black stage with one soft spotlight on it. The hero is a poster: three lines of 900-weight
type ("BACKEND & / SOFT⚡WARE / EN‹/›GINEER") so large they become the layout, with the words fading from
white into grey as if the light falls off across them. Everything after the hero steps down in volume:
grey running text, mono labels, hairline borders, and a few saturated colour hits (a blue bolt, an amber
code bracket, a red corner mark, a green live dot) that act like stage props rather than a palette.

The layout follows a gallery-portfolio rhythm adapted from a reference site the owner chose
(syahrilarfianalmazril.my.id). Its structure and feel were rebuilt from scratch; no code, copy or images
were copied. Each section is a different set piece: a red-cornered quote frame, a rounded sheet that
slides over it, a giant word that drifts sideways, logo marquees, spinning CSS cubes, a stack of pinned
work cards, an alternating timeline, paper-white certificate cards, and tilted ribbons over the contact
block.

The content stays specific to Arif: e-Invoice batching, retail POS/ERP/Loyalty systems, quantified
figures. The theatre is in the type and motion; the words stay plain and factual.

**Key characteristics:**
- Dark only. Pure black ground (`#000`), near-black surfaces, one off-white ink.
- One sans (Inter) doing nearly everything at extreme weights (900 display, 700 headings), with
  Playfair Display italic as the single expressive counterpoint inside headlines.
- Grey is the main supporting colour; saturated colour appears only in small, purposeful props.
- Every section has its own motion idea, all of it scroll- or CSS-driven, with no animation library.

## Colors

### Ground and surfaces
- **Stage Black** (`#000000`, `--bg`): the page ground and the text colour on white buttons.
- **Surface** (`#0b0b0c`, `--surface`): cards, chips, the footer bar and the experience cards.
- **Surface Raised** (`#18181b`, `--surface-2`): the active nav pill, icon buttons, date tags, and
  the "ENGINEER" word band.
- **Hairline** (`#262626`, `--line`): every border and divider. Borders are always 1px hairlines.

### Text
- **Ink** (`#fafafa`, `--ink`): headings, primary text, and the fill of primary buttons and the
  back-to-top button. 20:1 on black.
- **Muted** (`#a3a3a3`, `--muted`): body copy, secondary lines, logo labels. 8.3:1 on black, so it's
  safe at any size.
- **Dim** (`#85858e`, `--dim`): the quietest tier, for mono labels, eyebrow text and some small
  descriptions. 5.74:1 on black, 5.38:1 on Surface and 4.85:1 on Surface Raised, so it passes WCAG AA
  for small text everywhere. It was raised from `#71717a`, which failed AA (4.35:1 on black). Don't push
  it darker again.

### Accent and props
- **Signal Red** (`#ef4444`, `--accent`): the Core Focus frame, its corner squares, its eyebrow and
  note line, and the bullet dots in the Achievements card. 5.6:1 on black. It's the only colour token
  that is themed.
- **Prop colours** (Tailwind defaults, used inline, not tokens): sky-400 bolt and amber-400 code bracket
  in the hero, green-500 live dot on the stats pill, `#8fae3c` ball in the word band, a
  violet-500 → blue-500 → sky-400 gradient on the experience rail, and six saturated cube-face colours
  per feature. Brand logos in the tech marquee use each brand's own colour, except Angular (`#dd0031`)
  and Express (`#e5e5e5`), which are lightened so they show on black.

### Named rules
**The Spotlight Rule.** Colour is a prop, never a fill for whole sections. A saturated colour may cover
an icon, a dot, a cube face or a 1px line. Large surfaces stay black, near-black or (for the
certificate cards and the work card) paper white.

**The Sheen Rule.** Display words that need extra depth use the `.sheen` gradient (white to `#8a8a8a`,
clipped to the text). Use it on display type only, and pair a sheened word with a solid-white word
nearby so the fade reads as light, not as a disabled state.

## Typography

**Faces** (all via `next/font/google`, self-hosted at build time):
- **Inter** (`--font-sans`): everything by default.
- **Playfair Display italic** (`--font-serif`): one phrase per headline at most ("hands-on
  engineering", "one course at a time", "back-office systems"), plus the name line on certificate
  cards.
- **JetBrains Mono** (`--font-mono`): the nav clock, date tags, "Feature — 01" counters, the page
  counter and the hero's place line.
- **Alex Brush** (`--font-brush`): the "Arif" signature in Core Focus only.

The next/font CSS variables are named `--nf-*` on purpose: Tailwind v4's `@theme` already owns
`--font-mono` and friends, and reusing those names creates a circular variable.

### Hierarchy
- **Display** (900, `clamp(3.25rem, 11.5vw, 10rem)`, line-height 0.85, -0.05em, uppercase): the hero
  lines. The "About me" title uses a larger cut (`clamp(4rem, 13vw, 11rem)`) with the same settings,
  and the word band uses `clamp(5rem, 16vw, 15rem)`.
- **Headline** (900, `clamp(2rem, 5vw, 5rem)`, -0.05em to -0.06em): section titles (statistics,
  Professional Journey, certifications, contact). Feature titles are the same weight, uppercase,
  `clamp(2.5rem, 5vw, 4rem)`, one word per line.
- **Quote** (700, `clamp(2.25rem, 6vw, 5.25rem)`, -0.04em): the Core Focus statement, with a dimmed
  middle clause and a Playfair italic close.
- **Body**: 16px Inter in Muted; 18–20px for feature descriptions and the Core Focus lead line.
- **Eyebrow** (`.eyebrow`: 11px, 600, 0.3em tracking, uppercase): section kickers such as "Core focus",
  "My short story" and "Tech stack & ecosystem".
- **Mono label** (11px, 700, 0.3–0.5em tracking, uppercase): counters, dates and the clock.

### Named rules
**The One-Italic Rule.** A headline gets at most one Playfair italic phrase, and it's always the
softer, human half of the sentence. Never set a whole heading in the serif.

**The Big-Then-Quiet Rule.** Each section has one shouting element (display word, quote, headline) and
everything else steps down to Body or label size. Two competing display-size elements in one viewport
is a bug.

## Layout

- The outer margin is `--margin-outer: clamp(16px, 5vw, 96px)`, applied as inline padding on every
  section, so phones keep a 16px gutter.
- Content widths sit between 1100px (statistics) and 1340px (Core Focus, About, Experience,
  certifications). The hero type block is 1280px.
- Sections breathe with 112–160px of vertical padding. The work intro is `min-h-[80svh]` and each work
  card is a full `h-svh` sticky panel.
- `body` uses `overflow-x: clip` so tilted ribbons and marquees never create sideways scroll. Verified at
  390px and 1440px.

### Section sequence
1. **Nav** (fixed): Jakarta clock (mono) on the left, a pill of section links in the centre (hidden
   below `md`), and GitHub/LinkedIn icon buttons on the right. The active link follows scroll.
2. **Hero:** spotlight background, three display lines aligned right / centre / left, the intro and
   availability notes tucked into the first and last lines on `lg` (stacked below the type on smaller
   screens), a vertical "Available for opportunity" tab, and a hairline with "Jakarta, ID — year" and a
   round arrow button.
3. **Core Focus:** a 1px red-tinted frame with 6px red corner squares, a quote, then a three-column
   row (lead line, Scope & Platform, Integration + signature).
4. **Statistics:** a sheet with 48–80px rounded top corners that overlaps the previous section
   (`-mt-10`, upward shadow), a live-dot pill, a headline, a four-up counter bar with dashed dividers,
   and four detail cards.
5. **Word band:** "ENGINEER" in grey on Surface Raised, translated sideways as the band crosses the
   viewport.
6. **About:** "About me" display title, a grayscale portrait card (colour on hover) with a tilted
   "Team lead" sticker, the bio, education and location, then two logo marquees running in opposite
   directions.
7. **Features:** three alternating rows, each a spinning CSS cube and a "Feature — 0n" block with an
   uppercase title, body copy and tag chips.
8. **Work:** an intro line, then five sticky full-screen panels that stack over each other. Each panel
   has a tinted background (blurred photo or a faint giant figure) and a paper-white three-column card.
   A "Page n / 5" counter pins bottom-left on `sm` and up.
9. **Experience:** a centred headline and a three-column timeline. Cards alternate above and below a
   gradient rail on `lg`, and become a plain list below `lg`.
10. **Certifications:** headline with an italic tail, then a 3-column grid of paper certificate cards
    plus one dark Achievements card.
11. **Contact and footer:** two counter-tilted marquee ribbons (roles and stack), the "Let's Build
    Something Reliable Together" headline, Hire Me and View My Resume buttons, a rounded footer bar (LinkedIn and email only; GitHub stays out of
    the contact area on purpose, see PRODUCT.md), and
    image credits.
12. **Back to top:** a fixed white circle that fades in after one viewport of scroll.

## Elevation & Depth

Depth comes mostly from tone steps (Black → Surface → Surface Raised) and hairlines. Shadows are used
sparingly and only where something physically sits over something else:
- the statistics sheet's upward shadow (`0 -30px 60px rgba(0,0,0,.8)`) as it slides over Core Focus;
- the back-to-top button (`0 10px 40px rgba(0,0,0,.6)`);
- the paper work cards (`shadow-2xl`) floating over their blurred backdrop.

No other component casts a shadow. Hover feedback is a border brightening, a colour swap or a small
translate (-2px to -6px), never a new shadow.

## Shapes

- **Square**: the Core Focus frame and its corner marks, and the work cards.
- **12px**: tag chips in Features.
- **16px**: the counter bar, detail cards and experience cards.
- **28px**: the portrait card, the word band and the footer bar.
- **48–80px top corners**: the statistics sheet.
- **Pill**: the nav, every button, icon buttons, tech chips and the stats pill.
- **2px**: certificate cards, which read as paper, with an inset 1px border as a printed frame.

## Motion

All motion is CSS keyframes or a small `requestAnimationFrame`/`IntersectionObserver` handler in a
client component. There's no animation library.

- **Reveal** (`.reveal` + `RevealObserver`): opacity 0→1, translateY 28px→0 and blur 6px→0 over 0.8s
  with `cubic-bezier(0.16, 1, 0.3, 1)`, staggered through `--reveal-delay`.
- **CountUp:** headline stats count from 0 with ease-out-quart over 1.6s the first time 40% of the
  number is visible. Values are written straight to `textContent` (no React state), and the server
  render holds the final value.
- **WordBand:** the band's scroll progress maps to a `translate3d` across the word's overflow width.
- **Marquee** (`.marquee`): a 0→-50% translate on a doubled track. `--marquee-speed` sets the duration
  and `data-reverse` flips the direction. Edges fade through `.marquee-mask`.
- **Cube** (`.cube`): an 18s linear Y-rotation at a fixed X/Z tilt, offset per feature with a negative
  `animation-delay`.
- **Sticky stack:** `position: sticky` panels, plus an IntersectionObserver for the page counter.
- **Pulse:** the green live dot's ring.
- **Reduced motion:** `prefers-reduced-motion: reduce` turns off reveals, keyframes and smooth scroll,
  and CountUp and WordBand skip their animation.

## Components

### Buttons
- **Primary** (`button-primary`): Ink pill, black text, 20×40px padding, 18px bold label with a
  leading icon ("Hire Me"). Hover lifts 2px.
- **Outline** (`button-outline`): transparent pill with a Hairline border and an Ink label ("View My
  Resume"). Hover brightens the border.
- **Icon button:** a 40px Surface Raised circle with an 18px stroke icon; hover inverts to Ink on black.
- **Round arrow / back to top:** 48–56px Ink circles with a black arrow.

### Nav pill
A rounded track (black at 50%, `backdrop-blur`, Hairline border) holding the section links. The active
link gets a Surface Raised pill and Ink text; the others are Muted and turn Ink on hover.

### Core Focus frame
A 1px `signal-red/40` border with four 6px red squares sitting on the corners. It's the one place red
is used for structure.

### Stat counter bar
Four cells (2×2 on phones) with dashed Hairline dividers, a label in 11px Muted caps and a 900-weight
figure with a smaller suffix.

### Feature cube
Six 3px-black-bordered faces, each a saturated colour with a white-to-black sheen gradient and a black
pill label. It's decorative and `aria-hidden`.

### Work card
A paper-white (`#fafafa`) three-column card on a tinted full-screen panel: number, category and summary
on the left; image or giant figure in the centre; title, year, detail and an optional GitHub link on
the right. Photos are grayscale until hover.

### Experience card
A mono date tag above a Surface card with role, company, a one-line description, tech chips and a
native `<details>` "View details" holding the achievements.

`<details>` collapse was checked in Chromium (Playwright): closed cards measure 41px and expand when
opened. The inner list still reports its full height through `getBoundingClientRect()` while hidden,
so measure the `<details>` element itself, not its children. An earlier version of this doc warned
against native `<details>` because of a misleading measurement like that.

### Certificate card
An off-white (`#f4f4f2`) card with an inset frame, the issuer name in its brand colour, the course
title, Arif's name in Playfair italic, the date, and a dashed seal with the issuer's initials. Don't
add "Verified" or similar claims unless a real verification link exists.

### Ribbons
Two marquee strips tilted ±4°: roles in bold Ink caps on black, and the stack in mono Dim caps on
Surface Raised. Both are `aria-hidden`.

## Imagery

- The portrait (`/profile.webp`) is grayscale until hover.
- The work panels reuse two credited archival photos (Account Book Ledger, CC0; Servers in a Rack,
  CC BY-SA 3.0), shown grayscale in the card and blurred at 40% opacity behind it. Credits live in the
  footer and must stay while those images are used.
- Panels without a picture use a giant 900-weight figure ("400K+", "1,000+", "5P") instead of an
  invented screenshot.
- Tech logos come from the `simple-icons` package as inline SVG paths, so there are no remote requests.

## Do's and Don'ts

### Do
- **Do** keep large surfaces black or near-black, and spend colour on small props.
- **Do** pair each display or headline element with quiet Muted/Dim detail so one thing shouts per
  section.
- **Do** keep every claim factual and traceable to the CV (`src/data/profile.ts`). The design is loud;
  the copy isn't.
- **Do** give every new scroll or keyframe effect a reduced-motion path.
- **Do** check new layouts at 390px for sideways scroll; tilted and marquee elements must stay inside
  `overflow-x: clip`.

### Don't
- **Don't** darken Dim below `#85858e`, or add a new grey, without re-checking 4.5:1 on all three
  surfaces.
- **Don't** add a second italic phrase, a second accent colour token, or a light theme without
  revisiting this document.
- **Don't** copy text, images or code from the reference site; it's another person's portfolio.
- **Don't** invent screenshots, testimonials or verification badges.
- **Don't** reuse `--font-*` names for next/font variables (see Typography).
