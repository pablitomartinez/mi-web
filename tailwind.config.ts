import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Paleta de colores personalizada basada en el logo
      colors: {
        primary: "#1A2B4C", // Azul oscuro del fondo
        secondary: "#0070F3", // Azul brillante del acento
        background: "#F5F5F5", // Fondo claro para mantener legibilidad
        text: "#D4CBB8", // Beige del texto
        accent: "#00A3E0", // Acento adicional para resaltar (derivado del azul)
      },
      // Tipografía personalizada
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // Fuente principal para el texto
        heading: ["Montserrat", "Helvetica", "sans-serif"], // Fuente para títulos y encabezados
      },
      // Espaciado personalizado
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      // Bordes y sombras personalizados
      boxShadow: {
        "custom-light": "0 0 10px rgba(255, 255, 255, 0.2)",
        "custom-dark": "0 0 20px rgba(0, 0, 0, 0.9)",
      },
      borderRadius: {
        "4xl": "2rem", // Bordes redondeados grandes
      },
    },
    // Breakpoints personalizados
    screens: {
      sm: "480px", // Pantallas pequeñas
      md: "768px", // Tablets
      lg: "976px", // Laptops
      xl: "1440px", // Pantallas grandes
      "2xl": "1600px", // Pantallas muy grandes
    },
  },
  plugins: [],
};

export default config;
