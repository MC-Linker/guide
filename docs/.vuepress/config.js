import { description } from '../../package.json';
import { defaultTheme, defineUserConfig } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';

export default defineUserConfig({
  lang: 'en-US',
  title: 'MC Linker Guide',
  description: description,
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#729e34' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'og:title', content: 'MC Linker Guide' }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://guide.mclinker.com/' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:image', content: '/logo.svg' }],
  ],
  theme: defaultTheme({
    repo: 'MC-Linker',
    docsRepo: 'MC-Linker/guide',
    docsBranch: 'main',
    docsDir: 'docs',
    logo: '/logo.svg',
    navbar: [
      {
        'text': 'Home',
        'link': '/',
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          collapsible: false,
          children: ['README.md', 'using-vue', 'config', 'discord'],
        },
      ],
    },
  }),
  plugins: [
    searchPlugin({}),
  ],
});
