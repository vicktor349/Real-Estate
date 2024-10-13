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
        "linkBackground": "var(--Grey-08, #141414)",
        "background": "var(--Grey-15, #262626)",
        "secondaryButtonBackground": "var(--Purple-60, #703BF7)",
        "gradientBackground": "linear-gradient(238deg, #2A213F 8.76%, rgba(25, 25, 25, 0.00) 50.09%), url('/images/herobannerimage.svg') lightgray 50% / cover no-repeat;"
      },
      borderColor: {
        "linkBorder": "var(--Grey-15, #262626)"
      },
      screens: {
        "3xl": "1736px",
        "ssm": "480px",
        "sssm:": "360px"
      }
    },
  },
  plugins: [],
};
export default config;
