---
name: Arif Rahman Mubarok — Personal Site
description: A software engineer's CV site built as the object his specialty produces — a stack of filed folders and a ledger of figures.
colors:
  folder-sand: "#e6dbc7"
  manila: "#ddd0b9"
  manila-deep: "#d3c4a6"
  ledger-cobalt: "#062b8a"
  muted-cobalt: "#2a4a8f"
typography:
  display:
    fontFamily: "Switzer, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.2rem + 6.5vw, 9rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  head:
    fontFamily: "Switzer, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 3.2vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.1
  figure:
    fontFamily: "Switzer, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.6rem + 5vw, 6rem)"
    fontWeight: 600
    lineHeight: 1
  lead:
    fontFamily: "Switzer, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Switzer, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: "Switzer, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  flat: "0px"
  pill: "9999px"
spacing:
  container-margin: "clamp(16px, 4vw, 32px)"
  section-gap: "clamp(120px, 10vw, 220px)"
  sheet-padding: "48px 40px"
components:
  button-primary:
    backgroundColor: "{colors.ledger-cobalt}"
    textColor: "{colors.folder-sand}"
    rounded: "{rounded.flat}"
    padding: "12px 24px"
  button-ghost:
    backgroundColor: "{colors.folder-sand}"
    textColor: "{colors.ledger-cobalt}"
    rounded: "{rounded.flat}"
    padding: "12px 24px"
---

# Design System: Arif Rahman Mubarok — Personal Site

## Overview

**Creative North Star: "The Open Folder"**

The site is built as the physical object its subject's own specialty would produce: a stack of filed
folders you open through, and a ledger of figures and roles. The hero isn't a banner with a nav bar
bolted on — the six section names *are* folder tabs, peeking out of a stack on a cobalt letterhead
ground, with the front one already open. The idea traces straight back to the one fact that makes this
candidate specific: he batches Malaysia's e-Invoice submissions and exports database records for a
living, so the page itself is stationery — a letter, a ledger, a menu sheet, a coupon — not a generic
component kit wearing his name.

Density follows the object it's imitating: the hero's folder stack is tight and tabbed, the ledger rows
in "Where I've worked" are compact until opened, and the stat column reads like figures ruled into a
page. Between those, full-bleed real pictures (an archival account-book cover, a 19th-century batik
textile, a server rack, a muted typing loop) carry the "paper and ink" world further without ever
standing in for a product shot he doesn't have. The palette is two tones doing every job: one cobalt ink,
one sand paper, nothing else.

Confirmed rejections: no gradients, no shadows on anything at rest, no eyebrow labels, no card grids, no
second accent hue, no rounded corners except on things that are genuinely round (a portrait, a dot, a
coupon notch). Dark mode was dropped entirely for this build — the object this page imitates (a letter,
a ledger, a filed folder) exists in one ink on one paper in the real world, and a second palette would
break that premise, not extend it.

**Key Characteristics:**
- The page's own object-ness carries the identity: folders, scalloped letter sheets, a ledger table, a
  clip-out coupon, each a flat shape with real cut edges, never an outlined box.
- One typeface (Switzer), one hue (Ledger Cobalt) against one paper tone (Folder Sand) and its two
  tonal steps (Manila, Manila Deep).
- Every section is a structurally different composition from its neighbor; nothing repeats as a card
  grid.
- Real, credited pictures of the subject's world (not stock, not invented product shots) appear at
  least once per section that has room for one, duotoned into the palette.

## Colors

Two tones in total — one paper, one ink — plus two tonal steps of the paper used for layered surfaces.
No gradient, no second hue, no opacity-based "muted" scale: every color here is a flat, named value.

### Primary
- **Ledger Cobalt** (`#062b8a`): the only ink in the system. Fills the hero ground, every primary
  button, every folder tab, every heading and running-text color, and the Contact coupon's field. It is
  not an "accent" reserved for small moments — on this page, cobalt-on-sand and sand-on-cobalt are the
  two states everything lives in.
