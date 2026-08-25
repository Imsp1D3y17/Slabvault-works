# SlabVault — Brand Kit v1.1
**Digital vault & display planner for graded trading cards (PSA / BGS / CGC)**
Prepared for: implementation in Tailwind CSS via Claude Code

---

## 1. Brand Aesthetic & Vibe

**Name it: "Midnight Vault."** Not a portfolio tracker — a private gallery. The interface behaves like a museum after hours: near-black walls, a single trained light on each piece, everything else quiet. Slabs are photographed like objects under glass, not thumbnails in a grid. Chrome (nav, buttons, labels) stays minimal and gets out of the way so the card is always the brightest, highest-contrast thing on screen.

Two influences to hold in tension:
- **Vault / security** — hairline borders, dark matte surfaces, restrained motion, a sense of controlled access.
- **Gallery / auction house** — generous negative space, spotlight glows, museum-placard typography for metadata, gold reserved for genuinely high-value signals only.

What to avoid: bright white cards, drop shadows, rounded "app icon" corners, saturated SaaS blue, gauge/donut charts, bouncy motion, or anything that reads as a spreadsheet, a stock ticker, or a generic admin dashboard. If a component looks like it could belong to a budgeting app, it's wrong for SlabVault.

---

## 2. Color Palette — Masculine Revision (v1.1)

Three changes from v1.0, each fixing a specific tone problem — token *names* are unchanged so nothing already built breaks, only the hex values underneath shift:

- **Grays gained a steel undertone.** Neutral warm-gray read soft; gunmetal/steel-gray reads hard, industrial, deliberate.
- **Gold got demoted from "jewelry" to "brass/medal."** Bright yellow-gold (`#D4AF37`) is showroom bling. A deeper antique brass reads like a military decoration or a bank vault fixture — earned, not flashy.
- **Magenta is gone.** Pink-toned accents are about the single fastest way to undercut a masculine read, full stop. Replaced with a deep oxblood/crimson — same job (rare-flag signal), completely different register.

### Background (obsidian / gunmetal — makes colorful slabs pop)

