/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060A13',
          900: '#0A0F1D',
          850: '#0E162A',
          800: '#131D38',
          700: '#1D2B4F',
          600: '#2A3C6A',
        },
        accent: {
          blue: '#2563EB',
          sky: '#0284C7',
          cyan: '#06B6D4',
          emerald: '#10B981',
          amber: '#F59E0B',
          purple: '#8B5CF6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(37, 99, 235, 0.25)',
        'glow-md': '0 0 25px -5px rgba(6, 182, 212, 0.25)',
        'glow-lg': '0 0 40px -10px rgba(37, 99, 235, 0.3)',
      }
    },
  },
  plugins: [],
}
