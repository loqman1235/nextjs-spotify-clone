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
        background: "var(--bg-color)",
        foreground: "var(--foreground-color)",
        "foreground-light": "var(--foreground-light-color)",
        "foreground-lighter": "var(--foreground-lighter-color)",
        "foreground-lighter-hover": "var(--foreground-lighter-hover-color)",
        accent: "var(--accent-color)",
        "primary-text": "var(--primary-text-color)",
        "secondary-text": "var(--secondary-text-color)",
      },
    },
  },
  plugins: [],
};
export default config;
