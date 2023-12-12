/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0891B2",
        primaryDark: "#0e7490",
        danger: "#E02424",
        svgColorLight: "#F9FAFB",
        svgColor: "#9CA3AF",
        svgColorDark: "#6B7280",
        hoverBgColor: "#F3F4F6",
        onlineGreen: "#31C48D",
        offlineRed: "#F05252",
      },
    },
  },
  plugins: [],
};
