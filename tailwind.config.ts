// tailwind.config.ts
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            hr: { display: "none" }, // menghilangkan <hr>
            "h1, h2, h3, h4": {
              borderBottom: "none", // jika ada garis dari heading
              paddingBottom: "0",
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
