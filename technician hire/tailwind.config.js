/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*html"],
  theme: {
    extend: {},
  },
   safelist: [
    "top-[64px]",
    "top-[-100%]"
  ],
  plugins: [],
}

