import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whitish: "#fff4f2",
        ashish: "#49557e",
        tomato: "#ff6347",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
};
export default config;
