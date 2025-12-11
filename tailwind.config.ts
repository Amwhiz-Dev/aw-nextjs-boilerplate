import type { Config } from "tailwindcss";

const config: Config = {
  // important: true,
  // content: [
  //   "./src/**/*.{js,ts,jsx,tsx}", // This already covers all src/*
  //   "./pages/**/*.{js,ts,jsx,tsx}",
  //   "./app/**/*.{js,ts,jsx,tsx}",
  // ],
  // content: ["./src/**/*.{js,ts,jsx,tsx}", "./**/*.{js,ts,jsx,tsx}"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // all source files
    "./src/components/**/*.{js,ts,jsx,tsx}", // make sure UI components explicitly included
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary-color)",
          text: "var(--primary-color-text)",
          bgLight: "var(--primary-color-light)",
          menu: "var(--menu-grup-light)",
          mid: "var(--primary-color-mid)",
        },
        text: {
          DEFAULT: "var(--text-color)",
          secondary: "var(--text-color-secondary)",
        },
        surface: {
          a: "var(--surface-a)",
          b: "var(--surface-b)",
          c: "var(--surface-c)",
          d: "var(--surface-d)",
          e: "var(--surface-e)",
          f: "var(--surface-f)",
          0: "var(--surface-0)",
          50: "var(--surface-50)",
          100: "var(--surface-100)",
          200: "var(--surface-200)",
          300: "var(--surface-300)",
          400: "var(--surface-400)",
          500: "var(--surface-500)",
          600: "var(--surface-600)",
          700: "var(--surface-700)",
          800: "var(--surface-800)",
          900: "var(--surface-900)",
          ground: "var(--surface-ground)",
          section: "var(--surface-section)",
          card: "var(--surface-card)",
          overlay: "var(--surface-overlay)",
          border: "var(--surface-border)",
          hover: "var(--surface-hover)",
        },
        gray: {
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
          700: "var(--gray-700)",
          800: "var(--gray-800)",
          900: "var(--gray-900)",
        },
        highlight: {
          bg: "var(--highlight-bg)",
          text: "var(--highlight-text-color)",
        },
        mask: "var(--maskbg)",
      },
      spacing: {
        content: "var(--content-padding)",
        inline: "var(--inline-spacing)",
      },
      boxShadow: {
        focus: "var(--focus-ring)",
      },
    },
  },
  plugins: [],
};

export default config;
