// import devtools from '@vue/devtools'

// // @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // devtools.connect(/* host, port */)
//   // (window as any) = devtools
//   // @ts-ignore
//   window.devtools = devtools
// }

import { defineApp } from 'iles'
import 'uno.css'
import '@/assets/css/tailwind.css'
import 'prismjs/themes/prism-tomorrow.css'

// import { headConfig } from '@/plugins/head'
import pinia from '@/plugins/pinia'

export default defineApp({
  enhanceApp({ app }) {
    app.use(pinia)
  },
  head({ frontmatter, site }) {
    return {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/pikaday/pikaday.js',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://cdn.jsdelivr.net/npm/pikaday/css/pikaday.css',
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://cdn.jsdelivr.net/npm/pikaday/css/theme.css',
        },
      ],
    }
    // return headConfig({ frontmatter, site })
  },
})
