const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: [
        'Helvetica',
        'Arial',
        'sans-serif',
        ...defaultTheme.fontFamily.sans,
      ],
      serif: [...defaultTheme.fontFamily.serif],
    },
  },
  plugins: [],
}
