module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        beautyParlour: {
          "primary": "#FF1F5A",
          "secondary": "#FFEEEE",
          "accent": "#070A52",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
