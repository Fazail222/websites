// tailwind.config.js
module.exports = {
  content: ["./public/*html"], // your file paths
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ['"Roboto Condensed"', 'sans-serif'],
        FjallaOne:['"Fjalla One"'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        float: 'float 1s ease-in-out infinite',
      }
    }
  },
  plugins: [],
}


