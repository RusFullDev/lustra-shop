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
      padding: '2rem',    
    },
    extend: {
      colors:{
        grayn:'#454545'
      }
    },
  },
  plugins: [],
}
