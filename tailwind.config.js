module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 9s linear infinite',
        'spin-medium': 'spin 6s linear infinite',
        'spin-fast': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
