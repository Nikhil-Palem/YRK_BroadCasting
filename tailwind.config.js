/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#FF8A00",       // ORANGE (Lovable)
        muted: "#F6F7F9",           // Light background
        border: "#E5E7EB",          // Soft gray
        foreground: "#111827",      // Text dark
        "muted-foreground": "#6B7280",
      },
    },
  },
  plugins: [],
};
