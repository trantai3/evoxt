import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      spacing: {
        init: "initial",
      },
      colors: {
        primary: "#14B8A6",
        secondary: "#1e2024",
        "secondary-light": "#4c515a",
      },
    },
    corePlugins: {
      preflight: false,
    },
    important: true,
  },
} satisfies Config;
