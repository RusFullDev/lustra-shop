/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}', 
    './layouts/**/*.vue', 
    './pages/**/*.vue', 
    './plugins/**/*.{js,ts}', 
    './nuxt.config.{js,ts}', 
    './app.vue'
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
      screens: {
        xl: '1332px',
        '2xl': '1332px',
      }    
    },
    extend: {
      colors:{
        grayn:'#454545',
        foot:'#F2F2F2'
      }
    },
  },
  plugins: [],
}
