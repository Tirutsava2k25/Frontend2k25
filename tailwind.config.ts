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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'ComingSoon-bg': "url('/images/comingSoon/nat-dA0-qxdbyyY-unsplash 1.png')",
      }
    },
    screens:{
      'xs': '515px',
    },
  },
  plugins: [],
};
export default config;
