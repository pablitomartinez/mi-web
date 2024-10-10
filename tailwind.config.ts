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
        primary: "#181818", // Negro profundo
        secondary: "#1f51ff", // Azul neón
        background: "#ffffff", // Blanco puro
        text: "#9ca3af", // Gris claro
        accent: "#ff9505", // Naranja fuerte
      },
    },
  },
  plugins: [],
};

export default config;