| Token | Hex | Use |
|---|---|---|
| `bg-obsidian` | `#0A0A0D` | Primary app background |
| `bg-charcoal` ("Gunmetal") | `#14171C` | Secondary background — sidebars, section panels (cooler, steel-toned vs. v1.0's neutral gray) |
| `bg-void` | `#050506` | True black — modal scrims, fullscreen slab viewer |

### Surface / Card Containers

| Token | Value | Use |
|---|---|---|
| `surface-card` | `#1B1E24` | Default card/container background |
| `surface-elevated` | `#23262D` | Hover / active / popover surface |
| `surface-glass` | `rgba(255,255,255,0.04)` + `backdrop-blur-xl` | Frosted panels over hero art or full-bleed images |
| `border-hairline` | `#2E323A` | Solid 1px card borders |
| `border-hairline-soft` | `rgba(255,255,255,0.08)` | Borders over glass/photo surfaces |

### Accent (two-tier system — this is the key brand decision)

Don't treat neon and gold as interchangeable "brand colors." Split their jobs:

| Token | Hex | Role |
|---|---|---|
| `accent-cyan` ("Recon Cyan") | `#00D4E8` | **Primary action color.** Buttons, links, active states, focus rings, interactive data. Deepened slightly from v1.0 — reads more like an aviation/instrument-panel signal than a candy neon. This is what the user *clicks*. |
| `accent-cyan-dim` | `#00A8B8` | Cyan hover/pressed state |
| `accent-gold` ("Vault Brass") | `#B8935A` | **Prestige signal, not a UI color.** Reserved for grade badges 9.5–10 / Gem Mint, "vault highlights," featured/hero pieces. Antique brass, not showroom gold. Never used for buttons or nav. |
| `accent-gold-light` | `#D9B776` | Foil highlight — top of gold gradients only |
| `accent-magenta` ("Alert Crimson") | `#B3253D` | Sparing use: population-1, rare/error variants, limited-time alerts. Deep oxblood-crimson — reads as a warning flag at auction, not a notification badge on a consumer app. |

### Status (market movement / condition — separate from grade color)

| Token | Hex | Use |
|---|---|---|
| `status-success` ("Forest") | `#2F9E5C` | Value up, gem-clean condition — deeper forest green, not mint |
| `status-danger` | `#E5484D` | Value down, condition flag — kept brighter/distinct from Alert Crimson so the two don't get confused (this = market movement, crimson = rarity flag) |
| `status-warning` ("Amber") | `#D97706` | Pending grading, in transit, action needed — burnt amber, not caution-tape yellow |

### Text & Muted

| Token | Hex | Use |
|---|---|---|
| `text-primary` | `#F5F5F7` | Headlines, primary content (off-white — never pure `#FFFFFF`, which looks harsh on `#0A0A0D`) |
| `text-secondary` | `#9AA0A8` | Metadata, labels, cert/serial numbers, timestamps — cooled toward blue-gray |
| `text-tertiary` | `#5C6169` | Disabled, placeholder, least-important captions |
| `text-on-accent` | `#0A0A0D` | Text sitting on top of cyan/gold fills |

**Contrast note:** `text-primary` on `bg-obsidian` = ~17.5:1 (AAA). `text-secondary` on `bg-obsidian` = ~6.9:1 (AA/AAA for normal text). `accent-cyan` on `bg-obsidian` = ~11.9:1 — safe for text and icons, not just fills.

---

## 3. Typography

**System: geometric display + neutral UI sans + mono for anything that needs to look "authenticated."**

| Role | Primary choice | Fallback stack | Notes |
|---|---|---|---|
| **Display / Headlines** | `Clash Display` (Fontshare, free) | `Inter Tight, system-ui, sans-serif` | Bold, geometric, confident — use for H1/H2, hero card names, section titles. Weight 600–700 only; avoid using it below 20px. |
| **UI / Body** | `General Sans` (Fontshare, free) | `Inter, system-ui, sans-serif` | Neutral workhorse for body copy, nav, buttons, forms. If you want zero non-Google font vendors, drop `Clash Display`/`General Sans` and run `Inter` + `Inter Tight` for both roles — still clean, slightly less distinctive. |
| **Mono / Data** | `JetBrains Mono` (Google Fonts) | `IBM Plex Mono, ui-monospace, monospace` | **Mandatory for:** cert numbers, serial numbers, PSA/BGS/CGC grade values, population counts, prices. The monospace treatment is what makes numbers feel "verified" rather than decorative. |
| **Plate Label** *(section headers, "rooms")* | `General Sans` (same as UI) | `Inter, system-ui, sans-serif` | **v1.1: replaces the italic serif treatment.** Uppercase, 500 weight, `tracking-[0.15em]`, `text-secondary` — reads like text engraved into a brass plate rather than a gallery caption. No serif, no italic — those read soft/editorial, which works against the masculine direction. |

**Type scale (Tailwind-friendly):**
- Display: `text-4xl`–`text-6xl`, `Clash Display` 600–700, `tracking-tight`
- H2/H3: `text-2xl`–`text-3xl`, `Clash Display` 600
- Body: `text-sm`–`text-base`, `General Sans` 400–500
- Metadata/labels: `text-xs`, `General Sans` 500, `tracking-wide`, `uppercase`, `text-secondary`
- Cert/serial/grade: `text-sm`, `JetBrains Mono` 500, `tracking-wide`

---

## 4. Visual UI Guidelines

### Slab / card display
- Fixed aspect-ratio container (`aspect-[2.5/3.5]`, matching real slab proportions) — never crop or stretch the card image.
- Corner radius: **4–8px only** (`rounded-md`). This should read as an acrylic slab holder, not a rounded app icon.
- 1px `border-hairline`, never a drop shadow, as the default frame.
- Behind the slab, a soft radial glow at 8–12% opacity in the *relevant accent* (cyan for standard, gold for graded 9.5+) — blurred 60–100px, positioned center — simulates a spotlight, not a sticker glow.
- Hover/focus: scale `1.02`, border shifts to `accent-cyan` at 40% opacity, glow intensifies to ~18%. Transition `400ms ease-out` minimum — nothing snappy or bouncy.
- The card image is always the highest-contrast element on screen. No gradients, reflections, or overlays drawn on top of the card art itself.
- **Label plate — required, not optional.** Every slab card carries a small plate beneath the image: card name in `sans` 500, grader + grade in `mono` `text-xs` `text-secondary` (e.g. `PSA · 10 · GEM MT`), cert number in `mono` `text-xs` `text-tertiary`. This is the single most important physical cue borrowed from real collection displays — a slab without its plate reads as a stock photo, not a vaulted asset.

### Grade badges
- Small pill (`rounded-full`, `px-2.5 py-0.5`), `JetBrains Mono` for the numeric grade, `General Sans` uppercase + `tracking-wide` for the label.
- **Gem Mint / 9.5–10:** gold gradient fill (`accent-gold` → `accent-gold-light`), `text-on-accent`.
- **Standard grades:** transparent fill, `border-hairline`, `text-secondary` — quiet by default.
- **Population-1 / rare variant:** thin `accent-magenta` outline only — don't fill it. Reserve solid magenta fills for nothing; outline is enough signal.
- Never use `status-success`/`status-danger` (green/red) on a grade badge — those colors are reserved for market delta, not condition, or the two will get visually confused.

### Metrics & stats
- No gauges, donuts, or speedometer charts — they read as generic BI dashboard, not appraisal document.
- Format every stat like a line on a certificate: small `text-xs uppercase tracking-wide text-secondary` label above, large `text-2xl` `text-primary` value below, optional small delta chip in `status-success`/`status-danger` beside it.
- Align stat blocks in a strict grid with generous gutters (`gap-8`+) — treat it like a spec sheet, not a ticker tape.

### Layout / grid
- Gallery-wall model: one asymmetric featured/hero slot + a regular grid beneath, not a uniform wall of equal-size cards.
- Group by set/era/box as "rooms" — a hairline divider plus a small-caps `Museum Label`-style section header, generous vertical space (`py-12`+) between sections.
- Minimum gutter between cards: `24px`; prefer `32px` at desktop widths. Crowding kills the luxury read — a dense wall-of-slabs grid reads as storage, not a collection. Cap grid rows visually (e.g. "View all 40" past 2–3 rows) rather than rendering everything at once.
- **Section light-cap.** Each "room" section gets a thin (2px) horizontal gradient line at its top edge — `accent-cyan` at 40% opacity fading to transparent at both ends — echoing a museum cove-light strip. Use once per section header, never per card; this is a room cue, not a card decoration.

### Motion
- Standard transition: `400–600ms`, `ease-out` (or a custom cubic-bezier like `cubic-bezier(0.16, 1, 0.3, 1)`). No spring/bounce easings anywhere.
- Reveal pattern: fade + slight scale-up (`0.98 → 1`), never slide-from-off-screen.
- Reserve pulsing glow animation for exactly one meaning: "newly added / newly graded / rare" — if everything glows, nothing does.

### Iconography
- Thin-line only, `1.5px` stroke, no filled icon sets.
- Default icon color `text-secondary`; only shift to `accent-cyan` on active/selected state.
- Security/vault motifs (lock, seal, shield) should appear as fine hairline linework, not heavy badge graphics — subtlety is the luxury cue, not ornamentation.

---

## 5. Tailwind Implementation

Drop into `tailwind.config.js` (`theme.extend`):

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        bg: {
          obsidian: '#0A0A0D',
          charcoal: '#14171C', // "Gunmetal" — v1.1 masculine revision
          void: '#050506',
        },
        surface: {
          card: '#1B1E24',
          elevated: '#23262D',
          glass: 'rgba(255,255,255,0.04)',
        },
        border: {
          hairline: '#2E323A',
          soft: 'rgba(255,255,255,0.08)',
        },
        accent: {
          cyan: '#00D4E8',        // "Recon Cyan" — deepened from #00E5FF
          'cyan-dim': '#00A8B8',
          gold: '#B8935A',        // "Vault Brass" — antique brass, was bright gold #D4AF37
          'gold-light': '#D9B776',
          magenta: '#B3253D',     // "Alert Crimson" — oxblood, was pink-magenta #FF2D78
        },
        status: {
          success: '#2F9E5C',
          danger: '#E5484D',
          warning: '#D97706',
        },
        text: {
          primary: '#F5F5F7',
          secondary: '#9AA0A8',
          tertiary: '#5C6169',
          onaccent: '#0A0A0D',
        },
      },
      fontFamily: {
        display: ['"Clash Display"', '"Inter Tight"', 'system-ui', 'sans-serif'],
        sans: ['"General Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        slab: '6px',
      },
      aspectRatio: {
        slab: '2.5 / 3.5',
      },
      boxShadow: {
        'glow-cyan': '0 0 80px -20px rgba(0, 229, 255, 0.35)',
        'glow-gold': '0 0 80px -20px rgba(212, 175, 55, 0.35)',
        'glow-cyan-sm': '0 0 40px -12px rgba(0, 229, 255, 0.25)',
        'glow-gold-sm': '0 0 40px -12px rgba(212, 175, 55, 0.25)',
      },
      backgroundImage: {
        // section header "cove light" cap — see Layout / grid guidelines
        'light-cap': 'linear-gradient(90deg, transparent 0%, rgba(0,212,232,0.4) 50%, transparent 100%)',
      },
      transitionTimingFunction: {
        vault: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
      },
      backdropBlur: {
        vault: '24px',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
```

**Fonts to load** (self-host or CDN, add to `<head>` / `_document` / `layout.tsx`):

```html
<!-- Google Fonts: JetBrains Mono -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

<!-- Fontshare: Clash Display + General Sans (free, no account needed) -->
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=general-sans@400,500,600&display=swap" rel="stylesheet">
```

*Zero-external-vendor alternative:* replace the Fontshare `<link>` with Google's `Inter` + `Inter Tight`, and update `fontFamily.display`/`fontFamily.sans` accordingly — everything else in this kit (colors, spacing, motion, component rules) is unaffected.

**Example slab card class composition** (image + required label plate):

```html
<div class="group">
  <div class="aspect-slab rounded-slab bg-surface-card border border-border-hairline
              shadow-glow-cyan-sm group-hover:shadow-glow-cyan group-hover:border-accent-cyan/40
              group-hover:scale-[1.02] transition-all duration-400 ease-vault p-4">
    <!-- slab image -->
  </div>
  <div class="mt-2 px-1">
    <p class="font-sans text-sm text-text-primary">Charizard · Base Set</p>
    <p class="font-mono text-xs text-text-secondary tracking-wide">PSA · 10 · GEM MT</p>
    <p class="font-mono text-xs text-text-tertiary tracking-wide">#47281955</p>
  </div>
</div>
```

**Example section header with light-cap:**

```html
<div class="pt-3 pb-8">
  <div class="h-px w-full bg-light-cap mb-6"></div>
  <h2 class="font-sans font-medium text-sm tracking-[0.15em] text-text-secondary uppercase">Base Set · 1999</h2>
</div>
```

---

## Implementation notes (this repo)

This is the brand kit as delivered. A couple of places where the actual
implementation in this repo deliberately diverges, for reasons worth
recording:

- **`content` glob**: `tailwind.config.js` here scans `./app/**` and
  `./components/**`, not `./src/**` — this project doesn't use a `src/`
  directory.
- **`plugins: [require('@tailwindcss/aspect-ratio')]`** is omitted. This
  project runs Tailwind v4, which has `aspect-ratio` utilities built in
  as a core plugin, so `aspectRatio: { slab: '2.5 / 3.5' }` alone already
  produces the `aspect-slab` utility — the legacy plugin isn't needed and
  wasn't installed.
- **`boxShadow.glow-cyan` / `glow-gold`** are implemented with rgba
  triplets matching the *v1.1* accent hex values (`rgba(0, 212, 232, …)`
  / `rgba(184, 147, 90, …)`), not the `rgba(0, 229, 255, …)` /
  `rgba(212, 175, 55, …)` shown in the code sample above. Those are the
  old v1.0 cyan/gold values — the `light-cap` gradient above was updated
  to the new cyan but the two shadow definitions were not, so this repo
  corrects that drift rather than reproducing it.
- Legacy flat color tokens (`obsidian`, `magenta`, `cyan` — no `bg-`/
  `accent-` prefix) also exist in `tailwind.config.js`, left over from
  an earlier "Neon Dramatic" landing-page pass (`app/page.tsx`). They're
  a separate, older system — new work should use the tokens in this kit.
