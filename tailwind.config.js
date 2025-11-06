/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        kite: {
          bg: '#0f1114',
          panel: '#13161a',
          text: '#d1d5db',
          muted: '#9aa3af',
          green: '#38d39f',
          red: '#ff6b6b',
          border: '#1f2430'
        }
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.2)'
      }
    }
  },
  plugins: []
};


