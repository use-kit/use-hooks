import { defineConfig } from 'vitepress'
import { getFunctionsSideBar } from './utils'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Use Hooks',

  appearance: 'dark',

  description: 'Collection of Utility Functions',

  markdown: {
    theme: {
      dark: 'dracula-soft',
      light: 'vitesse-light',
    },

    attrs: {
      leftDelimiter: '%{',
      rightDelimiter: '}%',
    },
  },

  themeConfig: {
    logo: '/use.svg',

    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Hooks', link: '/core/useFormatDate/' },
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'How to use', link: '/guide' },
        ],
      },
      ...getFunctionsSideBar(),
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/use-kit/use-hooks' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT Akashi Sai',
    },
  },

  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/use-32x32.svg', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/use.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Akashi Sai' }],
  ],
})
