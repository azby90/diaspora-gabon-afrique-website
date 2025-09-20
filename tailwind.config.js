/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Charte graphique officielle bicolore
        white: "#FFFFFF",
        'light-gray': "#EAEAEA",
        'soft-gray': "#F1F1F1",
        primary: {
          DEFAULT: "#0A7A3B", // Vert principal
          50: "#E8F5ED",
          100: "#D1EADB",
          200: "#A3D5B7",
          300: "#75C093",
          400: "#47AB6F",
          500: "#0A7A3B", // Couleur principale
          600: "#085E2D",
          700: "#06431F",
          800: "#042811",
          900: "#020D03",
        },
        // Palette de gris neutre pour textes et bordures
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};