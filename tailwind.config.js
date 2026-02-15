/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          950: "#0A0A0A",
          900: "#111111",
          800: "#1A1A1A",
          700: "#2A2A2A",
          600: "#3A3A3A",
          500: "#555555",
        },
        bone: {
          DEFAULT: "#F0EBE3",
          100: "#FAF8F5",
          200: "#F0EBE3",
          300: "#E0D8CC",
        },
        gold: {
          DEFAULT: "#B8A078",
          light: "#D4C4A8",
          dark: "#8A7050",
          muted: "#9E8E6E",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Outfit"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        ultra: "0.35em",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "line-grow": "lineGrow 1.2s ease-out forwards",
        "reveal": "reveal 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        lineGrow: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