- **Muted Cobalt** (`#2a4a8f`): the one secondary-text step, used for captions, metadata, and
  supporting lines where full Ledger Cobalt would be too heavy. Checked against both Folder Sand and
  Manila at 1440/768/390px — contrast clears 4.5:1 on both (the predecessor hex, `#3a5aa8`, fell to
  4.3:1 on Manila at tablet width and was replaced for that reason).

### Neutral
- **Folder Sand** (`#e6dbc7`): the page ground, and the "paper" color reversed-out as text/fill on a
  cobalt surface (buttons, the coupon's inputs, the footer's accent-ink role).
- **Manila** (`#ddd0b9`): one tone darker than Folder Sand. Used for the About and Credentials sheets,
  alternating folder-tab bands, and any surface that needs to read as "a layer above the page" without
  a shadow.
- **Manila Deep** (`#d3c4a6`): a second tone down, for the alternating folder band and the Showcase
  project's info cell. Manila / Manila Deep / Folder Sand is the system's only depth cue.

### Named Rules
**The Two-Tone Rule.** The entire palette is Ledger Cobalt plus the Folder Sand/Manila family — no
third hue, no tint derived from opacity. A new "lighter" or "muted" value is one of the two named tones
or Muted Cobalt; it is never invented as `rgba(ink, 0.4)`.

**The Reversal Rule.** Depth and hierarchy come from *which* surface is cobalt and which is sand, not
from shadow or tint. The hero, the Contact coupon, and the footer are cobalt grounds with sand text and
fills; every other section is a sand ground with cobalt text. A component never mixes the two
directions (cobalt text on cobalt ground, or sand-on-sand) — pick one reversal per surface.

## Typography

**Typeface:** Switzer (400/500/600), loaded from Fontshare — one neo-grotesk doing every job, text and
display alike. No second face, no monospace anywhere on the page (there is no code/data context that
would earn one).

**Character:** Exact and unshowy. Switzer's tight, even letterforms keep the dense, quantified content
(job history, certification dates, a GPA) legible at a glance without adding a voice of their own — the
real pictures and the object-shapes carry the personality; the type stays out of the way.

### Hierarchy
- **Display** (600, `clamp(2.25rem, …, 9rem)` / 36–144px, 0.98 line-height, −0.03em tracking): the hero
  name only, authored as two lines ("Arif Rahman" / "Mubarok") so it never wraps unpredictably at any
  width.
- **Head** (600, `clamp(2rem, …, 4rem)` / 32–64px): one per section — "Where I've worked," "Credentials,"
  "Let's connect," etc.
- **Figure** (600, `clamp(2.75rem, …, 6rem)` / 44–96px, tabular-nums): the five stat numbers in
  "Numbers" only. A role distinct from Display and Head because it has to hold a decimal point (`3.7/4.0`)
  in clean alignment against whole numbers (`50`, `6M+`) — see the Decimal-Align Rule below.
- **Lead** (400, `clamp(1.25rem, …, 1.625rem)` / 20–26px): the hero's supporting sentence and any other
  single statement that needs more weight than body copy but isn't a heading.
- **Body** (400, `clamp(1.0625rem, …, 1.1875rem)` / 17–19px): all running text — bios, ledger-row
  detail, achievement and description bullets, coupon copy. Deliberately kept at 17px or above
  everywhere; an earlier pass at 14px running text was the single biggest "sizes in use" and
  "body-size" finding from `inspect.mjs` and was raised project-wide.
- **Small** (400, `clamp(0.8125rem, …, 0.875rem)` / 13–14px): metadata only — ledger-row highlight and
  year, stat captions, cert issuer/date, footer credits. Never the dominant size on a screen.

### Named Rules
**The Decimal-Align Rule.** In "Numbers," each stat's value is split at the first non-digit character
into a whole part (right-aligned, fixed `5ch` width) and a suffix/decimal part (left-aligned). Whole
numbers (`50`, `6M+`) simply leave the suffix track empty. This is what lets `3.7/4.0` sit in the same
ruled column as `1,000+` without hand-kerning.

