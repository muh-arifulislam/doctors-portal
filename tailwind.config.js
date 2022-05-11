module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-banner': "url('/src/images/bg.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },

  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "rgba(15, 207, 236, 1)",
          secondary: "rgba(25, 211, 174, 1)",
          accent: "rgba(58, 66, 86, 1)",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
