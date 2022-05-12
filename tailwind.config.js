module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-banner': "url('/src/images/bg.png')",
        'form-background': "url('/src/images/appointment.png')",
        'footer-background': "url('/src/images/footer.png')",
        'chair-background': "url('/src/images/bg-chair.png')",
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
          neutral: "#939393",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
