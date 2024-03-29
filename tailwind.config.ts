import {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} from './themes/pg-tailwindcss/tokens.mjs'

import { safelist } from './src/utils/colors'

export default {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@pinegrow/tailwindcss-plugin').default({
      colors: pg_colors, // primary, secondary etc
      fonts: pg_fonts,
      backgrounds: pg_backgrounds, // bg-design-image, bg-design-image-large
    }),
    require('daisyui'),
  ],

  daisyui: {
    base: false,
    themes: [
      {
        mytheme: {
          primary: pg_colors.primary[500],
          secondary: pg_colors.secondary[500],
          // accent: '#37cdbe',
          // neutral: '#3d4451',
          'base-100': '#ffffff',
        },
      },
    ],
  },

  safelist,

  /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
  get content() {
    const _content = [
      './index.html',
      './src/**/*.{html,vue,svelte,astro,js,cjs,ts,cts,mts,jsx,tsx,md,mdx}',
    ]
    return process.env.NODE_ENV === 'production'
      ? _content
      : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
  },
}