**The Five-Step Rule.** Display, Head, Figure, Lead, Body, Small — six named roles, but Figure only
ever appears in one section. Treat it as the one deliberate exception, not a precedent for adding a
seventh size; `inspect.mjs`'s `size-count` check flagged the system at 10 raw pixel values once in
testing, and every one of those traced back to an inline literal that should have referenced a step.

## Layout

A loose, content-driven grid rather than one fixed container: the hero and ledger table sit in a
`max-w-3xl`–`max-w-5xl` centered column, the About/Credentials sheets are fixed at 640px, Showcase and
Contact use their own proportions (a 50/50 split; a ~2.2:1 coupon). What stays constant everywhere is
the outer margin (`clamp(16px, 4vw, 32px)`, the same on both sides at every width) and the rule that a
section never leaves one half of the screen full and the other empty — a void is only valid when a
picture, a second column, or a figure closes the far side.

Section-to-section rhythm is `clamp(120px, 10vw, 220px)` of vertical padding, the "normal gap"; the one
exception is "Where I've worked," whose bottom padding is deliberately shorter (64px fixed) because its
ledger rows are short by default and a full gap-section there read as dead space in testing.

No two adjacent sections share a layout shape: folder stack → scalloped letter → ruled figure column →
full-bleed video → ledger table → split plate → scalloped menu sheet → clip-out coupon → flat footer.

## Elevation & Depth

Flat, full stop. Nothing on the page casts a shadow at rest or on hover — the house rule this direction
is built on. Depth is read entirely from the Reversal Rule (which surface is cobalt, which is sand) and
the Manila / Manila Deep tonal steps, never from a `box-shadow`.

### Named Rules
**The No-Shadow Rule.** If a surface needs to look "above" another, it either changes tone (Folder Sand
→ Manila → Manila Deep) or changes which color is ground vs. ink. A shadow is never the answer, including
on the live interactive elements (the ledger's expand control, the Showcase tabs) — their feedback is a
background-color/opacity change, not a lift.

## Shapes

Square corners everywhere except where something is genuinely round: the About portrait (a circle), the
dotted perforation on the Contact coupon (round dots), the coupon's own top/bottom notches (semicircles,
via `border-radius: 9999px` on absolutely-positioned pseudo-elements), and the Work section's expand
indicator (a 28px circle). Everything else — buttons, the folder bands, the sheets, the stat rows, the
coupon's inputs — is a flat rectangle with a real cut edge where the object calls for one: a trapezoid
tab (`clip-path: polygon(...)`) on every folder and sheet label, and a scalloped bottom edge (an SVG
dot-pattern image, not a CSS mask gradient) on the About and Credentials sheets.

### Named Rules
**The Cut-Edge Rule.** When a section needs visual interest at its boundary, the edge itself is shaped
(a tab, a scallop, a notch, a dotted perforation) rather than decorated with a border, divider, or
shadow. A hairline rule is never the answer — the two places that might once have reached for one (the
ledger's row separators, the About sheet's content/footer split) use spacing or the dotted-row motif
instead.

## Components

### Buttons
- **Shape:** flat rectangle, square corners, `12px 24px` padding, 44px+ tap target.
- **Primary** (`button-primary`): Ledger Cobalt fill, Folder Sand text. Used for "Let's connect" (hero
  and footer-adjacent) and "View repo" (Showcase).
- **Ghost** (`button-ghost`): Folder Sand fill, Ledger Cobalt text — the inverse of primary, used where
  a button sits on a cobalt ground needing a lighter second action (the hero's own CTA against its
  cobalt top band).
- **Hover:** opacity drop to ~85%, no shape or size change — consistent with the No-Shadow Rule's "color
  only, never lift" feedback language.

