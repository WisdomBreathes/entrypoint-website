# Entrypoint Canada — Brand Kit

> Single consolidated reference for designers, developers, and AI tools working on this site.
> Generated from a read-only scan of the repository on 2026-05-02.
> Updated 2026-05-02: hero one-off colours tokenised; about page H2 updated.

---

## 1. Colours

### Core Palette

| Token | Hex | Role |
|-------|-----|------|
| `--color-navy` | `#1C2456` | Primary brand — headings, logo, links |
| `--color-navy-light` | `#2A3470` | Navy hover state |
| `--color-crimson` | `#8B1A1A` | Primary accent — section labels, credential bar |
| `--color-crimson-mid` | `#A0272A` | Crimson hover |
| `--color-crimson-soft` | `#C0393C` | Lighter crimson variant |
| `--color-burgundy` | `#3D1215` | Deep red — dark buttons, borders |
| `--color-burgundy-dark` | `#2C0D0F` | Burgundy button hover |
| `--color-gold` | `#C4973A` | Primary CTA, badges, accents |
| `--color-gold-light` | `#F0D9A8` | Badge text on dark backgrounds |
| `--color-gold-pale` | `#FAF3E0` | Gold-tinted section backgrounds |
| `--color-cream` | `#FAF7F2` | Page background |
| `--color-warmgray` | `#F4F1EB` | Card backgrounds, separators |
| `--color-border` | `#E8E3D9` | Standard border / divider |
| `--color-border-light` | `#D9D2C5` | Secondary border |
| `--color-footer-bg` | `#111827` | Footer background |

### Text Colours

| Token | Hex | Role |
|-------|-----|------|
| `--color-text-dark` | `#1A1A2E` | Primary headings and body text |
| `--color-text-muted` | `#5C5C7A` | Secondary / muted text |
| `--color-text-secondary` | `#45465E` | Paragraphs, secondary headings |
| `--color-text-gold-dark` | `#1A0F00` | Text on gold CTA buttons |

### Hero Section One-offs

These five colours appear only inside `HeroSection.astro` and are intentionally scoped there. They are warm variants of the core gold/red/brown family used to style the consultation card and hero badge.

| Token | Hex | Role |
|-------|-----|------|
| `--color-hero-gold` | `#D4AF62` | H1 `<em>` accent ("handled.") |
| `--color-hero-gold-light` | `#E8C87A` | Eyebrow badge text |
| `--color-hero-burgundy-dark` | `#7A1C1C` | Card "Initial consultation" label |
| `--color-hero-brown` | `#2C1810` | Card title ("Start with a conversation") |
| `--color-hero-cream` | `#F5EDE0` | Checklist icon circle backgrounds |

### Colour Usage Rules
- **Navy** on white/cream = headings, links
- **Crimson** = section labels (eyebrows), borders, secondary buttons
- **Gold** = primary CTA buttons, badges, emphasis accents
- **Burgundy** = dark section backgrounds, dark buttons
- **Cream / Warm gray** = alternating section backgrounds
- **Dark overlay** (rgba 10,5,5) = hero and section photo overlays
- **Cream overlay** (rgba 250,247,242) = testimonials photo overlay

---

## 2. Typography

### Font Families

| Family | Source | Weights | Role |
|--------|--------|---------|------|
| Playfair Display | Google Fonts | 600, 700 | Display headings (H1, H2) |
| Inter | Google Fonts | 300, 400, 500, 600 | Everything else |

### Type Scale

| Role | Family | Size | Weight | Case |
|------|--------|------|--------|------|
| H1 hero | Playfair Display | 52–62px | 700 | Title Case |
| H1 inner pages | Playfair Display | 30–40px | 700 | Title Case |
| H2 sections | Playfair Display | 24–36px | 600 | Title Case |
| H3 card titles | Inter | 16–22px | 600 | Title Case |
| Eyebrow labels | Inter | 10–11px | 600 | ALL CAPS |
| Lead paragraph | Inter | 15–17px | 300 | Sentence case |
| Body | Inter | 14–15px | 400 | Sentence case |
| Button text | Inter | 14–15px | 500 | Title Case |
| Nav links | Inter | 14px | 500 | Title Case |

### Google Fonts URL
```
https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600&display=swap
```

**Note:** Inter is loaded at weights 300/400/500/600. All `font-weight: 700` declarations in the codebase explicitly set `font-family: 'Playfair Display'` on the same element — no synthesised bold occurs anywhere. Inter 700 is a latent risk to watch if new elements are added.

