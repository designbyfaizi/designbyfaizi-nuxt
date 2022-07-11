import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        bg: "var(--bg)",
        bgSecondary: "var(--bg-secondary)",
        primaryShadow: "var(--shadow)"
      },
    },
    backgroundImage: {
      "dark-mode": "url('/img/general/bgDark.jpg')",
      "light-mode": "url('/img/general/bgLight.jpg')",
    },
  },
});
