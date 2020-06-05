module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
        require("tailwind-heropatterns")({
      // as per tailwind docs you can pass variants
      variants: [],

      // the list of patterns you want to generate a class for
      // the names must be in kebab-case
      // an empty array will generate all 87 patterns
      patterns: ["graph-paper", 'temple', 'tiny-checkers'],

      // The foreground colors of the pattern
      colors: {
        default: "#3182CE",
        "blue-100" : "#EBF8FF",
        "blue-200" : "#BEE3F8",
        "blue-300" : "#90CDF4",
        "blue-400" : "#63B3ED",
        "blue-500" : "#4299E1",
        "blue-600" : "#3182CE",
        "blue-700" : "#2B6CB0",
        "blue-800" : "#2C5282",
        "blue-900" : "#2A4365",
      },

      // The foreground opacity
      opacity: {
        default: "0.4",
        "100": "1.0",
        "60": "0.6",
        "50": "0.5",
        "30": "0.3",
        "20": "0.2"
      }
    })
  ]
}
