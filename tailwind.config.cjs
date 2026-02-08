/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0C6CF2',
          blueDark: '#0A58C4',
          yellow: '#FFD54F',
          navy: '#0B1D3A',
          sky: '#E9F3FF',
        },
      },
      fontFamily: {
        display: ['Manrope', 'Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px rgba(12, 108, 242, 0.25)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at 20% 20%, rgba(255,213,79,0.12) 0, transparent 28%), radial-gradient(circle at 80% 10%, rgba(12,108,242,0.15) 0, transparent 25%), radial-gradient(circle at 70% 70%, rgba(12,108,242,0.12) 0, transparent 30%), linear-gradient(135deg, rgba(12,108,242,0.18) 0%, rgba(11,29,58,0.9) 60%, rgba(10,88,196,0.95) 100%)',
      },
    },
  },
  plugins: [],
};
