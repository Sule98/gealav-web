import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FCDE95',
        secondary: '#DB0000',
        text:'#5B0602',
        // Add additional colors as needed
      },
    },
  },
  variants: {},
  plugins: [],
};
export default config;
