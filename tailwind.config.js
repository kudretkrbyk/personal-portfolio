/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff014f",
        secondary: "#1e2125",
        dark: "#212428",
        "card-dark": "#1e2024",
        "border-color": "#262a2e",
        "body-color": "#878e99",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        'card': '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
      },
    },
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html',
    ],
    options: {
      safelist: [],
      blocklist: [],
      keyframes: true,
      fontFace: true,
    },
  },
}
