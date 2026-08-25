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
        // --- Legacy "Neon Dramatic" tokens (Step 1 setup) — kept so nothing
        // already shipped (app/page.tsx) breaks. New work should use the
        // SlabVault Brand Kit tokens below instead. ---
        obsidian: {
          DEFAULT: "#0B0C10",
          light: "#1F2833",
        },
        magenta: {
          DEFAULT: "#FF007F",
        },
        cyan: {
          DEFAULT: "#00F0FF",
        },

        // --- SlabVault Brand Kit v1.0 ("Midnight Vault") ---
        bg: {
          obsidian: "#0A0A0C",
          charcoal: "#121216",
          void: "#050506",
        },
        surface: {
          card: "#1A1A1F",
          elevated: "#202027",
          glass: "rgba(255,255,255,0.04)",
        },
        border: {
          hairline: "#2A2A31",
          soft: "rgba(255,255,255,0.08)",
        },
        accent: {
          cyan: "#00E5FF",
          "cyan-dim": "#00B8CC",
          gold: "#D4AF37",
          "gold-light": "#F1D583",
          magenta: "#FF2D78",
        },
        status: {
          success: "#2FDD8F",
          danger: "#FF4D6D",
          warning: "#FFB020",
        },
        text: {
          primary: "#F5F5F7",
          secondary: "#9A9AA5",
          tertiary: "#5C5C64",
          onaccent: "#0A0A0C",
        },
      },
      fontFamily: {
        display: ['"Clash Display"', '"Inter Tight"', "system-ui", "sans-serif"],
        sans: ['"General Sans"', "Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', "ui-monospace", "monospace"],
        label: ["Fraunces", "Georgia", "serif"],
      },
      borderRadius: {
        slab: "6px",
      },
      aspectRatio: {
        slab: "2.5 / 3.5",
      },
      boxShadow: {
        "glow-cyan": "0 0 80px -20px rgba(0, 229, 255, 0.35)",
        "glow-gold": "0 0 80px -20px rgba(212, 175, 55, 0.35)",
        "glow-cyan-sm": "0 0 40px -12px rgba(0, 229, 255, 0.25)",
        "glow-gold-sm": "0 0 40px -12px rgba(212, 175, 55, 0.25)",
      },
      backgroundImage: {
        // Section header "cove light" cap — see brand kit Layout / grid guidelines.
        "light-cap":
          "linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.4) 50%, transparent 100%)",
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
