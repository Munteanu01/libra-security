module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "*.{js,jsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Culori personalizate pentru site
        site: {
          // Culori principale
          primary: "#3B82F6", // Albastru - pentru butoane principale, accente importante
          "primary-hover": "#2563EB", // Albastru mai închis pentru hover
          secondary: "#1F2937", // Gri închis - pentru fundaluri secundare
          accent: "#3B82F6", // Albastru - pentru accente și evidențieri

          // Fundaluri
          "bg-main": "#000000", // Negru - fundalul principal
          "bg-card": "#111827", // Gri foarte închis - pentru carduri
          "bg-card-alt": "#1F2937", // Gri închis - pentru carduri alternative

          // Borduri și separatoare
          "border-light": "#374151", // Gri mediu - pentru borduri vizibile
          "border-subtle": "#1F2937", // Gri închis - pentru borduri subtile

          // Text
          "text-primary": "#FFFFFF", // Alb - pentru text principal
          "text-secondary": "#9CA3AF", // Gri deschis - pentru text secundar
          "text-accent": "#3B82F6", // Albastru - pentru text accentuat

          // Butoane
          "btn-primary": "#3B82F6", // Albastru - pentru butoane principale
          "btn-primary-hover": "#2563EB", // Albastru mai închis - pentru hover pe butoane principale
          "btn-secondary": "#1F2937", // Gri închis - pentru butoane secundare
          "btn-secondary-hover": "#374151", // Gri mediu - pentru hover pe butoane secundare

          // Overlay și umbre
          overlay: "rgba(0, 0, 0, 0.7)", // Negru cu transparență - pentru overlay-uri
          shadow: "rgba(0, 0, 0, 0.5)", // Negru cu transparență - pentru umbre
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
