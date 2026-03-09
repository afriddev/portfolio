/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        background: "#fafafa",
        foreground: "#1a1a1a",
        accent: "#71717a",
        muted: "#a1a1aa",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in": "slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "spin-slow": "spin 1s linear infinite",
        "pulse-subtle": "pulseSubtle 1.6s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(0.96)" },
        },
      },
    },
  },
  plugins: [],
};
