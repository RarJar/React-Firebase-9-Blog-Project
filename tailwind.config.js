/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed",
        darkPrimary: "#1e293b",
        darkSecondary: "#334155",
        darkCard: "#1f2937",
      },
    },
  },
  plugins: [],
};
