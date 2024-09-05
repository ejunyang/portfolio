/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        label_light: "#B9B9B9",
        label_normal: "#242424",
        label_main: "#003F9D",

        normal: "#3C8AFF",
        deep: "#165CC6",
        keyword: "#003C98",
      },
    },
  },
  plugins: [],
};
