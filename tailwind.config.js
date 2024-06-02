/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#382863',
        "custom-purple2": "#261d47",
        "custom-letter": "#9b87d1",
        "custom-tittle": "#f588e4",
        "custom-letter2": "#8bbae9",
      },
      fontFamily: {
        "embed": ["Teko", "sans-serif"],
        "rubik": ["Rubik Mono One", "monospace"],
        "ruso": ["Russo One", "sans-serif"]
      },
    },
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}