---

## 3. Spacing & Layout

### Container
- Max width: `1200px`, `margin: 0 auto`
- Horizontal padding: `56px` (desktop) → `36px` (tablet) → `20px` (mobile)
- Responsive breakpoints: `768px` (tablet), `1024px` (desktop)

### Section Vertical Rhythm
- Standard section padding: `64px` top/bottom
- Large sections (programs, services): `80px`
- Extra large (process): `96px`
- Hero top padding: `72px`

### Component Spacing
- Card internal padding: `24px` (standard), `32px` (large)
- Grid gaps: `16px` (tight), `24px` (standard), `32px` (large), `56px` (hero split)
- Gap between eyebrow + H2: `4–8px`
- Gap between H2 + subheadline: `8–12px`
- Gap between subheadline + content: `28–40px`

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-pill` | `999px` | Badge pills, tags |
| `--radius-circle` | `50%` | Process step circles |
| `--radius-xl` | `22px` | About consultant card (outer) |
| `--radius-lg` | `20px` | Stat cards (inner, optical nesting) / eyebrow badges |
| `--radius-hero-card` | `16px` | Hero consultation card |
| `--radius-md` | `12px` | General buttons, components |
| `--radius-card` | `10px` | Standard service cards |
| `--radius-sm` | `8px` | Smaller elements |
| `--radius-xs` | `7px` | Global button classes (`.btn-gold`, `.btn-burgundy`, `.btn-crimson`) |
| `--radius-btn` | `6px` | Skip link, TOC nav links, inline button overrides on programs/thank-you pages |

---

## 4. Components

### Global (all pages)
| Component | File | Description |
|-----------|------|-------------|
| Layout wrapper | `src/layouts/Layout.astro` | HTML shell, SEO, fonts, schema |
| Navbar | `src/components/Navbar.astro` | Sticky top nav, logo, CTA, mobile hamburger |
| Footer | `src/components/Footer.astro` | Dark footer, legal text, nav links |

### Homepage Components
| Component | File | Description |
|-----------|------|-------------|
| Hero | `src/components/HeroSection.astro` | Full-viewport hero, consultation card, trust stats |
| Credential Bar | `src/components/CredentialBar.astro` | Crimson strip with 3 RCIC trust points |
| Services Grid | `src/components/ServicesGrid.astro` | 3-col card grid, 5 services + 1 CTA card |
| Process Steps | `src/components/ProcessSteps.astro` | 4-step numbered flow with connector |
| About Section | `src/components/AboutSection.astro` | Consultant portrait card + bio + stat cards |
| Testimonials | `src/components/TestimonialsGrid.astro` | 2-col testimonial cards with photo background |
| FAQ | `src/components/FaqSection.astro` | Expandable details/summary + schema.org |
| CTA Section | `src/components/CtaSection.astro` | Dark CTA block with credential badges |

### Button Variants
| Class | Background | Text | Hover |
|-------|-----------|------|-------|
| `.btn-gold` | `#C4973A` | `#1A0F00` | Deeper gold + shadow |
| `.btn-burgundy` | `#3D1215` | White | `#2C0D0F` |
| `.btn-crimson` | `#8B1A1A` | White | `#A0272A` |
| `.btn-ghost` | Transparent | White | White border + bg tint |

All global button classes: `border-radius: 7px`, `padding: 14px 20–28px`, Inter 500–600. Several pages (programs, thank-you) override to `6px` via inline styles.

---

## 5. Copy Guidelines

### Voice & Tone
- **Professional, calm, authoritative.** No hype, no urgency pressure, no exclamation marks.
- **Confidence through credentials**, not through adjectives. "RCIC Registered" beats "the best consultant".
- **Second person in CTAs and service copy** ("your path", "we'll handle it for you").
- **Third person in bio sections** ("Sabiha brings…", "She has…").
- No immigration jargon without context.

### Headline Rules
- H1: Title Case, often ends with a period for impact. 5–9 words.
- H2: Title Case, 5–10 words. Often two-clause contrast structure.
- Eyebrow labels: ALL CAPS, Inter 600, 10–11px, crimson or gold. 2–5 words.
- No question marks in H1. One question mark in H2 is acceptable.
- Spell out "and" — do not use "&" in headings.

