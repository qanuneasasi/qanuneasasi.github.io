/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // Disable Tailwind's reset to avoid conflicts with Docusaurus
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './docs/**/*.{md,mdx}',
    './blog/**/*.{md,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      // Persian/Iranian inspired color palette
      colors: {
        persian: {
          50: '#fef7ee',
          100: '#fcedd8',
          200: '#f8d7af',
          300: '#f3bb7d',
          400: '#ed9548',
          500: '#e87725',
          600: '#d95d1b',
          700: '#b44518',
          800: '#90381b',
          900: '#743019',
          950: '#3f160b',
        },
        turquoise: {
          50: '#effefb',
          100: '#c8fff4',
          200: '#91ffea',
          300: '#52f7dd',
          400: '#1ee4c9',
          500: '#05c8b0',
          600: '#00a191',
          700: '#058076',
          800: '#0a655f',
          900: '#0d544f',
          950: '#003332',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
      },
      // Typography for Persian/Arabic text
      fontFamily: {
        sans: [
          'Vazirmatn',
          'Tahoma',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'Noto Naskh Arabic',
          'Traditional Arabic',
          'serif',
        ],
        mono: [
          'Fira Code',
          'Consolas',
          'monospace',
        ],
      },
      // RTL-aware spacing utilities
      spacing: {
        'article': '2rem',
        'section': '4rem',
      },
      // Reading line length for Persian
      maxWidth: {
        'prose-fa': '70ch',
        'prose-en': '65ch',
      },
      // Persian typography scale
      fontSize: {
        'article-title': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        'article-body': ['1.125rem', { lineHeight: '2', letterSpacing: '0' }],
        'article-meta': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0' }],
      },
    },
  },
  plugins: [
    // RTL plugin
    function({ addUtilities, addBase }) {
      // RTL utility classes
      addUtilities({
        '.flip-rtl': {
          '[dir="rtl"] &': {
            transform: 'scaleX(-1)',
          },
        },
        '.text-start': {
          textAlign: 'start',
        },
        '.text-end': {
          textAlign: 'end',
        },
        '.float-start': {
          float: 'inline-start',
        },
        '.float-end': {
          float: 'inline-end',
        },
        '.border-start': {
          borderInlineStartWidth: '1px',
        },
        '.border-end': {
          borderInlineEndWidth: '1px',
        },
        '.ps-4': {
          paddingInlineStart: '1rem',
        },
        '.pe-4': {
          paddingInlineEnd: '1rem',
        },
        '.ms-4': {
          marginInlineStart: '1rem',
        },
        '.me-4': {
          marginInlineEnd: '1rem',
        },
      });

      // Base styles for Persian typography
      addBase({
        ':lang(fa)': {
          fontFamily: 'Vazirmatn, Tahoma, Arial, sans-serif',
          lineHeight: '2',
        },
        ':lang(fa) h1, :lang(fa) h2, :lang(fa) h3': {
          lineHeight: '1.4',
        },
      });
    },
  ],
};
