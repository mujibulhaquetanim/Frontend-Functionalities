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
        grayishBlack: "#262626",
        grayish: "#808080",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
      },
      keyframes: {
        bounceCustom: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      // Map keyframes to custom animation names
      animation: {
        bounceCustom: 'bounceCustom 1s ease-in-out infinite',
        fadeIn: 'fadeIn 2s ease-in forwards',
      },
  },
},
  plugins: [],
};
export default config;
