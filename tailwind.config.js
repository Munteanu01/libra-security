module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "*.{js,jsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
        "site-text-primary": "#ffffff",
        border: "#2e3748", // Bordură albastru închis
        input: "#1e293b", // Fundal input albastru foarte închis
        ring: "#3b82f6", // Albastru pentru focus (păstrat)
        background: "#0f172a", // Fundal principal negru-albăstrui închis
        foreground: "#f8fafc", // Text alb cu tentă albăstruie
        primary: {
          DEFAULT: "#3b82f6", // Albastru pentru accente (păstrat)
          foreground: "#ffffff", // Text alb pentru accente
        },
        secondary: {
          DEFAULT: "#1e40af", // Albastru închis
          foreground: "#ffffff", // Text alb pentru secundar
        },
        destructive: {
          DEFAULT: "#ef4444", // Roșu pentru acțiuni distructive (păstrat)
          foreground: "#ffffff", // Text alb pentru acțiuni distructive
        },
        muted: {
          DEFAULT: "#1e293b", // Albastru închis pentru elemente mai puțin importante
          foreground: "#94a3b8", // Gri-albastru pentru text secundar
        },
        accent: {
          DEFAULT: "#60a5fa", // Albastru deschis pentru accente
          foreground: "#0f172a", // Text închis pentru accente deschise
        },
        card: {
          DEFAULT: "#1e293b", // Fundal pentru carduri - albastru închis
          foreground: "#f8fafc", // Text pentru carduri
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};