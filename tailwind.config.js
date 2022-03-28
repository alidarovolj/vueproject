module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mapIcon': '#40baf7',
        'secondBG': '#f7f7f7',
        'or': '#ffdcbc',
        'mainCol': '#fc6b3f',
        'grayText': '#737171'
      },
      width: {
        '79': '79%',
        '19': '19%'
      }
    },
  },
  plugins: [],
}