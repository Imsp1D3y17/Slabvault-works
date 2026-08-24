/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neon Dramatic / Luxury Vault palette
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
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        // Crisp monospaced font for card certificate numbers
        mono: [
          "var(--font-cert-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
