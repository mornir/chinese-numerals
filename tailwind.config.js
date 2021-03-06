module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#DC2626',
      },
      outline: {
        gold: '2px solid #FBBF24',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
