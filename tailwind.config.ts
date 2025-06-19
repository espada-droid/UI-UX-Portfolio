import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html", // Include root HTML for Tailwind class detection
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#070c14",
        foreground: "#ebf0f7",
        primary: {
          DEFAULT: "#93b5e3",
          foreground: "#070c14",
        },
        secondary: {
          DEFAULT: "#1a4888",
          foreground: "#ebf0f7",
        },
        accent: {
          DEFAULT: "#317de5",
        },
        card: {
          DEFAULT: "#0d1930",
          foreground: "#ebf0f7",
        },
        border: "#1a4888",
        muted: {
          DEFAULT: "#1a488899",
          foreground: "#ebf0f7",
        },
        destructive: "#FC0019",
      },
      fontFamily: {
        sans: ['"Inter"', '"DM Sans"', "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        retro: "0 0 20px 0 #317de555, 0 0 48px 0 #1a488844",
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 8px #317de566, 0 0 24px #ebf0f72f",
          },
          "50%": {
            boxShadow: "0 0 16px #317de5aa, 0 0 32px #93b5e399",
          },
        },
        pulseglow: {
          "0%, 100%": {
            filter: "drop-shadow(0 0 0 #317de5AA)",
          },
          "50%": {
            filter: "drop-shadow(0 0 14px #317de5BB)",
          },
        },
      },
      animation: {
        glow: "glow 2.2s ease-in-out infinite",
        pulseglow: "pulseglow 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
