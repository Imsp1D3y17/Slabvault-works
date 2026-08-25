/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  // Existing project content paths (app/ + components/, not src/) — preserved.
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Legacy "Neon Dramatic" tokens (Step 1 setup, luxury overhaul
        // pass) — kept scoped to app/page.tsx only. New in-app work should
        // use the SlabVault Brand Kit tokens below instead. ---
        obsidian: {
          // Deepened to a near-black matte per the luxury-vault overhaul —
          // was #0B0C10.
          DEFAULT: "#05050A",
          // Slightly lifted glass-surface tone — was #1F2833. Feature cards
          // themselves now use translucent white + backdrop-blur instead of
          // this as a solid fill (see app/page.tsx), so it's mostly a
          // fallback/secondary surface now.
          light: "#14141F",
        },
        magenta: {
          DEFAULT: "#FF007F",
        },
        cyan: {
          DEFAULT: "#00F0FF",
        },

        // --- SlabVault Brand Kit v1.1 ("Midnight Vault" — Masculine Revision) ---
        // Token names are unchanged from v1.0; only hex values shift (steel-toned
        // grays, brass instead of showroom gold, oxblood crimson instead of pink).
        bg: {
          obsidian: "#0A0A0D",
          charcoal: "#14171C",
          void: "#050506",
        },
        surface: {
          card: "#1B1E24",
          elevated: "#23262D",
          glass: "rgba(255,255,255,0.04)",
        },
        border: {
          hairline: "#2E323A",
          soft: "rgba(255,255,255,0.08)",
        },
        accent: {
          cyan: "#00D4E8",
          "cyan-dim": "#00A8B8",
          gold: "#B8935A",
          "gold-light": "#D9B776",
          magenta: "#B3253D",
        },
        status: {
          success: "#2F9E5C",
          danger: "#E5484D",
          warning: "#D97706",
        },
        text: {
          primary: "#F5F5F7",
          secondary: "#9AA0A8",
          tertiary: "#5C6169",
          onaccent: "#0A0A0D",
        },
      },
      fontFamily: {
        display: ['"Clash Display"', '"Inter Tight"', "system-ui", "sans-serif"],
        sans: ['"General Sans"', "Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', "ui-monospace", "monospace"],
        // v1.1 drops the italic-serif "Plate Label" role — section headers now
        // use font-sans directly (see components/SectionHeader.tsx).

        // --- Landing page ("Neon Dramatic") luxury typography — separate
        // from the Brand Kit families above so the two systems (marketing
        // page vs. in-app "Midnight Vault") don't get tangled together. ---
        "landing-display": ['"Playfair Display"', "Georgia", "serif"],
        "landing-sans": ["Inter", "system-ui", "sans-serif"],
        "landing-mono": ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        slab: "6px",
      },
      aspectRatio: {
        slab: "2.5 / 3.5",
      },
      boxShadow: {
        // rgba literals updated to match v1.1's new accent hex values — the
        // kit doc updated `light-cap` below to the new cyan but left these
        // two on the old v1.0 rgb() triplets, so this corrects that drift.
        "glow-cyan": "0 0 80px -20px rgba(0, 212, 232, 0.35)",
        "glow-gold": "0 0 80px -20px rgba(184, 147, 90, 0.35)",
        "glow-cyan-sm": "0 0 40px -12px rgba(0, 212, 232, 0.25)",
        "glow-gold-sm": "0 0 40px -12px rgba(184, 147, 90, 0.25)",

        // --- Landing page luxury-overhaul shadows ---
        // Multi-stop neon glow for the primary CTA (magenta + cyan).
        "landing-cta":
          "0 10px 40px -8px rgba(255,0,127,0.45), 0 10px 70px -14px rgba(0,240,255,0.35)",
        // Inner highlight + outer cyan glow for the hero badge pill.
        "landing-badge":
          "inset 0 1px 0 0 rgba(255,255,255,0.12), 0 0 30px -6px rgba(0,240,255,0.5)",
      },
      backgroundImage: {
        // Section header "cove light" cap — see brand kit Layout / grid guidelines.
        "light-cap":
          "linear-gradient(90deg, transparent 0%, rgba(0,212,232,0.4) 50%, transparent 100%)",
      },
      transitionTimingFunction: {
        vault: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
      backdropBlur: {
        vault: "24px",
      },
    },
  },
  plugins: [],
};
