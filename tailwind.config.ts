// Legacy theme retained for reference; the active Tailwind 4 theme lives in globals.css.
const config = {
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
        accent:'#5B0602',
        // Add additional colors as needed
      },
    },
  },
  variants: {},
  plugins: [],
};
export default config;
