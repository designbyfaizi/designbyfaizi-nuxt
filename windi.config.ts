import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        color: "var(--main)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        bg: "var(--bg)",
        bgSecondary: "var(--bg-secondary)",
      },
    },
    backgroundImage: {
      "dark-mode": "url('/img/general/bgDark.jpg')",
      "light-mode": "url('/img/general/bgLight.jpg')",
    },
  },
});