### CTA Text Rules
- Primary gold button: `"Book a free consultation"` — canonical form used in 5+ locations.
- Navbar (space-constrained): `"Book a consultation"` — accepted shorter variant.
- Hero card (first-person): `"Book my free consultation"` — one deliberate exception.
- Phone CTA: `"Call [number]"` — always spell out the number.
- Link-style: `"Learn more →"` with right arrow character.
- Avoid: "Get started", "Click here", "Submit", "Sign up".
- `"Schedule a consultation"` in `ServicesGrid.astro` is a text link (not a button) in the 6th CTA card — lower priority to align.

### Section Structure Template
```
[EYEBROW LABEL — ALL CAPS]
[H2 Heading in Title Case]
[One or two sentence subheadline in sentence case]
[Content]
[Optional CTA]
```

---

## 6. Image Assets

### Photography
8 Unsplash photo sets, each in 3 formats (JPEG + 800w WebP + 1400w WebP):

| Photo | Page(s) |
|-------|---------|
| ampersand-studios (hands) | Homepage hero |
| leonard-laub (office) | About page hero |
| john-lee (professional) | Contact page hero |
| ashley-ross (professional) | Services page hero |
| cole-keister (professional) | Programs page hero |
| denny-rodriguez | Homepage testimonials background |
| juan-rojas | Homepage about section background |
| hermes-rivera | Homepage CTA section background |

### Portraits
- `sabiha-iftakhar-portrait.jpg` — JPEG only (no WebP variants). Used in `AboutSection.astro` (136×136px circle, homepage) and `about.astro` (320×320px square card, About page). No responsive image treatment applied — served as a raw static asset from `public/`.

### SVG Logos
- `public/logo-full.svg` — Horizontal wordmark (Navbar desktop)
- `public/logo-icon.svg` — Icon mark only (Navbar mobile / compact)
- `public/favicon.svg` — Favicon

### Image Rules
- All hero images use `fetchpriority="high"` and are preloaded in `<head>`.
- All below-fold images use `loading="lazy"`.
- Always provide WebP variants at 800w and 1400w for photography.

---

## 7. Design Inconsistencies

Remaining items that have not yet been resolved, in priority order.

### Outstanding — Actionable

**1. `rgba()` values are not tokenised**
There are 30+ distinct `rgba()` opacity combinations for white-on-dark text, overlays, and burgundy shadows scattered across components as hardcoded values. None are CSS variables. Shadow and overlay changes require grep-and-replace across multiple files. Tokens exist in `tokens.css` for the most common shadow values but they are not yet referenced in component files.

**2. Portrait lacks WebP variant**
`sabiha-iftakhar-portrait.jpg` has no responsive WebP. Every other photo on the site has a 800w and 1400w WebP. Requires: generating the WebP file + wrapping both `<img>` tags in `<picture>` elements in `AboutSection.astro` and `about.astro`. Approved shell command available (pending code change approval).

**3. Button border-radius split (6px vs 7px)**
Global button classes define `border-radius: 7px`. Programs page and thank-you page use inline style overrides of `6px`. The navbar mobile CTA uses `6px` while desktop uses `7px`. The intent behind the inline overrides is ambiguous — consolidation was blocked pending clarification of which value is canonical.

**4. Eyebrow letter-spacing varies across components**
Values range from `0.06em` to `0.2em` with no single canonical value. Should be standardised to one token (`--tracking-wider: 0.08em` recommended, or add a dedicated `--tracking-eyebrow` token).

**5. `"Schedule a consultation"` in ServicesGrid.astro**
One text-link CTA in the sixth card uses "Schedule" instead of "Book". Minor but breaks the single-verb rule established by all other CTAs.

### Outstanding — Monitor Only

**6. Inter Bold (700) not loaded**
All current `font-weight: 700` declarations pair it with Playfair Display, so no synthesised bold exists today. Latent risk: if any new Inter element uses `font-weight: 700`, it will render as synthesised bold. Safe to add Inter 700 to the Google Fonts request pre-emptively if the design expands.

**7. Orphaned image**
`public/images/praveen-kumar-nandagiri-O-1hOdIqQz0-unsplash.jpg` — zero source file references. Safe to delete once confirmed it is not used in any external deployment, cache, or marketing asset.

### Resolved

- ~~Hero one-off colours hardcoded without tokens~~ — tokenised 2026-05-02 under `--color-hero-*` in `tokens.css`; `HeroSection.astro` updated to use `var()` references.
- ~~Duplicate H2 across homepage and about page~~ — about page H2 changed to *"The person behind your file."* on 2026-05-02. Homepage `AboutSection.astro` retains *"Guided by expertise. Driven by your success."*
