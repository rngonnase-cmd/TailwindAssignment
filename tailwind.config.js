module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      // optional: custom shadows if you want named tokens
      boxShadow: {
        'hero-lg': '0 40px 80px rgba(11,12,30,0.08)',
        'card-lg': '0 30px 60px rgba(11,12,30,0.08)',
        'band-sm': '0 20px 40px rgba(11,12,30,0.03)',
      }
    }
  },
  plugins: [],
}
