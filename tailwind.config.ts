import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "buttonBackground": "#141414",
        "linkBackground": "var(--Grey-08, #141414);"
      },
      borderColor: {
        "linkBorder": "var(--Grey-15, #262626)"
      },
      screens: {
        "3xl": "1736px"
      }
    },
  },
  plugins: [],
};
export default config;
