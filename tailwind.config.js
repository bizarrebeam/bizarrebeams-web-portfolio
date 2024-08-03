/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'top-gradient': 'linear-gradient(to bottom, #B6D0EB, #FFFFFF)',
        'bottom-gradient': 'linear-gradient(to top, #B6D0EB, #FFFFFF)'
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}