module.exports = {
  purge: {
    content: ["*.{html}"],
  },
  theme: {
    extend: {
      animation: {
        'spin-slowest': 'spin 87s linear infinite',
        'spin-slower': 'spin 66s linear infinite',
        'spin-slow': 'spin 48s linear infinite',
        'spin-medium': 'spin 33s linear infinite',
        'spin-fast': 'spin 21s linear infinite',
        'spin-faster': 'spin 12s linear infinite',
        'spin-fastest': 'spin 6s linear infinite',
      }
    },
  },
  plugins: [],
}
