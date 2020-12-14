const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      "spr-white": "#fff",
      "spr-black": "#191e1e",
      "spr-gray-dark": "#333",
      "spr-blue": "#086dc3",
      "spr-green": "#6bb536",
      "spr-green-light": "#ebf2f2",
    },
    fontFamily: {
      "open-sans": ["Open Sans", "sans-serif"],
      metro: ["Metropolis", "sans-serif"],
      helvetica: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
