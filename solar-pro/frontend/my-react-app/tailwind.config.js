/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#0B1220",
          panel: "#121C33",
          soft: "#1A2740",
        },
        amber: {
          DEFAULT: "#FFB74D",
        },
        solar: {
          DEFAULT: "#FF7A45",
        },
        cyan: {
          glow: "#4FD1C5",
        },
        ink: {
          DEFAULT: "#F5F3EE",
          muted: "#8A93A6",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "dawn-gradient": "linear-gradient(135deg, #FF7A45 0%, #FFB74D 100%)",
        "horizon-fade": "linear-gradient(180deg, #0B1220 0%, #121C33 60%, #1A2740 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(255,183,77,0.45)",
        "glow-cyan": "0 0 30px -6px rgba(79,209,197,0.4)",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        pulseSlow: "pulseSlow 3.5s ease-in-out infinite",
        floatY: "floatY 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