### Folder Tab (signature component)
The hero's six section links, each a flat Manila/Manila Deep band (alternating by index) with a Ledger
Cobalt trapezoid tab (`clip-path: polygon(0 100%, 0 0, 100% 0, 85% 100%)`) carrying the section name in
Folder Sand. Stacked with `margin-top: -44px` per band so only a peeking strip of each closed folder
shows behind the next; the front (last) folder is fully open and carries the Contact teaser copy. A
small `↓` glyph fades in at 90% opacity on hover to signal the band is a link. This is the page's one
loud, signature move — every other interactive element stays quiet by comparison.

### Ledger Row (Work section)
A full-width button (not a native `<details>` — see the Don't below) showing company, a one-line
highlight, and the year range in a single row, 44px+ tall. A 28px Manila-Deep circle holds a `+`/`−`
glyph. Clicking swaps `+`/`−` and conditionally renders the role's tech stack, achievement bullets
(Body size, full ink), and description bullets (Body size, Muted Cobalt) beneath it — true React
conditional rendering, so the collapsed state removes the content from the DOM rather than hiding it
with CSS.

### Stat Row (Numbers section)
One `Row({whole, suffix, caption})` per stat: Figure-size whole part right-aligned in a fixed `5ch`
track, Figure-size suffix left-aligned immediately after, and a Body-size Muted-Cobalt caption beneath,
full width. See the Decimal-Align Rule.

### Sheet (About, Credentials)
A fixed 640px Manila panel, `48px 40px`+ padding, square top corners and a scalloped bottom edge (the
`.scallop-edge` SVG dot-pattern). About adds a 44px circular portrait and a dotted-row + email "tear-off"
strip at its foot; Credentials repeats the same panel shape for a denser, grouped list (Languages, Daily
Stack, Certifications, Education) with no sub-dividers beyond spacing.

### Coupon (Contact)
A ~2.2:1 Ledger Cobalt card with two semicircular notches (top/bottom, centered) and a dotted vertical
perforation between a left "pitch" half (heading + one sentence + LinkedIn link) and a right form half
(name + message inputs, Folder-Sand fill, plus a submit button). Submission builds a `mailto:` link
client-side from the two fields — there is no backend, so this is the honest destination rather than a
simulated success state.

### Imagery treatment
Every found photograph and the typing video are passed through one shared `.duotone` CSS filter
(`grayscale(1) sepia(.35) hue-rotate(185deg) saturate(2.6) brightness(.92) contrast(1.05)`) so archival
material in unrelated original color casts (a marbled book cover, a batik textile, a server rack, a
keyboard) reads as one consistent cobalt-toned world rather than five different photo treatments.

## Do's and Don'ts

### Do:
- **Do** keep the palette to exactly Ledger Cobalt, Muted Cobalt, Folder Sand, Manila, Manila Deep — five
  named values, no opacity-derived tints.
- **Do** give every real photograph the shared `.duotone` filter before placing it; an un-toned photo
  breaks the one-world premise immediately.
- **Do** shape an edge (tab, scallop, notch, perforation) when a section boundary needs interest; never
  reach for a border or shadow.
- **Do** keep running text at Body size (17px+) or larger; Small is for metadata only.

### Don't:
- **Don't** reintroduce dark mode or a second theme — the object this page imitates has one ink, one
  paper, in the physical world, and a toggle would contradict the premise documented in Overview.
- **Don't** add a shadow anywhere, including as hover feedback; color/opacity only.
- **Don't** use native `<details>`/`<summary>` for the next collapsible pattern without checking it
  first — the rendering environment used for this build did not hide closed-details content (content
  stayed in the layout, `display: block`, regardless of the `open` attribute), which silently broke the
  eyebrow and body-size checks until the Ledger Row was rewritten as a real conditional render. Confirm
  native collapse actually hides content in whatever browser renders the deployed page before relying on
  it again.
- **Don't** add a sixth type-size step; fold a new size need into the nearest existing one first.
