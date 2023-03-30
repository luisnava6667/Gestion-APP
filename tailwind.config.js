/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inte', 'sans-serif']
      },
      backgroundColor: {
        home: ['#111017'],
        button: ['#252836']
      },
      gradients: {
        circle: [
          'circle at center',
          'rgba(0,0,0,0) 0%',
          'rgba(0,0,0,0.7) 100%)'
        ]
      },
      colors: {
        primary: '#252836',
        secondary: '#111017',
        tertiary: '#1F1F2E',
        quaternary: '#2F2F3E',
        quinary: '#3F3F4E',
      }
    }
  },
  plugins: []
}
