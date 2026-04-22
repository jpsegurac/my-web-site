/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#4648d4",
        "primary-light": "#6063ee",
        "primary-dim": "#c0c1ff",
        surface: "#faf8ff",
        "surface-low": "#f2f3ff",
        "surface-container": "#eaedff",
        "surface-high": "#e2e7ff",
        "surface-highest": "#dae2fd",
        "on-surface": "#131b2e",
        "on-surface-muted": "#464554",
        secondary: "#505f76",
        "border-subtle": "#c7c4d7",
        "border-outline": "#767586",
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
        label: ["IBM Plex Mono", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0px",
        none: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        full: "9999px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
