/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // Desktop-width screens that are short (e.g. 1366×768, 1536×864): compact the one-screen layouts
        short: { raw: "(min-width: 1024px) and (max-height: 880px)" },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          '"Bricolage Grotesque"',
          '"IBM Plex Sans"',
          "ui-sans-serif",
          "sans-serif",
        ],
      },
      colors: {
        page: "var(--page)",
        tile: "var(--tile)",
        "tile-hover": "var(--tile-hover)",
        edge: "var(--edge)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        signal: "var(--signal)",
        sky: { glow: "var(--sky)" },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "cell-in": {
          from: { opacity: "0", transform: "scale(0.4)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-14deg)" },
          "75%": { transform: "rotate(14deg)" },
        },
      },
      animation: {
        "cell-in": "cell-in 420ms cubic-bezier(0.22, 1, 0.36, 1) both",
        wiggle: "wiggle 500ms ease-in-out",
      },
    },
  },
  plugins: [],
};
