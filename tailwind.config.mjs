/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,tsx,mdx,md}'],
  theme: {
    extend: {
      colors: {
        bg: '#05060a',
        panel: '#0b0e17',
        ink: '#dbf3ff',
        dim: '#8aa4b0',
        neon: '#00ffe1',
        violet: '#b388ff',
        accent: '#ff2bd1'
      }
    }
  },
  plugins: []
}
