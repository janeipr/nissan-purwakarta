import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "1rem",
          xl: "0",
        },
      },
      backgroundImage: {
        background1: "url('/images/background/background1.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "portto-light-gold": "#FFE7C2",
        "portto-purple": "#4920E5",
        "portto-black": "#0B0B1B",
        "portto-green": "#12BB74",
        "portto-red": "#E64D56",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideToR: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideToT: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        slideToB: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
