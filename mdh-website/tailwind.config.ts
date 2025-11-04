/** @type {import('tailwindcss').Config} */
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
        charcoal: '#3B3A39',
        'blush-beige': '#EDD7D2',
        'rose-gold': '#D8A29A',
        'deep-taupe': '#4A4745',
        'warm-mocha': '#8A7665',
        'soft-gold': '#CBB279',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'lg': '16px',
        'md': '8px',
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
