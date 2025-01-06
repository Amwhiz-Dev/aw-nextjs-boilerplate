import type { Config } from "tailwindcss";

export default {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color-bg)",
        background: "var(--secondary-color-bg)",
        menu: "var(--menu-color-bg)",
        active: "var(--active-color",
        menuSection: "var(--menu-section-bg)",
        filledColor: "var(--filled-color)",
        filledTextColor: "var(--filled-text-Color)",
        pending: "var(--pending-Color)",
        unfilledColor: "var(--unfilled-color)",
        error: "var(--error-text-color)",
        importantText: "var(--important-text-color)",
        userProfile: "var( --user-profile-color)",
        validColor: "var( --valid-color)",
        divideColor: "var( --divide-color)",
        emailColor: "var( --email-color)",
        teritaryColor: "var( --teritary-color-bg)",
        textSecondary: "var(----secondary-text-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
